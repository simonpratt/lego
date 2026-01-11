---
date: 2026-01-11T12:00:00-08:00
researcher: Claude
git_commit: cd7f9545f513be46c44803f5c4065e123c9cd28c
branch: master
repository: lego
topic: "FloatingActionButton Architecture for Secondary Actions"
tags: [research, codebase, FloatingActionButton, FAB, secondary-actions]
status: complete
last_updated: 2026-01-11
last_updated_by: Claude
last_updated_note: "Added follow-up with implementation specifications for mini FABs with hover labels"
---

# Research: FloatingActionButton Architecture for Secondary Actions

**Date**: 2026-01-11T12:00:00-08:00
**Researcher**: Claude
**Git Commit**: cd7f9545f513be46c44803f5c4065e123c9cd28c
**Branch**: master
**Repository**: lego

## Research Question

Research the FloatingActionButton codebase in preparation for adding secondary floating action buttons above the existing primary action button.

## Summary

The FloatingActionButton component uses a Provider pattern for centralized FAB management across pages. The current architecture supports a single FAB per page/context with animated transitions. The component is fixed-positioned at the bottom-right (20px from edges) with mobile offset adjustment when MinimalMenu exists. The styling system uses theme-based color variants and the z-index is set to 5. Existing codebase patterns for multiple stacked actions include ControlGroup (vertical form elements), ActionMenu (dropdown items), and Notifications (stacked toasts with animations).

## Detailed Findings

### Core Component Architecture

The FloatingActionButton consists of 5 files:

| File | Purpose |
|------|---------|
| `FloatingActionButton.component.tsx` | Main export, handles provider detection |
| `_FloatingActionButton.provider.tsx` | Provider managing single active FAB state |
| `_FloatingActionButton.internal.tsx` | Actual button rendering with animations |
| `_FloatingActionButton.context.ts` | React context definition |
| `FloatingActionButton.stories.tsx` | Storybook examples |

### Current Single-FAB Context Model

**Context Interface** (`_FloatingActionButton.context.ts:13-16`):
```typescript
interface FloatingActionButtonContextProps {
  contextExists: boolean;
  setButton: (props: FabProps | undefined) => void;
}
```

**FabProps Interface** (`_FloatingActionButton.context.ts:5-11`):
```typescript
export interface FabProps {
  id: string;
  icon: IconDefinition | null;
  onClick: () => void;
  variant?: ColourVariant;
  dataTestId?: string;
}
```

**Provider State** (`_FloatingActionButton.provider.tsx:11`):
```typescript
const [fab, setFab] = useState<FabProps | undefined>();
```

The provider maintains state for a **single FAB** via `useState<FabProps | undefined>()`. This is the key architectural point for extending to multiple FABs.

### Component Registration Flow

1. FAB component mounts and checks `contextExists` (line 22)
2. If provider exists, registers via `setButton()` with unique UUID (lines 25-30)
3. On unmount, calls `setButton(undefined)` to unregister (lines 27-29)
4. Provider renders the active FAB via `FloatingActionButtonInternal` (lines 26-31)

### Styling and Positioning

**Fixed Positioning** (`_FloatingActionButton.internal.tsx:12-15`):
```typescript
position: fixed;
bottom: ${(props) => (props.offsetBottom ? '76px' : '20px')};
right: 20px;
```

**Button Dimensions** (`_FloatingActionButton.internal.tsx:16-18`):
```typescript
width: 56px;
height: 56px;
border-radius: 50%;
```

**Z-Index** (`_FloatingActionButton.internal.tsx:29`):
```typescript
z-index: ${zIndexConstants.floatingActionButton}; // value: 5
```

**Mobile Offset Logic** (`_FloatingActionButton.internal.tsx:68`):
```typescript
offsetBottom={menuExists && isMobile}
```
- When MinimalMenu exists on mobile, FAB moves up to 76px (56px menu + 20px margin)

### Animation Configuration

**Motion Variants** (`_FloatingActionButton.internal.tsx:52-58`):
```typescript
const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.2 } },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};
```

Uses framer-motion's AnimatePresence for enter/exit transitions.

### Theme Integration

**ColourVariant Type** (`theme/theme.types.ts:1`):
```typescript
export type ColourVariant = 'primary' | 'secondary' | 'tertiary';
```

