// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: PuaGQn8Cnc2P
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

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./PlasmicReviews.module.css"; // plasmic-import: PuaGQn8Cnc2P/css

export type PlasmicReviews__VariantMembers = {};
export type PlasmicReviews__VariantsArgs = {};
type VariantPropType = keyof PlasmicReviews__VariantsArgs;
export const PlasmicReviews__VariantProps = new Array<VariantPropType>();

export type PlasmicReviews__ArgsType = {};
type ArgPropType = keyof PlasmicReviews__ArgsType;
export const PlasmicReviews__ArgProps = new Array<ArgPropType>();

export type PlasmicReviews__OverridesType = {
  div5?: p.Flex<"div">;
  rated49StarsBy100000Customers?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultReviewsProps {
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

function PlasmicReviews__RenderFunc(props: {
  variants: PlasmicReviews__VariantsArgs;
  args: PlasmicReviews__ArgsType;
  overrides: PlasmicReviews__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssuXxHpH6GpmS()
  });

  return (
    <div
      data-plasmic-name={"div5"}
      data-plasmic-override={overrides.div5}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div5
      )}
    >
      <div
        data-plasmic-name={"rated49StarsBy100000Customers"}
        data-plasmic-override={overrides.rated49StarsBy100000Customers}
        className={classNames(
          projectcss.all,
          sty.rated49StarsBy100000Customers
        )}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {hasVariant(globalVariants, "screen", "smallestMobile")
          ? "Rated 4.9 Stars By 100,000+ Customers"
          : "Rated 4.9 Stars By 100,000+ Customers"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div5: ["div5", "rated49StarsBy100000Customers", "text"],
  rated49StarsBy100000Customers: ["rated49StarsBy100000Customers"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div5: "div";
  rated49StarsBy100000Customers: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReviews__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReviews__VariantsArgs;
    args?: PlasmicReviews__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReviews__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReviews__ArgsType,
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
          internalArgPropNames: PlasmicReviews__ArgProps,
          internalVariantPropNames: PlasmicReviews__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReviews__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div5") {
    func.displayName = "PlasmicReviews";
  } else {
    func.displayName = `PlasmicReviews.${nodeName}`;
  }
  return func;
}

export const PlasmicReviews = Object.assign(
  // Top-level PlasmicReviews renders the root element
  makeNodeComponent("div5"),
  {
    // Helper components rendering sub-elements
    rated49StarsBy100000Customers: makeNodeComponent(
      "rated49StarsBy100000Customers"
    ),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicReviews
    internalVariantProps: PlasmicReviews__VariantProps,
    internalArgProps: PlasmicReviews__ArgProps
  }
);

export default PlasmicReviews;
/* prettier-ignore-end */
