DELIMITER ;

insert ignore into  extjs_base_types (id,classname,baseclass,xtype_long_modern,xtype_long_classic,name,vendor,
iscolumn,
isformfield) values 
(
    'Tualo.cherrymarkdown.form.field.CherryMarkdown (widget.cherrymarkdown)',
    'Tualo.cherrymarkdown.form.field.CherryMarkdown',
    'Ext.field.Field',
    'widget.cherrymarkdown',
    'widget.cherrymarkdown',
    'Tualo.cherrymarkdown.form.field.CherryMarkdown',
    'tualo solutions GmbH',
    0,
    1
) 
on duplicate key update xtype_long_modern=values(xtype_long_modern),
xtype_long_classic=values(xtype_long_classic),
isformfield=values(isformfield);
