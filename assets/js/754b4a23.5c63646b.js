(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(8),a=(r(0),r(161)),l=["components"],c={title:"Field Guide"},o={unversionedId:"guides/framework/field-guide",id:"guides/framework/field-guide",isDocsHomePage:!1,title:"Field Guide",description:"Field is a lower level object that helps describe and convert tabular data.",source:"@site/../docs/guides/framework/field-guide.md",slug:"/guides/framework/field-guide",permalink:"/docs/guides/framework/field-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/framework/field-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1634282108,formattedLastUpdatedAt:"10/15/2021",sidebar:"guides",previous:{title:"Schema Guide",permalink:"/docs/guides/framework/schema-guide"},next:{title:"Layout Guide",permalink:"/docs/guides/framework/layout-guide"}},s=[{value:"Creating Field",id:"creating-field",children:[]},{value:"Field Types",id:"field-types",children:[]},{value:"Reading Cell",id:"reading-cell",children:[]},{value:"Writing Cell",id:"writing-cell",children:[]}],d={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,l);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Field is a lower level object that helps describe and convert tabular data."),Object(a.b)("h2",{id:"creating-field"},"Creating Field"),Object(a.b)("p",null,"Let's create a field:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Field\n\nfield = Field(name='name', type='integer')\n")),Object(a.b)("p",null,"Usually we work with fields which were already created by a schema:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import describe\n\nresource = describe('data/table.csv')\nfield = resource.schema.get_field('id')\n")),Object(a.b)("h2",{id:"field-types"},"Field Types"),Object(a.b)("p",null,"Frictionless Framework supports all the ",Object(a.b)("a",{parentName:"p",href:"https://specs.frictionlessdata.io/table-schema/#types-and-formats"},"Table Schema Spec")," field types along with an ability to create custom types."),Object(a.b)("p",null,"For some types there are additional properties available:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import describe\n\nresource = describe('data/table.csv')\nfield = resource.schema.get_field('id') # it's an integer\nfield.bare_number\n")),Object(a.b)("h2",{id:"reading-cell"},"Reading Cell"),Object(a.b)("p",null,"During the process of data reading a schema uses a field internally. If needed a user can convert their data using this interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Field\n\nfield = Field(name='name', type='integer')\nfield.read_cell('3') # 3\n")),Object(a.b)("h2",{id:"writing-cell"},"Writing Cell"),Object(a.b)("p",null,"During the process of data writing a schema uses a field internally. The same as with reasing a user can convert their data using this interface:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python",metastring:'script title="Python"',script:!0,title:'"Python"'},"from frictionless import Field\n\nfield = Field(name='name', type='integer')\nfield.write_cell(3) # '3'\n")))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,b=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return r?i.a.createElement(b,c(c({ref:t},s),{},{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);