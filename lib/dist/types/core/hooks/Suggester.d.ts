/**
 * @typedef {import('codemirror')} CodeMirror
 */
/**
 * @typedef { Object } SuggestListItemObject 推荐列表项对象
 * @property { string } icon 图标
 * @property { string } label 候选列表回显的内容
 * @property { string } value 点击候选项的时候回填的值
 * @property { string } keyword 关键词，通过关键词控制候选项的显隐
 * @typedef { SuggestListItemObject | string } SuggestListItem 推荐列表项
 * @typedef { Array<SuggestListItem> } SuggestList 推荐列表
 */
/**
 * @typedef {object} SuggesterConfigItem
 * @property {function(string, function(SuggestList): void): void} suggestList
 * @property {string} keyword
 * @property {function} suggestListRender
 * @property {function} echo
 * @typedef {object} SuggesterConfig
 * @property {Array<SuggesterConfigItem>} suggester
 */
export default class Suggester extends SyntaxBase {
    constructor({ config }: {
        config: any;
    });
    config: any;
    /**
     * 获取系统默认的候选项列表
     * TODO：后面考虑增加层级机制，比如“公式”是一级，“集合、逻辑运算、方程式”是公式的二级候选值
     */
    getSystemSuggestList(): {
        icon: string;
        label: any;
        keyword: string;
        value: any;
    }[];
    /**
     * 初始化配置
     * @param {SuggesterConfig} config
     */
    initConfig(config: SuggesterConfig): void;
    suggester: {};
    toHtml(wholeMatch: any, leadingChar: any, keyword: any, text: any): any;
}
export type CodeMirror = typeof import("codemirror");
/**
 * 推荐列表项对象
 */
export type SuggestListItemObject = {
    /**
     * 图标
     */
    icon: string;
    /**
     * 候选列表回显的内容
     */
    label: string;
    /**
     * 点击候选项的时候回填的值
     */
    value: string;
    /**
     * 关键词，通过关键词控制候选项的显隐
     */
    keyword: string;
};
/**
 * 推荐列表项
 */
export type SuggestListItem = SuggestListItemObject | string;
/**
 * 推荐列表
 */
export type SuggestList = Array<SuggestListItem>;
export type SuggesterConfigItem = {
    suggestList: (arg0: string, arg1: (arg0: SuggestList) => void) => void;
    keyword: string;
    suggestListRender: Function;
    echo: Function;
};
export type SuggesterConfig = {
    suggester: Array<SuggesterConfigItem>;
};
import SyntaxBase from "@/core/SyntaxBase";
