import { Image, ImageProps } from "@chakra-ui/react";
import logo from "../assets/Globetrotter_Logo.svg";

export const Logo: React.FC<ImageProps> = (props) => {
    return (
        <Image h='100' {...props}  src={logo} alt="Globetrotter" />
    )
}