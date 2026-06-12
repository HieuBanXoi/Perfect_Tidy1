var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointSpring' )
  var i2155 = data
  i2154.spring = i2155[0]
  i2154.damper = i2155[1]
  i2154.targetPosition = i2155[2]
  return i2154
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.JointMotor' )
  var i2157 = data
  i2156.m_TargetVelocity = i2157[0]
  i2156.m_Force = i2157[1]
  i2156.m_FreeSpin = i2157[2]
  return i2156
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.JointLimits' )
  var i2159 = data
  i2158.m_Min = i2159[0]
  i2158.m_Max = i2159[1]
  i2158.m_Bounciness = i2159[2]
  i2158.m_BounceMinVelocity = i2159[3]
  i2158.m_ContactDistance = i2159[4]
  i2158.minBounce = i2159[5]
  i2158.maxBounce = i2159[6]
  return i2158
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.JointDrive' )
  var i2161 = data
  i2160.m_PositionSpring = i2161[0]
  i2160.m_PositionDamper = i2161[1]
  i2160.m_MaximumForce = i2161[2]
  i2160.m_UseAcceleration = i2161[3]
  return i2160
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2163 = data
  i2162.m_Spring = i2163[0]
  i2162.m_Damper = i2163[1]
  return i2162
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2165 = data
  i2164.m_Limit = i2165[0]
  i2164.m_Bounciness = i2165[1]
  i2164.m_ContactDistance = i2165[2]
  return i2164
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2167 = data
  i2166.m_ExtremumSlip = i2167[0]
  i2166.m_ExtremumValue = i2167[1]
  i2166.m_AsymptoteSlip = i2167[2]
  i2166.m_AsymptoteValue = i2167[3]
  i2166.m_Stiffness = i2167[4]
  return i2166
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2169 = data
  i2168.m_LowerAngle = i2169[0]
  i2168.m_UpperAngle = i2169[1]
  return i2168
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2170 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2171 = data
  i2170.m_MotorSpeed = i2171[0]
  i2170.m_MaximumMotorTorque = i2171[1]
  return i2170
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2173 = data
  i2172.m_DampingRatio = i2173[0]
  i2172.m_Frequency = i2173[1]
  i2172.m_Angle = i2173[2]
  return i2172
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2175 = data
  i2174.m_LowerTranslation = i2175[0]
  i2174.m_UpperTranslation = i2175[1]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2176 = root || new pc.UnityMaterial()
  var i2177 = data
  i2176.name = i2177[0]
  request.r(i2177[1], i2177[2], 0, i2176, 'shader')
  i2176.renderQueue = i2177[3]
  i2176.enableInstancing = !!i2177[4]
  var i2179 = i2177[5]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2179[i + 0]) );
  }
  i2176.floatParameters = i2178
  var i2181 = i2177[6]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2181[i + 0]) );
  }
  i2176.colorParameters = i2180
  var i2183 = i2177[7]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2183[i + 0]) );
  }
  i2176.vectorParameters = i2182
  var i2185 = i2177[8]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2185[i + 0]) );
  }
  i2176.textureParameters = i2184
  var i2187 = i2177[9]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2187[i + 0]) );
  }
  i2176.materialFlags = i2186
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.value = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.value = new pc.Color(i2195[1], i2195[2], i2195[3], i2195[4])
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2199 = data
  i2198.name = i2199[0]
  i2198.value = new pc.Vec4( i2199[1], i2199[2], i2199[3], i2199[4] )
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2203 = data
  i2202.name = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'value')
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2207 = data
  i2206.name = i2207[0]
  i2206.enabled = !!i2207[1]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.width = i2209[1]
  i2208.height = i2209[2]
  i2208.mipmapCount = i2209[3]
  i2208.anisoLevel = i2209[4]
  i2208.filterMode = i2209[5]
  i2208.hdr = !!i2209[6]
  i2208.format = i2209[7]
  i2208.wrapMode = i2209[8]
  i2208.alphaIsTransparency = !!i2209[9]
  i2208.alphaSource = i2209[10]
  i2208.graphicsFormat = i2209[11]
  i2208.sRGBTexture = !!i2209[12]
  i2208.desiredColorSpace = i2209[13]
  i2208.wrapU = i2209[14]
  i2208.wrapV = i2209[15]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2211 = data
  i2210.position = new pc.Vec3( i2211[0], i2211[1], i2211[2] )
  i2210.scale = new pc.Vec3( i2211[3], i2211[4], i2211[5] )
  i2210.rotation = new pc.Quat(i2211[6], i2211[7], i2211[8], i2211[9])
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2213 = data
  i2212.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2213[0], i2212.main)
  i2212.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2213[1], i2212.colorBySpeed)
  i2212.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2213[2], i2212.colorOverLifetime)
  i2212.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2213[3], i2212.emission)
  i2212.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2213[4], i2212.rotationBySpeed)
  i2212.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2213[5], i2212.rotationOverLifetime)
  i2212.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2213[6], i2212.shape)
  i2212.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2213[7], i2212.sizeBySpeed)
  i2212.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2213[8], i2212.sizeOverLifetime)
  i2212.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2213[9], i2212.textureSheetAnimation)
  i2212.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2213[10], i2212.velocityOverLifetime)
  i2212.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2213[11], i2212.noise)
  i2212.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2213[12], i2212.inheritVelocity)
  i2212.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2213[13], i2212.forceOverLifetime)
  i2212.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2213[14], i2212.limitVelocityOverLifetime)
  i2212.useAutoRandomSeed = !!i2213[15]
  i2212.randomSeed = i2213[16]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemMain()
  var i2215 = data
  i2214.duration = i2215[0]
  i2214.loop = !!i2215[1]
  i2214.prewarm = !!i2215[2]
  i2214.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.startDelay)
  i2214.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[4], i2214.startLifetime)
  i2214.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[5], i2214.startSpeed)
  i2214.startSize3D = !!i2215[6]
  i2214.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[7], i2214.startSizeX)
  i2214.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[8], i2214.startSizeY)
  i2214.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[9], i2214.startSizeZ)
  i2214.startRotation3D = !!i2215[10]
  i2214.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[11], i2214.startRotationX)
  i2214.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[12], i2214.startRotationY)
  i2214.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[13], i2214.startRotationZ)
  i2214.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2215[14], i2214.startColor)
  i2214.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[15], i2214.gravityModifier)
  i2214.simulationSpace = i2215[16]
  request.r(i2215[17], i2215[18], 0, i2214, 'customSimulationSpace')
  i2214.simulationSpeed = i2215[19]
  i2214.useUnscaledTime = !!i2215[20]
  i2214.scalingMode = i2215[21]
  i2214.playOnAwake = !!i2215[22]
  i2214.maxParticles = i2215[23]
  i2214.emitterVelocityMode = i2215[24]
  i2214.stopAction = i2215[25]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2216 = root || new pc.MinMaxCurve()
  var i2217 = data
  i2216.mode = i2217[0]
  i2216.curveMin = new pc.AnimationCurve( { keys_flow: i2217[1] } )
  i2216.curveMax = new pc.AnimationCurve( { keys_flow: i2217[2] } )
  i2216.curveMultiplier = i2217[3]
  i2216.constantMin = i2217[4]
  i2216.constantMax = i2217[5]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2218 = root || new pc.MinMaxGradient()
  var i2219 = data
  i2218.mode = i2219[0]
  i2218.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2219[1], i2218.gradientMin)
  i2218.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2219[2], i2218.gradientMax)
  i2218.colorMin = new pc.Color(i2219[3], i2219[4], i2219[5], i2219[6])
  i2218.colorMax = new pc.Color(i2219[7], i2219[8], i2219[9], i2219[10])
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2221 = data
  i2220.mode = i2221[0]
  var i2223 = i2221[1]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2223[i + 0]) );
  }
  i2220.colorKeys = i2222
  var i2225 = i2221[2]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2225[i + 0]) );
  }
  i2220.alphaKeys = i2224
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemColorBySpeed()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2227[1], i2226.color)
  i2226.range = new pc.Vec2( i2227[2], i2227[3] )
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2231 = data
  i2230.color = new pc.Color(i2231[0], i2231[1], i2231[2], i2231[3])
  i2230.time = i2231[4]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2235 = data
  i2234.alpha = i2235[0]
  i2234.time = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemColorOverLifetime()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2237[1], i2236.color)
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemEmitter()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[1], i2238.rateOverTime)
  i2238.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[2], i2238.rateOverDistance)
  var i2241 = i2239[3]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2241[i + 0]) );
  }
  i2238.bursts = i2240
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemBurst()
  var i2245 = data
  i2244.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[0], i2244.count)
  i2244.cycleCount = i2245[1]
  i2244.minCount = i2245[2]
  i2244.maxCount = i2245[3]
  i2244.repeatInterval = i2245[4]
  i2244.time = i2245[5]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2246 = root || new pc.ParticleSystemRotationBySpeed()
  var i2247 = data
  i2246.enabled = !!i2247[0]
  i2246.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[1], i2246.x)
  i2246.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[2], i2246.y)
  i2246.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2247[3], i2246.z)
  i2246.separateAxes = !!i2247[4]
  i2246.range = new pc.Vec2( i2247[5], i2247[6] )
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2248 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2249 = data
  i2248.enabled = !!i2249[0]
  i2248.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[1], i2248.x)
  i2248.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[2], i2248.y)
  i2248.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2249[3], i2248.z)
  i2248.separateAxes = !!i2249[4]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2250 = root || new pc.ParticleSystemShape()
  var i2251 = data
  i2250.enabled = !!i2251[0]
  i2250.shapeType = i2251[1]
  i2250.randomDirectionAmount = i2251[2]
  i2250.sphericalDirectionAmount = i2251[3]
  i2250.randomPositionAmount = i2251[4]
  i2250.alignToDirection = !!i2251[5]
  i2250.radius = i2251[6]
  i2250.radiusMode = i2251[7]
  i2250.radiusSpread = i2251[8]
  i2250.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[9], i2250.radiusSpeed)
  i2250.radiusThickness = i2251[10]
  i2250.angle = i2251[11]
  i2250.length = i2251[12]
  i2250.boxThickness = new pc.Vec3( i2251[13], i2251[14], i2251[15] )
  i2250.meshShapeType = i2251[16]
  request.r(i2251[17], i2251[18], 0, i2250, 'mesh')
  request.r(i2251[19], i2251[20], 0, i2250, 'meshRenderer')
  request.r(i2251[21], i2251[22], 0, i2250, 'skinnedMeshRenderer')
  i2250.useMeshMaterialIndex = !!i2251[23]
  i2250.meshMaterialIndex = i2251[24]
  i2250.useMeshColors = !!i2251[25]
  i2250.normalOffset = i2251[26]
  i2250.arc = i2251[27]
  i2250.arcMode = i2251[28]
  i2250.arcSpread = i2251[29]
  i2250.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2251[30], i2250.arcSpeed)
  i2250.donutRadius = i2251[31]
  i2250.position = new pc.Vec3( i2251[32], i2251[33], i2251[34] )
  i2250.rotation = new pc.Vec3( i2251[35], i2251[36], i2251[37] )
  i2250.scale = new pc.Vec3( i2251[38], i2251[39], i2251[40] )
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2252 = root || new pc.ParticleSystemSizeBySpeed()
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[1], i2252.x)
  i2252.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[2], i2252.y)
  i2252.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2253[3], i2252.z)
  i2252.separateAxes = !!i2253[4]
  i2252.range = new pc.Vec2( i2253[5], i2253[6] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[1], i2254.x)
  i2254.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[2], i2254.y)
  i2254.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2255[3], i2254.z)
  i2254.separateAxes = !!i2255[4]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.mode = i2257[1]
  i2256.animation = i2257[2]
  i2256.numTilesX = i2257[3]
  i2256.numTilesY = i2257[4]
  i2256.useRandomRow = !!i2257[5]
  i2256.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[6], i2256.frameOverTime)
  i2256.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.startFrame)
  i2256.cycleCount = i2257[8]
  i2256.rowIndex = i2257[9]
  i2256.flipU = i2257[10]
  i2256.flipV = i2257[11]
  i2256.spriteCount = i2257[12]
  var i2259 = i2257[13]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.sprites = i2258
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2263 = data
  i2262.enabled = !!i2263[0]
  i2262.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[1], i2262.x)
  i2262.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[2], i2262.y)
  i2262.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[3], i2262.z)
  i2262.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[4], i2262.radial)
  i2262.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[5], i2262.speedModifier)
  i2262.space = i2263[6]
  i2262.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[7], i2262.orbitalX)
  i2262.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[8], i2262.orbitalY)
  i2262.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[9], i2262.orbitalZ)
  i2262.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[10], i2262.orbitalOffsetX)
  i2262.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[11], i2262.orbitalOffsetY)
  i2262.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[12], i2262.orbitalOffsetZ)
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemNoise()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.separateAxes = !!i2265[1]
  i2264.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.strengthX)
  i2264.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[3], i2264.strengthY)
  i2264.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[4], i2264.strengthZ)
  i2264.frequency = i2265[5]
  i2264.damping = !!i2265[6]
  i2264.octaveCount = i2265[7]
  i2264.octaveMultiplier = i2265[8]
  i2264.octaveScale = i2265[9]
  i2264.quality = i2265[10]
  i2264.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[11], i2264.scrollSpeed)
  i2264.scrollSpeedMultiplier = i2265[12]
  i2264.remapEnabled = !!i2265[13]
  i2264.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[14], i2264.remapX)
  i2264.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[15], i2264.remapY)
  i2264.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[16], i2264.remapZ)
  i2264.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[17], i2264.positionAmount)
  i2264.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[18], i2264.rotationAmount)
  i2264.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[19], i2264.sizeAmount)
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemInheritVelocity()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.mode = i2267[1]
  i2266.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.curve)
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemForceOverLifetime()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[1], i2268.x)
  i2268.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[2], i2268.y)
  i2268.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[3], i2268.z)
  i2268.space = i2269[4]
  i2268.randomized = !!i2269[5]
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2270 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2271 = data
  i2270.enabled = !!i2271[0]
  i2270.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[1], i2270.limit)
  i2270.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[2], i2270.limitX)
  i2270.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[3], i2270.limitY)
  i2270.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[4], i2270.limitZ)
  i2270.dampen = i2271[5]
  i2270.separateAxes = !!i2271[6]
  i2270.space = i2271[7]
  i2270.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[8], i2270.drag)
  i2270.multiplyDragByParticleSize = !!i2271[9]
  i2270.multiplyDragByParticleVelocity = !!i2271[10]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'mesh')
  i2272.meshCount = i2273[2]
  i2272.activeVertexStreamsCount = i2273[3]
  i2272.alignment = i2273[4]
  i2272.renderMode = i2273[5]
  i2272.sortMode = i2273[6]
  i2272.lengthScale = i2273[7]
  i2272.velocityScale = i2273[8]
  i2272.cameraVelocityScale = i2273[9]
  i2272.normalDirection = i2273[10]
  i2272.sortingFudge = i2273[11]
  i2272.minParticleSize = i2273[12]
  i2272.maxParticleSize = i2273[13]
  i2272.pivot = new pc.Vec3( i2273[14], i2273[15], i2273[16] )
  request.r(i2273[17], i2273[18], 0, i2272, 'trailMaterial')
  i2272.applyActiveColorSpace = !!i2273[19]
  i2272.enabled = !!i2273[20]
  request.r(i2273[21], i2273[22], 0, i2272, 'sharedMaterial')
  var i2275 = i2273[23]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.sharedMaterials = i2274
  i2272.receiveShadows = !!i2273[24]
  i2272.shadowCastingMode = i2273[25]
  i2272.sortingLayerID = i2273[26]
  i2272.sortingOrder = i2273[27]
  i2272.lightmapIndex = i2273[28]
  i2272.lightmapSceneIndex = i2273[29]
  i2272.lightmapScaleOffset = new pc.Vec4( i2273[30], i2273[31], i2273[32], i2273[33] )
  i2272.lightProbeUsage = i2273[34]
  i2272.reflectionProbeUsage = i2273[35]
  return i2272
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2278 = root || request.c( 'MergeEffect' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'tf')
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.tagId = i2281[1]
  i2280.enabled = !!i2281[2]
  i2280.isStatic = !!i2281[3]
  i2280.layer = i2281[4]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.halfPrecision = !!i2283[1]
  i2282.useSimplification = !!i2283[2]
  i2282.useUInt32IndexFormat = !!i2283[3]
  i2282.vertexCount = i2283[4]
  i2282.aabb = i2283[5]
  var i2285 = i2283[6]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( !!i2285[i + 0] );
  }
  i2282.streams = i2284
  i2282.vertices = i2283[7]
  var i2287 = i2283[8]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2287[i + 0]) );
  }
  i2282.subMeshes = i2286
  var i2289 = i2283[9]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 16) {
    i2288.push( new pc.Mat4().setData(i2289[i + 0], i2289[i + 1], i2289[i + 2], i2289[i + 3],  i2289[i + 4], i2289[i + 5], i2289[i + 6], i2289[i + 7],  i2289[i + 8], i2289[i + 9], i2289[i + 10], i2289[i + 11],  i2289[i + 12], i2289[i + 13], i2289[i + 14], i2289[i + 15]) );
  }
  i2282.bindposes = i2288
  var i2291 = i2283[10]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2291[i + 0]) );
  }
  i2282.blendShapes = i2290
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2297 = data
  i2296.triangles = i2297[0]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2303 = data
  i2302.name = i2303[0]
  var i2305 = i2303[1]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2305[i + 0]) );
  }
  i2302.frames = i2304
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2307 = data
  i2306.name = i2307[0]
  i2306.index = i2307[1]
  i2306.startup = !!i2307[2]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2309 = data
  i2308.pivot = new pc.Vec2( i2309[0], i2309[1] )
  i2308.anchorMin = new pc.Vec2( i2309[2], i2309[3] )
  i2308.anchorMax = new pc.Vec2( i2309[4], i2309[5] )
  i2308.sizeDelta = new pc.Vec2( i2309[6], i2309[7] )
  i2308.anchoredPosition3D = new pc.Vec3( i2309[8], i2309[9], i2309[10] )
  i2308.rotation = new pc.Quat(i2309[11], i2309[12], i2309[13], i2309[14])
  i2308.scale = new pc.Vec3( i2309[15], i2309[16], i2309[17] )
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2311 = data
  i2310.planeDistance = i2311[0]
  i2310.referencePixelsPerUnit = i2311[1]
  i2310.isFallbackOverlay = !!i2311[2]
  i2310.renderMode = i2311[3]
  i2310.renderOrder = i2311[4]
  i2310.sortingLayerName = i2311[5]
  i2310.sortingOrder = i2311[6]
  i2310.scaleFactor = i2311[7]
  request.r(i2311[8], i2311[9], 0, i2310, 'worldCamera')
  i2310.overrideSorting = !!i2311[10]
  i2310.pixelPerfect = !!i2311[11]
  i2310.targetDisplay = i2311[12]
  i2310.overridePixelPerfect = !!i2311[13]
  i2310.enabled = !!i2311[14]
  return i2310
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2313 = data
  i2312.m_UiScaleMode = i2313[0]
  i2312.m_ReferencePixelsPerUnit = i2313[1]
  i2312.m_ScaleFactor = i2313[2]
  i2312.m_ReferenceResolution = new pc.Vec2( i2313[3], i2313[4] )
  i2312.m_ScreenMatchMode = i2313[5]
  i2312.m_MatchWidthOrHeight = i2313[6]
  i2312.m_PhysicalUnit = i2313[7]
  i2312.m_FallbackScreenDPI = i2313[8]
  i2312.m_DefaultSpriteDPI = i2313[9]
  i2312.m_DynamicPixelsPerUnit = i2313[10]
  i2312.m_PresetInfoIsWorld = !!i2313[11]
  return i2312
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2315 = data
  i2314.m_IgnoreReversedGraphics = !!i2315[0]
  i2314.m_BlockingObjects = i2315[1]
  i2314.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2315[2] )
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'animatorController')
  request.r(i2317[2], i2317[3], 0, i2316, 'avatar')
  i2316.updateMode = i2317[4]
  i2316.hasTransformHierarchy = !!i2317[5]
  i2316.applyRootMotion = !!i2317[6]
  var i2319 = i2317[7]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2316.humanBones = i2318
  i2316.enabled = !!i2317[8]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2323 = data
  i2322.cullTransparentMesh = !!i2323[0]
  return i2322
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2325 = data
  i2324.m_hasFontAssetChanged = !!i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'm_baseMaterial')
  i2324.m_maskOffset = new pc.Vec4( i2325[3], i2325[4], i2325[5], i2325[6] )
  i2324.m_text = i2325[7]
  i2324.m_isRightToLeft = !!i2325[8]
  request.r(i2325[9], i2325[10], 0, i2324, 'm_fontAsset')
  request.r(i2325[11], i2325[12], 0, i2324, 'm_sharedMaterial')
  var i2327 = i2325[13]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.m_fontSharedMaterials = i2326
  request.r(i2325[14], i2325[15], 0, i2324, 'm_fontMaterial')
  var i2329 = i2325[16]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2324.m_fontMaterials = i2328
  i2324.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2325[17], i2325[18], i2325[19], i2325[20])
  i2324.m_fontColor = new pc.Color(i2325[21], i2325[22], i2325[23], i2325[24])
  i2324.m_enableVertexGradient = !!i2325[25]
  i2324.m_colorMode = i2325[26]
  i2324.m_fontColorGradient = request.d('TMPro.VertexGradient', i2325[27], i2324.m_fontColorGradient)
  request.r(i2325[28], i2325[29], 0, i2324, 'm_fontColorGradientPreset')
  request.r(i2325[30], i2325[31], 0, i2324, 'm_spriteAsset')
  i2324.m_tintAllSprites = !!i2325[32]
  request.r(i2325[33], i2325[34], 0, i2324, 'm_StyleSheet')
  i2324.m_TextStyleHashCode = i2325[35]
  i2324.m_overrideHtmlColors = !!i2325[36]
  i2324.m_faceColor = UnityEngine.Color32.ConstructColor(i2325[37], i2325[38], i2325[39], i2325[40])
  i2324.m_fontSize = i2325[41]
  i2324.m_fontSizeBase = i2325[42]
  i2324.m_fontWeight = i2325[43]
  i2324.m_enableAutoSizing = !!i2325[44]
  i2324.m_fontSizeMin = i2325[45]
  i2324.m_fontSizeMax = i2325[46]
  i2324.m_fontStyle = i2325[47]
  i2324.m_HorizontalAlignment = i2325[48]
  i2324.m_VerticalAlignment = i2325[49]
  i2324.m_textAlignment = i2325[50]
  i2324.m_characterSpacing = i2325[51]
  i2324.m_wordSpacing = i2325[52]
  i2324.m_lineSpacing = i2325[53]
  i2324.m_lineSpacingMax = i2325[54]
  i2324.m_paragraphSpacing = i2325[55]
  i2324.m_charWidthMaxAdj = i2325[56]
  i2324.m_TextWrappingMode = i2325[57]
  i2324.m_wordWrappingRatios = i2325[58]
  i2324.m_overflowMode = i2325[59]
  request.r(i2325[60], i2325[61], 0, i2324, 'm_linkedTextComponent')
  request.r(i2325[62], i2325[63], 0, i2324, 'parentLinkedComponent')
  i2324.m_enableKerning = !!i2325[64]
  var i2331 = i2325[65]
  var i2330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.add(i2331[i + 0]);
  }
  i2324.m_ActiveFontFeatures = i2330
  i2324.m_enableExtraPadding = !!i2325[66]
  i2324.checkPaddingRequired = !!i2325[67]
  i2324.m_isRichText = !!i2325[68]
  i2324.m_parseCtrlCharacters = !!i2325[69]
  i2324.m_isOrthographic = !!i2325[70]
  i2324.m_isCullingEnabled = !!i2325[71]
  i2324.m_horizontalMapping = i2325[72]
  i2324.m_verticalMapping = i2325[73]
  i2324.m_uvLineOffset = i2325[74]
  i2324.m_geometrySortingOrder = i2325[75]
  i2324.m_IsTextObjectScaleStatic = !!i2325[76]
  i2324.m_VertexBufferAutoSizeReduction = !!i2325[77]
  i2324.m_useMaxVisibleDescender = !!i2325[78]
  i2324.m_pageToDisplay = i2325[79]
  i2324.m_margin = new pc.Vec4( i2325[80], i2325[81], i2325[82], i2325[83] )
  i2324.m_isUsingLegacyAnimationComponent = !!i2325[84]
  i2324.m_isVolumetricText = !!i2325[85]
  request.r(i2325[86], i2325[87], 0, i2324, 'm_Material')
  i2324.m_EmojiFallbackSupport = !!i2325[88]
  i2324.m_Maskable = !!i2325[89]
  i2324.m_Color = new pc.Color(i2325[90], i2325[91], i2325[92], i2325[93])
  i2324.m_RaycastTarget = !!i2325[94]
  i2324.m_RaycastPadding = new pc.Vec4( i2325[95], i2325[96], i2325[97], i2325[98] )
  return i2324
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2332 = root || request.c( 'TMPro.VertexGradient' )
  var i2333 = data
  i2332.topLeft = new pc.Color(i2333[0], i2333[1], i2333[2], i2333[3])
  i2332.topRight = new pc.Color(i2333[4], i2333[5], i2333[6], i2333[7])
  i2332.bottomLeft = new pc.Color(i2333[8], i2333[9], i2333[10], i2333[11])
  i2332.bottomRight = new pc.Color(i2333[12], i2333[13], i2333[14], i2333[15])
  return i2332
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2336 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'm_FillRect')
  request.r(i2337[2], i2337[3], 0, i2336, 'm_HandleRect')
  i2336.m_Direction = i2337[4]
  i2336.m_MinValue = i2337[5]
  i2336.m_MaxValue = i2337[6]
  i2336.m_WholeNumbers = !!i2337[7]
  i2336.m_Value = i2337[8]
  i2336.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2337[9], i2336.m_OnValueChanged)
  i2336.m_Navigation = request.d('UnityEngine.UI.Navigation', i2337[10], i2336.m_Navigation)
  i2336.m_Transition = i2337[11]
  i2336.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2337[12], i2336.m_Colors)
  i2336.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2337[13], i2336.m_SpriteState)
  i2336.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2337[14], i2336.m_AnimationTriggers)
  i2336.m_Interactable = !!i2337[15]
  request.r(i2337[16], i2337[17], 0, i2336, 'm_TargetGraphic')
  return i2336
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2339 = data
  i2338.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2339[0], i2338.m_PersistentCalls)
  return i2338
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2340 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2341 = data
  var i2343 = i2341[0]
  var i2342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.add(request.d('UnityEngine.Events.PersistentCall', i2343[i + 0]));
  }
  i2340.m_Calls = i2342
  return i2340
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'm_Target')
  i2346.m_TargetAssemblyTypeName = i2347[2]
  i2346.m_MethodName = i2347[3]
  i2346.m_Mode = i2347[4]
  i2346.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2347[5], i2346.m_Arguments)
  i2346.m_CallState = i2347[6]
  return i2346
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2349 = data
  i2348.m_Mode = i2349[0]
  i2348.m_WrapAround = !!i2349[1]
  request.r(i2349[2], i2349[3], 0, i2348, 'm_SelectOnUp')
  request.r(i2349[4], i2349[5], 0, i2348, 'm_SelectOnDown')
  request.r(i2349[6], i2349[7], 0, i2348, 'm_SelectOnLeft')
  request.r(i2349[8], i2349[9], 0, i2348, 'm_SelectOnRight')
  return i2348
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2351 = data
  i2350.m_NormalColor = new pc.Color(i2351[0], i2351[1], i2351[2], i2351[3])
  i2350.m_HighlightedColor = new pc.Color(i2351[4], i2351[5], i2351[6], i2351[7])
  i2350.m_PressedColor = new pc.Color(i2351[8], i2351[9], i2351[10], i2351[11])
  i2350.m_SelectedColor = new pc.Color(i2351[12], i2351[13], i2351[14], i2351[15])
  i2350.m_DisabledColor = new pc.Color(i2351[16], i2351[17], i2351[18], i2351[19])
  i2350.m_ColorMultiplier = i2351[20]
  i2350.m_FadeDuration = i2351[21]
  return i2350
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2352 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'm_HighlightedSprite')
  request.r(i2353[2], i2353[3], 0, i2352, 'm_PressedSprite')
  request.r(i2353[4], i2353[5], 0, i2352, 'm_SelectedSprite')
  request.r(i2353[6], i2353[7], 0, i2352, 'm_DisabledSprite')
  return i2352
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2354 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2355 = data
  i2354.m_NormalTrigger = i2355[0]
  i2354.m_HighlightedTrigger = i2355[1]
  i2354.m_PressedTrigger = i2355[2]
  i2354.m_SelectedTrigger = i2355[3]
  i2354.m_DisabledTrigger = i2355[4]
  return i2354
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.UI.Image' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'm_Sprite')
  i2356.m_Type = i2357[2]
  i2356.m_PreserveAspect = !!i2357[3]
  i2356.m_FillCenter = !!i2357[4]
  i2356.m_FillMethod = i2357[5]
  i2356.m_FillAmount = i2357[6]
  i2356.m_FillClockwise = !!i2357[7]
  i2356.m_FillOrigin = i2357[8]
  i2356.m_UseSpriteMesh = !!i2357[9]
  i2356.m_PixelsPerUnitMultiplier = i2357[10]
  request.r(i2357[11], i2357[12], 0, i2356, 'm_Material')
  i2356.m_Maskable = !!i2357[13]
  i2356.m_Color = new pc.Color(i2357[14], i2357[15], i2357[16], i2357[17])
  i2356.m_RaycastTarget = !!i2357[18]
  i2356.m_RaycastPadding = new pc.Vec4( i2357[19], i2357[20], i2357[21], i2357[22] )
  return i2356
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.Button' )
  var i2359 = data
  i2358.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2359[0], i2358.m_OnClick)
  i2358.m_Navigation = request.d('UnityEngine.UI.Navigation', i2359[1], i2358.m_Navigation)
  i2358.m_Transition = i2359[2]
  i2358.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2359[3], i2358.m_Colors)
  i2358.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2359[4], i2358.m_SpriteState)
  i2358.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2359[5], i2358.m_AnimationTriggers)
  i2358.m_Interactable = !!i2359[6]
  request.r(i2359[7], i2359[8], 0, i2358, 'm_TargetGraphic')
  return i2358
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2361 = data
  i2360.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2361[0], i2360.m_PersistentCalls)
  return i2360
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'm_ObjectArgument')
  i2362.m_ObjectArgumentAssemblyTypeName = i2363[2]
  i2362.m_IntArgument = i2363[3]
  i2362.m_FloatArgument = i2363[4]
  i2362.m_StringArgument = i2363[5]
  i2362.m_BoolArgument = !!i2363[6]
  return i2362
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2364 = root || request.c( 'Ply_Pool' )
  var i2365 = data
  var i2367 = i2365[0]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Ply_Pool+PoolAmount', i2367[i + 0]) );
  }
  i2364.poolAmounts = i2366
  request.r(i2365[1], i2365[2], 0, i2364, 'poolHolder')
  return i2364
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2370 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2371 = data
  i2370.type = i2371[0]
  i2370.amount = i2371[1]
  request.r(i2371[2], i2371[3], 0, i2370, 'gameUnit')
  return i2370
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2372 = root || request.c( 'Ply_SoundManager' )
  var i2373 = data
  var i2375 = i2373[0]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2372.audioClips = i2374
  request.r(i2373[1], i2373[2], 0, i2372, 'sound')
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'clip')
  request.r(i2379[2], i2379[3], 0, i2378, 'outputAudioMixerGroup')
  i2378.playOnAwake = !!i2379[4]
  i2378.loop = !!i2379[5]
  i2378.time = i2379[6]
  i2378.volume = i2379[7]
  i2378.pitch = i2379[8]
  i2378.enabled = !!i2379[9]
  return i2378
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2380 = root || request.c( 'GameManager' )
  var i2381 = data
  i2380.isPlaying = !!i2381[0]
  i2380.isTutorial = !!i2381[1]
  i2380.isGotoStore = !!i2381[2]
  i2380.countMove = i2381[3]
  i2380.maxMove = i2381[4]
  i2380.startLayer = i2381[5]
  i2380.currentLayer = i2381[6]
  request.r(i2381[7], i2381[8], 0, i2380, 'mainBox')
  request.r(i2381[9], i2381[10], 0, i2380, 'handTutorial')
  i2380.tutorialDelay = i2381[11]
  return i2380
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2382 = root || request.c( 'UIManager' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'winUI')
  request.r(i2383[2], i2383[3], 0, i2382, 'loseUI')
  request.r(i2383[4], i2383[5], 0, i2382, 'tutorial')
  request.r(i2383[6], i2383[7], 0, i2382, 'verticalUI')
  request.r(i2383[8], i2383[9], 0, i2382, 'horizontalUI')
  request.r(i2383[10], i2383[11], 0, i2382, 'downloadBtnVertical')
  request.r(i2383[12], i2383[13], 0, i2382, 'dowloadBtnHorizontal')
  request.r(i2383[14], i2383[15], 0, i2382, 'progressSlider')
  request.r(i2383[16], i2383[17], 0, i2382, 'progressText')
  i2382.maxProgressItems = i2383[18]
  i2382.startProgressItems = i2383[19]
  i2382.screenWidth = i2383[20]
  i2382.screenHeight = i2383[21]
  i2382.scaleHeightOnWidth = i2383[22]
  i2382.isVertical = !!i2383[23]
  request.r(i2383[24], i2383[25], 0, i2382, 'cam')
  i2382.introZoomOutMultiplier = i2383[26]
  i2382.cameraZoomDuration = i2383[27]
  i2382.useContinuousScaling = !!i2383[28]
  i2382.baseOrthographicSize = i2383[29]
  i2382.baseAspect = i2383[30]
  i2382.landscapeSize = i2383[31]
  i2382.defaultPortraitSize = i2383[32]
  var i2385 = i2383[33]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.add(request.d('ScreenScaleStep', i2385[i + 0]));
  }
  i2382.discreteScaleSteps = i2384
  i2382.usePerspectiveCamera = !!i2383[34]
  request.r(i2383[35], i2383[36], 0, i2382, 'perspectiveFocus')
  i2382.perspectiveFocusDistance = i2383[37]
  i2382.perspectivePadding = i2383[38]
  i2382.fitRendererBounds = !!i2383[39]
  request.r(i2383[40], i2383[41], 0, i2382, 'boundsRoot')
  var i2387 = i2383[42]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2382.boundsRenderers = i2386
  return i2382
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2390 = root || request.c( 'ScreenScaleStep' )
  var i2391 = data
  i2390.heightOnWidthRatio = i2391[0]
  i2390.orthographicSize = i2391[1]
  return i2390
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2394 = root || request.c( 'InputManager' )
  var i2395 = data
  i2394.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2395[0] )
  i2394.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i2395[1] )
  i2394.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2395[2] )
  i2394.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i2395[3] )
  i2394.isDragging = !!i2395[4]
  request.r(i2395[5], i2395[6], 0, i2394, 'mainCamera')
  return i2394
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i2396 = root || request.c( 'ItemSetupTool' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'spritesParent')
  request.r(i2397[2], i2397[3], 0, i2396, 'holdersParent')
  i2396.shadowSuffix = i2397[4]
  i2396.holderPrefix = i2397[5]
  i2396.holdersParentName = i2397[6]
  i2396.colliderDepth = i2397[7]
  i2396.colliderSizeMultiplier = i2397[8]
  i2396.generatedShadowColor = new pc.Color(i2397[9], i2397[10], i2397[11], i2397[12])
  i2396.fadedBlackShadowColor = new pc.Color(i2397[13], i2397[14], i2397[15], i2397[16])
  i2396.generatedShadowLocalOffset = new pc.Vec3( i2397[17], i2397[18], i2397[19] )
  i2396.itemLayerName = i2397[20]
  i2396.holderLayerName = i2397[21]
  return i2396
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2398 = root || request.c( 'CameraController' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'targetCamera')
  i2398.enableZoom = !!i2399[2]
  i2398.minZoomRatio = i2399[3]
  i2398.maxZoomRatio = i2399[4]
  i2398.mouseWheelZoomSpeed = i2399[5]
  i2398.pinchZoomSpeed = i2399[6]
  i2398.enableDrag = !!i2399[7]
  i2398.horizontalOnly = !!i2399[8]
  i2398.dragSensitivity = i2399[9]
  i2398.maxHorizontalOffset = i2399[10]
  i2398.maxVerticalOffset = i2399[11]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2401 = data
  i2400.aspect = i2401[0]
  i2400.orthographic = !!i2401[1]
  i2400.orthographicSize = i2401[2]
  i2400.backgroundColor = new pc.Color(i2401[3], i2401[4], i2401[5], i2401[6])
  i2400.nearClipPlane = i2401[7]
  i2400.farClipPlane = i2401[8]
  i2400.fieldOfView = i2401[9]
  i2400.depth = i2401[10]
  i2400.clearFlags = i2401[11]
  i2400.cullingMask = i2401[12]
  i2400.rect = i2401[13]
  request.r(i2401[14], i2401[15], 0, i2400, 'targetTexture')
  i2400.usePhysicalProperties = !!i2401[16]
  i2400.focalLength = i2401[17]
  i2400.sensorSize = new pc.Vec2( i2401[18], i2401[19] )
  i2400.lensShift = new pc.Vec2( i2401[20], i2401[21] )
  i2400.gateFit = i2401[22]
  i2400.commandBufferCount = i2401[23]
  i2400.cameraType = i2401[24]
  i2400.enabled = !!i2401[25]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2403 = data
  i2402.type = i2403[0]
  i2402.color = new pc.Color(i2403[1], i2403[2], i2403[3], i2403[4])
  i2402.cullingMask = i2403[5]
  i2402.intensity = i2403[6]
  i2402.range = i2403[7]
  i2402.spotAngle = i2403[8]
  i2402.shadows = i2403[9]
  i2402.shadowNormalBias = i2403[10]
  i2402.shadowBias = i2403[11]
  i2402.shadowStrength = i2403[12]
  i2402.shadowResolution = i2403[13]
  i2402.lightmapBakeType = i2403[14]
  i2402.renderMode = i2403[15]
  request.r(i2403[16], i2403[17], 0, i2402, 'cookie')
  i2402.cookieSize = i2403[18]
  i2402.shadowNearPlane = i2403[19]
  i2402.occlusionMaskChannel = i2403[20]
  i2402.enabled = !!i2403[21]
  return i2402
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'm_FirstSelected')
  i2404.m_sendNavigationEvents = !!i2405[2]
  i2404.m_DragThreshold = i2405[3]
  return i2404
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2407 = data
  i2406.m_HorizontalAxis = i2407[0]
  i2406.m_VerticalAxis = i2407[1]
  i2406.m_SubmitButton = i2407[2]
  i2406.m_CancelButton = i2407[3]
  i2406.m_InputActionsPerSecond = i2407[4]
  i2406.m_RepeatDelay = i2407[5]
  i2406.m_ForceModuleActive = !!i2407[6]
  i2406.m_SendPointerHoverToParent = !!i2407[7]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2409 = data
  i2408.color = new pc.Color(i2409[0], i2409[1], i2409[2], i2409[3])
  request.r(i2409[4], i2409[5], 0, i2408, 'sprite')
  i2408.flipX = !!i2409[6]
  i2408.flipY = !!i2409[7]
  i2408.drawMode = i2409[8]
  i2408.size = new pc.Vec2( i2409[9], i2409[10] )
  i2408.tileMode = i2409[11]
  i2408.adaptiveModeThreshold = i2409[12]
  i2408.maskInteraction = i2409[13]
  i2408.spriteSortPoint = i2409[14]
  i2408.enabled = !!i2409[15]
  request.r(i2409[16], i2409[17], 0, i2408, 'sharedMaterial')
  var i2411 = i2409[18]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2408.sharedMaterials = i2410
  i2408.receiveShadows = !!i2409[19]
  i2408.shadowCastingMode = i2409[20]
  i2408.sortingLayerID = i2409[21]
  i2408.sortingOrder = i2409[22]
  i2408.lightmapIndex = i2409[23]
  i2408.lightmapSceneIndex = i2409[24]
  i2408.lightmapScaleOffset = new pc.Vec4( i2409[25], i2409[26], i2409[27], i2409[28] )
  i2408.lightProbeUsage = i2409[29]
  i2408.reflectionProbeUsage = i2409[30]
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2413 = data
  i2412.center = new pc.Vec3( i2413[0], i2413[1], i2413[2] )
  i2412.radius = i2413[3]
  i2412.enabled = !!i2413[4]
  i2412.isTrigger = !!i2413[5]
  request.r(i2413[6], i2413[7], 0, i2412, 'material')
  return i2412
}

