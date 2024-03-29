// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: 73_C_lZn92bFi
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import _320PxAnnouncementBarI from "../../_320PxAnnouncementBarI"; // plasmic-import: t0MfdOHLxYyIb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./Plasmic_320PxAnnouncementBarIi.module.css"; // plasmic-import: 73_C_lZn92bFi/css

export type Plasmic_320PxAnnouncementBarIi__VariantMembers = {};
export type Plasmic_320PxAnnouncementBarIi__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxAnnouncementBarIi__VariantsArgs;
export const Plasmic_320PxAnnouncementBarIi__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_320PxAnnouncementBarIi__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxAnnouncementBarIi__ArgsType;
export const Plasmic_320PxAnnouncementBarIi__ArgProps =
  new Array<ArgPropType>();

export type Plasmic_320PxAnnouncementBarIi__OverridesType = {
  div226?: p.Flex<"div">;
  _320PxAnnouncementBarI?: p.Flex<typeof _320PxAnnouncementBarI>;
};

export interface Default_320PxAnnouncementBarIiProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_320PxAnnouncementBarIi__RenderFunc(props: {
  variants: Plasmic_320PxAnnouncementBarIi__VariantsArgs;
  args: Plasmic_320PxAnnouncementBarIi__ArgsType;
  overrides: Plasmic_320PxAnnouncementBarIi__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"div226"}
      data-plasmic-override={overrides.div226}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div226
      )}
    >
      <_320PxAnnouncementBarI
        data-plasmic-name={"_320PxAnnouncementBarI"}
        data-plasmic-override={overrides._320PxAnnouncementBarI}
        className={classNames("__wab_instance", sty._320PxAnnouncementBarI)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div226: ["div226", "_320PxAnnouncementBarI"],
  _320PxAnnouncementBarI: ["_320PxAnnouncementBarI"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div226: "div";
  _320PxAnnouncementBarI: typeof _320PxAnnouncementBarI;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxAnnouncementBarIi__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxAnnouncementBarIi__VariantsArgs;
    args?: Plasmic_320PxAnnouncementBarIi__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxAnnouncementBarIi__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxAnnouncementBarIi__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_320PxAnnouncementBarIi__ArgProps,
          internalVariantPropNames: Plasmic_320PxAnnouncementBarIi__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320PxAnnouncementBarIi__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div226") {
    func.displayName = "Plasmic_320PxAnnouncementBarIi";
  } else {
    func.displayName = `Plasmic_320PxAnnouncementBarIi.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxAnnouncementBarIi = Object.assign(
  // Top-level Plasmic_320PxAnnouncementBarIi renders the root element
  makeNodeComponent("div226"),
  {
    // Helper components rendering sub-elements
    _320PxAnnouncementBarI: makeNodeComponent("_320PxAnnouncementBarI"),

    // Metadata about props expected for Plasmic_320PxAnnouncementBarIi
    internalVariantProps: Plasmic_320PxAnnouncementBarIi__VariantProps,
    internalArgProps: Plasmic_320PxAnnouncementBarIi__ArgProps
  }
);

export default Plasmic_320PxAnnouncementBarIi;
/* prettier-ignore-end */