**Color Resolution** (`_FloatingActionButton.internal.tsx:19-20`):
```typescript
background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).main};
color: ${(props) => getThemeVariantColours(props.variant, props.theme).contrastText};
```

**Hover State** (`_FloatingActionButton.internal.tsx:31-33`):
```typescript
&:hover {
  background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
}
```

### MinimalMenu Context Integration

The FAB reads from MinimalMenuContext (`_FloatingActionButton.internal.tsx:49`):
```typescript
const { menuExists, isMobile } = useContext(MinimalMenuContext);
```

MinimalMenu is:
- **Mobile** (0-480px): Fixed bottom bar, 56px height
- **Desktop** (>480px): Fixed left sidebar, 64px width

MinimalMenu.Page provides the context at `_MinimalMenuPage.component.tsx:43`.

### Existing Stacked/Grouped Action Patterns

#### Pattern 1: ControlGroup (Vertical Stacking)
**Location**: `src/components/ControlGroup/ControlGroup.component.tsx`
- Uses `flex-direction: column`
- 8px spacing (focus/submission) or 16px spacing (comfortable)
- Margin-bottom on children, removed on last-child

#### Pattern 2: ActionMenu (Dropdown)
**Location**: `src/components/ActionMenu/ActionMenu.component.tsx`
- Portal-rendered dropdown
- Items stack as block elements, 42px height each
- Uses Popper.js for positioning

#### Pattern 3: Notifications (Toast Stack)
**Location**: `src/components/Notifications/Notifications.component.tsx`
- Fixed position bottom-left
- Uses AnimatePresence with framer-motion
- Spacer component between items
- Mobile offset: 80px bottom

#### Pattern 4: ButtonGroup (Horizontal)
**Location**: `src/components/ButtonGroup/ButtonGroup.component.tsx`
- Horizontal flex layout
- 8px margin-right between buttons
- Supports left/right alignment

### Z-Index Hierarchy

From `src/constants/zIndex.constants.ts`:
- `floatingActionButton: 5` (lowest)
- `modalOverlay: 100`
- `modalContent: 110`
- `notifications: 120`

## Code References

- `src/components/FloatingActionButton/FloatingActionButton.component.tsx:16-37` - Main component logic
- `src/components/FloatingActionButton/_FloatingActionButton.provider.tsx:10-37` - Provider implementation
- `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx:12-34` - Styled button definition
- `src/components/FloatingActionButton/_FloatingActionButton.internal.tsx:43-77` - Internal component
- `src/components/FloatingActionButton/_FloatingActionButton.context.ts:5-23` - Context and types
- `src/components/MinimalMenu/_MinimalMenuPage.component.tsx:31-45` - Menu context provider
- `src/theme/helpers/getThemeVariantColours.ts:4-14` - Color variant helper
- `src/constants/zIndex.constants.ts:2` - Z-index value (5)

## Architecture Documentation

