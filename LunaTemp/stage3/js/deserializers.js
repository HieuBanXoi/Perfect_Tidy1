var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointSpring' )
  var i2173 = data
  i2172.spring = i2173[0]
  i2172.damper = i2173[1]
  i2172.targetPosition = i2173[2]
  return i2172
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointMotor' )
  var i2175 = data
  i2174.m_TargetVelocity = i2175[0]
  i2174.m_Force = i2175[1]
  i2174.m_FreeSpin = i2175[2]
  return i2174
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointLimits' )
  var i2177 = data
  i2176.m_Min = i2177[0]
  i2176.m_Max = i2177[1]
  i2176.m_Bounciness = i2177[2]
  i2176.m_BounceMinVelocity = i2177[3]
  i2176.m_ContactDistance = i2177[4]
  i2176.minBounce = i2177[5]
  i2176.maxBounce = i2177[6]
  return i2176
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointDrive' )
  var i2179 = data
  i2178.m_PositionSpring = i2179[0]
  i2178.m_PositionDamper = i2179[1]
  i2178.m_MaximumForce = i2179[2]
  i2178.m_UseAcceleration = i2179[3]
  return i2178
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2181 = data
  i2180.m_Spring = i2181[0]
  i2180.m_Damper = i2181[1]
  return i2180
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2183 = data
  i2182.m_Limit = i2183[0]
  i2182.m_Bounciness = i2183[1]
  i2182.m_ContactDistance = i2183[2]
  return i2182
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2185 = data
  i2184.m_ExtremumSlip = i2185[0]
  i2184.m_ExtremumValue = i2185[1]
  i2184.m_AsymptoteSlip = i2185[2]
  i2184.m_AsymptoteValue = i2185[3]
  i2184.m_Stiffness = i2185[4]
  return i2184
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2187 = data
  i2186.m_LowerAngle = i2187[0]
  i2186.m_UpperAngle = i2187[1]
  return i2186
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2189 = data
  i2188.m_MotorSpeed = i2189[0]
  i2188.m_MaximumMotorTorque = i2189[1]
  return i2188
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2191 = data
  i2190.m_DampingRatio = i2191[0]
  i2190.m_Frequency = i2191[1]
  i2190.m_Angle = i2191[2]
  return i2190
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2193 = data
  i2192.m_LowerTranslation = i2193[0]
  i2192.m_UpperTranslation = i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2194 = root || new pc.UnityMaterial()
  var i2195 = data
  i2194.name = i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'shader')
  i2194.renderQueue = i2195[3]
  i2194.enableInstancing = !!i2195[4]
  var i2197 = i2195[5]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2197[i + 0]) );
  }
  i2194.floatParameters = i2196
  var i2199 = i2195[6]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2199[i + 0]) );
  }
  i2194.colorParameters = i2198
  var i2201 = i2195[7]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2201[i + 0]) );
  }
  i2194.vectorParameters = i2200
  var i2203 = i2195[8]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2203[i + 0]) );
  }
  i2194.textureParameters = i2202
  var i2205 = i2195[9]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2205[i + 0]) );
  }
  i2194.materialFlags = i2204
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.value = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.value = new pc.Color(i2213[1], i2213[2], i2213[3], i2213[4])
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.value = new pc.Vec4( i2217[1], i2217[2], i2217[3], i2217[4] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'value')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.enabled = !!i2225[1]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.width = i2227[1]
  i2226.height = i2227[2]
  i2226.mipmapCount = i2227[3]
  i2226.anisoLevel = i2227[4]
  i2226.filterMode = i2227[5]
  i2226.hdr = !!i2227[6]
  i2226.format = i2227[7]
  i2226.wrapMode = i2227[8]
  i2226.alphaIsTransparency = !!i2227[9]
  i2226.alphaSource = i2227[10]
  i2226.graphicsFormat = i2227[11]
  i2226.sRGBTexture = !!i2227[12]
  i2226.desiredColorSpace = i2227[13]
  i2226.wrapU = i2227[14]
  i2226.wrapV = i2227[15]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2229 = data
  i2228.position = new pc.Vec3( i2229[0], i2229[1], i2229[2] )
  i2228.scale = new pc.Vec3( i2229[3], i2229[4], i2229[5] )
  i2228.rotation = new pc.Quat(i2229[6], i2229[7], i2229[8], i2229[9])
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2231 = data
  i2230.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2231[0], i2230.main)
  i2230.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2231[1], i2230.colorBySpeed)
  i2230.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2231[2], i2230.colorOverLifetime)
  i2230.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2231[3], i2230.emission)
  i2230.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2231[4], i2230.rotationBySpeed)
  i2230.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2231[5], i2230.rotationOverLifetime)
  i2230.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2231[6], i2230.shape)
  i2230.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2231[7], i2230.sizeBySpeed)
  i2230.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2231[8], i2230.sizeOverLifetime)
  i2230.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2231[9], i2230.textureSheetAnimation)
  i2230.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2231[10], i2230.velocityOverLifetime)
  i2230.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2231[11], i2230.noise)
  i2230.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2231[12], i2230.inheritVelocity)
  i2230.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2231[13], i2230.forceOverLifetime)
  i2230.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2231[14], i2230.limitVelocityOverLifetime)
  i2230.useAutoRandomSeed = !!i2231[15]
  i2230.randomSeed = i2231[16]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemMain()
  var i2233 = data
  i2232.duration = i2233[0]
  i2232.loop = !!i2233[1]
  i2232.prewarm = !!i2233[2]
  i2232.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[3], i2232.startDelay)
  i2232.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[4], i2232.startLifetime)
  i2232.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[5], i2232.startSpeed)
  i2232.startSize3D = !!i2233[6]
  i2232.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[7], i2232.startSizeX)
  i2232.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[8], i2232.startSizeY)
  i2232.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[9], i2232.startSizeZ)
  i2232.startRotation3D = !!i2233[10]
  i2232.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[11], i2232.startRotationX)
  i2232.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[12], i2232.startRotationY)
  i2232.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[13], i2232.startRotationZ)
  i2232.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2233[14], i2232.startColor)
  i2232.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[15], i2232.gravityModifier)
  i2232.simulationSpace = i2233[16]
  request.r(i2233[17], i2233[18], 0, i2232, 'customSimulationSpace')
  i2232.simulationSpeed = i2233[19]
  i2232.useUnscaledTime = !!i2233[20]
  i2232.scalingMode = i2233[21]
  i2232.playOnAwake = !!i2233[22]
  i2232.maxParticles = i2233[23]
  i2232.emitterVelocityMode = i2233[24]
  i2232.stopAction = i2233[25]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2234 = root || new pc.MinMaxCurve()
  var i2235 = data
  i2234.mode = i2235[0]
  i2234.curveMin = new pc.AnimationCurve( { keys_flow: i2235[1] } )
  i2234.curveMax = new pc.AnimationCurve( { keys_flow: i2235[2] } )
  i2234.curveMultiplier = i2235[3]
  i2234.constantMin = i2235[4]
  i2234.constantMax = i2235[5]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2236 = root || new pc.MinMaxGradient()
  var i2237 = data
  i2236.mode = i2237[0]
  i2236.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2237[1], i2236.gradientMin)
  i2236.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2237[2], i2236.gradientMax)
  i2236.colorMin = new pc.Color(i2237[3], i2237[4], i2237[5], i2237[6])
  i2236.colorMax = new pc.Color(i2237[7], i2237[8], i2237[9], i2237[10])
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2239 = data
  i2238.mode = i2239[0]
  var i2241 = i2239[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2241[i + 0]) );
  }
  i2238.colorKeys = i2240
  var i2243 = i2239[2]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2243[i + 0]) );
  }
  i2238.alphaKeys = i2242
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2244 = root || new pc.ParticleSystemColorBySpeed()
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2245[1], i2244.color)
  i2244.range = new pc.Vec2( i2245[2], i2245[3] )
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2249 = data
  i2248.color = new pc.Color(i2249[0], i2249[1], i2249[2], i2249[3])
  i2248.time = i2249[4]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2253 = data
  i2252.alpha = i2253[0]
  i2252.time = i2253[1]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2254 = root || new pc.ParticleSystemColorOverLifetime()
  var i2255 = data
  i2254.enabled = !!i2255[0]
  i2254.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2255[1], i2254.color)
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemEmitter()
  var i2257 = data
  i2256.enabled = !!i2257[0]
  i2256.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[1], i2256.rateOverTime)
  i2256.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[2], i2256.rateOverDistance)
  var i2259 = i2257[3]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2259[i + 0]) );
  }
  i2256.bursts = i2258
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2262 = root || new pc.ParticleSystemBurst()
  var i2263 = data
  i2262.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2263[0], i2262.count)
  i2262.cycleCount = i2263[1]
  i2262.minCount = i2263[2]
  i2262.maxCount = i2263[3]
  i2262.repeatInterval = i2263[4]
  i2262.time = i2263[5]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2264 = root || new pc.ParticleSystemRotationBySpeed()
  var i2265 = data
  i2264.enabled = !!i2265[0]
  i2264.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[1], i2264.x)
  i2264.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[2], i2264.y)
  i2264.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2265[3], i2264.z)
  i2264.separateAxes = !!i2265[4]
  i2264.range = new pc.Vec2( i2265[5], i2265[6] )
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2266 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2267 = data
  i2266.enabled = !!i2267[0]
  i2266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[1], i2266.x)
  i2266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[2], i2266.y)
  i2266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2267[3], i2266.z)
  i2266.separateAxes = !!i2267[4]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemShape()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.shapeType = i2269[1]
  i2268.randomDirectionAmount = i2269[2]
  i2268.sphericalDirectionAmount = i2269[3]
  i2268.randomPositionAmount = i2269[4]
  i2268.alignToDirection = !!i2269[5]
  i2268.radius = i2269[6]
  i2268.radiusMode = i2269[7]
  i2268.radiusSpread = i2269[8]
  i2268.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[9], i2268.radiusSpeed)
  i2268.radiusThickness = i2269[10]
  i2268.angle = i2269[11]
  i2268.length = i2269[12]
  i2268.boxThickness = new pc.Vec3( i2269[13], i2269[14], i2269[15] )
  i2268.meshShapeType = i2269[16]
  request.r(i2269[17], i2269[18], 0, i2268, 'mesh')
  request.r(i2269[19], i2269[20], 0, i2268, 'meshRenderer')
  request.r(i2269[21], i2269[22], 0, i2268, 'skinnedMeshRenderer')
  i2268.useMeshMaterialIndex = !!i2269[23]
  i2268.meshMaterialIndex = i2269[24]
  i2268.useMeshColors = !!i2269[25]
  i2268.normalOffset = i2269[26]
  i2268.arc = i2269[27]
  i2268.arcMode = i2269[28]
  i2268.arcSpread = i2269[29]
  i2268.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2269[30], i2268.arcSpeed)
  i2268.donutRadius = i2269[31]
  i2268.position = new pc.Vec3( i2269[32], i2269[33], i2269[34] )
  i2268.rotation = new pc.Vec3( i2269[35], i2269[36], i2269[37] )
  i2268.scale = new pc.Vec3( i2269[38], i2269[39], i2269[40] )
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2270 = root || new pc.ParticleSystemSizeBySpeed()
  var i2271 = data
  i2270.enabled = !!i2271[0]
  i2270.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[1], i2270.x)
  i2270.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[2], i2270.y)
  i2270.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2271[3], i2270.z)
  i2270.separateAxes = !!i2271[4]
  i2270.range = new pc.Vec2( i2271[5], i2271[6] )
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2272 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2273 = data
  i2272.enabled = !!i2273[0]
  i2272.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[1], i2272.x)
  i2272.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[2], i2272.y)
  i2272.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2273[3], i2272.z)
  i2272.separateAxes = !!i2273[4]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2274 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2275 = data
  i2274.enabled = !!i2275[0]
  i2274.mode = i2275[1]
  i2274.animation = i2275[2]
  i2274.numTilesX = i2275[3]
  i2274.numTilesY = i2275[4]
  i2274.useRandomRow = !!i2275[5]
  i2274.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[6], i2274.frameOverTime)
  i2274.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2275[7], i2274.startFrame)
  i2274.cycleCount = i2275[8]
  i2274.rowIndex = i2275[9]
  i2274.flipU = i2275[10]
  i2274.flipV = i2275[11]
  i2274.spriteCount = i2275[12]
  var i2277 = i2275[13]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 2, i2276, '')
  }
  i2274.sprites = i2276
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.x)
  i2280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.y)
  i2280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[3], i2280.z)
  i2280.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[4], i2280.radial)
  i2280.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[5], i2280.speedModifier)
  i2280.space = i2281[6]
  i2280.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[7], i2280.orbitalX)
  i2280.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[8], i2280.orbitalY)
  i2280.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[9], i2280.orbitalZ)
  i2280.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[10], i2280.orbitalOffsetX)
  i2280.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[11], i2280.orbitalOffsetY)
  i2280.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[12], i2280.orbitalOffsetZ)
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemNoise()
  var i2283 = data
  i2282.enabled = !!i2283[0]
  i2282.separateAxes = !!i2283[1]
  i2282.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[2], i2282.strengthX)
  i2282.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[3], i2282.strengthY)
  i2282.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[4], i2282.strengthZ)
  i2282.frequency = i2283[5]
  i2282.damping = !!i2283[6]
  i2282.octaveCount = i2283[7]
  i2282.octaveMultiplier = i2283[8]
  i2282.octaveScale = i2283[9]
  i2282.quality = i2283[10]
  i2282.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[11], i2282.scrollSpeed)
  i2282.scrollSpeedMultiplier = i2283[12]
  i2282.remapEnabled = !!i2283[13]
  i2282.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[14], i2282.remapX)
  i2282.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[15], i2282.remapY)
  i2282.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[16], i2282.remapZ)
  i2282.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[17], i2282.positionAmount)
  i2282.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[18], i2282.rotationAmount)
  i2282.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[19], i2282.sizeAmount)
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2284 = root || new pc.ParticleSystemInheritVelocity()
  var i2285 = data
  i2284.enabled = !!i2285[0]
  i2284.mode = i2285[1]
  i2284.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2285[2], i2284.curve)
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemForceOverLifetime()
  var i2287 = data
  i2286.enabled = !!i2287[0]
  i2286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[1], i2286.x)
  i2286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[2], i2286.y)
  i2286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[3], i2286.z)
  i2286.space = i2287[4]
  i2286.randomized = !!i2287[5]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[1], i2288.limit)
  i2288.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[2], i2288.limitX)
  i2288.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[3], i2288.limitY)
  i2288.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[4], i2288.limitZ)
  i2288.dampen = i2289[5]
  i2288.separateAxes = !!i2289[6]
  i2288.space = i2289[7]
  i2288.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[8], i2288.drag)
  i2288.multiplyDragByParticleSize = !!i2289[9]
  i2288.multiplyDragByParticleVelocity = !!i2289[10]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'mesh')
  i2290.meshCount = i2291[2]
  i2290.activeVertexStreamsCount = i2291[3]
  i2290.alignment = i2291[4]
  i2290.renderMode = i2291[5]
  i2290.sortMode = i2291[6]
  i2290.lengthScale = i2291[7]
  i2290.velocityScale = i2291[8]
  i2290.cameraVelocityScale = i2291[9]
  i2290.normalDirection = i2291[10]
  i2290.sortingFudge = i2291[11]
  i2290.minParticleSize = i2291[12]
  i2290.maxParticleSize = i2291[13]
  i2290.pivot = new pc.Vec3( i2291[14], i2291[15], i2291[16] )
  request.r(i2291[17], i2291[18], 0, i2290, 'trailMaterial')
  i2290.applyActiveColorSpace = !!i2291[19]
  i2290.enabled = !!i2291[20]
  request.r(i2291[21], i2291[22], 0, i2290, 'sharedMaterial')
  var i2293 = i2291[23]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.sharedMaterials = i2292
  i2290.receiveShadows = !!i2291[24]
  i2290.shadowCastingMode = i2291[25]
  i2290.sortingLayerID = i2291[26]
  i2290.sortingOrder = i2291[27]
  i2290.lightmapIndex = i2291[28]
  i2290.lightmapSceneIndex = i2291[29]
  i2290.lightmapScaleOffset = new pc.Vec4( i2291[30], i2291[31], i2291[32], i2291[33] )
  i2290.lightProbeUsage = i2291[34]
  i2290.reflectionProbeUsage = i2291[35]
  return i2290
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2296 = root || request.c( 'MergeEffect' )
  var i2297 = data
  request.r(i2297[0], i2297[1], 0, i2296, 'tf')
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2299 = data
  i2298.name = i2299[0]
  i2298.tagId = i2299[1]
  i2298.enabled = !!i2299[2]
  i2298.isStatic = !!i2299[3]
  i2298.layer = i2299[4]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2301 = data
  i2300.name = i2301[0]
  i2300.halfPrecision = !!i2301[1]
  i2300.useSimplification = !!i2301[2]
  i2300.useUInt32IndexFormat = !!i2301[3]
  i2300.vertexCount = i2301[4]
  i2300.aabb = i2301[5]
  var i2303 = i2301[6]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( !!i2303[i + 0] );
  }
  i2300.streams = i2302
  i2300.vertices = i2301[7]
  var i2305 = i2301[8]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2305[i + 0]) );
  }
  i2300.subMeshes = i2304
  var i2307 = i2301[9]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 16) {
    i2306.push( new pc.Mat4().setData(i2307[i + 0], i2307[i + 1], i2307[i + 2], i2307[i + 3],  i2307[i + 4], i2307[i + 5], i2307[i + 6], i2307[i + 7],  i2307[i + 8], i2307[i + 9], i2307[i + 10], i2307[i + 11],  i2307[i + 12], i2307[i + 13], i2307[i + 14], i2307[i + 15]) );
  }
  i2300.bindposes = i2306
  var i2309 = i2301[10]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2309[i + 0]) );
  }
  i2300.blendShapes = i2308
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2315 = data
  i2314.triangles = i2315[0]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2321 = data
  i2320.name = i2321[0]
  var i2323 = i2321[1]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2323[i + 0]) );
  }
  i2320.frames = i2322
  return i2320
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2324 = root || request.c( 'BlinkEffect' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'tf')
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2327 = data
  i2326.frontSortingLayerID = i2327[0]
  i2326.frontSortingOrder = i2327[1]
  i2326.backSortingLayerID = i2327[2]
  i2326.backSortingOrder = i2327[3]
  i2326.alphaCutoff = i2327[4]
  request.r(i2327[5], i2327[6], 0, i2326, 'sprite')
  i2326.tileMode = i2327[7]
  i2326.isCustomRangeActive = !!i2327[8]
  i2326.spriteSortPoint = i2327[9]
  i2326.enabled = !!i2327[10]
  request.r(i2327[11], i2327[12], 0, i2326, 'sharedMaterial')
  var i2329 = i2327[13]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2326.sharedMaterials = i2328
  i2326.receiveShadows = !!i2327[14]
  i2326.shadowCastingMode = i2327[15]
  i2326.sortingLayerID = i2327[16]
  i2326.sortingOrder = i2327[17]
  i2326.lightmapIndex = i2327[18]
  i2326.lightmapSceneIndex = i2327[19]
  i2326.lightmapScaleOffset = new pc.Vec4( i2327[20], i2327[21], i2327[22], i2327[23] )
  i2326.lightProbeUsage = i2327[24]
  i2326.reflectionProbeUsage = i2327[25]
  return i2326
}

