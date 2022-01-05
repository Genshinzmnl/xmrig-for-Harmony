import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { Card } from 'react-native-paper';

export type MinerCardProps = ViewProps & {
    title: string;
    subTitle?: string;
    disabled?: boolean;
    wrapInContent?: boolean;
};

export const MinerCard:React.FC<MinerCardProps> = ({
  style,
  children,
  title,
  subTitle,
  disabled = false,
  wrapInContent = true,
}) => (
  <Card style={[style, disabled ? styles.disabledCard : {}]}>
    <Card.Title
      title={title}
      subtitle={subTitle}
    />
    {wrapInContent
      ? (
        <Card.Content>
          { children }
        </Card.Content>
      )
      // eslint-disable-next-line react/jsx-no-useless-fragment
      : <>{ children }</> }
  </Card>
);

const styles = StyleSheet.create({
  disabledCard: {
    opacity: 0.2,
  },
});
