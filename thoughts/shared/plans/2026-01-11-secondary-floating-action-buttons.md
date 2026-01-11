# Secondary Floating Action Buttons Implementation Plan

## Overview

Add support for secondary floating action buttons (mini FABs) that appear stacked vertically above the primary FAB. Secondary FABs are 40px (vs 56px primary), include optional hover labels that slide in from the right, and animate with a subtle stagger effect. This enables "speed dial" patterns where users can access related actions from a single FAB cluster.

## Current State Analysis

The FloatingActionButton component currently supports only a single FAB per context:

- **Provider state**: `useState<FabProps | undefined>()` (single FAB)
- **Context interface**: `setButton(props: FabProps | undefined)` (singular)
- **Rendering**: Single `FloatingActionButtonInternal` component
- **Positioning**: Fixed at `bottom: 20px, right: 20px` (76px on mobile with menu)
- **Size**: 56px × 56px circular button
- **Animation**: 0.3s scale transition with 0.2s entrance delay

**Key constraint**: The registration flow (`setButton`) only handles one FAB at a time, replacing the previous one when a new page mounts.

### Key Discoveries:

- Existing context pattern at `src/components/FloatingActionButton/_FloatingActionButton.context.ts:13-16`
- Provider renders single FAB at `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx:24-34`
- Mobile offset logic at `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx:68`
- Similar stacking pattern in Notifications component (`src/components/Notifications/Notifications.component.tsx`)
- Hover label pattern in LiveListRow (`src/components/LiveList/_LiveListRow.tsx:92-101`)

## Desired End State

After implementation, developers can use secondary FABs like this:

```typescript
<FloatingActionButton.Provider>
  <MinimalMenu.Page>
    <FloatingActionButton icon={faPlus} onClick={handleCreate} />

    <FloatingActionButton.Secondary
      icon={faEdit}
      label="Edit"
      onClick={handleEdit}
    />
    <FloatingActionButton.Secondary
      icon={faShare}
      label="Share"
      onClick={handleShare}
      variant="secondary"
    />
  </MinimalMenu.Page>
</FloatingActionButton.Provider>
```

**Visual result**:
- Primary FAB (56px) at bottom-right
- 1st secondary FAB (40px) at 84px from bottom
- 2nd secondary FAB (40px) at 132px from bottom
- Entrance: Primary appears (0.2s delay), then secondaries stagger in (0.25s, 0.30s)
- Hover over secondary: Label slides in from right with smooth spring animation

### Verification:

- [ ] Secondary FABs render above primary with correct spacing
- [ ] Animations stagger correctly (50ms between each)
- [ ] Hover labels appear and disappear smoothly
- [ ] Mobile offset applies to all FABs when menu present
- [ ] TypeScript compilation succeeds with new interfaces
- [ ] Storybook stories demonstrate the feature

## What We're NOT Doing

- **Nested children pattern**: Not making secondary FABs children of primary (`<FloatingActionButton><Secondary /></FloatingActionButton>`)
- **Dynamic primary size**: Primary stays 56px, not making it resizable
- **Label positioning options**: Labels only appear to the left of mini FABs, no top/bottom/right options
- **Collapsible/expandable behavior**: All FABs visible when registered, no expand/collapse toggle
- **Touch gestures**: Not adding swipe or long-press interactions
- **Different z-index per FAB**: All FABs share z-index 5
- **Mobile-specific mini FAB sizes**: 40px on all screen sizes
- **Label truncation**: Assuming labels are short; no ellipsis or multi-line support
- **Primary FAB labels**: Only secondary FABs get hover labels

## Implementation Approach

We'll extend the existing Provider pattern to manage multiple FABs while maintaining backward compatibility:

1. **Separate state** for primary and secondaries (avoids confusion about which is primary)
2. **Shared registration context** so both components use the same Provider
3. **Separate internal components** (FloatingActionButtonInternal vs MiniFabInternal) for different sizes
4. **Array-based secondary registration** to support multiple secondaries
5. **Bottom position calculation** based on FAB index and mobile state

This approach keeps the primary FAB API unchanged while adding `FloatingActionButton.Secondary` as a new sibling component.

---

## Phase 1: Update Context & Types

### Overview

Extend the context interface to support both a primary FAB and an array of secondary FABs. Add the `SecondaryFabProps` interface with label support.

