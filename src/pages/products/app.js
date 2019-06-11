import './app.less';
import { navToggle } from '../../assets/js/util';

import pankou1Img from '../../assets/img/pankou-1.jpg';
import pankou2Img from '../../assets/img/pankou-2.jpg';
import pankou3Img from '../../assets/img/pankou-3.jpg';
import pankou4Img from '../../assets/img/pankou-4.jpg';
import pankou5Img from '../../assets/img/pankou-5.jpg';
import lunkou1Img from '../../assets/img/lunkou1.jpg';
import lunkou2Img from '../../assets/img/lunkou2.jpg';
import taban1Img from '../../assets/img/taban-1.jpg';
import koujian1Img from '../../assets/img/koujian-1.png';
import gangguan1Img from '../../assets/img/gangguan-1.png';
import dingtuo1Img from '../../assets/img/dingtuo-1.jpg';

import mpankou1Img from '../../assets/img/pankou-1.jpg';
import mpankou2Img from '../../assets/img/pankou-2.jpg';
import mpankou3Img from '../../assets/img/pankou-3.jpg';
import mpankou4Img from '../../assets/img/pankou-4.jpg';
import mpankou5Img from '../../assets/img/pankou-5.jpg';
import mlunkou1Img from '../../assets/img/lunkou1.jpg';
import mlunkou2Img from '../../assets/img/lunkou2.jpg';
import mtaban1Img from '../../assets/img/m-taban-1.jpg';
import mtaban2Img from '../../assets/img/m-taban-2.jpg';
import mkoujian1Img from '../../assets/img/m-koujian-1.jpg';
import mkoujian2Img from '../../assets/img/m-koujian-2.jpg';
import mgangguan1Img from '../../assets/img/m-gangguan-1.jpg';
import mgangguan2Img from '../../assets/img/m-gangguan-2.jpg';
import mdingtuo1Img from '../../assets/img/m-dingtuo-1.jpg';   
import mdingtuo2Img from '../../assets/img/m-dingtuo-2.jpg';   

const pankouHtml = `<div class="section pankou">
    <div class="card card1">
    <div class="left">
        <div class="title">盘扣式钢管支架支柱</div>
        <div class="text">盘扣式钢管支架立杆采用套管承插连接，水平杆和斜杆采用杆端扣接头卡入连接盘，用楔形插销连接，形成结构几何不变体系的钢管支架。承插式盘扣式钢管支架由立杆、水平杆、斜杆、可调节底座及可调节托座等构配件组成。根据其用途可以分为模板支架和脚手架两类。</div>
    </div>
    <div class="right">
        <img src="${pankou1Img}" alt="pankou1" />
    </div>
    </div>
    <div class="card card2">
    <div class="left">
        <img src="${pankou2Img}" alt="pankou2" />
    </div>
    <div class="right">
        <div class="text">
        <p>立杆：立杆上焊接有连接盘和连接套管的竖向支撑杆件</p>
        <p>材质：Q345A，热镀锌。</p>
        <p>连接盘：焊接于立杆上可扣接8个方向扣接头的八边形或圆环形孔板。</p>
        <p>盘扣节点：支架立杆上的连接盘与水平杆、斜杆杆端上的插销连接的部位。</p>
        <p>立杆连接套管：焊接于立杆一端，用于立杆竖向接长的专用外套管。</p>
        <p>立杆连接件(弹簧）：将立杆与立杆连接套管固定防拔脱的专用部件。</p>
        </div>
    </div>
    </div>
    <div class="card card3">
    <div class="left">
        <img src="${pankou3Img}" alt="pankou3" />
    </div>
    <div class="right">
        <div class="title">盘扣式脚手架水平杆</div>
        <div class="text">
        <p>水平杆：两端焊接有扣接头，且与立杆扣接的水平杆件，材质Q235B，热镀锌。</p>
        <p>扣接头：位于水平杆或斜杆杆件端头，用于与立杆上的连接盘扣接的部件。</p>
        <p>插销：固定扣接头与连接盘的专用楔形部件。</p>
        </div>
    </div>
    </div>
    <div class="card card4">
    <div class="left">
        <div class="title">盘扣式脚手架竖向斜杆</div>
        <div class="text">
        <p>斜杆：与立杆上的连接盘扣接的斜向杆件，分为竖向斜杆和水平斜杆。</p>
        <p>竖向斜杆：材质Q195，镀锌管。</p>
        </div>
        <img src="${pankou4Img}" alt="pankou4" />
    </div>
    <div class="right">
        <img src="${pankou5Img}" alt="pankou5" />
    </div>
    </div>
    <div class="intro">
    <div class="stitle">盘扣优越性</div>
    <div class="stext">
        <p>一、承载力强：盘扣式脚手架立杆使用Q345低碳合金结构钢，且规格为Φ60×3.2mm，单杆极限值可达10t以上，各种杆件轴线交于一点，整体稳定性强度比碗扣式脚手架高200%。</p>
        <p>
        二、安全性高：
        <br /> 1、盘扣式脚手架采用自锁式连接盘和插销，插销插接后靠自重即可锁紧，防止疏忽造成工人伤害事件的发生。
        <br /> 2、它的横向和竖向斜支撑使每个单元都是固定的三角形格构式，支撑架受到横向和纵向的力之后都不会发生变形。
        <br /> 3、盘扣式脚手架是一个完整的体系，钢跳板和爬梯都能起到确保支撑架稳定和工人安全的作用。
        <br /> 4、杆件加工精度高于其它支撑产品，搭设效果横平竖直，连接盘及水平杆插头均为铸钢件更坚固，同时内外热镀锌有很好的抗腐蚀性，银色外观整体架手架工程非常美观。
        <br />
        </p>
        <p>
        三、经济效益好：
        <br /> 1、结构少、重量轻，安装方式简单，搭设及拆除的时间大大缩短。
        <br /> 2、由于盘扣式脚手架立杆承载力大，在同样的单元所使用的立杆数重量最多仅为碗扣式脚手架的65%。
        <br /> 3、构件系列标准化，便于运输且降低运输成本，无零散易丢构件，损耗低，后期投入少。
        <br />
        </p>
    </div>
    </div>
</div>`;

