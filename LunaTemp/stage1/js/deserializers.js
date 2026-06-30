var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.JointSpring' )
  var i2197 = data
  i2196.spring = i2197[0]
  i2196.damper = i2197[1]
  i2196.targetPosition = i2197[2]
  return i2196
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointMotor' )
  var i2199 = data
  i2198.m_TargetVelocity = i2199[0]
  i2198.m_Force = i2199[1]
  i2198.m_FreeSpin = i2199[2]
  return i2198
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointLimits' )
  var i2201 = data
  i2200.m_Min = i2201[0]
  i2200.m_Max = i2201[1]
  i2200.m_Bounciness = i2201[2]
  i2200.m_BounceMinVelocity = i2201[3]
  i2200.m_ContactDistance = i2201[4]
  i2200.minBounce = i2201[5]
  i2200.maxBounce = i2201[6]
  return i2200
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointDrive' )
  var i2203 = data
  i2202.m_PositionSpring = i2203[0]
  i2202.m_PositionDamper = i2203[1]
  i2202.m_MaximumForce = i2203[2]
  i2202.m_UseAcceleration = i2203[3]
  return i2202
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2205 = data
  i2204.m_Spring = i2205[0]
  i2204.m_Damper = i2205[1]
  return i2204
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2207 = data
  i2206.m_Limit = i2207[0]
  i2206.m_Bounciness = i2207[1]
  i2206.m_ContactDistance = i2207[2]
  return i2206
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2209 = data
  i2208.m_ExtremumSlip = i2209[0]
  i2208.m_ExtremumValue = i2209[1]
  i2208.m_AsymptoteSlip = i2209[2]
  i2208.m_AsymptoteValue = i2209[3]
  i2208.m_Stiffness = i2209[4]
  return i2208
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2211 = data
  i2210.m_LowerAngle = i2211[0]
  i2210.m_UpperAngle = i2211[1]
  return i2210
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2213 = data
  i2212.m_MotorSpeed = i2213[0]
  i2212.m_MaximumMotorTorque = i2213[1]
  return i2212
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2215 = data
  i2214.m_DampingRatio = i2215[0]
  i2214.m_Frequency = i2215[1]
  i2214.m_Angle = i2215[2]
  return i2214
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2217 = data
  i2216.m_LowerTranslation = i2217[0]
  i2216.m_UpperTranslation = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2218 = root || new pc.UnityMaterial()
  var i2219 = data
  i2218.name = i2219[0]
  request.r(i2219[1], i2219[2], 0, i2218, 'shader')
  i2218.renderQueue = i2219[3]
  i2218.enableInstancing = !!i2219[4]
  var i2221 = i2219[5]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2221[i + 0]) );
  }
  i2218.floatParameters = i2220
  var i2223 = i2219[6]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2223[i + 0]) );
  }
  i2218.colorParameters = i2222
  var i2225 = i2219[7]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 1) {
    i2224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2225[i + 0]) );
  }
  i2218.vectorParameters = i2224
  var i2227 = i2219[8]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2227[i + 0]) );
  }
  i2218.textureParameters = i2226
  var i2229 = i2219[9]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2229[i + 0]) );
  }
  i2218.materialFlags = i2228
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2233 = data
  i2232.name = i2233[0]
  i2232.value = i2233[1]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.value = new pc.Color(i2237[1], i2237[2], i2237[3], i2237[4])
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.value = new pc.Vec4( i2241[1], i2241[2], i2241[3], i2241[4] )
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2245 = data
  i2244.name = i2245[0]
  request.r(i2245[1], i2245[2], 0, i2244, 'value')
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.enabled = !!i2249[1]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.width = i2251[1]
  i2250.height = i2251[2]
  i2250.mipmapCount = i2251[3]
  i2250.anisoLevel = i2251[4]
  i2250.filterMode = i2251[5]
  i2250.hdr = !!i2251[6]
  i2250.format = i2251[7]
  i2250.wrapMode = i2251[8]
  i2250.alphaIsTransparency = !!i2251[9]
  i2250.alphaSource = i2251[10]
  i2250.graphicsFormat = i2251[11]
  i2250.sRGBTexture = !!i2251[12]
  i2250.desiredColorSpace = i2251[13]
  i2250.wrapU = i2251[14]
  i2250.wrapV = i2251[15]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2253 = data
  i2252.position = new pc.Vec3( i2253[0], i2253[1], i2253[2] )
  i2252.scale = new pc.Vec3( i2253[3], i2253[4], i2253[5] )
  i2252.rotation = new pc.Quat(i2253[6], i2253[7], i2253[8], i2253[9])
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2255 = data
  i2254.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2255[0], i2254.main)
  i2254.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2255[1], i2254.colorBySpeed)
  i2254.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2255[2], i2254.colorOverLifetime)
  i2254.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2255[3], i2254.emission)
  i2254.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2255[4], i2254.rotationBySpeed)
  i2254.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2255[5], i2254.rotationOverLifetime)
  i2254.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2255[6], i2254.shape)
  i2254.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2255[7], i2254.sizeBySpeed)
  i2254.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2255[8], i2254.sizeOverLifetime)
  i2254.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2255[9], i2254.textureSheetAnimation)
  i2254.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2255[10], i2254.velocityOverLifetime)
  i2254.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2255[11], i2254.noise)
  i2254.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2255[12], i2254.inheritVelocity)
  i2254.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2255[13], i2254.forceOverLifetime)
  i2254.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2255[14], i2254.limitVelocityOverLifetime)
  i2254.useAutoRandomSeed = !!i2255[15]
  i2254.randomSeed = i2255[16]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemMain()
  var i2257 = data
  i2256.duration = i2257[0]
  i2256.loop = !!i2257[1]
  i2256.prewarm = !!i2257[2]
  i2256.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[3], i2256.startDelay)
  i2256.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[4], i2256.startLifetime)
  i2256.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[5], i2256.startSpeed)
  i2256.startSize3D = !!i2257[6]
  i2256.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.startSizeX)
  i2256.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[8], i2256.startSizeY)
  i2256.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[9], i2256.startSizeZ)
  i2256.startRotation3D = !!i2257[10]
  i2256.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[11], i2256.startRotationX)
  i2256.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[12], i2256.startRotationY)
  i2256.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[13], i2256.startRotationZ)
  i2256.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2257[14], i2256.startColor)
  i2256.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[15], i2256.gravityModifier)
  i2256.simulationSpace = i2257[16]
  request.r(i2257[17], i2257[18], 0, i2256, 'customSimulationSpace')
  i2256.simulationSpeed = i2257[19]
  i2256.useUnscaledTime = !!i2257[20]
  i2256.scalingMode = i2257[21]
  i2256.playOnAwake = !!i2257[22]
  i2256.maxParticles = i2257[23]
  i2256.emitterVelocityMode = i2257[24]
  i2256.stopAction = i2257[25]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2258 = root || new pc.MinMaxCurve()
  var i2259 = data
  i2258.mode = i2259[0]
  i2258.curveMin = new pc.AnimationCurve( { keys_flow: i2259[1] } )
  i2258.curveMax = new pc.AnimationCurve( { keys_flow: i2259[2] } )
  i2258.curveMultiplier = i2259[3]
  i2258.constantMin = i2259[4]
  i2258.constantMax = i2259[5]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2260 = root || new pc.MinMaxGradient()
  var i2261 = data
  i2260.mode = i2261[0]
  i2260.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[1], i2260.gradientMin)
  i2260.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[2], i2260.gradientMax)
  i2260.colorMin = new pc.Color(i2261[3], i2261[4], i2261[5], i2261[6])
  i2260.colorMax = new pc.Color(i2261[7], i2261[8], i2261[9], i2261[10])
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2263 = data
  i2262.mode = i2263[0]
  var i2265 = i2263[1]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2265[i + 0]) );
  }
  i2262.colorKeys = i2264
  var i2267 = i2263[2]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2267[i + 0]) );
  }
  i2262.alphaKeys = i2266
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemColorBySpeed()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2269[1], i2268.color)
  i2268.range = new pc.Vec2( i2269[2], i2269[3] )
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2273 = data
  i2272.color = new pc.Color(i2273[0], i2273[1], i2273[2], i2273[3])
  i2272.time = i2273[4]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2277 = data
  i2276.alpha = i2277[0]
  i2276.time = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemColorOverLifetime()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2279[1], i2278.color)
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemEmitter()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.rateOverTime)
  i2280.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.rateOverDistance)
  var i2283 = i2281[3]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2283[i + 0]) );
  }
  i2280.bursts = i2282
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemBurst()
  var i2287 = data
  i2286.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[0], i2286.count)
  i2286.cycleCount = i2287[1]
  i2286.minCount = i2287[2]
  i2286.maxCount = i2287[3]
  i2286.repeatInterval = i2287[4]
  i2286.time = i2287[5]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemRotationBySpeed()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[1], i2288.x)
  i2288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[2], i2288.y)
  i2288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[3], i2288.z)
  i2288.separateAxes = !!i2289[4]
  i2288.range = new pc.Vec2( i2289[5], i2289[6] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.x)
  i2290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.y)
  i2290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[3], i2290.z)
  i2290.separateAxes = !!i2291[4]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemShape()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.shapeType = i2293[1]
  i2292.randomDirectionAmount = i2293[2]
  i2292.sphericalDirectionAmount = i2293[3]
  i2292.randomPositionAmount = i2293[4]
  i2292.alignToDirection = !!i2293[5]
  i2292.radius = i2293[6]
  i2292.radiusMode = i2293[7]
  i2292.radiusSpread = i2293[8]
  i2292.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[9], i2292.radiusSpeed)
  i2292.radiusThickness = i2293[10]
  i2292.angle = i2293[11]
  i2292.length = i2293[12]
  i2292.boxThickness = new pc.Vec3( i2293[13], i2293[14], i2293[15] )
  i2292.meshShapeType = i2293[16]
  request.r(i2293[17], i2293[18], 0, i2292, 'mesh')
  request.r(i2293[19], i2293[20], 0, i2292, 'meshRenderer')
  request.r(i2293[21], i2293[22], 0, i2292, 'skinnedMeshRenderer')
  i2292.useMeshMaterialIndex = !!i2293[23]
  i2292.meshMaterialIndex = i2293[24]
  i2292.useMeshColors = !!i2293[25]
  i2292.normalOffset = i2293[26]
  i2292.arc = i2293[27]
  i2292.arcMode = i2293[28]
  i2292.arcSpread = i2293[29]
  i2292.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[30], i2292.arcSpeed)
  i2292.donutRadius = i2293[31]
  i2292.position = new pc.Vec3( i2293[32], i2293[33], i2293[34] )
  i2292.rotation = new pc.Vec3( i2293[35], i2293[36], i2293[37] )
  i2292.scale = new pc.Vec3( i2293[38], i2293[39], i2293[40] )
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemSizeBySpeed()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[1], i2294.x)
  i2294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[2], i2294.y)
  i2294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[3], i2294.z)
  i2294.separateAxes = !!i2295[4]
  i2294.range = new pc.Vec2( i2295[5], i2295[6] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[1], i2296.x)
  i2296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.y)
  i2296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[3], i2296.z)
  i2296.separateAxes = !!i2297[4]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.mode = i2299[1]
  i2298.animation = i2299[2]
  i2298.numTilesX = i2299[3]
  i2298.numTilesY = i2299[4]
  i2298.useRandomRow = !!i2299[5]
  i2298.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[6], i2298.frameOverTime)
  i2298.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[7], i2298.startFrame)
  i2298.cycleCount = i2299[8]
  i2298.rowIndex = i2299[9]
  i2298.flipU = i2299[10]
  i2298.flipV = i2299[11]
  i2298.spriteCount = i2299[12]
  var i2301 = i2299[13]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.sprites = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.x)
  i2304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.y)
  i2304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.z)
  i2304.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[4], i2304.radial)
  i2304.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[5], i2304.speedModifier)
  i2304.space = i2305[6]
  i2304.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[7], i2304.orbitalX)
  i2304.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[8], i2304.orbitalY)
  i2304.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[9], i2304.orbitalZ)
  i2304.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[10], i2304.orbitalOffsetX)
  i2304.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[11], i2304.orbitalOffsetY)
  i2304.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[12], i2304.orbitalOffsetZ)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemNoise()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.separateAxes = !!i2307[1]
  i2306.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.strengthX)
  i2306.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.strengthY)
  i2306.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[4], i2306.strengthZ)
  i2306.frequency = i2307[5]
  i2306.damping = !!i2307[6]
  i2306.octaveCount = i2307[7]
  i2306.octaveMultiplier = i2307[8]
  i2306.octaveScale = i2307[9]
  i2306.quality = i2307[10]
  i2306.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[11], i2306.scrollSpeed)
  i2306.scrollSpeedMultiplier = i2307[12]
  i2306.remapEnabled = !!i2307[13]
  i2306.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[14], i2306.remapX)
  i2306.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[15], i2306.remapY)
  i2306.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[16], i2306.remapZ)
  i2306.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[17], i2306.positionAmount)
  i2306.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[18], i2306.rotationAmount)
  i2306.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[19], i2306.sizeAmount)
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemInheritVelocity()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.mode = i2309[1]
  i2308.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.curve)
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemForceOverLifetime()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[1], i2310.x)
  i2310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[2], i2310.y)
  i2310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[3], i2310.z)
  i2310.space = i2311[4]
  i2310.randomized = !!i2311[5]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.limit)
  i2312.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.limitX)
  i2312.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.limitY)
  i2312.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[4], i2312.limitZ)
  i2312.dampen = i2313[5]
  i2312.separateAxes = !!i2313[6]
  i2312.space = i2313[7]
  i2312.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[8], i2312.drag)
  i2312.multiplyDragByParticleSize = !!i2313[9]
  i2312.multiplyDragByParticleVelocity = !!i2313[10]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'mesh')
  i2314.meshCount = i2315[2]
  i2314.activeVertexStreamsCount = i2315[3]
  i2314.alignment = i2315[4]
  i2314.renderMode = i2315[5]
  i2314.sortMode = i2315[6]
  i2314.lengthScale = i2315[7]
  i2314.velocityScale = i2315[8]
  i2314.cameraVelocityScale = i2315[9]
  i2314.normalDirection = i2315[10]
  i2314.sortingFudge = i2315[11]
  i2314.minParticleSize = i2315[12]
  i2314.maxParticleSize = i2315[13]
  i2314.pivot = new pc.Vec3( i2315[14], i2315[15], i2315[16] )
  request.r(i2315[17], i2315[18], 0, i2314, 'trailMaterial')
  i2314.applyActiveColorSpace = !!i2315[19]
  i2314.enabled = !!i2315[20]
  request.r(i2315[21], i2315[22], 0, i2314, 'sharedMaterial')
  var i2317 = i2315[23]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.sharedMaterials = i2316
  i2314.receiveShadows = !!i2315[24]
  i2314.shadowCastingMode = i2315[25]
  i2314.sortingLayerID = i2315[26]
  i2314.sortingOrder = i2315[27]
  i2314.lightmapIndex = i2315[28]
  i2314.lightmapSceneIndex = i2315[29]
  i2314.lightmapScaleOffset = new pc.Vec4( i2315[30], i2315[31], i2315[32], i2315[33] )
  i2314.lightProbeUsage = i2315[34]
  i2314.reflectionProbeUsage = i2315[35]
  return i2314
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2320 = root || request.c( 'MergeEffect' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'tf')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2323 = data
  i2322.name = i2323[0]
  i2322.tagId = i2323[1]
  i2322.enabled = !!i2323[2]
  i2322.isStatic = !!i2323[3]
  i2322.layer = i2323[4]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2325 = data
  i2324.name = i2325[0]
  i2324.halfPrecision = !!i2325[1]
  i2324.useSimplification = !!i2325[2]
  i2324.useUInt32IndexFormat = !!i2325[3]
  i2324.vertexCount = i2325[4]
  i2324.aabb = i2325[5]
  var i2327 = i2325[6]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( !!i2327[i + 0] );
  }
  i2324.streams = i2326
  i2324.vertices = i2325[7]
  var i2329 = i2325[8]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2329[i + 0]) );
  }
  i2324.subMeshes = i2328
  var i2331 = i2325[9]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 16) {
    i2330.push( new pc.Mat4().setData(i2331[i + 0], i2331[i + 1], i2331[i + 2], i2331[i + 3],  i2331[i + 4], i2331[i + 5], i2331[i + 6], i2331[i + 7],  i2331[i + 8], i2331[i + 9], i2331[i + 10], i2331[i + 11],  i2331[i + 12], i2331[i + 13], i2331[i + 14], i2331[i + 15]) );
  }
  i2324.bindposes = i2330
  var i2333 = i2325[10]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2333[i + 0]) );
  }
  i2324.blendShapes = i2332
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2339 = data
  i2338.triangles = i2339[0]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2345 = data
  i2344.name = i2345[0]
  var i2347 = i2345[1]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2347[i + 0]) );
  }
  i2344.frames = i2346
  return i2344
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2348 = root || request.c( 'BlinkEffect' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'tf')
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.index = i2351[1]
  i2350.startup = !!i2351[2]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2353 = data
  i2352.pivot = new pc.Vec2( i2353[0], i2353[1] )
  i2352.anchorMin = new pc.Vec2( i2353[2], i2353[3] )
  i2352.anchorMax = new pc.Vec2( i2353[4], i2353[5] )
  i2352.sizeDelta = new pc.Vec2( i2353[6], i2353[7] )
  i2352.anchoredPosition3D = new pc.Vec3( i2353[8], i2353[9], i2353[10] )
  i2352.rotation = new pc.Quat(i2353[11], i2353[12], i2353[13], i2353[14])
  i2352.scale = new pc.Vec3( i2353[15], i2353[16], i2353[17] )
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2355 = data
  i2354.planeDistance = i2355[0]
  i2354.referencePixelsPerUnit = i2355[1]
  i2354.isFallbackOverlay = !!i2355[2]
  i2354.renderMode = i2355[3]
  i2354.renderOrder = i2355[4]
  i2354.sortingLayerName = i2355[5]
  i2354.sortingOrder = i2355[6]
  i2354.scaleFactor = i2355[7]
  request.r(i2355[8], i2355[9], 0, i2354, 'worldCamera')
  i2354.overrideSorting = !!i2355[10]
  i2354.pixelPerfect = !!i2355[11]
  i2354.targetDisplay = i2355[12]
  i2354.overridePixelPerfect = !!i2355[13]
  i2354.enabled = !!i2355[14]
  return i2354
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2357 = data
  i2356.m_UiScaleMode = i2357[0]
  i2356.m_ReferencePixelsPerUnit = i2357[1]
  i2356.m_ScaleFactor = i2357[2]
  i2356.m_ReferenceResolution = new pc.Vec2( i2357[3], i2357[4] )
  i2356.m_ScreenMatchMode = i2357[5]
  i2356.m_MatchWidthOrHeight = i2357[6]
  i2356.m_PhysicalUnit = i2357[7]
  i2356.m_FallbackScreenDPI = i2357[8]
  i2356.m_DefaultSpriteDPI = i2357[9]
  i2356.m_DynamicPixelsPerUnit = i2357[10]
  i2356.m_PresetInfoIsWorld = !!i2357[11]
  return i2356
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2359 = data
  i2358.m_IgnoreReversedGraphics = !!i2359[0]
  i2358.m_BlockingObjects = i2359[1]
  i2358.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2359[2] )
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2361 = data
  request.r(i2361[0], i2361[1], 0, i2360, 'animatorController')
  request.r(i2361[2], i2361[3], 0, i2360, 'avatar')
  i2360.updateMode = i2361[4]
  i2360.hasTransformHierarchy = !!i2361[5]
  i2360.applyRootMotion = !!i2361[6]
  var i2363 = i2361[7]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2360.humanBones = i2362
  i2360.enabled = !!i2361[8]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2367 = data
  i2366.cullTransparentMesh = !!i2367[0]
  return i2366
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2368 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2369 = data
  i2368.m_hasFontAssetChanged = !!i2369[0]
  request.r(i2369[1], i2369[2], 0, i2368, 'm_baseMaterial')
  i2368.m_maskOffset = new pc.Vec4( i2369[3], i2369[4], i2369[5], i2369[6] )
  i2368.m_text = i2369[7]
  i2368.m_isRightToLeft = !!i2369[8]
  request.r(i2369[9], i2369[10], 0, i2368, 'm_fontAsset')
  request.r(i2369[11], i2369[12], 0, i2368, 'm_sharedMaterial')
  var i2371 = i2369[13]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2368.m_fontSharedMaterials = i2370
  request.r(i2369[14], i2369[15], 0, i2368, 'm_fontMaterial')
  var i2373 = i2369[16]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2368.m_fontMaterials = i2372
  i2368.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2369[17], i2369[18], i2369[19], i2369[20])
  i2368.m_fontColor = new pc.Color(i2369[21], i2369[22], i2369[23], i2369[24])
  i2368.m_enableVertexGradient = !!i2369[25]
  i2368.m_colorMode = i2369[26]
  i2368.m_fontColorGradient = request.d('TMPro.VertexGradient', i2369[27], i2368.m_fontColorGradient)
  request.r(i2369[28], i2369[29], 0, i2368, 'm_fontColorGradientPreset')
  request.r(i2369[30], i2369[31], 0, i2368, 'm_spriteAsset')
  i2368.m_tintAllSprites = !!i2369[32]
  request.r(i2369[33], i2369[34], 0, i2368, 'm_StyleSheet')
  i2368.m_TextStyleHashCode = i2369[35]
  i2368.m_overrideHtmlColors = !!i2369[36]
  i2368.m_faceColor = UnityEngine.Color32.ConstructColor(i2369[37], i2369[38], i2369[39], i2369[40])
  i2368.m_fontSize = i2369[41]
  i2368.m_fontSizeBase = i2369[42]
  i2368.m_fontWeight = i2369[43]
  i2368.m_enableAutoSizing = !!i2369[44]
  i2368.m_fontSizeMin = i2369[45]
  i2368.m_fontSizeMax = i2369[46]
  i2368.m_fontStyle = i2369[47]
  i2368.m_HorizontalAlignment = i2369[48]
  i2368.m_VerticalAlignment = i2369[49]
  i2368.m_textAlignment = i2369[50]
  i2368.m_characterSpacing = i2369[51]
  i2368.m_wordSpacing = i2369[52]
  i2368.m_lineSpacing = i2369[53]
  i2368.m_lineSpacingMax = i2369[54]
  i2368.m_paragraphSpacing = i2369[55]
  i2368.m_charWidthMaxAdj = i2369[56]
  i2368.m_TextWrappingMode = i2369[57]
  i2368.m_wordWrappingRatios = i2369[58]
  i2368.m_overflowMode = i2369[59]
  request.r(i2369[60], i2369[61], 0, i2368, 'm_linkedTextComponent')
  request.r(i2369[62], i2369[63], 0, i2368, 'parentLinkedComponent')
  i2368.m_enableKerning = !!i2369[64]
  var i2375 = i2369[65]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.add(i2375[i + 0]);
  }
  i2368.m_ActiveFontFeatures = i2374
  i2368.m_enableExtraPadding = !!i2369[66]
  i2368.checkPaddingRequired = !!i2369[67]
  i2368.m_isRichText = !!i2369[68]
  i2368.m_parseCtrlCharacters = !!i2369[69]
  i2368.m_isOrthographic = !!i2369[70]
  i2368.m_isCullingEnabled = !!i2369[71]
  i2368.m_horizontalMapping = i2369[72]
  i2368.m_verticalMapping = i2369[73]
  i2368.m_uvLineOffset = i2369[74]
  i2368.m_geometrySortingOrder = i2369[75]
  i2368.m_IsTextObjectScaleStatic = !!i2369[76]
  i2368.m_VertexBufferAutoSizeReduction = !!i2369[77]
  i2368.m_useMaxVisibleDescender = !!i2369[78]
  i2368.m_pageToDisplay = i2369[79]
  i2368.m_margin = new pc.Vec4( i2369[80], i2369[81], i2369[82], i2369[83] )
  i2368.m_isUsingLegacyAnimationComponent = !!i2369[84]
  i2368.m_isVolumetricText = !!i2369[85]
  request.r(i2369[86], i2369[87], 0, i2368, 'm_Material')
  i2368.m_EmojiFallbackSupport = !!i2369[88]
  i2368.m_Maskable = !!i2369[89]
  i2368.m_Color = new pc.Color(i2369[90], i2369[91], i2369[92], i2369[93])
  i2368.m_RaycastTarget = !!i2369[94]
  i2368.m_RaycastPadding = new pc.Vec4( i2369[95], i2369[96], i2369[97], i2369[98] )
  return i2368
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2376 = root || request.c( 'TMPro.VertexGradient' )
  var i2377 = data
  i2376.topLeft = new pc.Color(i2377[0], i2377[1], i2377[2], i2377[3])
  i2376.topRight = new pc.Color(i2377[4], i2377[5], i2377[6], i2377[7])
  i2376.bottomLeft = new pc.Color(i2377[8], i2377[9], i2377[10], i2377[11])
  i2376.bottomRight = new pc.Color(i2377[12], i2377[13], i2377[14], i2377[15])
  return i2376
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_FillRect')
  request.r(i2381[2], i2381[3], 0, i2380, 'm_HandleRect')
  i2380.m_Direction = i2381[4]
  i2380.m_MinValue = i2381[5]
  i2380.m_MaxValue = i2381[6]
  i2380.m_WholeNumbers = !!i2381[7]
  i2380.m_Value = i2381[8]
  i2380.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2381[9], i2380.m_OnValueChanged)
  i2380.m_Navigation = request.d('UnityEngine.UI.Navigation', i2381[10], i2380.m_Navigation)
  i2380.m_Transition = i2381[11]
  i2380.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2381[12], i2380.m_Colors)
  i2380.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2381[13], i2380.m_SpriteState)
  i2380.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2381[14], i2380.m_AnimationTriggers)
  i2380.m_Interactable = !!i2381[15]
  request.r(i2381[16], i2381[17], 0, i2380, 'm_TargetGraphic')
  return i2380
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2383 = data
  i2382.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2383[0], i2382.m_PersistentCalls)
  return i2382
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2385 = data
  var i2387 = i2385[0]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2387.length; i += 1) {
    i2386.add(request.d('UnityEngine.Events.PersistentCall', i2387[i + 0]));
  }
  i2384.m_Calls = i2386
  return i2384
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'm_Target')
  i2390.m_TargetAssemblyTypeName = i2391[2]
  i2390.m_MethodName = i2391[3]
  i2390.m_Mode = i2391[4]
  i2390.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2391[5], i2390.m_Arguments)
  i2390.m_CallState = i2391[6]
  return i2390
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2393 = data
  i2392.m_Mode = i2393[0]
  i2392.m_WrapAround = !!i2393[1]
  request.r(i2393[2], i2393[3], 0, i2392, 'm_SelectOnUp')
  request.r(i2393[4], i2393[5], 0, i2392, 'm_SelectOnDown')
  request.r(i2393[6], i2393[7], 0, i2392, 'm_SelectOnLeft')
  request.r(i2393[8], i2393[9], 0, i2392, 'm_SelectOnRight')
  return i2392
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2395 = data
  i2394.m_NormalColor = new pc.Color(i2395[0], i2395[1], i2395[2], i2395[3])
  i2394.m_HighlightedColor = new pc.Color(i2395[4], i2395[5], i2395[6], i2395[7])
  i2394.m_PressedColor = new pc.Color(i2395[8], i2395[9], i2395[10], i2395[11])
  i2394.m_SelectedColor = new pc.Color(i2395[12], i2395[13], i2395[14], i2395[15])
  i2394.m_DisabledColor = new pc.Color(i2395[16], i2395[17], i2395[18], i2395[19])
  i2394.m_ColorMultiplier = i2395[20]
  i2394.m_FadeDuration = i2395[21]
  return i2394
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'm_HighlightedSprite')
  request.r(i2397[2], i2397[3], 0, i2396, 'm_PressedSprite')
  request.r(i2397[4], i2397[5], 0, i2396, 'm_SelectedSprite')
  request.r(i2397[6], i2397[7], 0, i2396, 'm_DisabledSprite')
  return i2396
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2399 = data
  i2398.m_NormalTrigger = i2399[0]
  i2398.m_HighlightedTrigger = i2399[1]
  i2398.m_PressedTrigger = i2399[2]
  i2398.m_SelectedTrigger = i2399[3]
  i2398.m_DisabledTrigger = i2399[4]
  return i2398
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.Image' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'm_Sprite')
  i2400.m_Type = i2401[2]
  i2400.m_PreserveAspect = !!i2401[3]
  i2400.m_FillCenter = !!i2401[4]
  i2400.m_FillMethod = i2401[5]
  i2400.m_FillAmount = i2401[6]
  i2400.m_FillClockwise = !!i2401[7]
  i2400.m_FillOrigin = i2401[8]
  i2400.m_UseSpriteMesh = !!i2401[9]
  i2400.m_PixelsPerUnitMultiplier = i2401[10]
  request.r(i2401[11], i2401[12], 0, i2400, 'm_Material')
  i2400.m_Maskable = !!i2401[13]
  i2400.m_Color = new pc.Color(i2401[14], i2401[15], i2401[16], i2401[17])
  i2400.m_RaycastTarget = !!i2401[18]
  i2400.m_RaycastPadding = new pc.Vec4( i2401[19], i2401[20], i2401[21], i2401[22] )
  return i2400
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.UI.Button' )
  var i2403 = data
  i2402.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2403[0], i2402.m_OnClick)
  i2402.m_Navigation = request.d('UnityEngine.UI.Navigation', i2403[1], i2402.m_Navigation)
  i2402.m_Transition = i2403[2]
  i2402.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2403[3], i2402.m_Colors)
  i2402.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2403[4], i2402.m_SpriteState)
  i2402.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2403[5], i2402.m_AnimationTriggers)
  i2402.m_Interactable = !!i2403[6]
  request.r(i2403[7], i2403[8], 0, i2402, 'm_TargetGraphic')
  return i2402
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2405 = data
  i2404.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2405[0], i2404.m_PersistentCalls)
  return i2404
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'm_ObjectArgument')
  i2406.m_ObjectArgumentAssemblyTypeName = i2407[2]
  i2406.m_IntArgument = i2407[3]
  i2406.m_FloatArgument = i2407[4]
  i2406.m_StringArgument = i2407[5]
  i2406.m_BoolArgument = !!i2407[6]
  return i2406
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2408 = root || request.c( 'Ply_Pool' )
  var i2409 = data
  var i2411 = i2409[0]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( request.d('Ply_Pool+PoolAmount', i2411[i + 0]) );
  }
  i2408.poolAmounts = i2410
  request.r(i2409[1], i2409[2], 0, i2408, 'poolHolder')
  return i2408
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2414 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2415 = data
  i2414.type = i2415[0]
  i2414.amount = i2415[1]
  request.r(i2415[2], i2415[3], 0, i2414, 'gameUnit')
  return i2414
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2416 = root || request.c( 'Ply_SoundManager' )
  var i2417 = data
  var i2419 = i2417[0]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Ply_SoundManager+FxAudio', i2419[i + 0]) );
  }
  i2416.fxAudios = i2418
  var i2421 = i2417[1]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 2) {
  request.r(i2421[i + 0], i2421[i + 1], 2, i2420, '')
  }
  i2416.audioClips = i2420
  request.r(i2417[2], i2417[3], 0, i2416, 'sound')
  return i2416
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2424 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2425 = data
  i2424.fxType = i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'audioClip')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'clip')
  request.r(i2429[2], i2429[3], 0, i2428, 'outputAudioMixerGroup')
  i2428.playOnAwake = !!i2429[4]
  i2428.loop = !!i2429[5]
  i2428.time = i2429[6]
  i2428.volume = i2429[7]
  i2428.pitch = i2429[8]
  i2428.enabled = !!i2429[9]
  return i2428
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2430 = root || request.c( 'GameManager' )
  var i2431 = data
  i2430.isPlaying = !!i2431[0]
  i2430.isTutorial = !!i2431[1]
  i2430.isGotoStore = !!i2431[2]
  i2430.isDraggingConveyor = !!i2431[3]
  i2430.countMove = i2431[4]
  i2430.maxMove = i2431[5]
  i2430.startLayer = i2431[6]
  i2430.currentLayer = i2431[7]
  request.r(i2431[8], i2431[9], 0, i2430, 'mainBox')
  request.r(i2431[10], i2431[11], 0, i2430, 'itemConveyor')
  request.r(i2431[12], i2431[13], 0, i2430, 'handTutorial')
  i2430.tutorialDelay = i2431[14]
  return i2430
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2432 = root || request.c( 'UIManager' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'winUI')
  request.r(i2433[2], i2433[3], 0, i2432, 'loseUI')
  request.r(i2433[4], i2433[5], 0, i2432, 'tutorial')
  request.r(i2433[6], i2433[7], 0, i2432, 'verticalUI')
  request.r(i2433[8], i2433[9], 0, i2432, 'horizontalUI')
  request.r(i2433[10], i2433[11], 0, i2432, 'downloadBtnVertical')
  request.r(i2433[12], i2433[13], 0, i2432, 'dowloadBtnHorizontal')
  request.r(i2433[14], i2433[15], 0, i2432, 'textAnim')
  i2432.isGoogleBuild = !!i2433[16]
  request.r(i2433[17], i2433[18], 0, i2432, 'progressSlider')
  request.r(i2433[19], i2433[20], 0, i2432, 'progressText')
  i2432.maxProgressItems = i2433[21]
  i2432.startProgressItems = i2433[22]
  i2432.screenWidth = i2433[23]
  i2432.screenHeight = i2433[24]
  i2432.scaleHeightOnWidth = i2433[25]
  i2432.isVertical = !!i2433[26]
  i2432.isScreenVertical = !!i2433[27]
  request.r(i2433[28], i2433[29], 0, i2432, 'cam')
  i2432.verticalUIHeightOnWidthRatio = i2433[30]
  i2432.screenVerticalHeightOnWidthRatio = i2433[31]
  i2432.introZoomOutMultiplier = i2433[32]
  i2432.cameraZoomDuration = i2433[33]
  i2432.useContinuousScaling = !!i2433[34]
  i2432.baseOrthographicSize = i2433[35]
  i2432.baseAspect = i2433[36]
  i2432.landscapeSize = i2433[37]
  i2432.defaultPortraitSize = i2433[38]
  var i2435 = i2433[39]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.add(request.d('ScreenScaleStep', i2435[i + 0]));
  }
  i2432.discreteScaleSteps = i2434
  i2432.usePerspectiveCamera = !!i2433[40]
  request.r(i2433[41], i2433[42], 0, i2432, 'perspectiveFocus')
  i2432.perspectiveFocusDistance = i2433[43]
  i2432.perspectivePadding = i2433[44]
  i2432.fitRendererBounds = !!i2433[45]
  request.r(i2433[46], i2433[47], 0, i2432, 'boundsRoot')
  var i2437 = i2433[48]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 1, i2436, '')
  }
  i2432.boundsRenderers = i2436
  return i2432
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2440 = root || request.c( 'ScreenScaleStep' )
  var i2441 = data
  i2440.heightOnWidthRatio = i2441[0]
  i2440.orthographicSize = i2441[1]
  return i2440
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2444 = root || request.c( 'InputManager' )
  var i2445 = data
  i2444.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2445[0] )
  i2444.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i2445[1] )
  i2444.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2445[2] )
  i2444.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i2445[3] )
  i2444.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i2445[4] )
  i2444.isDragging = !!i2445[5]
  request.r(i2445[6], i2445[7], 0, i2444, 'mainCamera')
  return i2444
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2446 = root || request.c( 'CameraController' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'targetCamera')
  i2446.enableZoom = !!i2447[2]
  i2446.minZoomRatio = i2447[3]
  i2446.maxZoomRatio = i2447[4]
  i2446.mouseWheelZoomSpeed = i2447[5]
  i2446.pinchZoomSpeed = i2447[6]
  request.r(i2447[7], i2447[8], 0, i2446, 'conveyor')
  i2446.enableDrag = !!i2447[9]
  i2446.horizontalOnly = !!i2447[10]
  i2446.dragSensitivity = i2447[11]
  i2446.maxHorizontalOffset = i2447[12]
  i2446.maxVerticalOffset = i2447[13]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2449 = data
  i2448.aspect = i2449[0]
  i2448.orthographic = !!i2449[1]
  i2448.orthographicSize = i2449[2]
  i2448.backgroundColor = new pc.Color(i2449[3], i2449[4], i2449[5], i2449[6])
  i2448.nearClipPlane = i2449[7]
  i2448.farClipPlane = i2449[8]
  i2448.fieldOfView = i2449[9]
  i2448.depth = i2449[10]
  i2448.clearFlags = i2449[11]
  i2448.cullingMask = i2449[12]
  i2448.rect = i2449[13]
  request.r(i2449[14], i2449[15], 0, i2448, 'targetTexture')
  i2448.usePhysicalProperties = !!i2449[16]
  i2448.focalLength = i2449[17]
  i2448.sensorSize = new pc.Vec2( i2449[18], i2449[19] )
  i2448.lensShift = new pc.Vec2( i2449[20], i2449[21] )
  i2448.gateFit = i2449[22]
  i2448.commandBufferCount = i2449[23]
  i2448.cameraType = i2449[24]
  i2448.enabled = !!i2449[25]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2451 = data
  i2450.type = i2451[0]
  i2450.color = new pc.Color(i2451[1], i2451[2], i2451[3], i2451[4])
  i2450.cullingMask = i2451[5]
  i2450.intensity = i2451[6]
  i2450.range = i2451[7]
  i2450.spotAngle = i2451[8]
  i2450.shadows = i2451[9]
  i2450.shadowNormalBias = i2451[10]
  i2450.shadowBias = i2451[11]
  i2450.shadowStrength = i2451[12]
  i2450.shadowResolution = i2451[13]
  i2450.lightmapBakeType = i2451[14]
  i2450.renderMode = i2451[15]
  request.r(i2451[16], i2451[17], 0, i2450, 'cookie')
  i2450.cookieSize = i2451[18]
  i2450.shadowNearPlane = i2451[19]
  i2450.occlusionMaskChannel = i2451[20]
  i2450.enabled = !!i2451[21]
  return i2450
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'm_FirstSelected')
  i2452.m_sendNavigationEvents = !!i2453[2]
  i2452.m_DragThreshold = i2453[3]
  return i2452
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2454 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2455 = data
  i2454.m_HorizontalAxis = i2455[0]
  i2454.m_VerticalAxis = i2455[1]
  i2454.m_SubmitButton = i2455[2]
  i2454.m_CancelButton = i2455[3]
  i2454.m_InputActionsPerSecond = i2455[4]
  i2454.m_RepeatDelay = i2455[5]
  i2454.m_ForceModuleActive = !!i2455[6]
  i2454.m_SendPointerHoverToParent = !!i2455[7]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2457 = data
  i2456.color = new pc.Color(i2457[0], i2457[1], i2457[2], i2457[3])
  request.r(i2457[4], i2457[5], 0, i2456, 'sprite')
  i2456.flipX = !!i2457[6]
  i2456.flipY = !!i2457[7]
  i2456.drawMode = i2457[8]
  i2456.size = new pc.Vec2( i2457[9], i2457[10] )
  i2456.tileMode = i2457[11]
  i2456.adaptiveModeThreshold = i2457[12]
  i2456.maskInteraction = i2457[13]
  i2456.spriteSortPoint = i2457[14]
  i2456.enabled = !!i2457[15]
  request.r(i2457[16], i2457[17], 0, i2456, 'sharedMaterial')
  var i2459 = i2457[18]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2456.sharedMaterials = i2458
  i2456.receiveShadows = !!i2457[19]
  i2456.shadowCastingMode = i2457[20]
  i2456.sortingLayerID = i2457[21]
  i2456.sortingOrder = i2457[22]
  i2456.lightmapIndex = i2457[23]
  i2456.lightmapSceneIndex = i2457[24]
  i2456.lightmapScaleOffset = new pc.Vec4( i2457[25], i2457[26], i2457[27], i2457[28] )
  i2456.lightProbeUsage = i2457[29]
  i2456.reflectionProbeUsage = i2457[30]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2461 = data
  i2460.center = new pc.Vec3( i2461[0], i2461[1], i2461[2] )
  i2460.radius = i2461[3]
  i2460.enabled = !!i2461[4]
  i2460.isTrigger = !!i2461[5]
  request.r(i2461[6], i2461[7], 0, i2460, 'material')
  return i2460
}

