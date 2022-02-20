"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91599],{91061:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-576342e3",path:"/devices/CCTFR6700.html",title:"Schneider Electric CCTFR6700 control via MQTT",lang:"en-US",frontmatter:{title:"Schneider Electric CCTFR6700 control via MQTT",description:"Integrate your Schneider Electric CCTFR6700 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-05-25T17:59:46.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Device info",slug:"device-info",children:[]},{level:3,title:"Pairing and configuring",slug:"pairing-and-configuring",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Schneider_pilot_mode (enum)",slug:"schneider-pilot-mode-enum",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/CCTFR6700.md",git:{updatedTime:1645362962e3}}},49425:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var i=o(66252);const d=(0,i.uE)('<h1 id="schneider-electric-cctfr6700" tabindex="-1"><a class="header-anchor" href="#schneider-electric-cctfr6700" aria-hidden="true">#</a> Schneider Electric CCTFR6700</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>CCTFR6700</td></tr><tr><td>Vendor</td><td>Schneider Electric</td></tr><tr><td>Description</td><td>Heating thermostat</td></tr><tr><td>Exposes</td><td>power, energy, schneider_pilot_mode, climate (occupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/CCTFR6700.jpg" alt="Schneider Electric CCTFR6700"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="device-info" tabindex="-1"><a class="header-anchor" href="#device-info" aria-hidden="true">#</a> Device info</h3><p>This device is a thermostat to drive an electric heater. It supports two modes:</p><ul><li>Contactor mode, that switches the heater power supply on and off</li><li>Pilot mode, for compatible heaters</li></ul><h3 id="pairing-and-configuring" tabindex="-1"><a class="header-anchor" href="#pairing-and-configuring" aria-hidden="true">#</a> Pairing and configuring</h3><p>After pairing the device requires:</p><ul><li>the pilot mode to be configured (Contactor/Pilot)</li><li>an external temperature measurment, either through a bind from a sensor, or report from the coordinator trhough automation. The temperature must be refreshed at least every 10mn</li><li>the target thermostat set point</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',10),a=(0,i.Uk)("How to use device type specific configuration"),r=(0,i.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the themrostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="schneider-pilot-mode-enum" tabindex="-1"><a class="header-anchor" href="#schneider-pilot-mode-enum" aria-hidden="true">#</a> Schneider_pilot_mode (enum)</h3><p>Controls piloting mode. Value can be found in the published state on the <code>schneider_pilot_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;schneider_pilot_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schneider_pilot_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>contactor</code>, <code>pilot</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),c={},n=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[d,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[a])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);