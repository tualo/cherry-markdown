Ext.define('Tualo.cherrymarkdown.form.field.CherryMarkdown', {
    extend: 'Ext.form.field.TextArea',
    alias: ['widget.cherrymarkdown'],
    language: null,

    height: 300,

    fieldSubTpl: [ // note: {id} here is really {inputId}, but {cmpId} is available 
      '<textarea id="{id}" data-ref="inputEl" type="{type}" {inputAttrTpl}',
          ' size="1"', // allows inputs to fully respect CSS widths across all browsers 
          '<tpl if="name"> name="{name}"</tpl>',
          '<tpl if="placeholder"> placeholder="{placeholder}"</tpl>',
          '{%if (values.maxLength !== undefined){%} maxlength="{maxLength}"{%}%}',
          '<tpl if="readOnly"> readonly="readonly"</tpl>',
          '<tpl if="disabled"> disabled="disabled"</tpl>',
          '<tpl if="tabIdx != null"> tabindex="{tabIdx}"</tpl>',
          '<tpl if="fieldStyle"> style="{fieldStyle}"</tpl>',
          '<tpl foreach="inputElAriaAttributes"> {$}="{.}"</tpl>',
      ' class="{fieldCls} {typeCls} {typeCls}-{ui} {editableCls} {inputCls}" autocomplete="off"',
      '/>',
      '<tpl if="value">{[Ext.util.Format.htmlEncode(values.value)]}"</tpl>',
      '</textarea>',
      {
          disableFormats: true
      }
    ],
    
    
    initComponent: function(){
      var me = this;
      me.callParent();
    }, 
 
    onShow: function(){
        var me = this;
        console.log('onShow','--------------- SHOW ------------------');
        me.callParent(arguments);
    },
    afterRender: function () {
      var me = this;
      me.callParent(arguments);
      try{
        me.createEditor();
        document.querySelector('#'+me.id+'-bodyEl').style.display='none';
      }catch(e){
        console.error(e);
      }
    },
    
    createEditor: function(){
        let me = this;
        this.cherrymarkdown = new Cherry({
            id: this.id,
            value: '',
            previewer: {
                enablePreviewerBubble: false
            },
            callback: {
                afterChange: this.onDidChangeContent.bind(this)
            },
           locale: 'de_DE'
        });
    },
    onDestroy: function(){
        //this.cherrymarkdown.dispose();
        this.callParent();
    },
    onResize: function(w,h){
        this.callParent(arguments);
        //this.cherrymarkdown.editor.setSize(w,h);
    },
    onDidChangeContent: function(event){
        this.setValue( this.cherrymarkdown.getValue() ); 
    },
    
    setRawValue: function(value) {
        //console.log('setRawValue',this.$className);
        this.callParent([value]);
        
        if (typeof this.cherrymarkdown!='undefined'){
            if (this.cherrymarkdown.getValue()!=value){
                this.cherrymarkdown.setValue(value);
            }
        }
    },
    setValue: function(value) {
        //console.log('setValue',this.$className);
        this.callParent([value]);
    }
});