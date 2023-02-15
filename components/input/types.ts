import * as React from "react";

type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

export type ForwardReferenceExoticComponent<E, OwnProps> =
  React.ForwardRefExoticComponent<
    Merge<
      E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
      OwnProps & { as?: E }
    >
  >;

type PropsWithChildren<P> = P &
  (
    | { children?: React.ReactNode | undefined }
    // eslint-disable-next-line no-unused-vars
    | { children: (...args: any[]) => React.ReactNode }
  );

export interface ForwardReferenceComponent<
  IntrinsicElementString,
  OwnProps = {}
  /**
   * Extends original type to ensure built in React types play nice
   * with polymorphic components still e.g. `React.ElementRef` etc.
   */
> extends ForwardReferenceExoticComponent<IntrinsicElementString, OwnProps> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precedence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    // eslint-disable-next-line no-unused-vars
    props: As extends ""
      ? // eslint-disable-next-line no-undef
        { as: keyof JSX.IntrinsicElements }
      : As extends React.ComponentType<PropsWithChildren<infer P>>
      ? Merge<P, OwnProps & { as: As }>
      : // eslint-disable-next-line no-undef
      As extends keyof JSX.IntrinsicElements
      ? // eslint-disable-next-line no-undef
        Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never
  ): React.ReactElement | null;
}

export type ObservableStatus = "initial" | "next" | "completed" | "error";