### Changes Required:

#### 1. Add SecondaryFabProps Interface

**File**: `src/components/FloatingActionButton/_FloatingActionButton.context.ts`

**Changes**: Add new interface after FabProps definition

```typescript
export interface FabProps {
  id: string;
  icon: IconDefinition | null;
  onClick: () => void;
  variant?: ColourVariant;
  dataTestId?: string;
}

// Add this new interface:
export interface SecondaryFabProps {
  id: string;
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
  label?: string;
  dataTestId?: string;
}
```

**Note**: `icon` is required (not nullable) for secondary FABs

#### 2. Update Context Interface

**File**: `src/components/FloatingActionButton/_FloatingActionButton.context.ts`

**Changes**: Replace `setButton` with separate setters for primary and secondary

```typescript
interface FloatingActionButtonContextProps {
  contextExists: boolean;
  setPrimaryButton: (props: FabProps | undefined) => void;
  setSecondaryButtons: (buttons: SecondaryFabProps[]) => void;
}

const FloatingActionButtonContext = createContext<FloatingActionButtonContextProps>({
  contextExists: false,
  setPrimaryButton: () => {},
  setSecondaryButtons: () => {},
});
```

### Success Criteria:

#### Automated Verification:
- [x] TypeScript compilation succeeds: `npm run typecheck`
- [x] No ESLint errors: `npm run lint`
- [x] Existing FAB stories still compile (no runtime yet)

#### Manual Verification:
- [ ] Code review confirms interface changes are clear and well-typed
- [ ] No breaking changes to existing FabProps interface

**Implementation Note**: After completing this phase and automated verification passes, the code won't run yet (context and provider are out of sync). That's expected - we fix it in Phase 2.

---

## Phase 2: Update Provider State

### Overview

Modify the provider to maintain separate state for primary and secondary FABs, and update the context value to provide both setter functions.

### Changes Required:

#### 1. Update Provider State

**File**: `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx`

**Changes**: Replace single fab state with primary + secondaries

```typescript
const FloatingActionButtonProvider = ({ children }: FloatingActionButtonProviderProps) => {
  // Replace: const [fab, setFab] = useState<FabProps | undefined>();
  // With:
  const [primaryFab, setPrimaryFab] = useState<FabProps | undefined>();
  const [secondaryFabs, setSecondaryFabs] = useState<SecondaryFabProps[]>([]);

  const contextVal = useMemo(
    () => ({
      contextExists: true,
      setPrimaryButton: setPrimaryFab,
      setSecondaryButtons: setSecondaryFabs,
    }),
    [], // Empty deps - setters are stable
  );

  return (
    <FloatingActionButtonContext.Provider value={contextVal}>
      {children}
      <AnimatePresence>
        {primaryFab?.icon && (
          <FloatingActionButtonInternal
            key={primaryFab.id}
            icon={primaryFab.icon}
            onClick={primaryFab.onClick}
            variant={primaryFab.variant}
            data-testid={primaryFab.dataTestId}
          />
        )}
      </AnimatePresence>
    </FloatingActionButtonContext.Provider>
  );
};
```

**Note**: Secondary rendering will be added in Phase 3 after MiniFabInternal exists

### Success Criteria:

#### Automated Verification:
- [x] TypeScript compilation succeeds: `npm run typecheck`
- [x] No ESLint errors: `npm run lint`
- [x] Existing Storybook stories render: `npm run storybook`

#### Manual Verification:
- [ ] Primary FAB still appears in existing stories
- [ ] No console errors in Storybook
- [ ] Provider correctly updates primary FAB when switching between pages

**Implementation Note**: After this phase, the primary FAB should work exactly as before. Secondary FABs aren't rendered yet.

---

## Phase 3: Create Mini FAB Internal Component

### Overview

Create the MiniFabInternal component for rendering 40px secondary FABs with hover labels and stagger animations. Update the provider to render secondary FABs using this new component.

### Changes Required:

#### 1. Add Mini FAB Styled Component

**File**: `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx`

**Changes**: Add after existing FloatingButton styled component

```typescript
// After FloatingButton definition (around line 34):

const MiniFabContainer = styled(motion.div)<{ bottom: number }>`
  position: fixed;
  bottom: ${(props) => props.bottom}px;
  right: 20px;
  z-index: ${zIndexConstants.floatingActionButton};
