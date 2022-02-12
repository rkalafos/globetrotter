import {CloseButton, FormControl, HStack, IconButton, Input } from "@chakra-ui/react";
import { Field } from "formik";
import { FaCross } from "react-icons/fa";

interface TaskInputProps {
    index: number;
    value: string;
    remove: (index: number) => void;
    onChange: (val: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ index, value, remove, onChange }) => {
    return (
        <FormControl>
            <HStack>
                <Field as={Input} name={`task-${index}`} value={value} placeholder={'Random'} onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)} />
                <CloseButton onClick={() => remove(index)} />
            </HStack>
        </FormControl>
    )
}