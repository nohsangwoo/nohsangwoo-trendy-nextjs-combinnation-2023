"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function Home() {
    const count = useAppSelector((state) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <div style={{ marginBottom: "4rem", textAlign: "center" }}>
                <h4 style={{ marginBottom: 16 }}>{count}</h4>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{ marginInline: 16 }}
                >
                    decrement
                </button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: 20,
                }}
            >
                <div
                    key={"sangwoo"}
                    style={{
                        border: "1px solid #ccc",
                        textAlign: "center",
                    }}
                >
                    {/*     <Image
                        src={`https://robohash.org/nohsangwoo`}
                        alt={"nohsangwoo"}
                        style={{ height: "180px", width: "180px" }}
                        width={180}
                        height={180}
                    /> */}
                    <h3>{"nohsangwoo"}</h3>
                </div>
            </div>
        </main>
    );
}