Deserializers["BrushMaskUnit"] = function (request, data, root) {
  var i2330 = root || request.c( 'BrushMaskUnit' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'spriteMask')
  request.r(i2331[2], i2331[3], 0, i2330, 'tf')
  return i2330
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i2332 = root || request.c( 'HeartBreakEffect' )
  var i2333 = data
  i2332.defaultLifeTime = i2333[0]
  request.r(i2333[1], i2333[2], 0, i2332, 'tf')
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2335 = data
  i2334.color = new pc.Color(i2335[0], i2335[1], i2335[2], i2335[3])
  request.r(i2335[4], i2335[5], 0, i2334, 'sprite')
  i2334.flipX = !!i2335[6]
  i2334.flipY = !!i2335[7]
  i2334.drawMode = i2335[8]
  i2334.size = new pc.Vec2( i2335[9], i2335[10] )
  i2334.tileMode = i2335[11]
  i2334.adaptiveModeThreshold = i2335[12]
  i2334.maskInteraction = i2335[13]
  i2334.spriteSortPoint = i2335[14]
  i2334.enabled = !!i2335[15]
  request.r(i2335[16], i2335[17], 0, i2334, 'sharedMaterial')
  var i2337 = i2335[18]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.sharedMaterials = i2336
  i2334.receiveShadows = !!i2335[19]
  i2334.shadowCastingMode = i2335[20]
  i2334.sortingLayerID = i2335[21]
  i2334.sortingOrder = i2335[22]
  i2334.lightmapIndex = i2335[23]
  i2334.lightmapSceneIndex = i2335[24]
  i2334.lightmapScaleOffset = new pc.Vec4( i2335[25], i2335[26], i2335[27], i2335[28] )
  i2334.lightProbeUsage = i2335[29]
  i2334.reflectionProbeUsage = i2335[30]
  return i2334
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i2338 = root || request.c( 'HeartEffect' )
  var i2339 = data
  i2338.defaultLifeTime = i2339[0]
  request.r(i2339[1], i2339[2], 0, i2338, 'tf')
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.index = i2341[1]
  i2340.startup = !!i2341[2]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2343 = data
  i2342.pivot = new pc.Vec2( i2343[0], i2343[1] )
  i2342.anchorMin = new pc.Vec2( i2343[2], i2343[3] )
  i2342.anchorMax = new pc.Vec2( i2343[4], i2343[5] )
  i2342.sizeDelta = new pc.Vec2( i2343[6], i2343[7] )
  i2342.anchoredPosition3D = new pc.Vec3( i2343[8], i2343[9], i2343[10] )
  i2342.rotation = new pc.Quat(i2343[11], i2343[12], i2343[13], i2343[14])
  i2342.scale = new pc.Vec3( i2343[15], i2343[16], i2343[17] )
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2345 = data
  i2344.planeDistance = i2345[0]
  i2344.referencePixelsPerUnit = i2345[1]
  i2344.isFallbackOverlay = !!i2345[2]
  i2344.renderMode = i2345[3]
  i2344.renderOrder = i2345[4]
  i2344.sortingLayerName = i2345[5]
  i2344.sortingOrder = i2345[6]
  i2344.scaleFactor = i2345[7]
  request.r(i2345[8], i2345[9], 0, i2344, 'worldCamera')
  i2344.overrideSorting = !!i2345[10]
  i2344.pixelPerfect = !!i2345[11]
  i2344.targetDisplay = i2345[12]
  i2344.overridePixelPerfect = !!i2345[13]
  i2344.enabled = !!i2345[14]
  return i2344
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2346 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2347 = data
  i2346.m_UiScaleMode = i2347[0]
  i2346.m_ReferencePixelsPerUnit = i2347[1]
  i2346.m_ScaleFactor = i2347[2]
  i2346.m_ReferenceResolution = new pc.Vec2( i2347[3], i2347[4] )
  i2346.m_ScreenMatchMode = i2347[5]
  i2346.m_MatchWidthOrHeight = i2347[6]
  i2346.m_PhysicalUnit = i2347[7]
  i2346.m_FallbackScreenDPI = i2347[8]
  i2346.m_DefaultSpriteDPI = i2347[9]
  i2346.m_DynamicPixelsPerUnit = i2347[10]
  i2346.m_PresetInfoIsWorld = !!i2347[11]
  return i2346
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2348 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2349 = data
  i2348.m_IgnoreReversedGraphics = !!i2349[0]
  i2348.m_BlockingObjects = i2349[1]
  i2348.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2349[2] )
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'animatorController')
  request.r(i2351[2], i2351[3], 0, i2350, 'avatar')
  i2350.updateMode = i2351[4]
  i2350.hasTransformHierarchy = !!i2351[5]
  i2350.applyRootMotion = !!i2351[6]
  var i2353 = i2351[7]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 2, i2352, '')
  }
  i2350.humanBones = i2352
  i2350.enabled = !!i2351[8]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2357 = data
  i2356.cullTransparentMesh = !!i2357[0]
  return i2356
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2358 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2359 = data
  i2358.m_hasFontAssetChanged = !!i2359[0]
  request.r(i2359[1], i2359[2], 0, i2358, 'm_baseMaterial')
  i2358.m_maskOffset = new pc.Vec4( i2359[3], i2359[4], i2359[5], i2359[6] )
  i2358.m_text = i2359[7]
  i2358.m_isRightToLeft = !!i2359[8]
  request.r(i2359[9], i2359[10], 0, i2358, 'm_fontAsset')
  request.r(i2359[11], i2359[12], 0, i2358, 'm_sharedMaterial')
  var i2361 = i2359[13]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.m_fontSharedMaterials = i2360
  request.r(i2359[14], i2359[15], 0, i2358, 'm_fontMaterial')
  var i2363 = i2359[16]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2358.m_fontMaterials = i2362
  i2358.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2359[17], i2359[18], i2359[19], i2359[20])
  i2358.m_fontColor = new pc.Color(i2359[21], i2359[22], i2359[23], i2359[24])
  i2358.m_enableVertexGradient = !!i2359[25]
  i2358.m_colorMode = i2359[26]
  i2358.m_fontColorGradient = request.d('TMPro.VertexGradient', i2359[27], i2358.m_fontColorGradient)
  request.r(i2359[28], i2359[29], 0, i2358, 'm_fontColorGradientPreset')
  request.r(i2359[30], i2359[31], 0, i2358, 'm_spriteAsset')
  i2358.m_tintAllSprites = !!i2359[32]
  request.r(i2359[33], i2359[34], 0, i2358, 'm_StyleSheet')
  i2358.m_TextStyleHashCode = i2359[35]
  i2358.m_overrideHtmlColors = !!i2359[36]
  i2358.m_faceColor = UnityEngine.Color32.ConstructColor(i2359[37], i2359[38], i2359[39], i2359[40])
  i2358.m_fontSize = i2359[41]
  i2358.m_fontSizeBase = i2359[42]
  i2358.m_fontWeight = i2359[43]
  i2358.m_enableAutoSizing = !!i2359[44]
  i2358.m_fontSizeMin = i2359[45]
  i2358.m_fontSizeMax = i2359[46]
  i2358.m_fontStyle = i2359[47]
  i2358.m_HorizontalAlignment = i2359[48]
  i2358.m_VerticalAlignment = i2359[49]
  i2358.m_textAlignment = i2359[50]
  i2358.m_characterSpacing = i2359[51]
  i2358.m_wordSpacing = i2359[52]
  i2358.m_lineSpacing = i2359[53]
  i2358.m_lineSpacingMax = i2359[54]
  i2358.m_paragraphSpacing = i2359[55]
  i2358.m_charWidthMaxAdj = i2359[56]
  i2358.m_TextWrappingMode = i2359[57]
  i2358.m_wordWrappingRatios = i2359[58]
  i2358.m_overflowMode = i2359[59]
  request.r(i2359[60], i2359[61], 0, i2358, 'm_linkedTextComponent')
  request.r(i2359[62], i2359[63], 0, i2358, 'parentLinkedComponent')
  i2358.m_enableKerning = !!i2359[64]
  var i2365 = i2359[65]
  var i2364 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.add(i2365[i + 0]);
  }
  i2358.m_ActiveFontFeatures = i2364
  i2358.m_enableExtraPadding = !!i2359[66]
  i2358.checkPaddingRequired = !!i2359[67]
  i2358.m_isRichText = !!i2359[68]
  i2358.m_parseCtrlCharacters = !!i2359[69]
  i2358.m_isOrthographic = !!i2359[70]
  i2358.m_isCullingEnabled = !!i2359[71]
  i2358.m_horizontalMapping = i2359[72]
  i2358.m_verticalMapping = i2359[73]
  i2358.m_uvLineOffset = i2359[74]
  i2358.m_geometrySortingOrder = i2359[75]
  i2358.m_IsTextObjectScaleStatic = !!i2359[76]
  i2358.m_VertexBufferAutoSizeReduction = !!i2359[77]
  i2358.m_useMaxVisibleDescender = !!i2359[78]
  i2358.m_pageToDisplay = i2359[79]
  i2358.m_margin = new pc.Vec4( i2359[80], i2359[81], i2359[82], i2359[83] )
  i2358.m_isUsingLegacyAnimationComponent = !!i2359[84]
  i2358.m_isVolumetricText = !!i2359[85]
  request.r(i2359[86], i2359[87], 0, i2358, 'm_Material')
  i2358.m_EmojiFallbackSupport = !!i2359[88]
  i2358.m_Maskable = !!i2359[89]
  i2358.m_Color = new pc.Color(i2359[90], i2359[91], i2359[92], i2359[93])
  i2358.m_RaycastTarget = !!i2359[94]
  i2358.m_RaycastPadding = new pc.Vec4( i2359[95], i2359[96], i2359[97], i2359[98] )
  return i2358
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2366 = root || request.c( 'TMPro.VertexGradient' )
  var i2367 = data
  i2366.topLeft = new pc.Color(i2367[0], i2367[1], i2367[2], i2367[3])
  i2366.topRight = new pc.Color(i2367[4], i2367[5], i2367[6], i2367[7])
  i2366.bottomLeft = new pc.Color(i2367[8], i2367[9], i2367[10], i2367[11])
  i2366.bottomRight = new pc.Color(i2367[12], i2367[13], i2367[14], i2367[15])
  return i2366
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2370 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'm_FillRect')
  request.r(i2371[2], i2371[3], 0, i2370, 'm_HandleRect')
  i2370.m_Direction = i2371[4]
  i2370.m_MinValue = i2371[5]
  i2370.m_MaxValue = i2371[6]
  i2370.m_WholeNumbers = !!i2371[7]
  i2370.m_Value = i2371[8]
  i2370.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2371[9], i2370.m_OnValueChanged)
  i2370.m_Navigation = request.d('UnityEngine.UI.Navigation', i2371[10], i2370.m_Navigation)
  i2370.m_Transition = i2371[11]
  i2370.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2371[12], i2370.m_Colors)
  i2370.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2371[13], i2370.m_SpriteState)
  i2370.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2371[14], i2370.m_AnimationTriggers)
  i2370.m_Interactable = !!i2371[15]
  request.r(i2371[16], i2371[17], 0, i2370, 'm_TargetGraphic')
  return i2370
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2373 = data
  i2372.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2373[0], i2372.m_PersistentCalls)
  return i2372
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(request.d('UnityEngine.Events.PersistentCall', i2377[i + 0]));
  }
  i2374.m_Calls = i2376
  return i2374
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_Target')
  i2380.m_TargetAssemblyTypeName = i2381[2]
  i2380.m_MethodName = i2381[3]
  i2380.m_Mode = i2381[4]
  i2380.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2381[5], i2380.m_Arguments)
  i2380.m_CallState = i2381[6]
  return i2380
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2383 = data
  i2382.m_Mode = i2383[0]
  i2382.m_WrapAround = !!i2383[1]
  request.r(i2383[2], i2383[3], 0, i2382, 'm_SelectOnUp')
  request.r(i2383[4], i2383[5], 0, i2382, 'm_SelectOnDown')
  request.r(i2383[6], i2383[7], 0, i2382, 'm_SelectOnLeft')
  request.r(i2383[8], i2383[9], 0, i2382, 'm_SelectOnRight')
  return i2382
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2385 = data
  i2384.m_NormalColor = new pc.Color(i2385[0], i2385[1], i2385[2], i2385[3])
  i2384.m_HighlightedColor = new pc.Color(i2385[4], i2385[5], i2385[6], i2385[7])
  i2384.m_PressedColor = new pc.Color(i2385[8], i2385[9], i2385[10], i2385[11])
  i2384.m_SelectedColor = new pc.Color(i2385[12], i2385[13], i2385[14], i2385[15])
  i2384.m_DisabledColor = new pc.Color(i2385[16], i2385[17], i2385[18], i2385[19])
  i2384.m_ColorMultiplier = i2385[20]
  i2384.m_FadeDuration = i2385[21]
  return i2384
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'm_HighlightedSprite')
  request.r(i2387[2], i2387[3], 0, i2386, 'm_PressedSprite')
  request.r(i2387[4], i2387[5], 0, i2386, 'm_SelectedSprite')
  request.r(i2387[6], i2387[7], 0, i2386, 'm_DisabledSprite')
  return i2386
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2389 = data
  i2388.m_NormalTrigger = i2389[0]
  i2388.m_HighlightedTrigger = i2389[1]
  i2388.m_PressedTrigger = i2389[2]
  i2388.m_SelectedTrigger = i2389[3]
  i2388.m_DisabledTrigger = i2389[4]
  return i2388
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.Image' )
  var i2391 = data
  request.r(i2391[0], i2391[1], 0, i2390, 'm_Sprite')
  i2390.m_Type = i2391[2]
  i2390.m_PreserveAspect = !!i2391[3]
  i2390.m_FillCenter = !!i2391[4]
  i2390.m_FillMethod = i2391[5]
  i2390.m_FillAmount = i2391[6]
  i2390.m_FillClockwise = !!i2391[7]
  i2390.m_FillOrigin = i2391[8]
  i2390.m_UseSpriteMesh = !!i2391[9]
  i2390.m_PixelsPerUnitMultiplier = i2391[10]
  request.r(i2391[11], i2391[12], 0, i2390, 'm_Material')
  i2390.m_Maskable = !!i2391[13]
  i2390.m_Color = new pc.Color(i2391[14], i2391[15], i2391[16], i2391[17])
  i2390.m_RaycastTarget = !!i2391[18]
  i2390.m_RaycastPadding = new pc.Vec4( i2391[19], i2391[20], i2391[21], i2391[22] )
  return i2390
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Button' )
  var i2393 = data
  i2392.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2393[0], i2392.m_OnClick)
  i2392.m_Navigation = request.d('UnityEngine.UI.Navigation', i2393[1], i2392.m_Navigation)
  i2392.m_Transition = i2393[2]
  i2392.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2393[3], i2392.m_Colors)
  i2392.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2393[4], i2392.m_SpriteState)
  i2392.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2393[5], i2392.m_AnimationTriggers)
  i2392.m_Interactable = !!i2393[6]
  request.r(i2393[7], i2393[8], 0, i2392, 'm_TargetGraphic')
  return i2392
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2395 = data
  i2394.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2395[0], i2394.m_PersistentCalls)
  return i2394
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'm_ObjectArgument')
  i2396.m_ObjectArgumentAssemblyTypeName = i2397[2]
  i2396.m_IntArgument = i2397[3]
  i2396.m_FloatArgument = i2397[4]
  i2396.m_StringArgument = i2397[5]
  i2396.m_BoolArgument = !!i2397[6]
  return i2396
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2398 = root || request.c( 'Ply_Pool' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Ply_Pool+PoolAmount', i2401[i + 0]) );
  }
  i2398.poolAmounts = i2400
  request.r(i2399[1], i2399[2], 0, i2398, 'poolHolder')
  return i2398
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2404 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2405 = data
  i2404.type = i2405[0]
  i2404.amount = i2405[1]
  request.r(i2405[2], i2405[3], 0, i2404, 'gameUnit')
  return i2404
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2406 = root || request.c( 'Ply_SoundManager' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Ply_SoundManager+FxAudio', i2409[i + 0]) );
  }
  i2406.fxAudios = i2408
  request.r(i2407[1], i2407[2], 0, i2406, 'sound')
  return i2406
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2412 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2413 = data
  i2412.fxType = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'audioClip')
  i2412.volume = i2413[3]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'clip')
  request.r(i2415[2], i2415[3], 0, i2414, 'outputAudioMixerGroup')
  i2414.playOnAwake = !!i2415[4]
  i2414.loop = !!i2415[5]
  i2414.time = i2415[6]
  i2414.volume = i2415[7]
  i2414.pitch = i2415[8]
  i2414.enabled = !!i2415[9]
  return i2414
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2416 = root || request.c( 'GameManager' )
  var i2417 = data
  i2416.isPlaying = !!i2417[0]
  i2416.isTutorial = !!i2417[1]
  i2416.isGotoStore = !!i2417[2]
  i2416.isLoseGame = !!i2417[3]
  i2416.countMove = i2417[4]
  i2416.currentLayer = i2417[5]
  request.r(i2417[6], i2417[7], 0, i2416, 'trashCan')
  request.r(i2417[8], i2417[9], 0, i2416, 'paperBox')
  return i2416
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2418 = root || request.c( 'UIManager' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'winUI')
  request.r(i2419[2], i2419[3], 0, i2418, 'loseUI')
  request.r(i2419[4], i2419[5], 0, i2418, 'tutorial')
  request.r(i2419[6], i2419[7], 0, i2418, 'verticalUI')
  request.r(i2419[8], i2419[9], 0, i2418, 'horizontalUI')
  request.r(i2419[10], i2419[11], 0, i2418, 'downloadBtn')
  request.r(i2419[12], i2419[13], 0, i2418, 'horizontalDownloadBtn')
  request.r(i2419[14], i2419[15], 0, i2418, 'textAnim')
  i2418.isGoogleBuild = !!i2419[16]
  i2418.screenWidth = i2419[17]
  i2418.screenHeight = i2419[18]
  i2418.scaleHeightOnWidth = i2419[19]
  i2418.isVertical = !!i2419[20]
  i2418.isScreenVertical = !!i2419[21]
  request.r(i2419[22], i2419[23], 0, i2418, 'cam')
  i2418.verticalUIHeightOnWidthRatio = i2419[24]
  i2418.scaleCameraOnValidate = !!i2419[25]
  i2418.screenVerticalHeightOnWidthRatio = i2419[26]
  i2418.useContinuousScaling = !!i2419[27]
  i2418.baseOrthographicSize = i2419[28]
  i2418.baseAspect = i2419[29]
  i2418.landscapeSizeRatio = i2419[30]
  i2418.defaultPortraitSizeRatio = i2419[31]
  var i2421 = i2419[32]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('ScreenScaleStep', i2421[i + 0]));
  }
  i2418.discreteScaleSteps = i2420
  i2418.usePerspectiveCamera = !!i2419[33]
  request.r(i2419[34], i2419[35], 0, i2418, 'perspectiveFocus')
  i2418.perspectiveFocusDistance = i2419[36]
  i2418.perspectivePadding = i2419[37]
  i2418.fitRendererBounds = !!i2419[38]
  request.r(i2419[39], i2419[40], 0, i2418, 'boundsRoot')
  var i2423 = i2419[41]
  var i2422 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 1, i2422, '')
  }
  i2418.boundsRenderers = i2422
  return i2418
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2426 = root || request.c( 'ScreenScaleStep' )
  var i2427 = data
  i2426.heightOnWidthRatio = i2427[0]
  i2426.orthographicSize = i2427[1]
  return i2426
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2430 = root || request.c( 'InputManager' )
  var i2431 = data
  i2430.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2431[0] )
  i2430.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2431[1] )
  i2430.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2431[2] )
  i2430.isDragging = !!i2431[3]
  return i2430
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i2432 = root || request.c( 'HandTutManager' )
  var i2433 = data
  var i2435 = i2433[0]
  var i2434 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 1, i2434, '')
  }
  i2432.items = i2434
  request.r(i2433[1], i2433[2], 0, i2432, 'handTutObject')
  i2432.idleDelay = i2433[3]
  i2432.firstHandTutDelay = i2433[4]
  i2432.moveDuration = i2433[5]
  i2432.dragFadeDuration = i2433[6]
  i2432.clickScaleDuration = i2433[7]
  i2432.waitAtEndDuration = i2433[8]
  i2432.handZPosition = i2433[9]
  i2432.clickScaleMultiplier = i2433[10]
  i2432.moveEase = i2433[11]
  var i2437 = i2433[12]
  var i2436 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDragSpriteMaskPainter')))
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 1, i2436, '')
  }
  i2432.itemDragSpriteMaskPainters = i2436
  i2432.sockCount = i2433[13]
  var i2439 = i2433[14]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2432.toolObjects = i2438
  var i2441 = i2433[15]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2432.socks = i2440
  i2432.brushedShoeCount = i2433[16]
  request.r(i2433[17], i2433[18], 0, i2432, 'lastHandTut')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2451 = data
  i2450.aspect = i2451[0]
  i2450.orthographic = !!i2451[1]
  i2450.orthographicSize = i2451[2]
  i2450.backgroundColor = new pc.Color(i2451[3], i2451[4], i2451[5], i2451[6])
  i2450.nearClipPlane = i2451[7]
  i2450.farClipPlane = i2451[8]
  i2450.fieldOfView = i2451[9]
  i2450.depth = i2451[10]
  i2450.clearFlags = i2451[11]
  i2450.cullingMask = i2451[12]
  i2450.rect = i2451[13]
  request.r(i2451[14], i2451[15], 0, i2450, 'targetTexture')
  i2450.usePhysicalProperties = !!i2451[16]
  i2450.focalLength = i2451[17]
  i2450.sensorSize = new pc.Vec2( i2451[18], i2451[19] )
  i2450.lensShift = new pc.Vec2( i2451[20], i2451[21] )
  i2450.gateFit = i2451[22]
  i2450.commandBufferCount = i2451[23]
  i2450.cameraType = i2451[24]
  i2450.enabled = !!i2451[25]
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

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i2456 = root || request.c( 'SortChildByZPos' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'transformToSort')
  var i2459 = i2457[2]
  var i2458 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 1, i2458, '')
  }
  i2456.childrenToSort = i2458
  i2456.zOffset = i2457[3]
  i2456.baseZ = i2457[4]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2463 = data
  i2462.center = new pc.Vec3( i2463[0], i2463[1], i2463[2] )
  i2462.radius = i2463[3]
  i2462.height = i2463[4]
  i2462.direction = i2463[5]
  i2462.enabled = !!i2463[6]
  i2462.isTrigger = !!i2463[7]
  request.r(i2463[8], i2463[9], 0, i2462, 'material')
  return i2462
}

