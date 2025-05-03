// components/SvgWrapper.js
import React from 'react';
import { View } from 'react-native';
import { SvgWrapperProps } from '../../types/modals';


const SvgWrapper = (props: SvgWrapperProps) => {
    const { children, color = 'black', size = 24, style } = props;
    const svgString: any = React.isValidElement(children) ?
        React.Children.only(children) :
        children;

    const coloredSvg = React.cloneElement(svgString, {
        width: size,
        height: size,
        style: { color },
    });

    return (
        <View style={[{ width: size, height: size }, style]}>
            {coloredSvg}
        </View>
    );
};

export default SvgWrapper;