import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState, KeyboardEvent, useEffect, useCallback, useRef } from 'react';
import { faChevronDown, faChevronUp, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ControlDescription from '../../shared/ControlDescription';
import ControlLabel from '../../shared/ControlLabel';
import { ControlStyles } from '../../shared/ControlStyles';
import getThemeControlColours from '../../theme/helpers/getThemeControlColours';
import useFormNode, { getValue } from '../Form/useFormNode.hook';
import { Status } from '../../theme/theme.types';
import Badge from '../Badge/Badge.component';

const ControlOuter = styled.div`
  position: relative;
`;

const TagSelectControl = styled.div`
  ${ControlStyles}
  cursor: pointer;
  min-height: 48px;
  height: auto;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  min-height: 48px;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 48px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;

const PlaceholderText = styled.div`
  color: ${(props) => getThemeControlColours(props.theme).placeholder};
  padding: 12px 0;
`;

const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.colours.controlBackground};
  z-index: 10000;
  box-shadow: ${(props) => props.theme.shadows.small};
  max-height: 270px;
  overflow-y: auto;
  margin-top: 4px;
`;

const Option = styled.div<{ selected: boolean }>`
  color: ${(props) => getThemeControlColours(props.theme).font};
  background-color: ${(props) =>
    props.selected ? props.theme.colours.controlBorder : props.theme.colours.controlBackgroundDisabled};
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 36px;
  padding: 6px 12px;

  &:hover {
    background-color: ${(props) => props.theme.colours.controlBorder};
  }
`;

const NewTagInput = styled.input`
  border: none;
  background: transparent;
  color: ${(props) => getThemeControlColours(props.theme).font};
  font-family: ${(props) => props.theme.fonts.default.family};
  font-size: ${(props) => props.theme.fonts.default.size};
  padding: 12px 12px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${(props) => getThemeControlColours(props.theme).placeholder};
  }
`;

const NewTagOption = styled.div`
  background-color: ${(props) => props.theme.colours.controlBackgroundDisabled};
  border-top: 1px solid ${(props) => props.theme.colours.controlBorder};
`;

export interface TagOption {
  value: string;
  label: string;
  variant: Status;
}

export interface ITagSelectProps {
  'name'?: string;
  'label'?: string;
  'description'?: string;
  'placeholder'?: string;
  'value'?: string[];
  'onChange'?: (value: string[]) => void;
  'data-testid'?: string;
  'options': TagOption[];
  'className'?: string;
  'allowNewTags'?: boolean;
  'newTagVariant'?: Status;
}

const TagSelect = (props: ITagSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTagValue, setNewTagValue] = useState('');
  const controlRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const {
    label,
    name,
    description,
    placeholder,
    'value': propsValue,
    'data-testid': dataTestId,
    options,
    className,
    allowNewTags = true,
    newTagVariant = 'info',
  } = props;

  const { value: contextValue, onChange: contextOnChange } = useFormNode<string[], string[]>(name);

  const value = getValue(propsValue, contextValue) || [];

  const splitDescription = description ? description.split('\\n').map((str) => str.trim()) : undefined;

  const handleGlobalClick = useCallback((event: MouseEvent) => {
    if (!optionsRef.current?.contains(event.target as any) && !controlRef.current?.contains(event.target as any)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseup', handleGlobalClick);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalClick);
    };
  }, [handleGlobalClick, isOpen]);

  const handleToggleTag = (tagValue: string) => {
    const newValue = value.includes(tagValue) ? value.filter((v: string) => v !== tagValue) : [...value, tagValue];

    if (contextOnChange) {
      contextOnChange(newValue);
    }
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  const handleRemoveTag = (tagValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    handleToggleTag(tagValue);
  };

  const handleAddNewTag = () => {
    if (!newTagValue.trim() || !allowNewTags) return;

    const trimmedValue = newTagValue.trim();
    if (value.includes(trimmedValue)) {
      setNewTagValue('');
      return;
    }

    const newValue = [...value, trimmedValue];
    if (contextOnChange) {
      contextOnChange(newValue);
    }
    if (props.onChange) {
      props.onChange(newValue);
    }
    setNewTagValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddNewTag();
    }
  };

  const getTagOption = (tagValue: string): TagOption | undefined => {
    return options.find((o) => o.value === tagValue);
  };

  const selectedTags = value
    .map((v: string) => getTagOption(v) || { value: v, label: v, variant: newTagVariant as Status })
    .filter(Boolean);

  return (
    <div className={className}>
      {label && <ControlLabel htmlFor={name}>{label}</ControlLabel>}
      <ControlOuter>
        <TagSelectControl ref={controlRef} data-testid={dataTestId} onClick={() => setIsOpen(!isOpen)}>
          {selectedTags.length === 0 && placeholder && <PlaceholderText>{placeholder}</PlaceholderText>}
          {selectedTags.length > 0 && (
            <TagsContainer>
              {selectedTags.map((tag) => (
                <span key={tag.value} onClick={(e) => e.stopPropagation()}>
                  <Badge
                    variant={tag.variant}
                    actionIcon={faTimes}
                    onAction={(e) => handleRemoveTag(tag.value, e as any)}
                  >
                    {tag.label}
                  </Badge>
                </span>
              ))}
            </TagsContainer>
          )}
          <IconContainer>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </IconContainer>
        </TagSelectControl>
        {isOpen && (
          <OptionsContainer ref={optionsRef}>
            {options.map((option) => {
              const isSelected = value.includes(option.value);
              return (
                <Option
                  key={option.value}
                  data-testid={`option-${option.value}`}
                  selected={isSelected}
                  onClick={() => handleToggleTag(option.value)}
                >
                  <Badge variant={option.variant}>{option.label}</Badge>
                </Option>
              );
            })}
            {allowNewTags && (
              <NewTagOption>
                <NewTagInput
                  placeholder='Add new tag...'
                  value={newTagValue}
                  onChange={(e) => setNewTagValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onClick={(e) => e.stopPropagation()}
                />
                {newTagValue && (
                  <Option selected={false} onClick={handleAddNewTag}>
                    <Badge variant={newTagVariant}>
                      <FontAwesomeIcon icon={faPlus} /> Add &quot;{newTagValue}&quot;
                    </Badge>
                  </Option>
                )}
              </NewTagOption>
            )}
          </OptionsContainer>
        )}
      </ControlOuter>

      {splitDescription && (
        <ControlDescription>
          {splitDescription.map((line, index) => (
            <Fragment key={index}>
              {index !== 0 && <br />}
              {line}
            </Fragment>
          ))}
        </ControlDescription>
      )}
    </div>
  );
};

export default TagSelect;
