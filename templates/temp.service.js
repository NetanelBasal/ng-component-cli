class {{name | camelCaseSnake}}Service{
  // @ngInject
   constructor({% for dep in depend -%}{{dep}}{% if dep !== depend[depend.length - 1] -%},{%- endif %}{%- endfor %}) {
     {% for dep in depend %}
        this.{{ dep }} = {{dep}};{% endfor %}
   }

}

export default {{name | camelCaseSnake}}Service

