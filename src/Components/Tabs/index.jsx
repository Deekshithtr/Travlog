import React ,{useState,useEffect} from 'react';
import './tabs.css';
import classnames from "classnames";
import propTypes from "prop-types";

const proptypes = {
    options: propTypes.array.isRequired,
    onClick: propTypes.func.isRequired
  };

const Tabs = ({options,onClick}) =>
{
    const [activeId,setActiveId]=useState('');
    useEffect(() => {
        if (!activeId) {
          const [firstOption] = options;
          onClick(firstOption);
          setActiveId(firstOption.id);
        }
      }, [onClick, activeId, options]);
    
    return(
        <div className="tabs">
            {
                options.map(option=>(<p className={classnames({'tab-labels':true,'tab-labels--active':activeId===option.id})}  onClick={() => {
                    setActiveId(option.id);
                    onClick(option);
                  }}>{option.name}</p>))
            }
        </div>
    );
}
Tabs.propTypes = proptypes;
export default Tabs