const lunkouHtml = `<div class="section lunkou">
<div class="left">
  <div class="left1">
    <div class="title">轮扣式脚手架</div>
    <div class="text">轮扣（直插）式脚手架是一种具有自锁功能的直插式新型钢管脚手架，参照住房和城乡建设部颁发的JGJ231-2010标准生产，主要构件为立杆和横杆，盘扣节点结构合理，立杆轴向传力，使脚手架整体在三维空间结构强度高、整体稳定性好，并具有可靠的自锁功能，能有效提高脚手架的整体稳定强度和安全度，能更好的满足施工安全的需要。具有拼拆迅速、省力，结构简单、稳定可靠，通用性强，承载力大，安全高效，不易丢失，便于管理，易于运输等特点。</div>
  </div>
  <div class="left2">
    <img src="${lunkou2Img}" alt="lunkou1">
  </div>
</div>
<div class="right">
  <div class="right1">
    <img src="${lunkou1Img}" alt="lunkou1">
  </div>
  <div class="right2">
    <div class="title">轮扣式脚手架其主要特点</div>
    <div class="text">一.具有多功能性：可以根据具体的施工要求，组成不同的组架尺寸、形状和承载能力的单、双排脚手架，支撑架，支撑柱等多种功能的施工装备。</div>
  </div>
</div>
<div class="clear"></div>
<div class="content">
  <p>二.具有高功效：构造简单、拆装简便、快速，完全避免了螺栓作业和零散扣件的丢损，接头拼装拆速度比常规块5倍以上，拼拆快速省力，工人用一把铁锤即可完成全部作业。</p>
  <p>三.具有承载力大：立杆连接是同轴心承插，节点在框架平面内，接头具有抗弯、抗剪、抗扭力学性能，结构稳定，承载力大。</p>
  <p>四.具有安全可靠性：接头设计时考虑到自重力的作用，使接头具有可靠的双向自锁能力，作用于横杆上的荷载通过盘扣传递给立杆，盘扣具有很强的抗剪能力（最大为199KN）。</p>
  <p>五.产品标准化包装，维修少、装卸快捷、运输方便、易存放。</p>
  <p>六.盘扣式脚手架使用寿命比扣件脚手架高很多，一般可以用10年以上，由于抛弃了螺栓连接。构件经碰耐磕．就算锈蚀不影响拼拆使用。</p>
  <p>七.具有早拆功能：横杆可提前拆下周转，节省材料，节省木方，节省人工。真正做到节能环保，经济、实用。</p>
</div>
</div>`;

