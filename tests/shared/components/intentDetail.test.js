/**
 * Copyright (c) 2015-present, CWB SAS
 *
 * This source code is licensed under the GPL v2.0+ license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import renderer from "react-test-renderer";
import IntentDetail from "shared/components/intentDetail";

describe("components/intentDetail", () => {
  const defaultProps = {
    intent: {},
    onSelect: () => {},
    onEdit: () => {},
    onAction: () => {},
  };

  it("renders correctly", () => {
    const intent = { topic: "some intent" };
    const component = renderer.create(
      <IntentDetail {...defaultProps} intent={intent} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("can render intent with special characters correctly", () => {
    const intentcontent = [
      `{{${encodeURIComponent("{{text}}")}}}`,
      `<<${encodeURIComponent("<<var>>")}>>`,
    ].join("");
    const intent = { topic: intentcontent };
    const component = renderer.create(
      <IntentDetail {...defaultProps} intent={intent} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