`;

const MiniFabButton = styled(motion.button)<{ variant: ColourVariant }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};
  color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
  }
`;

const FabLabel = styled(motion.div)`
  position: absolute;
  right: 52px; // 40px mini FAB + 12px gap
  top: 50%;
  transform: translateY(-50%);

  padding: 6px 12px;
  border-radius: 4px;

  background-color: ${(props) => props.theme.colours.tertiary.main};
  color: ${(props) => props.theme.colours.defaultFont};

  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  font-weight: ${(props) => props.theme.fonts.default.weight};

  white-space: nowrap;
  pointer-events: none;
  box-shadow: ${(props) => props.theme.shadows.medium};
`;
```

#### 2. Add Mini FAB Internal Component

**File**: `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx`

**Changes**: Add new component after FloatingActionButtonInternal

```typescript
interface MiniFabInternalProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'bottom': number;
  'staggerDelay': number;
  'data-testid'?: string;
}

const MiniFabInternal = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  bottom,
  staggerDelay,
  'data-testid': dataTestId,
}: MiniFabInternalProps) => {
  const [showLabel, setShowLabel] = React.useState(false);
  const { contextExists } = useContext(FloatingActionButtonContext);

  const miniFabVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: staggerDelay,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.3,
        delay: staggerDelay,
      },
    },
    hover: { scale: 1.15 },
    tap: { scale: 0.9 },
  };

  const labelVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <MiniFabContainer
      bottom={bottom}
      initial={contextExists ? 'hidden' : 'visible'}
      animate='visible'
      exit='exit'
      variants={miniFabVariants}
      onHoverStart={() => setShowLabel(true)}
      onHoverEnd={() => setShowLabel(false)}
    >
      <MiniFabButton
        whileHover='hover'
        whileTap='tap'
        variants={miniFabVariants}
        onClick={onClick}
        variant={variant}
        data-testid={dataTestId}
      >
        <FontAwesomeIcon icon={icon} />
      </MiniFabButton>

      <AnimatePresence>
        {showLabel && label && (
          <FabLabel
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={labelVariants}
            transition={{ type: 'spring', duration: 0.3 }}
          >
            {label}
          </FabLabel>
        )}
      </AnimatePresence>
    </MiniFabContainer>
  );
};

export default FloatingActionButtonInternal;
// Add this export:
export { MiniFabInternal };
```

#### 3. Add Bottom Position Calculator

**File**: `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx`

**Changes**: Add helper function at top of file

```typescript
// Add after imports:
const calculateBottomPosition = (index: number, offsetBottom: boolean): number => {
  const baseOffset = offsetBottom ? 76 : 20;
  const primarySize = 56;
  const miniSize = 40;
  const gap = 8;

  if (index === 0) {
    // First secondary: base + primary + gap
    return baseOffset + primarySize + gap;
  }

  // Subsequent secondaries: previous position + mini size + gap
  return baseOffset + primarySize + gap + index * (miniSize + gap);
};
```

#### 4. Update Provider to Render Secondary FABs

**File**: `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx`

**Changes**: Import MiniFabInternal and render secondary FABs

```typescript
// Add import:
import FloatingActionButtonInternal, { MiniFabInternal } from './_FloatingActionButton.internal';

// Update return to render secondaries:
return (
  <FloatingActionButtonContext.Provider value={contextVal}>
    {children}
    <AnimatePresence>
      {primaryFab?.icon && (
        <FloatingActionButtonInternal
          key={primaryFab.id}
          icon={primaryFab.icon}
          onClick={primaryFab.onClick}
          variant={primaryFab.variant}
          data-testid={primaryFab.dataTestId}
        />
      )}
      {secondaryFabs.map((fab, index) => {
        const staggerDelay = 0.2 + 0.05 * (index + 1);
        return (
          <MiniFabInternal
            key={fab.id}
            icon={fab.icon}
            onClick={fab.onClick}
            variant={fab.variant}
            label={fab.label}
            bottom={0} // Temporary - will be calculated properly in next update
            staggerDelay={staggerDelay}
            data-testid={fab.dataTestId}
          />
        );
      })}
    </AnimatePresence>
  </FloatingActionButtonContext.Provider>
);
```

#### 5. Add Mobile Offset to Mini FABs

**File**: `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx`

**Changes**: Pass MinimalMenu context to calculate mobile offset

```typescript
// Add import:
import MinimalMenuContext from '../MinimalMenu/MinimalMenu.context';