Deserializers["ItemSpriteMaskPainter"] = function (request, data, root) {
  var i2464 = root || request.c( 'ItemSpriteMaskPainter' )
  var i2465 = data
  request.r(i2465[0], i2465[1], 0, i2464, 'brushMaskPrefab')
  request.r(i2465[2], i2465[3], 0, i2464, 'brushLinePrefab')
  i2464.useBrushMaskPool = !!i2465[4]
  i2464.brushMaskPoolType = i2465[5]
  i2464.useBrushLinePool = !!i2465[6]
  i2464.brushLinePoolType = i2465[7]
  request.r(i2465[8], i2465[9], 0, i2464, 'brushParent')
  i2464.brushRadius = i2465[10]
  i2464.brushDiameterAtScaleOne = i2465[11]
  i2464.scaleBrushFromRadius = !!i2465[12]
  i2464.brushSpacing = i2465[13]
  i2464.brushZOffset = i2465[14]
  i2464.overrideMaskSorting = !!i2465[15]
  i2464.maskSortingLayerName = i2465[16]
  request.r(i2465[17], i2465[18], 0, i2464, 'paintAreaCollider')
  request.r(i2465[19], i2465[20], 0, i2464, 'paintPlaneCenter')
  i2464.requiredPercent = i2465[21]
  i2464.sampleColumns = i2465[22]
  i2464.sampleRows = i2465[23]
  i2464.resetOnEnable = !!i2465[24]
  i2464.onPaintBegin = request.d('UnityEngine.Events.UnityEvent', i2465[25], i2464.onPaintBegin)
  i2464.onPaint = request.d('UnityEngine.Events.UnityEvent', i2465[26], i2464.onPaint)
  i2464.onPaintComplete = request.d('UnityEngine.Events.UnityEvent', i2465[27], i2464.onPaintComplete)
  return i2464
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2466 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2467 = data
  i2466.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2467[0], i2466.m_PersistentCalls)
  return i2466
}

