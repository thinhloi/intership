import styled from 'styled-components'

const ButtonComponent = styled.button`
    position: relative;
    display: inline-flex;
    align-item: center;  
    padding:10px 30px;
    box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
    border-radius: 6px;
    border: 0px;
    color : #ffffff;
    padding: 
    ${(props) =>
        props.size === "sm"
            ? " 1.1rem"
            : props.size === "md"
                ? "1.4rem"
                : props.size === "lg"
                    ? "1.6rem"
                    : "1.1rem"};
    height: ${(props) =>
        props.size === "sm"
            ? "30px"
            : props.size === "md "
                ? "37px"
                : props.size === "lg"
                    ? "40px"
                    : "34px"};
    background-color: ${(props) =>
        props.size === "sm"
            ? "#3D5AFE"
            : props.size === "md "
                ? "#3D5AFE"
                : props.size === "lg"
                    ? "#3D5AFE"
                    : "#3D5AFE"};
    color: ${(props) =>
        props.size === "sm"
            ? "#ffffff"
            : props.size === "md "
                ? "#ffffff"
                : props.size === "lg"
                    ? "#ffffff"
                    : "#ffffff"};   
    background-color: 
      ${(props) =>
        props.color === "default"
            ? "#E0E0E0"
            : props.color === "primary"
                ? "#3D5AFE"
                : props.color === "secondary"
                    ? "#455A64"
                    : props.color === "danger"
                        ? "#dc3545"
                        : "E0E0E0"};
    color:
        ${(props) =>
        props.color === "default"
            ? "#3F3F3F"
            : props.color === "primary"
                ? "#ffffff"
                : props.color === "secondary"
                    ? "#ffffff"
                    : props.color === "danger"
                        ? "#ffffff"
                        : "#3F3F3F"};
    &:hover{
        background-color: 
      ${(props) =>
        props.color === "default"
            ? "#AEAEAE"
            : props.color === "primary"
                ? "#0039CB"
                : props.color === "secondary"
                    ? "#1C313A"
                    : props.color === "danger"
                        ? "#9A0007"
                        : "E0E0E0"};
    }
      
`;

const Btn = ({ size, color, children, ...props }) => {
    return (
        <ButtonComponent
            size={size}
            color={color}
        >
            {children}
        </ButtonComponent>
    )
}
export default Btn