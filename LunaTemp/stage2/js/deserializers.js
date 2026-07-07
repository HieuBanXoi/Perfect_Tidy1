var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.JointSpring' )
  var i2185 = data
  i2184.spring = i2185[0]
  i2184.damper = i2185[1]
  i2184.targetPosition = i2185[2]
  return i2184
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointMotor' )
  var i2187 = data
  i2186.m_TargetVelocity = i2187[0]
  i2186.m_Force = i2187[1]
  i2186.m_FreeSpin = i2187[2]
  return i2186
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointLimits' )
  var i2189 = data
  i2188.m_Min = i2189[0]
  i2188.m_Max = i2189[1]
  i2188.m_Bounciness = i2189[2]
  i2188.m_BounceMinVelocity = i2189[3]
  i2188.m_ContactDistance = i2189[4]
  i2188.minBounce = i2189[5]
  i2188.maxBounce = i2189[6]
  return i2188
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointDrive' )
  var i2191 = data
  i2190.m_PositionSpring = i2191[0]
  i2190.m_PositionDamper = i2191[1]
  i2190.m_MaximumForce = i2191[2]
  i2190.m_UseAcceleration = i2191[3]
  return i2190
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2193 = data
  i2192.m_Spring = i2193[0]
  i2192.m_Damper = i2193[1]
  return i2192
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2195 = data
  i2194.m_Limit = i2195[0]
  i2194.m_Bounciness = i2195[1]
  i2194.m_ContactDistance = i2195[2]
  return i2194
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2197 = data
  i2196.m_ExtremumSlip = i2197[0]
  i2196.m_ExtremumValue = i2197[1]
  i2196.m_AsymptoteSlip = i2197[2]
  i2196.m_AsymptoteValue = i2197[3]
  i2196.m_Stiffness = i2197[4]
  return i2196
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2199 = data
  i2198.m_LowerAngle = i2199[0]
  i2198.m_UpperAngle = i2199[1]
  return i2198
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2201 = data
  i2200.m_MotorSpeed = i2201[0]
  i2200.m_MaximumMotorTorque = i2201[1]
  return i2200
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2203 = data
  i2202.m_DampingRatio = i2203[0]
  i2202.m_Frequency = i2203[1]
  i2202.m_Angle = i2203[2]
  return i2202
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2205 = data
  i2204.m_LowerTranslation = i2205[0]
  i2204.m_UpperTranslation = i2205[1]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2206 = root || new pc.UnityMaterial()
  var i2207 = data
  i2206.name = i2207[0]
  request.r(i2207[1], i2207[2], 0, i2206, 'shader')
  i2206.renderQueue = i2207[3]
  i2206.enableInstancing = !!i2207[4]
  var i2209 = i2207[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2209[i + 0]) );
  }
  i2206.floatParameters = i2208
  var i2211 = i2207[6]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2211[i + 0]) );
  }
  i2206.colorParameters = i2210
  var i2213 = i2207[7]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2213[i + 0]) );
  }
  i2206.vectorParameters = i2212
  var i2215 = i2207[8]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2215[i + 0]) );
  }
  i2206.textureParameters = i2214
  var i2217 = i2207[9]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2217[i + 0]) );
  }
  i2206.materialFlags = i2216
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  i2220.value = i2221[1]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.value = new pc.Color(i2225[1], i2225[2], i2225[3], i2225[4])
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.value = new pc.Vec4( i2229[1], i2229[2], i2229[3], i2229[4] )
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2233 = data
  i2232.name = i2233[0]
  request.r(i2233[1], i2233[2], 0, i2232, 'value')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.enabled = !!i2237[1]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2239 = data
  i2238.name = i2239[0]
  i2238.width = i2239[1]
  i2238.height = i2239[2]
  i2238.mipmapCount = i2239[3]
  i2238.anisoLevel = i2239[4]
  i2238.filterMode = i2239[5]
  i2238.hdr = !!i2239[6]
  i2238.format = i2239[7]
  i2238.wrapMode = i2239[8]
  i2238.alphaIsTransparency = !!i2239[9]
  i2238.alphaSource = i2239[10]
  i2238.graphicsFormat = i2239[11]
  i2238.sRGBTexture = !!i2239[12]
  i2238.desiredColorSpace = i2239[13]
  i2238.wrapU = i2239[14]
  i2238.wrapV = i2239[15]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2241 = data
  i2240.position = new pc.Vec3( i2241[0], i2241[1], i2241[2] )
  i2240.scale = new pc.Vec3( i2241[3], i2241[4], i2241[5] )
  i2240.rotation = new pc.Quat(i2241[6], i2241[7], i2241[8], i2241[9])
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2243 = data
  i2242.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2243[0], i2242.main)
  i2242.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2243[1], i2242.colorBySpeed)
  i2242.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2243[2], i2242.colorOverLifetime)
  i2242.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2243[3], i2242.emission)
  i2242.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2243[4], i2242.rotationBySpeed)
  i2242.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2243[5], i2242.rotationOverLifetime)
  i2242.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2243[6], i2242.shape)
  i2242.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2243[7], i2242.sizeBySpeed)
  i2242.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2243[8], i2242.sizeOverLifetime)
  i2242.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2243[9], i2242.textureSheetAnimation)
  i2242.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2243[10], i2242.velocityOverLifetime)
  i2242.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2243[11], i2242.noise)
  i2242.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2243[12], i2242.inheritVelocity)
  i2242.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2243[13], i2242.forceOverLifetime)
  i2242.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2243[14], i2242.limitVelocityOverLifetime)
  i2242.useAutoRandomSeed = !!i2243[15]
  i2242.randomSeed = i2243[16]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemMain()
  var i2245 = data
  i2244.duration = i2245[0]
  i2244.loop = !!i2245[1]
  i2244.prewarm = !!i2245[2]
  i2244.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[3], i2244.startDelay)
  i2244.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[4], i2244.startLifetime)
  i2244.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[5], i2244.startSpeed)
  i2244.startSize3D = !!i2245[6]
  i2244.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[7], i2244.startSizeX)
  i2244.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[8], i2244.startSizeY)
  i2244.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[9], i2244.startSizeZ)
  i2244.startRotation3D = !!i2245[10]
  i2244.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[11], i2244.startRotationX)
  i2244.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[12], i2244.startRotationY)
  i2244.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[13], i2244.startRotationZ)
  i2244.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2245[14], i2244.startColor)
  i2244.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2245[15], i2244.gravityModifier)
  i2244.simulationSpace = i2245[16]
  request.r(i2245[17], i2245[18], 0, i2244, 'customSimulationSpace')
  i2244.simulationSpeed = i2245[19]
  i2244.useUnscaledTime = !!i2245[20]
  i2244.scalingMode = i2245[21]
  i2244.playOnAwake = !!i2245[22]
  i2244.maxParticles = i2245[23]
  i2244.emitterVelocityMode = i2245[24]
  i2244.stopAction = i2245[25]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2246 = root || new pc.MinMaxCurve()
  var i2247 = data
  i2246.mode = i2247[0]
  i2246.curveMin = new pc.AnimationCurve( { keys_flow: i2247[1] } )
  i2246.curveMax = new pc.AnimationCurve( { keys_flow: i2247[2] } )
  i2246.curveMultiplier = i2247[3]
  i2246.constantMin = i2247[4]
  i2246.constantMax = i2247[5]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2248 = root || new pc.MinMaxGradient()
  var i2249 = data
  i2248.mode = i2249[0]
  i2248.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2249[1], i2248.gradientMin)
  i2248.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2249[2], i2248.gradientMax)
  i2248.colorMin = new pc.Color(i2249[3], i2249[4], i2249[5], i2249[6])
  i2248.colorMax = new pc.Color(i2249[7], i2249[8], i2249[9], i2249[10])
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2251 = data
  i2250.mode = i2251[0]
  var i2253 = i2251[1]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2253[i + 0]) );
  }
  i2250.colorKeys = i2252
  var i2255 = i2251[2]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2255[i + 0]) );
  }
  i2250.alphaKeys = i2254
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemColorBySpeed()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2257[1], i2256.color)
  i2256.range = new pc.Vec2( i2257[2], i2257[3] )
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2261 = data
  i2260.color = new pc.Color(i2261[0], i2261[1], i2261[2], i2261[3])
  i2260.time = i2261[4]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2265 = data
  i2264.alpha = i2265[0]
  i2264.time = i2265[1]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemColorOverLifetime()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2267[1], i2266.color)
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemEmitter()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[1], i2268.rateOverTime)
  i2268.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[2], i2268.rateOverDistance)
  var i2271 = i2269[3]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2271[i + 0]) );
  }
  i2268.bursts = i2270
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemBurst()
  var i2275 = data
  i2274.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[0], i2274.count)
  i2274.cycleCount = i2275[1]
  i2274.minCount = i2275[2]
  i2274.maxCount = i2275[3]
  i2274.repeatInterval = i2275[4]
  i2274.time = i2275[5]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2276 = root || new pc.ParticleSystemRotationBySpeed()
  var i2277 = data
  i2276.enabled = !!i2277[0]
  i2276.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[1], i2276.x)
  i2276.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[2], i2276.y)
  i2276.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2277[3], i2276.z)
  i2276.separateAxes = !!i2277[4]
  i2276.range = new pc.Vec2( i2277[5], i2277[6] )
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[1], i2278.x)
  i2278.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[2], i2278.y)
  i2278.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[3], i2278.z)
  i2278.separateAxes = !!i2279[4]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemShape()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.shapeType = i2281[1]
  i2280.randomDirectionAmount = i2281[2]
  i2280.sphericalDirectionAmount = i2281[3]
  i2280.randomPositionAmount = i2281[4]
  i2280.alignToDirection = !!i2281[5]
  i2280.radius = i2281[6]
  i2280.radiusMode = i2281[7]
  i2280.radiusSpread = i2281[8]
  i2280.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[9], i2280.radiusSpeed)
  i2280.radiusThickness = i2281[10]
  i2280.angle = i2281[11]
  i2280.length = i2281[12]
  i2280.boxThickness = new pc.Vec3( i2281[13], i2281[14], i2281[15] )
  i2280.meshShapeType = i2281[16]
  request.r(i2281[17], i2281[18], 0, i2280, 'mesh')
  request.r(i2281[19], i2281[20], 0, i2280, 'meshRenderer')
  request.r(i2281[21], i2281[22], 0, i2280, 'skinnedMeshRenderer')
  i2280.useMeshMaterialIndex = !!i2281[23]
  i2280.meshMaterialIndex = i2281[24]
  i2280.useMeshColors = !!i2281[25]
  i2280.normalOffset = i2281[26]
  i2280.arc = i2281[27]
  i2280.arcMode = i2281[28]
  i2280.arcSpread = i2281[29]
  i2280.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[30], i2280.arcSpeed)
  i2280.donutRadius = i2281[31]
  i2280.position = new pc.Vec3( i2281[32], i2281[33], i2281[34] )
  i2280.rotation = new pc.Vec3( i2281[35], i2281[36], i2281[37] )
  i2280.scale = new pc.Vec3( i2281[38], i2281[39], i2281[40] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemSizeBySpeed()
  var i2283 = data
  i2282.enabled = !!i2283[0]
  i2282.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[1], i2282.x)
  i2282.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[2], i2282.y)
  i2282.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[3], i2282.z)
  i2282.separateAxes = !!i2283[4]
  i2282.range = new pc.Vec2( i2283[5], i2283[6] )
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[1], i2284.x)
  i2284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[2], i2284.y)
  i2284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[3], i2284.z)
  i2284.separateAxes = !!i2285[4]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.mode = i2287[1]
  i2286.animation = i2287[2]
  i2286.numTilesX = i2287[3]
  i2286.numTilesY = i2287[4]
  i2286.useRandomRow = !!i2287[5]
  i2286.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[6], i2286.frameOverTime)
  i2286.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[7], i2286.startFrame)
  i2286.cycleCount = i2287[8]
  i2286.rowIndex = i2287[9]
  i2286.flipU = i2287[10]
  i2286.flipV = i2287[11]
  i2286.spriteCount = i2287[12]
  var i2289 = i2287[13]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2286.sprites = i2288
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[1], i2292.x)
  i2292.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[2], i2292.y)
  i2292.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[3], i2292.z)
  i2292.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[4], i2292.radial)
  i2292.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[5], i2292.speedModifier)
  i2292.space = i2293[6]
  i2292.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[7], i2292.orbitalX)
  i2292.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[8], i2292.orbitalY)
  i2292.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[9], i2292.orbitalZ)
  i2292.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[10], i2292.orbitalOffsetX)
  i2292.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[11], i2292.orbitalOffsetY)
  i2292.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[12], i2292.orbitalOffsetZ)
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemNoise()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.separateAxes = !!i2295[1]
  i2294.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[2], i2294.strengthX)
  i2294.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[3], i2294.strengthY)
  i2294.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[4], i2294.strengthZ)
  i2294.frequency = i2295[5]
  i2294.damping = !!i2295[6]
  i2294.octaveCount = i2295[7]
  i2294.octaveMultiplier = i2295[8]
  i2294.octaveScale = i2295[9]
  i2294.quality = i2295[10]
  i2294.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[11], i2294.scrollSpeed)
  i2294.scrollSpeedMultiplier = i2295[12]
  i2294.remapEnabled = !!i2295[13]
  i2294.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[14], i2294.remapX)
  i2294.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[15], i2294.remapY)
  i2294.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[16], i2294.remapZ)
  i2294.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[17], i2294.positionAmount)
  i2294.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[18], i2294.rotationAmount)
  i2294.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[19], i2294.sizeAmount)
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemInheritVelocity()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.mode = i2297[1]
  i2296.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.curve)
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemForceOverLifetime()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[1], i2298.x)
  i2298.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[2], i2298.y)
  i2298.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[3], i2298.z)
  i2298.space = i2299[4]
  i2298.randomized = !!i2299[5]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[1], i2300.limit)
  i2300.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[2], i2300.limitX)
  i2300.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.limitY)
  i2300.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[4], i2300.limitZ)
  i2300.dampen = i2301[5]
  i2300.separateAxes = !!i2301[6]
  i2300.space = i2301[7]
  i2300.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[8], i2300.drag)
  i2300.multiplyDragByParticleSize = !!i2301[9]
  i2300.multiplyDragByParticleVelocity = !!i2301[10]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'mesh')
  i2302.meshCount = i2303[2]
  i2302.activeVertexStreamsCount = i2303[3]
  i2302.alignment = i2303[4]
  i2302.renderMode = i2303[5]
  i2302.sortMode = i2303[6]
  i2302.lengthScale = i2303[7]
  i2302.velocityScale = i2303[8]
  i2302.cameraVelocityScale = i2303[9]
  i2302.normalDirection = i2303[10]
  i2302.sortingFudge = i2303[11]
  i2302.minParticleSize = i2303[12]
  i2302.maxParticleSize = i2303[13]
  i2302.pivot = new pc.Vec3( i2303[14], i2303[15], i2303[16] )
  request.r(i2303[17], i2303[18], 0, i2302, 'trailMaterial')
  i2302.applyActiveColorSpace = !!i2303[19]
  i2302.enabled = !!i2303[20]
  request.r(i2303[21], i2303[22], 0, i2302, 'sharedMaterial')
  var i2305 = i2303[23]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 2, i2304, '')
  }
  i2302.sharedMaterials = i2304
  i2302.receiveShadows = !!i2303[24]
  i2302.shadowCastingMode = i2303[25]
  i2302.sortingLayerID = i2303[26]
  i2302.sortingOrder = i2303[27]
  i2302.lightmapIndex = i2303[28]
  i2302.lightmapSceneIndex = i2303[29]
  i2302.lightmapScaleOffset = new pc.Vec4( i2303[30], i2303[31], i2303[32], i2303[33] )
  i2302.lightProbeUsage = i2303[34]
  i2302.reflectionProbeUsage = i2303[35]
  return i2302
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2308 = root || request.c( 'MergeEffect' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'tf')
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2311 = data
  i2310.name = i2311[0]
  i2310.tagId = i2311[1]
  i2310.enabled = !!i2311[2]
  i2310.isStatic = !!i2311[3]
  i2310.layer = i2311[4]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2313 = data
  i2312.name = i2313[0]
  i2312.halfPrecision = !!i2313[1]
  i2312.useSimplification = !!i2313[2]
  i2312.useUInt32IndexFormat = !!i2313[3]
  i2312.vertexCount = i2313[4]
  i2312.aabb = i2313[5]
  var i2315 = i2313[6]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( !!i2315[i + 0] );
  }
  i2312.streams = i2314
  i2312.vertices = i2313[7]
  var i2317 = i2313[8]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2317[i + 0]) );
  }
  i2312.subMeshes = i2316
  var i2319 = i2313[9]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 16) {
    i2318.push( new pc.Mat4().setData(i2319[i + 0], i2319[i + 1], i2319[i + 2], i2319[i + 3],  i2319[i + 4], i2319[i + 5], i2319[i + 6], i2319[i + 7],  i2319[i + 8], i2319[i + 9], i2319[i + 10], i2319[i + 11],  i2319[i + 12], i2319[i + 13], i2319[i + 14], i2319[i + 15]) );
  }
  i2312.bindposes = i2318
  var i2321 = i2313[10]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2321[i + 0]) );
  }
  i2312.blendShapes = i2320
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2327 = data
  i2326.triangles = i2327[0]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2333 = data
  i2332.name = i2333[0]
  var i2335 = i2333[1]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2335[i + 0]) );
  }
  i2332.frames = i2334
  return i2332
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2336 = root || request.c( 'BlinkEffect' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'tf')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.index = i2339[1]
  i2338.startup = !!i2339[2]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2341 = data
  i2340.pivot = new pc.Vec2( i2341[0], i2341[1] )
  i2340.anchorMin = new pc.Vec2( i2341[2], i2341[3] )
  i2340.anchorMax = new pc.Vec2( i2341[4], i2341[5] )
  i2340.sizeDelta = new pc.Vec2( i2341[6], i2341[7] )
  i2340.anchoredPosition3D = new pc.Vec3( i2341[8], i2341[9], i2341[10] )
  i2340.rotation = new pc.Quat(i2341[11], i2341[12], i2341[13], i2341[14])
  i2340.scale = new pc.Vec3( i2341[15], i2341[16], i2341[17] )
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2343 = data
  i2342.planeDistance = i2343[0]
  i2342.referencePixelsPerUnit = i2343[1]
  i2342.isFallbackOverlay = !!i2343[2]
  i2342.renderMode = i2343[3]
  i2342.renderOrder = i2343[4]
  i2342.sortingLayerName = i2343[5]
  i2342.sortingOrder = i2343[6]
  i2342.scaleFactor = i2343[7]
  request.r(i2343[8], i2343[9], 0, i2342, 'worldCamera')
  i2342.overrideSorting = !!i2343[10]
  i2342.pixelPerfect = !!i2343[11]
  i2342.targetDisplay = i2343[12]
  i2342.overridePixelPerfect = !!i2343[13]
  i2342.enabled = !!i2343[14]
  return i2342
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2345 = data
  i2344.m_UiScaleMode = i2345[0]
  i2344.m_ReferencePixelsPerUnit = i2345[1]
  i2344.m_ScaleFactor = i2345[2]
  i2344.m_ReferenceResolution = new pc.Vec2( i2345[3], i2345[4] )
  i2344.m_ScreenMatchMode = i2345[5]
  i2344.m_MatchWidthOrHeight = i2345[6]
  i2344.m_PhysicalUnit = i2345[7]
  i2344.m_FallbackScreenDPI = i2345[8]
  i2344.m_DefaultSpriteDPI = i2345[9]
  i2344.m_DynamicPixelsPerUnit = i2345[10]
  i2344.m_PresetInfoIsWorld = !!i2345[11]
  return i2344
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2347 = data
  i2346.m_IgnoreReversedGraphics = !!i2347[0]
  i2346.m_BlockingObjects = i2347[1]
  i2346.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2347[2] )
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'animatorController')
  request.r(i2349[2], i2349[3], 0, i2348, 'avatar')
  i2348.updateMode = i2349[4]
  i2348.hasTransformHierarchy = !!i2349[5]
  i2348.applyRootMotion = !!i2349[6]
  var i2351 = i2349[7]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 2) {
  request.r(i2351[i + 0], i2351[i + 1], 2, i2350, '')
  }
  i2348.humanBones = i2350
  i2348.enabled = !!i2349[8]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2355 = data
  i2354.cullTransparentMesh = !!i2355[0]
  return i2354
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2356 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2357 = data
  i2356.m_hasFontAssetChanged = !!i2357[0]
  request.r(i2357[1], i2357[2], 0, i2356, 'm_baseMaterial')
  i2356.m_maskOffset = new pc.Vec4( i2357[3], i2357[4], i2357[5], i2357[6] )
  i2356.m_text = i2357[7]
  i2356.m_isRightToLeft = !!i2357[8]
  request.r(i2357[9], i2357[10], 0, i2356, 'm_fontAsset')
  request.r(i2357[11], i2357[12], 0, i2356, 'm_sharedMaterial')
  var i2359 = i2357[13]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 2) {
  request.r(i2359[i + 0], i2359[i + 1], 2, i2358, '')
  }
  i2356.m_fontSharedMaterials = i2358
  request.r(i2357[14], i2357[15], 0, i2356, 'm_fontMaterial')
  var i2361 = i2357[16]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2356.m_fontMaterials = i2360
  i2356.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2357[17], i2357[18], i2357[19], i2357[20])
  i2356.m_fontColor = new pc.Color(i2357[21], i2357[22], i2357[23], i2357[24])
  i2356.m_enableVertexGradient = !!i2357[25]
  i2356.m_colorMode = i2357[26]
  i2356.m_fontColorGradient = request.d('TMPro.VertexGradient', i2357[27], i2356.m_fontColorGradient)
  request.r(i2357[28], i2357[29], 0, i2356, 'm_fontColorGradientPreset')
  request.r(i2357[30], i2357[31], 0, i2356, 'm_spriteAsset')
  i2356.m_tintAllSprites = !!i2357[32]
  request.r(i2357[33], i2357[34], 0, i2356, 'm_StyleSheet')
  i2356.m_TextStyleHashCode = i2357[35]
  i2356.m_overrideHtmlColors = !!i2357[36]
  i2356.m_faceColor = UnityEngine.Color32.ConstructColor(i2357[37], i2357[38], i2357[39], i2357[40])
  i2356.m_fontSize = i2357[41]
  i2356.m_fontSizeBase = i2357[42]
  i2356.m_fontWeight = i2357[43]
  i2356.m_enableAutoSizing = !!i2357[44]
  i2356.m_fontSizeMin = i2357[45]
  i2356.m_fontSizeMax = i2357[46]
  i2356.m_fontStyle = i2357[47]
  i2356.m_HorizontalAlignment = i2357[48]
  i2356.m_VerticalAlignment = i2357[49]
  i2356.m_textAlignment = i2357[50]
  i2356.m_characterSpacing = i2357[51]
  i2356.m_wordSpacing = i2357[52]
  i2356.m_lineSpacing = i2357[53]
  i2356.m_lineSpacingMax = i2357[54]
  i2356.m_paragraphSpacing = i2357[55]
  i2356.m_charWidthMaxAdj = i2357[56]
  i2356.m_TextWrappingMode = i2357[57]
  i2356.m_wordWrappingRatios = i2357[58]
  i2356.m_overflowMode = i2357[59]
  request.r(i2357[60], i2357[61], 0, i2356, 'm_linkedTextComponent')
  request.r(i2357[62], i2357[63], 0, i2356, 'parentLinkedComponent')
  i2356.m_enableKerning = !!i2357[64]
  var i2363 = i2357[65]
  var i2362 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.add(i2363[i + 0]);
  }
  i2356.m_ActiveFontFeatures = i2362
  i2356.m_enableExtraPadding = !!i2357[66]
  i2356.checkPaddingRequired = !!i2357[67]
  i2356.m_isRichText = !!i2357[68]
  i2356.m_parseCtrlCharacters = !!i2357[69]
  i2356.m_isOrthographic = !!i2357[70]
  i2356.m_isCullingEnabled = !!i2357[71]
  i2356.m_horizontalMapping = i2357[72]
  i2356.m_verticalMapping = i2357[73]
  i2356.m_uvLineOffset = i2357[74]
  i2356.m_geometrySortingOrder = i2357[75]
  i2356.m_IsTextObjectScaleStatic = !!i2357[76]
  i2356.m_VertexBufferAutoSizeReduction = !!i2357[77]
  i2356.m_useMaxVisibleDescender = !!i2357[78]
  i2356.m_pageToDisplay = i2357[79]
  i2356.m_margin = new pc.Vec4( i2357[80], i2357[81], i2357[82], i2357[83] )
  i2356.m_isUsingLegacyAnimationComponent = !!i2357[84]
  i2356.m_isVolumetricText = !!i2357[85]
  request.r(i2357[86], i2357[87], 0, i2356, 'm_Material')
  i2356.m_EmojiFallbackSupport = !!i2357[88]
  i2356.m_Maskable = !!i2357[89]
  i2356.m_Color = new pc.Color(i2357[90], i2357[91], i2357[92], i2357[93])
  i2356.m_RaycastTarget = !!i2357[94]
  i2356.m_RaycastPadding = new pc.Vec4( i2357[95], i2357[96], i2357[97], i2357[98] )
  return i2356
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2364 = root || request.c( 'TMPro.VertexGradient' )
  var i2365 = data
  i2364.topLeft = new pc.Color(i2365[0], i2365[1], i2365[2], i2365[3])
  i2364.topRight = new pc.Color(i2365[4], i2365[5], i2365[6], i2365[7])
  i2364.bottomLeft = new pc.Color(i2365[8], i2365[9], i2365[10], i2365[11])
  i2364.bottomRight = new pc.Color(i2365[12], i2365[13], i2365[14], i2365[15])
  return i2364
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2368 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'm_FillRect')
  request.r(i2369[2], i2369[3], 0, i2368, 'm_HandleRect')
  i2368.m_Direction = i2369[4]
  i2368.m_MinValue = i2369[5]
  i2368.m_MaxValue = i2369[6]
  i2368.m_WholeNumbers = !!i2369[7]
  i2368.m_Value = i2369[8]
  i2368.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2369[9], i2368.m_OnValueChanged)
  i2368.m_Navigation = request.d('UnityEngine.UI.Navigation', i2369[10], i2368.m_Navigation)
  i2368.m_Transition = i2369[11]
  i2368.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2369[12], i2368.m_Colors)
  i2368.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2369[13], i2368.m_SpriteState)
  i2368.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2369[14], i2368.m_AnimationTriggers)
  i2368.m_Interactable = !!i2369[15]
  request.r(i2369[16], i2369[17], 0, i2368, 'm_TargetGraphic')
  return i2368
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2371 = data
  i2370.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2371[0], i2370.m_PersistentCalls)
  return i2370
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2373 = data
  var i2375 = i2373[0]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(request.d('UnityEngine.Events.PersistentCall', i2375[i + 0]));
  }
  i2372.m_Calls = i2374
  return i2372
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'm_Target')
  i2378.m_TargetAssemblyTypeName = i2379[2]
  i2378.m_MethodName = i2379[3]
  i2378.m_Mode = i2379[4]
  i2378.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2379[5], i2378.m_Arguments)
  i2378.m_CallState = i2379[6]
  return i2378
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2381 = data
  i2380.m_Mode = i2381[0]
  i2380.m_WrapAround = !!i2381[1]
  request.r(i2381[2], i2381[3], 0, i2380, 'm_SelectOnUp')
  request.r(i2381[4], i2381[5], 0, i2380, 'm_SelectOnDown')
  request.r(i2381[6], i2381[7], 0, i2380, 'm_SelectOnLeft')
  request.r(i2381[8], i2381[9], 0, i2380, 'm_SelectOnRight')
  return i2380
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2383 = data
  i2382.m_NormalColor = new pc.Color(i2383[0], i2383[1], i2383[2], i2383[3])
  i2382.m_HighlightedColor = new pc.Color(i2383[4], i2383[5], i2383[6], i2383[7])
  i2382.m_PressedColor = new pc.Color(i2383[8], i2383[9], i2383[10], i2383[11])
  i2382.m_SelectedColor = new pc.Color(i2383[12], i2383[13], i2383[14], i2383[15])
  i2382.m_DisabledColor = new pc.Color(i2383[16], i2383[17], i2383[18], i2383[19])
  i2382.m_ColorMultiplier = i2383[20]
  i2382.m_FadeDuration = i2383[21]
  return i2382
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'm_HighlightedSprite')
  request.r(i2385[2], i2385[3], 0, i2384, 'm_PressedSprite')
  request.r(i2385[4], i2385[5], 0, i2384, 'm_SelectedSprite')
  request.r(i2385[6], i2385[7], 0, i2384, 'm_DisabledSprite')
  return i2384
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2387 = data
  i2386.m_NormalTrigger = i2387[0]
  i2386.m_HighlightedTrigger = i2387[1]
  i2386.m_PressedTrigger = i2387[2]
  i2386.m_SelectedTrigger = i2387[3]
  i2386.m_DisabledTrigger = i2387[4]
  return i2386
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.Image' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'm_Sprite')
  i2388.m_Type = i2389[2]
  i2388.m_PreserveAspect = !!i2389[3]
  i2388.m_FillCenter = !!i2389[4]
  i2388.m_FillMethod = i2389[5]
  i2388.m_FillAmount = i2389[6]
  i2388.m_FillClockwise = !!i2389[7]
  i2388.m_FillOrigin = i2389[8]
  i2388.m_UseSpriteMesh = !!i2389[9]
  i2388.m_PixelsPerUnitMultiplier = i2389[10]
  request.r(i2389[11], i2389[12], 0, i2388, 'm_Material')
  i2388.m_Maskable = !!i2389[13]
  i2388.m_Color = new pc.Color(i2389[14], i2389[15], i2389[16], i2389[17])
  i2388.m_RaycastTarget = !!i2389[18]
  i2388.m_RaycastPadding = new pc.Vec4( i2389[19], i2389[20], i2389[21], i2389[22] )
  return i2388
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.Button' )
  var i2391 = data
  i2390.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2391[0], i2390.m_OnClick)
  i2390.m_Navigation = request.d('UnityEngine.UI.Navigation', i2391[1], i2390.m_Navigation)
  i2390.m_Transition = i2391[2]
  i2390.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2391[3], i2390.m_Colors)
  i2390.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2391[4], i2390.m_SpriteState)
  i2390.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2391[5], i2390.m_AnimationTriggers)
  i2390.m_Interactable = !!i2391[6]
  request.r(i2391[7], i2391[8], 0, i2390, 'm_TargetGraphic')
  return i2390
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2393 = data
  i2392.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2393[0], i2392.m_PersistentCalls)
  return i2392
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'm_ObjectArgument')
  i2394.m_ObjectArgumentAssemblyTypeName = i2395[2]
  i2394.m_IntArgument = i2395[3]
  i2394.m_FloatArgument = i2395[4]
  i2394.m_StringArgument = i2395[5]
  i2394.m_BoolArgument = !!i2395[6]
  return i2394
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2396 = root || request.c( 'Ply_Pool' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Ply_Pool+PoolAmount', i2399[i + 0]) );
  }
  i2396.poolAmounts = i2398
  request.r(i2397[1], i2397[2], 0, i2396, 'poolHolder')
  return i2396
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2402 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2403 = data
  i2402.type = i2403[0]
  i2402.amount = i2403[1]
  request.r(i2403[2], i2403[3], 0, i2402, 'gameUnit')
  return i2402
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2404 = root || request.c( 'Ply_SoundManager' )
  var i2405 = data
  var i2407 = i2405[0]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( request.d('Ply_SoundManager+FxAudio', i2407[i + 0]) );
  }
  i2404.fxAudios = i2406
  var i2409 = i2405[1]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2404.audioClips = i2408
  request.r(i2405[2], i2405[3], 0, i2404, 'sound')
  return i2404
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2412 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2413 = data
  i2412.fxType = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'audioClip')
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'clip')
  request.r(i2417[2], i2417[3], 0, i2416, 'outputAudioMixerGroup')
  i2416.playOnAwake = !!i2417[4]
  i2416.loop = !!i2417[5]
  i2416.time = i2417[6]
  i2416.volume = i2417[7]
  i2416.pitch = i2417[8]
  i2416.enabled = !!i2417[9]
  return i2416
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2418 = root || request.c( 'GameManager' )
  var i2419 = data
  i2418.isPlaying = !!i2419[0]
  i2418.isTutorial = !!i2419[1]
  i2418.isGotoStore = !!i2419[2]
  i2418.isDraggingConveyor = !!i2419[3]
  i2418.countMove = i2419[4]
  i2418.maxMove = i2419[5]
  i2418.startLayer = i2419[6]
  i2418.currentLayer = i2419[7]
  request.r(i2419[8], i2419[9], 0, i2418, 'mainBox')
  request.r(i2419[10], i2419[11], 0, i2418, 'itemConveyor')
  i2418.useTimer = !!i2419[12]
  i2418.gameDuration = i2419[13]
  request.r(i2419[14], i2419[15], 0, i2418, 'handTutorial')
  i2418.tutorialDelay = i2419[16]
  i2418.maxTutorialPlacements = i2419[17]
  return i2418
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2420 = root || request.c( 'UIManager' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'winUI')
  request.r(i2421[2], i2421[3], 0, i2420, 'loseUI')
  request.r(i2421[4], i2421[5], 0, i2420, 'tutorial')
  request.r(i2421[6], i2421[7], 0, i2420, 'verticalUI')
  request.r(i2421[8], i2421[9], 0, i2420, 'horizontalUI')
  request.r(i2421[10], i2421[11], 0, i2420, 'downloadBtnVertical')
  request.r(i2421[12], i2421[13], 0, i2420, 'dowloadBtnHorizontal')
  request.r(i2421[14], i2421[15], 0, i2420, 'textAnim')
  i2420.isGoogleBuild = !!i2421[16]
  request.r(i2421[17], i2421[18], 0, i2420, 'progressSlider')
  request.r(i2421[19], i2421[20], 0, i2420, 'progressText')
  i2420.maxProgressItems = i2421[21]
  i2420.startProgressItems = i2421[22]
  i2420.screenWidth = i2421[23]
  i2420.screenHeight = i2421[24]
  i2420.scaleHeightOnWidth = i2421[25]
  i2420.isVertical = !!i2421[26]
  i2420.isScreenVertical = !!i2421[27]
  request.r(i2421[28], i2421[29], 0, i2420, 'cam')
  i2420.verticalUIHeightOnWidthRatio = i2421[30]
  i2420.screenVerticalHeightOnWidthRatio = i2421[31]
  i2420.introZoomOutMultiplier = i2421[32]
  i2420.cameraZoomDuration = i2421[33]
  i2420.useContinuousScaling = !!i2421[34]
  i2420.baseOrthographicSize = i2421[35]
  i2420.baseAspect = i2421[36]
  i2420.landscapeSize = i2421[37]
  i2420.defaultPortraitSize = i2421[38]
  var i2423 = i2421[39]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.add(request.d('ScreenScaleStep', i2423[i + 0]));
  }
  i2420.discreteScaleSteps = i2422
  i2420.usePerspectiveCamera = !!i2421[40]
  request.r(i2421[41], i2421[42], 0, i2420, 'perspectiveFocus')
  i2420.perspectiveFocusDistance = i2421[43]
  i2420.perspectivePadding = i2421[44]
  i2420.fitRendererBounds = !!i2421[45]
  request.r(i2421[46], i2421[47], 0, i2420, 'boundsRoot')
  var i2425 = i2421[48]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 1, i2424, '')
  }
  i2420.boundsRenderers = i2424
  return i2420
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2428 = root || request.c( 'ScreenScaleStep' )
  var i2429 = data
  i2428.heightOnWidthRatio = i2429[0]
  i2428.orthographicSize = i2429[1]
  return i2428
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2432 = root || request.c( 'InputManager' )
  var i2433 = data
  i2432.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2433[0] )
  i2432.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i2433[1] )
  i2432.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2433[2] )
  i2432.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i2433[3] )
  i2432.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i2433[4] )
  i2432.isDragging = !!i2433[5]
  request.r(i2433[6], i2433[7], 0, i2432, 'mainCamera')
  return i2432
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i2434 = root || request.c( 'ItemSetupTool' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'spritesParent')
  request.r(i2435[2], i2435[3], 0, i2434, 'holdersParent')
  i2434.shadowSuffix = i2435[4]
  i2434.holderPrefix = i2435[5]
  i2434.holdersParentName = i2435[6]
  i2434.colliderDepth = i2435[7]
  i2434.colliderSizeMultiplier = i2435[8]
  i2434.minColliderSize = new pc.Vec2( i2435[9], i2435[10] )
  i2434.generatedShadowColor = new pc.Color(i2435[11], i2435[12], i2435[13], i2435[14])
  i2434.fadedBlackShadowColor = new pc.Color(i2435[15], i2435[16], i2435[17], i2435[18])
  i2434.generatedShadowLocalOffset = new pc.Vec3( i2435[19], i2435[20], i2435[21] )
  i2434.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2435[22] )
  i2434.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i2435[23] )
  return i2434
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2436 = root || request.c( 'CameraController' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'targetCamera')
  i2436.enableZoom = !!i2437[2]
  i2436.minZoomRatio = i2437[3]
  i2436.maxZoomRatio = i2437[4]
  i2436.mouseWheelZoomSpeed = i2437[5]
  i2436.pinchZoomSpeed = i2437[6]
  request.r(i2437[7], i2437[8], 0, i2436, 'conveyor')
  i2436.enableDrag = !!i2437[9]
  i2436.horizontalOnly = !!i2437[10]
  i2436.dragSensitivity = i2437[11]
  i2436.maxHorizontalOffset = i2437[12]
  i2436.maxVerticalOffset = i2437[13]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2439 = data
  i2438.aspect = i2439[0]
  i2438.orthographic = !!i2439[1]
  i2438.orthographicSize = i2439[2]
  i2438.backgroundColor = new pc.Color(i2439[3], i2439[4], i2439[5], i2439[6])
  i2438.nearClipPlane = i2439[7]
  i2438.farClipPlane = i2439[8]
  i2438.fieldOfView = i2439[9]
  i2438.depth = i2439[10]
  i2438.clearFlags = i2439[11]
  i2438.cullingMask = i2439[12]
  i2438.rect = i2439[13]
  request.r(i2439[14], i2439[15], 0, i2438, 'targetTexture')
  i2438.usePhysicalProperties = !!i2439[16]
  i2438.focalLength = i2439[17]
  i2438.sensorSize = new pc.Vec2( i2439[18], i2439[19] )
  i2438.lensShift = new pc.Vec2( i2439[20], i2439[21] )
  i2438.gateFit = i2439[22]
  i2438.commandBufferCount = i2439[23]
  i2438.cameraType = i2439[24]
  i2438.enabled = !!i2439[25]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2441 = data
  i2440.type = i2441[0]
  i2440.color = new pc.Color(i2441[1], i2441[2], i2441[3], i2441[4])
  i2440.cullingMask = i2441[5]
  i2440.intensity = i2441[6]
  i2440.range = i2441[7]
  i2440.spotAngle = i2441[8]
  i2440.shadows = i2441[9]
  i2440.shadowNormalBias = i2441[10]
  i2440.shadowBias = i2441[11]
  i2440.shadowStrength = i2441[12]
  i2440.shadowResolution = i2441[13]
  i2440.lightmapBakeType = i2441[14]
  i2440.renderMode = i2441[15]
  request.r(i2441[16], i2441[17], 0, i2440, 'cookie')
  i2440.cookieSize = i2441[18]
  i2440.shadowNearPlane = i2441[19]
  i2440.occlusionMaskChannel = i2441[20]
  i2440.enabled = !!i2441[21]
  return i2440
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'm_FirstSelected')
  i2442.m_sendNavigationEvents = !!i2443[2]
  i2442.m_DragThreshold = i2443[3]
  return i2442
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2445 = data
  i2444.m_HorizontalAxis = i2445[0]
  i2444.m_VerticalAxis = i2445[1]
  i2444.m_SubmitButton = i2445[2]
  i2444.m_CancelButton = i2445[3]
  i2444.m_InputActionsPerSecond = i2445[4]
  i2444.m_RepeatDelay = i2445[5]
  i2444.m_ForceModuleActive = !!i2445[6]
  i2444.m_SendPointerHoverToParent = !!i2445[7]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2447 = data
  i2446.color = new pc.Color(i2447[0], i2447[1], i2447[2], i2447[3])
  request.r(i2447[4], i2447[5], 0, i2446, 'sprite')
  i2446.flipX = !!i2447[6]
  i2446.flipY = !!i2447[7]
  i2446.drawMode = i2447[8]
  i2446.size = new pc.Vec2( i2447[9], i2447[10] )
  i2446.tileMode = i2447[11]
  i2446.adaptiveModeThreshold = i2447[12]
  i2446.maskInteraction = i2447[13]
  i2446.spriteSortPoint = i2447[14]
  i2446.enabled = !!i2447[15]
  request.r(i2447[16], i2447[17], 0, i2446, 'sharedMaterial')
  var i2449 = i2447[18]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2446.sharedMaterials = i2448
  i2446.receiveShadows = !!i2447[19]
  i2446.shadowCastingMode = i2447[20]
  i2446.sortingLayerID = i2447[21]
  i2446.sortingOrder = i2447[22]
  i2446.lightmapIndex = i2447[23]
  i2446.lightmapSceneIndex = i2447[24]
  i2446.lightmapScaleOffset = new pc.Vec4( i2447[25], i2447[26], i2447[27], i2447[28] )
  i2446.lightProbeUsage = i2447[29]
  i2446.reflectionProbeUsage = i2447[30]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2451 = data
  i2450.center = new pc.Vec3( i2451[0], i2451[1], i2451[2] )
  i2450.radius = i2451[3]
  i2450.enabled = !!i2451[4]
  i2450.isTrigger = !!i2451[5]
  request.r(i2451[6], i2451[7], 0, i2450, 'material')
  return i2450
}