// Inside component:
const FloatingActionButtonProvider = ({ children }: FloatingActionButtonProviderProps) => {
  const [primaryFab, setPrimaryFab] = useState<FabProps | undefined>();
  const [secondaryFabs, setSecondaryFabs] = useState<SecondaryFabProps[]>([]);
  const { menuExists, isMobile } = useContext(MinimalMenuContext);

  // ... contextVal setup ...

  return (
    <FloatingActionButtonContext.Provider value={contextVal}>
      {children}
      <AnimatePresence>
        {primaryFab?.icon && (
          <FloatingActionButtonInternal
            key={primaryFab.id}
            icon={primaryFab.icon}
            onClick={primaryFab.onClick}
            variant={primaryFab.variant}
            data-testid={primaryFab.dataTestId}
          />
        )}
        {secondaryFabs.map((fab, index) => {
          const offsetBottom = menuExists && isMobile;
          const baseOffset = offsetBottom ? 76 : 20;
          const bottom = baseOffset + 56 + 8 + index * (40 + 8);
          const staggerDelay = 0.2 + 0.05 * (index + 1);

          return (
            <MiniFabInternal
              key={fab.id}
              icon={fab.icon}
              onClick={fab.onClick}
              variant={fab.variant}
              label={fab.label}
              bottom={bottom}
              staggerDelay={staggerDelay}
              data-testid={fab.dataTestId}
            />
          );
        })}
      </AnimatePresence>
    </FloatingActionButtonContext.Provider>
  );
};
```

### Success Criteria:

#### Automated Verification:
- [x] TypeScript compilation succeeds: `npm run typecheck`
- [x] No ESLint errors: `npm run lint`
- [x] Storybook builds without errors: `npm run build-storybook`

#### Manual Verification:
- [ ] Mini FAB styled components render correctly in isolation
- [ ] Hover labels appear when hovering over mini FAB
- [ ] Label slides in smoothly from right with spring animation
- [ ] Mini FABs are positioned correctly above primary FAB
- [ ] Mobile offset applies correctly when testing with MinimalMenu

**Implementation Note**: After this phase, the internal components exist but there's no way to use them yet (need FloatingActionButton.Secondary component).

---

## Phase 4: Create Secondary Component & Update Exports

### Overview

Create the `FloatingActionButton.Secondary` component that registers secondary FABs with the provider, and attach it to the main FloatingActionButton export.

### Changes Required:

#### 1. Update Main Component to Use New Context Methods

**File**: `src/components/FloatingActionButton/FloatingActionButton.component.tsx`

**Changes**: Update to use `setPrimaryButton` instead of `setButton`

```typescript
const FloatingActionButton = ({
  icon,
  onClick,
  variant = 'primary',
  'data-testid': dataTestId,
}: FloatingActionButtonProps) => {
  const { contextExists, setPrimaryButton } = useContext(FloatingActionButtonContext);
  const id = useMemo(() => v4(), []);

  useEffect(() => {
    setPrimaryButton({ id, icon, onClick, variant, dataTestId });
    return () => {
      setPrimaryButton(undefined);
    };
  }, [icon, onClick, variant, dataTestId, setPrimaryButton]);

  if (!contextExists) {
    return <FloatingActionButtonInternal icon={icon} onClick={onClick} variant={variant} data-testid={dataTestId} />;
  }

  return null;
};
```

#### 2. Create Secondary Component

**File**: `src/components/FloatingActionButton/FloatingActionButton.component.tsx`

**Changes**: Add after main component definition

```typescript
interface SecondaryFloatingActionButtonProps {
  'icon': IconDefinition;
  'onClick': () => void;
  'variant'?: ColourVariant;
  'label'?: string;
  'data-testid'?: string;
}