const tabanHtml = `<div class="section taban">
<div class="title">盘扣式脚手架专用脚踏板</div>
<img src="${taban1Img}" alt="taban1" />
</div>`;

const koujianHtml = `<div class="section koujian">
<div class="title">扣件</div>
<div class="text">国内常用的扣件是铸铁制作。扣件有三种产品：直角扣件，对接扣件，旋转扣件。与架子管配套使用，一般扣件产品的生产及采购配比是8：1：1。</div>
<img src="${koujian1Img}" alt="taban1" />
</div>`;

const gangguanHtml = `<div class="section gangguan">
<div class="title">钢管</div>
<div class="text">
  <p>本公司钢管发展到20000余吨，品种规格齐全、数量充足。钢管0.5-6米规格齐全，质量达标。使用于：楼房建、桥梁、地铁、隧道、大跨度棚架等多种工程设施。</p>
  <p>竭诚与国内商家双赢合作，共同发展，共创辉煌。</p>
</div>
<img src="${gangguan1Img}" alt="taban1" />
</div>`;

const dingtuoHtml = `<div class="section dingtuo">
<div class="title">顶托</div>
<div class="text">建筑用于脚手架的底部与顶部支撑</div>
<img src="${dingtuo1Img}" alt="taban1" />
</div>`

const html = {
    pankou: pankouHtml,
    lunkou: lunkouHtml,
    taban: tabanHtml,
    koujian: koujianHtml,
    gangguan: gangguanHtml,
    dingtuo: dingtuoHtml,
}

const mpankouHtml = `<div class="stitle">盘扣式钢管支架支柱</div>
<div class="stext">盘扣式钢管支架立杆采用套管承插连接，水平杆和斜杆采用杆端扣接头卡入连接盘，用楔形插销连接，形成结构几何不变体系的钢管支架。承插式盘扣式钢管支架由立杆、水平杆、斜杆、可调节底座及可调节托座等构配件组成。根据其用途可以分为模板支架和脚手架两类。</div>
<div class="img">
  <img src="${mpankou1Img}" alt="">
</div>
<div class="stext">
  立杆：立杆上焊接有连接盘和连接套管的竖向支撑杆件<br/>
  材质：Q345A，热镀锌。<br/>
  连接盘：焊接于立杆上可扣接8个方向扣接头的八边形或圆环形孔板。<br/>
  盘扣节点：支架立杆上的连接盘与水平杆、斜杆杆端上的插销连接的部位。<br/>
  立杆连接套管：焊接于立杆一端，用于立杆竖向接长的专用外套管。<br/>
  立杆连接件(弹簧）：将立杆与立杆连接套管固定防拔脱的专用部件。
</div>
<div class="stitle">盘扣式脚手架水平杆</div>
<div class="stext">
  水平杆：两端焊接有扣接头，且与立杆扣接的水平杆件，材质Q235B，热镀锌。<br/>
  扣接头：位于水平杆或斜杆杆件端头，用于与立杆上的连接盘扣接的部件。<br/>
  插销：固定扣接头与连接盘的专用楔形部件。
</div>
<div class="img">
  <img src="${mpankou3Img}" alt="">
</div>
<div class="stitle">盘扣式脚手架竖向斜杆</div>
<div class="stext">
  斜杆：与立杆上的连接盘扣接的斜向杆件，分为竖向斜杆和水平斜杆。<br/>
  竖向斜杆：材质Q195，镀锌管。          
</div>
<div class="img">
  <img src="${mpankou4Img}" alt="">
</div>
<div class="imgs">
  <img src="${mpankou5Img}" alt="">
  <img src="${mpankou2Img}" alt="">
</div>`

