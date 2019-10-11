var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-container'])
Z([3,'top-box'])
Z([3,'top-box-img'])
Z([3,'../../static/gues/banned%20.png'])
Z([3,'left-box'])
Z([3,'left-box-corn'])
Z([3,'left-box-corn-font'])
Z([3,'可用玉米：15'])
Z([3,'left-box-img'])
Z([3,'../../static/gues/corn-grain.png'])
Z([3,'top-tabbar'])
Z([3,'top-tabbar-item'])
Z([3,'item-num'])
Z([3,'10'])
Z([3,'item-font'])
Z([3,'竞猜场数'])
Z(z[11])
Z(z[12])
Z([3,'4'])
Z(z[14])
Z([3,'猜中场数'])
Z(z[11])
Z(z[12])
Z([3,'9999'])
Z(z[14])
Z([3,'竞猜金额'])
Z([3,'record-list'])
Z([3,'list-header'])
Z([3,'场次时间'])
Z([3,'级别'])
Z([3,'冠军'])
Z([3,'收益'])
Z([3,'比赛'])
Z([3,'list-item'])
Z([3,'item-date'])
Z([3,'2019-10-01'])
Z([3,'item-data'])
Z([3,'item-data-ing'])
Z([3,'进行中'])
Z([3,'item-data-ing-time'])
Z([3,'19:35:26'])
Z([3,'中级场'])
Z([3,'item-data-img'])
Z([3,'../../static/gues/champion.png'])
Z([3,'---'])
Z([3,'item-data-see'])
Z([3,'查看'])
Z([3,'_table'])
Z([3,'_thead'])
Z([3,'_tr'])
Z([3,'_th'])
Z([3,'Month'])
Z(z[50])
Z([3,'Savings'])
Z([3,'__i0__'])
Z([3,'n'])
Z([1,3])
Z([3,'*this'])
Z([3,'_tbody'])
Z(z[49])
Z([3,'_td'])
Z(z[35])
Z([3,'__i1__'])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[49])
Z(z[60])
Z([3,'February'])
Z(z[60])
Z([3,'$80'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-container'])
Z([3,'top-box'])
Z([3,'top-box-img'])
Z([3,'../../static/index/banned%20.png'])
Z([3,'left-box'])
Z([3,'left-box-corn'])
Z([3,'可用玉米：15'])
Z([3,'left-box-img'])
Z([3,'../../static/index/corn-grain.png'])
Z([3,'竞猜：10'])
Z([3,'right-box'])
Z([3,'guesRecord'])
Z([3,'竞猜记录'])
Z([3,'iconfont icon-btn_gengduo_xiangyoujiantoux'])
Z([3,'top-tabbar'])
Z([3,'top-tabbar-item'])
Z([3,'top-tabbar-img'])
Z([3,'../../static/index/corn.png'])
Z([3,'top-tabbar-font'])
Z([3,'玉米商城'])
Z(z[15])
Z(z[16])
Z([3,'../../static/index/gues.png'])
Z(z[18])
Z([3,'我的竞猜'])
Z(z[15])
Z(z[16])
Z([3,'../../static/index/collect-corn.png'])
Z(z[18])
Z([3,'领取玉米'])
Z([1,true])
Z(z[30])
Z([3,'swiper'])
Z([1,500])
Z([1,3500])
Z(z[30])
Z([3,'swiper-item uni-bg-red'])
Z([3,'A'])
Z([3,'swiper-item uni-bg-green'])
Z([3,'B'])
Z([3,'swiper-item uni-bg-blue'])
Z([3,'C'])
Z([3,'site-num-list'])
Z([3,'__i0__'])
Z([3,'n'])
Z([1,3])
Z([3,'site-num-item'])
Z([3,'site-num-item-img'])
Z([3,'../../static/index/primary-chart.png'])
Z([3,'site-num-item-right'])
Z([3,'site-class'])
Z([3,'初级场 2 倍'])
Z([3,'games-limit'])
Z([3,'拥有一颗玉米粒即可参加'])
Z([3,'multiple-box'])
Z([3,'multiple-box-num'])
Z([3,'2'])
Z([3,'multiple-box-font'])
Z([3,'倍'])
Z([3,'to-join'])
Z([3,'去参加'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/alpaca/guesRecord.wxml','./pages/alpaca/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(xC,oD)
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
_(cF,hG)
var cI=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(cF,cI)
_(fE,cF)
_(xC,fE)
_(oB,xC)
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',11,e,s,gg)
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
var tM=_oz(z,13,e,s,gg)
_(aL,tM)
_(lK,aL)
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
var bO=_oz(z,15,e,s,gg)
_(eN,bO)
_(lK,eN)
_(oJ,lK)
var oP=_n('view')
_rz(z,oP,'class',16,e,s,gg)
var xQ=_n('view')
_rz(z,xQ,'class',17,e,s,gg)
var oR=_oz(z,18,e,s,gg)
_(xQ,oR)
_(oP,xQ)
var fS=_n('view')
_rz(z,fS,'class',19,e,s,gg)
var cT=_oz(z,20,e,s,gg)
_(fS,cT)
_(oP,fS)
_(oJ,oP)
var hU=_n('view')
_rz(z,hU,'class',21,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',22,e,s,gg)
var cW=_oz(z,23,e,s,gg)
_(oV,cW)
_(hU,oV)
var oX=_n('view')
_rz(z,oX,'class',24,e,s,gg)
var lY=_oz(z,25,e,s,gg)
_(oX,lY)
_(hU,oX)
_(oJ,hU)
_(oB,oJ)
var aZ=_n('view')
_rz(z,aZ,'class',26,e,s,gg)
var t1=_n('view')
_rz(z,t1,'class',27,e,s,gg)
var e2=_n('view')
var b3=_oz(z,28,e,s,gg)
_(e2,b3)
_(t1,e2)
var o4=_n('view')
var x5=_oz(z,29,e,s,gg)
_(o4,x5)
_(t1,o4)
var o6=_n('view')
var f7=_oz(z,30,e,s,gg)
_(o6,f7)
_(t1,o6)
var c8=_n('view')
var h9=_oz(z,31,e,s,gg)
_(c8,h9)
_(t1,c8)
var o0=_n('view')
var cAB=_oz(z,32,e,s,gg)
_(o0,cAB)
_(t1,o0)
_(aZ,t1)
var oBB=_n('view')
_rz(z,oBB,'class',33,e,s,gg)
var lCB=_n('view')
_rz(z,lCB,'class',34,e,s,gg)
var aDB=_oz(z,35,e,s,gg)
_(lCB,aDB)
_(oBB,lCB)
var tEB=_n('view')
_rz(z,tEB,'class',36,e,s,gg)
var eFB=_n('view')
_rz(z,eFB,'class',37,e,s,gg)
var bGB=_n('view')
var oHB=_oz(z,38,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
var xIB=_n('view')
_rz(z,xIB,'class',39,e,s,gg)
var oJB=_oz(z,40,e,s,gg)
_(xIB,oJB)
_(eFB,xIB)
_(tEB,eFB)
var fKB=_n('view')
var cLB=_oz(z,41,e,s,gg)
_(fKB,cLB)
_(tEB,fKB)
var hMB=_mz(z,'image',['class',42,'src',1],[],e,s,gg)
_(tEB,hMB)
var oNB=_n('view')
var cOB=_oz(z,44,e,s,gg)
_(oNB,cOB)
_(tEB,oNB)
var oPB=_n('view')
_rz(z,oPB,'class',45,e,s,gg)
var lQB=_oz(z,46,e,s,gg)
_(oPB,lQB)
_(tEB,oPB)
_(oBB,tEB)
_(aZ,oBB)
var aRB=_n('view')
var tSB=_n('view')
_rz(z,tSB,'class',47,e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',48,e,s,gg)
var bUB=_n('view')
_rz(z,bUB,'class',49,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',50,e,s,gg)
var xWB=_oz(z,51,e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
var oXB=_n('view')
_rz(z,oXB,'class',52,e,s,gg)
var fYB=_oz(z,53,e,s,gg)
_(oXB,fYB)
_(bUB,oXB)
_(eTB,bUB)
_(tSB,eTB)
var cZB=_v()
_(tSB,cZB)
var h1B=function(c3B,o2B,o4B,gg){
var a6B=_n('view')
_rz(z,a6B,'class',58,c3B,o2B,gg)
var t7B=_n('view')
_rz(z,t7B,'class',59,c3B,o2B,gg)
var e8B=_n('view')
_rz(z,e8B,'class',60,c3B,o2B,gg)
var b9B=_oz(z,61,c3B,o2B,gg)
_(e8B,b9B)
_(t7B,e8B)
_(a6B,t7B)
var o0B=_v()
_(a6B,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_n('view')
_rz(z,oFC,'class',66,fCC,oBC,gg)
var cGC=_n('view')
_rz(z,cGC,'class',67,fCC,oBC,gg)
var oHC=_oz(z,68,fCC,oBC,gg)
_(cGC,oHC)
_(oFC,cGC)
var lIC=_n('view')
_rz(z,lIC,'class',69,fCC,oBC,gg)
var aJC=_oz(z,70,fCC,oBC,gg)
_(lIC,aJC)
_(oFC,lIC)
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=2
_2z(z,64,xAC,c3B,o2B,gg,o0B,'n','__i1__','*this')
_(o4B,a6B)
return o4B
}
cZB.wxXCkey=2
_2z(z,56,h1B,e,s,gg,cZB,'n','__i0__','*this')
_(aRB,tSB)
_(aZ,aRB)
_(oB,aZ)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var eLC=_n('view')
_rz(z,eLC,'class',0,e,s,gg)
var bMC=_n('view')
_rz(z,bMC,'class',1,e,s,gg)
var oNC=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(bMC,oNC)
var xOC=_n('view')
_rz(z,xOC,'class',4,e,s,gg)
var oPC=_n('view')
_rz(z,oPC,'class',5,e,s,gg)
var fQC=_n('view')
var cRC=_oz(z,6,e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
var hSC=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(oPC,hSC)
_(xOC,oPC)
var oTC=_n('view')
var cUC=_oz(z,9,e,s,gg)
_(oTC,cUC)
_(xOC,oTC)
_(bMC,xOC)
var oVC=_mz(z,'navigator',['class',10,'url',1],[],e,s,gg)
var lWC=_n('view')
var aXC=_oz(z,12,e,s,gg)
_(lWC,aXC)
_(oVC,lWC)
var tYC=_n('view')
_rz(z,tYC,'class',13,e,s,gg)
_(oVC,tYC)
_(bMC,oVC)
_(eLC,bMC)
var eZC=_n('view')
_rz(z,eZC,'class',14,e,s,gg)
var b1C=_n('view')
_rz(z,b1C,'class',15,e,s,gg)
var o2C=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
_(b1C,o2C)
var x3C=_n('view')
_rz(z,x3C,'class',18,e,s,gg)
var o4C=_oz(z,19,e,s,gg)
_(x3C,o4C)
_(b1C,x3C)
_(eZC,b1C)
var f5C=_n('view')
_rz(z,f5C,'class',20,e,s,gg)
var c6C=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
_(f5C,c6C)
var h7C=_n('view')
_rz(z,h7C,'class',23,e,s,gg)
var o8C=_oz(z,24,e,s,gg)
_(h7C,o8C)
_(f5C,h7C)
_(eZC,f5C)
var c9C=_n('view')
_rz(z,c9C,'class',25,e,s,gg)
var o0C=_mz(z,'image',['class',26,'src',1],[],e,s,gg)
_(c9C,o0C)
var lAD=_n('view')
_rz(z,lAD,'class',28,e,s,gg)
var aBD=_oz(z,29,e,s,gg)
_(lAD,aBD)
_(c9C,lAD)
_(eZC,c9C)
_(eLC,eZC)
var tCD=_mz(z,'swiper',['autoplay',30,'circular',1,'class',2,'duration',3,'interval',4,'vertical',5],[],e,s,gg)
var eDD=_n('swiper-item')
var bED=_n('view')
_rz(z,bED,'class',36,e,s,gg)
var oFD=_oz(z,37,e,s,gg)
_(bED,oFD)
_(eDD,bED)
_(tCD,eDD)
var xGD=_n('swiper-item')
var oHD=_n('view')
_rz(z,oHD,'class',38,e,s,gg)
var fID=_oz(z,39,e,s,gg)
_(oHD,fID)
_(xGD,oHD)
_(tCD,xGD)
var cJD=_n('swiper-item')
var hKD=_n('view')
_rz(z,hKD,'class',40,e,s,gg)
var oLD=_oz(z,41,e,s,gg)
_(hKD,oLD)
_(cJD,hKD)
_(tCD,cJD)
_(eLC,tCD)
var cMD=_n('view')
_rz(z,cMD,'class',42,e,s,gg)
var oND=_v()
_(cMD,oND)
var lOD=function(tQD,aPD,eRD,gg){
var oTD=_n('view')
_rz(z,oTD,'class',46,tQD,aPD,gg)
var xUD=_mz(z,'image',['class',47,'src',1],[],tQD,aPD,gg)
_(oTD,xUD)
var oVD=_n('view')
_rz(z,oVD,'class',49,tQD,aPD,gg)
var fWD=_n('view')
_rz(z,fWD,'class',50,tQD,aPD,gg)
var cXD=_oz(z,51,tQD,aPD,gg)
_(fWD,cXD)
_(oVD,fWD)
var hYD=_n('view')
_rz(z,hYD,'class',52,tQD,aPD,gg)
var oZD=_oz(z,53,tQD,aPD,gg)
_(hYD,oZD)
_(oVD,hYD)
var c1D=_n('view')
_rz(z,c1D,'class',54,tQD,aPD,gg)
var o2D=_n('view')
_rz(z,o2D,'class',55,tQD,aPD,gg)
var l3D=_oz(z,56,tQD,aPD,gg)
_(o2D,l3D)
_(c1D,o2D)
var a4D=_n('view')
_rz(z,a4D,'class',57,tQD,aPD,gg)
var t5D=_oz(z,58,tQD,aPD,gg)
_(a4D,t5D)
_(c1D,a4D)
_(oVD,c1D)
var e6D=_n('view')
_rz(z,e6D,'class',59,tQD,aPD,gg)
var b7D=_oz(z,60,tQD,aPD,gg)
_(e6D,b7D)
_(oVD,e6D)
_(oTD,oVD)
_(eRD,oTD)
return eRD
}
oND.wxXCkey=2
_2z(z,45,lOD,e,s,gg,oND,'n','__i0__','')
_(eLC,cMD)
_(r,eLC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x27iconfont\x27; src:url(\x27data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAADrcAAsAAAAAcmAAADqKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCPHgqBt2yBjywBNgIkA4MsC4FYAAQgBYRtB5AMG4BcZUF4HIDAd3lGVKySIwPBxoEA0m7I/v97UjnEJCMtcLPDkRFo2Sk4Bg8OTCzejQJjouMXj89Ex9EvmrLuN+uXkz7T5F1myM/FwoW3YdN7OeRnfbPBkTDMDj/oIuUxb/nq68pWhjrNW/2XOhi1HJIUTZMewl9u/x1qHkyCWFDrCvqOonxM4Hm62vv3bPfNIUSBrWkuGQ0IMLchiXZxxTQGeCCOvW/dwlH4I3qZgFHg49kEd7MBDSQSdPbfpcuJSCOrdq3ShiJ6z8N4ODM/tQ7Pz633Y8H+mqgBYyNGjw0QcMAYK6I3QkJoBaTCOIYYhIHNUE7EOBl6YN4JBore6YEnKCoGHsZpYzUrgIDDuWzt1z4Bjym5jIBl48wIIMyRqSMrz5WV/N+c1djUJpO2a4FOH1vWrFHe85jYxP4/E9jlUNNFKCzDgLqzN5jT9yU7GUi20644/oBwHYEtBx6EmjzkXOSrdKVQmwehJhs/QLCd++b7OvMp2IDMtxGtX+9rhi3TflN8P2d2ITpHisYB3+U2tpfbfQLEzMeLxMLIK/hxrd7EJpUPFlreZVskVdkj/AA4JrGJnZkjJlWogBoC8saT+cRfcSK7qFuXRIEnQZTGHA2LKMBII7GuTC1TgOaNx//LGfwV5GyQsHIlgUpJND2zAHZ2sDzMAjhxdwHeLckzC5zBghSFBd8AvJMK4DvyrY3k/S5ISrvgGwDvwLeALCnrotdnyozPjA0ixUpiZZFCxenD/098l5O3DBCU3Pdby1onHmOuTqofyxkVkqHiCMEYmj/XMpxOL+JVQ4IlUH7NAPM81DaRWCliejn/bIDh7LinjemlJl6QBm1MRrPTaVtCa2++HuAvfn/4A2MbETASHcC/Nfk9r5MJxP4vIt2o+46b82tvxrKFMRyAGRjdM4uYapv+AK4T1trbcrAl+Cp75JQzT0Ul5aiuoXd2/faJxfSDfs4FFcax45AzePmH12diSlBI2JifqJi4hKSUrJy8gqKSsiFLH3UNTetWrdmwacu2Hbv27Dtw6MixE6P9/T2vcaksDKZmNiQyhUqjOzgzWWwOl8cXCEViiVQmVyhVao1WpzcYTWaL1dHJ2cXVzd3D00taRkVVu8DQDfztAjCzF5bfBEWYIhhXCcE1QjFBOCxFeFwnAm4QETfJALeIhNuE4Q6RcZcoeEBUPCQaHhEdk8TAY2LiCRniKRlhITLGYmSCF2SKl2SGV2SO12SBd2SJN8TCW7LCe7LGB7LBR2LjE9niM3Hwhbj4Snb4Rvb4Tg74QY74STz8IqfOzoMrYAnywBiFYkDhmIOiMAOpMAslYzZKwSK0AHNRLeaj5ViAdmIZ6sJytAsrUDdWot1YhfZgNdqLNWgf5qHfsBbtxzrUg/VIhw2oFxvRAWxCB7EZ/Y4tqA9bUT+2oUPYjg5jBzqCnegodqFj2I2OYw/6A3vRn9iHTmA/GsABNIiD6CQOoVM4jE7jCDqDo2gIx9BZHEfncAIN4yQ6j1PoAk6jv3AG/Y2z6CLOoUs4j/7BBTSCi2gUl9BlXEb/4gpdwT0aw30axzO6iuf8t8AI0xd3ZgJ/kvNt8A8wPIQNj9h5x0+PvjE3Dlg+Y7A2E6o8XfmGzoEKMCliytotIotpHLAoYFkoW02BnzldFeCsW5maWzDZFhJak7MNfIYLMQNfY25BJEvCUlbZMpiN6xWKAZOeCPNOcSp2tTFpFPVOlGs3W6cmIsshB1FFSCfz/FVNSgov0O7c8C23cHWeMguUCAUqEquU13r5E/otUOTApRjSHlBUpQCvcpPZysOiENj3CHTtxkjYEJ8A9Ud+zS9B6lhKjUGadoqQ9F7F2/rvi0hkk4YcG7DqUJq5zG4iNXGW7YGkGmV/7wrE4QokKZu1y81r2Ob76Ku5BYkxdXXNE9EHBj+10ATSDP4VKW/yYjeAq9LBtWWIfdosND63dfn0nf1EHRyX9Ui6cQ3ZNsXcf8rSb8tmi/ggedpeeD1r07DoWIGDwi7Gwni93/vM6bJ+Il5hmUtWj2QZNlQyC/XTWAWS9EH3ElWcS0vkF171V36o+PzsaQ7Dv21zC99fe787EDyxxBmBcbQbsIFVRIkjJ5IZeWZIWsCBtZVT4SF1rFw+kdTk2QLviQUhUETs+idEiPetaBMjpFc3427Tbul8Qs+8N6qDXCZXEY9wlBT7hZ3KXy3L4O1jq1lms+22E4bVbZqdrG00Wn4vbdqDjt1tkcMVPffS81sHnTRstnOlPp4EaFzIQhtYsjlOMDCR5szGitS5uamz2IzoXBdAOHTHvoat5tw/n5XsEvZwpee40CrTCz985ydCz5WOsfI6um2tVCTt1BWa/DaFhcmXxB8IXyh64/VEH0VOHIiAZ/KT1OcLwvXlxEeHxxVybTr//wEhntgPnjwUQ2Kw0/TFRem7avLjY1Ma+1aw9Mu5M87bPTF22G1oQQQQwNEXx5YAbe6MIQ0ZioxI5Kjw4EkJbgj7XZEJ8eb+dKTI7OzicOabdwfWAiPRkD9AN+JNCm1Omn/tzZXm56nxyAzxbC5W3dwVR8Oo8NlIredlSWnNyN/6KRzX2f35xOO1Wv7yLaFzhMBa0K62xkgbgpbmAwz/Un75VXoy9e+rtrXNLbxBWo2JpPmNyZqgAXhV4Sewnk8GiqOVcMl/KGHa1xKXga2N0KyRq4xrJi4SQ5qlqaTiPqAk5wpRLxocpKhKFE9eBlM4OPW8Da3npk20Cdjl/1YNbNaavYpYXZoOQup3K2OCxs/C3NCbbo9GxiIROiMqooq/h8G7gGFvrTHMWSHNSdlbYH3eUCRofpuW6kNSIZuBJzz6huajnSmzc8TUppIBdaF4btrY9LHND1g5T2b5ajocHYY0UVMieIPclTbO6eC8VbOtkIEqiFHbxlg23hpcLJNr2023a/f8TiXFlrpy4RujzXOtm1Kbx1SBfYONDr+PTvHEDN8HGNacbrOm2sqm2gwk828pKKcZUqJDFBsQ3diym+s1NrByiOUTiHWjZqv0+P/YD34xrwxho48YCCBzbBZUbxDEHu/SpIQpDCCxcsJlUS0iCuGbf0B8IJMn7s3l4hsK9zi6k8kR4rSftxpZo+Epe9/cpoGT69pPhvt2MprcO7N51S8GOQPPQwaFmx+nyYav+nFHBopLG1ulkVOuVkY62WRxadUulEX+TqzSoZHzHx3Yu3/s/bPaf0AsX4srB77B91jwaOEHpzMD3QmRF4QP7iMAgsEY6075VR3JwdChWnXLIIYF6iwdPddxRIkdIYxsjaWxbVx1FpBrxgYS4m1fk6ti/ytzXFV4q2We8dh5fFGuqYxHRkXVBbHKk+Fj4tOxs+sKH30ycrdN8eOPhvaOL3/68aq3Z0tpCX9pM9qbMFAW7qTlnHLHDS5Jb8pScT1MHe5tLCXlcLWinC7Pp6IJa86LbwhK8X3Te6UcCWievIzam9K7jeUGdYc5tN/lzMqUnW1kEgJFdILUh7AX0ZLdsPqyWIVSZxiRCTHESEWQ0EFE1h4PJjAiTYu6sgAXE1HOlEevRJOOIBYwnnlV0+MfAdA/guhtkonnn4//E80Y/r41JktZuwVLo7RBxCpx4jZFeib7zTFfpOrWnIYGbUTEKU9anPGgKxmriSjDOdn+2Ox0vkmdaH3kWt3cTGibN+xkpcUIjDFLQwZF4PScwgOb2pTW4BSw5ZAwRCGhNmhqwYHwbTF0181GFnP41QU4HM6D5QtfpU51PoFjrpuOKoAr7a+d480PwQ2q2nzEcggQE0ITAgmxLXdem/RslGfWR76T2PB8OC7tp/n8QxpNHG1z9dlo8pMKd3ZJsbEQFzp6TzwdVobkUNTVwljrtBWLYVhCwVL50seBKe8nl9kpTcBh1jRj1Vkn23bvG7vY+tvYoH3+y6OSB3nUqJ+XuvEAwoBGe0gZRT+QF8Ys45lACJFP0AALbs+t0ojw21TIE19HnaPgEtcz2JsadJmeUSyYJWP7aR5sbq6uJ05Ku6Jy5TbchP8XUn1OC2ZzHeWRqE/daQ6xPedU5PMy30qfEDaw/CTEGX8uVN3p7plsm1sFqOPXSorVt8xwVOZfh/aIWAgcUQdL2ITMM6qsECjRI8vEyDrELMYPWv0KJpvZ4EiUhxPt5n18pihkb1aVMJ2prySpQAwtLEzB1Kr2TkptoHCTUdHOTfmslAGIaoxH/Tx8sMrNqqiQfW1OW6DXqJQF3F+qEqdgoRJV2/y48BpSocwhRhUG+GULII150tHe7MZQj2USRSJdRSqNY86x4t6pIsoLAIMiFnBJM5mlWnHZ3SlIlStAENcDkn0ZCZe+poeWbl87k67umNGoryoqQDdRHjGZ4m1gbceL8hmYkfwzJWxx02G3bXaq3o5rrbyG4lJRGTAKZc4yo0vYnFeMdaQ1la7JfKgctdtJzgfijBneWiPKxI+x7okKiYIK3GUucGtg8r6JBBC+6UBZMVGGYlTRMnOOmg1DpDoTlFTqhkFA9YPleMtvJAdnDpg2y7s2Hc3auXxzsQRll4er4brbTHWPrdd3l395tDpjpjONheIt6vzRqSHqhcu+fEPvNCu3c04SNY80dTSMEPOKLBsAp6ZiszQHtTwGg6I4zFU+1Q59MloXAEklzTMkK+zkouvNZaKtAx7w2XAm3Z3vwVB1hX1O/SQo/1GJr53YwZpSNdezu78WebcsQBGK2+cCdqlWZ2N7pmQTUt5r1VsZvWOUivkukRzMjwG0yqVcy0tmChKFFOBmKECRo/CIYuwXWY1cKyq//Ldy/YDV6dwugpEx7lxx/EIlT62LvoFfFx35HCnlMgU3U1NkXgEhE3EiUlNqdjYhoAq3jumk2u5gpChc8B+eKAEqfdupUXNO3uqg4N2b3KiM9vU89hlNgdE643btrsDRhIrEC/o0dx1RbWXeZkSxrpojehLCmEhefGcg5rRzasJfOogf9Cmv8cQImODbLAlXLsNWgmTr9/PgXisJQrTmwi3Uf/C570WfkHOpWp+8rZqg3S9cfUp1PbfQm9VrYGfUA2Xpa7/4I2vyNDkkyd4SaieZngg2aHJjolqzLf0eyTLruUokJ31JVSU0PLPtRNqV0Knjk2fEyP+U0+bxl59qLzLg9uUsQT4598fSDqsFtdwny0fixyfKfcEKk/91CBSbmhkQgJpX+qUKpd5+ekj8QqkPShxrI2THfqVurh/LMme+7YUCcEu6h+3oIQEm0higrFyEWCwJ6dUVgkHZ2xDyddjyqlEuECW2cUdp2ry8at3FdWltDUS/eVzvsXD4cOEvNOuMqzjSsG43lh2vx/JhtZhHPcJlgB94a/+Av1RfnHBkMZ5ZOzsM8U79TgNcGw9NN+KqZFUU6IguLlYqCqyIW4uH+JlIMdnPng7nEzgY43GZJxMdQtZhVhjDJqkOYLNLD40bXmBZujmbG53WCkrA4JxEbHUuJhVR9EWF5ubLdXtixXAejdAQsyAXNS8FaTXGu4bQ3JEmAUGQMKqQ0izWRNBeLyvdatQvJFxjlZNsDJLHRoh+1N4qKAiJ2Ixcs1gsGj+ljUOjTKBImm2rKWr9rEvhDdbyzyYVgyuCQrhMIIYv8OuTgjJjvxU+IN+0w4a5aCaPSreiChEZP6gpnZX5CqC+vrpJCfS6v60AkrhmiAF8xrUCsWffmggQRyKXRI1JXRMq8YzIk4xbVhIS6C1sqTIJiVESc9QvlaFRTY1WOi8KLKvtot5dL5yU8W55PrLg5iWtOVuialCFG6DNnnXB++WEiFEqcNFrnbd/avMOaU2MFaAcFfWjz/tYHSuuokS5LH7/IVCtNNtu95aCMAoapLbEnKAOFM3Eh6K+Ujwxw4pc6Bs0hDmN+46rSBmfM8p1bLrNftvuVbIoxu758NTd2m0YMn3q+GOwYK2gDeP6yk/p76cUoR814cL7ymRyojkiOiQ4aBhhG19F1s+RQRpMsSgRx4nuaQqu6SSOHzVvpLlyWCGT2Ggkth3QcEc4sck2SN9wze3CmFIEamu65fNoSlPkGxmEsM+pA5mXWd4JYY74U9nhI7J+zjV8ak+zhVFC/dlUNpWuNzNI9FrucbshVSom9Yf6G7+Ge1PNVp0WmzMb32FUjDpP4/Y173zW76j03UxZAMq+/xtXC8z/yqwtrj0cRUjpTQJMa5r/HrzEjqV0IrlXrvg13j+eenGP1bPYcqa/qhhOi565wClhPcjal5fdhcEaN4I5XpIS5ySYPAeRIqMTApUBpxCizWE2Mn7BQGEqLiBQbfxrSQI4JAAtaOYfZVs86jgvciY2FtBtSBVSojdrwRYWEGEEbBzrSpP7Fc6/jl611RVEDAMmMyHVAs4JqHSm/6UznU55KWob3ibRVmQU4JvVkOjb2PwlW5JDbEVd81ynlStaJIlV/hL421ACeg35nHEJ8tbnRKwAlNDjRfKjHE/YwlLDhvLwVP1868xD3jXugpfFfOMaQrdkCx31D7LNTTXF1hNp6gv6ddGQFZo62s2xqm03lcO8RLW3ksWfAgqF5wmesRQjOytkRUtwxvBx4jBg4v04c62+6V41c4R3SiEPHAsXVxdA24V2M+P0wzQ1n+p559RphiYKBlKfRSYDWuuYqQ1MriUVy1itw4QBDJiPEFCy5wMCQugSIsx1oiupusVmoO7h8vLSEwHMex+mh6UKeRk1LP3etrF9//jo9nSiv7DnvPtzZTQ5tHd1sS3V0I9WZDCPbkeNgFkBgxPZ69ZOS//M5G1o2WzdBnV/+qyU2eommUc0GPFjXbZz1A23PxAgfLcpbs7J0NBuYyLqk0z4VlN0khVK4y2hz2C0jLjXn7uQCcqsq5P6vfGAy6WBbGF5cm2LMBjX9a1CbUvxjYmexJpK2IJZ1jXHprYeMd0KIXgJSgYsV0jVTEv/0iTBpQkTsmCq304lW53874ZMDO3xx+J5pgi0Z/PomoRq3cxGGhI/Yc6J5Jy4RjIoFItDWHQJhBa440gx6aGcJbWs0hFYj9AltF7vB0HEjPTBKZeinuZM7oMrwNAHde3ytgjS3fHkOjrlSqygIFJap4RUMQs4fouNPZtJ0V2rrP06wbUSYIug5P9we7Y42Orr3V3NHN/+ffV0N3vn1jZ6pt/Ye3LWZns/lgHsESlfrCzkzbpsn/MMujgjZ5U3QEhv9XW9HVxBiioeqnCpqwwK9HvLYj5xcB5qIhGU4DOedJTDeC0fjd33So3I+VXacVK6RIVdY1hoEjL21DBXW2IXTbVU8aoRZXkiewyaQ87CxxQVuuPL4sOcl3oEhUwzaLC9w8GK5HIShtebEbcVaJ0sAUwOOMDD/PXqTdubMi1mHIaMEfgcYPzjZyiIAoQvPx9wWRIiHqXkMD6aw3LxXKOeXe/VrFD5z6rtVQBLc/Gf3JEERfHJ0vpt8powdLaJpdnYiC4hoiF9J8hRpLnp1v8aKypsKX72vT2vfov/PgmcIeelHbHjjw2+f5SFfx653QBLHTNCuxi/MsLUlOePWCik77dYgEs0GIncuMLW0hU92awCu9dK9BlmolwYDqM8Kfuz6WBCUhj+UzW74ETdGxtqt30CzGIjd0Umm8k34KQaCLuIZSIq4lPKA5INPelnCPH+3Cpj8tgTd4UKr7IoIcmnNVZr4tTFvPrHzfVImEda+zoYlgeTaWzXaenmIkHrU+INyb2DuXJVJ6vSuB0wMOVbGfmujMujaic4K5fkgja0YR56oXFzEb2iv02qjhyYMOh1NxUFRtOmiopo/X2reqSs9MwhFtRdCLwK2qMSsdk5jSHqvkwRNbZmCMyaZnp6cVoepKCmGJW1A9OHtig2Ri4liitPHInaRbHO//Hun53RT978dAy513kAmlASsrMJDlTlB6CA9LnzTnt6Bnp5nbpru33ZbVouoR2+IO7oACESbujjywD09atiTX29+LPwsWe552PhZ80QGBIBTUCFZwwAnhUB660F3t1hJsHspq+9++FTyM9r6C6QkrZF5e+6ckfk6lBym3HwHU9ky8SF3cib2ra7wimvZcJlFn7FFmuFa/hTP54WothctOnO8e3wbvj6caRJD/X6sd2wbQiZuFjCLg4RJDRAYV/m0LVcLb3tFvdW2+dtUOOoAT5nL3G51KbAJmoHpxun73aDoDMdvwsx0AD9mS4hSUwSdmkw9O56fCHQm17n1hNHGP8QseeMF1hIFnkKI1qQyWYUMiH9NPrzJ5ri6QVQTbZAJTTC2YXaRRW6SJ2hiKrMRBAJKqKo4l0G4VBWKpCZqEkGnopH9Z8e0sNBpgoS29DHcEgB5aps7FofV0WTXc3cTF+ZvcQUWwwGGQMG2G3GHQwA/cJ31MgIHeIVA6hG27tANDEG1o9NrwfjNjk82JX+Zhi68HxsAnyhQJ+g8RwWDxoODpmlv7o0MQatG5teB42zMniQCIBh6C+eE+hP/99+DI9n2PDgcxBNBG3aBNaZe2W5bEReJZo5mK2uXz3rMJt82+EPHFfC5KrlMwlnrMfX1dVMHO6xfbIwPFW6PEZh3xnerzpz7I5iAXeP37J1D5Ajx+hrpQ61nBFhBA88nz2KvBlDfwVJCe1R3iFoSsqExwqD/2sevof4EqNQO28DG1/BKz7ILLsW8XWzdbI3IScnoJAKIl9HEna8Hh0tk8UHCgSJ9y6aphl7KYUMOwhpRSBxZEJI7HZXz8ueYtQ25FwZweITH0bXIJCdT2JS8VHwTeoe3ggikOabf+6Gu+AbR/Gr8S6ELpHCQR1mnlgIQuB5bYsXwSGg3DsIa28MjAS/wD0bkVIofkFjohW/Lc3zAnT/PkRlsBj1FObb+3YP3tUzKAxLBhk6BwScdluDKCMJFAJFmUIOvJ3DVgoHOui6NgGc5F6VPDvYDRhFFXQrMY26Zw3LnH6OOSigLqhO5gpFGYWAKi8A9rzOc0cgJ5mvtnxvdJ5D5Fcg582O2yvgLgD8p91TUyO9Gs6fr/byfj1oxsRt6cQtllc18N3Yj4aMTyOlWgI5e9+pUzfyrMient/m7CqHYkHV796kpYF161ggNgY8AY+/BOp89iQYpGnHmUGXis8AvYhNrQ0JrNJIteTcQZPzMQa318w1PQ1t+Lw5llTs7OdyvD8X5Bjh+j/AW3FDTsBfbEZ6Ttab6ckcyWrAs6cXxRNpa/db/96r3V04IA1TzVUn77c/2Nu+cclAQLIawCeyLDkGWw1su7RdtovBcCwzhTfEJTHkGdOZ/sKu1xQl+bXpazK/YByakl6WjkrvLuRgbBz09iJiq02QGGwHYjFtKwgOgrR0sdhyN5M8azpLro5oJtScvtnCWeD5UCwaUrO+svL6UW/kr5gaErpgM5glNotNYnoSC3uNjfpxjbhcnvtUES38LH6eeUAnY28e9Cvhk++lo3QmQIWS15c5HOIYJspApWgGoTSjlFBW+vyo6CiXyxUuJ41QCgoVIjEUeH48gfDdEVlYwCApl6RSbRL7tJWmcBevyK0heCTVL2hRBG6NW5gQ2Ju+MKK6I3+TeUrNimUN8xzbUzsXZKaGHuCEtga99pAUmC8s4LnxChzdTKzO+Qxf8wGRa4VxwfcuhtjNiw0+uD26su3H+iU5zOXNS9qYOc0Nbe82Gctb4tNdn9uXAX39dG6k6Ut08MOPwRTRhXAyfZIbOyc/DVpcB41Q2uLFIgQhbnXAZz5meEI+R57rF8t8e33VG9palCXHxgace8b03pf8RuJJRZNy8AoyR5S1igM7DqPGQK+6QUkk1MTzC6CKFEXvRm7eRBB3G0AcfbseKGC7J5TAF88l/Lkp5WxKggOFGEk0kpxclPZVc0xOMTyQkmfgKBop2mouw+VnnjVqozwqVO8kOKrDV1DwoaM25r/m4mAwt8tBU3/TrTUsSbwzSLxKk+a9iqQhu/qDdjZofg1Kkre6ndJomIYGyUkmrtf+mBJUtYyFU05Vng1V7sxXN/6vclLwEMitFyT4jfrlcrm5q5UJAijWjt5GbWzQFG8vgDhZBTS61BoD4xo3wWrEPsTn15St7l1yC2Wz0Rm6xWZXeUX8cygEoYTOQVAcHEBOJoGpGrQ+2b17355i/TdnZOCwzM3ETXb4cK4Z0JuLG6Tdxbtf1CKbzp7dNEVkISZqd7/4bFvagL6vgnfuRKpBztqLLTktGWtHQQ5S/Vynaj0QiwEQywG28nVmv/N2v4l6MW3ZcCcMp3CMD4xlPnKPIh2/Hkw1Jpm0+2lhoerNxCDu6sRhWqTLdCwzPtARp7gTBnJzje8dOfya9zots46zPP0631HPuwfYiGYSx2bjCE2y2XHSr+S68nLpatLbkANHms245tqNG5OT280FSiCV+MJrjx5vggMrBA8exERgE/z9+YDXGgmF+JQ/CgT3VKZG2cQNIaTCvVI/L4Jy5qQR0N/8Hv3lMMdghU4SwnpZvSoGGVIpY6JjVLswhmoHtmJ0q3msgQWPGVhAxgP4cEnnJVBSEiRpgYJtsBKo+M+ynCGcRuKCr4YkSUnYPyvj9vRX0wdBCzRIP08fhM6rJ+lSOylzkjnX5u8QwZeNLqJLmTQF8I5R6M5GR7FS8Ckhfx+t6C+l8WmlJHHwUQ01hRUddTbnOldPX597C8cu+KGzYp14FvUDQWIaLZYEOy6ENayhGYsZCouSpMhlCza0Wwb0zsfQ16/RFI8ZACE9SZ1+WbV5SZEq3cCxN/ZbAjbxfIEF0mjViVy5giB2GqIbYTZrZKVkgZ3Q2e8+zIACOSWivf3f2BwQKSW6t9XegkpDs8kGUjIjfXGR8pYOZwmabE1+rsO5KOy8vbbOrQ6+ctelx7kn5gIfzoPzEqDFoKQBUGthfYb0k5KTdENmlKZJvgkZOoKTRzR3ErTgLXRkdvKA2jaXk2urBmK4iIwingiKBHNywM0dx45N7mDTGYgdE4VtEfSwNwLI7w/f7ETi2DGqR9Hh92R9eb36UFbl8KfkyKqmBee/pze7q31OBjpS3k5PUw03Cw62rbzZcLDZncGtIHyoVcKYXWn8xrzjQX+yJ+IRwMc3xGVYheYWuJsKnLTWSk5cA54PELyZPd+z9rmbcuuMl0UUCcHbKW9mS+I0UHzjRKlcTiCEXIqbAN/uUghG8DBHibnnX9QghohW/cT5RWKSalZXZceUMj3gCstJBwNH6ySrGg4OZkc7QoON9p1MtZ2K2Tk3ZD+jXq5SUuY8ydiBLEt1KwOCDRdLG6v1+o/6Wc9Z3mtrKz1PbxX7EY7wPxBf1PCsS3hUN6reV2d5M7mqdb7Lo8ExnKrllE0DZ9Bv39AzQgVxnLQF9Aw8UXVcPy/UseGOdJIURpqUHg579x7XSx+2cFvOy73yuH3XcTsg4AgYdoykW3Aqgrp3N0ZJfI793WuRsuT2vM39366T6Kf772Xu7efe+ycuXIghDLAwApWg/CuGoHMl4anA93AdgYBvwBctMVm0RCwTf8EO7DWR9jWAvQcw/DMc3JJMTaCmp7N+9ztWEYZZYHeU0hW4PJaYu9P/CbGbKZ18OdFqvyCvKC++aPuV9Ej9OjPTbMoxbUdQrYkW2k6szUB/uLFRN0HcMF1j49oLeMdqevQAvZEO+f9/xETdAiDkngXb18XfIfOaFcOX1NjGeYJFqjapV6DOgC5Evb3cetC2+fdQcMwRn0RXClSRBNQeJQuHMhBPeO0K29gWk0U5F19wnv1zEdCTBErZBAGNQ4eEZDxiSIhUKWNt92fekK85zfn1wBpQeQV7cv43qNG+xuzyy9Byfvf9T+1dRKYsmOl4F/h5+NOK6ywYMgmTWFAuZv61NQQkJ4MUQxZAFSkjj/2k0aYyptj3E/iw72kTk45fQ6n88uFbeXKKxbiTHc1C9qD9INuDTj5ymNPAZuh6Hw1b6Ww/mhl58JWheJxS5imciI/Nrs5Gm4yMy8u1lkIL7eqm/k2odXbWWggtgL6zoEDNGGWoCwrWF6GpuWMT85uvmMYJn5shDg8Qh5Y6EZSPCuwclI+VBKcYbltSECC9woiaxMnsJfAs9cHFIqRNao/XXhFIDHB7MF4pwpXSBLbLTdrYmuyjwFZzG+cb5fVwPNCNGFQhuIlm4B4uFegJopqzfTgWPaPwaeGM1xYDHOd6QFhCFOj/uYJoXlfZcBdf7LHSwa7oQXlpKDsyQJwRPhenlSY7A31npgIcm2yFCp3o1g7wP7wFETCYtjC8pSkublsTDGgXgmxN7AjNsdubENttq2KbCdacnkVxpRrIGveHEcuLeSaPy9/HxC4mbheMjIYICe9JOiMd6W0N721B3ea6eP23wKff+MZYL0VN6R3D7vxgvaUQU2OCrhtdgtlqQkuVymWsN1U35lK1hUuXcI7Q0oXUa9jrVMB+6UUto6/OZhNKkeP8ctv6xv/n+NXz0j99nMMvItdkSfCUVF5iMb/iY0xURYPf8o+O/ALH6ApbIOgXW9f/gpKsFdD8+ZCikKQjDZF6SVsQGl9sMGg4aCDOUChxmt5+DlYIJdfWekDr9/H1pCQV50uob+17PPL7fBDE1W42GDAaMNjL4Nv3mK3bwM80blgyLjklLDDR5Egm+YcCy4zbdLe2AZe5YwOpg6mKqW77WSrh4HLserIGmB/Uq5lSZ7hq+44qeGt9ZtBr1GvwTEO23myocQWc7Xwh9YpzmSgwGWJYMigmlEQrt2YvcHAV/lrEKg5dNhQbY02JE8bHT6BY9yKafXuPQtGPjennlHvS/QShUEbRUqTaZinV/svI5LIO3idGR4z3iBe5iew1IqTUSUBGHUVI/yB6gyDPXwbVDPVgHv0uPbeXoHt0vwdpAmMdTo1zbpZuqnd0a3us2wYNoN8/EP+UVtP/Zfi+YXPVjFF6bgh59/2be5FGcGWzy1LHJybLnDybH3Zv5GODEweqTg2QYGK1C1bxPqF6uPps4vuvfEXxUWWb+U1SuiidhI229CLS0dFJRVmMs7JEWW9PWXxUIeiaHwi1lDiWNNKHtpg8oITjZHnnfmekLasQmkM2KuUMYsfv2+fx7YVQwR4+LCO4bXjcuw2aIypb5zk5lD4UF0OlxMTcH48Gq+OovbaysrUTN8Sb0kyVNmullBHwVtYU9WvMWTzMY6CT0hedqJOLskiACwA+T3JPMKdbbRJnu+xrZw98Gvl5Ft0M4tOaVd6udTvk20IxZ2PxLdc39twjysyfezz3Wuyx2Ca3K6FelPecQ3noykuH1yFbkeHD8Ep4Ffd4K2xz92lpsHXR/ej6fzX0Ok7dm9ITnBMjm2CGB/Atzbnjvi4W/ZdJG0GFJppoJmm07EVSY/vLl1zamk2q/LdhJSKft8L8oBXgFPr9OzoOnvz++RRKvjfD3Fb9FmEQyuEFG1JrFH5GDlQvsyMHwz2N7khPGZNXd9bJtq5GlyW7MKhCqsW1Yllwj2PXERRzs0IBb9XYpNrZ2C4l7yphbDLXGWMt83kH9PsPHnz2Vb5+3foV0+7TVT/vHq95wDPEiZcBaTRQRoujXpEBUZ4hPy3FkBISW1oEvlXF02jh8NbSA5KlpUohniG7NiRrQdfwsNjyNLp70dU0nBihw+j5ScQQgenIdKamHs6YhA+RhCcd0S6cgVxkwunmQvF2ZpDN+0kZlJYGySZBXSmDTpSQ/32buCvV5hW3cYoNlQxPj/d7WHsoikVkDxp1rEQ2HNuDDBoZpmadrNmAjeRdRplMNMXLCyBOysgP1x5B371DEY8YQBy1Cz+dG5gbJly5R6hMXPvLRUYxRrX0xcratKZi96nsE8MFzorEdV2ngJ4fBmVnQyaGLYAq4ua/ITqCxYqIOHs2AiO2u77Z2JsknIfs4qYNCPYihvwZhInnZW1Pd8BnLHfoCum/dNq7GzFPs9NlRzgwkRk+k7DcfsAhLRPHyyJ5O9c7KwzZcBLKfDUCL643zcEk5sXineO7hHveELeXOw/9E9Z9FN2lxsjlOKpdmE2en1//Y8ZWhY0dFSeXx1AlNmF5m/ywYsZCG4WE47LK/ZYT5ZsWtg/4ZF79+FDVka/LEe346Os2L2T8IqJdcfRLy1K4deB4a4rwQniBl8r/9pXsfny6iioOotPjBCqlPBuIA07y2VqxAu3ebqlZl9LWVMgYoS7GvqNiLRh7RgPmGt+8ZYyKNWmXsmIY80TOQY+iewHtPYyODp0vAgGMf0p1hDRIXVmphtwd9c8LqdMIulJ2s3jtG6KOmMSkSZku3jQFr4lSkkQ1YZAiLU0BuSuG0cdUyKsD1KKa6JvVwn5jXZeaZeiouoxkOf7PFEtcsgGvemSMpHQRvsX5wS+0aJBRr0FDDKo4idLWVkrnnwBlo/6TFLoVi2J5G2vWvE5H1UnsfhfdhDuYa+iUZZNPjaLmTROJlH/fVI+9pBGJ03mZNvJzHxqfMKw23m5IPFQI/fdtbZo8vkxBhYeIrwlAuCjUZSQWCgVyfEZWBj4q+e4EQcz52IF+xLzSMNokmGlwmTFqwIzBltp1+TEaJygIQud4NWC7sAYvAopafYh3lBHHyrGaz0l+xv8FMJJNFhCOgE7zRv5M6KvQqdB7dr8wtjnWeMa2evG9jPEqdIZ7NoR32yYydiWOMkeJrgaoDFTWW0RG7toVsgUuvPA3qFEFlvlBWyKC+LGH2j2xz/JJIxSemxsOWhy1JxTe+ERF73OvqSJFRvW39M8XJe0PwFcZVfUZzHuImw4bX88unrVJnYkVzchEshme6F4quL5gfVCZFMpf3ZoPm30JDf1ilg+/O4fypUFl6ytd1o8T1+JHM7ozRvHY2rbxR4Zma1GQ8TGqAMihpMoqNTR9/6NmdWTfC3h79/gIffr8EAHs4OaAonySno9nOOATfgLRMCEC5zlzpZwCLgfhIlPCWJSTJbg5dt3iemfW1azHqx5Xx7XnZnf83bqoZ5G6uTj/D58ozNuqGKKa2w9gqzrOzJETAigBBCeuA86PoDqP+KCLvmmbCv4rmLp3U7BPmH37r61Zwr0IPgGmw9x9gnw5tv76XSofR8L7EdgYzs3AWZIIC5B63zwEQq7dpe3WYGqoogpOBrKIQonxhMX1SovtZ2ir1gCUNiMH6elAftVRZ+XgKsUBYbiWEwCsrqhQw1cNWRZWX0V0Rh8LF190JwzQBgiVyau0tDzLGKAOZECF5Uv6mOmx+Gowh5NLmCOtUVmhLpND6WlAIa5EAdLSIfmY8jCD3TPdMj1EJc6Gvpa+MS20F/puvJ3nlgB9EMHfzXAY2Td5uxsRKjTRTfV3458yJyQlIaGCOE7KgelD5apVE45TfBArV3Kprq1v66mU5pMvEiwj6ze0bRhZHzq5YX1bWwadUTi21yCl5C0Mw/ZtgxylR4+O2I54eFTrCUgFuACu/1KWOatEMYdLEJO5Z/IjEJmMf5mdvSARs+axmSeRKe5lu8uI0DGFP5YqKu9OE7WNxUTW4dTXIyBC3as/C3nh5hIoORmSEO+YthIhSXKyBNrZMUgnY6CjTIUcbyHi1mTYZOQHcOP9ElCzvLzkSWLd2Sh9BHhW5LhP6xdPqfpptB40nAja37i/aQdPZ0aYpTvR1BOEXiLBXneduZ50h4TOsRL6Cf0jCyu1S2/yJvDQg168tNZAx+gg1tYS+4SeUoPQwdBRSU0PvRpIWzQd9A6DKWIvkbSpfarWrVtaDRRw8fqNRXAh/OgVLgYKaXV3X/IWvHJljpjy0OL/EJO4MhAGpdctTYGE2EY4HYTFlUlNrltcW2K55x/aOqA+vbwxd92Znu9f1deusefx7z/I/fpDd7pPvWEDmCPRsa6+inB+NtxQ0rPAeHr6Ke7kdtpfYb/fOiTqznrTHtz+Jss+a/rdJMvr6aw6WrPSuWbauLeK4KkH+WiqeepR88QEu+bGLBzDHgtjEFvbGJVeJ1CQFYJueqEvrLnxUpNva/IM57V4Z2fXLBJ1bN3vZiaPQgc+vv8DGUDev4/FgYXoKRmEsy80rfwr71LChaUvk+3zrkIWFuh1dILFmhgiCqJvbrR4oP3XsJUpwKd+Hbs69jVViIdbDUdEoyZl/10yFuIJ0swkGbjqqNshSIV440v/lYl2redarXcOr1dtBaCYwl0fkB1SzqsCvZ4k9BGSug4NkYRdAJOspteHuAtK/E5GHUQ2kXjUWdwW2t+m7Ft6kZYC9lAngT7oFPrjB/qcERXEcdTaRebm7yY3F6vF5gpXf1eFm/cgecmblpWTqAIaiXhQuSt5c05n2+UeaynVoHhX6gbH0s3cQJA4w2/EjNimepE7TVUVxn266Bu33sDMd8SvS9xtoMQl4HZGTlc6MTi/uWUBlA9VT3A+1mbVKApVeR7i7LQ96xmmEjVa+WNQRG5uRJ4B5eX+T8QAIObnOG8INa+hItUbF+ZscnLcaZbPYM7YcZrj5s++759nnkBR1KqdG3CEZWU1O8r+NqXPm43dVH7lF6Mqm3sHmXer/OcylOcPhBj2BHcYtQvAQSukqjqrOVrkeAOcdH88tKp5eeGJRW5phSLyJmWIdTI23bUrmRY0iXWH7jM74vpZ2HbQLC4YkLzWuF+TpAxv9iwvv9VZvoa4mLim7M6vZWW3Jrq0ewCbMpnCOoa2nNuSINTcD4WyMqEwKNRSodAlShoG2+YhlstRVC4Ti2UyIyOZHF7VrNceL9TGxFYb5Q10LP7tuPMvTuMdE5KU85faxaRXxlOk4FY3CFu3wphY0qbSeLON+AQ2m5We3w4I7ve29UzgSqXcBM+tFDqZ1h8dX6O61pKn94rDd5Lp/b/F3TwaE1wcHXy0E4uLPI2VAdBqdHAxfME/DgHKOgoY+u1XMoO8MCbBp2Sc9MPZ503HCGsrXN/TU49YPyAQj153HeZzbWI4kcGu52Dj05tMBuaADJe3t1fA/Ys+9btE2OhsIoCjL+mu0RRprUZGcCbINNtL1QQ7SlERxc5w0HC7UdicER2/eh9pqth2kHTZ6DLpwPVU8O7QqHK6rSbFM/Ojbbgk+ZMlUS5USTkAQcECSJEbPUQCQ/EiDFuJBIKf/MH1NaPtWxc2R0ZWG+Y1aQv2SaAYpfFSo1pSYDvUaDkekHEGSyOWTmemw8uWwemfHPXPng5nTi+9cXvO7RtLp31ZI74H+GnBtuHzTtKcOJNgLecTZy2Y5Dhlx8a5qp+FreyaMZnpWqnFUAbTUlHGPSnLjK4xGgteuWheUfKJS1EnMqIrzmwgVTVOniG7R/JTvEWPHMIow5GiyGFKGNKvYrmblJj6PxQ/jBh7anDKzGnK8Z6629Sdpep33hxG1QZqqX3fhxkLb7p6Gh1/rCjSGYwj7PKjTbqOWN7uOwH01iqopBSKh1QlJSpYqJwhFRRfUqryORQTjZGDHsInkLHiuY92IGNXkBQ7LbUDIWJnAxR7rYD7++AV4v39sQgvgratb+WHYuba1uuFHdfuRgsfdRxa0nJ97Q+QD7rLk1vOlDIV81pUl1/x0heANz+WtV5fcqjlUbTw5bCuzIt2wmXTMkuVs9ywtA8Q6ijzm+oyINGmjVt1fwcGMG3/3X4trujoP1JNluUl2BpV8Znl9BomYEbqLhNtBX34VtPqplKGaV1n52rz1f/+20xgmDUBh1hspXeFZiqkkNaRbl+pSisViKNAY6S9zEE2+x8FgsoE8akOVen07ZKFDf95l68UQ+AgcnDPZp+5aZQ10VYpwcpEB08VqC0kqdK80xIdEyog+J0UK//uOoi6Zm565UWrIuvCi9tYhVFVfbFvd8oL4t9wKhkaTR0dYmLXPVQOi0ndM2rI5xvuoezV5uLlBTvfxvZFVRW6AtzuUOIoiUUaJSKb1pPukdZFL46vqEKy01P75jefuN7uixNTGhWbEx3LkPG+GO4kGqvy80ZlQgjIz1Win61ezXL9Fq/wh5wO6EXI6XsRfRlOY3n0Ecd40+FThknct3ihcFf3rACZmbl/RYYAQP/LCT6zcKcHssPPteCG/3OWdXhCH7fwkCzBYU0xpPmcP4wJfYbjNPmdSEgyfsZnIYkFnRsSRIdGFZu/CkLS4RytSpHPuA757n2VaQjQ/+OB++UCpB8AsI87MfO4rpcLAODgtz1rF/YVICtFofP7QetlDTaExyVRhl+ZZhg+bBF1+COyCaafdk4HiOGE8HNbmYRv0HHW/zYjm/7YxTaaTzjIHQCw1/vOO10AP8s+eVUhFrfNId+I4Qyt74DM9X2gDMTtnChX34PeR/2GryIKfcZF1WVPWHqXZzyFZh1qbBL6H0G/6SNvrE74rPf8tQEjslkgnoSAfslj22FRGOtDNDKE7zBEUgu/NkpWEVstYv1L/pC7H/rPXpeFooJzwk2+qKTvbcoobQwPxXChpaGqdc3+k1n/zWFb69sMtKlr6jnUdM0r0O21NS7g8N6XIoV+ASxK73GkbmyIhA82UjzdZTt5/r/2NQeTMSJ9/ojoY8NQ4O/7793xMAxjWjTM9Ob4dx7sZwX4Rz5OiCoIfIzfxBAdbyWiE+O6msRYt3D6q/AWokzl4KIu8lzkSP2rTK8X9db15KmIiEBc0jh4XfOgmn378bIfxUtVvdebBSCOF9E9QFSfxHI7RvDasKkAk2AZ4J8Od2/cs6+858YeJVLCMqIIrCKGyC7oo66RgPGKJKKgyIQLxZ1PGSoHCKjTAADeVs4iELq+CIzqTARBdzmIjk5FcEy8iuDRIxGSBMjwUWAcRmLlS8+UuMqKMUOpUquklfX83xxsTv1dDD//P/cD9mX55bZ7+AcL9234DA/hLqU6q3tts++z+8bzuWZdrw2X6Tqm1BXw+fe/r7B8r0vaPlphrsdISl68kimMrw0lJerrTlYyT/xvLDBzpC9Y9Pq1/2O9Ad7/TO7aLUfwBxOuRWWxDx4Ed5Kn1rLI7Kl2I39HKpsHTP8EE7NXa7BSci3WMDuf3aClal52LV5upxfG+Y7qb/xnO3mkSJNPAYXEvz/6qQJZchSTEIgkMoVKozOYLDaHy+MLhCKxRCqTK5QqtUar0xuMJrPF6ujk7OLq5u7h6TX4W6RaZPQdHmXiBQ+ffhHXLDs3v7C49Cyww9W19Y3NravXrt+4+ezrW7J95+69+w8ePnr85OkzT9aI5w6SUKi/v2XC1ZLhkKdUVXuz7z5F569yVWo3bnU8Z1RbGO38Yl9NEbUVpCtzkDjuubbVEurrmr3uSMLVqzk1SCphp4KEiqR0B2FSGyK2vv3+OUuIpvU1nBsbFem5tOCC885fB5JEEklfBjU3kpUiyayCYMXPtjww0k1nYkAsbTBN5aSjc7IH4ijwqNT4yV4QROuK0qLYMRgm9lW0YTaQHUzvoC0tGlThCWVpWE8X8C2R5O7NSQTmB2Kg9Hh1o/hKU0I3h/bVmuRycjLNZRt1AsYmqaRjXrGAa+JPmC5KCQ7xw1LqQFKJq0exyoQllGtg6YY2rRWhg4Qrga5SRPFd0MtIBeeRJUuCr/MTm8YpYhfFV0EbIqsxtINbyBRmS+b2eMmO4ObbeMjEezS0yztQFhSkU7xRfCM702CwpqXtNF9a5wJp6D6xfzDBcmkJWhNUnVqAumy17i/K0bHJ5KtGAcZyX5NfzlNcLRSkIyqXlJElBIl3bmWl4SaB7mqR9HimZ9H+RDmykxE/DCHyxrFdfL8e/XA44OF6LkJLaEDqH4Ul2KD+FIguSjtIxxjkS+xp8BakIzpN9kSNMj1iYT0nRzeqV8Ei9fuZqoqJlyf75fne0JDzsZbpufpyCDRuDJzLyXcdZEW+ru+G3BSn322nTUfLUluDNZVv9qnKnRs3nPMy8kNnMYPa0tCiToTb3zeyX4h6v0Y0EJ4iBMfnkc+zPYuz45LGFNFeLXPsKiOrhjVWd+xFB2GsJeJaZlIJYxQdSA0H2eoBF5c00IwXoxTWUjgEbvmOGvgq5AGJZyhVphdOwZPXRkZOChqtrJhQBTOzxXmAtBZkM6H7Mw7SqRsrOb6+S/SRXavIpWYlI3l53x/FNzqmDCoLsVBVWjAwcWFB1DWiqVIX9cxj+WkGVDaaDqr6HU6tATc6viOkajhomwvoDdIGSWn5bBzYECthOmhJB1krIDNjB2HrmmgBCWotYW2pFaeScKk8cgA\x3d\x27) format(\x27woff2\x27); font-weight: normal; font-style: normal; }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-65:before { content: \x22\\E649\x22; }\n.",[1],"icon-xiangbox60:before { content: \x22\\E71A\x22; }\n.",[1],"icon-ai-weixin:before { content: \x22\\E62F\x22; }\n.",[1],"icon-add:before { content: \x22\\E64E\x22; }\n.",[1],"icon-xiangbox59:before { content: \x22\\E9C8\x22; }\n.",[1],"icon-weixin-copy:before { content: \x22\\E654\x22; }\n.",[1],"icon-pengyouquan-copy:before { content: \x22\\E659\x22; }\n.",[1],"icon-zhifubao:before { content: \x22\\E64B\x22; }\n.",[1],"icon-lianxikefu:before { content: \x22\\E668\x22; }\n.",[1],"icon-pengyouquan:before { content: \x22\\E6A6\x22; }\n.",[1],"icon-fenxiang-:before { content: \x22\\E678\x22; }\n.",[1],"icon-lajitong:before { content: \x22\\E682\x22; }\n.",[1],"icon-dingdanliangzoushi:before { content: \x22\\E614\x22; }\n.",[1],"icon-ERP_tihuofangshi:before { content: \x22\\E65B\x22; }\n.",[1],"icon-daohuoqingdian:before { content: \x22\\E615\x22; }\n.",[1],"icon-gantanhao:before { content: \x22\\E62C\x22; }\n.",[1],"icon-gouxuan:before { content: \x22\\E605\x22; }\n.",[1],"icon-btn_dizhix:before { content: \x22\\E69F\x22; }\n.",[1],"icon-btn_gengduo_xiangyoujiantoux:before { content: \x22\\E6A0\x22; }\n.",[1],"icon-btn_xiangxiajiantouhongx:before { content: \x22\\E6A1\x22; }\n.",[1],"icon-btn_xianshifengqiangguizex:before { content: \x22\\E6A2\x22; }\n.",[1],"icon-img_sousuox:before { content: \x22\\E6A3\x22; }\n.",[1],"icon-btn_youhuiquantishiguanbix:before { content: \x22\\E6A4\x22; }\n.",[1],"icon-btn_guanbianniux:before { content: \x22\\E6A5\x22; }\n.",[1],"icon-btn_xiangyoudajiantoux:before { content: \x22\\E6A7\x22; }\n.",[1],"icon-img_dizhix:before { content: \x22\\E6A8\x22; }\n.",[1],"icon-btn_fanhuizuojiantoux:before { content: \x22\\E6A9\x22; }\n.",[1],"icon-btn_xuanzhongx:before { content: \x22\\E6AA\x22; }\n.",[1],"icon-img_biaotizhuangshiaixinx:before { content: \x22\\E6AB\x22; }\n.",[1],"icon-btn_sanjiaoxiaojiantoux:before { content: \x22\\E6AC\x22; }\n.",[1],"icon-btn_huangsetishiguanbix:before { content: \x22\\E6AD\x22; }\n.",[1],"icon-btn_daipingjiax:before { content: \x22\\E6AE\x22; }\n.",[1],"icon-btn_youhuiquanx:before { content: \x22\\E6AF\x22; }\n.",[1],"icon-btn_changjianwentix:before { content: \x22\\E6B0\x22; }\n.",[1],"icon-btn_daizhifux:before { content: \x22\\E6B1\x22; }\n.",[1],"icon-btn_daitihuox:before { content: \x22\\E6B2\x22; }\n.",[1],"icon-btn_shezhix:before { content: \x22\\E6B3\x22; }\n.",[1],"icon-btn_quanbudingdanx:before { content: \x22\\E6B4\x22; }\n.",[1],"icon-btn_paixux:before { content: \x22\\E6B5\x22; }\n.",[1],"icon-btn_weixuanzhongx:before { content: \x22\\E6B6\x22; }\n.",[1],"icon-img_pinzhibaozhangx:before { content: \x22\\E6B7\x22; }\n.",[1],"icon-img_jisutihuox:before { content: \x22\\E6B8\x22; }\n.",[1],"icon-img_wuyoutuikuanx:before { content: \x22\\E6B9\x22; }\n.",[1],"icon-btn_shangxiangfanhuix:before { content: \x22\\E6BA\x22; }\n.",[1],"icon-btn_qiapianguanbianniux:before { content: \x22\\E6BB\x22; }\n.",[1],"icon-btn_sanjiaoxiaojiantoux1:before { content: \x22\\E6BC\x22; }\n.",[1],"icon-btn_xiaoxix:before { content: \x22\\E6BD\x22; }\n.",[1],"icon-btn_shezhix1:before { content: \x22\\E6BE\x22; }\n.",[1],"icon-btn_shouhoux:before { content: \x22\\E6BF\x22; }\n.",[1],"icon-img_zhifuchenggongx:before { content: \x22\\E6C0\x22; }\n.",[1],"icon-img_zhifushibaix:before { content: \x22\\E6C1\x22; }\n.",[1],"icon-img_haoping_hx:before { content: \x22\\E6C2\x22; }\n.",[1],"icon-btn_zhongping_nx:before { content: \x22\\E6C3\x22; }\n.",[1],"icon-btn_xing_nx:before { content: \x22\\E6C4\x22; }\n.",[1],"icon-btn_chaping_nx:before { content: \x22\\E6C5\x22; }\n.",[1],"icon-btn_xing_hx:before { content: \x22\\E6C6\x22; }\n.",[1],"icon-img_dengdaimaijiatihuox:before { content: \x22\\E6C7\x22; }\n.",[1],"icon-img_dengdaimaijiazhifux:before { content: \x22\\E6C8\x22; }\n.",[1],"icon-img_dengdaishangpinpeisongx:before { content: \x22\\E6C9\x22; }\n.",[1],"icon-img_jiaoyichenggongx:before { content: \x22\\E6CA\x22; }\n.",[1],"icon-img_dingdanyiquxiaox:before { content: \x22\\E6CB\x22; }\n.",[1],"icon-img_tuikuanzhongx:before { content: \x22\\E6CC\x22; }\n.",[1],"icon-img_tuikuanchenggongx:before { content: \x22\\E6CD\x22; }\n.",[1],"icon-weixinx:before { content: \x22\\E6CE\x22; }\n.",[1],"icon-btn_changjianwentix1:before { content: \x22\\E602\x22; }\n.",[1],"icon-btn_gerenzhongxinyoujiantoux:before { content: \x22\\E603\x22; }\n.",[1],"icon-btn_daizhifux1:before { content: \x22\\E604\x22; }\n.",[1],"icon-btn_quanbudingdanx1:before { content: \x22\\E606\x22; }\n.",[1],"icon-btn_shouhoux1:before { content: \x22\\E607\x22; }\n.",[1],"icon-btn_shezhix2:before { content: \x22\\E608\x22; }\n.",[1],"icon-btn_shouhuodizhix:before { content: \x22\\E609\x22; }\n.",[1],"icon-btn_youhuiquanx1:before { content: \x22\\E60A\x22; }\n.",[1],"icon-img_daipingjiax:before { content: \x22\\E60B\x22; }\n.",[1],"icon-btn_daitihuox1:before { content: \x22\\E60C\x22; }\n.",[1],"icon-btn_shangxianggouwuchex:before { content: \x22\\E6CF\x22; }\n.",[1],"icon-btn_shangxiangshouyex:before { content: \x22\\E6D0\x22; }\n.",[1],"icon-btn_shouyijinexiangxiajiantoux:before { content: \x22\\E60D\x22; }\n.",[1],"icon-btn_hehuorenx:before { content: \x22\\E60E\x22; }\n.",[1],"icon-btn_shouzhimingxix:before { content: \x22\\E60F\x22; }\n.",[1],"icon-btn_shouyedingweix:before { content: \x22\\E610\x22; }\n.",[1],"icon-btn_shouyesanjiaojiantoux:before { content: \x22\\E611\x22; }\n.",[1],"icon-img_tongyongshibaix:before { content: \x22\\E612\x22; }\n.",[1],"icon-img_tongyongchenggongx:before { content: \x22\\E613\x22; }\n.",[1],"icon-btn_shangjiabanx:before { content: \x22\\E6D1\x22; }\n.",[1],"icon-btn_bangdingshoujix:before { content: \x22\\E6D2\x22; }\n.",[1],"icon-invite_icon:before { content: \x22\\E616\x22; }\n.",[1],"icon-img_dagoux:before { content: \x22\\E617\x22; }\n.",[1],"icon-btn_qianbaox:before { content: \x22\\E618\x22; }\n.",[1],"icon-btn_bofangx:before { content: \x22\\E619\x22; }\n.",[1],"icon-img_quanchangmianyoux:before { content: \x22\\E601\x22; }\n.",[1],"icon-btn_xiaolianxirenx:before { content: \x22\\E61B\x22; }\n.",[1],"icon-btn_xiaojinex:before { content: \x22\\E61C\x22; }\n.",[1],"icon-daichengtuan:before { content: \x22\\E61A\x22; }\n.",[1],"icon-kanjiax:before { content: \x22\\E61D\x22; }\n.",[1],"icon-shansongdizhix:before { content: \x22\\E61E\x22; }\n.",[1],"icon-shansongdingdanx:before { content: \x22\\E61F\x22; }\n.",[1],"icon-img_img_quhuochenggongx:before { content: \x22\\E620\x22; }\n.",[1],"icon-img_dengdaishangpinpeisongx1:before { content: \x22\\E621\x22; }\n.",[1],"icon-img_peihuozhongx:before { content: \x22\\E622\x22; }\n.",[1],"icon-img_dengdaijiedanx:before { content: \x22\\E623\x22; }\n.",[1],"icon-shansongyouhuiquan:before { content: \x22\\E624\x22; }\n.",[1],"icon-qingchuhuancunx:before { content: \x22\\E625\x22; }\n.",[1],"icon-yuanzhuangzhengpin:before { content: \x22\\E626\x22; }\n.",[1],"icon-bianjietihuo:before { content: \x22\\E627\x22; }\n.",[1],"icon-fangxingoumai:before { content: \x22\\E628\x22; }\n.",[1],"icon-wodetuangoux:before { content: \x22\\E629\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/alpaca/guesRecord.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"top-box { width: 100%; height: ",[0,334],"; position: relative; }\n.",[1],"top-box .",[1],"top-box-img { width: 100%; height: 100%; z-index: -10; }\n.",[1],"top-box .",[1],"left-box { width: ",[0,260],"; height: ",[0,49],"; border-radius: ",[0,25],"; position: absolute; left: ",[0,10],"; top: ",[0,10],"; background: #401c0d; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; }\n.",[1],"top-box .",[1],"left-box .",[1],"left-box-img { width: ",[0,30],"; height: ",[0,30],"; margin-left: ",[0,12],"; }\n.",[1],"top-box .",[1],"left-box .",[1],"left-box-corn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"top-box .",[1],"left-box .",[1],"left-box-corn .",[1],"left-box-corn-font { font-size: ",[0,26],"; color: white; }\n.",[1],"top-tabbar { margin: ",[0,-86]," ",[0,20]," 0 ",[0,20],"; position: relative; z-index: 10; height: ",[0,194],"; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #fff; -webkit-box-shadow: 0px 5px 17px 1px rgba(82, 82, 82, 0.13); box-shadow: 0px 5px 17px 1px rgba(82, 82, 82, 0.13); border-radius: ",[0,16],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"top-tabbar .",[1],"top-tabbar-item { text-align: center; }\n.",[1],"top-tabbar .",[1],"top-tabbar-item .",[1],"item-num { font-size: ",[0,56],"; color: #222222; }\n.",[1],"top-tabbar .",[1],"top-tabbar-item .",[1],"item-font { font-size: ",[0,26],"; color: #999999; }\n.",[1],"record-list { margin: ",[0,35]," ",[0,24]," 0 ",[0,24],"; }\n.",[1],"list-header { font-size: ",[0,26],"; font-weight: bold; color: #333333; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"list-item { margin-top: ",[0,33],"; }\n.",[1],"list-item .",[1],"item-date { width: ",[0,185],"; height: ",[0,43],"; font-size: ",[0,24],"; color: #fff; border-radius: ",[0,16]," ",[0,16]," 0 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; opacity: 0.3; background: #757680; margin-bottom: ",[0,32],"; }\n.",[1],"list-item .",[1],"item-data { font-size: ",[0,24],"; color: #222222; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: ",[0,32],"; }\n.",[1],"list-item .",[1],"item-data .",[1],"item-data-img { width: ",[0,48],"; height: ",[0,48],"; }\n.",[1],"list-item .",[1],"item-data .",[1],"item-data-ing { text-align: center; }\n.",[1],"list-item .",[1],"item-data .",[1],"item-data-ing .",[1],"item-data-ing-time { font-weight: 400; }\n.",[1],"list-item .",[1],"item-data .",[1],"item-data-see { width: ",[0,92],"; height: ",[0,46],"; text-align: center; line-height: ",[0,46],"; color: #555555; border-radius: ",[0,23],"; background: #ffe150; }\n",],undefined,{path:"./pages/alpaca/guesRecord.wxss"});    
__wxAppCode__['pages/alpaca/guesRecord.wxml']=$gwx('./pages/alpaca/guesRecord.wxml');

__wxAppCode__['pages/alpaca/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"top-box { width: 100%; height: ",[0,334],"; position: relative; }\n.",[1],"top-box .",[1],"top-box-img { width: 100%; height: 100%; z-index: -10; }\n.",[1],"top-box .",[1],"left-box { width: ",[0,390],"; height: ",[0,49],"; border-radius: ",[0,30],"; position: absolute; left: ",[0,24],"; top: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #fff; font-size: ",[0,26],"; font-weight: 500; background-color: #401c0d; }\n.",[1],"top-box .",[1],"left-box .",[1],"left-box-img { width: ",[0,30],"; height: ",[0,30],"; margin-left: ",[0,12],"; }\n.",[1],"top-box .",[1],"left-box .",[1],"left-box-corn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"top-box .",[1],"right-box { position: absolute; right: 0; top: ",[0,20],"; background-color: #A2710C; width: ",[0,166],"; height: ",[0,49],"; line-height: ",[0,49],"; font-size: ",[0,24],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,30]," 0 0 ",[0,30],"; }\n.",[1],"top-box .",[1],"right-box .",[1],"icon-btn_gengduo_xiangyoujiantoux { font-size: ",[0,16],"; padding-left: ",[0,6],"; }\n.",[1],"top-tabbar { height: ",[0,172],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; z-index: 10; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-sizing: border-box; box-sizing: border-box; border-radius: ",[0,16],"; margin: ",[0,-86]," ",[0,24]," 0 ",[0,24],"; background-color: #fff; -webkit-box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.21); box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.21); }\n.",[1],"top-tabbar .",[1],"top-tabbar-item { text-align: center; }\n.",[1],"top-tabbar .",[1],"top-tabbar-img { width: ",[0,82],"; height: ",[0,82],"; border-radius: 50%; }\n.",[1],"top-tabbar .",[1],"top-tabbar-font { font-size: ",[0,24],"; }\n.",[1],"swiper { background-color: #FEF4BC; margin: 0 ",[0,20],"; height: ",[0,40],"; border-radius: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"site-num-list { margin: ",[0,50]," ",[0,20]," ",[0,0]," ",[0,20],"; }\n.",[1],"site-num-list .",[1],"site-num-item { width: 100%; height: ",[0,228],"; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.13); box-shadow: 0px 6px 13px 0px rgba(82, 82, 82, 0.13); border-radius: ",[0,16],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; box-sizing: border-box; margin-bottom: ",[0,32],"; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-img { width: ",[0,220],"; height: 100%; border-radius: ",[0,16]," 0 0 ",[0,16],"; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right { width: ",[0,482],"; padding-left: ",[0,33],"; position: relative; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"site-class { margin-top: ",[0,26],"; font-size: ",[0,36],"; font-weight: bold; color: #222222; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"games-limit { margin-top: ",[0,18],"; font-size: ",[0,26],"; color: #999999; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"multiple-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"multiple-box .",[1],"multiple-box-num { font-size: ",[0,60],"; margin-top: ",[0,12],"; font-weight: bold; color: #f00; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"multiple-box .",[1],"multiple-box-font { padding-left: ",[0,8],"; font-size: ",[0,36],"; color: #222222; }\n.",[1],"site-num-list .",[1],"site-num-item .",[1],"site-num-item-right .",[1],"to-join { position: absolute; right: ",[0,20],"; bottom: ",[0,25],"; font-size: ",[0,26],"; width: ",[0,148],"; height: ",[0,55],"; color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,28],"; background: -o-linear-gradient(186deg, #ff8441 0%, #ffcb40 100%); background: linear-gradient(264deg, #ff8441 0%, #ffcb40 100%); }\n",],undefined,{path:"./pages/alpaca/index.wxss"});    
__wxAppCode__['pages/alpaca/index.wxml']=$gwx('./pages/alpaca/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