const SecondaryFloatingActionButton = ({
  icon,
  onClick,
  variant = 'primary',
  label,
  'data-testid': dataTestId,
}: SecondaryFloatingActionButtonProps) => {
  const { contextExists, setSecondaryButtons } = useContext(FloatingActionButtonContext);
  const id = useMemo(() => v4(), []);

  useEffect(() => {
    // Register this secondary FAB
    setSecondaryButtons((prev) => [...prev, { id, icon, onClick, variant, label, dataTestId }]);

    return () => {
      // Unregister this secondary FAB
      setSecondaryButtons((prev) => prev.filter((fab) => fab.id !== id));
    };
  }, [icon, onClick, variant, label, dataTestId, setSecondaryButtons, id]);

  // Secondary FABs always return null - rendered by provider
  return null;
};
```

**Note**: Secondary component always returns null, even without context (no fallback rendering)

#### 3. Attach Secondary to Main Component

**File**: `src/components/FloatingActionButton/FloatingActionButton.component.tsx`

**Changes**: Add after Provider attachment

```typescript
FloatingActionButton.Provider = FloatingActionButtonProvider;
// Add this:
FloatingActionButton.Secondary = SecondaryFloatingActionButton;

export default FloatingActionButton;
```

#### 4. Update Import in Provider

**File**: `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx`

**Changes**: Import SecondaryFabProps type

```typescript
import FloatingActionButtonContext, { FabProps, SecondaryFabProps } from './_FloatingActionButton.context';
```

### Success Criteria:

#### Automated Verification:
- [x] TypeScript compilation succeeds: `npm run typecheck`
- [x] No ESLint errors: `npm run lint`
- [x] No TypeScript errors when using FloatingActionButton.Secondary in code

#### Manual Verification:
- [ ] Primary FAB registration still works in existing stories
- [ ] Can manually test Secondary component in Storybook console
- [ ] Secondary FABs register and unregister correctly on mount/unmount

**Implementation Note**: After this phase, both primary and secondary FABs are fully functional. Phase 5 adds comprehensive Storybook documentation.

---

## Phase 5: Add Storybook Stories

### Overview

Create comprehensive Storybook stories demonstrating secondary FABs with labels, different variants, and various configurations.

### Changes Required:

#### 1. Add Secondary FAB Stories

**File**: `src/components/FloatingActionButton/FloatingActionButton.stories.tsx`

**Changes**: Add new stories after existing ones

```typescript
import { faPencil, faPlus, faShare, faTrash, faCopy } from '@fortawesome/free-solid-svg-icons';

// Add after existing Standard and NoProvider stories:

export const WithSecondaryActions = () => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <FloatingActionButton.Provider>
        <MinimalMenu>
          <MinimalMenu.Item icon={faDiceOne} label='One' active={tab === 1} onClick={() => setTab(1)} />
          <MinimalMenu.Item icon={faDiceTwo} label='Two' active={tab === 2} onClick={() => setTab(2)} />
          <MinimalMenu.Item icon={faDiceThree} label='Three' active={tab === 3} onClick={() => setTab(3)} />
        </MinimalMenu>
        <MinimalMenu.Page>
          {tab === 1 && (
            <>
              <FloatingActionButton icon={faPlus} onClick={() => console.log('Primary clicked')} />
              <FloatingActionButton.Secondary
                icon={faEdit}
                label='Edit'
                onClick={() => console.log('Edit clicked')}
              />
              <FloatingActionButton.Secondary
                icon={faShare}
                label='Share'
                onClick={() => console.log('Share clicked')}
              />
            </>
          )}
          {tab === 2 && (
            <>
              <FloatingActionButton icon={faPencil} onClick={() => console.log('Primary clicked')} variant='tertiary' />
              <FloatingActionButton.Secondary
                icon={faCopy}
                label='Duplicate'
                onClick={() => console.log('Duplicate clicked')}
                variant='secondary'
              />
            </>
          )}
          {tab === 3 && (
            <>
              <FloatingActionButton icon={faPlus} onClick={() => console.log('Primary clicked')} />
            </>
          )}
        </MinimalMenu.Page>
      </FloatingActionButton.Provider>
    </>
  );
};

export const SecondaryWithoutLabels = () => {
  return (
    <>
      <FloatingActionButton.Provider>
        <FloatingActionButton icon={faPlus} onClick={() => console.log('Create')} />
        <FloatingActionButton.Secondary
          icon={faEdit}
          onClick={() => console.log('Edit')}
        />
        <FloatingActionButton.Secondary
          icon={faTrash}
          onClick={() => console.log('Delete')}
          variant='secondary'
        />
      </FloatingActionButton.Provider>
    </>
  );
};

