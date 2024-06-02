import React from "react";
import Root from "./Root";

// @ts-ignore
import loadingSVG from "../assets/loading.svg";

export function LoadingSpinner() {
  return (
    <Root>
      <div className='flex flex-row justify-center align-middle'>
        <img src={loadingSVG} width={100} height={100} alt='loading' />
      </div>
    </Root>
  );
}