Deserializers["Item"] = function (request, data, root) {
  var i2468 = root || request.c( 'Item' )
  var i2469 = data
  i2468.isDone = !!i2469[0]
  i2468.onProcess = !!i2469[1]
  i2468.requireMatchingTargetTypeForHandTut = !!i2469[2]
  request.r(i2469[3], i2469[4], 0, i2468, 'itemDraggable')
  request.r(i2469[5], i2469[6], 0, i2468, 'itemClickable')
  request.r(i2469[7], i2469[8], 0, i2468, 'itemStirring')
  request.r(i2469[9], i2469[10], 0, i2468, 'itemKnifeSpriteMaskCutter')
  request.r(i2469[11], i2469[12], 0, i2468, 'itemSpriteMaskPainter')
  request.r(i2469[13], i2469[14], 0, i2468, 'itemDragSpriteMaskPainter')
  request.r(i2469[15], i2469[16], 0, i2468, 'itemSpriteRevealPainter')
  request.r(i2469[17], i2469[18], 0, i2468, 'itemMoveToTarget')
  request.r(i2469[19], i2469[20], 0, i2468, 'animator')
  i2468.itemType = i2469[21]
  request.r(i2469[22], i2469[23], 0, i2468, 'spriteRenderer')
  i2468.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2469[24], i2468.onKnifeIn)
  request.r(i2469[25], i2469[26], 0, i2468, 'knifePos')
  i2468.heartEffectScale = i2469[27]
  i2468.breakHeartEffectScale = i2469[28]
  i2468.blinkEffectScale = i2469[29]
  i2468.mergeEffectScale = i2469[30]
  i2468.playMoveToTargetFinishSound = !!i2469[31]
  i2468.moveToTargetFinishFxType = i2469[32]
  i2468.fxSpawnZPos = i2469[33]
  request.r(i2469[34], i2469[35], 0, i2468, 'tf')
  return i2468
}

Deserializers["ItemSpriteRevealPainter"] = function (request, data, root) {
  var i2470 = root || request.c( 'ItemSpriteRevealPainter' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteRevealPainter+RevealTarget')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('ItemSpriteRevealPainter+RevealTarget', i2473[i + 0]));
  }
  i2470.revealTargets = i2472
  i2470.initialAlpha = i2471[1]
  request.r(i2471[2], i2471[3], 0, i2470, 'paintAreaCollider')
  i2470.resetOnEnable = !!i2471[4]
  i2470.onPaintBegin = request.d('UnityEngine.Events.UnityEvent', i2471[5], i2470.onPaintBegin)
  i2470.onPaint = request.d('UnityEngine.Events.UnityEvent', i2471[6], i2470.onPaint)
  i2470.onPaintComplete = request.d('UnityEngine.Events.UnityEvent', i2471[7], i2470.onPaintComplete)
  return i2470
}

Deserializers["ItemSpriteRevealPainter+RevealTarget"] = function (request, data, root) {
  var i2476 = root || request.c( 'ItemSpriteRevealPainter+RevealTarget' )
  var i2477 = data
  request.r(i2477[0], i2477[1], 0, i2476, 'targetSprite')
  i2476.hitRadius = i2477[2]
  i2476.fadeSpeed = i2477[3]
  i2476.completeThreshold = i2477[4]
  i2476.isRevealed = !!i2477[5]
  return i2476
}

Deserializers["CleaningTarget"] = function (request, data, root) {
  var i2478 = root || request.c( 'CleaningTarget' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('CleaningTarget+CleaningState')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('CleaningTarget+CleaningState', i2481[i + 0]));
  }
  i2478.states = i2480
  i2478.onAllStatesComplete = request.d('UnityEngine.Events.UnityEvent', i2479[1], i2478.onAllStatesComplete)
  var i2483 = i2479[2]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('CleaningTarget+DirtTarget')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(request.d('CleaningTarget+DirtTarget', i2483[i + 0]));
  }
  i2478.dirtTargets = i2482
  return i2478
}

Deserializers["CleaningTarget+CleaningState"] = function (request, data, root) {
  var i2486 = root || request.c( 'CleaningTarget+CleaningState' )
  var i2487 = data
  i2486.stateName = i2487[0]
  i2486.paintMode = i2487[1]
  request.r(i2487[2], i2487[3], 0, i2486, 'requiredTool')
  i2486.brushRadius = i2487[4]
  i2486.brushSpacing = i2487[5]
  i2486.overrideMaskSorting = !!i2487[6]
  i2486.maskSortingLayerName = i2487[7]
  var i2489 = i2487[8]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteRevealPainter+RevealTarget')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(request.d('ItemSpriteRevealPainter+RevealTarget', i2489[i + 0]));
  }
  i2486.revealTargets = i2488
  i2486.initialAlpha = i2487[9]
  i2486.spawnDirtWhenPaint = !!i2487[10]
  var i2491 = i2487[11]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('MaskInteractionConfig')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('MaskInteractionConfig', i2491[i + 0]));
  }
  i2486.maskInteractionsToReset = i2490
  i2486.onStateComplete = request.d('UnityEngine.Events.UnityEvent', i2487[12], i2486.onStateComplete)
  return i2486
}

Deserializers["MaskInteractionConfig"] = function (request, data, root) {
  var i2494 = root || request.c( 'MaskInteractionConfig' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'targetRenderer')
  i2494.interaction = i2495[2]
  return i2494
}

