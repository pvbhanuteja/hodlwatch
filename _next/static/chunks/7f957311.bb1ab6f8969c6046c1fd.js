(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{oAua:function(t,e,s){"use strict";const i=s("OjXq"),{ExchangeError:r,ExchangeNotAvailable:n,OnMaintenance:a,ArgumentsRequired:o,BadRequest:d,AccountSuspended:c,InvalidAddress:h,PermissionDenied:u,DDoSProtection:l,InsufficientFunds:f,InvalidNonce:m,CancelPending:p,InvalidOrder:y,OrderNotFound:g,AuthenticationError:_,RequestTimeout:w,NotSupported:k,BadSymbol:S,RateLimitExceeded:v}=s("ucJe"),{TICK_SIZE:b,TRUNCATE:O}=s("rwG2");t.exports=class extends i{describe(){return this.deepExtend(super.describe(),{id:"okex",name:"OKEX",countries:["CN","US"],version:"v3",rateLimit:1e3,pro:!0,has:{cancelOrder:!0,CORS:!1,createOrder:!0,fetchBalance:!0,fetchClosedOrders:!0,fetchCurrencies:!1,fetchDepositAddress:!0,fetchDeposits:!0,fetchLedger:!0,fetchMarkets:!0,fetchMyTrades:!0,fetchOHLCV:!0,fetchOpenOrders:!0,fetchOrder:!0,fetchOrderBook:!0,fetchOrders:!1,fetchOrderTrades:!0,fetchTime:!0,fetchTicker:!0,fetchTickers:!0,fetchTrades:!0,fetchTransactions:!1,fetchWithdrawals:!0,futures:!0,withdraw:!0},timeframes:{"1m":"60","3m":"180","5m":"300","15m":"900","30m":"1800","1h":"3600","2h":"7200","4h":"14400","6h":"21600","12h":"43200","1d":"86400","1w":"604800","1M":"2678400","3M":"8035200","6M":"16070400","1y":"31536000"},hostname:"okex.com",urls:{logo:"https://user-images.githubusercontent.com/1294454/32552768-0d6dd3c6-c4a6-11e7-90f8-c043b64756a7.jpg",api:{rest:"https://www.{hostname}"},www:"https://www.okex.com",doc:"https://www.okex.com/docs/en/",fees:"https://www.okex.com/pages/products/fees.html",referral:"https://www.okex.com/join/1888677",test:{rest:"https://testnet.okex.com"}},api:{general:{get:["time"]},account:{get:["wallet","sub-account","asset-valuation","wallet/{currency}","withdrawal/history","withdrawal/history/{currency}","ledger","deposit/address","deposit/history","deposit/history/{currency}","currencies","withdrawal/fee"],post:["transfer","withdrawal"]},spot:{get:["accounts","accounts/{currency}","accounts/{currency}/ledger","orders","orders_pending","orders/{order_id}","orders/{client_oid}","trade_fee","fills","algo","instruments","instruments/{instrument_id}/book","instruments/ticker","instruments/{instrument_id}/ticker","instruments/{instrument_id}/trades","instruments/{instrument_id}/candles","instruments/{instrument_id}/history/candles"],post:["order_algo","orders","batch_orders","cancel_orders/{order_id}","cancel_orders/{client_oid}","cancel_batch_algos","cancel_batch_orders"]},margin:{get:["accounts","accounts/{instrument_id}","accounts/{instrument_id}/ledger","accounts/availability","accounts/{instrument_id}/availability","accounts/borrowed","accounts/{instrument_id}/borrowed","orders","accounts/{instrument_id}/leverage","orders/{order_id}","orders/{client_oid}","orders_pending","fills","instruments/{instrument_id}/mark_price"],post:["accounts/borrow","accounts/repayment","orders","batch_orders","cancel_orders","cancel_orders/{order_id}","cancel_orders/{client_oid}","cancel_batch_orders","accounts/{instrument_id}/leverage"]},futures:{get:["position","{instrument_id}/position","accounts","accounts/{underlying}","accounts/{underlying}/leverage","accounts/{underlying}/ledger","order_algo/{instrument_id}","orders/{instrument_id}","orders/{instrument_id}/{order_id}","orders/{instrument_id}/{client_oid}","fills","trade_fee","accounts/{instrument_id}/holds","order_algo/{instrument_id}","instruments","instruments/{instrument_id}/book","instruments/ticker","instruments/{instrument_id}/ticker","instruments/{instrument_id}/trades","instruments/{instrument_id}/candles","instruments/{instrument_id}/history/candles","instruments/{instrument_id}/index","rate","instruments/{instrument_id}/estimated_price","instruments/{instrument_id}/open_interest","instruments/{instrument_id}/price_limit","instruments/{instrument_id}/mark_price","instruments/{instrument_id}/liquidation"],post:["accounts/{underlying}/leverage","order","orders","cancel_order/{instrument_id}/{order_id}","cancel_order/{instrument_id}/{client_oid}","cancel_batch_orders/{instrument_id}","accounts/margin_mode","close_position","cancel_all","order_algo","cancel_algos"]},swap:{get:["position","{instrument_id}/position","accounts","{instrument_id}/accounts","accounts/{instrument_id}/settings","accounts/{instrument_id}/ledger","orders/{instrument_id}","orders/{instrument_id}/{order_id}","orders/{instrument_id}/{client_oid}","fills","accounts/{instrument_id}/holds","trade_fee","order_algo/{instrument_id}","instruments","instruments/{instrument_id}/depth","instruments/ticker","instruments/{instrument_id}/ticker","instruments/{instrument_id}/trades","instruments/{instrument_id}/candles","instruments/{instrument_id}/history/candles","instruments/{instrument_id}/index","rate","instruments/{instrument_id}/open_interest","instruments/{instrument_id}/price_limit","instruments/{instrument_id}/liquidation","instruments/{instrument_id}/funding_time","instruments/{instrument_id}/mark_price","instruments/{instrument_id}/historical_funding_rate"],post:["accounts/{instrument_id}/leverage","order","orders","cancel_order/{instrument_id}/{order_id}","cancel_order/{instrument_id}/{client_oid}","cancel_batch_orders/{instrument_id}","order_algo","cancel_algos","close_position","cancel_all","order_algo","cancel_algos"]},option:{get:["accounts","position","{underlying}/position","accounts/{underlying}","orders/{underlying}","fills/{underlying}","accounts/{underlying}/ledger","trade_fee","orders/{underlying}/{order_id}","orders/{underlying}/{client_oid}","underlying","instruments/{underlying}","instruments/{underlying}/summary","instruments/{underlying}/summary/{instrument_id}","instruments/{instrument_id}/book","instruments/{instrument_id}/trades","instruments/{instrument_id}/ticker","instruments/{instrument_id}/candles"],post:["order","orders","cancel_order/{underlying}/{order_id}","cancel_order/{underlying}/{client_oid}","cancel_batch_orders/{underlying}","amend_order/{underlying}","amend_batch_orders/{underlying}"]},index:{get:["{instrument_id}/constituents"]}},fees:{trading:{taker:.0015,maker:.001},spot:{taker:.0015,maker:.001},futures:{taker:5e-4,maker:2e-4},swap:{taker:75e-5,maker:2e-4}},requiredCredentials:{apiKey:!0,secret:!0,password:!0},exceptions:{exact:{1:r,"failure to get a peer from the ring-balancer":n,"Server is busy, please try again.":n,"An unexpected error occurred":r,"System error":r,4010:u,4001:r,4002:r,30001:_,30002:_,30003:_,30004:_,30005:m,30006:_,30007:d,30008:w,30009:r,30010:_,30011:u,30012:_,30013:_,30014:l,30015:_,30016:r,30017:r,30018:r,30019:n,30020:d,30021:d,30022:u,30023:d,30024:S,30025:d,30026:l,30027:_,30028:u,30029:c,30030:n,30031:d,30032:S,30033:d,30034:r,30035:r,30036:r,30037:n,30038:a,30044:w,32001:c,32002:u,32003:p,32004:r,32005:y,32006:y,32007:y,32008:y,32009:y,32010:r,32011:r,32012:r,32013:r,32014:r,32015:r,32016:r,32017:r,32018:r,32019:r,32020:r,32021:r,32022:r,32023:r,32024:r,32025:r,32026:r,32027:r,32028:r,32029:r,32030:y,32031:o,32038:_,32040:r,32044:r,32045:r,32046:r,32047:r,32048:y,32049:r,32050:y,32051:y,32052:r,32053:r,32057:r,32054:r,32055:y,32056:r,32058:r,32059:y,32060:y,32061:y,32062:y,32063:y,32064:r,32065:r,32066:r,32067:r,32068:r,32069:r,32070:r,32071:r,32072:r,32073:r,32074:r,32075:r,32076:r,32077:r,32078:r,32079:r,32080:r,32083:r,33001:u,33002:c,33003:f,33004:r,33005:r,33006:r,33007:r,33008:f,33009:r,33010:r,33011:r,33012:r,33013:y,33014:g,33015:y,33016:r,33017:f,33018:r,33020:r,33021:d,33022:y,33023:r,33024:y,33025:y,33026:r,33027:y,33028:y,33029:y,33034:r,33035:r,33036:r,33037:r,33038:r,33039:r,33040:r,33041:r,33042:r,33043:r,33044:r,33045:r,33046:r,33047:r,33048:r,33049:r,33050:r,33051:r,33059:d,33060:d,33061:r,33062:r,33063:r,33064:r,33065:r,33085:y,21009:r,34001:u,34002:h,34003:r,34004:r,34005:r,34006:r,34007:r,34008:f,34009:r,34010:r,34011:r,34012:r,34013:r,34014:r,34015:r,34016:u,34017:c,34018:_,34019:u,34020:u,34021:h,34022:r,34023:u,34026:v,34036:r,34037:r,34038:r,34039:r,35001:r,35002:r,35003:r,35004:r,35005:_,35008:y,35010:y,35012:y,35014:y,35015:y,35017:r,35019:y,35020:y,35021:y,35022:d,35024:d,35025:f,35026:d,35029:g,35030:y,35031:y,35032:r,35037:r,35039:f,35040:y,35044:r,35046:f,35047:f,35048:r,35049:y,35050:y,35052:f,35053:r,35055:f,35057:r,35058:r,35059:d,35060:d,35061:d,35062:y,35063:y,35064:y,35066:y,35067:y,35068:y,35069:y,35070:y,35071:y,35072:y,35073:y,35074:y,35075:y,35076:y,35077:y,35078:y,35079:y,35080:y,35081:y,35082:y,35083:y,35084:y,35085:y,35086:y,35087:y,35088:y,35089:y,35090:r,35091:r,35092:r,35093:r,35094:r,35095:d,35096:r,35097:r,35098:r,35099:r,35102:v,36001:d,36002:d,36005:r,36101:_,36102:u,36103:u,36104:u,36105:u,36106:u,36107:u,36108:f,36109:u,36201:u,36202:u,36203:y,36204:r,36205:d,36206:d,36207:y,36208:y,36209:y,36210:y,36211:y,36212:y,36213:y,36214:r,36216:g,36217:y,36218:y,36219:y,36220:y,36221:y,36222:y,36223:y,36224:y,36225:y,36226:y,36227:y,36228:y,36229:y,36230:y},broad:{}},precisionMode:b,options:{fetchOHLCV:{type:"Candles"},createMarketBuyOrderRequiresPrice:!0,fetchMarkets:["spot","futures","swap","option"],defaultType:"spot",auth:{time:"public",currencies:"private",instruments:"public",rate:"public","{instrument_id}/constituents":"public"}},commonCurrencies:{AE:"AET",BOX:"DefiBox",HOT:"Hydro Protocol",HSR:"HC",MAG:"Maggie",SBTC:"Super Bitcoin",YOYO:"YOYOW",WIN:"WinToken"}})}async fetchTime(t={}){const e=await this.generalGetTime(t);return this.parse8601(this.safeString(e,"iso"))}async fetchMarkets(t={}){const e=this.safeValue(this.options,"fetchMarkets");let s=[];for(let i=0;i<e.length;i++){const r=await this.fetchMarketsByType(e[i],t);s=this.arrayConcat(s,r)}return s}parseMarkets(t){const e=[];for(let s=0;s<t.length;s++)e.push(this.parseMarket(t[s]));return e}parseMarket(t){const e=this.safeString(t,"instrument_id");let s="spot",i=!0,r=!1,n=!1,a=!1,o=this.safeString(t,"base_currency"),d=this.safeString(t,"quote_currency");if(void 0!==this.safeFloat(t,"contract_val"))if("option_type"in t){s="option",i=!1,a=!0;const e=this.safeString(t,"underlying").split("-");o=this.safeString(e,0),d=this.safeString(e,1)}else{s="swap",i=!1,n=!0;void 0!==this.safeString(t,"alias")&&(n=!1,r=!0,s="futures",o=this.safeString(t,"underlying_index"))}const c=this.safeCurrencyCode(o),h=this.safeCurrencyCode(d),u=i?c+"/"+h:e,l=this.safeFloat2(t,"lot_size","trade_increment"),f={amount:this.safeFloat(t,"size_increment",l),price:this.safeFloat(t,"tick_size")},m=this.safeFloat2(t,"min_size","base_min_size"),p=this.safeValue2(this.fees,s,"trading",{});return this.extend(p,{id:e,symbol:u,base:c,quote:h,baseId:o,quoteId:d,info:t,type:s,spot:i,futures:r,swap:n,option:a,active:!0,precision:f,limits:{amount:{min:m,max:void 0},price:{min:f.price,max:void 0},cost:{min:f.price,max:void 0}}})}async fetchMarketsByType(t,e={}){if("option"===t){const t=await this.optionGetUnderlying(e);let s=[];for(let e=0;e<t.length;e++){const i=await this.optionGetInstrumentsUnderlying({underlying:t[e]});s=this.arrayConcat(s,i)}return this.parseMarkets(s)}if("spot"===t||"futures"===t||"swap"===t){const s=t+"GetInstruments",i=await this[s](e);return this.parseMarkets(i)}throw new k(this.id+" fetchMarketsByType does not support market type "+t)}async fetchCurrencies(t={}){const e=await this.accountGetCurrencies(t),s={};for(let i=0;i<e.length;i++){const t=e[i],r=this.safeString(t,"currency"),n=this.safeCurrencyCode(r),a=1e-8,o=this.safeString(t,"name"),d=this.safeInteger(t,"can_deposit"),c=this.safeInteger(t,"can_withdraw"),h=!(!d||!c);s[n]={id:r,code:n,info:t,type:void 0,name:o,active:h,fee:void 0,precision:a,limits:{amount:{min:void 0,max:void 0},price:{min:void 0,max:void 0},cost:{min:void 0,max:void 0},withdraw:{min:this.safeFloat(t,"min_withdrawal"),max:void 0}}}}return s}async fetchOrderBook(t,e,s={}){await this.loadMarkets();const i=this.market(t);let r=i.type+"GetInstrumentsInstrumentId";r+="swap"===i.type?"Depth":"Book";const n={instrument_id:i.id};void 0!==e&&(n.size=e);const a=await this[r](this.extend(n,s)),o=this.parse8601(this.safeString(a,"timestamp"));return this.parseOrderBook(a,o)}parseTicker(t,e){const s=this.parse8601(this.safeString(t,"timestamp"));let i;const r=this.safeString(t,"instrument_id");if(r in this.markets_by_id)i=(e=this.markets_by_id[r]).symbol;else if(void 0!==r){const t=r.split("-");if(2===t.length){const[e,s]=t;i=this.safeCurrencyCode(e)+"/"+this.safeCurrencyCode(s)}else i=r}void 0===i&&void 0!==e&&(i=e.symbol);const n=this.safeFloat(t,"last"),a=this.safeFloat(t,"open_24h");return{symbol:i,timestamp:s,datetime:this.iso8601(s),high:this.safeFloat(t,"high_24h"),low:this.safeFloat(t,"low_24h"),bid:this.safeFloat(t,"best_bid"),bidVolume:this.safeFloat(t,"best_bid_size"),ask:this.safeFloat(t,"best_ask"),askVolume:this.safeFloat(t,"best_ask_size"),vwap:void 0,open:a,close:n,last:n,previousClose:void 0,change:void 0,percentage:void 0,average:void 0,baseVolume:this.safeFloat(t,"base_volume_24h"),quoteVolume:this.safeFloat(t,"quote_volume_24h"),info:t}}async fetchTicker(t,e={}){await this.loadMarkets();const s=this.market(t),i=s.type+"GetInstrumentsInstrumentIdTicker",r={instrument_id:s.id},n=await this[i](this.extend(r,e));return this.parseTicker(n)}async fetchTickersByType(t,e,s={}){await this.loadMarkets();const i=t+"GetInstrumentsTicker",r=await this[i](s),n={};for(let a=0;a<r.length;a++){const t=this.parseTicker(r[a]);n[t.symbol]=t}return this.filterByArray(n,"symbol",e)}async fetchTickers(t,e={}){const s=this.safeString2(this.options,"fetchTickers","defaultType"),i=this.safeString(e,"type",s);return await this.fetchTickersByType(i,t,this.omit(e,"type"))}parseTrade(t,e){let s;const i=this.safeString(t,"instrument_id");let r,n;if(i in this.markets_by_id)s=(e=this.markets_by_id[i]).symbol,r=e.base,n=e.quote;else if(void 0!==i){const t=i.split("-");if(2===t.length){const[e,i]=t;r=this.safeCurrencyCode(e),n=this.safeCurrencyCode(i),s=r+"/"+n}else s=i}void 0===s&&void 0!==e&&(s=e.symbol,r=e.base,n=e.quote);const a=this.parse8601(this.safeString2(t,"timestamp","created_at")),o=this.safeFloat(t,"price");let d=this.safeFloat2(t,"size","qty");d=this.safeFloat(t,"order_qty",d);let c=this.safeString2(t,"exec_type","liquidity");"M"===c?c="maker":"T"===c&&(c="taker");const h=this.safeString(t,"side");let u;void 0!==d&&void 0!==o&&(u=d*o);const l=this.safeFloat(t,"fee");let f;if(void 0!==l){f={cost:-l,currency:"buy"===h?r:n}}const m=this.safeString(t,"order_id");return{info:t,timestamp:a,datetime:this.iso8601(a),symbol:s,id:this.safeString2(t,"trade_id","ledger_id"),order:m,type:void 0,takerOrMaker:c,side:h,price:o,amount:d,cost:u,fee:f}}async fetchTrades(t,e,s,i={}){await this.loadMarkets();const r=this.market(t),n=r.type+"GetInstrumentsInstrumentIdTrades";(void 0===s||s>100)&&(s=100);const a={instrument_id:r.id,limit:s},o=await this[n](this.extend(a,i));return this.parseTrades(o,r,e,s)}parseOHLCV(t,e){if(Array.isArray(t)){const e=t.length>6?6:5;let s=this.safeValue(t,0);return"string"===typeof s&&(s=this.parse8601(s)),[s,this.safeFloat(t,1),this.safeFloat(t,2),this.safeFloat(t,3),this.safeFloat(t,4),this.safeFloat(t,e)]}return[this.parse8601(this.safeString(t,"time")),this.safeFloat(t,"open"),this.safeFloat(t,"high"),this.safeFloat(t,"low"),this.safeFloat(t,"close"),this.safeFloat(t,"volume")]}async fetchOHLCV(t,e="1m",s,i,r={}){await this.loadMarkets();const n=this.market(t),a=this.parseTimeframe(e),o={instrument_id:n.id,granularity:this.timeframes[e]},d=this.safeValue(this.options,"fetchOHLCV",{}),c=this.safeString(d,"type","Candles"),h=this.safeString(r,"type",c);r=this.omit(r,"type");const u=n.type+"GetInstrumentsInstrumentId"+h;if("Candles"===h){if(void 0!==s)void 0!==i&&(o.end=this.iso8601(this.sum(s,i*a*1e3))),o.start=this.iso8601(s);else if(void 0!==i){const t=this.milliseconds();o.start=this.iso8601(t-i*a*1e3),o.end=this.iso8601(t)}}else if("HistoryCandles"===h){if(n.option)throw new k(this.id+" fetchOHLCV does not have "+h+" for "+n.type+" markets");if(void 0!==s)void 0===i&&(i=300),o.start=this.iso8601(this.sum(s,i*a*1e3)),o.end=this.iso8601(s);else if(void 0!==i){const t=this.milliseconds();o.end=this.iso8601(t-i*a*1e3),o.start=this.iso8601(t)}}const l=await this[u](this.extend(o,r));return this.parseOHLCVs(l,n,e,s,i)}parseAccountBalance(t){const e={info:t};for(let s=0;s<t.length;s++){const i=t[s],r=this.safeString(i,"currency"),n=this.safeCurrencyCode(r),a=this.account();a.total=this.safeFloat(i,"balance"),a.used=this.safeFloat(i,"hold"),a.free=this.safeFloat(i,"available"),e[n]=a}return this.parseBalance(e)}parseMarginBalance(t){const e={info:t};for(let s=0;s<t.length;s++){const i=t[s],r=this.safeString(i,"instrument_id"),n=this.safeValue(this.markets_by_id,r);let a;if(void 0===n){const[t,e]=r.split("-");a=this.safeCurrencyCode(t)+"/"+this.safeCurrencyCode(e)}else a=n.symbol;const o=this.omit(i,["instrument_id","liquidation_price","product_id","risk_rate","margin_ratio","maint_margin_ratio","tiers"]),d=Object.keys(o),c={};for(let t=0;t<d.length;t++){const e=d[t],s=i[e];if(!(e.indexOf(":")>=0))throw new k(this.id+" margin balance response format has changed!");{const t=e.split(":")[1],i=this.safeCurrencyCode(t),r=this.account();r.total=this.safeFloat(s,"balance"),r.used=this.safeFloat(s,"hold"),r.free=this.safeFloat(s,"available"),c[i]=r}}e[a]=this.parseBalance(c)}return e}parseFuturesBalance(t){const e={info:t},s=this.safeValue(t,"info",{}),i=Object.keys(s);for(let r=0;r<i.length;r++){const t=i[r],n=this.safeCurrencyCode(t),a=this.safeValue(s,t,{}),o=this.account(),d=this.safeFloat(a,"total_avail_balance");if("fixed"===this.safeString(a,"margin_mode")){const t=this.safeValue(a,"contracts",[]);let e=d;for(let s=0;s<t.length;s++){const i=t[s],r=this.safeFloat(i,"fixed_balance"),n=this.safeFloat(i,"realized_pnl"),a=this.safeFloat(i,"margin_frozen"),o=this.safeFloat(i,"margin_for_unfilled"),d=this.sum(r,n)-a-o;e=this.sum(e,d)}o.free=e}else{const t=this.safeFloat(a,"realized_pnl"),e=this.safeFloat(a,"unrealized_pnl"),s=this.safeFloat(a,"margin_frozen"),i=this.safeFloat(a,"margin_for_unfilled");o.free=this.sum(d,t,e)-s-i}o.total=this.safeFloat(a,"equity"),e[n]=o}return this.parseBalance(e)}parseSwapBalance(t){const e={info:t},s=this.safeValue(t,"info",[]);for(let i=0;i<s.length;i++){const t=s[i],r=this.safeString(t,"instrument_id");let n=r;r in this.markets_by_id&&(n=this.markets_by_id[r].symbol);const a=this.account();a.total=this.safeFloat(t,"equity"),a.free=this.safeFloat(t,"total_avail_balance"),e[n]=a}return this.parseBalance(e)}async fetchBalance(t={}){const e=this.safeString2(this.options,"fetchBalance","defaultType"),s=this.safeString(t,"type",e);if(void 0===s)throw new o(this.id+" fetchBalance() requires a type parameter (one of 'account', 'spot', 'margin', 'futures', 'swap')");await this.loadMarkets();const i=s+"Get"+("account"===s?"Wallet":"Accounts"),r=this.omit(t,"type"),n=await this[i](r);return this.parseBalanceByType(s,n)}parseBalanceByType(t,e){if("account"===t||"spot"===t)return this.parseAccountBalance(e);if("margin"===t)return this.parseMarginBalance(e);if("futures"===t)return this.parseFuturesBalance(e);if("swap"===t)return this.parseSwapBalance(e);throw new k(this.id+" fetchBalance does not support the '"+t+"' type (the type must be one of 'account', 'spot', 'margin', 'futures', 'swap')")}async createOrder(t,e,s,i,r,n={}){await this.loadMarkets();const a=this.market(t);let o={instrument_id:a.id};const d=this.safeString2(n,"client_oid","clientOrderId");let c;if(void 0!==d&&(o.client_oid=d,n=this.omit(n,["client_oid","clientOrderId"])),a.futures||a.swap){const s=a.futures?this.numberToString(i):this.amountToPrecision(t,i);o=this.extend(o,{type:e,size:s});const d=this.safeString(n,"order_type");"market"===e||"4"===d?o.order_type="4":o.price=this.priceToPrecision(t,r),a.futures&&(o.leverage="10"),c=a.type+"PostOrder"}else{const d=this.safeString(n,"margin_trading","1");if(o=this.extend(o,{side:s,type:e,margin_trading:d}),"limit"===e)o.price=this.priceToPrecision(t,r),o.size=this.amountToPrecision(t,i);else if("market"===e)if("buy"===s){let t=this.safeFloat(n,"notional");if(this.safeValue(this.options,"createMarketBuyOrderRequiresPrice",!0)){if(void 0!==r)void 0===t&&(t=i*r);else if(void 0===t)throw new y(this.id+" createOrder() requires the price argument with market buy orders to calculate total order cost (amount to spend), where cost = amount * price. Supply a price argument to createOrder() call if you want the cost to be calculated for you from price and amount, or, alternatively, add .options['createMarketBuyOrderRequiresPrice'] = false and supply the total cost value in the 'amount' argument or in the 'notional' extra parameter (the exchange-specific behaviour)")}else t=void 0===t?i:t;const e=a.precision.price;o.notional=this.decimalToPrecision(t,O,e,this.precisionMode)}else o.size=this.amountToPrecision(t,i);c="2"===d?"marginPostOrders":"spotPostOrders"}const h=await this[c](this.extend(o,n)),u=this.parseOrder(h,a);return this.extend(u,{type:e,side:s})}async cancelOrder(t,e,s={}){if(void 0===e)throw new o(this.id+" cancelOrder() requires a symbol argument");await this.loadMarkets();const i=this.market(e);let r;if(i.futures||i.swap)r=i.type;else{const t=this.safeString2(this.options,"cancelOrder","defaultType",i.type);r=this.safeString(s,"type",t)}if(void 0===r)throw new o(this.id+" cancelOrder() requires a type parameter (one of 'spot', 'margin', 'futures', 'swap').");let n=r+"PostCancelOrder";const a={instrument_id:i.id};i.futures||i.swap?n+="InstrumentId":n+="s";const d=this.safeString2(s,"client_oid","clientOrderId");void 0!==d?(n+="ClientOid",a.client_oid=d):(n+="OrderId",a.order_id=t);const c=this.omit(s,["type","client_oid","clientOrderId"]),h=await this[n](this.extend(a,c)),u="result"in h?h:this.safeValue(h,i.id,{});return this.parseOrder(u,i)}parseOrderStatus(t){return this.safeString({"-2":"failed","-1":"canceled",0:"open",1:"open",2:"closed",3:"open",4:"canceled"},t,t)}parseOrderSide(t){return this.safeString({1:"buy",2:"sell",3:"sell",4:"buy"},t,t)}parseOrder(t,e){const s=this.safeString(t,"order_id"),i=this.parse8601(this.safeString(t,"timestamp"));let r=this.safeString(t,"side");const n=this.safeString(t,"type");let a;"buy"!==r&&"sell"!==r&&(r=this.parseOrderSide(n));const o=this.safeString(t,"instrument_id");a=o in this.markets_by_id?(e=this.markets_by_id[o]).symbol:o,void 0!==e&&void 0===a&&(a=e.symbol);let d=this.safeFloat(t,"size");const c=this.safeFloat2(t,"filled_size","filled_qty");let h;void 0!==d&&void 0!==c&&(d=Math.max(d,c),h=Math.max(0,d-c)),"market"===n&&(h=0);let u=this.safeFloat2(t,"filled_notional","funds");const l=this.safeFloat(t,"price");let f=this.safeFloat(t,"price_avg");void 0===u?void 0!==c&&void 0!==f&&(u=f*c):void 0===f&&void 0!==c&&c>0&&(f=u/c);const m=this.parseOrderStatus(this.safeString(t,"state")),p=this.safeFloat(t,"fee");let y;if(void 0!==p){y={cost:p,currency:void 0}}let g=this.safeString(t,"client_oid");void 0!==g&&g.length<1&&(g=void 0);const _=this.safeFloat(t,"trigger_price");return{info:t,id:s,clientOrderId:g,timestamp:i,datetime:this.iso8601(i),lastTradeTimestamp:void 0,symbol:a,type:n,timeInForce:void 0,postOnly:void 0,side:r,price:l,stopPrice:_,average:f,cost:u,amount:d,filled:c,remaining:h,status:m,fee:y,trades:void 0}}async fetchOrder(t,e,s={}){if(void 0===e)throw new o(this.id+" fetchOrder() requires a symbol argument");await this.loadMarkets();const i=this.market(e),r=this.safeString2(this.options,"fetchOrder","defaultType",i.type),n=this.safeString(s,"type",r);if(void 0===n)throw new o(this.id+" fetchOrder() requires a type parameter (one of 'spot', 'margin', 'futures', 'swap').");let a=n+"GetOrders"+(i.futures||i.swap?"InstrumentId":"");const d={instrument_id:i.id},c=this.safeString(s,"client_oid");void 0!==c?(a+="ClientOid",d.client_oid=c):(a+="OrderId",d.order_id=t);const h=this.omit(s,"type"),u=await this[a](this.extend(d,h));return this.parseOrder(u)}async fetchOrdersByState(t,e,s,i,r={}){if(void 0===e)throw new o(this.id+" fetchOrdersByState() requires a symbol argument");await this.loadMarkets();const n=this.market(e);let a;if(n.futures||n.swap)a=n.type;else{const t=this.safeString2(this.options,"fetchOrder","defaultType",n.type);a=this.safeString(r,"type",t)}if(void 0===a)throw new o(this.id+" fetchOrdersByState() requires a type parameter (one of 'spot', 'margin', 'futures', 'swap').");const d={instrument_id:n.id,state:t};let c=a+"GetOrders";(n.futures||n.swap)&&(c+="InstrumentId");const h=this.omit(r,"type"),u=await this[c](this.extend(d,h));let l;if(n.swap||n.futures)l=this.safeValue(u,"order_info",[]);else{l=u;const t=u.length;if(t<1)return[];if(t>1){void 0!==this.safeValue(u[1],"before")&&(l=u[0])}}return this.parseOrders(l,n,s,i)}async fetchOpenOrders(t,e,s,i={}){return await this.fetchOrdersByState("6",t,e,s,i)}async fetchClosedOrders(t,e,s,i={}){return await this.fetchOrdersByState("7",t,e,s,i)}parseDepositAddresses(t){const e={};for(let s=0;s<t.length;s++){const i=this.parseDepositAddress(t[s]);e[i.currency]=i}return e}parseDepositAddress(t,e){const s=this.safeString(t,"address");let i=this.safeString2(t,"tag","payment_id");i=this.safeString(t,"memo",i);const r=this.safeString(t,"currency"),n=this.safeCurrencyCode(r);return this.checkAddress(s),{currency:n,address:s,tag:i,info:t}}async fetchDepositAddress(t,e={}){await this.loadMarkets();const s={currency:this.currency(t).id},i=await this.accountGetDepositAddress(this.extend(s,e)),r=this.parseDepositAddresses(i),n=this.safeValue(r,t);if(void 0===n)throw new h(this.id+" fetchDepositAddress cannot return nonexistent addresses, you should create withdrawal addresses with the exchange website first");return n}async withdraw(t,e,s,i,n={}){this.checkAddress(s),await this.loadMarkets();const a=this.currency(t);i&&(s=s+":"+i);const d=this.safeString(n,"fee");if(void 0===d)throw new o(this.id+" withdraw() requires a `fee` string parameter, network transaction fee must be \u2265 0. Withdrawals to OKCoin or OKEx are fee-free, please set '0'. Withdrawing to external digital asset address requires network transaction fee.");const c={currency:a.id,to_address:s,destination:"4",amount:this.numberToString(e),fee:d};"password"in n?c.trade_pwd=n.password:"trade_pwd"in n?c.trade_pwd=n.trade_pwd:this.password&&(c.trade_pwd=this.password);const h=this.omit(n,["fee","password","trade_pwd"]);if(!("trade_pwd"in c))throw new r(this.id+" withdraw() requires this.password set on the exchange instance or a password / trade_pwd parameter");const u=await this.accountPostWithdrawal(this.extend(c,h));return{info:u,id:this.safeString(u,"withdrawal_id")}}async fetchDeposits(t,e,s,i={}){await this.loadMarkets();const r={};let n,a="accountGetDepositHistory";void 0!==t&&(n=this.currency(t),r.currency=n.id,a+="Currency");const o=await this[a](this.extend(r,i));return this.parseTransactions(o,n,e,s,i)}async fetchWithdrawals(t,e,s,i={}){await this.loadMarkets();const r={};let n,a="accountGetWithdrawalHistory";void 0!==t&&(n=this.currency(t),r.currency=n.id,a+="Currency");const o=await this[a](this.extend(r,i));return this.parseTransactions(o,n,e,s,i)}parseTransactionStatus(t){return this.safeString({"-3":"pending","-2":"canceled","-1":"failed",0:"pending",1:"pending",2:"ok",3:"pending",4:"pending",5:"pending"},t,t)}parseTransaction(t,e){let s,i,r;const n=this.safeString(t,"withdrawal_id"),a=this.safeString(t,"from"),o=this.safeString(t,"to"),d=this.safeString(t,"tag");void 0!==n?(s="withdrawal",i=n,r=o):(i=this.safeString2(t,"payment_id","deposit_id"),s="deposit",r=o);const c=this.safeString(t,"currency"),h=this.safeCurrencyCode(c),u=this.safeFloat(t,"amount"),l=this.parseTransactionStatus(this.safeString(t,"status")),f=this.safeString(t,"txid"),m=this.parse8601(this.safeString(t,"timestamp"));let p;if("deposit"===s)p=0;else if(void 0!==c){const e=this.safeString(t,"fee");if(void 0!==e){const t=c.toLowerCase(),s=e.replace(t,"");p=parseFloat(s)}}return{info:t,id:i,currency:h,amount:u,addressFrom:a,addressTo:o,address:r,tagFrom:void 0,tagTo:d,tag:d,status:l,type:s,updated:void 0,txid:f,timestamp:m,datetime:this.iso8601(m),fee:{currency:h,cost:p}}}parseMyTrade(t,e){const s=this.safeValue(t,1),i=this.safeValue(t,0),r=this.safeString(i,"instrument_id");if(r!==this.safeString(s,"instrument_id"))throw new k(this.id+" parseMyTrade() received unrecognized response format, differing instrument_ids in one fill, the exchange API might have changed, paste your verbose output: https://github.com/ccxt/ccxt/wiki/FAQ#what-is-required-to-get-help");const n=r,a=(e=this.safeMarket(n,e)).symbol,o=e.quoteId;let d,c,h;let u;this.safeString(s,"currency")===o?(d=this.safeString(i,"side"),c=this.safeFloat(i,"size"),h=this.safeFloat(s,"size"),u=this.safeString(i,"currency")):(d=this.safeString(s,"side"),c=this.safeFloat(s,"size"),h=this.safeFloat(i,"size"),u=this.safeString(s,"currency"));const l=this.safeString(s,"trade_id"),f=this.safeFloat(s,"price"),m=this.safeFloat(i,"fee"),p=this.safeFloat(s,"fee"),y=this.safeCurrencyCode(this.safeString(i,"currency")),g=this.safeCurrencyCode(this.safeString(s,"currency"));let _,w;void 0!==m&&0!==m?void 0!==p&&0!==p?w=[{cost:-m,currency:y},{cost:-p,currency:g}]:_={cost:-m,currency:y}:_=void 0!==p&&0!==p?{cost:-p,currency:g}:{cost:0,currency:this.safeCurrencyCode(u)};const S=this.parse8601(this.safeString2(s,"timestamp","created_at"));let v=this.safeString2(s,"exec_type","liquidity");"M"===v?v="maker":"T"===v&&(v="taker");const b=this.safeString(s,"order_id"),O={info:t,timestamp:S,datetime:this.iso8601(S),symbol:a,id:l,order:b,type:void 0,takerOrMaker:v,side:d,price:f,amount:c,cost:h,fee:_};return void 0!==w&&(O.fees=w),O}parseMyTrades(t,e,s,i,r={}){const n=this.groupBy(t,"trade_id"),a=Object.keys(n),o=[];for(let c=0;c<a.length;c++){const t=n[a[c]];if(2===t.length){const e=this.parseMyTrade(t);o.push(e)}}let d;return void 0!==e&&(d=e.symbol),this.filterBySymbolSinceLimit(o,d,s,i)}async fetchMyTrades(t,e,s,i={}){if(void 0===t)throw new o(this.id+" fetchMyTrades() requires a symbol argument");await this.loadMarkets();const r=this.market(t);void 0!==s&&s>100&&(s=100);const n={instrument_id:r.id},a=this.safeString2(this.options,"fetchMyTrades","defaultType"),d=this.safeString(i,"type",a),c=this.omit(i,"type"),h=d+"GetFills",u=await this[h](this.extend(n,c));return this.parseMyTrades(u,r,e,s,i)}async fetchOrderTrades(t,e,s,i,r={}){const n={order_id:t};return await this.fetchMyTrades(e,s,i,this.extend(n,r))}async fetchPosition(t,e={}){await this.loadMarkets();const s=this.market(t);let i;const r={instrument_id:s.id},n=s.type;if("futures"===n||"swap"===n)i=n+"GetInstrumentIdPosition";else{if("option"!==n)throw new k(this.id+" fetchPosition() does not support "+n+" market "+t+", supported market types are futures, swap or option");if(void 0===this.safeString(e,"underlying"))throw new o(this.id+" fetchPosition() requires an underlying parameter for "+n+" market "+t);i=n+"GetUnderlyingPosition"}return await this[i](this.extend(r,e))}async fetchPositions(t,e,s,i={}){let r;await this.loadMarkets();const n=this.safeString2(this.options,"fetchPositions","defaultType"),a=this.safeString(i,"type",n);if("futures"===a||"swap"===a)r=a+"GetPosition";else{if("option"!==a)throw new k(this.id+" fetchPositions() does not support "+a+" markets, supported market types are futures, swap or option");if(void 0===this.safeString(i,"underlying"))throw new o(this.id+" fetchPositions() requires an underlying parameter for "+a+" markets");r=a+"GetUnderlyingPosition"}i=this.omit(i,"type");return await this[r](i)}async fetchLedger(t,e,s,i={}){await this.loadMarkets();const r=this.safeString2(this.options,"fetchLedger","defaultType"),n=this.safeString(i,"type",r),a=this.omit(i,"type"),d="account"===n?"":"Accounts";let c="";const h={};let u;if(void 0!==s&&(h.limit=s),"spot"===n){if(void 0===t)throw new o(this.id+" fetchLedger() requires a currency code argument for '"+n+"' markets");c="Currency",u=this.currency(t),h.currency=u.id}else if("futures"===n){if(void 0===t)throw new o(this.id+" fetchLedger() requires an underlying symbol for '"+n+"' markets");c="Underlying";const e=this.market(t),s=this.safeValue(e,"info",{}),i=this.safeString(s,"settlement_currency"),r=this.safeCurrencyCode(i);u=this.currency(r);const a=this.safeString(s,"underlying");h.underlying=a}else if("margin"===n||"swap"===n){if(void 0===t)throw new o(this.id+" fetchLedger() requires a code argument (a market symbol) for '"+n+"' markets");c="InstrumentId";const e=this.market(t);u=this.currency(e.base),h.instrument_id=e.id}else{if("account"!==n)throw new k(this.id+" fetchLedger does not support the '"+n+"' type (the type must be one of 'account', 'spot', 'margin', 'futures', 'swap')");void 0!==t&&(u=this.currency(t),h.currency=u.id)}const l=n+"Get"+d+c+"Ledger",f=await this[l](this.extend(h,a));if(f.length<1)return[];const m=Array.isArray(f[0]),p="margin"===n&&m?f[0]:f;if("swap"===n){const i=this.parseLedger(p);return this.filterBySymbolSinceLimit(i,t,e,s)}return this.parseLedger(p,u,e,s)}parseLedgerEntryType(t){return this.safeString({transfer:"transfer",trade:"trade",rebate:"rebate",match:"trade",fee:"fee",settlement:"trade",liquidation:"trade",funding:"fee",margin:"margin"},t,t)}parseLedgerEntry(t,e){const s=this.safeString(t,"ledger_id"),i=this.safeValue(t,"details",{}),r=this.safeString(i,"order_id"),n=this.parseLedgerEntryType(this.safeString(t,"type")),a=this.safeCurrencyCode(this.safeString(t,"currency"),e),o=this.safeFloat(t,"amount"),d=this.parse8601(this.safeString(t,"timestamp")),c={cost:this.safeFloat(t,"fee"),currency:a},h=this.safeFloat(t,"balance"),u=this.safeString(t,"instrument_id");let l;if(u in this.markets_by_id){l=this.markets_by_id[u].symbol}return{info:t,id:s,account:undefined,referenceId:r,referenceAccount:undefined,type:n,currency:a,symbol:l,amount:o,before:undefined,after:h,status:"ok",timestamp:d,datetime:this.iso8601(d),fee:c}}sign(t,e="public",s="GET",i={},r,n){const a=Array.isArray(i);let o="/api/"+e+"/"+this.version+"/";o+=a?t:this.implodeParams(t,i);const d=a?i:this.omit(i,this.extractParams(t));let c=this.implodeParams(this.urls.api.rest,{hostname:this.hostname})+o;const h=this.getPathAuthenticationType(t);if("public"===h)Object.keys(d).length&&(c+="?"+this.urlencode(d));else if("private"===h){this.checkRequiredCredentials();const t=this.iso8601(this.milliseconds());r={"OK-ACCESS-KEY":this.apiKey,"OK-ACCESS-PASSPHRASE":this.password,"OK-ACCESS-TIMESTAMP":t};let e=t+s+o;if("GET"===s){if(Object.keys(d).length){const t="?"+this.urlencode(d);c+=t,e+=t}}else(a||Object.keys(d).length)&&(e+=n=this.json(d)),r["Content-Type"]="application/json";const i=this.hmac(this.encode(e),this.encode(this.secret),"sha256","base64");r["OK-ACCESS-SIGN"]=i}return{url:c,method:s,body:n,headers:r}}getPathAuthenticationType(t){if("underlying"===t)return"public";const e=this.safeValue(this.options,"auth",{}),s=this.findBroadlyMatchedKey(e,t);return this.safeString(e,s,"private")}handleErrors(t,e,s,i,a,o,d,c,h){if(!d)return;const u=this.id+" "+o;if(503===t)throw new n(u);const l=this.safeString(d,"message"),f=this.safeString2(d,"code","error_code"),m=void 0!==l&&""!==l,p=void 0!==f&&"0"!==f;if(m&&(this.throwExactlyMatchedException(this.exceptions.exact,l,u),this.throwBroadlyMatchedException(this.exceptions.broad,l,u)),p&&this.throwExactlyMatchedException(this.exceptions.exact,f,u),p||m)throw new r(u)}}}}]);