export const ManySecondaries = () => {
  return (
    <>
      <FloatingActionButton.Provider>
        <MinimalMenu>
          <MinimalMenu.Item icon={faDiceOne} label='One' active={false} onClick={() => {}} />
        </MinimalMenu>
        <MinimalMenu.Page>
          <FloatingActionButton icon={faPlus} onClick={() => console.log('Create')} />
          <FloatingActionButton.Secondary icon={faEdit} label='Edit' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faShare} label='Share' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faCopy} label='Duplicate' onClick={() => {}} />
          <FloatingActionButton.Secondary icon={faTrash} label='Delete' onClick={() => {}} variant='secondary' />
        </MinimalMenu.Page>
      </FloatingActionButton.Provider>
    </>
  );
};
```

### Success Criteria:

#### Automated Verification:
- [x] TypeScript compilation succeeds: `npm run typecheck`
- [x] No ESLint errors: `npm run lint`
- [x] Storybook builds successfully: `npm run build-storybook`
- [x] All stories render without errors: `npm run storybook`

#### Manual Verification:
- [ ] "WithSecondaryActions" story shows FABs stacking correctly
- [ ] Switching tabs shows smooth transitions with stagger animation
- [ ] Hovering over secondary FABs shows labels sliding in from right
- [ ] "SecondaryWithoutLabels" story works without labels
- [ ] "ManySecondaries" story with MinimalMenu shows mobile offset working
- [ ] All animations feel smooth and non-janky
- [ ] Labels don't overlap with other UI elements
- [ ] Console logs verify click handlers work correctly

**Implementation Note**: This completes the feature implementation. All phases are done and the feature is ready for testing.

---

## Testing Strategy

### Unit Tests:

We're not adding unit tests in this implementation (no test files exist for FloatingActionButton currently). Future work could include:
- Context registration/unregistration logic
- Bottom position calculation
- Stagger delay calculation

### Integration Tests:

Manual integration testing via Storybook stories:
- Multiple secondary FABs with different variants
- Tab switching to verify mount/unmount behavior
- Mobile menu offset application
- Hover label animations

### Manual Testing Steps:

1. **Basic Functionality**:
   - Open Storybook "WithSecondaryActions" story
   - Verify primary FAB appears at bottom-right
   - Verify secondary FABs stack above primary
   - Verify spacing is 8px between FABs

2. **Animation Testing**:
   - Refresh story and observe entrance animation
   - Primary should appear first (0.2s delay)
   - Secondaries should stagger in (0.25s, 0.30s, etc.)
   - Switch tabs and verify smooth exit/entrance

3. **Hover Label Testing**:
   - Hover over each secondary FAB
   - Label should slide in from right smoothly
   - Move mouse away, label should slide out
   - Rapidly hover on/off to check for animation glitches

4. **Mobile Offset Testing**:
   - Open "ManySecondaries" story (has MinimalMenu)
   - Resize browser to mobile width (<480px)
   - Verify all FABs shift up by 56px
   - Verify no overlap with bottom menu bar

5. **Variant Testing**:
   - Check primary and secondary FABs with different variants
   - Verify colors match theme (primary, secondary, tertiary)
   - Verify hover states work correctly

6. **Edge Cases**:
   - Story with only primary FAB (no secondaries)
   - Story with only secondaries (no primary)
   - Story with many secondaries (4+) to check stacking

## Performance Considerations

- **Animation Performance**: Using `transform` (scale, translateX) and `opacity` for animations, which are GPU-accelerated
- **Re-render Optimization**: Context value is memoized with empty deps (stable setters)
- **State Updates**: Secondary FAB registration uses functional updates to avoid dependency on previous state
- **AnimatePresence**: Wraps all FABs together rather than individual AnimatePresence per FAB (more efficient)

## References

- Research document: `thoughts/shared/research/2026-01-11-floating-action-button-architecture.md`
- Current implementation: `src/components/FloatingActionButton/FloatingActionButton.component.tsx:16-37`
- Provider pattern: `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx:10-37`
- Similar stacking pattern: `src/components/Notifications/Notifications.component.tsx`
- Hover label pattern: `src/components/LiveList/_LiveListRow.tsx:92-101`
