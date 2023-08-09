/**
 * 行内公式的语法
 * 虽然叫做行内公式，Cherry依然将其视为“段落级语法”，因为其具备排他性并且需要优先渲染
 */
export default class InlineMath extends ParagraphBase {
    constructor({ config }: {
        config: any;
    });
    /** @type {'katex' | 'MathJax' | 'node'} */
    engine: 'katex' | 'MathJax' | 'node';
    katex: any;
    MathJax: any;
    makeInlineMath(str: any): any;
}
import ParagraphBase from "@/core/ParagraphBase";
