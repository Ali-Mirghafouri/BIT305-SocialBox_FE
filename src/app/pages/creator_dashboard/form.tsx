"use client";
import { useState } from "react";
import "./page.css";

interface CollectionInputsProps {
  setInputs: (temp: object) => void;
  setModal: (temp: boolean) => void;
  mint: () => void;
  inputs: {
    name: string;
    iteration: number;
  };
  assets: any;
}

export const CollectionInputs = ({
  setInputs,
  setModal,
  inputs,
  mint,
  assets,
}: CollectionInputsProps) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
    }}
  >
    <div className="dashboard_form">
      <form>
        <label className="dashboard_form_label">Collection Name</label>
        <input
          className="dashboard_form_input"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          placeholder="APE"
        />
        <label className="dashboard_form_label">number to Generate</label>
        <input
          className="dashboard_form_input"
          value={inputs.iteration}
          type="number"
          onChange={(e) => setInputs({ ...inputs, iteration: e.target.value })}
          placeholder="number to Generate"
        />

        <div className="flex_center">
          <button
            className="dashboard_mint_button"
            onClick={() => setModal(false)}
          >
            exit
          </button>
          <div className="flex_grow" />
          <button className="dashboard_mint_button" onClick={() => mint()}>
            Mint
          </button>
        </div>
      </form>
    </div>
  </div>
);