Deserializers["Box"] = function (request, data, root) {
  var i2462 = root || request.c( 'Box' )
  var i2463 = data
  i2462.useBox = !!i2463[0]
  i2462.spawnMode = i2463[1]
  var i2465 = i2463[2]
  var i2464 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 1, i2464, '')
  }
  i2462.dynamicItems = i2464
  var i2467 = i2463[3]
  var i2466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 1, i2466, '')
  }
  i2462.spawnTargets = i2466
  i2462.initialSpawnCount = i2463[4]
  i2462.revealDuration = i2463[5]
  i2462.showInitialBatchShadowsOnSpawn = !!i2463[6]
  request.r(i2463[7], i2463[8], 0, i2462, 'mainConveyor')
  request.r(i2463[9], i2463[10], 0, i2462, 'graphicController')
  return i2462
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i2472 = root || request.c( 'BoxGraphicController' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'skeletonAnimation')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'sharedMesh')
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'additionalVertexStreams')
  i2476.enabled = !!i2477[2]
  request.r(i2477[3], i2477[4], 0, i2476, 'sharedMaterial')
  var i2479 = i2477[5]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.sharedMaterials = i2478
  i2476.receiveShadows = !!i2477[6]
  i2476.shadowCastingMode = i2477[7]
  i2476.sortingLayerID = i2477[8]
  i2476.sortingOrder = i2477[9]
  i2476.lightmapIndex = i2477[10]
  i2476.lightmapSceneIndex = i2477[11]
  i2476.lightmapScaleOffset = new pc.Vec4( i2477[12], i2477[13], i2477[14], i2477[15] )
  i2476.lightProbeUsage = i2477[16]
  i2476.reflectionProbeUsage = i2477[17]
  return i2476
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2480 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2481 = data
  i2480.loop = !!i2481[0]
  i2480.timeScale = i2481[1]
  request.r(i2481[2], i2481[3], 0, i2480, 'skeletonDataAsset')
  i2480.initialSkinName = i2481[4]
  i2480.fixPrefabOverrideViaMeshFilter = i2481[5]
  i2480.initialFlipX = !!i2481[6]
  i2480.initialFlipY = !!i2481[7]
  i2480.updateWhenInvisible = i2481[8]
  i2480.zSpacing = i2481[9]
  i2480.useClipping = !!i2481[10]
  i2480.immutableTriangles = !!i2481[11]
  i2480.pmaVertexColors = !!i2481[12]
  i2480.clearStateOnDisable = !!i2481[13]
  i2480.tintBlack = !!i2481[14]
  i2480.singleSubmesh = !!i2481[15]
  i2480.fixDrawOrder = !!i2481[16]
  i2480.addNormals = !!i2481[17]
  i2480.calculateTangents = !!i2481[18]
  i2480.maskInteraction = i2481[19]
  i2480.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2481[20], i2480.maskMaterials)
  i2480.disableRenderingOnOverride = !!i2481[21]
  i2480._animationName = i2481[22]
  var i2483 = i2481[23]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.separatorSlotNames = i2482
  return i2480
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2484 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2485 = data
  var i2487 = i2485[0]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2484.materialsMaskDisabled = i2486
  var i2489 = i2485[1]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 2, i2488, '')
  }
  i2484.materialsInsideMask = i2488
  var i2491 = i2485[2]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 2, i2490, '')
  }
  i2484.materialsOutsideMask = i2490
  return i2484
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i2494 = root || request.c( 'ItemHolder' )
  var i2495 = data
  i2494.id = i2495[0]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2497 = data
  i2496.center = new pc.Vec3( i2497[0], i2497[1], i2497[2] )
  i2496.size = new pc.Vec3( i2497[3], i2497[4], i2497[5] )
  i2496.enabled = !!i2497[6]
  i2496.isTrigger = !!i2497[7]
  request.r(i2497[8], i2497[9], 0, i2496, 'material')
  return i2496
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i2498 = root || request.c( 'ItemSetupTool' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'spritesParent')
  request.r(i2499[2], i2499[3], 0, i2498, 'holdersParent')
  i2498.shadowSuffix = i2499[4]
  i2498.holderPrefix = i2499[5]
  i2498.holdersParentName = i2499[6]
  i2498.colliderDepth = i2499[7]
  i2498.colliderSizeMultiplier = i2499[8]
  i2498.generatedShadowColor = new pc.Color(i2499[9], i2499[10], i2499[11], i2499[12])
  i2498.fadedBlackShadowColor = new pc.Color(i2499[13], i2499[14], i2499[15], i2499[16])
  i2498.generatedShadowLocalOffset = new pc.Vec3( i2499[17], i2499[18], i2499[19] )
  i2498.itemLayerName = i2499[20]
  i2498.holderLayerName = i2499[21]
  return i2498
}