Deserializers["CleaningTarget+DirtTarget"] = function (request, data, root) {
  var i2498 = root || request.c( 'CleaningTarget+DirtTarget' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'targetSprite')
  i2498.hitRadius = i2499[2]
  i2498.fadeSpeed = i2499[3]
  i2498.fadeOutSpeed = i2499[4]
  i2498.isBeingHit = !!i2499[5]
  return i2498
}

Deserializers["Sock"] = function (request, data, root) {
  var i2500 = root || request.c( 'Sock' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'stretchTarget')
  i2500.detachDistance = i2501[2]
  i2500.stretchScaleMultiplier = i2501[3]
  i2500.returnToAnchorDuration = i2501[4]
  i2500.shrinkDuration = i2501[5]
  request.r(i2501[6], i2501[7], 0, i2500, 'defaultTarget')
  i2500.moveDuration = i2501[8]
  i2500.moveEase = i2501[9]
  i2500.onMoveComplete = request.d('UnityEngine.Events.UnityEvent', i2501[10], i2500.onMoveComplete)
  i2500.isDone = !!i2501[11]
  i2500.onProcess = !!i2501[12]
  i2500.requireMatchingTargetTypeForHandTut = !!i2501[13]
  request.r(i2501[14], i2501[15], 0, i2500, 'itemDraggable')
  request.r(i2501[16], i2501[17], 0, i2500, 'itemClickable')
  request.r(i2501[18], i2501[19], 0, i2500, 'itemStirring')
  request.r(i2501[20], i2501[21], 0, i2500, 'itemKnifeSpriteMaskCutter')
  request.r(i2501[22], i2501[23], 0, i2500, 'itemSpriteMaskPainter')
  request.r(i2501[24], i2501[25], 0, i2500, 'itemDragSpriteMaskPainter')
  request.r(i2501[26], i2501[27], 0, i2500, 'itemSpriteRevealPainter')
  request.r(i2501[28], i2501[29], 0, i2500, 'itemMoveToTarget')
  request.r(i2501[30], i2501[31], 0, i2500, 'animator')
  i2500.itemType = i2501[32]
  request.r(i2501[33], i2501[34], 0, i2500, 'spriteRenderer')
  i2500.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2501[35], i2500.onKnifeIn)
  request.r(i2501[36], i2501[37], 0, i2500, 'knifePos')
  i2500.heartEffectScale = i2501[38]
  i2500.breakHeartEffectScale = i2501[39]
  i2500.blinkEffectScale = i2501[40]
  i2500.mergeEffectScale = i2501[41]
  i2500.playMoveToTargetFinishSound = !!i2501[42]
  i2500.moveToTargetFinishFxType = i2501[43]
  i2500.fxSpawnZPos = i2501[44]
  request.r(i2501[45], i2501[46], 0, i2500, 'tf')
  return i2500
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i2502 = root || request.c( 'ItemDraggable' )
  var i2503 = data
  i2502.isDraggable = !!i2503[0]
  request.r(i2503[1], i2503[2], 0, i2502, 'returnTransform')
  i2502.setParentToReturnTransform = !!i2503[3]
  i2502.returnToStartOnDragFailed = !!i2503[4]
  i2502.returnToExactReturnTransformPosition = !!i2503[5]
  i2502.targetItemType = i2503[6]
  request.r(i2503[7], i2503[8], 0, i2502, 'item')
  i2502.checkState = !!i2503[9]
  request.r(i2503[10], i2503[11], 0, i2502, 'shadowObject')
  i2502.playReturnToStartFinishSound = !!i2503[12]
  i2502.returnToStartFinishFxType = i2503[13]
  i2502.spawnBreakHeartOnDropFail = !!i2503[14]
  i2502.playBeginDragSound = !!i2503[15]
  i2502.beginDragFxType = i2503[16]
  i2502.liftOffset = i2503[17]
  i2502.dragScaleMultiplier = i2503[18]
  i2502.dragScaleDuration = i2503[19]
  i2502.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i2503[20], i2502.onBeginDrag)
  i2502.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i2503[21], i2502.onDropSuccess)
  i2502.onDropFail = request.d('UnityEngine.Events.UnityEvent', i2503[22], i2502.onDropFail)
  i2502.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i2503[23], i2502.onReturnToStartComplete)
  return i2502
}

Deserializers["ToolObject"] = function (request, data, root) {
  var i2504 = root || request.c( 'ToolObject' )
  var i2505 = data
  i2504.flyDistance = i2505[0]
  i2504.flyYOffset = i2505[1]
  i2504.flyInDuration = i2505[2]
  i2504.flyOutDuration = i2505[3]
  i2504.flyEase = i2505[4]
  i2504.flyInSide = i2505[5]
  i2504.flyOutSide = i2505[6]
  i2504.onFlyIn = request.d('UnityEngine.Events.UnityEvent', i2505[7], i2504.onFlyIn)
  i2504.onFlyOut = request.d('UnityEngine.Events.UnityEvent', i2505[8], i2504.onFlyOut)
  i2504.isDone = !!i2505[9]
  i2504.onProcess = !!i2505[10]
  i2504.requireMatchingTargetTypeForHandTut = !!i2505[11]
  request.r(i2505[12], i2505[13], 0, i2504, 'itemDraggable')
  request.r(i2505[14], i2505[15], 0, i2504, 'itemClickable')
  request.r(i2505[16], i2505[17], 0, i2504, 'itemStirring')
  request.r(i2505[18], i2505[19], 0, i2504, 'itemKnifeSpriteMaskCutter')
  request.r(i2505[20], i2505[21], 0, i2504, 'itemSpriteMaskPainter')
  request.r(i2505[22], i2505[23], 0, i2504, 'itemDragSpriteMaskPainter')
  request.r(i2505[24], i2505[25], 0, i2504, 'itemSpriteRevealPainter')
  request.r(i2505[26], i2505[27], 0, i2504, 'itemMoveToTarget')
  request.r(i2505[28], i2505[29], 0, i2504, 'animator')
  i2504.itemType = i2505[30]
  request.r(i2505[31], i2505[32], 0, i2504, 'spriteRenderer')
  i2504.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i2505[33], i2504.onKnifeIn)
  request.r(i2505[34], i2505[35], 0, i2504, 'knifePos')
  i2504.heartEffectScale = i2505[36]
  i2504.breakHeartEffectScale = i2505[37]
  i2504.blinkEffectScale = i2505[38]
  i2504.mergeEffectScale = i2505[39]
  i2504.playMoveToTargetFinishSound = !!i2505[40]
  i2504.moveToTargetFinishFxType = i2505[41]
  i2504.fxSpawnZPos = i2505[42]
  request.r(i2505[43], i2505[44], 0, i2504, 'tf')
  return i2504
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i2506 = root || request.c( 'ItemDragChildRotator' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'rotateTarget')
  i2506.dragEulerAngles = new pc.Vec3( i2507[2], i2507[3], i2507[4] )
  i2506.useLocalRotation = !!i2507[5]
  i2506.rotateRelative = !!i2507[6]
  i2506.rotateDuration = i2507[7]
  i2506.rotateEase = i2507[8]
  i2506.rotateMode = i2507[9]
  return i2506
}