### Current FAB Data Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│ FloatingActionButton.Provider                                        │
│  └── state: FabProps | undefined                                    │
│  └── renders: <FloatingActionButtonInternal />                      │
│                                                                      │
│  ┌─────────────────────┐    ┌─────────────────────┐                 │
│  │ Page A              │    │ Page B              │                 │
│  │ <FAB icon={plus}/>  │    │ <FAB icon={edit}/>  │                 │
│  │  - calls setButton  │    │  - calls setButton  │                 │
│  │  - returns null     │    │  - returns null     │                 │
│  └─────────────────────┘    └─────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────┘
```

Only one FAB is active at a time - switching pages replaces the registered FAB.

### Key Spacing Values

| Measurement | Value | Usage |
|-------------|-------|-------|
| FAB size | 56px | Width and height |
| Right margin | 20px | Distance from right edge |
| Bottom margin | 20px | Distance from bottom (default) |
| Mobile offset | 76px | Bottom when menu present (56px + 20px) |
| Animation duration | 0.3s | Enter and exit transitions |
| Entrance delay | 0.2s | Delay before appearing |

## Open Questions

1. **State Model for Multiple FABs**: Should secondary FABs be:
   - Registered similarly via context with an array instead of single value?
   - Rendered directly as children of a container component?
   - Managed via a separate `SecondaryFAB` component?

2. **Animation Staggering**: How should multiple FABs animate in/out?
   - Simultaneous with stagger delay?
   - Sequential cascade?
   - Primary FAB first, then secondaries expand upward?

3. **Positioning Strategy**: For secondary FABs above primary:
   - Fixed offset (e.g., 56px + 16px gap = 72px between centers)?
   - Dynamic based on count of secondary FABs?
   - Should secondary FABs be smaller (mini FABs, ~40px)?

4. **Variant Handling**: Should secondary FABs:
   - Inherit variant from primary?
   - Have their own variant prop?
   - Default to a different variant (e.g., secondary instead of primary)?

5. **Labels**: Should secondary FABs support optional text labels that appear on hover (common FAB speed dial pattern)?

---

## Follow-up Research 2026-01-11

### Design Decisions

**Answers to open questions:**

1. **State Model**: Use existing context with array of FABs
2. **Animation**: Stagger animations slightly between FABs
3. **Sizing**: Secondary FABs will be smaller (mini FAB pattern)
4. **Labels**: Add hover labels to secondary FABs

### Mini FAB Specifications

**Standard mini FAB dimensions:**
- Width/Height: **40px** (vs 56px for primary)
- Scale ratio: 0.714 (40/56)
- Icon size: **18px** (vs 24px for primary)

**Positioning calculations for stacked FABs:**

| Position | Bottom Offset | Calculation |
|----------|---------------|-------------|
| Primary FAB | 20px | Base position |
| 1st Secondary | 84px | 20px + 56px (primary) + 8px (gap) |
| 2nd Secondary | 132px | 84px + 40px (mini) + 8px (gap) |
| 3rd Secondary | 180px | 132px + 40px (mini) + 8px (gap) |

**On mobile with menu:**
- Add 56px to all bottom offsets
- Primary: 76px (instead of 20px)
- 1st Secondary: 140px (instead of 84px)
- etc.

**Gap between FABs**: 8px (consistent with ButtonGroup spacing)

### Multi-FAB State Structure

**Updated Context Interface:**
```typescript
interface FloatingActionButtonContextProps {
  contextExists: boolean;
  setPrimaryButton: (props: FabProps | undefined) => void;
  setSecondaryButtons: (buttons: SecondaryFabProps[]) => void;
}
```

**New SecondaryFabProps Interface:**
```typescript
interface SecondaryFabProps {
  id: string;
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
  label?: string;  // Optional hover label
  dataTestId?: string;
}
```

**Provider State:**
```typescript
const [primaryFab, setPrimaryFab] = useState<FabProps | undefined>();
const [secondaryFabs, setSecondaryFabs] = useState<SecondaryFabProps[]>([]);
```

**Alternative: Single array approach**
```typescript
interface FabConfig {
  id: string;
  icon: IconDefinition;
  onClick: () => void;
  variant?: ColourVariant;
  label?: string;
  isPrimary?: boolean;
  dataTestId?: string;
}

const [fabs, setFabs] = useState<FabConfig[]>([]);
```

### Stagger Animation Specifications

**Based on existing codebase patterns:**
- Base transition: 0.3s duration (from current FAB implementation)
- Stagger delay: **0.05s** per FAB (50ms)
- Direction: Bottom-to-top (primary appears first, then secondaries)

**Animation sequence:**
```typescript
const getStaggerDelay = (index: number, isPrimary: boolean) => {
  if (isPrimary) return 0.2;  // Primary has existing 0.2s delay
  return 0.2 + (0.05 * (index + 1));  // Each secondary adds 50ms
};

// Example:
// Primary FAB:      delay 0.2s
// 1st Secondary:    delay 0.25s (0.2 + 0.05)
// 2nd Secondary:    delay 0.30s (0.2 + 0.10)
// 3rd Secondary:    delay 0.35s (0.2 + 0.15)
```

**Exit animation:**
- Reverse order: Top-to-bottom (secondaries disappear first)
- Same 0.05s stagger between each
- No exit delay on primary

### Hover Label Implementation

**Based on LiveListRow and Input error message patterns:**

**Label Component:**
```typescript
const FabLabel = styled(motion.div)`
  position: absolute;
  right: 52px;  // 40px mini FAB + 12px gap
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

const labelVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};
```

**Animation:**
- Initial: `opacity: 0, x: 10` (hidden, 10px to the right)
- On hover: `opacity: 1, x: 0` (slides in from right)
- Transition: `{ type: 'spring', duration: 0.3 }`
- Direction: Slides from right to left (toward FAB)