Deserializers["Box"] = function (request, data, root) {
  var i2452 = root || request.c( 'Box' )
  var i2453 = data
  i2452.useBox = !!i2453[0]
  i2452.spawnMode = i2453[1]
  var i2455 = i2453[2]
  var i2454 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 1, i2454, '')
  }
  i2452.dynamicItems = i2454
  var i2457 = i2453[3]
  var i2456 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 1, i2456, '')
  }
  i2452.spawnTargets = i2456
  i2452.initialSpawnCount = i2453[4]
  i2452.revealDuration = i2453[5]
  i2452.showInitialBatchShadowsOnSpawn = !!i2453[6]
  i2452.spawnAreaSize = new pc.Vec2( i2453[7], i2453[8] )
  i2452.spawnAreaOffset = new pc.Vec3( i2453[9], i2453[10], i2453[11] )
  request.r(i2453[12], i2453[13], 0, i2452, 'randomSpawnParent')
  request.r(i2453[14], i2453[15], 0, i2452, 'mainConveyor')
  request.r(i2453[16], i2453[17], 0, i2452, 'graphicController')
  return i2452
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i2462 = root || request.c( 'BoxGraphicController' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'skeletonAnimation')
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'sharedMesh')
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2467 = data
  request.r(i2467[0], i2467[1], 0, i2466, 'additionalVertexStreams')
  i2466.enabled = !!i2467[2]
  request.r(i2467[3], i2467[4], 0, i2466, 'sharedMaterial')
  var i2469 = i2467[5]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2466.sharedMaterials = i2468
  i2466.receiveShadows = !!i2467[6]
  i2466.shadowCastingMode = i2467[7]
  i2466.sortingLayerID = i2467[8]
  i2466.sortingOrder = i2467[9]
  i2466.lightmapIndex = i2467[10]
  i2466.lightmapSceneIndex = i2467[11]
  i2466.lightmapScaleOffset = new pc.Vec4( i2467[12], i2467[13], i2467[14], i2467[15] )
  i2466.lightProbeUsage = i2467[16]
  i2466.reflectionProbeUsage = i2467[17]
  return i2466
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2470 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2471 = data
  i2470.loop = !!i2471[0]
  i2470.timeScale = i2471[1]
  request.r(i2471[2], i2471[3], 0, i2470, 'skeletonDataAsset')
  i2470.initialSkinName = i2471[4]
  i2470.fixPrefabOverrideViaMeshFilter = i2471[5]
  i2470.initialFlipX = !!i2471[6]
  i2470.initialFlipY = !!i2471[7]
  i2470.updateWhenInvisible = i2471[8]
  i2470.zSpacing = i2471[9]
  i2470.useClipping = !!i2471[10]
  i2470.immutableTriangles = !!i2471[11]
  i2470.pmaVertexColors = !!i2471[12]
  i2470.clearStateOnDisable = !!i2471[13]
  i2470.tintBlack = !!i2471[14]
  i2470.singleSubmesh = !!i2471[15]
  i2470.fixDrawOrder = !!i2471[16]
  i2470.addNormals = !!i2471[17]
  i2470.calculateTangents = !!i2471[18]
  i2470.maskInteraction = i2471[19]
  i2470.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2471[20], i2470.maskMaterials)
  i2470.disableRenderingOnOverride = !!i2471[21]
  i2470._animationName = i2471[22]
  var i2473 = i2471[23]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( i2473[i + 0] );
  }
  i2470.separatorSlotNames = i2472
  return i2470
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2474 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2475 = data
  var i2477 = i2475[0]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 2, i2476, '')
  }
  i2474.materialsMaskDisabled = i2476
  var i2479 = i2475[1]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2474.materialsInsideMask = i2478
  var i2481 = i2475[2]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2474.materialsOutsideMask = i2480
  return i2474
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i2484 = root || request.c( 'ItemHolder' )
  var i2485 = data
  i2484.id = i2485[0]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2487 = data
  i2486.center = new pc.Vec3( i2487[0], i2487[1], i2487[2] )
  i2486.size = new pc.Vec3( i2487[3], i2487[4], i2487[5] )
  i2486.enabled = !!i2487[6]
  i2486.isTrigger = !!i2487[7]
  request.r(i2487[8], i2487[9], 0, i2486, 'material')
  return i2486
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i2488 = root || request.c( 'PSD_Tool' )
  var i2489 = data
  var i2491 = i2489[0]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 1, i2490, '')
  }
  i2488.sprites = i2490
  request.r(i2489[1], i2489[2], 0, i2488, 'holder')
  request.r(i2489[3], i2489[4], 0, i2488, 'psdPrefab')
  request.r(i2489[5], i2489[6], 0, i2488, 'targetFolder')
  var i2493 = i2489[7]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 1, i2492, '')
  }
  i2488.childGameObjects = i2492
  return i2488
}

