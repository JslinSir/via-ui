const _in="via-fade-in",config={fadein:`${_in}`,fadeinFromBottom:`${_in}-from-bottom`,fadeinFromTop:`${_in}-from-top`,fadeinFromLeft:`${_in}-from-left`,fadeinFromRight:`${_in}-from-right`,fadeinScale:`${_in}-scale`,fadeinSwingY:`${_in}-swing-y`,fadeinSwingX:`${_in}-swing-x `,rotate90:"via-rotate-90",rotate180:"via-rotate-180",rotate360:"via-rotate-360",shake:"via-shake",jello:"via-jello"};Component({properties:{name:{type:String,value:"fadein"},duration:{type:Number,value:.3},timingFunction:{type:String,value:"ease-in-out"},iterationCount:{type:Number,value:1}},data:{config:config},methods:{}});