Deserializers["Item"] = function (request, data, root) {
  var i2500 = root || request.c( 'Item' )
  var i2501 = data
  i2500.fxTypeOnPlace = i2501[0]
  i2500.id = i2501[1]
  i2500.currentState = i2501[2]
  i2500.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i2501[3] )
  request.r(i2501[4], i2501[5], 0, i2500, 'auraEffect')
  i2500.returnToSlotOnMiss = !!i2501[6]
  i2500.hideShadowOnDrop = !!i2501[7]
  i2500.scaleOnSpawn = !!i2501[8]
  i2500.spawnScaleMultiplier = i2501[9]
  var i2503 = i2501[10]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 1, i2502, '')
  }
  i2500.requiredItems = i2502
  request.r(i2501[11], i2501[12], 0, i2500, 'correctHolderTransform')
  request.r(i2501[13], i2501[14], 0, i2500, 'shadowOnHolder')
  i2500.canShowShadowHint = !!i2501[15]
  request.r(i2501[16], i2501[17], 0, i2500, 'homeSlot')
  i2500.waitingPosition = new pc.Vec3( i2501[18], i2501[19], i2501[20] )
  request.r(i2501[21], i2501[22], 0, i2500, 'spriteRenderer')
  return i2500
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i2504 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'anchorPoint')
  request.r(i2505[2], i2505[3], 0, i2504, 'targetCamera')
  i2504.viewportYRatio = i2505[4]
  i2504.alignOnStart = !!i2505[5]
  i2504.alignOnEnable = !!i2505[6]
  i2504.realignOnScreenSizeChanged = !!i2505[7]
  i2504.drawGizmos = !!i2505[8]
  i2504.targetLineColor = new pc.Color(i2505[9], i2505[10], i2505[11], i2505[12])
  i2504.anchorColor = new pc.Color(i2505[13], i2505[14], i2505[15], i2505[16])
  return i2504
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2506 = root || request.c( 'TMPro.TextMeshPro' )
  var i2507 = data
  i2506._SortingLayer = i2507[0]
  i2506._SortingLayerID = i2507[1]
  i2506._SortingOrder = i2507[2]
  i2506.m_hasFontAssetChanged = !!i2507[3]
  request.r(i2507[4], i2507[5], 0, i2506, 'm_renderer')
  i2506.m_maskType = i2507[6]
  i2506.m_text = i2507[7]
  i2506.m_isRightToLeft = !!i2507[8]
  request.r(i2507[9], i2507[10], 0, i2506, 'm_fontAsset')
  request.r(i2507[11], i2507[12], 0, i2506, 'm_sharedMaterial')
  var i2509 = i2507[13]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 2) {
  request.r(i2509[i + 0], i2509[i + 1], 2, i2508, '')
  }
  i2506.m_fontSharedMaterials = i2508
  request.r(i2507[14], i2507[15], 0, i2506, 'm_fontMaterial')
  var i2511 = i2507[16]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 2) {
  request.r(i2511[i + 0], i2511[i + 1], 2, i2510, '')
  }
  i2506.m_fontMaterials = i2510
  i2506.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2507[17], i2507[18], i2507[19], i2507[20])
  i2506.m_fontColor = new pc.Color(i2507[21], i2507[22], i2507[23], i2507[24])
  i2506.m_enableVertexGradient = !!i2507[25]
  i2506.m_colorMode = i2507[26]
  i2506.m_fontColorGradient = request.d('TMPro.VertexGradient', i2507[27], i2506.m_fontColorGradient)
  request.r(i2507[28], i2507[29], 0, i2506, 'm_fontColorGradientPreset')
  request.r(i2507[30], i2507[31], 0, i2506, 'm_spriteAsset')
  i2506.m_tintAllSprites = !!i2507[32]
  request.r(i2507[33], i2507[34], 0, i2506, 'm_StyleSheet')
  i2506.m_TextStyleHashCode = i2507[35]
  i2506.m_overrideHtmlColors = !!i2507[36]
  i2506.m_faceColor = UnityEngine.Color32.ConstructColor(i2507[37], i2507[38], i2507[39], i2507[40])
  i2506.m_fontSize = i2507[41]
  i2506.m_fontSizeBase = i2507[42]
  i2506.m_fontWeight = i2507[43]
  i2506.m_enableAutoSizing = !!i2507[44]
  i2506.m_fontSizeMin = i2507[45]
  i2506.m_fontSizeMax = i2507[46]
  i2506.m_fontStyle = i2507[47]
  i2506.m_HorizontalAlignment = i2507[48]
  i2506.m_VerticalAlignment = i2507[49]
  i2506.m_textAlignment = i2507[50]
  i2506.m_characterSpacing = i2507[51]
  i2506.m_wordSpacing = i2507[52]
  i2506.m_lineSpacing = i2507[53]
  i2506.m_lineSpacingMax = i2507[54]
  i2506.m_paragraphSpacing = i2507[55]
  i2506.m_charWidthMaxAdj = i2507[56]
  i2506.m_TextWrappingMode = i2507[57]
  i2506.m_wordWrappingRatios = i2507[58]
  i2506.m_overflowMode = i2507[59]
  request.r(i2507[60], i2507[61], 0, i2506, 'm_linkedTextComponent')
  request.r(i2507[62], i2507[63], 0, i2506, 'parentLinkedComponent')
  i2506.m_enableKerning = !!i2507[64]
  var i2513 = i2507[65]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(i2513[i + 0]);
  }
  i2506.m_ActiveFontFeatures = i2512
  i2506.m_enableExtraPadding = !!i2507[66]
  i2506.checkPaddingRequired = !!i2507[67]
  i2506.m_isRichText = !!i2507[68]
  i2506.m_parseCtrlCharacters = !!i2507[69]
  i2506.m_isOrthographic = !!i2507[70]
  i2506.m_isCullingEnabled = !!i2507[71]
  i2506.m_horizontalMapping = i2507[72]
  i2506.m_verticalMapping = i2507[73]
  i2506.m_uvLineOffset = i2507[74]
  i2506.m_geometrySortingOrder = i2507[75]
  i2506.m_IsTextObjectScaleStatic = !!i2507[76]
  i2506.m_VertexBufferAutoSizeReduction = !!i2507[77]
  i2506.m_useMaxVisibleDescender = !!i2507[78]
  i2506.m_pageToDisplay = i2507[79]
  i2506.m_margin = new pc.Vec4( i2507[80], i2507[81], i2507[82], i2507[83] )
  i2506.m_isUsingLegacyAnimationComponent = !!i2507[84]
  i2506.m_isVolumetricText = !!i2507[85]
  request.r(i2507[86], i2507[87], 0, i2506, 'm_Material')
  i2506.m_EmojiFallbackSupport = !!i2507[88]
  i2506.m_Maskable = !!i2507[89]
  i2506.m_Color = new pc.Color(i2507[90], i2507[91], i2507[92], i2507[93])
  i2506.m_RaycastTarget = !!i2507[94]
  i2506.m_RaycastPadding = new pc.Vec4( i2507[95], i2507[96], i2507[97], i2507[98] )
  return i2506
}

