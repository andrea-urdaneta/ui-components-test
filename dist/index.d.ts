import React from 'react';

type Props = {
    title: string;
    onPress: () => void;
};
declare const Button: ({ title, onPress }: Props) => React.JSX.Element;

export { Button };
