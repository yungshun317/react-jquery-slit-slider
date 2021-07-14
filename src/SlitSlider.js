import React from "react";

import $ from "jquery";

export default function SlitSlider() {
    return (
        <>
            <div class="sl-slide bg-1"
                 data-orientation="horizontal"
                 data-slice1-rotation="-25"
                 data-slice2-rotation="-25"
                 data-slice1-scale="2"
                 data-slice2-scale="2">
                <div class="sl-slide-inner">
                    <div class="sl-slide-inner">
                        <div class="deco" data-icon="H"></div>
                        <h2>A bene placito</h2>
                        <blockquote>
                            <p>You have just dined, and however scrupulously the slaughterhouse is concealed in
                            the graceful distance of miles, there is complicity.</p>
                            <cite>Ralph Waldo Emerson</cite>
                        </blockquote>
                    </div>
                </div>

            </div>
        </>
    );
}