Deserializers["Box"] = function (request, data, root) {
  var i2414 = root || request.c( 'Box' )
  var i2415 = data
  i2414.useBox = !!i2415[0]
  i2414.spawnMode = i2415[1]
  var i2417 = i2415[2]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 1, i2416, '')
  }
  i2414.dynamicItems = i2416
  var i2419 = i2415[3]
  var i2418 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2419.length; i += 2) {
  request.r(i2419[i + 0], i2419[i + 1], 1, i2418, '')
  }
  i2414.spawnTargets = i2418
  i2414.initialSpawnCount = i2415[4]
  i2414.revealDuration = i2415[5]
  i2414.showInitialBatchShadowsOnSpawn = !!i2415[6]
  request.r(i2415[7], i2415[8], 0, i2414, 'graphicController')
  return i2414
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i2424 = root || request.c( 'BoxGraphicController' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'skeletonAnimation')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'sharedMesh')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'additionalVertexStreams')
  i2428.enabled = !!i2429[2]
  request.r(i2429[3], i2429[4], 0, i2428, 'sharedMaterial')
  var i2431 = i2429[5]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 2, i2430, '')
  }
  i2428.sharedMaterials = i2430
  i2428.receiveShadows = !!i2429[6]
  i2428.shadowCastingMode = i2429[7]
  i2428.sortingLayerID = i2429[8]
  i2428.sortingOrder = i2429[9]
  i2428.lightmapIndex = i2429[10]
  i2428.lightmapSceneIndex = i2429[11]
  i2428.lightmapScaleOffset = new pc.Vec4( i2429[12], i2429[13], i2429[14], i2429[15] )
  i2428.lightProbeUsage = i2429[16]
  i2428.reflectionProbeUsage = i2429[17]
  return i2428
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2432 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2433 = data
  i2432.loop = !!i2433[0]
  i2432.timeScale = i2433[1]
  request.r(i2433[2], i2433[3], 0, i2432, 'skeletonDataAsset')
  i2432.initialSkinName = i2433[4]
  i2432.fixPrefabOverrideViaMeshFilter = i2433[5]
  i2432.initialFlipX = !!i2433[6]
  i2432.initialFlipY = !!i2433[7]
  i2432.updateWhenInvisible = i2433[8]
  i2432.zSpacing = i2433[9]
  i2432.useClipping = !!i2433[10]
  i2432.immutableTriangles = !!i2433[11]
  i2432.pmaVertexColors = !!i2433[12]
  i2432.clearStateOnDisable = !!i2433[13]
  i2432.tintBlack = !!i2433[14]
  i2432.singleSubmesh = !!i2433[15]
  i2432.fixDrawOrder = !!i2433[16]
  i2432.addNormals = !!i2433[17]
  i2432.calculateTangents = !!i2433[18]
  i2432.maskInteraction = i2433[19]
  i2432.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2433[20], i2432.maskMaterials)
  i2432.disableRenderingOnOverride = !!i2433[21]
  i2432._animationName = i2433[22]
  var i2435 = i2433[23]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( i2435[i + 0] );
  }
  i2432.separatorSlotNames = i2434
  return i2432
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2436 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2436.materialsMaskDisabled = i2438
  var i2441 = i2437[1]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2436.materialsInsideMask = i2440
  var i2443 = i2437[2]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2436.materialsOutsideMask = i2442
  return i2436
}