const mlunkouHtml = `
    <div class="stitle">轮扣式脚手架</div>
    <div class="stext">轮扣（直插）式脚手架是一种具有自锁功能的直插式新型钢管脚手架，参照住房和城乡建设部颁发的JGJ231-2010标准生产，主要构件为立杆和横杆，盘扣节点结构合理，立杆轴向传力，使脚手架整体在三维空间结构强度高、整体稳定性好，并具有可靠的自锁功能，能有效提高脚手架的整体稳定强度和安全度，能更好的满足施工安全的需要。具有拼拆迅速、省力，结构简单、稳定可靠，通用性强，承载力大，安全高效，不易丢失，便于管理，易于运输等特点。</div>
    <div class="img">
        <img src="${mlunkou2Img}" alt="">
    </div>
    <div class="stitle">轮扣式脚手架其主要特点</div>
    <div class="stext">
        一.具有多功能性：可以根据具体的施工要求，组成不同的组架尺寸、形状和承载能力的单、双排脚手架，支撑架，支撑柱等多种功能的施工装备。
        <br/><br/>
        二.具有高功效：构造简单、拆装简便、快速，完全避免了螺栓作业和零散扣件的丢损，接头拼装拆速度比常规块5倍以上，拼拆快速省力，工人用一把铁锤即可完成全部作业。
        <br/><br/>
        三.具有承载力大：立杆连接是同轴心承插，节点在框架平面内，接头具有抗弯、抗剪、抗扭力学性能，结构稳定，承载力大。
        <br/><br/>
        四.具有安全可靠性：接头设计时考虑到自重力的作用，使接头具有可靠的双向自锁能力，作用于横杆上的荷载通过盘扣传递给立杆，盘扣具有很强的抗剪能力（最大为199KN）。
        <br/><br/>
        五.产品标准化包装，维修少、装卸快捷、运输方便、易存放。
        <br/><br/>
        六.盘扣式脚手架使用寿命比扣件脚手架高很多，一般可以用10年以上，由于抛弃了螺栓连接。构件经碰耐磕．就算锈蚀不影响拼拆使用。
        <br/><br/>
        七.具有早拆功能：横杆可提前拆下周转，节省材料，节省木方，节省人工。真正做到节能环保，经济、实用。
    </div>
    <div class="img">
        <img src="${mlunkou1Img}" alt="">
    </div>
`

const mkoujianHtml = `
    <div class="stitle">扣件</div>
    <div class="stext">国内常用的扣件是铸铁制作。扣件有三种产品：直角扣件，对接扣件，旋转扣件。与架子管配套使用，一般扣件产品的生产及采购配比是8：1：1。</div>
    <div class="img">
        <img src="${mkoujian1Img}" alt="">
    </div>
    <div class="img">
        <img src="${mkoujian2Img}" alt="">
    </div>
`

const mgangguanHtml = `
    <div class="stitle">钢管</div>
    <div class="stext">本公司钢管发展到20000余吨，品种规格齐全、数量充足。钢管0.5-6米规格齐全，质量达标。使用于：楼房建、桥梁、地铁、隧道、大跨度棚架等多种工程设施。竭诚与国内商家双赢合作，共同发展，共创辉煌。</div>
    <div class="img">
        <img src="${mgangguan1Img}" alt="">
    </div>
    <div class="img">
        <img src="${mgangguan2Img}" alt="">
    </div>
`

const mtabanHtml = `
    <div class="stitle">盘扣式脚手架专用踏板</div>
    <div class="img">
        <img src="${mtaban1Img}" alt="">
    </div>
    <div class="img">
        <img src="${mtaban2Img}" alt="">
    </div>
`

const mdingtuoHtml = `
    <div class="stitle">顶托</div>
    <div class="stext middle">建筑用于脚手架的底部与顶部支撑</div>
    <div class="img">
        <img src="${mdingtuo1Img}" alt="">
    </div>
    <div class="img">
        <img src="${mdingtuo2Img}" alt="">
    </div>
`;

const mhtml = {
    pankou: mpankouHtml,
    lunkou: mlunkouHtml,
    koujian: mkoujianHtml,
    gangguan: mgangguanHtml,
    dingtuo: mdingtuoHtml,
    taban: mtabanHtml,
}

window.onload = function () {
    const search = location.search.split('?')[1];
    $(`.pc .main`).append(html[search]);
    $(`.pc .sitem.${search}`).addClass('active');

    $(`.mobile .scontent`).append(mhtml[search]);
    navToggle();
}