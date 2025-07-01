import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function LatoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Lato' }]} />;
}

export function LatoBoldText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'LatoBold' }]} />;
}

export function LatoLightText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'LatoLight' }]} />;
}