Deserializers["Item"] = function (request, data, root) {
  var i2446 = root || request.c( 'Item' )
  var i2447 = data
  i2446.placeSoundType = i2447[0]
  i2446.id = i2447[1]
  i2446.currentState = i2447[2]
  i2446.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i2447[3] )
  i2446.scaleOnSpawn = !!i2447[4]
  i2446.spawnScaleMultiplier = i2447[5]
  request.r(i2447[6], i2447[7], 0, i2446, 'correctHolderTransform')
  request.r(i2447[8], i2447[9], 0, i2446, 'shadowOnHolder')
  i2446.canShowShadowHint = !!i2447[10]
  i2446.waitingPosition = new pc.Vec3( i2447[11], i2447[12], i2447[13] )
  request.r(i2447[14], i2447[15], 0, i2446, 'spriteRenderer')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2449 = data
  i2448.center = new pc.Vec3( i2449[0], i2449[1], i2449[2] )
  i2448.size = new pc.Vec3( i2449[3], i2449[4], i2449[5] )
  i2448.enabled = !!i2449[6]
  i2448.isTrigger = !!i2449[7]
  request.r(i2449[8], i2449[9], 0, i2448, 'material')
  return i2448
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i2450 = root || request.c( 'PSD_Tool' )
  var i2451 = data
  var i2453 = i2451[0]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2453.length; i += 2) {
  request.r(i2453[i + 0], i2453[i + 1], 1, i2452, '')
  }
  i2450.sprites = i2452
  request.r(i2451[1], i2451[2], 0, i2450, 'holder')
  var i2455 = i2451[3]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 1, i2454, '')
  }
  i2450.childGameObjects = i2454
  return i2450
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i2460 = root || request.c( 'ItemHolder' )
  var i2461 = data
  i2460.id = i2461[0]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2463 = data
  i2462.ambientIntensity = i2463[0]
  i2462.reflectionIntensity = i2463[1]
  i2462.ambientMode = i2463[2]
  i2462.ambientLight = new pc.Color(i2463[3], i2463[4], i2463[5], i2463[6])
  i2462.ambientSkyColor = new pc.Color(i2463[7], i2463[8], i2463[9], i2463[10])
  i2462.ambientGroundColor = new pc.Color(i2463[11], i2463[12], i2463[13], i2463[14])
  i2462.ambientEquatorColor = new pc.Color(i2463[15], i2463[16], i2463[17], i2463[18])
  i2462.fogColor = new pc.Color(i2463[19], i2463[20], i2463[21], i2463[22])
  i2462.fogEndDistance = i2463[23]
  i2462.fogStartDistance = i2463[24]
  i2462.fogDensity = i2463[25]
  i2462.fog = !!i2463[26]
  request.r(i2463[27], i2463[28], 0, i2462, 'skybox')
  i2462.fogMode = i2463[29]
  var i2465 = i2463[30]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2465[i + 0]) );
  }
  i2462.lightmaps = i2464
  i2462.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2463[31], i2462.lightProbes)
  i2462.lightmapsMode = i2463[32]
  i2462.mixedBakeMode = i2463[33]
  i2462.environmentLightingMode = i2463[34]
  i2462.ambientProbe = new pc.SphericalHarmonicsL2(i2463[35])
  i2462.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2463[36])
  i2462.useReferenceAmbientProbe = !!i2463[37]
  request.r(i2463[38], i2463[39], 0, i2462, 'customReflection')
  request.r(i2463[40], i2463[41], 0, i2462, 'defaultReflection')
  i2462.defaultReflectionMode = i2463[42]
  i2462.defaultReflectionResolution = i2463[43]
  i2462.sunLightObjectId = i2463[44]
  i2462.pixelLightCount = i2463[45]
  i2462.defaultReflectionHDR = !!i2463[46]
  i2462.hasLightDataAsset = !!i2463[47]
  i2462.hasManualGenerate = !!i2463[48]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'lightmapColor')
  request.r(i2469[2], i2469[3], 0, i2468, 'lightmapDirection')
  request.r(i2469[4], i2469[5], 0, i2468, 'shadowMask')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2470 = root || new UnityEngine.LightProbes()
  var i2471 = data
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2481[i + 0]));
  }
  i2478.ShaderCompilationErrors = i2480
  i2478.name = i2479[1]
  i2478.guid = i2479[2]
  var i2483 = i2479[3]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2478.shaderDefinedKeywords = i2482
  var i2485 = i2479[4]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2485[i + 0]) );
  }
  i2478.passes = i2484
  var i2487 = i2479[5]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2487[i + 0]) );
  }
  i2478.usePasses = i2486
  var i2489 = i2479[6]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2489[i + 0]) );
  }
  i2478.defaultParameterValues = i2488
  request.r(i2479[7], i2479[8], 0, i2478, 'unityFallbackShader')
  i2478.readDepth = !!i2479[9]
  i2478.hasDepthOnlyPass = !!i2479[10]
  i2478.isCreatedByShaderGraph = !!i2479[11]
  i2478.disableBatching = !!i2479[12]
  i2478.compiled = !!i2479[13]
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2493 = data
  i2492.shaderName = i2493[0]
  i2492.errorMessage = i2493[1]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2496 = root || new pc.UnityShaderPass()
  var i2497 = data
  i2496.id = i2497[0]
  i2496.subShaderIndex = i2497[1]
  i2496.name = i2497[2]
  i2496.passType = i2497[3]
  i2496.grabPassTextureName = i2497[4]
  i2496.usePass = !!i2497[5]
  i2496.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[6], i2496.zTest)
  i2496.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[7], i2496.zWrite)
  i2496.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[8], i2496.culling)
  i2496.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2497[9], i2496.blending)
  i2496.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2497[10], i2496.alphaBlending)
  i2496.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[11], i2496.colorWriteMask)
  i2496.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[12], i2496.offsetUnits)
  i2496.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[13], i2496.offsetFactor)
  i2496.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[14], i2496.stencilRef)
  i2496.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[15], i2496.stencilReadMask)
  i2496.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2497[16], i2496.stencilWriteMask)
  i2496.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[17], i2496.stencilOp)
  i2496.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[18], i2496.stencilOpFront)
  i2496.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2497[19], i2496.stencilOpBack)
  var i2499 = i2497[20]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2499[i + 0]) );
  }
  i2496.tags = i2498
  var i2501 = i2497[21]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( i2501[i + 0] );
  }
  i2496.passDefinedKeywords = i2500
  var i2503 = i2497[22]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2503[i + 0]) );
  }
  i2496.passDefinedKeywordGroups = i2502
  var i2505 = i2497[23]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2505[i + 0]) );
  }
  i2496.variants = i2504
  var i2507 = i2497[24]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2507[i + 0]) );
  }
  i2496.excludedVariants = i2506
  i2496.hasDepthReader = !!i2497[25]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2509 = data
  i2508.val = i2509[0]
  i2508.name = i2509[1]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2511 = data
  i2510.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[0], i2510.src)
  i2510.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[1], i2510.dst)
  i2510.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[2], i2510.op)
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2513 = data
  i2512.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[0], i2512.pass)
  i2512.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[1], i2512.fail)
  i2512.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[2], i2512.zFail)
  i2512.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2513[3], i2512.comp)
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2517 = data
  i2516.name = i2517[0]
  i2516.value = i2517[1]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2520.keywords = i2522
  i2520.hasDiscard = !!i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2527 = data
  i2526.passId = i2527[0]
  i2526.subShaderIndex = i2527[1]
  var i2529 = i2527[2]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2526.keywords = i2528
  i2526.vertexProgram = i2527[3]
  i2526.fragmentProgram = i2527[4]
  i2526.exportedForWebGl2 = !!i2527[5]
  i2526.readDepth = !!i2527[6]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'shader')
  i2532.pass = i2533[2]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2537 = data
  i2536.name = i2537[0]
  i2536.type = i2537[1]
  i2536.value = new pc.Vec4( i2537[2], i2537[3], i2537[4], i2537[5] )
  i2536.textureValue = i2537[6]
  i2536.shaderPropertyFlag = i2537[7]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2539 = data
  i2538.name = i2539[0]
  request.r(i2539[1], i2539[2], 0, i2538, 'texture')
  i2538.aabb = i2539[3]
  i2538.vertices = i2539[4]
  i2538.triangles = i2539[5]
  i2538.textureRect = UnityEngine.Rect.MinMaxRect(i2539[6], i2539[7], i2539[8], i2539[9])
  i2538.packedRect = UnityEngine.Rect.MinMaxRect(i2539[10], i2539[11], i2539[12], i2539[13])
  i2538.border = new pc.Vec4( i2539[14], i2539[15], i2539[16], i2539[17] )
  i2538.transparency = i2539[18]
  i2538.bounds = i2539[19]
  i2538.pixelsPerUnit = i2539[20]
  i2538.textureWidth = i2539[21]
  i2538.textureHeight = i2539[22]
  i2538.nativeSize = new pc.Vec2( i2539[23], i2539[24] )
  i2538.pivot = new pc.Vec2( i2539[25], i2539[26] )
  i2538.textureRectOffset = new pc.Vec2( i2539[27], i2539[28] )
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2541 = data
  i2540.name = i2541[0]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.wrapMode = i2543[1]
  i2542.isLooping = !!i2543[2]
  i2542.length = i2543[3]
  var i2545 = i2543[4]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2545[i + 0]) );
  }
  i2542.curves = i2544
  var i2547 = i2543[5]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2547[i + 0]) );
  }
  i2542.events = i2546
  i2542.halfPrecision = !!i2543[6]
  i2542._frameRate = i2543[7]
  i2542.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2543[8], i2542.localBounds)
  i2542.hasMuscleCurves = !!i2543[9]
  var i2549 = i2543[10]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( i2549[i + 0] );
  }
  i2542.clipMuscleConstant = i2548
  i2542.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2543[11], i2542.clipBindingConstant)
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2553 = data
  i2552.path = i2553[0]
  i2552.hash = i2553[1]
  i2552.componentType = i2553[2]
  i2552.property = i2553[3]
  i2552.keys = i2553[4]
  var i2555 = i2553[5]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2555[i + 0]) );
  }
  i2552.objectReferenceKeys = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2559 = data
  i2558.time = i2559[0]
  request.r(i2559[1], i2559[2], 0, i2558, 'value')
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2563 = data
  i2562.functionName = i2563[0]
  i2562.floatParameter = i2563[1]
  i2562.intParameter = i2563[2]
  i2562.stringParameter = i2563[3]
  request.r(i2563[4], i2563[5], 0, i2562, 'objectReferenceParameter')
  i2562.time = i2563[6]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2565 = data
  i2564.center = new pc.Vec3( i2565[0], i2565[1], i2565[2] )
  i2564.extends = new pc.Vec3( i2565[3], i2565[4], i2565[5] )
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2569 = data
  var i2571 = i2569[0]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2568.genericBindings = i2570
  var i2573 = i2569[1]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2568.pptrCurveMapping = i2572
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2575 = data
  i2574.name = i2575[0]
  var i2577 = i2575[1]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2577[i + 0]) );
  }
  i2574.layers = i2576
  var i2579 = i2575[2]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2579[i + 0]) );
  }
  i2574.parameters = i2578
  i2574.animationClips = i2575[3]
  i2574.avatarUnsupported = i2575[4]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2583 = data
  i2582.name = i2583[0]
  i2582.defaultWeight = i2583[1]
  i2582.blendingMode = i2583[2]
  i2582.avatarMask = i2583[3]
  i2582.syncedLayerIndex = i2583[4]
  i2582.syncedLayerAffectsTiming = !!i2583[5]
  i2582.syncedLayers = i2583[6]
  i2582.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2583[7], i2582.stateMachine)
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2585 = data
  i2584.id = i2585[0]
  i2584.name = i2585[1]
  i2584.path = i2585[2]
  var i2587 = i2585[3]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2587[i + 0]) );
  }
  i2584.states = i2586
  var i2589 = i2585[4]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2589[i + 0]) );
  }
  i2584.machines = i2588
  var i2591 = i2585[5]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2591[i + 0]) );
  }
  i2584.entryStateTransitions = i2590
  var i2593 = i2585[6]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2593[i + 0]) );
  }
  i2584.exitStateTransitions = i2592
  var i2595 = i2585[7]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2595[i + 0]) );
  }
  i2584.anyStateTransitions = i2594
  i2584.defaultStateId = i2585[8]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2599 = data
  i2598.id = i2599[0]
  i2598.name = i2599[1]
  i2598.cycleOffset = i2599[2]
  i2598.cycleOffsetParameter = i2599[3]
  i2598.cycleOffsetParameterActive = !!i2599[4]
  i2598.mirror = !!i2599[5]
  i2598.mirrorParameter = i2599[6]
  i2598.mirrorParameterActive = !!i2599[7]
  i2598.motionId = i2599[8]
  i2598.nameHash = i2599[9]
  i2598.fullPathHash = i2599[10]
  i2598.speed = i2599[11]
  i2598.speedParameter = i2599[12]
  i2598.speedParameterActive = !!i2599[13]
  i2598.tag = i2599[14]
  i2598.tagHash = i2599[15]
  i2598.writeDefaultValues = !!i2599[16]
  var i2601 = i2599[17]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 2) {
  request.r(i2601[i + 0], i2601[i + 1], 2, i2600, '')
  }
  i2598.behaviours = i2600
  var i2603 = i2599[18]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2603[i + 0]) );
  }
  i2598.transitions = i2602
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2609 = data
  i2608.fullPath = i2609[0]
  i2608.canTransitionToSelf = !!i2609[1]
  i2608.duration = i2609[2]
  i2608.exitTime = i2609[3]
  i2608.hasExitTime = !!i2609[4]
  i2608.hasFixedDuration = !!i2609[5]
  i2608.interruptionSource = i2609[6]
  i2608.offset = i2609[7]
  i2608.orderedInterruption = !!i2609[8]
  i2608.destinationStateId = i2609[9]
  i2608.isExit = !!i2609[10]
  i2608.mute = !!i2609[11]
  i2608.solo = !!i2609[12]
  var i2611 = i2609[13]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2611[i + 0]) );
  }
  i2608.conditions = i2610
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2617 = data
  i2616.destinationStateId = i2617[0]
  i2616.isExit = !!i2617[1]
  i2616.mute = !!i2617[2]
  i2616.solo = !!i2617[3]
  var i2619 = i2617[4]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2619[i + 0]) );
  }
  i2616.conditions = i2618
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2623 = data
  i2622.defaultBool = !!i2623[0]
  i2622.defaultFloat = i2623[1]
  i2622.defaultInt = i2623[2]
  i2622.name = i2623[3]
  i2622.nameHash = i2623[4]
  i2622.type = i2623[5]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.bytes64 = i2625[1]
  i2624.data = i2625[2]
  return i2624
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2627 = data
  i2626.normalStyle = i2627[0]
  i2626.normalSpacingOffset = i2627[1]
  i2626.boldStyle = i2627[2]
  i2626.boldSpacing = i2627[3]
  i2626.italicStyle = i2627[4]
  i2626.tabSize = i2627[5]
  request.r(i2627[6], i2627[7], 0, i2626, 'atlas')
  i2626.m_SourceFontFileGUID = i2627[8]
  i2626.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2627[9], i2626.m_CreationSettings)
  request.r(i2627[10], i2627[11], 0, i2626, 'm_SourceFontFile')
  i2626.m_SourceFontFilePath = i2627[12]
  i2626.m_AtlasPopulationMode = i2627[13]
  i2626.InternalDynamicOS = !!i2627[14]
  var i2629 = i2627[15]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('UnityEngine.TextCore.Glyph', i2629[i + 0]));
  }
  i2626.m_GlyphTable = i2628
  var i2631 = i2627[16]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.add(request.d('TMPro.TMP_Character', i2631[i + 0]));
  }
  i2626.m_CharacterTable = i2630
  var i2633 = i2627[17]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 2) {
  request.r(i2633[i + 0], i2633[i + 1], 2, i2632, '')
  }
  i2626.m_AtlasTextures = i2632
  i2626.m_AtlasTextureIndex = i2627[18]
  i2626.m_IsMultiAtlasTexturesEnabled = !!i2627[19]
  i2626.m_GetFontFeatures = !!i2627[20]
  i2626.m_ClearDynamicDataOnBuild = !!i2627[21]
  i2626.m_AtlasWidth = i2627[22]
  i2626.m_AtlasHeight = i2627[23]
  i2626.m_AtlasPadding = i2627[24]
  i2626.m_AtlasRenderMode = i2627[25]
  var i2635 = i2627[26]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('UnityEngine.TextCore.GlyphRect', i2635[i + 0]));
  }
  i2626.m_UsedGlyphRects = i2634
  var i2637 = i2627[27]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('UnityEngine.TextCore.GlyphRect', i2637[i + 0]));
  }
  i2626.m_FreeGlyphRects = i2636
  i2626.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2627[28], i2626.m_FontFeatureTable)
  i2626.m_ShouldReimportFontFeatures = !!i2627[29]
  var i2639 = i2627[30]
  var i2638 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2639.length; i += 2) {
  request.r(i2639[i + 0], i2639[i + 1], 1, i2638, '')
  }
  i2626.m_FallbackFontAssetTable = i2638
  var i2641 = i2627[31]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('TMPro.TMP_FontWeightPair', i2641[i + 0]) );
  }
  i2626.m_FontWeightTable = i2640
  var i2643 = i2627[32]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('TMPro.TMP_FontWeightPair', i2643[i + 0]) );
  }
  i2626.fontWeights = i2642
  i2626.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2627[33], i2626.m_fontInfo)
  var i2645 = i2627[34]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.add(request.d('TMPro.TMP_Glyph', i2645[i + 0]));
  }
  i2626.m_glyphInfoList = i2644
  i2626.m_KerningTable = request.d('TMPro.KerningTable', i2627[35], i2626.m_KerningTable)
  var i2647 = i2627[36]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2647.length; i += 2) {
  request.r(i2647[i + 0], i2647[i + 1], 1, i2646, '')
  }
  i2626.fallbackFontAssets = i2646
  i2626.m_Version = i2627[37]
  i2626.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2627[38], i2626.m_FaceInfo)
  request.r(i2627[39], i2627[40], 0, i2626, 'm_Material')
  return i2626
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2648 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2649 = data
  i2648.sourceFontFileName = i2649[0]
  i2648.sourceFontFileGUID = i2649[1]
  i2648.faceIndex = i2649[2]
  i2648.pointSizeSamplingMode = i2649[3]
  i2648.pointSize = i2649[4]
  i2648.padding = i2649[5]
  i2648.paddingMode = i2649[6]
  i2648.packingMode = i2649[7]
  i2648.atlasWidth = i2649[8]
  i2648.atlasHeight = i2649[9]
  i2648.characterSetSelectionMode = i2649[10]
  i2648.characterSequence = i2649[11]
  i2648.referencedFontAssetGUID = i2649[12]
  i2648.referencedTextAssetGUID = i2649[13]
  i2648.fontStyle = i2649[14]
  i2648.fontStyleModifier = i2649[15]
  i2648.renderMode = i2649[16]
  i2648.includeFontFeatures = !!i2649[17]
  return i2648
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2653 = data
  i2652.m_Index = i2653[0]
  i2652.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2653[1], i2652.m_Metrics)
  i2652.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2653[2], i2652.m_GlyphRect)
  i2652.m_Scale = i2653[3]
  i2652.m_AtlasIndex = i2653[4]
  i2652.m_ClassDefinitionType = i2653[5]
  return i2652
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2655 = data
  i2654.m_Width = i2655[0]
  i2654.m_Height = i2655[1]
  i2654.m_HorizontalBearingX = i2655[2]
  i2654.m_HorizontalBearingY = i2655[3]
  i2654.m_HorizontalAdvance = i2655[4]
  return i2654
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2657 = data
  i2656.m_X = i2657[0]
  i2656.m_Y = i2657[1]
  i2656.m_Width = i2657[2]
  i2656.m_Height = i2657[3]
  return i2656
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2660 = root || request.c( 'TMPro.TMP_Character' )
  var i2661 = data
  i2660.m_ElementType = i2661[0]
  i2660.m_Unicode = i2661[1]
  i2660.m_GlyphIndex = i2661[2]
  i2660.m_Scale = i2661[3]
  return i2660
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2667 = data
  var i2669 = i2667[0]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.MultipleSubstitutionRecord', i2669[i + 0]));
  }
  i2666.m_MultipleSubstitutionRecords = i2668
  var i2671 = i2667[1]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('TMPro.LigatureSubstitutionRecord', i2671[i + 0]));
  }
  i2666.m_LigatureSubstitutionRecords = i2670
  var i2673 = i2667[2]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2673[i + 0]));
  }
  i2666.m_GlyphPairAdjustmentRecords = i2672
  var i2675 = i2667[3]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2675[i + 0]));
  }
  i2666.m_MarkToBaseAdjustmentRecords = i2674
  var i2677 = i2667[4]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2677[i + 0]));
  }
  i2666.m_MarkToMarkAdjustmentRecords = i2676
  return i2666
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2681 = data
  i2680.m_TargetGlyphID = i2681[0]
  i2680.m_SubstituteGlyphIDs = i2681[1]
  return i2680
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2685 = data
  i2684.m_ComponentGlyphIDs = i2685[0]
  i2684.m_LigatureGlyphID = i2685[1]
  return i2684
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2689 = data
  i2688.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2689[0], i2688.m_FirstAdjustmentRecord)
  i2688.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2689[1], i2688.m_SecondAdjustmentRecord)
  i2688.m_FeatureLookupFlags = i2689[2]
  return i2688
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2693 = data
  i2692.m_BaseGlyphID = i2693[0]
  i2692.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2693[1], i2692.m_BaseGlyphAnchorPoint)
  i2692.m_MarkGlyphID = i2693[2]
  i2692.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2693[3], i2692.m_MarkPositionAdjustment)
  return i2692
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2697 = data
  i2696.m_BaseMarkGlyphID = i2697[0]
  i2696.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2697[1], i2696.m_BaseMarkGlyphAnchorPoint)
  i2696.m_CombiningMarkGlyphID = i2697[2]
  i2696.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2697[3], i2696.m_CombiningMarkPositionAdjustment)
  return i2696
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'regularTypeface')
  request.r(i2703[2], i2703[3], 0, i2702, 'italicTypeface')
  return i2702
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2705 = data
  i2704.Name = i2705[0]
  i2704.PointSize = i2705[1]
  i2704.Scale = i2705[2]
  i2704.CharacterCount = i2705[3]
  i2704.LineHeight = i2705[4]
  i2704.Baseline = i2705[5]
  i2704.Ascender = i2705[6]
  i2704.CapHeight = i2705[7]
  i2704.Descender = i2705[8]
  i2704.CenterLine = i2705[9]
  i2704.SuperscriptOffset = i2705[10]
  i2704.SubscriptOffset = i2705[11]
  i2704.SubSize = i2705[12]
  i2704.Underline = i2705[13]
  i2704.UnderlineThickness = i2705[14]
  i2704.strikethrough = i2705[15]
  i2704.strikethroughThickness = i2705[16]
  i2704.TabWidth = i2705[17]
  i2704.Padding = i2705[18]
  i2704.AtlasWidth = i2705[19]
  i2704.AtlasHeight = i2705[20]
  return i2704
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2709 = data
  i2708.id = i2709[0]
  i2708.x = i2709[1]
  i2708.y = i2709[2]
  i2708.width = i2709[3]
  i2708.height = i2709[4]
  i2708.xOffset = i2709[5]
  i2708.yOffset = i2709[6]
  i2708.xAdvance = i2709[7]
  i2708.scale = i2709[8]
  return i2708
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.KerningTable' )
  var i2711 = data
  var i2713 = i2711[0]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('TMPro.KerningPair', i2713[i + 0]));
  }
  i2710.kerningPairs = i2712
  return i2710
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.KerningPair' )
  var i2717 = data
  i2716.xOffset = i2717[0]
  i2716.m_FirstGlyph = i2717[1]
  i2716.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2717[2], i2716.m_FirstGlyphAdjustments)
  i2716.m_SecondGlyph = i2717[3]
  i2716.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2717[4], i2716.m_SecondGlyphAdjustments)
  i2716.m_IgnoreSpacingAdjustments = !!i2717[5]
  return i2716
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2718 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2719 = data
  i2718.m_FaceIndex = i2719[0]
  i2718.m_FamilyName = i2719[1]
  i2718.m_StyleName = i2719[2]
  i2718.m_PointSize = i2719[3]
  i2718.m_Scale = i2719[4]
  i2718.m_UnitsPerEM = i2719[5]
  i2718.m_LineHeight = i2719[6]
  i2718.m_AscentLine = i2719[7]
  i2718.m_CapLine = i2719[8]
  i2718.m_MeanLine = i2719[9]
  i2718.m_Baseline = i2719[10]
  i2718.m_DescentLine = i2719[11]
  i2718.m_SuperscriptOffset = i2719[12]
  i2718.m_SuperscriptSize = i2719[13]
  i2718.m_SubscriptOffset = i2719[14]
  i2718.m_SubscriptSize = i2719[15]
  i2718.m_UnderlineOffset = i2719[16]
  i2718.m_UnderlineThickness = i2719[17]
  i2718.m_StrikethroughOffset = i2719[18]
  i2718.m_StrikethroughThickness = i2719[19]
  i2718.m_TabWidth = i2719[20]
  return i2718
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2720 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2721 = data
  var i2723 = i2721[0]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 2, i2722, '')
  }
  i2720.atlasAssets = i2722
  i2720.scale = i2721[1]
  request.r(i2721[2], i2721[3], 0, i2720, 'skeletonJSON')
  i2720.isUpgradingBlendModeMaterials = !!i2721[4]
  i2720.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2721[5], i2720.blendModeMaterials)
  var i2725 = i2721[6]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2725.length; i += 2) {
  request.r(i2725[i + 0], i2725[i + 1], 1, i2724, '')
  }
  i2720.skeletonDataModifiers = i2724
  var i2727 = i2721[7]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( i2727[i + 0] );
  }
  i2720.fromAnimation = i2726
  var i2729 = i2721[8]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( i2729[i + 0] );
  }
  i2720.toAnimation = i2728
  i2720.duration = i2721[9]
  i2720.defaultMix = i2721[10]
  request.r(i2721[11], i2721[12], 0, i2720, 'controller')
  return i2720
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2732 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2733 = data
  i2732.applyAdditiveMaterial = !!i2733[0]
  var i2735 = i2733[1]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2735[i + 0]));
  }
  i2732.additiveMaterials = i2734
  var i2737 = i2733[2]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2737[i + 0]));
  }
  i2732.multiplyMaterials = i2736
  var i2739 = i2733[3]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2739[i + 0]));
  }
  i2732.screenMaterials = i2738
  i2732.requiresBlendModeMaterials = !!i2733[4]
  return i2732
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2742 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2743 = data
  i2742.pageName = i2743[0]
  request.r(i2743[1], i2743[2], 0, i2742, 'material')
  return i2742
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2746 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2747 = data
  request.r(i2747[0], i2747[1], 0, i2746, 'atlasFile')
  var i2749 = i2747[2]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 2) {
  request.r(i2749[i + 0], i2749[i + 1], 2, i2748, '')
  }
  i2746.materials = i2748
  return i2746
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2750 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2751 = data
  i2750.useSafeMode = !!i2751[0]
  i2750.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2751[1], i2750.safeModeOptions)
  i2750.timeScale = i2751[2]
  i2750.unscaledTimeScale = i2751[3]
  i2750.useSmoothDeltaTime = !!i2751[4]
  i2750.maxSmoothUnscaledTime = i2751[5]
  i2750.rewindCallbackMode = i2751[6]
  i2750.showUnityEditorReport = !!i2751[7]
  i2750.logBehaviour = i2751[8]
  i2750.drawGizmos = !!i2751[9]
  i2750.defaultRecyclable = !!i2751[10]
  i2750.defaultAutoPlay = i2751[11]
  i2750.defaultUpdateType = i2751[12]
  i2750.defaultTimeScaleIndependent = !!i2751[13]
  i2750.defaultEaseType = i2751[14]
  i2750.defaultEaseOvershootOrAmplitude = i2751[15]
  i2750.defaultEasePeriod = i2751[16]
  i2750.defaultAutoKill = !!i2751[17]
  i2750.defaultLoopType = i2751[18]
  i2750.debugMode = !!i2751[19]
  i2750.debugStoreTargetId = !!i2751[20]
  i2750.showPreviewPanel = !!i2751[21]
  i2750.storeSettingsLocation = i2751[22]
  i2750.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2751[23], i2750.modules)
  i2750.createASMDEF = !!i2751[24]
  i2750.showPlayingTweens = !!i2751[25]
  i2750.showPausedTweens = !!i2751[26]
  return i2750
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2753 = data
  i2752.logBehaviour = i2753[0]
  i2752.nestedTweenFailureBehaviour = i2753[1]
  return i2752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2755 = data
  i2754.showPanel = !!i2755[0]
  i2754.audioEnabled = !!i2755[1]
  i2754.physicsEnabled = !!i2755[2]
  i2754.physics2DEnabled = !!i2755[3]
  i2754.spriteEnabled = !!i2755[4]
  i2754.uiEnabled = !!i2755[5]
  i2754.uiToolkitEnabled = !!i2755[6]
  i2754.textMeshProEnabled = !!i2755[7]
  i2754.tk2DEnabled = !!i2755[8]
  i2754.deAudioEnabled = !!i2755[9]
  i2754.deUnityExtendedEnabled = !!i2755[10]
  i2754.epoOutlineEnabled = !!i2755[11]
  return i2754
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Settings' )
  var i2757 = data
  i2756.assetVersion = i2757[0]
  i2756.m_TextWrappingMode = i2757[1]
  i2756.m_enableKerning = !!i2757[2]
  var i2759 = i2757[3]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(i2759[i + 0]);
  }
  i2756.m_ActiveFontFeatures = i2758
  i2756.m_enableExtraPadding = !!i2757[4]
  i2756.m_enableTintAllSprites = !!i2757[5]
  i2756.m_enableParseEscapeCharacters = !!i2757[6]
  i2756.m_EnableRaycastTarget = !!i2757[7]
  i2756.m_GetFontFeaturesAtRuntime = !!i2757[8]
  i2756.m_missingGlyphCharacter = i2757[9]
  i2756.m_ClearDynamicDataOnBuild = !!i2757[10]
  i2756.m_warningsDisabled = !!i2757[11]
  request.r(i2757[12], i2757[13], 0, i2756, 'm_defaultFontAsset')
  i2756.m_defaultFontAssetPath = i2757[14]
  i2756.m_defaultFontSize = i2757[15]
  i2756.m_defaultAutoSizeMinRatio = i2757[16]
  i2756.m_defaultAutoSizeMaxRatio = i2757[17]
  i2756.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2757[18], i2757[19] )
  i2756.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2757[20], i2757[21] )
  i2756.m_autoSizeTextContainer = !!i2757[22]
  i2756.m_IsTextObjectScaleStatic = !!i2757[23]
  var i2761 = i2757[24]
  var i2760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2761.length; i += 2) {
  request.r(i2761[i + 0], i2761[i + 1], 1, i2760, '')
  }
  i2756.m_fallbackFontAssets = i2760
  i2756.m_matchMaterialPreset = !!i2757[25]
  i2756.m_HideSubTextObjects = !!i2757[26]
  request.r(i2757[27], i2757[28], 0, i2756, 'm_defaultSpriteAsset')
  i2756.m_defaultSpriteAssetPath = i2757[29]
  i2756.m_enableEmojiSupport = !!i2757[30]
  i2756.m_MissingCharacterSpriteUnicode = i2757[31]
  var i2763 = i2757[32]
  var i2762 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 1, i2762, '')
  }
  i2756.m_EmojiFallbackTextAssets = i2762
  i2756.m_defaultColorGradientPresetsPath = i2757[33]
  request.r(i2757[34], i2757[35], 0, i2756, 'm_defaultStyleSheet')
  i2756.m_StyleSheetsResourcePath = i2757[36]
  request.r(i2757[37], i2757[38], 0, i2756, 'm_leadingCharacters')
  request.r(i2757[39], i2757[40], 0, i2756, 'm_followingCharacters')
  i2756.m_UseModernHangulLineBreakingRules = !!i2757[41]
  return i2756
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2767 = data
  request.r(i2767[0], i2767[1], 0, i2766, 'spriteSheet')
  var i2769 = i2767[2]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.TMP_Sprite', i2769[i + 0]));
  }
  i2766.spriteInfoList = i2768
  var i2771 = i2767[3]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2771.length; i += 2) {
  request.r(i2771[i + 0], i2771[i + 1], 1, i2770, '')
  }
  i2766.fallbackSpriteAssets = i2770
  var i2773 = i2767[4]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('TMPro.TMP_SpriteCharacter', i2773[i + 0]));
  }
  i2766.m_SpriteCharacterTable = i2772
  var i2775 = i2767[5]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('TMPro.TMP_SpriteGlyph', i2775[i + 0]));
  }
  i2766.m_GlyphTable = i2774
  i2766.m_Version = i2767[6]
  i2766.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2767[7], i2766.m_FaceInfo)
  request.r(i2767[8], i2767[9], 0, i2766, 'm_Material')
  return i2766
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2778 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.hashCode = i2779[1]
  i2778.unicode = i2779[2]
  i2778.pivot = new pc.Vec2( i2779[3], i2779[4] )
  request.r(i2779[5], i2779[6], 0, i2778, 'sprite')
  i2778.id = i2779[7]
  i2778.x = i2779[8]
  i2778.y = i2779[9]
  i2778.width = i2779[10]
  i2778.height = i2779[11]
  i2778.xOffset = i2779[12]
  i2778.yOffset = i2779[13]
  i2778.xAdvance = i2779[14]
  i2778.scale = i2779[15]
  return i2778
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2785 = data
  i2784.m_Name = i2785[0]
  i2784.m_ElementType = i2785[1]
  i2784.m_Unicode = i2785[2]
  i2784.m_GlyphIndex = i2785[3]
  i2784.m_Scale = i2785[4]
  return i2784
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2789 = data
  request.r(i2789[0], i2789[1], 0, i2788, 'sprite')
  i2788.m_Index = i2789[2]
  i2788.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2789[3], i2788.m_Metrics)
  i2788.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2789[4], i2788.m_GlyphRect)
  i2788.m_Scale = i2789[5]
  i2788.m_AtlasIndex = i2789[6]
  i2788.m_ClassDefinitionType = i2789[7]
  return i2788
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2791 = data
  var i2793 = i2791[0]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_Style', i2793[i + 0]));
  }
  i2790.m_StyleList = i2792
  return i2790
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_Style' )
  var i2797 = data
  i2796.m_Name = i2797[0]
  i2796.m_HashCode = i2797[1]
  i2796.m_OpeningDefinition = i2797[2]
  i2796.m_ClosingDefinition = i2797[3]
  i2796.m_OpeningTagArray = i2797[4]
  i2796.m_ClosingTagArray = i2797[5]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2801[i + 0]) );
  }
  i2798.files = i2800
  i2798.componentToPrefabIds = i2799[1]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2805 = data
  i2804.path = i2805[0]
  request.r(i2805[1], i2805[2], 0, i2804, 'unityObject')
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2809[i + 0]) );
  }
  i2806.scriptsExecutionOrder = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2811[i + 0]) );
  }
  i2806.sortingLayers = i2810
  var i2813 = i2807[2]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2813[i + 0]) );
  }
  i2806.cullingLayers = i2812
  i2806.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2807[3], i2806.timeSettings)
  i2806.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2807[4], i2806.physicsSettings)
  i2806.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2807[5], i2806.physics2DSettings)
  i2806.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2807[6], i2806.qualitySettings)
  i2806.enableRealtimeShadows = !!i2807[7]
  i2806.enableAutoInstancing = !!i2807[8]
  i2806.enableStaticBatching = !!i2807[9]
  i2806.enableDynamicBatching = !!i2807[10]
  i2806.lightmapEncodingQuality = i2807[11]
  i2806.desiredColorSpace = i2807[12]
  var i2815 = i2807[13]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( i2815[i + 0] );
  }
  i2806.allTags = i2814
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.value = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2823 = data
  i2822.id = i2823[0]
  i2822.name = i2823[1]
  i2822.value = i2823[2]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2827 = data
  i2826.id = i2827[0]
  i2826.name = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2829 = data
  i2828.fixedDeltaTime = i2829[0]
  i2828.maximumDeltaTime = i2829[1]
  i2828.timeScale = i2829[2]
  i2828.maximumParticleTimestep = i2829[3]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2831 = data
  i2830.gravity = new pc.Vec3( i2831[0], i2831[1], i2831[2] )
  i2830.defaultSolverIterations = i2831[3]
  i2830.bounceThreshold = i2831[4]
  i2830.autoSyncTransforms = !!i2831[5]
  i2830.autoSimulation = !!i2831[6]
  var i2833 = i2831[7]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2833[i + 0]) );
  }
  i2830.collisionMatrix = i2832
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2837 = data
  i2836.enabled = !!i2837[0]
  i2836.layerId = i2837[1]
  i2836.otherLayerId = i2837[2]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'material')
  i2838.gravity = new pc.Vec2( i2839[2], i2839[3] )
  i2838.positionIterations = i2839[4]
  i2838.velocityIterations = i2839[5]
  i2838.velocityThreshold = i2839[6]
  i2838.maxLinearCorrection = i2839[7]
  i2838.maxAngularCorrection = i2839[8]
  i2838.maxTranslationSpeed = i2839[9]
  i2838.maxRotationSpeed = i2839[10]
  i2838.baumgarteScale = i2839[11]
  i2838.baumgarteTOIScale = i2839[12]
  i2838.timeToSleep = i2839[13]
  i2838.linearSleepTolerance = i2839[14]
  i2838.angularSleepTolerance = i2839[15]
  i2838.defaultContactOffset = i2839[16]
  i2838.autoSimulation = !!i2839[17]
  i2838.queriesHitTriggers = !!i2839[18]
  i2838.queriesStartInColliders = !!i2839[19]
  i2838.callbacksOnDisable = !!i2839[20]
  i2838.reuseCollisionCallbacks = !!i2839[21]
  i2838.autoSyncTransforms = !!i2839[22]
  var i2841 = i2839[23]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2841[i + 0]) );
  }
  i2838.collisionMatrix = i2840
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.layerId = i2845[1]
  i2844.otherLayerId = i2845[2]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2849[i + 0]) );
  }
  i2846.qualityLevels = i2848
  var i2851 = i2847[1]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( i2851[i + 0] );
  }
  i2846.names = i2850
  i2846.shadows = i2847[2]
  i2846.anisotropicFiltering = i2847[3]
  i2846.antiAliasing = i2847[4]
  i2846.lodBias = i2847[5]
  i2846.shadowCascades = i2847[6]
  i2846.shadowDistance = i2847[7]
  i2846.shadowmaskMode = i2847[8]
  i2846.shadowProjection = i2847[9]
  i2846.shadowResolution = i2847[10]
  i2846.softParticles = !!i2847[11]
  i2846.softVegetation = !!i2847[12]
  i2846.activeColorSpace = i2847[13]
  i2846.desiredColorSpace = i2847[14]
  i2846.masterTextureLimit = i2847[15]
  i2846.maxQueuedFrames = i2847[16]
  i2846.particleRaycastBudget = i2847[17]
  i2846.pixelLightCount = i2847[18]
  i2846.realtimeReflectionProbes = !!i2847[19]
  i2846.shadowCascade2Split = i2847[20]
  i2846.shadowCascade4Split = new pc.Vec3( i2847[21], i2847[22], i2847[23] )
  i2846.streamingMipmapsActive = !!i2847[24]
  i2846.vSyncCount = i2847[25]
  i2846.asyncUploadBufferSize = i2847[26]
  i2846.asyncUploadTimeSlice = i2847[27]
  i2846.billboardsFaceCameraPosition = !!i2847[28]
  i2846.shadowNearPlaneOffset = i2847[29]
  i2846.streamingMipmapsMemoryBudget = i2847[30]
  i2846.maximumLODLevel = i2847[31]
  i2846.streamingMipmapsAddAllCameras = !!i2847[32]
  i2846.streamingMipmapsMaxLevelReduction = i2847[33]
  i2846.streamingMipmapsRenderersPerFrame = i2847[34]
  i2846.resolutionScalingFixedDPIFactor = i2847[35]
  i2846.streamingMipmapsMaxFileIORequests = i2847[36]
  i2846.currentQualityLevel = i2847[37]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2857 = data
  i2856.weight = i2857[0]
  i2856.vertices = i2857[1]
  i2856.normals = i2857[2]
  i2856.tangents = i2857[3]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2861 = data
  i2860.mode = i2861[0]
  i2860.parameter = i2861[1]
  i2860.threshold = i2861[2]
  return i2860
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2862 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2863 = data
  i2862.m_GlyphIndex = i2863[0]
  i2862.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2863[1], i2862.m_GlyphValueRecord)
  return i2862
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2865 = data
  i2864.m_XCoordinate = i2865[0]
  i2864.m_YCoordinate = i2865[1]
  return i2864
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2866 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2867 = data
  i2866.m_XPositionAdjustment = i2867[0]
  i2866.m_YPositionAdjustment = i2867[1]
  return i2866
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2868 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2869 = data
  i2868.xPlacement = i2869[0]
  i2868.yPlacement = i2869[1]
  i2868.xAdvance = i2869[2]
  i2868.yAdvance = i2869[3]
  return i2868
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2870 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2871 = data
  i2870.m_XPlacement = i2871[0]
  i2870.m_YPlacement = i2871[1]
  i2870.m_XAdvance = i2871[2]
  i2870.m_YAdvance = i2871[3]
  return i2870
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[32],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[32],"89":[46],"90":[91],"92":[91],"10":[9],"93":[94],"95":[96],"97":[46,45],"98":[96],"99":[98],"100":[96],"101":[96],"102":[103],"104":[103],"105":[96],"106":[9],"107":[16,9],"44":[46],"108":[16,9],"109":[14,46],"96":[46],"110":[46,45],"111":[68],"112":[75],"113":[114],"115":[103],"116":[40],"117":[32],"118":[119],"120":[38],"121":[10],"122":[9],"123":[46,9],"17":[9,16],"124":[9],"125":[16,9],"126":[46],"127":[16,9],"128":[9],"129":[130],"131":[130],"132":[130],"133":[9],"134":[9],"13":[10],"20":[16,9],"135":[9],"12":[10],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[16,9],"146":[9],"147":[9],"148":[9],"19":[9],"149":[16,9],"150":[9],"151":[38],"152":[38],"39":[38],"153":[38],"154":[32],"155":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","PSD_Tool","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "11.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv491_GG";

Deserializers.lunaAppID = "27329";

Deserializers.projectId = "54ab6df5d24ca13458b7b8f24e7d8130";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.13.0\ncom.unity.timeline: 1.8.7\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1860";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4948";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = false;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "aabbb86e-0ded-4b11-8626-36f25f0de8aa";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

