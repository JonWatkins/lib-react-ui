import React, { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { SelectProps, SelectOption, SelectedValue } from "./Select.types";
import { Icon } from "../Icon";
import { Input } from "../Input";

// TODO: Clean up types
export const Select: FC<SelectProps> = ({
  id,
  className,
  placeholder,
  options = [],
  isMulti = false,
  isSearchable = false,
  label,
  onChange = (o: SelectedValue) => o,
  ...props
}) => {
  const containerClasses = ["select-container", className];
  const searchRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const [selectedValue, setSelectedValue] = useState<SelectedValue>(
    isMulti ? [] : null
  );

  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  const handleInputClick = (e: any) => {
    setShowMenu(!showMenu);
  };

  const removeOption = (option: SelectOption) => {
    return (
      selectedValue &&
      (selectedValue as SelectOption[]).filter(
        (o: SelectOption) => o.value !== option.value
      )
    );
  };

  const isSelected = (option: SelectOption) => {
    if (isMulti) {
      return (
        (selectedValue as SelectOption[]).filter(
          (o) => o.value === option.value
        ).length > 0
      );
    }

    if (!selectedValue) {
      return false;
    }

    return (selectedValue as SelectOption).value === option?.value;
  };

  const getDisplay = () => {
    if (!selectedValue || (selectedValue as SelectOption[]).length === 0) {
      return placeholder;
    }

    if (isMulti) {
      return (
        <div className="select-tags">
          {(selectedValue as SelectOption[]).map((option, index) => (
            <div key={index} className="select-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="select-tag-close"
              >
                <Icon type="cancel" size="sm" className="text-danger" />
              </span>
            </div>
          ))}
        </div>
      );
    }

    return (selectedValue as SelectOption).label;
  };

  const getOptions = (): SelectOption[] => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) >= 0
    );
  };

  const onItemClick = (option: SelectOption) => {
    let newValue: SelectedValue;

    if (isMulti) {
      if (
        (selectedValue as SelectOption[]).findIndex(
          (o) => o.value === option.value
        ) >= 0
      ) {
        newValue = removeOption(option);
      } else {
        newValue = [...(selectedValue as SelectOption[]), option];
      }
    } else {
      newValue = option;
    }

    setSelectedValue(newValue);
    if (!isMulti) setShowMenu(!showMenu);
    onChange(newValue);
  };

  const onTagRemove = (e: any, option: SelectOption) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const onSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      ref={inputRef}
      id={id}
      className={classNames(containerClasses, { 'is-open': showMenu, 'is-searchable': isSearchable })}
      {...props}
    >
      <div className="select-input">
        <div onClick={handleInputClick} className="select-selected-value">
          {getDisplay()}
        </div>
        <div className="select-dropdown">
          <div className="select-tool">
            <Icon type="down-micro" size="sm" />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="select-menu">
          {isSearchable && (
            <div className="select-search">
              <Input
                className="select-search-input"
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
                placeholder="Search"
              />
            </div>
          )}
          {getOptions().map((option, index) => (
            <div
              onClick={() => onItemClick(option)}
              key={index}
              className={`select-menu-item ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
