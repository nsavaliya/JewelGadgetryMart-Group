import React from "react";

// Import the CSS module for the component (styles are scoped to this component)
import styles from "./InputControl.module.css";

// Define the InputControl component
function InputControl(props) {
  // The component accepts props for customization, such as 'label' and other input element attributes

  return (
    // The component's root element is a div with a CSS class from the CSS module
    <div className={styles.container}>
      {/* Render the label if the 'label' prop is provided */}
      {props.label && <label>{props.label}</label>}
      
      {/* Render the input element with all the props passed to the component */}
      {/* {...props} spreads all the props, such as 'type', 'placeholder', etc., onto the input element */}
      <input type="text" {...props} />
    </div>
  );
}

// Export the InputControl component as the default export
export default InputControl;
