/// <reference path="neo-ts.d.ts" />
declare module NeoTest {
    interface ITestItem {
        getName(): string;
        start(div: HTMLDivElement): void;
    }
}
declare module NeoTest {
    class Test_CheckAddress implements ITestItem {
        constructor();
        getName(): string;
        start(div: HTMLDivElement): void;
    }
}
declare module NeoTest {
    class Test_Sign implements ITestItem {
        constructor();
        getName(): string;
        privateKey: Uint8Array;
        publicKey: Uint8Array;
        start(div: HTMLDivElement): void;
    }
}
declare module NeoTest {
    class Test_WifDecode implements ITestItem {
        constructor();
        getName(): string;
        start(div: HTMLDivElement): void;
    }
}
declare module NeoTest {
    class Test_Nep2 implements ITestItem {
        constructor();
        getName(): string;
        start(div: HTMLDivElement): void;
    }
}
