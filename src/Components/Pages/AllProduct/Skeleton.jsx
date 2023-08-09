import { Skeleton } from "antd";
import React from "react";
import "./Skeleton.scss";

const SkeletonpProdcuts = () => {
  return (
    <div className="skeleton_container">
      {Array(20)
        .fill("")
        .map((ele) => {
          return (
            <div className="skeleton_content">
              <Skeleton.Image
                active={true}
                size={"small"}
                shape={""}
                block={true}
              />
              <Skeleton.Input
                active={true}
                size={"small"}
                shape={"circle"}
                block={true}
              />

              <Skeleton.Input
                active={true}
                size={"small"}
                shape={"circle"}
                block={true}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SkeletonpProdcuts;