Deserializers["ItemDragSpriteMaskPainter"] = function (request, data, root) {
  var i2508 = root || request.c( 'ItemDragSpriteMaskPainter' )
  var i2509 = data
  var i2511 = i2509[0]
  var i2510 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMaskPainter')))
  for(var i = 0; i < i2511.length; i += 2) {
  request.r(i2511[i + 0], i2511[i + 1], 1, i2510, '')
  }
  i2508.targetPainters = i2510
  request.r(i2509[1], i2509[2], 0, i2508, 'brushSpawnPoint')
  i2508.paintOnBeginDrag = !!i2509[3]
  i2508.returnToStartOnPaintComplete = !!i2509[4]
  i2508.spawnHeartOnAutoDropFail = !!i2509[5]
  request.r(i2509[6], i2509[7], 0, i2508, 'paintTrailFx')
  i2508.fxSoundType = i2509[8]
  i2508.soundPlayback = i2509[9]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2515 = data
  i2514.ambientIntensity = i2515[0]
  i2514.reflectionIntensity = i2515[1]
  i2514.ambientMode = i2515[2]
  i2514.ambientLight = new pc.Color(i2515[3], i2515[4], i2515[5], i2515[6])
  i2514.ambientSkyColor = new pc.Color(i2515[7], i2515[8], i2515[9], i2515[10])
  i2514.ambientGroundColor = new pc.Color(i2515[11], i2515[12], i2515[13], i2515[14])
  i2514.ambientEquatorColor = new pc.Color(i2515[15], i2515[16], i2515[17], i2515[18])
  i2514.fogColor = new pc.Color(i2515[19], i2515[20], i2515[21], i2515[22])
  i2514.fogEndDistance = i2515[23]
  i2514.fogStartDistance = i2515[24]
  i2514.fogDensity = i2515[25]
  i2514.fog = !!i2515[26]
  request.r(i2515[27], i2515[28], 0, i2514, 'skybox')
  i2514.fogMode = i2515[29]
  var i2517 = i2515[30]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2517[i + 0]) );
  }
  i2514.lightmaps = i2516
  i2514.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2515[31], i2514.lightProbes)
  i2514.lightmapsMode = i2515[32]
  i2514.mixedBakeMode = i2515[33]
  i2514.environmentLightingMode = i2515[34]
  i2514.ambientProbe = new pc.SphericalHarmonicsL2(i2515[35])
  i2514.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2515[36])
  i2514.useReferenceAmbientProbe = !!i2515[37]
  request.r(i2515[38], i2515[39], 0, i2514, 'customReflection')
  request.r(i2515[40], i2515[41], 0, i2514, 'defaultReflection')
  i2514.defaultReflectionMode = i2515[42]
  i2514.defaultReflectionResolution = i2515[43]
  i2514.sunLightObjectId = i2515[44]
  i2514.pixelLightCount = i2515[45]
  i2514.defaultReflectionHDR = !!i2515[46]
  i2514.hasLightDataAsset = !!i2515[47]
  i2514.hasManualGenerate = !!i2515[48]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'lightmapColor')
  request.r(i2521[2], i2521[3], 0, i2520, 'lightmapDirection')
  request.r(i2521[4], i2521[5], 0, i2520, 'shadowMask')
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2522 = root || new UnityEngine.LightProbes()
  var i2523 = data
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2531 = data
  var i2533 = i2531[0]
  var i2532 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2533[i + 0]));
  }
  i2530.ShaderCompilationErrors = i2532
  i2530.name = i2531[1]
  i2530.guid = i2531[2]
  var i2535 = i2531[3]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( i2535[i + 0] );
  }
  i2530.shaderDefinedKeywords = i2534
  var i2537 = i2531[4]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2537[i + 0]) );
  }
  i2530.passes = i2536
  var i2539 = i2531[5]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2539[i + 0]) );
  }
  i2530.usePasses = i2538
  var i2541 = i2531[6]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2541[i + 0]) );
  }
  i2530.defaultParameterValues = i2540
  request.r(i2531[7], i2531[8], 0, i2530, 'unityFallbackShader')
  i2530.readDepth = !!i2531[9]
  i2530.hasDepthOnlyPass = !!i2531[10]
  i2530.isCreatedByShaderGraph = !!i2531[11]
  i2530.disableBatching = !!i2531[12]
  i2530.compiled = !!i2531[13]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2545 = data
  i2544.shaderName = i2545[0]
  i2544.errorMessage = i2545[1]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2550 = root || new pc.UnityShaderPass()
  var i2551 = data
  i2550.id = i2551[0]
  i2550.subShaderIndex = i2551[1]
  i2550.name = i2551[2]
  i2550.passType = i2551[3]
  i2550.grabPassTextureName = i2551[4]
  i2550.usePass = !!i2551[5]
  i2550.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[6], i2550.zTest)
  i2550.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[7], i2550.zWrite)
  i2550.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[8], i2550.culling)
  i2550.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2551[9], i2550.blending)
  i2550.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2551[10], i2550.alphaBlending)
  i2550.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[11], i2550.colorWriteMask)
  i2550.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[12], i2550.offsetUnits)
  i2550.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[13], i2550.offsetFactor)
  i2550.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[14], i2550.stencilRef)
  i2550.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[15], i2550.stencilReadMask)
  i2550.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[16], i2550.stencilWriteMask)
  i2550.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2551[17], i2550.stencilOp)
  i2550.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2551[18], i2550.stencilOpFront)
  i2550.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2551[19], i2550.stencilOpBack)
  var i2553 = i2551[20]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2553[i + 0]) );
  }
  i2550.tags = i2552
  var i2555 = i2551[21]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( i2555[i + 0] );
  }
  i2550.passDefinedKeywords = i2554
  var i2557 = i2551[22]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2557[i + 0]) );
  }
  i2550.passDefinedKeywordGroups = i2556
  var i2559 = i2551[23]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2559[i + 0]) );
  }
  i2550.variants = i2558
  var i2561 = i2551[24]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2561[i + 0]) );
  }
  i2550.excludedVariants = i2560
  i2550.hasDepthReader = !!i2551[25]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2563 = data
  i2562.val = i2563[0]
  i2562.name = i2563[1]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2565 = data
  i2564.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2565[0], i2564.src)
  i2564.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2565[1], i2564.dst)
  i2564.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2565[2], i2564.op)
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2567 = data
  i2566.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[0], i2566.pass)
  i2566.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[1], i2566.fail)
  i2566.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[2], i2566.zFail)
  i2566.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[3], i2566.comp)
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.value = i2571[1]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2575 = data
  var i2577 = i2575[0]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( i2577[i + 0] );
  }
  i2574.keywords = i2576
  i2574.hasDiscard = !!i2575[1]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2581 = data
  i2580.passId = i2581[0]
  i2580.subShaderIndex = i2581[1]
  var i2583 = i2581[2]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( i2583[i + 0] );
  }
  i2580.keywords = i2582
  i2580.vertexProgram = i2581[3]
  i2580.fragmentProgram = i2581[4]
  i2580.exportedForWebGl2 = !!i2581[5]
  i2580.readDepth = !!i2581[6]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'shader')
  i2586.pass = i2587[2]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2591 = data
  i2590.name = i2591[0]
  i2590.type = i2591[1]
  i2590.value = new pc.Vec4( i2591[2], i2591[3], i2591[4], i2591[5] )
  i2590.textureValue = i2591[6]
  i2590.shaderPropertyFlag = i2591[7]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2593 = data
  i2592.name = i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'texture')
  i2592.aabb = i2593[3]
  i2592.vertices = i2593[4]
  i2592.triangles = i2593[5]
  i2592.textureRect = UnityEngine.Rect.MinMaxRect(i2593[6], i2593[7], i2593[8], i2593[9])
  i2592.packedRect = UnityEngine.Rect.MinMaxRect(i2593[10], i2593[11], i2593[12], i2593[13])
  i2592.border = new pc.Vec4( i2593[14], i2593[15], i2593[16], i2593[17] )
  i2592.transparency = i2593[18]
  i2592.bounds = i2593[19]
  i2592.pixelsPerUnit = i2593[20]
  i2592.textureWidth = i2593[21]
  i2592.textureHeight = i2593[22]
  i2592.nativeSize = new pc.Vec2( i2593[23], i2593[24] )
  i2592.pivot = new pc.Vec2( i2593[25], i2593[26] )
  i2592.textureRectOffset = new pc.Vec2( i2593[27], i2593[28] )
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2595 = data
  i2594.name = i2595[0]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2597 = data
  i2596.name = i2597[0]
  i2596.wrapMode = i2597[1]
  i2596.isLooping = !!i2597[2]
  i2596.length = i2597[3]
  var i2599 = i2597[4]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2599[i + 0]) );
  }
  i2596.curves = i2598
  var i2601 = i2597[5]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2601[i + 0]) );
  }
  i2596.events = i2600
  i2596.halfPrecision = !!i2597[6]
  i2596._frameRate = i2597[7]
  i2596.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2597[8], i2596.localBounds)
  i2596.hasMuscleCurves = !!i2597[9]
  var i2603 = i2597[10]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( i2603[i + 0] );
  }
  i2596.clipMuscleConstant = i2602
  i2596.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2597[11], i2596.clipBindingConstant)
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2607 = data
  i2606.path = i2607[0]
  i2606.hash = i2607[1]
  i2606.componentType = i2607[2]
  i2606.property = i2607[3]
  i2606.keys = i2607[4]
  var i2609 = i2607[5]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2609[i + 0]) );
  }
  i2606.objectReferenceKeys = i2608
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2613 = data
  i2612.time = i2613[0]
  request.r(i2613[1], i2613[2], 0, i2612, 'value')
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2617 = data
  i2616.functionName = i2617[0]
  i2616.floatParameter = i2617[1]
  i2616.intParameter = i2617[2]
  i2616.stringParameter = i2617[3]
  request.r(i2617[4], i2617[5], 0, i2616, 'objectReferenceParameter')
  i2616.time = i2617[6]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2619 = data
  i2618.center = new pc.Vec3( i2619[0], i2619[1], i2619[2] )
  i2618.extends = new pc.Vec3( i2619[3], i2619[4], i2619[5] )
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2623 = data
  var i2625 = i2623[0]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( i2625[i + 0] );
  }
  i2622.genericBindings = i2624
  var i2627 = i2623[1]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( i2627[i + 0] );
  }
  i2622.pptrCurveMapping = i2626
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2629 = data
  i2628.name = i2629[0]
  var i2631 = i2629[1]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2631[i + 0]) );
  }
  i2628.layers = i2630
  var i2633 = i2629[2]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2633[i + 0]) );
  }
  i2628.parameters = i2632
  i2628.animationClips = i2629[3]
  i2628.avatarUnsupported = i2629[4]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2637 = data
  i2636.name = i2637[0]
  i2636.defaultWeight = i2637[1]
  i2636.blendingMode = i2637[2]
  i2636.avatarMask = i2637[3]
  i2636.syncedLayerIndex = i2637[4]
  i2636.syncedLayerAffectsTiming = !!i2637[5]
  i2636.syncedLayers = i2637[6]
  i2636.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2637[7], i2636.stateMachine)
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.name = i2639[1]
  i2638.path = i2639[2]
  var i2641 = i2639[3]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2641[i + 0]) );
  }
  i2638.states = i2640
  var i2643 = i2639[4]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2643[i + 0]) );
  }
  i2638.machines = i2642
  var i2645 = i2639[5]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2645[i + 0]) );
  }
  i2638.entryStateTransitions = i2644
  var i2647 = i2639[6]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2647[i + 0]) );
  }
  i2638.exitStateTransitions = i2646
  var i2649 = i2639[7]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2649[i + 0]) );
  }
  i2638.anyStateTransitions = i2648
  i2638.defaultStateId = i2639[8]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2653 = data
  i2652.id = i2653[0]
  i2652.name = i2653[1]
  i2652.cycleOffset = i2653[2]
  i2652.cycleOffsetParameter = i2653[3]
  i2652.cycleOffsetParameterActive = !!i2653[4]
  i2652.mirror = !!i2653[5]
  i2652.mirrorParameter = i2653[6]
  i2652.mirrorParameterActive = !!i2653[7]
  i2652.motionId = i2653[8]
  i2652.nameHash = i2653[9]
  i2652.fullPathHash = i2653[10]
  i2652.speed = i2653[11]
  i2652.speedParameter = i2653[12]
  i2652.speedParameterActive = !!i2653[13]
  i2652.tag = i2653[14]
  i2652.tagHash = i2653[15]
  i2652.writeDefaultValues = !!i2653[16]
  var i2655 = i2653[17]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 2, i2654, '')
  }
  i2652.behaviours = i2654
  var i2657 = i2653[18]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2657[i + 0]) );
  }
  i2652.transitions = i2656
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2663 = data
  i2662.fullPath = i2663[0]
  i2662.canTransitionToSelf = !!i2663[1]
  i2662.duration = i2663[2]
  i2662.exitTime = i2663[3]
  i2662.hasExitTime = !!i2663[4]
  i2662.hasFixedDuration = !!i2663[5]
  i2662.interruptionSource = i2663[6]
  i2662.offset = i2663[7]
  i2662.orderedInterruption = !!i2663[8]
  i2662.destinationStateId = i2663[9]
  i2662.isExit = !!i2663[10]
  i2662.mute = !!i2663[11]
  i2662.solo = !!i2663[12]
  var i2665 = i2663[13]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2665[i + 0]) );
  }
  i2662.conditions = i2664
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2671 = data
  i2670.destinationStateId = i2671[0]
  i2670.isExit = !!i2671[1]
  i2670.mute = !!i2671[2]
  i2670.solo = !!i2671[3]
  var i2673 = i2671[4]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2673[i + 0]) );
  }
  i2670.conditions = i2672
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2677 = data
  i2676.defaultBool = !!i2677[0]
  i2676.defaultFloat = i2677[1]
  i2676.defaultInt = i2677[2]
  i2676.name = i2677[3]
  i2676.nameHash = i2677[4]
  i2676.type = i2677[5]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2679 = data
  i2678.name = i2679[0]
  i2678.bytes64 = i2679[1]
  i2678.data = i2679[2]
  return i2678
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2680 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2681 = data
  i2680.normalStyle = i2681[0]
  i2680.normalSpacingOffset = i2681[1]
  i2680.boldStyle = i2681[2]
  i2680.boldSpacing = i2681[3]
  i2680.italicStyle = i2681[4]
  i2680.tabSize = i2681[5]
  request.r(i2681[6], i2681[7], 0, i2680, 'atlas')
  i2680.m_SourceFontFileGUID = i2681[8]
  i2680.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2681[9], i2680.m_CreationSettings)
  request.r(i2681[10], i2681[11], 0, i2680, 'm_SourceFontFile')
  i2680.m_SourceFontFilePath = i2681[12]
  i2680.m_AtlasPopulationMode = i2681[13]
  i2680.InternalDynamicOS = !!i2681[14]
  var i2683 = i2681[15]
  var i2682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.add(request.d('UnityEngine.TextCore.Glyph', i2683[i + 0]));
  }
  i2680.m_GlyphTable = i2682
  var i2685 = i2681[16]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('TMPro.TMP_Character', i2685[i + 0]));
  }
  i2680.m_CharacterTable = i2684
  var i2687 = i2681[17]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 2) {
  request.r(i2687[i + 0], i2687[i + 1], 2, i2686, '')
  }
  i2680.m_AtlasTextures = i2686
  i2680.m_AtlasTextureIndex = i2681[18]
  i2680.m_IsMultiAtlasTexturesEnabled = !!i2681[19]
  i2680.m_GetFontFeatures = !!i2681[20]
  i2680.m_ClearDynamicDataOnBuild = !!i2681[21]
  i2680.m_AtlasWidth = i2681[22]
  i2680.m_AtlasHeight = i2681[23]
  i2680.m_AtlasPadding = i2681[24]
  i2680.m_AtlasRenderMode = i2681[25]
  var i2689 = i2681[26]
  var i2688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.add(request.d('UnityEngine.TextCore.GlyphRect', i2689[i + 0]));
  }
  i2680.m_UsedGlyphRects = i2688
  var i2691 = i2681[27]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('UnityEngine.TextCore.GlyphRect', i2691[i + 0]));
  }
  i2680.m_FreeGlyphRects = i2690
  i2680.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2681[28], i2680.m_FontFeatureTable)
  i2680.m_ShouldReimportFontFeatures = !!i2681[29]
  var i2693 = i2681[30]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2693.length; i += 2) {
  request.r(i2693[i + 0], i2693[i + 1], 1, i2692, '')
  }
  i2680.m_FallbackFontAssetTable = i2692
  var i2695 = i2681[31]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('TMPro.TMP_FontWeightPair', i2695[i + 0]) );
  }
  i2680.m_FontWeightTable = i2694
  var i2697 = i2681[32]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('TMPro.TMP_FontWeightPair', i2697[i + 0]) );
  }
  i2680.fontWeights = i2696
  i2680.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2681[33], i2680.m_fontInfo)
  var i2699 = i2681[34]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.TMP_Glyph', i2699[i + 0]));
  }
  i2680.m_glyphInfoList = i2698
  i2680.m_KerningTable = request.d('TMPro.KerningTable', i2681[35], i2680.m_KerningTable)
  var i2701 = i2681[36]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2701.length; i += 2) {
  request.r(i2701[i + 0], i2701[i + 1], 1, i2700, '')
  }
  i2680.fallbackFontAssets = i2700
  i2680.m_Version = i2681[37]
  i2680.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2681[38], i2680.m_FaceInfo)
  request.r(i2681[39], i2681[40], 0, i2680, 'm_Material')
  return i2680
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2703 = data
  i2702.sourceFontFileName = i2703[0]
  i2702.sourceFontFileGUID = i2703[1]
  i2702.faceIndex = i2703[2]
  i2702.pointSizeSamplingMode = i2703[3]
  i2702.pointSize = i2703[4]
  i2702.padding = i2703[5]
  i2702.paddingMode = i2703[6]
  i2702.packingMode = i2703[7]
  i2702.atlasWidth = i2703[8]
  i2702.atlasHeight = i2703[9]
  i2702.characterSetSelectionMode = i2703[10]
  i2702.characterSequence = i2703[11]
  i2702.referencedFontAssetGUID = i2703[12]
  i2702.referencedTextAssetGUID = i2703[13]
  i2702.fontStyle = i2703[14]
  i2702.fontStyleModifier = i2703[15]
  i2702.renderMode = i2703[16]
  i2702.includeFontFeatures = !!i2703[17]
  return i2702
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2707 = data
  i2706.m_Index = i2707[0]
  i2706.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2707[1], i2706.m_Metrics)
  i2706.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2707[2], i2706.m_GlyphRect)
  i2706.m_Scale = i2707[3]
  i2706.m_AtlasIndex = i2707[4]
  i2706.m_ClassDefinitionType = i2707[5]
  return i2706
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2709 = data
  i2708.m_Width = i2709[0]
  i2708.m_Height = i2709[1]
  i2708.m_HorizontalBearingX = i2709[2]
  i2708.m_HorizontalBearingY = i2709[3]
  i2708.m_HorizontalAdvance = i2709[4]
  return i2708
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2711 = data
  i2710.m_X = i2711[0]
  i2710.m_Y = i2711[1]
  i2710.m_Width = i2711[2]
  i2710.m_Height = i2711[3]
  return i2710
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.TMP_Character' )
  var i2715 = data
  i2714.m_ElementType = i2715[0]
  i2714.m_Unicode = i2715[1]
  i2714.m_GlyphIndex = i2715[2]
  i2714.m_Scale = i2715[3]
  return i2714
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2721 = data
  var i2723 = i2721[0]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('TMPro.MultipleSubstitutionRecord', i2723[i + 0]));
  }
  i2720.m_MultipleSubstitutionRecords = i2722
  var i2725 = i2721[1]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.LigatureSubstitutionRecord', i2725[i + 0]));
  }
  i2720.m_LigatureSubstitutionRecords = i2724
  var i2727 = i2721[2]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2727[i + 0]));
  }
  i2720.m_GlyphPairAdjustmentRecords = i2726
  var i2729 = i2721[3]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2729[i + 0]));
  }
  i2720.m_MarkToBaseAdjustmentRecords = i2728
  var i2731 = i2721[4]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2731[i + 0]));
  }
  i2720.m_MarkToMarkAdjustmentRecords = i2730
  return i2720
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2735 = data
  i2734.m_TargetGlyphID = i2735[0]
  i2734.m_SubstituteGlyphIDs = i2735[1]
  return i2734
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2739 = data
  i2738.m_ComponentGlyphIDs = i2739[0]
  i2738.m_LigatureGlyphID = i2739[1]
  return i2738
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2743 = data
  i2742.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2743[0], i2742.m_FirstAdjustmentRecord)
  i2742.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2743[1], i2742.m_SecondAdjustmentRecord)
  i2742.m_FeatureLookupFlags = i2743[2]
  return i2742
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2747 = data
  i2746.m_BaseGlyphID = i2747[0]
  i2746.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2747[1], i2746.m_BaseGlyphAnchorPoint)
  i2746.m_MarkGlyphID = i2747[2]
  i2746.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2747[3], i2746.m_MarkPositionAdjustment)
  return i2746
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2751 = data
  i2750.m_BaseMarkGlyphID = i2751[0]
  i2750.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2751[1], i2750.m_BaseMarkGlyphAnchorPoint)
  i2750.m_CombiningMarkGlyphID = i2751[2]
  i2750.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2751[3], i2750.m_CombiningMarkPositionAdjustment)
  return i2750
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2757 = data
  request.r(i2757[0], i2757[1], 0, i2756, 'regularTypeface')
  request.r(i2757[2], i2757[3], 0, i2756, 'italicTypeface')
  return i2756
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2758 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2759 = data
  i2758.Name = i2759[0]
  i2758.PointSize = i2759[1]
  i2758.Scale = i2759[2]
  i2758.CharacterCount = i2759[3]
  i2758.LineHeight = i2759[4]
  i2758.Baseline = i2759[5]
  i2758.Ascender = i2759[6]
  i2758.CapHeight = i2759[7]
  i2758.Descender = i2759[8]
  i2758.CenterLine = i2759[9]
  i2758.SuperscriptOffset = i2759[10]
  i2758.SubscriptOffset = i2759[11]
  i2758.SubSize = i2759[12]
  i2758.Underline = i2759[13]
  i2758.UnderlineThickness = i2759[14]
  i2758.strikethrough = i2759[15]
  i2758.strikethroughThickness = i2759[16]
  i2758.TabWidth = i2759[17]
  i2758.Padding = i2759[18]
  i2758.AtlasWidth = i2759[19]
  i2758.AtlasHeight = i2759[20]
  return i2758
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2763 = data
  i2762.id = i2763[0]
  i2762.x = i2763[1]
  i2762.y = i2763[2]
  i2762.width = i2763[3]
  i2762.height = i2763[4]
  i2762.xOffset = i2763[5]
  i2762.yOffset = i2763[6]
  i2762.xAdvance = i2763[7]
  i2762.scale = i2763[8]
  return i2762
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.KerningTable' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.add(request.d('TMPro.KerningPair', i2767[i + 0]));
  }
  i2764.kerningPairs = i2766
  return i2764
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.KerningPair' )
  var i2771 = data
  i2770.xOffset = i2771[0]
  i2770.m_FirstGlyph = i2771[1]
  i2770.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2771[2], i2770.m_FirstGlyphAdjustments)
  i2770.m_SecondGlyph = i2771[3]
  i2770.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2771[4], i2770.m_SecondGlyphAdjustments)
  i2770.m_IgnoreSpacingAdjustments = !!i2771[5]
  return i2770
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2772 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2773 = data
  i2772.m_FaceIndex = i2773[0]
  i2772.m_FamilyName = i2773[1]
  i2772.m_StyleName = i2773[2]
  i2772.m_PointSize = i2773[3]
  i2772.m_Scale = i2773[4]
  i2772.m_UnitsPerEM = i2773[5]
  i2772.m_LineHeight = i2773[6]
  i2772.m_AscentLine = i2773[7]
  i2772.m_CapLine = i2773[8]
  i2772.m_MeanLine = i2773[9]
  i2772.m_Baseline = i2773[10]
  i2772.m_DescentLine = i2773[11]
  i2772.m_SuperscriptOffset = i2773[12]
  i2772.m_SuperscriptSize = i2773[13]
  i2772.m_SubscriptOffset = i2773[14]
  i2772.m_SubscriptSize = i2773[15]
  i2772.m_UnderlineOffset = i2773[16]
  i2772.m_UnderlineThickness = i2773[17]
  i2772.m_StrikethroughOffset = i2773[18]
  i2772.m_StrikethroughThickness = i2773[19]
  i2772.m_TabWidth = i2773[20]
  return i2772
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2774 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2775 = data
  i2774.useSafeMode = !!i2775[0]
  i2774.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2775[1], i2774.safeModeOptions)
  i2774.timeScale = i2775[2]
  i2774.unscaledTimeScale = i2775[3]
  i2774.useSmoothDeltaTime = !!i2775[4]
  i2774.maxSmoothUnscaledTime = i2775[5]
  i2774.rewindCallbackMode = i2775[6]
  i2774.showUnityEditorReport = !!i2775[7]
  i2774.logBehaviour = i2775[8]
  i2774.drawGizmos = !!i2775[9]
  i2774.defaultRecyclable = !!i2775[10]
  i2774.defaultAutoPlay = i2775[11]
  i2774.defaultUpdateType = i2775[12]
  i2774.defaultTimeScaleIndependent = !!i2775[13]
  i2774.defaultEaseType = i2775[14]
  i2774.defaultEaseOvershootOrAmplitude = i2775[15]
  i2774.defaultEasePeriod = i2775[16]
  i2774.defaultAutoKill = !!i2775[17]
  i2774.defaultLoopType = i2775[18]
  i2774.debugMode = !!i2775[19]
  i2774.debugStoreTargetId = !!i2775[20]
  i2774.showPreviewPanel = !!i2775[21]
  i2774.storeSettingsLocation = i2775[22]
  i2774.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2775[23], i2774.modules)
  i2774.createASMDEF = !!i2775[24]
  i2774.showPlayingTweens = !!i2775[25]
  i2774.showPausedTweens = !!i2775[26]
  return i2774
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2777 = data
  i2776.logBehaviour = i2777[0]
  i2776.nestedTweenFailureBehaviour = i2777[1]
  return i2776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2779 = data
  i2778.showPanel = !!i2779[0]
  i2778.audioEnabled = !!i2779[1]
  i2778.physicsEnabled = !!i2779[2]
  i2778.physics2DEnabled = !!i2779[3]
  i2778.spriteEnabled = !!i2779[4]
  i2778.uiEnabled = !!i2779[5]
  i2778.uiToolkitEnabled = !!i2779[6]
  i2778.textMeshProEnabled = !!i2779[7]
  i2778.tk2DEnabled = !!i2779[8]
  i2778.deAudioEnabled = !!i2779[9]
  i2778.deUnityExtendedEnabled = !!i2779[10]
  i2778.epoOutlineEnabled = !!i2779[11]
  return i2778
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_Settings' )
  var i2781 = data
  i2780.assetVersion = i2781[0]
  i2780.m_TextWrappingMode = i2781[1]
  i2780.m_enableKerning = !!i2781[2]
  var i2783 = i2781[3]
  var i2782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.add(i2783[i + 0]);
  }
  i2780.m_ActiveFontFeatures = i2782
  i2780.m_enableExtraPadding = !!i2781[4]
  i2780.m_enableTintAllSprites = !!i2781[5]
  i2780.m_enableParseEscapeCharacters = !!i2781[6]
  i2780.m_EnableRaycastTarget = !!i2781[7]
  i2780.m_GetFontFeaturesAtRuntime = !!i2781[8]
  i2780.m_missingGlyphCharacter = i2781[9]
  i2780.m_ClearDynamicDataOnBuild = !!i2781[10]
  i2780.m_warningsDisabled = !!i2781[11]
  request.r(i2781[12], i2781[13], 0, i2780, 'm_defaultFontAsset')
  i2780.m_defaultFontAssetPath = i2781[14]
  i2780.m_defaultFontSize = i2781[15]
  i2780.m_defaultAutoSizeMinRatio = i2781[16]
  i2780.m_defaultAutoSizeMaxRatio = i2781[17]
  i2780.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2781[18], i2781[19] )
  i2780.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2781[20], i2781[21] )
  i2780.m_autoSizeTextContainer = !!i2781[22]
  i2780.m_IsTextObjectScaleStatic = !!i2781[23]
  var i2785 = i2781[24]
  var i2784 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2785.length; i += 2) {
  request.r(i2785[i + 0], i2785[i + 1], 1, i2784, '')
  }
  i2780.m_fallbackFontAssets = i2784
  i2780.m_matchMaterialPreset = !!i2781[25]
  i2780.m_HideSubTextObjects = !!i2781[26]
  request.r(i2781[27], i2781[28], 0, i2780, 'm_defaultSpriteAsset')
  i2780.m_defaultSpriteAssetPath = i2781[29]
  i2780.m_enableEmojiSupport = !!i2781[30]
  i2780.m_MissingCharacterSpriteUnicode = i2781[31]
  var i2787 = i2781[32]
  var i2786 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2787.length; i += 2) {
  request.r(i2787[i + 0], i2787[i + 1], 1, i2786, '')
  }
  i2780.m_EmojiFallbackTextAssets = i2786
  i2780.m_defaultColorGradientPresetsPath = i2781[33]
  request.r(i2781[34], i2781[35], 0, i2780, 'm_defaultStyleSheet')
  i2780.m_StyleSheetsResourcePath = i2781[36]
  request.r(i2781[37], i2781[38], 0, i2780, 'm_leadingCharacters')
  request.r(i2781[39], i2781[40], 0, i2780, 'm_followingCharacters')
  i2780.m_UseModernHangulLineBreakingRules = !!i2781[41]
  return i2780
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2790 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'spriteSheet')
  var i2793 = i2791[2]
  var i2792 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.add(request.d('TMPro.TMP_Sprite', i2793[i + 0]));
  }
  i2790.spriteInfoList = i2792
  var i2795 = i2791[3]
  var i2794 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2795.length; i += 2) {
  request.r(i2795[i + 0], i2795[i + 1], 1, i2794, '')
  }
  i2790.fallbackSpriteAssets = i2794
  var i2797 = i2791[4]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('TMPro.TMP_SpriteCharacter', i2797[i + 0]));
  }
  i2790.m_SpriteCharacterTable = i2796
  var i2799 = i2791[5]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.add(request.d('TMPro.TMP_SpriteGlyph', i2799[i + 0]));
  }
  i2790.m_GlyphTable = i2798
  i2790.m_Version = i2791[6]
  i2790.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2791[7], i2790.m_FaceInfo)
  request.r(i2791[8], i2791[9], 0, i2790, 'm_Material')
  return i2790
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2802 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2803 = data
  i2802.name = i2803[0]
  i2802.hashCode = i2803[1]
  i2802.unicode = i2803[2]
  i2802.pivot = new pc.Vec2( i2803[3], i2803[4] )
  request.r(i2803[5], i2803[6], 0, i2802, 'sprite')
  i2802.id = i2803[7]
  i2802.x = i2803[8]
  i2802.y = i2803[9]
  i2802.width = i2803[10]
  i2802.height = i2803[11]
  i2802.xOffset = i2803[12]
  i2802.yOffset = i2803[13]
  i2802.xAdvance = i2803[14]
  i2802.scale = i2803[15]
  return i2802
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2808 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2809 = data
  i2808.m_Name = i2809[0]
  i2808.m_ElementType = i2809[1]
  i2808.m_Unicode = i2809[2]
  i2808.m_GlyphIndex = i2809[3]
  i2808.m_Scale = i2809[4]
  return i2808
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2813 = data
  request.r(i2813[0], i2813[1], 0, i2812, 'sprite')
  i2812.m_Index = i2813[2]
  i2812.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2813[3], i2812.m_Metrics)
  i2812.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2813[4], i2812.m_GlyphRect)
  i2812.m_Scale = i2813[5]
  i2812.m_AtlasIndex = i2813[6]
  i2812.m_ClassDefinitionType = i2813[7]
  return i2812
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2815 = data
  var i2817 = i2815[0]
  var i2816 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.add(request.d('TMPro.TMP_Style', i2817[i + 0]));
  }
  i2814.m_StyleList = i2816
  return i2814
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_Style' )
  var i2821 = data
  i2820.m_Name = i2821[0]
  i2820.m_HashCode = i2821[1]
  i2820.m_OpeningDefinition = i2821[2]
  i2820.m_ClosingDefinition = i2821[3]
  i2820.m_OpeningTagArray = i2821[4]
  i2820.m_ClosingTagArray = i2821[5]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2823 = data
  var i2825 = i2823[0]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2825[i + 0]) );
  }
  i2822.files = i2824
  i2822.componentToPrefabIds = i2823[1]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2829 = data
  i2828.path = i2829[0]
  request.r(i2829[1], i2829[2], 0, i2828, 'unityObject')
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2831 = data
  var i2833 = i2831[0]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2833[i + 0]) );
  }
  i2830.scriptsExecutionOrder = i2832
  var i2835 = i2831[1]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2835[i + 0]) );
  }
  i2830.sortingLayers = i2834
  var i2837 = i2831[2]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2837[i + 0]) );
  }
  i2830.cullingLayers = i2836
  i2830.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2831[3], i2830.timeSettings)
  i2830.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2831[4], i2830.physicsSettings)
  i2830.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2831[5], i2830.physics2DSettings)
  i2830.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2831[6], i2830.qualitySettings)
  i2830.enableRealtimeShadows = !!i2831[7]
  i2830.enableAutoInstancing = !!i2831[8]
  i2830.enableStaticBatching = !!i2831[9]
  i2830.enableDynamicBatching = !!i2831[10]
  i2830.lightmapEncodingQuality = i2831[11]
  i2830.desiredColorSpace = i2831[12]
  var i2839 = i2831[13]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( i2839[i + 0] );
  }
  i2830.allTags = i2838
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2843 = data
  i2842.name = i2843[0]
  i2842.value = i2843[1]
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2847 = data
  i2846.id = i2847[0]
  i2846.name = i2847[1]
  i2846.value = i2847[2]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2851 = data
  i2850.id = i2851[0]
  i2850.name = i2851[1]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2853 = data
  i2852.fixedDeltaTime = i2853[0]
  i2852.maximumDeltaTime = i2853[1]
  i2852.timeScale = i2853[2]
  i2852.maximumParticleTimestep = i2853[3]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2855 = data
  i2854.gravity = new pc.Vec3( i2855[0], i2855[1], i2855[2] )
  i2854.defaultSolverIterations = i2855[3]
  i2854.bounceThreshold = i2855[4]
  i2854.autoSyncTransforms = !!i2855[5]
  i2854.autoSimulation = !!i2855[6]
  var i2857 = i2855[7]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2857[i + 0]) );
  }
  i2854.collisionMatrix = i2856
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2861 = data
  i2860.enabled = !!i2861[0]
  i2860.layerId = i2861[1]
  i2860.otherLayerId = i2861[2]
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2863 = data
  request.r(i2863[0], i2863[1], 0, i2862, 'material')
  i2862.gravity = new pc.Vec2( i2863[2], i2863[3] )
  i2862.positionIterations = i2863[4]
  i2862.velocityIterations = i2863[5]
  i2862.velocityThreshold = i2863[6]
  i2862.maxLinearCorrection = i2863[7]
  i2862.maxAngularCorrection = i2863[8]
  i2862.maxTranslationSpeed = i2863[9]
  i2862.maxRotationSpeed = i2863[10]
  i2862.baumgarteScale = i2863[11]
  i2862.baumgarteTOIScale = i2863[12]
  i2862.timeToSleep = i2863[13]
  i2862.linearSleepTolerance = i2863[14]
  i2862.angularSleepTolerance = i2863[15]
  i2862.defaultContactOffset = i2863[16]
  i2862.autoSimulation = !!i2863[17]
  i2862.queriesHitTriggers = !!i2863[18]
  i2862.queriesStartInColliders = !!i2863[19]
  i2862.callbacksOnDisable = !!i2863[20]
  i2862.reuseCollisionCallbacks = !!i2863[21]
  i2862.autoSyncTransforms = !!i2863[22]
  var i2865 = i2863[23]
  var i2864 = []
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2865[i + 0]) );
  }
  i2862.collisionMatrix = i2864
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2869 = data
  i2868.enabled = !!i2869[0]
  i2868.layerId = i2869[1]
  i2868.otherLayerId = i2869[2]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2873[i + 0]) );
  }
  i2870.qualityLevels = i2872
  var i2875 = i2871[1]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( i2875[i + 0] );
  }
  i2870.names = i2874
  i2870.shadows = i2871[2]
  i2870.anisotropicFiltering = i2871[3]
  i2870.antiAliasing = i2871[4]
  i2870.lodBias = i2871[5]
  i2870.shadowCascades = i2871[6]
  i2870.shadowDistance = i2871[7]
  i2870.shadowmaskMode = i2871[8]
  i2870.shadowProjection = i2871[9]
  i2870.shadowResolution = i2871[10]
  i2870.softParticles = !!i2871[11]
  i2870.softVegetation = !!i2871[12]
  i2870.activeColorSpace = i2871[13]
  i2870.desiredColorSpace = i2871[14]
  i2870.masterTextureLimit = i2871[15]
  i2870.maxQueuedFrames = i2871[16]
  i2870.particleRaycastBudget = i2871[17]
  i2870.pixelLightCount = i2871[18]
  i2870.realtimeReflectionProbes = !!i2871[19]
  i2870.shadowCascade2Split = i2871[20]
  i2870.shadowCascade4Split = new pc.Vec3( i2871[21], i2871[22], i2871[23] )
  i2870.streamingMipmapsActive = !!i2871[24]
  i2870.vSyncCount = i2871[25]
  i2870.asyncUploadBufferSize = i2871[26]
  i2870.asyncUploadTimeSlice = i2871[27]
  i2870.billboardsFaceCameraPosition = !!i2871[28]
  i2870.shadowNearPlaneOffset = i2871[29]
  i2870.streamingMipmapsMemoryBudget = i2871[30]
  i2870.maximumLODLevel = i2871[31]
  i2870.streamingMipmapsAddAllCameras = !!i2871[32]
  i2870.streamingMipmapsMaxLevelReduction = i2871[33]
  i2870.streamingMipmapsRenderersPerFrame = i2871[34]
  i2870.resolutionScalingFixedDPIFactor = i2871[35]
  i2870.streamingMipmapsMaxFileIORequests = i2871[36]
  i2870.currentQualityLevel = i2871[37]
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2881 = data
  i2880.weight = i2881[0]
  i2880.vertices = i2881[1]
  i2880.normals = i2881[2]
  i2880.tangents = i2881[3]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2885 = data
  i2884.mode = i2885[0]
  i2884.parameter = i2885[1]
  i2884.threshold = i2885[2]
  return i2884
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2886 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2887 = data
  i2886.m_GlyphIndex = i2887[0]
  i2886.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2887[1], i2886.m_GlyphValueRecord)
  return i2886
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2889 = data
  i2888.m_XCoordinate = i2889[0]
  i2888.m_YCoordinate = i2889[1]
  return i2888
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2890 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2891 = data
  i2890.m_XPositionAdjustment = i2891[0]
  i2890.m_YPositionAdjustment = i2891[1]
  return i2890
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2893 = data
  i2892.xPlacement = i2893[0]
  i2892.yPlacement = i2893[1]
  i2892.xAdvance = i2893[2]
  i2892.yAdvance = i2893[3]
  return i2892
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2894 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2895 = data
  i2894.m_XPlacement = i2895[0]
  i2894.m_YPlacement = i2895[1]
  i2894.m_XAdvance = i2895[2]
  i2894.m_YAdvance = i2895[3]
  return i2894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[37],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[37],"91":[92],"93":[94],"95":[94],"17":[16],"12":[10],"96":[97],"53":[52],"52":[97],"98":[52],"40":[52],"99":[97],"48":[97],"100":[97],"42":[97],"101":[102],"103":[104],"105":[92,106],"107":[104],"108":[107],"109":[104],"110":[104],"111":[112],"113":[112],"114":[104],"115":[16],"116":[23,16],"117":[92],"118":[23,16],"119":[21,92],"104":[92],"120":[92,106],"121":[70],"122":[77],"123":[124],"125":[112],"126":[14],"127":[37],"128":[129],"130":[44],"131":[17],"132":[16],"133":[92,16],"24":[16,23],"134":[16],"135":[23,16],"136":[92],"137":[23,16],"138":[16],"139":[140],"141":[140],"142":[140],"143":[16],"144":[16],"20":[17],"27":[23,16],"145":[16],"19":[17],"146":[16],"147":[16],"148":[16],"149":[16],"150":[16],"151":[16],"152":[16],"153":[16],"154":[16],"155":[23,16],"156":[16],"157":[16],"158":[16],"26":[16],"159":[23,16],"160":[16],"161":[44],"162":[44],"45":[44],"163":[44],"164":[37],"165":[37]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.SpriteMask","UnityEngine.Sprite","BrushMaskUnit","HeartBreakEffect","UnityEngine.SpriteRenderer","HeartEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","UnityEngine.Camera","InputManager","HandTutManager","ItemDragSpriteMaskPainter","ToolObject","Sock","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SortChildByZPos","UnityEngine.CapsuleCollider","ItemSpriteMaskPainter","Item","ItemSpriteRevealPainter","CleaningTarget","ItemDraggable","ItemDragChildRotator","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ItemClickable","UnityEngine.Collider","ItemDragRaycastTarget","ItemKnifeSpriteMaskCutter","ItemStirring","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "5.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_PerfectTidy_V133";

Deserializers.lunaAppID = "26861";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1859";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5326";

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

Deserializers.buildID = "40d6f87a-2ac8-4859-a694-9b34b5b5012d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

