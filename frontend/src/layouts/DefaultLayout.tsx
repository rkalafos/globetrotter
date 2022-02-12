import { Box } from "@chakra-ui/react";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}