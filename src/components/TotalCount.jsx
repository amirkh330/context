import React from "react";
import { Values } from "../StageManeger";

export default function TotalCount() {
    const { count } = Values();
    return <div className="total">{count}</div>;
}