**Usage pattern:**
```typescript
<MiniFabContainer
  onHoverStart={() => setShowLabel(true)}
  onHoverEnd={() => setShowLabel(false)}
  whileHover='hover'
>
  <MiniFabButton>
    <FontAwesomeIcon icon={icon} />
  </MiniFabButton>

  <AnimatePresence>
    {showLabel && label && (
      <FabLabel
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={labelVariants}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        {label}
      </FabLabel>
    )}
  </AnimatePresence>
</MiniFabContainer>
```

### Responsive Tooltip Patterns from Codebase

**Pattern 1: LiveListRow remove button** (`_LiveListRow.tsx:92-101`)
- Slides in from right: `x: -10`
- Spring transition: 0.3s
- Opacity: 0 to 1

**Pattern 2: Input error message** (`Input.component.tsx:25-36`)
- Slides up: `y: -4`
- Absolute positioned
- `pointer-events: none`

**Pattern 3: Card actions** (`_CardActions.component.tsx:58-72`)
- Slides vertically: `y: actionsHeight` to `y: 0`
- Spring with no bounce: `{ type: 'spring', bounce: 0, duration: 0.6 }`
- Portal-based rendering

**Recommended approach for FAB labels:**
- Combine LiveListRow's horizontal slide with Input's pointer-events pattern
- Use 0.3s spring transition (standard for UI feedback)
- Position absolutely to the left of mini FAB
- Slide in from right (x: 10 to x: 0)

### Updated Component Specifications

**Mini FloatingActionButton styled component:**
```typescript
const MiniFabButton = styled(motion.button)<{ variant: ColourVariant; offsetBottom: boolean }>`
  position: fixed;
  bottom: ${(props) => props.bottom}px;  // Dynamic based on position
  right: 20px;

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

  font-size: 18px;  // Smaller icon for mini FAB
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: ${zIndexConstants.floatingActionButton};

  &:hover {
    background-color: ${(props) => getThemeVariantColours(props.variant, props.theme).darker};
  }
`;
```

**Animation variants for mini FAB:**
```typescript
const miniFabVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: custom  // Custom delay per FAB for stagger
    }
  }),
  exit: (custom: number) => ({
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
      delay: custom  // Reverse stagger on exit
    }
  }),
  hover: { scale: 1.15 },  // Slightly more pronounced for smaller FAB
  tap: { scale: 0.9 },
};
```

### API Design Example

**Component usage pattern:**
```typescript
<FloatingActionButton.Provider>
  <MinimalMenu.Page>
    {/* Primary FAB */}
    <FloatingActionButton icon={faPlus} onClick={handleCreate} />

    {/* Secondary FABs */}
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

**Alternative compound component pattern:**
```typescript
<FloatingActionButton.Provider>
  <MinimalMenu.Page>
    <FloatingActionButton icon={faPlus} onClick={handleCreate}>
      <FloatingActionButton.Secondary icon={faEdit} label="Edit" onClick={handleEdit} />
      <FloatingActionButton.Secondary icon={faShare} label="Share" onClick={handleShare} />
    </FloatingActionButton>
  </MinimalMenu.Page>
</FloatingActionButton.Provider>
```

### Files to Modify

Based on existing architecture:

| File | Changes Needed |
|------|----------------|
| `_FloatingActionButton.context.ts` | Add SecondaryFabProps, update context interface |
| `_FloatingActionButton.provider.tsx` | Change state from single to primary + array of secondaries |
| `_FloatingActionButton.internal.tsx` | Add size prop, create MiniFabInternal variant |
| `FloatingActionButton.component.tsx` | Add FloatingActionButton.Secondary component |
| `FloatingActionButton.stories.tsx` | Add stories showing secondary FABs with labels |

### Implementation Notes

**Z-index considerations:**
- All FABs use same z-index (5)
- Stacking order managed by DOM order
- Secondary FABs rendered after primary in DOM

**Accessibility:**
- Labels should have semantic meaning
- Consider aria-label for FABs even without visible labels
- Ensure keyboard navigation works with Tab key

**Testing considerations:**
- Test stagger animations don't cause jank
- Test mobile offset calculations with multiple FABs
- Test hover labels don't overlap with other UI elements
- Test rapid hover on/off doesn't cause animation issues