Deserializers["Item"] = function (request, data, root) {
  var i2498 = root || request.c( 'Item' )
  var i2499 = data
  i2498.fxTypeOnPlace = i2499[0]
  i2498.id = i2499[1]
  i2498.currentState = i2499[2]
  i2498.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i2499[3] )
  request.r(i2499[4], i2499[5], 0, i2498, 'defaultShadow')
  i2498.returnToSlotOnMiss = !!i2499[6]
  i2498.hideShadowOnDrop = !!i2499[7]
  i2498.scaleOnSpawn = !!i2499[8]
  i2498.spawnScaleMultiplier = i2499[9]
  var i2501 = i2499[10]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 1, i2500, '')
  }
  i2498.requiredItems = i2500
  request.r(i2499[11], i2499[12], 0, i2498, 'correctHolderTransform')
  request.r(i2499[13], i2499[14], 0, i2498, 'shadowOnHolder')
  i2498.canShowShadowHint = !!i2499[15]
  request.r(i2499[16], i2499[17], 0, i2498, 'homeSlot')
  i2498.waitingPosition = new pc.Vec3( i2499[18], i2499[19], i2499[20] )
  request.r(i2499[21], i2499[22], 0, i2498, 'spriteRenderer')
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2503 = data
  i2502.ambientIntensity = i2503[0]
  i2502.reflectionIntensity = i2503[1]
  i2502.ambientMode = i2503[2]
  i2502.ambientLight = new pc.Color(i2503[3], i2503[4], i2503[5], i2503[6])
  i2502.ambientSkyColor = new pc.Color(i2503[7], i2503[8], i2503[9], i2503[10])
  i2502.ambientGroundColor = new pc.Color(i2503[11], i2503[12], i2503[13], i2503[14])
  i2502.ambientEquatorColor = new pc.Color(i2503[15], i2503[16], i2503[17], i2503[18])
  i2502.fogColor = new pc.Color(i2503[19], i2503[20], i2503[21], i2503[22])
  i2502.fogEndDistance = i2503[23]
  i2502.fogStartDistance = i2503[24]
  i2502.fogDensity = i2503[25]
  i2502.fog = !!i2503[26]
  request.r(i2503[27], i2503[28], 0, i2502, 'skybox')
  i2502.fogMode = i2503[29]
  var i2505 = i2503[30]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2505[i + 0]) );
  }
  i2502.lightmaps = i2504
  i2502.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2503[31], i2502.lightProbes)
  i2502.lightmapsMode = i2503[32]
  i2502.mixedBakeMode = i2503[33]
  i2502.environmentLightingMode = i2503[34]
  i2502.ambientProbe = new pc.SphericalHarmonicsL2(i2503[35])
  i2502.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2503[36])
  i2502.useReferenceAmbientProbe = !!i2503[37]
  request.r(i2503[38], i2503[39], 0, i2502, 'customReflection')
  request.r(i2503[40], i2503[41], 0, i2502, 'defaultReflection')
  i2502.defaultReflectionMode = i2503[42]
  i2502.defaultReflectionResolution = i2503[43]
  i2502.sunLightObjectId = i2503[44]
  i2502.pixelLightCount = i2503[45]
  i2502.defaultReflectionHDR = !!i2503[46]
  i2502.hasLightDataAsset = !!i2503[47]
  i2502.hasManualGenerate = !!i2503[48]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'lightmapColor')
  request.r(i2509[2], i2509[3], 0, i2508, 'lightmapDirection')
  request.r(i2509[4], i2509[5], 0, i2508, 'shadowMask')
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2510 = root || new UnityEngine.LightProbes()
  var i2511 = data
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2521[i + 0]));
  }
  i2518.ShaderCompilationErrors = i2520
  i2518.name = i2519[1]
  i2518.guid = i2519[2]
  var i2523 = i2519[3]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2518.shaderDefinedKeywords = i2522
  var i2525 = i2519[4]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2525[i + 0]) );
  }
  i2518.passes = i2524
  var i2527 = i2519[5]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2527[i + 0]) );
  }
  i2518.usePasses = i2526
  var i2529 = i2519[6]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2529[i + 0]) );
  }
  i2518.defaultParameterValues = i2528
  request.r(i2519[7], i2519[8], 0, i2518, 'unityFallbackShader')
  i2518.readDepth = !!i2519[9]
  i2518.hasDepthOnlyPass = !!i2519[10]
  i2518.isCreatedByShaderGraph = !!i2519[11]
  i2518.disableBatching = !!i2519[12]
  i2518.compiled = !!i2519[13]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2533 = data
  i2532.shaderName = i2533[0]
  i2532.errorMessage = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2536 = root || new pc.UnityShaderPass()
  var i2537 = data
  i2536.id = i2537[0]
  i2536.subShaderIndex = i2537[1]
  i2536.name = i2537[2]
  i2536.passType = i2537[3]
  i2536.grabPassTextureName = i2537[4]
  i2536.usePass = !!i2537[5]
  i2536.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[6], i2536.zTest)
  i2536.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[7], i2536.zWrite)
  i2536.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[8], i2536.culling)
  i2536.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2537[9], i2536.blending)
  i2536.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2537[10], i2536.alphaBlending)
  i2536.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[11], i2536.colorWriteMask)
  i2536.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[12], i2536.offsetUnits)
  i2536.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[13], i2536.offsetFactor)
  i2536.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[14], i2536.stencilRef)
  i2536.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[15], i2536.stencilReadMask)
  i2536.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2537[16], i2536.stencilWriteMask)
  i2536.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2537[17], i2536.stencilOp)
  i2536.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2537[18], i2536.stencilOpFront)
  i2536.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2537[19], i2536.stencilOpBack)
  var i2539 = i2537[20]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2539[i + 0]) );
  }
  i2536.tags = i2538
  var i2541 = i2537[21]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( i2541[i + 0] );
  }
  i2536.passDefinedKeywords = i2540
  var i2543 = i2537[22]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2543[i + 0]) );
  }
  i2536.passDefinedKeywordGroups = i2542
  var i2545 = i2537[23]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2545[i + 0]) );
  }
  i2536.variants = i2544
  var i2547 = i2537[24]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2547[i + 0]) );
  }
  i2536.excludedVariants = i2546
  i2536.hasDepthReader = !!i2537[25]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2549 = data
  i2548.val = i2549[0]
  i2548.name = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2551 = data
  i2550.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[0], i2550.src)
  i2550.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[1], i2550.dst)
  i2550.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[2], i2550.op)
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2553 = data
  i2552.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[0], i2552.pass)
  i2552.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[1], i2552.fail)
  i2552.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[2], i2552.zFail)
  i2552.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[3], i2552.comp)
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2557 = data
  i2556.name = i2557[0]
  i2556.value = i2557[1]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2560.keywords = i2562
  i2560.hasDiscard = !!i2561[1]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2567 = data
  i2566.passId = i2567[0]
  i2566.subShaderIndex = i2567[1]
  var i2569 = i2567[2]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( i2569[i + 0] );
  }
  i2566.keywords = i2568
  i2566.vertexProgram = i2567[3]
  i2566.fragmentProgram = i2567[4]
  i2566.exportedForWebGl2 = !!i2567[5]
  i2566.readDepth = !!i2567[6]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, 'shader')
  i2572.pass = i2573[2]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2577 = data
  i2576.name = i2577[0]
  i2576.type = i2577[1]
  i2576.value = new pc.Vec4( i2577[2], i2577[3], i2577[4], i2577[5] )
  i2576.textureValue = i2577[6]
  i2576.shaderPropertyFlag = i2577[7]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2579 = data
  i2578.name = i2579[0]
  request.r(i2579[1], i2579[2], 0, i2578, 'texture')
  i2578.aabb = i2579[3]
  i2578.vertices = i2579[4]
  i2578.triangles = i2579[5]
  i2578.textureRect = UnityEngine.Rect.MinMaxRect(i2579[6], i2579[7], i2579[8], i2579[9])
  i2578.packedRect = UnityEngine.Rect.MinMaxRect(i2579[10], i2579[11], i2579[12], i2579[13])
  i2578.border = new pc.Vec4( i2579[14], i2579[15], i2579[16], i2579[17] )
  i2578.transparency = i2579[18]
  i2578.bounds = i2579[19]
  i2578.pixelsPerUnit = i2579[20]
  i2578.textureWidth = i2579[21]
  i2578.textureHeight = i2579[22]
  i2578.nativeSize = new pc.Vec2( i2579[23], i2579[24] )
  i2578.pivot = new pc.Vec2( i2579[25], i2579[26] )
  i2578.textureRectOffset = new pc.Vec2( i2579[27], i2579[28] )
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2581 = data
  i2580.name = i2581[0]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2583 = data
  i2582.name = i2583[0]
  i2582.wrapMode = i2583[1]
  i2582.isLooping = !!i2583[2]
  i2582.length = i2583[3]
  var i2585 = i2583[4]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2585[i + 0]) );
  }
  i2582.curves = i2584
  var i2587 = i2583[5]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2587[i + 0]) );
  }
  i2582.events = i2586
  i2582.halfPrecision = !!i2583[6]
  i2582._frameRate = i2583[7]
  i2582.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2583[8], i2582.localBounds)
  i2582.hasMuscleCurves = !!i2583[9]
  var i2589 = i2583[10]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( i2589[i + 0] );
  }
  i2582.clipMuscleConstant = i2588
  i2582.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2583[11], i2582.clipBindingConstant)
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2593 = data
  i2592.path = i2593[0]
  i2592.hash = i2593[1]
  i2592.componentType = i2593[2]
  i2592.property = i2593[3]
  i2592.keys = i2593[4]
  var i2595 = i2593[5]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2595[i + 0]) );
  }
  i2592.objectReferenceKeys = i2594
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2599 = data
  i2598.time = i2599[0]
  request.r(i2599[1], i2599[2], 0, i2598, 'value')
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2603 = data
  i2602.functionName = i2603[0]
  i2602.floatParameter = i2603[1]
  i2602.intParameter = i2603[2]
  i2602.stringParameter = i2603[3]
  request.r(i2603[4], i2603[5], 0, i2602, 'objectReferenceParameter')
  i2602.time = i2603[6]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2605 = data
  i2604.center = new pc.Vec3( i2605[0], i2605[1], i2605[2] )
  i2604.extends = new pc.Vec3( i2605[3], i2605[4], i2605[5] )
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( i2611[i + 0] );
  }
  i2608.genericBindings = i2610
  var i2613 = i2609[1]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( i2613[i + 0] );
  }
  i2608.pptrCurveMapping = i2612
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2615 = data
  i2614.name = i2615[0]
  var i2617 = i2615[1]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2617[i + 0]) );
  }
  i2614.layers = i2616
  var i2619 = i2615[2]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2619[i + 0]) );
  }
  i2614.parameters = i2618
  i2614.animationClips = i2615[3]
  i2614.avatarUnsupported = i2615[4]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2623 = data
  i2622.name = i2623[0]
  i2622.defaultWeight = i2623[1]
  i2622.blendingMode = i2623[2]
  i2622.avatarMask = i2623[3]
  i2622.syncedLayerIndex = i2623[4]
  i2622.syncedLayerAffectsTiming = !!i2623[5]
  i2622.syncedLayers = i2623[6]
  i2622.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2623[7], i2622.stateMachine)
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2625 = data
  i2624.id = i2625[0]
  i2624.name = i2625[1]
  i2624.path = i2625[2]
  var i2627 = i2625[3]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2627[i + 0]) );
  }
  i2624.states = i2626
  var i2629 = i2625[4]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2629[i + 0]) );
  }
  i2624.machines = i2628
  var i2631 = i2625[5]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2631[i + 0]) );
  }
  i2624.entryStateTransitions = i2630
  var i2633 = i2625[6]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2633[i + 0]) );
  }
  i2624.exitStateTransitions = i2632
  var i2635 = i2625[7]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2635[i + 0]) );
  }
  i2624.anyStateTransitions = i2634
  i2624.defaultStateId = i2625[8]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.name = i2639[1]
  i2638.cycleOffset = i2639[2]
  i2638.cycleOffsetParameter = i2639[3]
  i2638.cycleOffsetParameterActive = !!i2639[4]
  i2638.mirror = !!i2639[5]
  i2638.mirrorParameter = i2639[6]
  i2638.mirrorParameterActive = !!i2639[7]
  i2638.motionId = i2639[8]
  i2638.nameHash = i2639[9]
  i2638.fullPathHash = i2639[10]
  i2638.speed = i2639[11]
  i2638.speedParameter = i2639[12]
  i2638.speedParameterActive = !!i2639[13]
  i2638.tag = i2639[14]
  i2638.tagHash = i2639[15]
  i2638.writeDefaultValues = !!i2639[16]
  var i2641 = i2639[17]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 2) {
  request.r(i2641[i + 0], i2641[i + 1], 2, i2640, '')
  }
  i2638.behaviours = i2640
  var i2643 = i2639[18]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2643[i + 0]) );
  }
  i2638.transitions = i2642
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2649 = data
  i2648.fullPath = i2649[0]
  i2648.canTransitionToSelf = !!i2649[1]
  i2648.duration = i2649[2]
  i2648.exitTime = i2649[3]
  i2648.hasExitTime = !!i2649[4]
  i2648.hasFixedDuration = !!i2649[5]
  i2648.interruptionSource = i2649[6]
  i2648.offset = i2649[7]
  i2648.orderedInterruption = !!i2649[8]
  i2648.destinationStateId = i2649[9]
  i2648.isExit = !!i2649[10]
  i2648.mute = !!i2649[11]
  i2648.solo = !!i2649[12]
  var i2651 = i2649[13]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2651[i + 0]) );
  }
  i2648.conditions = i2650
  return i2648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2657 = data
  i2656.destinationStateId = i2657[0]
  i2656.isExit = !!i2657[1]
  i2656.mute = !!i2657[2]
  i2656.solo = !!i2657[3]
  var i2659 = i2657[4]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2659[i + 0]) );
  }
  i2656.conditions = i2658
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2663 = data
  i2662.defaultBool = !!i2663[0]
  i2662.defaultFloat = i2663[1]
  i2662.defaultInt = i2663[2]
  i2662.name = i2663[3]
  i2662.nameHash = i2663[4]
  i2662.type = i2663[5]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2665 = data
  i2664.name = i2665[0]
  i2664.bytes64 = i2665[1]
  i2664.data = i2665[2]
  return i2664
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2666 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2667 = data
  i2666.normalStyle = i2667[0]
  i2666.normalSpacingOffset = i2667[1]
  i2666.boldStyle = i2667[2]
  i2666.boldSpacing = i2667[3]
  i2666.italicStyle = i2667[4]
  i2666.tabSize = i2667[5]
  request.r(i2667[6], i2667[7], 0, i2666, 'atlas')
  i2666.m_SourceFontFileGUID = i2667[8]
  i2666.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2667[9], i2666.m_CreationSettings)
  request.r(i2667[10], i2667[11], 0, i2666, 'm_SourceFontFile')
  i2666.m_SourceFontFilePath = i2667[12]
  i2666.m_AtlasPopulationMode = i2667[13]
  i2666.InternalDynamicOS = !!i2667[14]
  var i2669 = i2667[15]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('UnityEngine.TextCore.Glyph', i2669[i + 0]));
  }
  i2666.m_GlyphTable = i2668
  var i2671 = i2667[16]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.add(request.d('TMPro.TMP_Character', i2671[i + 0]));
  }
  i2666.m_CharacterTable = i2670
  var i2673 = i2667[17]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 2, i2672, '')
  }
  i2666.m_AtlasTextures = i2672
  i2666.m_AtlasTextureIndex = i2667[18]
  i2666.m_IsMultiAtlasTexturesEnabled = !!i2667[19]
  i2666.m_GetFontFeatures = !!i2667[20]
  i2666.m_ClearDynamicDataOnBuild = !!i2667[21]
  i2666.m_AtlasWidth = i2667[22]
  i2666.m_AtlasHeight = i2667[23]
  i2666.m_AtlasPadding = i2667[24]
  i2666.m_AtlasRenderMode = i2667[25]
  var i2675 = i2667[26]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.add(request.d('UnityEngine.TextCore.GlyphRect', i2675[i + 0]));
  }
  i2666.m_UsedGlyphRects = i2674
  var i2677 = i2667[27]
  var i2676 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.add(request.d('UnityEngine.TextCore.GlyphRect', i2677[i + 0]));
  }
  i2666.m_FreeGlyphRects = i2676
  i2666.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2667[28], i2666.m_FontFeatureTable)
  i2666.m_ShouldReimportFontFeatures = !!i2667[29]
  var i2679 = i2667[30]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2679.length; i += 2) {
  request.r(i2679[i + 0], i2679[i + 1], 1, i2678, '')
  }
  i2666.m_FallbackFontAssetTable = i2678
  var i2681 = i2667[31]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('TMPro.TMP_FontWeightPair', i2681[i + 0]) );
  }
  i2666.m_FontWeightTable = i2680
  var i2683 = i2667[32]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('TMPro.TMP_FontWeightPair', i2683[i + 0]) );
  }
  i2666.fontWeights = i2682
  i2666.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2667[33], i2666.m_fontInfo)
  var i2685 = i2667[34]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('TMPro.TMP_Glyph', i2685[i + 0]));
  }
  i2666.m_glyphInfoList = i2684
  i2666.m_KerningTable = request.d('TMPro.KerningTable', i2667[35], i2666.m_KerningTable)
  var i2687 = i2667[36]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 1, i2686, '')
  }
  i2666.fallbackFontAssets = i2686
  i2666.m_Version = i2667[37]
  i2666.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2667[38], i2666.m_FaceInfo)
  request.r(i2667[39], i2667[40], 0, i2666, 'm_Material')
  return i2666
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2689 = data
  i2688.sourceFontFileName = i2689[0]
  i2688.sourceFontFileGUID = i2689[1]
  i2688.faceIndex = i2689[2]
  i2688.pointSizeSamplingMode = i2689[3]
  i2688.pointSize = i2689[4]
  i2688.padding = i2689[5]
  i2688.paddingMode = i2689[6]
  i2688.packingMode = i2689[7]
  i2688.atlasWidth = i2689[8]
  i2688.atlasHeight = i2689[9]
  i2688.characterSetSelectionMode = i2689[10]
  i2688.characterSequence = i2689[11]
  i2688.referencedFontAssetGUID = i2689[12]
  i2688.referencedTextAssetGUID = i2689[13]
  i2688.fontStyle = i2689[14]
  i2688.fontStyleModifier = i2689[15]
  i2688.renderMode = i2689[16]
  i2688.includeFontFeatures = !!i2689[17]
  return i2688
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2693 = data
  i2692.m_Index = i2693[0]
  i2692.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2693[1], i2692.m_Metrics)
  i2692.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2693[2], i2692.m_GlyphRect)
  i2692.m_Scale = i2693[3]
  i2692.m_AtlasIndex = i2693[4]
  i2692.m_ClassDefinitionType = i2693[5]
  return i2692
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2695 = data
  i2694.m_Width = i2695[0]
  i2694.m_Height = i2695[1]
  i2694.m_HorizontalBearingX = i2695[2]
  i2694.m_HorizontalBearingY = i2695[3]
  i2694.m_HorizontalAdvance = i2695[4]
  return i2694
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2697 = data
  i2696.m_X = i2697[0]
  i2696.m_Y = i2697[1]
  i2696.m_Width = i2697[2]
  i2696.m_Height = i2697[3]
  return i2696
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2700 = root || request.c( 'TMPro.TMP_Character' )
  var i2701 = data
  i2700.m_ElementType = i2701[0]
  i2700.m_Unicode = i2701[1]
  i2700.m_GlyphIndex = i2701[2]
  i2700.m_Scale = i2701[3]
  return i2700
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2707 = data
  var i2709 = i2707[0]
  var i2708 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.add(request.d('TMPro.MultipleSubstitutionRecord', i2709[i + 0]));
  }
  i2706.m_MultipleSubstitutionRecords = i2708
  var i2711 = i2707[1]
  var i2710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.add(request.d('TMPro.LigatureSubstitutionRecord', i2711[i + 0]));
  }
  i2706.m_LigatureSubstitutionRecords = i2710
  var i2713 = i2707[2]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2713[i + 0]));
  }
  i2706.m_GlyphPairAdjustmentRecords = i2712
  var i2715 = i2707[3]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2715[i + 0]));
  }
  i2706.m_MarkToBaseAdjustmentRecords = i2714
  var i2717 = i2707[4]
  var i2716 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2717[i + 0]));
  }
  i2706.m_MarkToMarkAdjustmentRecords = i2716
  return i2706
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2721 = data
  i2720.m_TargetGlyphID = i2721[0]
  i2720.m_SubstituteGlyphIDs = i2721[1]
  return i2720
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2725 = data
  i2724.m_ComponentGlyphIDs = i2725[0]
  i2724.m_LigatureGlyphID = i2725[1]
  return i2724
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2728 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2729 = data
  i2728.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2729[0], i2728.m_FirstAdjustmentRecord)
  i2728.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2729[1], i2728.m_SecondAdjustmentRecord)
  i2728.m_FeatureLookupFlags = i2729[2]
  return i2728
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2733 = data
  i2732.m_BaseGlyphID = i2733[0]
  i2732.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2733[1], i2732.m_BaseGlyphAnchorPoint)
  i2732.m_MarkGlyphID = i2733[2]
  i2732.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2733[3], i2732.m_MarkPositionAdjustment)
  return i2732
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2737 = data
  i2736.m_BaseMarkGlyphID = i2737[0]
  i2736.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2737[1], i2736.m_BaseMarkGlyphAnchorPoint)
  i2736.m_CombiningMarkGlyphID = i2737[2]
  i2736.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2737[3], i2736.m_CombiningMarkPositionAdjustment)
  return i2736
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2743 = data
  request.r(i2743[0], i2743[1], 0, i2742, 'regularTypeface')
  request.r(i2743[2], i2743[3], 0, i2742, 'italicTypeface')
  return i2742
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2745 = data
  i2744.Name = i2745[0]
  i2744.PointSize = i2745[1]
  i2744.Scale = i2745[2]
  i2744.CharacterCount = i2745[3]
  i2744.LineHeight = i2745[4]
  i2744.Baseline = i2745[5]
  i2744.Ascender = i2745[6]
  i2744.CapHeight = i2745[7]
  i2744.Descender = i2745[8]
  i2744.CenterLine = i2745[9]
  i2744.SuperscriptOffset = i2745[10]
  i2744.SubscriptOffset = i2745[11]
  i2744.SubSize = i2745[12]
  i2744.Underline = i2745[13]
  i2744.UnderlineThickness = i2745[14]
  i2744.strikethrough = i2745[15]
  i2744.strikethroughThickness = i2745[16]
  i2744.TabWidth = i2745[17]
  i2744.Padding = i2745[18]
  i2744.AtlasWidth = i2745[19]
  i2744.AtlasHeight = i2745[20]
  return i2744
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2749 = data
  i2748.id = i2749[0]
  i2748.x = i2749[1]
  i2748.y = i2749[2]
  i2748.width = i2749[3]
  i2748.height = i2749[4]
  i2748.xOffset = i2749[5]
  i2748.yOffset = i2749[6]
  i2748.xAdvance = i2749[7]
  i2748.scale = i2749[8]
  return i2748
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.KerningTable' )
  var i2751 = data
  var i2753 = i2751[0]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('TMPro.KerningPair', i2753[i + 0]));
  }
  i2750.kerningPairs = i2752
  return i2750
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.KerningPair' )
  var i2757 = data
  i2756.xOffset = i2757[0]
  i2756.m_FirstGlyph = i2757[1]
  i2756.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2757[2], i2756.m_FirstGlyphAdjustments)
  i2756.m_SecondGlyph = i2757[3]
  i2756.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2757[4], i2756.m_SecondGlyphAdjustments)
  i2756.m_IgnoreSpacingAdjustments = !!i2757[5]
  return i2756
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2758 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2759 = data
  i2758.m_FaceIndex = i2759[0]
  i2758.m_FamilyName = i2759[1]
  i2758.m_StyleName = i2759[2]
  i2758.m_PointSize = i2759[3]
  i2758.m_Scale = i2759[4]
  i2758.m_UnitsPerEM = i2759[5]
  i2758.m_LineHeight = i2759[6]
  i2758.m_AscentLine = i2759[7]
  i2758.m_CapLine = i2759[8]
  i2758.m_MeanLine = i2759[9]
  i2758.m_Baseline = i2759[10]
  i2758.m_DescentLine = i2759[11]
  i2758.m_SuperscriptOffset = i2759[12]
  i2758.m_SuperscriptSize = i2759[13]
  i2758.m_SubscriptOffset = i2759[14]
  i2758.m_SubscriptSize = i2759[15]
  i2758.m_UnderlineOffset = i2759[16]
  i2758.m_UnderlineThickness = i2759[17]
  i2758.m_StrikethroughOffset = i2759[18]
  i2758.m_StrikethroughThickness = i2759[19]
  i2758.m_TabWidth = i2759[20]
  return i2758
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2760 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2761 = data
  var i2763 = i2761[0]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 2) {
  request.r(i2763[i + 0], i2763[i + 1], 2, i2762, '')
  }
  i2760.atlasAssets = i2762
  i2760.scale = i2761[1]
  request.r(i2761[2], i2761[3], 0, i2760, 'skeletonJSON')
  i2760.isUpgradingBlendModeMaterials = !!i2761[4]
  i2760.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2761[5], i2760.blendModeMaterials)
  var i2765 = i2761[6]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 1, i2764, '')
  }
  i2760.skeletonDataModifiers = i2764
  var i2767 = i2761[7]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( i2767[i + 0] );
  }
  i2760.fromAnimation = i2766
  var i2769 = i2761[8]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( i2769[i + 0] );
  }
  i2760.toAnimation = i2768
  i2760.duration = i2761[9]
  i2760.defaultMix = i2761[10]
  request.r(i2761[11], i2761[12], 0, i2760, 'controller')
  return i2760
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2772 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2773 = data
  i2772.applyAdditiveMaterial = !!i2773[0]
  var i2775 = i2773[1]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2775[i + 0]));
  }
  i2772.additiveMaterials = i2774
  var i2777 = i2773[2]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2777[i + 0]));
  }
  i2772.multiplyMaterials = i2776
  var i2779 = i2773[3]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2779[i + 0]));
  }
  i2772.screenMaterials = i2778
  i2772.requiresBlendModeMaterials = !!i2773[4]
  return i2772
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2782 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2783 = data
  i2782.pageName = i2783[0]
  request.r(i2783[1], i2783[2], 0, i2782, 'material')
  return i2782
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2786 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2787 = data
  request.r(i2787[0], i2787[1], 0, i2786, 'atlasFile')
  var i2789 = i2787[2]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 2) {
  request.r(i2789[i + 0], i2789[i + 1], 2, i2788, '')
  }
  i2786.materials = i2788
  return i2786
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2790 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2791 = data
  i2790.useSafeMode = !!i2791[0]
  i2790.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2791[1], i2790.safeModeOptions)
  i2790.timeScale = i2791[2]
  i2790.unscaledTimeScale = i2791[3]
  i2790.useSmoothDeltaTime = !!i2791[4]
  i2790.maxSmoothUnscaledTime = i2791[5]
  i2790.rewindCallbackMode = i2791[6]
  i2790.showUnityEditorReport = !!i2791[7]
  i2790.logBehaviour = i2791[8]
  i2790.drawGizmos = !!i2791[9]
  i2790.defaultRecyclable = !!i2791[10]
  i2790.defaultAutoPlay = i2791[11]
  i2790.defaultUpdateType = i2791[12]
  i2790.defaultTimeScaleIndependent = !!i2791[13]
  i2790.defaultEaseType = i2791[14]
  i2790.defaultEaseOvershootOrAmplitude = i2791[15]
  i2790.defaultEasePeriod = i2791[16]
  i2790.defaultAutoKill = !!i2791[17]
  i2790.defaultLoopType = i2791[18]
  i2790.debugMode = !!i2791[19]
  i2790.debugStoreTargetId = !!i2791[20]
  i2790.showPreviewPanel = !!i2791[21]
  i2790.storeSettingsLocation = i2791[22]
  i2790.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2791[23], i2790.modules)
  i2790.createASMDEF = !!i2791[24]
  i2790.showPlayingTweens = !!i2791[25]
  i2790.showPausedTweens = !!i2791[26]
  return i2790
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2792 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2793 = data
  i2792.logBehaviour = i2793[0]
  i2792.nestedTweenFailureBehaviour = i2793[1]
  return i2792
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2795 = data
  i2794.showPanel = !!i2795[0]
  i2794.audioEnabled = !!i2795[1]
  i2794.physicsEnabled = !!i2795[2]
  i2794.physics2DEnabled = !!i2795[3]
  i2794.spriteEnabled = !!i2795[4]
  i2794.uiEnabled = !!i2795[5]
  i2794.uiToolkitEnabled = !!i2795[6]
  i2794.textMeshProEnabled = !!i2795[7]
  i2794.tk2DEnabled = !!i2795[8]
  i2794.deAudioEnabled = !!i2795[9]
  i2794.deUnityExtendedEnabled = !!i2795[10]
  i2794.epoOutlineEnabled = !!i2795[11]
  return i2794
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2796 = root || request.c( 'TMPro.TMP_Settings' )
  var i2797 = data
  i2796.assetVersion = i2797[0]
  i2796.m_TextWrappingMode = i2797[1]
  i2796.m_enableKerning = !!i2797[2]
  var i2799 = i2797[3]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(i2799[i + 0]);
  }
  i2796.m_ActiveFontFeatures = i2798
  i2796.m_enableExtraPadding = !!i2797[4]
  i2796.m_enableTintAllSprites = !!i2797[5]
  i2796.m_enableParseEscapeCharacters = !!i2797[6]
  i2796.m_EnableRaycastTarget = !!i2797[7]
  i2796.m_GetFontFeaturesAtRuntime = !!i2797[8]
  i2796.m_missingGlyphCharacter = i2797[9]
  i2796.m_ClearDynamicDataOnBuild = !!i2797[10]
  i2796.m_warningsDisabled = !!i2797[11]
  request.r(i2797[12], i2797[13], 0, i2796, 'm_defaultFontAsset')
  i2796.m_defaultFontAssetPath = i2797[14]
  i2796.m_defaultFontSize = i2797[15]
  i2796.m_defaultAutoSizeMinRatio = i2797[16]
  i2796.m_defaultAutoSizeMaxRatio = i2797[17]
  i2796.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2797[18], i2797[19] )
  i2796.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2797[20], i2797[21] )
  i2796.m_autoSizeTextContainer = !!i2797[22]
  i2796.m_IsTextObjectScaleStatic = !!i2797[23]
  var i2801 = i2797[24]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2801.length; i += 2) {
  request.r(i2801[i + 0], i2801[i + 1], 1, i2800, '')
  }
  i2796.m_fallbackFontAssets = i2800
  i2796.m_matchMaterialPreset = !!i2797[25]
  i2796.m_HideSubTextObjects = !!i2797[26]
  request.r(i2797[27], i2797[28], 0, i2796, 'm_defaultSpriteAsset')
  i2796.m_defaultSpriteAssetPath = i2797[29]
  i2796.m_enableEmojiSupport = !!i2797[30]
  i2796.m_MissingCharacterSpriteUnicode = i2797[31]
  var i2803 = i2797[32]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2803.length; i += 2) {
  request.r(i2803[i + 0], i2803[i + 1], 1, i2802, '')
  }
  i2796.m_EmojiFallbackTextAssets = i2802
  i2796.m_defaultColorGradientPresetsPath = i2797[33]
  request.r(i2797[34], i2797[35], 0, i2796, 'm_defaultStyleSheet')
  i2796.m_StyleSheetsResourcePath = i2797[36]
  request.r(i2797[37], i2797[38], 0, i2796, 'm_leadingCharacters')
  request.r(i2797[39], i2797[40], 0, i2796, 'm_followingCharacters')
  i2796.m_UseModernHangulLineBreakingRules = !!i2797[41]
  return i2796
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2807 = data
  request.r(i2807[0], i2807[1], 0, i2806, 'spriteSheet')
  var i2809 = i2807[2]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.add(request.d('TMPro.TMP_Sprite', i2809[i + 0]));
  }
  i2806.spriteInfoList = i2808
  var i2811 = i2807[3]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2811.length; i += 2) {
  request.r(i2811[i + 0], i2811[i + 1], 1, i2810, '')
  }
  i2806.fallbackSpriteAssets = i2810
  var i2813 = i2807[4]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('TMPro.TMP_SpriteCharacter', i2813[i + 0]));
  }
  i2806.m_SpriteCharacterTable = i2812
  var i2815 = i2807[5]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.add(request.d('TMPro.TMP_SpriteGlyph', i2815[i + 0]));
  }
  i2806.m_GlyphTable = i2814
  i2806.m_Version = i2807[6]
  i2806.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2807[7], i2806.m_FaceInfo)
  request.r(i2807[8], i2807[9], 0, i2806, 'm_Material')
  return i2806
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.hashCode = i2819[1]
  i2818.unicode = i2819[2]
  i2818.pivot = new pc.Vec2( i2819[3], i2819[4] )
  request.r(i2819[5], i2819[6], 0, i2818, 'sprite')
  i2818.id = i2819[7]
  i2818.x = i2819[8]
  i2818.y = i2819[9]
  i2818.width = i2819[10]
  i2818.height = i2819[11]
  i2818.xOffset = i2819[12]
  i2818.yOffset = i2819[13]
  i2818.xAdvance = i2819[14]
  i2818.scale = i2819[15]
  return i2818
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2825 = data
  i2824.m_Name = i2825[0]
  i2824.m_ElementType = i2825[1]
  i2824.m_Unicode = i2825[2]
  i2824.m_GlyphIndex = i2825[3]
  i2824.m_Scale = i2825[4]
  return i2824
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2829 = data
  request.r(i2829[0], i2829[1], 0, i2828, 'sprite')
  i2828.m_Index = i2829[2]
  i2828.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2829[3], i2828.m_Metrics)
  i2828.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2829[4], i2828.m_GlyphRect)
  i2828.m_Scale = i2829[5]
  i2828.m_AtlasIndex = i2829[6]
  i2828.m_ClassDefinitionType = i2829[7]
  return i2828
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('TMPro.TMP_Style', i2833[i + 0]));
  }
  i2830.m_StyleList = i2832
  return i2830
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2836 = root || request.c( 'TMPro.TMP_Style' )
  var i2837 = data
  i2836.m_Name = i2837[0]
  i2836.m_HashCode = i2837[1]
  i2836.m_OpeningDefinition = i2837[2]
  i2836.m_ClosingDefinition = i2837[3]
  i2836.m_OpeningTagArray = i2837[4]
  i2836.m_ClosingTagArray = i2837[5]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2841[i + 0]) );
  }
  i2838.files = i2840
  i2838.componentToPrefabIds = i2839[1]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2845 = data
  i2844.path = i2845[0]
  request.r(i2845[1], i2845[2], 0, i2844, 'unityObject')
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2849[i + 0]) );
  }
  i2846.scriptsExecutionOrder = i2848
  var i2851 = i2847[1]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2851[i + 0]) );
  }
  i2846.sortingLayers = i2850
  var i2853 = i2847[2]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2853[i + 0]) );
  }
  i2846.cullingLayers = i2852
  i2846.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2847[3], i2846.timeSettings)
  i2846.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2847[4], i2846.physicsSettings)
  i2846.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2847[5], i2846.physics2DSettings)
  i2846.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2847[6], i2846.qualitySettings)
  i2846.enableRealtimeShadows = !!i2847[7]
  i2846.enableAutoInstancing = !!i2847[8]
  i2846.enableStaticBatching = !!i2847[9]
  i2846.enableDynamicBatching = !!i2847[10]
  i2846.lightmapEncodingQuality = i2847[11]
  i2846.desiredColorSpace = i2847[12]
  var i2855 = i2847[13]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( i2855[i + 0] );
  }
  i2846.allTags = i2854
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.value = i2859[1]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2863 = data
  i2862.id = i2863[0]
  i2862.name = i2863[1]
  i2862.value = i2863[2]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2867 = data
  i2866.id = i2867[0]
  i2866.name = i2867[1]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2869 = data
  i2868.fixedDeltaTime = i2869[0]
  i2868.maximumDeltaTime = i2869[1]
  i2868.timeScale = i2869[2]
  i2868.maximumParticleTimestep = i2869[3]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2871 = data
  i2870.gravity = new pc.Vec3( i2871[0], i2871[1], i2871[2] )
  i2870.defaultSolverIterations = i2871[3]
  i2870.bounceThreshold = i2871[4]
  i2870.autoSyncTransforms = !!i2871[5]
  i2870.autoSimulation = !!i2871[6]
  var i2873 = i2871[7]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2873[i + 0]) );
  }
  i2870.collisionMatrix = i2872
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2877 = data
  i2876.enabled = !!i2877[0]
  i2876.layerId = i2877[1]
  i2876.otherLayerId = i2877[2]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'material')
  i2878.gravity = new pc.Vec2( i2879[2], i2879[3] )
  i2878.positionIterations = i2879[4]
  i2878.velocityIterations = i2879[5]
  i2878.velocityThreshold = i2879[6]
  i2878.maxLinearCorrection = i2879[7]
  i2878.maxAngularCorrection = i2879[8]
  i2878.maxTranslationSpeed = i2879[9]
  i2878.maxRotationSpeed = i2879[10]
  i2878.baumgarteScale = i2879[11]
  i2878.baumgarteTOIScale = i2879[12]
  i2878.timeToSleep = i2879[13]
  i2878.linearSleepTolerance = i2879[14]
  i2878.angularSleepTolerance = i2879[15]
  i2878.defaultContactOffset = i2879[16]
  i2878.autoSimulation = !!i2879[17]
  i2878.queriesHitTriggers = !!i2879[18]
  i2878.queriesStartInColliders = !!i2879[19]
  i2878.callbacksOnDisable = !!i2879[20]
  i2878.reuseCollisionCallbacks = !!i2879[21]
  i2878.autoSyncTransforms = !!i2879[22]
  var i2881 = i2879[23]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2881[i + 0]) );
  }
  i2878.collisionMatrix = i2880
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2885 = data
  i2884.enabled = !!i2885[0]
  i2884.layerId = i2885[1]
  i2884.otherLayerId = i2885[2]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2887 = data
  var i2889 = i2887[0]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2889[i + 0]) );
  }
  i2886.qualityLevels = i2888
  var i2891 = i2887[1]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( i2891[i + 0] );
  }
  i2886.names = i2890
  i2886.shadows = i2887[2]
  i2886.anisotropicFiltering = i2887[3]
  i2886.antiAliasing = i2887[4]
  i2886.lodBias = i2887[5]
  i2886.shadowCascades = i2887[6]
  i2886.shadowDistance = i2887[7]
  i2886.shadowmaskMode = i2887[8]
  i2886.shadowProjection = i2887[9]
  i2886.shadowResolution = i2887[10]
  i2886.softParticles = !!i2887[11]
  i2886.softVegetation = !!i2887[12]
  i2886.activeColorSpace = i2887[13]
  i2886.desiredColorSpace = i2887[14]
  i2886.masterTextureLimit = i2887[15]
  i2886.maxQueuedFrames = i2887[16]
  i2886.particleRaycastBudget = i2887[17]
  i2886.pixelLightCount = i2887[18]
  i2886.realtimeReflectionProbes = !!i2887[19]
  i2886.shadowCascade2Split = i2887[20]
  i2886.shadowCascade4Split = new pc.Vec3( i2887[21], i2887[22], i2887[23] )
  i2886.streamingMipmapsActive = !!i2887[24]
  i2886.vSyncCount = i2887[25]
  i2886.asyncUploadBufferSize = i2887[26]
  i2886.asyncUploadTimeSlice = i2887[27]
  i2886.billboardsFaceCameraPosition = !!i2887[28]
  i2886.shadowNearPlaneOffset = i2887[29]
  i2886.streamingMipmapsMemoryBudget = i2887[30]
  i2886.maximumLODLevel = i2887[31]
  i2886.streamingMipmapsAddAllCameras = !!i2887[32]
  i2886.streamingMipmapsMaxLevelReduction = i2887[33]
  i2886.streamingMipmapsRenderersPerFrame = i2887[34]
  i2886.resolutionScalingFixedDPIFactor = i2887[35]
  i2886.streamingMipmapsMaxFileIORequests = i2887[36]
  i2886.currentQualityLevel = i2887[37]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2897 = data
  i2896.weight = i2897[0]
  i2896.vertices = i2897[1]
  i2896.normals = i2897[2]
  i2896.tangents = i2897[3]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2901 = data
  i2900.mode = i2901[0]
  i2900.parameter = i2901[1]
  i2900.threshold = i2901[2]
  return i2900
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2902 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2903 = data
  i2902.m_GlyphIndex = i2903[0]
  i2902.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2903[1], i2902.m_GlyphValueRecord)
  return i2902
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2904 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2905 = data
  i2904.m_XCoordinate = i2905[0]
  i2904.m_YCoordinate = i2905[1]
  return i2904
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2906 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2907 = data
  i2906.m_XPositionAdjustment = i2907[0]
  i2906.m_YPositionAdjustment = i2907[1]
  return i2906
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2908 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2909 = data
  i2908.xPlacement = i2909[0]
  i2908.yPlacement = i2909[1]
  i2908.xAdvance = i2909[2]
  i2908.yAdvance = i2909[3]
  return i2908
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2910 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2911 = data
  i2910.m_XPlacement = i2911[0]
  i2910.m_YPlacement = i2911[1]
  i2910.m_XAdvance = i2911[2]
  i2910.m_YAdvance = i2911[3]
  return i2910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[66],"67":[33],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[76],"84":[76],"85":[76],"86":[76],"87":[76],"88":[76],"89":[33],"90":[47],"91":[92],"93":[92],"11":[10],"94":[95],"96":[97],"98":[47,46],"99":[97],"100":[99],"101":[97],"102":[97],"103":[104],"105":[104],"106":[97],"107":[10],"108":[17,10],"45":[47],"109":[17,10],"110":[15,47],"97":[47],"111":[47,46],"112":[69],"113":[76],"114":[115],"116":[104],"117":[41],"118":[33],"119":[120],"121":[39],"122":[11],"123":[10],"124":[47,10],"18":[10,17],"125":[10],"126":[17,10],"127":[47],"128":[17,10],"129":[10],"130":[131],"132":[131],"133":[131],"134":[10],"135":[10],"14":[11],"21":[17,10],"136":[10],"13":[11],"137":[10],"138":[10],"139":[10],"140":[10],"141":[10],"142":[10],"143":[10],"144":[10],"145":[10],"146":[17,10],"147":[10],"148":[10],"149":[10],"20":[10],"150":[17,10],"151":[10],"152":[39],"153":[39],"40":[39],"154":[39],"155":[33],"156":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","PSD_Tool","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "36.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv26";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1852";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5172";

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

Deserializers.buildID = "97d838f1-00e4-4678-823b-675b2f3687f9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

