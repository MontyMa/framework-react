/// <reference types="react-scripts" />

// 修正 setTimeout 类型问题
declare function setTimeout(handler: (...args: any[]) => void, timeout?: number, ...args: any[]): number;

// 修正 setInterval 类型问题
declare function setInterval(handler: (...args: any[]) => void, timeout?: number, ...args: any[]): number;