Deserializers["ItemConveyor"] = function (request, data, root) {
  var i2514 = root || request.c( 'ItemConveyor' )
  var i2515 = data
  i2514.isDraggingConveyor = !!i2515[0]
  request.r(i2515[1], i2515[2], 0, i2514, 'movingRoot')
  var i2517 = i2515[3]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2517.length; i += 2) {
  request.r(i2517[i + 0], i2517[i + 1], 1, i2516, '')
  }
  i2514.itemSlots = i2516
  i2514.arrangeSlotsOnStart = !!i2515[4]
  i2514.leftLocalPoint = new pc.Vec3( i2515[5], i2515[6], i2515[7] )
  i2514.rightLocalPoint = new pc.Vec3( i2515[8], i2515[9], i2515[10] )
  i2514.sortSlotsLeftToRight = !!i2515[11]
  i2514.alignLeftMostSlotToScreenLeftOnStart = !!i2515[12]
  i2514.enableHorizontalDrag = !!i2515[13]
  i2514.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i2515[14] )
  request.r(i2515[15], i2515[16], 0, i2514, 'raycastCamera')
  i2514.raycastDistance = i2515[17]
  i2514.leftEdgeViewportPadding = i2515[18]
  i2514.rightEdgeViewportPadding = i2515[19]
  i2514.slideBackSpeed = i2515[20]
  request.r(i2515[21], i2515[22], 0, i2514, 'sliderBackground')
  request.r(i2515[23], i2515[24], 0, i2514, 'sliderHandle')
  request.r(i2515[25], i2515[26], 0, i2514, 'sliderHandleRenderer')
  i2514.hideSliderInLandscape = !!i2515[27]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2519 = data
  i2518.ambientIntensity = i2519[0]
  i2518.reflectionIntensity = i2519[1]
  i2518.ambientMode = i2519[2]
  i2518.ambientLight = new pc.Color(i2519[3], i2519[4], i2519[5], i2519[6])
  i2518.ambientSkyColor = new pc.Color(i2519[7], i2519[8], i2519[9], i2519[10])
  i2518.ambientGroundColor = new pc.Color(i2519[11], i2519[12], i2519[13], i2519[14])
  i2518.ambientEquatorColor = new pc.Color(i2519[15], i2519[16], i2519[17], i2519[18])
  i2518.fogColor = new pc.Color(i2519[19], i2519[20], i2519[21], i2519[22])
  i2518.fogEndDistance = i2519[23]
  i2518.fogStartDistance = i2519[24]
  i2518.fogDensity = i2519[25]
  i2518.fog = !!i2519[26]
  request.r(i2519[27], i2519[28], 0, i2518, 'skybox')
  i2518.fogMode = i2519[29]
  var i2521 = i2519[30]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2521[i + 0]) );
  }
  i2518.lightmaps = i2520
  i2518.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2519[31], i2518.lightProbes)
  i2518.lightmapsMode = i2519[32]
  i2518.mixedBakeMode = i2519[33]
  i2518.environmentLightingMode = i2519[34]
  i2518.ambientProbe = new pc.SphericalHarmonicsL2(i2519[35])
  i2518.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2519[36])
  i2518.useReferenceAmbientProbe = !!i2519[37]
  request.r(i2519[38], i2519[39], 0, i2518, 'customReflection')
  request.r(i2519[40], i2519[41], 0, i2518, 'defaultReflection')
  i2518.defaultReflectionMode = i2519[42]
  i2518.defaultReflectionResolution = i2519[43]
  i2518.sunLightObjectId = i2519[44]
  i2518.pixelLightCount = i2519[45]
  i2518.defaultReflectionHDR = !!i2519[46]
  i2518.hasLightDataAsset = !!i2519[47]
  i2518.hasManualGenerate = !!i2519[48]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'lightmapColor')
  request.r(i2525[2], i2525[3], 0, i2524, 'lightmapDirection')
  request.r(i2525[4], i2525[5], 0, i2524, 'shadowMask')
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2526 = root || new UnityEngine.LightProbes()
  var i2527 = data
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2537[i + 0]));
  }
  i2534.ShaderCompilationErrors = i2536
  i2534.name = i2535[1]
  i2534.guid = i2535[2]
  var i2539 = i2535[3]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( i2539[i + 0] );
  }
  i2534.shaderDefinedKeywords = i2538
  var i2541 = i2535[4]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2541[i + 0]) );
  }
  i2534.passes = i2540
  var i2543 = i2535[5]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2543[i + 0]) );
  }
  i2534.usePasses = i2542
  var i2545 = i2535[6]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2545[i + 0]) );
  }
  i2534.defaultParameterValues = i2544
  request.r(i2535[7], i2535[8], 0, i2534, 'unityFallbackShader')
  i2534.readDepth = !!i2535[9]
  i2534.hasDepthOnlyPass = !!i2535[10]
  i2534.isCreatedByShaderGraph = !!i2535[11]
  i2534.disableBatching = !!i2535[12]
  i2534.compiled = !!i2535[13]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2549 = data
  i2548.shaderName = i2549[0]
  i2548.errorMessage = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2552 = root || new pc.UnityShaderPass()
  var i2553 = data
  i2552.id = i2553[0]
  i2552.subShaderIndex = i2553[1]
  i2552.name = i2553[2]
  i2552.passType = i2553[3]
  i2552.grabPassTextureName = i2553[4]
  i2552.usePass = !!i2553[5]
  i2552.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[6], i2552.zTest)
  i2552.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[7], i2552.zWrite)
  i2552.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[8], i2552.culling)
  i2552.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2553[9], i2552.blending)
  i2552.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2553[10], i2552.alphaBlending)
  i2552.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[11], i2552.colorWriteMask)
  i2552.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[12], i2552.offsetUnits)
  i2552.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[13], i2552.offsetFactor)
  i2552.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[14], i2552.stencilRef)
  i2552.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[15], i2552.stencilReadMask)
  i2552.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2553[16], i2552.stencilWriteMask)
  i2552.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2553[17], i2552.stencilOp)
  i2552.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2553[18], i2552.stencilOpFront)
  i2552.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2553[19], i2552.stencilOpBack)
  var i2555 = i2553[20]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2555[i + 0]) );
  }
  i2552.tags = i2554
  var i2557 = i2553[21]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( i2557[i + 0] );
  }
  i2552.passDefinedKeywords = i2556
  var i2559 = i2553[22]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2559[i + 0]) );
  }
  i2552.passDefinedKeywordGroups = i2558
  var i2561 = i2553[23]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2561[i + 0]) );
  }
  i2552.variants = i2560
  var i2563 = i2553[24]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2563[i + 0]) );
  }
  i2552.excludedVariants = i2562
  i2552.hasDepthReader = !!i2553[25]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2565 = data
  i2564.val = i2565[0]
  i2564.name = i2565[1]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2567 = data
  i2566.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[0], i2566.src)
  i2566.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[1], i2566.dst)
  i2566.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[2], i2566.op)
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2569 = data
  i2568.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[0], i2568.pass)
  i2568.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[1], i2568.fail)
  i2568.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[2], i2568.zFail)
  i2568.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2569[3], i2568.comp)
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2573 = data
  i2572.name = i2573[0]
  i2572.value = i2573[1]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2577 = data
  var i2579 = i2577[0]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( i2579[i + 0] );
  }
  i2576.keywords = i2578
  i2576.hasDiscard = !!i2577[1]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2583 = data
  i2582.passId = i2583[0]
  i2582.subShaderIndex = i2583[1]
  var i2585 = i2583[2]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( i2585[i + 0] );
  }
  i2582.keywords = i2584
  i2582.vertexProgram = i2583[3]
  i2582.fragmentProgram = i2583[4]
  i2582.exportedForWebGl2 = !!i2583[5]
  i2582.readDepth = !!i2583[6]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2589 = data
  request.r(i2589[0], i2589[1], 0, i2588, 'shader')
  i2588.pass = i2589[2]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2593 = data
  i2592.name = i2593[0]
  i2592.type = i2593[1]
  i2592.value = new pc.Vec4( i2593[2], i2593[3], i2593[4], i2593[5] )
  i2592.textureValue = i2593[6]
  i2592.shaderPropertyFlag = i2593[7]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2595 = data
  i2594.name = i2595[0]
  request.r(i2595[1], i2595[2], 0, i2594, 'texture')
  i2594.aabb = i2595[3]
  i2594.vertices = i2595[4]
  i2594.triangles = i2595[5]
  i2594.textureRect = UnityEngine.Rect.MinMaxRect(i2595[6], i2595[7], i2595[8], i2595[9])
  i2594.packedRect = UnityEngine.Rect.MinMaxRect(i2595[10], i2595[11], i2595[12], i2595[13])
  i2594.border = new pc.Vec4( i2595[14], i2595[15], i2595[16], i2595[17] )
  i2594.transparency = i2595[18]
  i2594.bounds = i2595[19]
  i2594.pixelsPerUnit = i2595[20]
  i2594.textureWidth = i2595[21]
  i2594.textureHeight = i2595[22]
  i2594.nativeSize = new pc.Vec2( i2595[23], i2595[24] )
  i2594.pivot = new pc.Vec2( i2595[25], i2595[26] )
  i2594.textureRectOffset = new pc.Vec2( i2595[27], i2595[28] )
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2597 = data
  i2596.name = i2597[0]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2599 = data
  i2598.name = i2599[0]
  i2598.wrapMode = i2599[1]
  i2598.isLooping = !!i2599[2]
  i2598.length = i2599[3]
  var i2601 = i2599[4]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2601[i + 0]) );
  }
  i2598.curves = i2600
  var i2603 = i2599[5]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2603[i + 0]) );
  }
  i2598.events = i2602
  i2598.halfPrecision = !!i2599[6]
  i2598._frameRate = i2599[7]
  i2598.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2599[8], i2598.localBounds)
  i2598.hasMuscleCurves = !!i2599[9]
  var i2605 = i2599[10]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( i2605[i + 0] );
  }
  i2598.clipMuscleConstant = i2604
  i2598.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2599[11], i2598.clipBindingConstant)
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2609 = data
  i2608.path = i2609[0]
  i2608.hash = i2609[1]
  i2608.componentType = i2609[2]
  i2608.property = i2609[3]
  i2608.keys = i2609[4]
  var i2611 = i2609[5]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2611[i + 0]) );
  }
  i2608.objectReferenceKeys = i2610
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2615 = data
  i2614.time = i2615[0]
  request.r(i2615[1], i2615[2], 0, i2614, 'value')
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2619 = data
  i2618.functionName = i2619[0]
  i2618.floatParameter = i2619[1]
  i2618.intParameter = i2619[2]
  i2618.stringParameter = i2619[3]
  request.r(i2619[4], i2619[5], 0, i2618, 'objectReferenceParameter')
  i2618.time = i2619[6]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2621 = data
  i2620.center = new pc.Vec3( i2621[0], i2621[1], i2621[2] )
  i2620.extends = new pc.Vec3( i2621[3], i2621[4], i2621[5] )
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2625 = data
  var i2627 = i2625[0]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( i2627[i + 0] );
  }
  i2624.genericBindings = i2626
  var i2629 = i2625[1]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( i2629[i + 0] );
  }
  i2624.pptrCurveMapping = i2628
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2631 = data
  i2630.name = i2631[0]
  var i2633 = i2631[1]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2633[i + 0]) );
  }
  i2630.layers = i2632
  var i2635 = i2631[2]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2635[i + 0]) );
  }
  i2630.parameters = i2634
  i2630.animationClips = i2631[3]
  i2630.avatarUnsupported = i2631[4]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.defaultWeight = i2639[1]
  i2638.blendingMode = i2639[2]
  i2638.avatarMask = i2639[3]
  i2638.syncedLayerIndex = i2639[4]
  i2638.syncedLayerAffectsTiming = !!i2639[5]
  i2638.syncedLayers = i2639[6]
  i2638.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2639[7], i2638.stateMachine)
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2641 = data
  i2640.id = i2641[0]
  i2640.name = i2641[1]
  i2640.path = i2641[2]
  var i2643 = i2641[3]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2643[i + 0]) );
  }
  i2640.states = i2642
  var i2645 = i2641[4]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2645[i + 0]) );
  }
  i2640.machines = i2644
  var i2647 = i2641[5]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2647[i + 0]) );
  }
  i2640.entryStateTransitions = i2646
  var i2649 = i2641[6]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2649[i + 0]) );
  }
  i2640.exitStateTransitions = i2648
  var i2651 = i2641[7]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2651[i + 0]) );
  }
  i2640.anyStateTransitions = i2650
  i2640.defaultStateId = i2641[8]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2655 = data
  i2654.id = i2655[0]
  i2654.name = i2655[1]
  i2654.cycleOffset = i2655[2]
  i2654.cycleOffsetParameter = i2655[3]
  i2654.cycleOffsetParameterActive = !!i2655[4]
  i2654.mirror = !!i2655[5]
  i2654.mirrorParameter = i2655[6]
  i2654.mirrorParameterActive = !!i2655[7]
  i2654.motionId = i2655[8]
  i2654.nameHash = i2655[9]
  i2654.fullPathHash = i2655[10]
  i2654.speed = i2655[11]
  i2654.speedParameter = i2655[12]
  i2654.speedParameterActive = !!i2655[13]
  i2654.tag = i2655[14]
  i2654.tagHash = i2655[15]
  i2654.writeDefaultValues = !!i2655[16]
  var i2657 = i2655[17]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2654.behaviours = i2656
  var i2659 = i2655[18]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2659[i + 0]) );
  }
  i2654.transitions = i2658
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2665 = data
  i2664.fullPath = i2665[0]
  i2664.canTransitionToSelf = !!i2665[1]
  i2664.duration = i2665[2]
  i2664.exitTime = i2665[3]
  i2664.hasExitTime = !!i2665[4]
  i2664.hasFixedDuration = !!i2665[5]
  i2664.interruptionSource = i2665[6]
  i2664.offset = i2665[7]
  i2664.orderedInterruption = !!i2665[8]
  i2664.destinationStateId = i2665[9]
  i2664.isExit = !!i2665[10]
  i2664.mute = !!i2665[11]
  i2664.solo = !!i2665[12]
  var i2667 = i2665[13]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2667[i + 0]) );
  }
  i2664.conditions = i2666
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2673 = data
  i2672.destinationStateId = i2673[0]
  i2672.isExit = !!i2673[1]
  i2672.mute = !!i2673[2]
  i2672.solo = !!i2673[3]
  var i2675 = i2673[4]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2675[i + 0]) );
  }
  i2672.conditions = i2674
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2679 = data
  i2678.defaultBool = !!i2679[0]
  i2678.defaultFloat = i2679[1]
  i2678.defaultInt = i2679[2]
  i2678.name = i2679[3]
  i2678.nameHash = i2679[4]
  i2678.type = i2679[5]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2681 = data
  i2680.name = i2681[0]
  i2680.bytes64 = i2681[1]
  i2680.data = i2681[2]
  return i2680
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2683 = data
  i2682.normalStyle = i2683[0]
  i2682.normalSpacingOffset = i2683[1]
  i2682.boldStyle = i2683[2]
  i2682.boldSpacing = i2683[3]
  i2682.italicStyle = i2683[4]
  i2682.tabSize = i2683[5]
  request.r(i2683[6], i2683[7], 0, i2682, 'atlas')
  i2682.m_SourceFontFileGUID = i2683[8]
  i2682.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2683[9], i2682.m_CreationSettings)
  request.r(i2683[10], i2683[11], 0, i2682, 'm_SourceFontFile')
  i2682.m_SourceFontFilePath = i2683[12]
  i2682.m_AtlasPopulationMode = i2683[13]
  i2682.InternalDynamicOS = !!i2683[14]
  var i2685 = i2683[15]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('UnityEngine.TextCore.Glyph', i2685[i + 0]));
  }
  i2682.m_GlyphTable = i2684
  var i2687 = i2683[16]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(request.d('TMPro.TMP_Character', i2687[i + 0]));
  }
  i2682.m_CharacterTable = i2686
  var i2689 = i2683[17]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 2) {
  request.r(i2689[i + 0], i2689[i + 1], 2, i2688, '')
  }
  i2682.m_AtlasTextures = i2688
  i2682.m_AtlasTextureIndex = i2683[18]
  i2682.m_IsMultiAtlasTexturesEnabled = !!i2683[19]
  i2682.m_GetFontFeatures = !!i2683[20]
  i2682.m_ClearDynamicDataOnBuild = !!i2683[21]
  i2682.m_AtlasWidth = i2683[22]
  i2682.m_AtlasHeight = i2683[23]
  i2682.m_AtlasPadding = i2683[24]
  i2682.m_AtlasRenderMode = i2683[25]
  var i2691 = i2683[26]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('UnityEngine.TextCore.GlyphRect', i2691[i + 0]));
  }
  i2682.m_UsedGlyphRects = i2690
  var i2693 = i2683[27]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('UnityEngine.TextCore.GlyphRect', i2693[i + 0]));
  }
  i2682.m_FreeGlyphRects = i2692
  i2682.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2683[28], i2682.m_FontFeatureTable)
  i2682.m_ShouldReimportFontFeatures = !!i2683[29]
  var i2695 = i2683[30]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2695.length; i += 2) {
  request.r(i2695[i + 0], i2695[i + 1], 1, i2694, '')
  }
  i2682.m_FallbackFontAssetTable = i2694
  var i2697 = i2683[31]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('TMPro.TMP_FontWeightPair', i2697[i + 0]) );
  }
  i2682.m_FontWeightTable = i2696
  var i2699 = i2683[32]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('TMPro.TMP_FontWeightPair', i2699[i + 0]) );
  }
  i2682.fontWeights = i2698
  i2682.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2683[33], i2682.m_fontInfo)
  var i2701 = i2683[34]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('TMPro.TMP_Glyph', i2701[i + 0]));
  }
  i2682.m_glyphInfoList = i2700
  i2682.m_KerningTable = request.d('TMPro.KerningTable', i2683[35], i2682.m_KerningTable)
  var i2703 = i2683[36]
  var i2702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2703.length; i += 2) {
  request.r(i2703[i + 0], i2703[i + 1], 1, i2702, '')
  }
  i2682.fallbackFontAssets = i2702
  i2682.m_Version = i2683[37]
  i2682.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2683[38], i2682.m_FaceInfo)
  request.r(i2683[39], i2683[40], 0, i2682, 'm_Material')
  return i2682
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2705 = data
  i2704.sourceFontFileName = i2705[0]
  i2704.sourceFontFileGUID = i2705[1]
  i2704.faceIndex = i2705[2]
  i2704.pointSizeSamplingMode = i2705[3]
  i2704.pointSize = i2705[4]
  i2704.padding = i2705[5]
  i2704.paddingMode = i2705[6]
  i2704.packingMode = i2705[7]
  i2704.atlasWidth = i2705[8]
  i2704.atlasHeight = i2705[9]
  i2704.characterSetSelectionMode = i2705[10]
  i2704.characterSequence = i2705[11]
  i2704.referencedFontAssetGUID = i2705[12]
  i2704.referencedTextAssetGUID = i2705[13]
  i2704.fontStyle = i2705[14]
  i2704.fontStyleModifier = i2705[15]
  i2704.renderMode = i2705[16]
  i2704.includeFontFeatures = !!i2705[17]
  return i2704
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2709 = data
  i2708.m_Index = i2709[0]
  i2708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2709[1], i2708.m_Metrics)
  i2708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2709[2], i2708.m_GlyphRect)
  i2708.m_Scale = i2709[3]
  i2708.m_AtlasIndex = i2709[4]
  i2708.m_ClassDefinitionType = i2709[5]
  return i2708
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2711 = data
  i2710.m_Width = i2711[0]
  i2710.m_Height = i2711[1]
  i2710.m_HorizontalBearingX = i2711[2]
  i2710.m_HorizontalBearingY = i2711[3]
  i2710.m_HorizontalAdvance = i2711[4]
  return i2710
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2713 = data
  i2712.m_X = i2713[0]
  i2712.m_Y = i2713[1]
  i2712.m_Width = i2713[2]
  i2712.m_Height = i2713[3]
  return i2712
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_Character' )
  var i2717 = data
  i2716.m_ElementType = i2717[0]
  i2716.m_Unicode = i2717[1]
  i2716.m_GlyphIndex = i2717[2]
  i2716.m_Scale = i2717[3]
  return i2716
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2723 = data
  var i2725 = i2723[0]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.MultipleSubstitutionRecord', i2725[i + 0]));
  }
  i2722.m_MultipleSubstitutionRecords = i2724
  var i2727 = i2723[1]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('TMPro.LigatureSubstitutionRecord', i2727[i + 0]));
  }
  i2722.m_LigatureSubstitutionRecords = i2726
  var i2729 = i2723[2]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2729[i + 0]));
  }
  i2722.m_GlyphPairAdjustmentRecords = i2728
  var i2731 = i2723[3]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2731[i + 0]));
  }
  i2722.m_MarkToBaseAdjustmentRecords = i2730
  var i2733 = i2723[4]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2733[i + 0]));
  }
  i2722.m_MarkToMarkAdjustmentRecords = i2732
  return i2722
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2737 = data
  i2736.m_TargetGlyphID = i2737[0]
  i2736.m_SubstituteGlyphIDs = i2737[1]
  return i2736
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2740 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2741 = data
  i2740.m_ComponentGlyphIDs = i2741[0]
  i2740.m_LigatureGlyphID = i2741[1]
  return i2740
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2744 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2745 = data
  i2744.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2745[0], i2744.m_FirstAdjustmentRecord)
  i2744.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2745[1], i2744.m_SecondAdjustmentRecord)
  i2744.m_FeatureLookupFlags = i2745[2]
  return i2744
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2749 = data
  i2748.m_BaseGlyphID = i2749[0]
  i2748.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2749[1], i2748.m_BaseGlyphAnchorPoint)
  i2748.m_MarkGlyphID = i2749[2]
  i2748.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2749[3], i2748.m_MarkPositionAdjustment)
  return i2748
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2752 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2753 = data
  i2752.m_BaseMarkGlyphID = i2753[0]
  i2752.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2753[1], i2752.m_BaseMarkGlyphAnchorPoint)
  i2752.m_CombiningMarkGlyphID = i2753[2]
  i2752.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2753[3], i2752.m_CombiningMarkPositionAdjustment)
  return i2752
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2759 = data
  request.r(i2759[0], i2759[1], 0, i2758, 'regularTypeface')
  request.r(i2759[2], i2759[3], 0, i2758, 'italicTypeface')
  return i2758
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2761 = data
  i2760.Name = i2761[0]
  i2760.PointSize = i2761[1]
  i2760.Scale = i2761[2]
  i2760.CharacterCount = i2761[3]
  i2760.LineHeight = i2761[4]
  i2760.Baseline = i2761[5]
  i2760.Ascender = i2761[6]
  i2760.CapHeight = i2761[7]
  i2760.Descender = i2761[8]
  i2760.CenterLine = i2761[9]
  i2760.SuperscriptOffset = i2761[10]
  i2760.SubscriptOffset = i2761[11]
  i2760.SubSize = i2761[12]
  i2760.Underline = i2761[13]
  i2760.UnderlineThickness = i2761[14]
  i2760.strikethrough = i2761[15]
  i2760.strikethroughThickness = i2761[16]
  i2760.TabWidth = i2761[17]
  i2760.Padding = i2761[18]
  i2760.AtlasWidth = i2761[19]
  i2760.AtlasHeight = i2761[20]
  return i2760
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2765 = data
  i2764.id = i2765[0]
  i2764.x = i2765[1]
  i2764.y = i2765[2]
  i2764.width = i2765[3]
  i2764.height = i2765[4]
  i2764.xOffset = i2765[5]
  i2764.yOffset = i2765[6]
  i2764.xAdvance = i2765[7]
  i2764.scale = i2765[8]
  return i2764
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.KerningTable' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.KerningPair', i2769[i + 0]));
  }
  i2766.kerningPairs = i2768
  return i2766
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.KerningPair' )
  var i2773 = data
  i2772.xOffset = i2773[0]
  i2772.m_FirstGlyph = i2773[1]
  i2772.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2773[2], i2772.m_FirstGlyphAdjustments)
  i2772.m_SecondGlyph = i2773[3]
  i2772.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2773[4], i2772.m_SecondGlyphAdjustments)
  i2772.m_IgnoreSpacingAdjustments = !!i2773[5]
  return i2772
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2774 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2775 = data
  i2774.m_FaceIndex = i2775[0]
  i2774.m_FamilyName = i2775[1]
  i2774.m_StyleName = i2775[2]
  i2774.m_PointSize = i2775[3]
  i2774.m_Scale = i2775[4]
  i2774.m_UnitsPerEM = i2775[5]
  i2774.m_LineHeight = i2775[6]
  i2774.m_AscentLine = i2775[7]
  i2774.m_CapLine = i2775[8]
  i2774.m_MeanLine = i2775[9]
  i2774.m_Baseline = i2775[10]
  i2774.m_DescentLine = i2775[11]
  i2774.m_SuperscriptOffset = i2775[12]
  i2774.m_SuperscriptSize = i2775[13]
  i2774.m_SubscriptOffset = i2775[14]
  i2774.m_SubscriptSize = i2775[15]
  i2774.m_UnderlineOffset = i2775[16]
  i2774.m_UnderlineThickness = i2775[17]
  i2774.m_StrikethroughOffset = i2775[18]
  i2774.m_StrikethroughThickness = i2775[19]
  i2774.m_TabWidth = i2775[20]
  return i2774
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2776 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2777 = data
  var i2779 = i2777[0]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 2) {
  request.r(i2779[i + 0], i2779[i + 1], 2, i2778, '')
  }
  i2776.atlasAssets = i2778
  i2776.scale = i2777[1]
  request.r(i2777[2], i2777[3], 0, i2776, 'skeletonJSON')
  i2776.isUpgradingBlendModeMaterials = !!i2777[4]
  i2776.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2777[5], i2776.blendModeMaterials)
  var i2781 = i2777[6]
  var i2780 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 1, i2780, '')
  }
  i2776.skeletonDataModifiers = i2780
  var i2783 = i2777[7]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( i2783[i + 0] );
  }
  i2776.fromAnimation = i2782
  var i2785 = i2777[8]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( i2785[i + 0] );
  }
  i2776.toAnimation = i2784
  i2776.duration = i2777[9]
  i2776.defaultMix = i2777[10]
  request.r(i2777[11], i2777[12], 0, i2776, 'controller')
  return i2776
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2788 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2789 = data
  i2788.applyAdditiveMaterial = !!i2789[0]
  var i2791 = i2789[1]
  var i2790 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2791[i + 0]));
  }
  i2788.additiveMaterials = i2790
  var i2793 = i2789[2]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2793[i + 0]));
  }
  i2788.multiplyMaterials = i2792
  var i2795 = i2789[3]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2795[i + 0]));
  }
  i2788.screenMaterials = i2794
  i2788.requiresBlendModeMaterials = !!i2789[4]
  return i2788
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2798 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2799 = data
  i2798.pageName = i2799[0]
  request.r(i2799[1], i2799[2], 0, i2798, 'material')
  return i2798
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2802 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'atlasFile')
  var i2805 = i2803[2]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 2) {
  request.r(i2805[i + 0], i2805[i + 1], 2, i2804, '')
  }
  i2802.materials = i2804
  return i2802
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2807 = data
  i2806.useSafeMode = !!i2807[0]
  i2806.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2807[1], i2806.safeModeOptions)
  i2806.timeScale = i2807[2]
  i2806.unscaledTimeScale = i2807[3]
  i2806.useSmoothDeltaTime = !!i2807[4]
  i2806.maxSmoothUnscaledTime = i2807[5]
  i2806.rewindCallbackMode = i2807[6]
  i2806.showUnityEditorReport = !!i2807[7]
  i2806.logBehaviour = i2807[8]
  i2806.drawGizmos = !!i2807[9]
  i2806.defaultRecyclable = !!i2807[10]
  i2806.defaultAutoPlay = i2807[11]
  i2806.defaultUpdateType = i2807[12]
  i2806.defaultTimeScaleIndependent = !!i2807[13]
  i2806.defaultEaseType = i2807[14]
  i2806.defaultEaseOvershootOrAmplitude = i2807[15]
  i2806.defaultEasePeriod = i2807[16]
  i2806.defaultAutoKill = !!i2807[17]
  i2806.defaultLoopType = i2807[18]
  i2806.debugMode = !!i2807[19]
  i2806.debugStoreTargetId = !!i2807[20]
  i2806.showPreviewPanel = !!i2807[21]
  i2806.storeSettingsLocation = i2807[22]
  i2806.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2807[23], i2806.modules)
  i2806.createASMDEF = !!i2807[24]
  i2806.showPlayingTweens = !!i2807[25]
  i2806.showPausedTweens = !!i2807[26]
  return i2806
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2808 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2809 = data
  i2808.logBehaviour = i2809[0]
  i2808.nestedTweenFailureBehaviour = i2809[1]
  return i2808
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2811 = data
  i2810.showPanel = !!i2811[0]
  i2810.audioEnabled = !!i2811[1]
  i2810.physicsEnabled = !!i2811[2]
  i2810.physics2DEnabled = !!i2811[3]
  i2810.spriteEnabled = !!i2811[4]
  i2810.uiEnabled = !!i2811[5]
  i2810.uiToolkitEnabled = !!i2811[6]
  i2810.textMeshProEnabled = !!i2811[7]
  i2810.tk2DEnabled = !!i2811[8]
  i2810.deAudioEnabled = !!i2811[9]
  i2810.deUnityExtendedEnabled = !!i2811[10]
  i2810.epoOutlineEnabled = !!i2811[11]
  return i2810
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_Settings' )
  var i2813 = data
  i2812.assetVersion = i2813[0]
  i2812.m_TextWrappingMode = i2813[1]
  i2812.m_enableKerning = !!i2813[2]
  var i2815 = i2813[3]
  var i2814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.add(i2815[i + 0]);
  }
  i2812.m_ActiveFontFeatures = i2814
  i2812.m_enableExtraPadding = !!i2813[4]
  i2812.m_enableTintAllSprites = !!i2813[5]
  i2812.m_enableParseEscapeCharacters = !!i2813[6]
  i2812.m_EnableRaycastTarget = !!i2813[7]
  i2812.m_GetFontFeaturesAtRuntime = !!i2813[8]
  i2812.m_missingGlyphCharacter = i2813[9]
  i2812.m_ClearDynamicDataOnBuild = !!i2813[10]
  i2812.m_warningsDisabled = !!i2813[11]
  request.r(i2813[12], i2813[13], 0, i2812, 'm_defaultFontAsset')
  i2812.m_defaultFontAssetPath = i2813[14]
  i2812.m_defaultFontSize = i2813[15]
  i2812.m_defaultAutoSizeMinRatio = i2813[16]
  i2812.m_defaultAutoSizeMaxRatio = i2813[17]
  i2812.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2813[18], i2813[19] )
  i2812.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2813[20], i2813[21] )
  i2812.m_autoSizeTextContainer = !!i2813[22]
  i2812.m_IsTextObjectScaleStatic = !!i2813[23]
  var i2817 = i2813[24]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2817.length; i += 2) {
  request.r(i2817[i + 0], i2817[i + 1], 1, i2816, '')
  }
  i2812.m_fallbackFontAssets = i2816
  i2812.m_matchMaterialPreset = !!i2813[25]
  i2812.m_HideSubTextObjects = !!i2813[26]
  request.r(i2813[27], i2813[28], 0, i2812, 'm_defaultSpriteAsset')
  i2812.m_defaultSpriteAssetPath = i2813[29]
  i2812.m_enableEmojiSupport = !!i2813[30]
  i2812.m_MissingCharacterSpriteUnicode = i2813[31]
  var i2819 = i2813[32]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2819.length; i += 2) {
  request.r(i2819[i + 0], i2819[i + 1], 1, i2818, '')
  }
  i2812.m_EmojiFallbackTextAssets = i2818
  i2812.m_defaultColorGradientPresetsPath = i2813[33]
  request.r(i2813[34], i2813[35], 0, i2812, 'm_defaultStyleSheet')
  i2812.m_StyleSheetsResourcePath = i2813[36]
  request.r(i2813[37], i2813[38], 0, i2812, 'm_leadingCharacters')
  request.r(i2813[39], i2813[40], 0, i2812, 'm_followingCharacters')
  i2812.m_UseModernHangulLineBreakingRules = !!i2813[41]
  return i2812
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2823 = data
  request.r(i2823[0], i2823[1], 0, i2822, 'spriteSheet')
  var i2825 = i2823[2]
  var i2824 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.add(request.d('TMPro.TMP_Sprite', i2825[i + 0]));
  }
  i2822.spriteInfoList = i2824
  var i2827 = i2823[3]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2827.length; i += 2) {
  request.r(i2827[i + 0], i2827[i + 1], 1, i2826, '')
  }
  i2822.fallbackSpriteAssets = i2826
  var i2829 = i2823[4]
  var i2828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.add(request.d('TMPro.TMP_SpriteCharacter', i2829[i + 0]));
  }
  i2822.m_SpriteCharacterTable = i2828
  var i2831 = i2823[5]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('TMPro.TMP_SpriteGlyph', i2831[i + 0]));
  }
  i2822.m_GlyphTable = i2830
  i2822.m_Version = i2823[6]
  i2822.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2823[7], i2822.m_FaceInfo)
  request.r(i2823[8], i2823[9], 0, i2822, 'm_Material')
  return i2822
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2834 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2835 = data
  i2834.name = i2835[0]
  i2834.hashCode = i2835[1]
  i2834.unicode = i2835[2]
  i2834.pivot = new pc.Vec2( i2835[3], i2835[4] )
  request.r(i2835[5], i2835[6], 0, i2834, 'sprite')
  i2834.id = i2835[7]
  i2834.x = i2835[8]
  i2834.y = i2835[9]
  i2834.width = i2835[10]
  i2834.height = i2835[11]
  i2834.xOffset = i2835[12]
  i2834.yOffset = i2835[13]
  i2834.xAdvance = i2835[14]
  i2834.scale = i2835[15]
  return i2834
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2840 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2841 = data
  i2840.m_Name = i2841[0]
  i2840.m_ElementType = i2841[1]
  i2840.m_Unicode = i2841[2]
  i2840.m_GlyphIndex = i2841[3]
  i2840.m_Scale = i2841[4]
  return i2840
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2844 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2845 = data
  request.r(i2845[0], i2845[1], 0, i2844, 'sprite')
  i2844.m_Index = i2845[2]
  i2844.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2845[3], i2844.m_Metrics)
  i2844.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2845[4], i2844.m_GlyphRect)
  i2844.m_Scale = i2845[5]
  i2844.m_AtlasIndex = i2845[6]
  i2844.m_ClassDefinitionType = i2845[7]
  return i2844
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2846 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.add(request.d('TMPro.TMP_Style', i2849[i + 0]));
  }
  i2846.m_StyleList = i2848
  return i2846
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2852 = root || request.c( 'TMPro.TMP_Style' )
  var i2853 = data
  i2852.m_Name = i2853[0]
  i2852.m_HashCode = i2853[1]
  i2852.m_OpeningDefinition = i2853[2]
  i2852.m_ClosingDefinition = i2853[3]
  i2852.m_OpeningTagArray = i2853[4]
  i2852.m_ClosingTagArray = i2853[5]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2855 = data
  var i2857 = i2855[0]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2857[i + 0]) );
  }
  i2854.files = i2856
  i2854.componentToPrefabIds = i2855[1]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2861 = data
  i2860.path = i2861[0]
  request.r(i2861[1], i2861[2], 0, i2860, 'unityObject')
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2863 = data
  var i2865 = i2863[0]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2865[i + 0]) );
  }
  i2862.scriptsExecutionOrder = i2864
  var i2867 = i2863[1]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2867[i + 0]) );
  }
  i2862.sortingLayers = i2866
  var i2869 = i2863[2]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2869[i + 0]) );
  }
  i2862.cullingLayers = i2868
  i2862.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2863[3], i2862.timeSettings)
  i2862.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2863[4], i2862.physicsSettings)
  i2862.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2863[5], i2862.physics2DSettings)
  i2862.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2863[6], i2862.qualitySettings)
  i2862.enableRealtimeShadows = !!i2863[7]
  i2862.enableAutoInstancing = !!i2863[8]
  i2862.enableStaticBatching = !!i2863[9]
  i2862.enableDynamicBatching = !!i2863[10]
  i2862.lightmapEncodingQuality = i2863[11]
  i2862.desiredColorSpace = i2863[12]
  var i2871 = i2863[13]
  var i2870 = []
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.push( i2871[i + 0] );
  }
  i2862.allTags = i2870
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.value = i2875[1]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2879 = data
  i2878.id = i2879[0]
  i2878.name = i2879[1]
  i2878.value = i2879[2]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2883 = data
  i2882.id = i2883[0]
  i2882.name = i2883[1]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2885 = data
  i2884.fixedDeltaTime = i2885[0]
  i2884.maximumDeltaTime = i2885[1]
  i2884.timeScale = i2885[2]
  i2884.maximumParticleTimestep = i2885[3]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2887 = data
  i2886.gravity = new pc.Vec3( i2887[0], i2887[1], i2887[2] )
  i2886.defaultSolverIterations = i2887[3]
  i2886.bounceThreshold = i2887[4]
  i2886.autoSyncTransforms = !!i2887[5]
  i2886.autoSimulation = !!i2887[6]
  var i2889 = i2887[7]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2889[i + 0]) );
  }
  i2886.collisionMatrix = i2888
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2893 = data
  i2892.enabled = !!i2893[0]
  i2892.layerId = i2893[1]
  i2892.otherLayerId = i2893[2]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2895 = data
  request.r(i2895[0], i2895[1], 0, i2894, 'material')
  i2894.gravity = new pc.Vec2( i2895[2], i2895[3] )
  i2894.positionIterations = i2895[4]
  i2894.velocityIterations = i2895[5]
  i2894.velocityThreshold = i2895[6]
  i2894.maxLinearCorrection = i2895[7]
  i2894.maxAngularCorrection = i2895[8]
  i2894.maxTranslationSpeed = i2895[9]
  i2894.maxRotationSpeed = i2895[10]
  i2894.baumgarteScale = i2895[11]
  i2894.baumgarteTOIScale = i2895[12]
  i2894.timeToSleep = i2895[13]
  i2894.linearSleepTolerance = i2895[14]
  i2894.angularSleepTolerance = i2895[15]
  i2894.defaultContactOffset = i2895[16]
  i2894.autoSimulation = !!i2895[17]
  i2894.queriesHitTriggers = !!i2895[18]
  i2894.queriesStartInColliders = !!i2895[19]
  i2894.callbacksOnDisable = !!i2895[20]
  i2894.reuseCollisionCallbacks = !!i2895[21]
  i2894.autoSyncTransforms = !!i2895[22]
  var i2897 = i2895[23]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2897[i + 0]) );
  }
  i2894.collisionMatrix = i2896
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2901 = data
  i2900.enabled = !!i2901[0]
  i2900.layerId = i2901[1]
  i2900.otherLayerId = i2901[2]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2905[i + 0]) );
  }
  i2902.qualityLevels = i2904
  var i2907 = i2903[1]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2902.names = i2906
  i2902.shadows = i2903[2]
  i2902.anisotropicFiltering = i2903[3]
  i2902.antiAliasing = i2903[4]
  i2902.lodBias = i2903[5]
  i2902.shadowCascades = i2903[6]
  i2902.shadowDistance = i2903[7]
  i2902.shadowmaskMode = i2903[8]
  i2902.shadowProjection = i2903[9]
  i2902.shadowResolution = i2903[10]
  i2902.softParticles = !!i2903[11]
  i2902.softVegetation = !!i2903[12]
  i2902.activeColorSpace = i2903[13]
  i2902.desiredColorSpace = i2903[14]
  i2902.masterTextureLimit = i2903[15]
  i2902.maxQueuedFrames = i2903[16]
  i2902.particleRaycastBudget = i2903[17]
  i2902.pixelLightCount = i2903[18]
  i2902.realtimeReflectionProbes = !!i2903[19]
  i2902.shadowCascade2Split = i2903[20]
  i2902.shadowCascade4Split = new pc.Vec3( i2903[21], i2903[22], i2903[23] )
  i2902.streamingMipmapsActive = !!i2903[24]
  i2902.vSyncCount = i2903[25]
  i2902.asyncUploadBufferSize = i2903[26]
  i2902.asyncUploadTimeSlice = i2903[27]
  i2902.billboardsFaceCameraPosition = !!i2903[28]
  i2902.shadowNearPlaneOffset = i2903[29]
  i2902.streamingMipmapsMemoryBudget = i2903[30]
  i2902.maximumLODLevel = i2903[31]
  i2902.streamingMipmapsAddAllCameras = !!i2903[32]
  i2902.streamingMipmapsMaxLevelReduction = i2903[33]
  i2902.streamingMipmapsRenderersPerFrame = i2903[34]
  i2902.resolutionScalingFixedDPIFactor = i2903[35]
  i2902.streamingMipmapsMaxFileIORequests = i2903[36]
  i2902.currentQualityLevel = i2903[37]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2913 = data
  i2912.weight = i2913[0]
  i2912.vertices = i2913[1]
  i2912.normals = i2913[2]
  i2912.tangents = i2913[3]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2917 = data
  i2916.mode = i2917[0]
  i2916.parameter = i2917[1]
  i2916.threshold = i2917[2]
  return i2916
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2918 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2919 = data
  i2918.m_GlyphIndex = i2919[0]
  i2918.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2919[1], i2918.m_GlyphValueRecord)
  return i2918
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2921 = data
  i2920.m_XCoordinate = i2921[0]
  i2920.m_YCoordinate = i2921[1]
  return i2920
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2923 = data
  i2922.m_XPositionAdjustment = i2923[0]
  i2922.m_YPositionAdjustment = i2923[1]
  return i2922
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2924 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2925 = data
  i2924.xPlacement = i2925[0]
  i2924.yPlacement = i2925[1]
  i2924.xAdvance = i2925[2]
  i2924.yAdvance = i2925[3]
  return i2924
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2926 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2927 = data
  i2926.m_XPlacement = i2927[0]
  i2926.m_YPlacement = i2927[1]
  i2926.m_XAdvance = i2927[2]
  i2926.m_YAdvance = i2927[3]
  return i2926
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[34],"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[78],"86":[78],"87":[78],"88":[78],"89":[78],"90":[78],"91":[34],"92":[47],"93":[94],"95":[94],"11":[10],"96":[97],"98":[99],"100":[47,46],"101":[99],"102":[101],"103":[99],"104":[99],"105":[106],"107":[106],"108":[99],"109":[10],"110":[17,10],"45":[47],"111":[17,10],"112":[15,47],"99":[47],"113":[47,46],"114":[71],"115":[78],"116":[117],"118":[106],"119":[41],"120":[34],"121":[122],"123":[39],"124":[11],"125":[10],"53":[47,10],"18":[10,17],"126":[10],"127":[17,10],"128":[47],"129":[17,10],"130":[10],"131":[132],"133":[132],"134":[132],"135":[10],"136":[10],"14":[11],"21":[17,10],"137":[10],"13":[11],"138":[10],"139":[10],"140":[10],"141":[10],"142":[10],"143":[10],"144":[10],"145":[10],"146":[10],"147":[17,10],"148":[10],"149":[10],"150":[10],"20":[10],"151":[17,10],"152":[10],"153":[39],"154":[39],"40":[39],"155":[39],"156":[34],"157":[34]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","ItemConveyor","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","ItemSetupTool","ScreenHeightPositionAnchor","TMPro.TextMeshPro","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "28.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv693";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1853";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5183";

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

Deserializers.buildID = "00a833c1-0c9c-40f9-b78b-1c49825b11ba";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

