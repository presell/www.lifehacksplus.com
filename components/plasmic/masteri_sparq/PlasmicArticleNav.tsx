// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: TprVJnSYLAFY
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
import sty from "./PlasmicArticleNav.module.css"; // plasmic-import: TprVJnSYLAFY/css

export type PlasmicArticleNav__VariantMembers = {};
export type PlasmicArticleNav__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleNav__VariantsArgs;
export const PlasmicArticleNav__VariantProps = new Array<VariantPropType>();

export type PlasmicArticleNav__ArgsType = {};
type ArgPropType = keyof PlasmicArticleNav__ArgsType;
export const PlasmicArticleNav__ArgProps = new Array<ArgPropType>();

export type PlasmicArticleNav__OverridesType = {
  nav?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
};

export interface DefaultArticleNavProps {
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

function PlasmicArticleNav__RenderFunc(props: {
  variants: PlasmicArticleNav__VariantsArgs;
  args: PlasmicArticleNav__ArgsType;
  overrides: PlasmicArticleNav__OverridesType;
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
    (
      hasVariant(globalVariants, "screen", "largestMobile")
        ? true
        : hasVariant(globalVariants, "screen", "smallestMobile")
        ? true
        : true
    ) ? (
      <div
        data-plasmic-name={"nav"}
        data-plasmic-override={overrides.nav}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          sty.nav
        )}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__nS3We)}>
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/masteri_sparq/images/logopng.png",
                fullWidth: 276,
                fullHeight: 46,
                aspectRatio: undefined
              }}
            />
          </div>

          <div className={classNames(projectcss.all, sty.column__olnhm)}>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {'"The Evolution of Inhalation"'}
            </div>
          </div>
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  nav: ["nav", "columns", "img", "text"],
  columns: ["columns", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  nav: "div";
  columns: "div";
  img: typeof p.PlasmicImg;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleNav__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleNav__VariantsArgs;
    args?: PlasmicArticleNav__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticleNav__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticleNav__ArgsType,
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
          internalArgPropNames: PlasmicArticleNav__ArgProps,
          internalVariantPropNames: PlasmicArticleNav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArticleNav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "nav") {
    func.displayName = "PlasmicArticleNav";
  } else {
    func.displayName = `PlasmicArticleNav.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleNav = Object.assign(
  // Top-level PlasmicArticleNav renders the root element
  makeNodeComponent("nav"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicArticleNav
    internalVariantProps: PlasmicArticleNav__VariantProps,
    internalArgProps: PlasmicArticleNav__ArgProps
  }
);

export default PlasmicArticleNav;
/* prettier-ignore-end */
