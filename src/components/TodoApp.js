import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    let className = 'tab-item';

    if (activeTab === label) {
      className += ' tab-current';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}
export class Tabs extends Component {
  static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
      super(props);

      this.state = {
          activeTab: this.props.children[0].props.label,
      };
  }
  
  onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
  };

  render() {
      const {
          onClickTabItem,
          props: { children },
          state: { activeTab },
      } = this;

      return (
          <div className='tab'>
              <ul className='tab-header'>
                  {children.map((child) => {
                      const { label } = child.props;

                      return (
                          <Tab
                              activeTab={activeTab}
                              key={label}
                              label={label}
                              onClick={onClickTabItem}
                          />
                      );
                  })}
              </ul>
              <div className='tab-content'>
                  {children.map((child) => {
                      if (child.props.label !== activeTab) return undefined;
                      return child.props.children;
                  })}
              </div>
          </div>
      );
  }
}
