var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.JointSpring' )
  var i2125 = data
  i2124.spring = i2125[0]
  i2124.damper = i2125[1]
  i2124.targetPosition = i2125[2]
  return i2124
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.JointMotor' )
  var i2127 = data
  i2126.m_TargetVelocity = i2127[0]
  i2126.m_Force = i2127[1]
  i2126.m_FreeSpin = i2127[2]
  return i2126
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.JointLimits' )
  var i2129 = data
  i2128.m_Min = i2129[0]
  i2128.m_Max = i2129[1]
  i2128.m_Bounciness = i2129[2]
  i2128.m_BounceMinVelocity = i2129[3]
  i2128.m_ContactDistance = i2129[4]
  i2128.minBounce = i2129[5]
  i2128.maxBounce = i2129[6]
  return i2128
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointDrive' )
  var i2131 = data
  i2130.m_PositionSpring = i2131[0]
  i2130.m_PositionDamper = i2131[1]
  i2130.m_MaximumForce = i2131[2]
  i2130.m_UseAcceleration = i2131[3]
  return i2130
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2133 = data
  i2132.m_Spring = i2133[0]
  i2132.m_Damper = i2133[1]
  return i2132
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2135 = data
  i2134.m_Limit = i2135[0]
  i2134.m_Bounciness = i2135[1]
  i2134.m_ContactDistance = i2135[2]
  return i2134
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2137 = data
  i2136.m_ExtremumSlip = i2137[0]
  i2136.m_ExtremumValue = i2137[1]
  i2136.m_AsymptoteSlip = i2137[2]
  i2136.m_AsymptoteValue = i2137[3]
  i2136.m_Stiffness = i2137[4]
  return i2136
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2139 = data
  i2138.m_LowerAngle = i2139[0]
  i2138.m_UpperAngle = i2139[1]
  return i2138
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2141 = data
  i2140.m_MotorSpeed = i2141[0]
  i2140.m_MaximumMotorTorque = i2141[1]
  return i2140
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2143 = data
  i2142.m_DampingRatio = i2143[0]
  i2142.m_Frequency = i2143[1]
  i2142.m_Angle = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2145 = data
  i2144.m_LowerTranslation = i2145[0]
  i2144.m_UpperTranslation = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2146 = root || new pc.UnityMaterial()
  var i2147 = data
  i2146.name = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'shader')
  i2146.renderQueue = i2147[3]
  i2146.enableInstancing = !!i2147[4]
  var i2149 = i2147[5]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2149[i + 0]) );
  }
  i2146.floatParameters = i2148
  var i2151 = i2147[6]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2151[i + 0]) );
  }
  i2146.colorParameters = i2150
  var i2153 = i2147[7]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2153[i + 0]) );
  }
  i2146.vectorParameters = i2152
  var i2155 = i2147[8]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2155[i + 0]) );
  }
  i2146.textureParameters = i2154
  var i2157 = i2147[9]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2157[i + 0]) );
  }
  i2146.materialFlags = i2156
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.value = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.value = new pc.Color(i2165[1], i2165[2], i2165[3], i2165[4])
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.value = new pc.Vec4( i2169[1], i2169[2], i2169[3], i2169[4] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2173 = data
  i2172.name = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'value')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.enabled = !!i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.width = i2179[1]
  i2178.height = i2179[2]
  i2178.mipmapCount = i2179[3]
  i2178.anisoLevel = i2179[4]
  i2178.filterMode = i2179[5]
  i2178.hdr = !!i2179[6]
  i2178.format = i2179[7]
  i2178.wrapMode = i2179[8]
  i2178.alphaIsTransparency = !!i2179[9]
  i2178.alphaSource = i2179[10]
  i2178.graphicsFormat = i2179[11]
  i2178.sRGBTexture = !!i2179[12]
  i2178.desiredColorSpace = i2179[13]
  i2178.wrapU = i2179[14]
  i2178.wrapV = i2179[15]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2181 = data
  i2180.position = new pc.Vec3( i2181[0], i2181[1], i2181[2] )
  i2180.scale = new pc.Vec3( i2181[3], i2181[4], i2181[5] )
  i2180.rotation = new pc.Quat(i2181[6], i2181[7], i2181[8], i2181[9])
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2183 = data
  i2182.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2183[0], i2182.main)
  i2182.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2183[1], i2182.colorBySpeed)
  i2182.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2183[2], i2182.colorOverLifetime)
  i2182.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2183[3], i2182.emission)
  i2182.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2183[4], i2182.rotationBySpeed)
  i2182.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2183[5], i2182.rotationOverLifetime)
  i2182.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2183[6], i2182.shape)
  i2182.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2183[7], i2182.sizeBySpeed)
  i2182.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2183[8], i2182.sizeOverLifetime)
  i2182.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2183[9], i2182.textureSheetAnimation)
  i2182.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2183[10], i2182.velocityOverLifetime)
  i2182.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2183[11], i2182.noise)
  i2182.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2183[12], i2182.inheritVelocity)
  i2182.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2183[13], i2182.forceOverLifetime)
  i2182.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2183[14], i2182.limitVelocityOverLifetime)
  i2182.useAutoRandomSeed = !!i2183[15]
  i2182.randomSeed = i2183[16]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemMain()
  var i2185 = data
  i2184.duration = i2185[0]
  i2184.loop = !!i2185[1]
  i2184.prewarm = !!i2185[2]
  i2184.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[3], i2184.startDelay)
  i2184.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[4], i2184.startLifetime)
  i2184.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[5], i2184.startSpeed)
  i2184.startSize3D = !!i2185[6]
  i2184.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[7], i2184.startSizeX)
  i2184.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[8], i2184.startSizeY)
  i2184.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[9], i2184.startSizeZ)
  i2184.startRotation3D = !!i2185[10]
  i2184.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[11], i2184.startRotationX)
  i2184.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[12], i2184.startRotationY)
  i2184.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[13], i2184.startRotationZ)
  i2184.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2185[14], i2184.startColor)
  i2184.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[15], i2184.gravityModifier)
  i2184.simulationSpace = i2185[16]
  request.r(i2185[17], i2185[18], 0, i2184, 'customSimulationSpace')
  i2184.simulationSpeed = i2185[19]
  i2184.useUnscaledTime = !!i2185[20]
  i2184.scalingMode = i2185[21]
  i2184.playOnAwake = !!i2185[22]
  i2184.maxParticles = i2185[23]
  i2184.emitterVelocityMode = i2185[24]
  i2184.stopAction = i2185[25]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2186 = root || new pc.MinMaxCurve()
  var i2187 = data
  i2186.mode = i2187[0]
  i2186.curveMin = new pc.AnimationCurve( { keys_flow: i2187[1] } )
  i2186.curveMax = new pc.AnimationCurve( { keys_flow: i2187[2] } )
  i2186.curveMultiplier = i2187[3]
  i2186.constantMin = i2187[4]
  i2186.constantMax = i2187[5]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2188 = root || new pc.MinMaxGradient()
  var i2189 = data
  i2188.mode = i2189[0]
  i2188.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2189[1], i2188.gradientMin)
  i2188.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2189[2], i2188.gradientMax)
  i2188.colorMin = new pc.Color(i2189[3], i2189[4], i2189[5], i2189[6])
  i2188.colorMax = new pc.Color(i2189[7], i2189[8], i2189[9], i2189[10])
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2191 = data
  i2190.mode = i2191[0]
  var i2193 = i2191[1]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2193[i + 0]) );
  }
  i2190.colorKeys = i2192
  var i2195 = i2191[2]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2195[i + 0]) );
  }
  i2190.alphaKeys = i2194
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2196 = root || new pc.ParticleSystemColorBySpeed()
  var i2197 = data
  i2196.enabled = !!i2197[0]
  i2196.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2197[1], i2196.color)
  i2196.range = new pc.Vec2( i2197[2], i2197[3] )
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2201 = data
  i2200.color = new pc.Color(i2201[0], i2201[1], i2201[2], i2201[3])
  i2200.time = i2201[4]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2205 = data
  i2204.alpha = i2205[0]
  i2204.time = i2205[1]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemColorOverLifetime()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2207[1], i2206.color)
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemEmitter()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.rateOverTime)
  i2208.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.rateOverDistance)
  var i2211 = i2209[3]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2211[i + 0]) );
  }
  i2208.bursts = i2210
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemBurst()
  var i2215 = data
  i2214.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[0], i2214.count)
  i2214.cycleCount = i2215[1]
  i2214.minCount = i2215[2]
  i2214.maxCount = i2215[3]
  i2214.repeatInterval = i2215[4]
  i2214.time = i2215[5]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemRotationBySpeed()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[1], i2216.x)
  i2216.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.y)
  i2216.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[3], i2216.z)
  i2216.separateAxes = !!i2217[4]
  i2216.range = new pc.Vec2( i2217[5], i2217[6] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[1], i2218.x)
  i2218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[2], i2218.y)
  i2218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[3], i2218.z)
  i2218.separateAxes = !!i2219[4]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemShape()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.shapeType = i2221[1]
  i2220.randomDirectionAmount = i2221[2]
  i2220.sphericalDirectionAmount = i2221[3]
  i2220.randomPositionAmount = i2221[4]
  i2220.alignToDirection = !!i2221[5]
  i2220.radius = i2221[6]
  i2220.radiusMode = i2221[7]
  i2220.radiusSpread = i2221[8]
  i2220.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[9], i2220.radiusSpeed)
  i2220.radiusThickness = i2221[10]
  i2220.angle = i2221[11]
  i2220.length = i2221[12]
  i2220.boxThickness = new pc.Vec3( i2221[13], i2221[14], i2221[15] )
  i2220.meshShapeType = i2221[16]
  request.r(i2221[17], i2221[18], 0, i2220, 'mesh')
  request.r(i2221[19], i2221[20], 0, i2220, 'meshRenderer')
  request.r(i2221[21], i2221[22], 0, i2220, 'skinnedMeshRenderer')
  i2220.useMeshMaterialIndex = !!i2221[23]
  i2220.meshMaterialIndex = i2221[24]
  i2220.useMeshColors = !!i2221[25]
  i2220.normalOffset = i2221[26]
  i2220.arc = i2221[27]
  i2220.arcMode = i2221[28]
  i2220.arcSpread = i2221[29]
  i2220.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[30], i2220.arcSpeed)
  i2220.donutRadius = i2221[31]
  i2220.position = new pc.Vec3( i2221[32], i2221[33], i2221[34] )
  i2220.rotation = new pc.Vec3( i2221[35], i2221[36], i2221[37] )
  i2220.scale = new pc.Vec3( i2221[38], i2221[39], i2221[40] )
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2222 = root || new pc.ParticleSystemSizeBySpeed()
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[1], i2222.x)
  i2222.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[2], i2222.y)
  i2222.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[3], i2222.z)
  i2222.separateAxes = !!i2223[4]
  i2222.range = new pc.Vec2( i2223[5], i2223[6] )
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[1], i2224.x)
  i2224.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[2], i2224.y)
  i2224.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[3], i2224.z)
  i2224.separateAxes = !!i2225[4]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.mode = i2227[1]
  i2226.animation = i2227[2]
  i2226.numTilesX = i2227[3]
  i2226.numTilesY = i2227[4]
  i2226.useRandomRow = !!i2227[5]
  i2226.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[6], i2226.frameOverTime)
  i2226.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[7], i2226.startFrame)
  i2226.cycleCount = i2227[8]
  i2226.rowIndex = i2227[9]
  i2226.flipU = i2227[10]
  i2226.flipV = i2227[11]
  i2226.spriteCount = i2227[12]
  var i2229 = i2227[13]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2226.sprites = i2228
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2233 = data
  i2232.enabled = !!i2233[0]
  i2232.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[1], i2232.x)
  i2232.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[2], i2232.y)
  i2232.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[3], i2232.z)
  i2232.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[4], i2232.radial)
  i2232.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[5], i2232.speedModifier)
  i2232.space = i2233[6]
  i2232.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[7], i2232.orbitalX)
  i2232.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[8], i2232.orbitalY)
  i2232.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[9], i2232.orbitalZ)
  i2232.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[10], i2232.orbitalOffsetX)
  i2232.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[11], i2232.orbitalOffsetY)
  i2232.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[12], i2232.orbitalOffsetZ)
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemNoise()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.separateAxes = !!i2235[1]
  i2234.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[2], i2234.strengthX)
  i2234.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[3], i2234.strengthY)
  i2234.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[4], i2234.strengthZ)
  i2234.frequency = i2235[5]
  i2234.damping = !!i2235[6]
  i2234.octaveCount = i2235[7]
  i2234.octaveMultiplier = i2235[8]
  i2234.octaveScale = i2235[9]
  i2234.quality = i2235[10]
  i2234.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[11], i2234.scrollSpeed)
  i2234.scrollSpeedMultiplier = i2235[12]
  i2234.remapEnabled = !!i2235[13]
  i2234.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[14], i2234.remapX)
  i2234.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[15], i2234.remapY)
  i2234.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[16], i2234.remapZ)
  i2234.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[17], i2234.positionAmount)
  i2234.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[18], i2234.rotationAmount)
  i2234.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[19], i2234.sizeAmount)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemInheritVelocity()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.mode = i2237[1]
  i2236.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[2], i2236.curve)
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemForceOverLifetime()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[1], i2238.x)
  i2238.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[2], i2238.y)
  i2238.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[3], i2238.z)
  i2238.space = i2239[4]
  i2238.randomized = !!i2239[5]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2240 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2241 = data
  i2240.enabled = !!i2241[0]
  i2240.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[1], i2240.limit)
  i2240.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[2], i2240.limitX)
  i2240.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[3], i2240.limitY)
  i2240.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[4], i2240.limitZ)
  i2240.dampen = i2241[5]
  i2240.separateAxes = !!i2241[6]
  i2240.space = i2241[7]
  i2240.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2241[8], i2240.drag)
  i2240.multiplyDragByParticleSize = !!i2241[9]
  i2240.multiplyDragByParticleVelocity = !!i2241[10]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'mesh')
  i2242.meshCount = i2243[2]
  i2242.activeVertexStreamsCount = i2243[3]
  i2242.alignment = i2243[4]
  i2242.renderMode = i2243[5]
  i2242.sortMode = i2243[6]
  i2242.lengthScale = i2243[7]
  i2242.velocityScale = i2243[8]
  i2242.cameraVelocityScale = i2243[9]
  i2242.normalDirection = i2243[10]
  i2242.sortingFudge = i2243[11]
  i2242.minParticleSize = i2243[12]
  i2242.maxParticleSize = i2243[13]
  i2242.pivot = new pc.Vec3( i2243[14], i2243[15], i2243[16] )
  request.r(i2243[17], i2243[18], 0, i2242, 'trailMaterial')
  i2242.applyActiveColorSpace = !!i2243[19]
  i2242.enabled = !!i2243[20]
  request.r(i2243[21], i2243[22], 0, i2242, 'sharedMaterial')
  var i2245 = i2243[23]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.sharedMaterials = i2244
  i2242.receiveShadows = !!i2243[24]
  i2242.shadowCastingMode = i2243[25]
  i2242.sortingLayerID = i2243[26]
  i2242.sortingOrder = i2243[27]
  i2242.lightmapIndex = i2243[28]
  i2242.lightmapSceneIndex = i2243[29]
  i2242.lightmapScaleOffset = new pc.Vec4( i2243[30], i2243[31], i2243[32], i2243[33] )
  i2242.lightProbeUsage = i2243[34]
  i2242.reflectionProbeUsage = i2243[35]
  return i2242
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2248 = root || request.c( 'MergeEffect' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'tf')
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.tagId = i2251[1]
  i2250.enabled = !!i2251[2]
  i2250.isStatic = !!i2251[3]
  i2250.layer = i2251[4]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.halfPrecision = !!i2253[1]
  i2252.useSimplification = !!i2253[2]
  i2252.useUInt32IndexFormat = !!i2253[3]
  i2252.vertexCount = i2253[4]
  i2252.aabb = i2253[5]
  var i2255 = i2253[6]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( !!i2255[i + 0] );
  }
  i2252.streams = i2254
  i2252.vertices = i2253[7]
  var i2257 = i2253[8]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2257[i + 0]) );
  }
  i2252.subMeshes = i2256
  var i2259 = i2253[9]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 16) {
    i2258.push( new pc.Mat4().setData(i2259[i + 0], i2259[i + 1], i2259[i + 2], i2259[i + 3],  i2259[i + 4], i2259[i + 5], i2259[i + 6], i2259[i + 7],  i2259[i + 8], i2259[i + 9], i2259[i + 10], i2259[i + 11],  i2259[i + 12], i2259[i + 13], i2259[i + 14], i2259[i + 15]) );
  }
  i2252.bindposes = i2258
  var i2261 = i2253[10]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2261[i + 0]) );
  }
  i2252.blendShapes = i2260
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2267 = data
  i2266.triangles = i2267[0]
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2273 = data
  i2272.name = i2273[0]
  var i2275 = i2273[1]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2275[i + 0]) );
  }
  i2272.frames = i2274
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2277 = data
  i2276.name = i2277[0]
  i2276.index = i2277[1]
  i2276.startup = !!i2277[2]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2279 = data
  i2278.pivot = new pc.Vec2( i2279[0], i2279[1] )
  i2278.anchorMin = new pc.Vec2( i2279[2], i2279[3] )
  i2278.anchorMax = new pc.Vec2( i2279[4], i2279[5] )
  i2278.sizeDelta = new pc.Vec2( i2279[6], i2279[7] )
  i2278.anchoredPosition3D = new pc.Vec3( i2279[8], i2279[9], i2279[10] )
  i2278.rotation = new pc.Quat(i2279[11], i2279[12], i2279[13], i2279[14])
  i2278.scale = new pc.Vec3( i2279[15], i2279[16], i2279[17] )
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2281 = data
  i2280.planeDistance = i2281[0]
  i2280.referencePixelsPerUnit = i2281[1]
  i2280.isFallbackOverlay = !!i2281[2]
  i2280.renderMode = i2281[3]
  i2280.renderOrder = i2281[4]
  i2280.sortingLayerName = i2281[5]
  i2280.sortingOrder = i2281[6]
  i2280.scaleFactor = i2281[7]
  request.r(i2281[8], i2281[9], 0, i2280, 'worldCamera')
  i2280.overrideSorting = !!i2281[10]
  i2280.pixelPerfect = !!i2281[11]
  i2280.targetDisplay = i2281[12]
  i2280.overridePixelPerfect = !!i2281[13]
  i2280.enabled = !!i2281[14]
  return i2280
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2283 = data
  i2282.m_UiScaleMode = i2283[0]
  i2282.m_ReferencePixelsPerUnit = i2283[1]
  i2282.m_ScaleFactor = i2283[2]
  i2282.m_ReferenceResolution = new pc.Vec2( i2283[3], i2283[4] )
  i2282.m_ScreenMatchMode = i2283[5]
  i2282.m_MatchWidthOrHeight = i2283[6]
  i2282.m_PhysicalUnit = i2283[7]
  i2282.m_FallbackScreenDPI = i2283[8]
  i2282.m_DefaultSpriteDPI = i2283[9]
  i2282.m_DynamicPixelsPerUnit = i2283[10]
  i2282.m_PresetInfoIsWorld = !!i2283[11]
  return i2282
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2285 = data
  i2284.m_IgnoreReversedGraphics = !!i2285[0]
  i2284.m_BlockingObjects = i2285[1]
  i2284.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2285[2] )
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'animatorController')
  request.r(i2287[2], i2287[3], 0, i2286, 'avatar')
  i2286.updateMode = i2287[4]
  i2286.hasTransformHierarchy = !!i2287[5]
  i2286.applyRootMotion = !!i2287[6]
  var i2289 = i2287[7]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2286.humanBones = i2288
  i2286.enabled = !!i2287[8]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2293 = data
  i2292.cullTransparentMesh = !!i2293[0]
  return i2292
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2294 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2295 = data
  i2294.m_hasFontAssetChanged = !!i2295[0]
  request.r(i2295[1], i2295[2], 0, i2294, 'm_baseMaterial')
  i2294.m_maskOffset = new pc.Vec4( i2295[3], i2295[4], i2295[5], i2295[6] )
  i2294.m_text = i2295[7]
  i2294.m_isRightToLeft = !!i2295[8]
  request.r(i2295[9], i2295[10], 0, i2294, 'm_fontAsset')
  request.r(i2295[11], i2295[12], 0, i2294, 'm_sharedMaterial')
  var i2297 = i2295[13]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.m_fontSharedMaterials = i2296
  request.r(i2295[14], i2295[15], 0, i2294, 'm_fontMaterial')
  var i2299 = i2295[16]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2294.m_fontMaterials = i2298
  i2294.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2295[17], i2295[18], i2295[19], i2295[20])
  i2294.m_fontColor = new pc.Color(i2295[21], i2295[22], i2295[23], i2295[24])
  i2294.m_enableVertexGradient = !!i2295[25]
  i2294.m_colorMode = i2295[26]
  i2294.m_fontColorGradient = request.d('TMPro.VertexGradient', i2295[27], i2294.m_fontColorGradient)
  request.r(i2295[28], i2295[29], 0, i2294, 'm_fontColorGradientPreset')
  request.r(i2295[30], i2295[31], 0, i2294, 'm_spriteAsset')
  i2294.m_tintAllSprites = !!i2295[32]
  request.r(i2295[33], i2295[34], 0, i2294, 'm_StyleSheet')
  i2294.m_TextStyleHashCode = i2295[35]
  i2294.m_overrideHtmlColors = !!i2295[36]
  i2294.m_faceColor = UnityEngine.Color32.ConstructColor(i2295[37], i2295[38], i2295[39], i2295[40])
  i2294.m_fontSize = i2295[41]
  i2294.m_fontSizeBase = i2295[42]
  i2294.m_fontWeight = i2295[43]
  i2294.m_enableAutoSizing = !!i2295[44]
  i2294.m_fontSizeMin = i2295[45]
  i2294.m_fontSizeMax = i2295[46]
  i2294.m_fontStyle = i2295[47]
  i2294.m_HorizontalAlignment = i2295[48]
  i2294.m_VerticalAlignment = i2295[49]
  i2294.m_textAlignment = i2295[50]
  i2294.m_characterSpacing = i2295[51]
  i2294.m_wordSpacing = i2295[52]
  i2294.m_lineSpacing = i2295[53]
  i2294.m_lineSpacingMax = i2295[54]
  i2294.m_paragraphSpacing = i2295[55]
  i2294.m_charWidthMaxAdj = i2295[56]
  i2294.m_TextWrappingMode = i2295[57]
  i2294.m_wordWrappingRatios = i2295[58]
  i2294.m_overflowMode = i2295[59]
  request.r(i2295[60], i2295[61], 0, i2294, 'm_linkedTextComponent')
  request.r(i2295[62], i2295[63], 0, i2294, 'parentLinkedComponent')
  i2294.m_enableKerning = !!i2295[64]
  var i2301 = i2295[65]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.add(i2301[i + 0]);
  }
  i2294.m_ActiveFontFeatures = i2300
  i2294.m_enableExtraPadding = !!i2295[66]
  i2294.checkPaddingRequired = !!i2295[67]
  i2294.m_isRichText = !!i2295[68]
  i2294.m_parseCtrlCharacters = !!i2295[69]
  i2294.m_isOrthographic = !!i2295[70]
  i2294.m_isCullingEnabled = !!i2295[71]
  i2294.m_horizontalMapping = i2295[72]
  i2294.m_verticalMapping = i2295[73]
  i2294.m_uvLineOffset = i2295[74]
  i2294.m_geometrySortingOrder = i2295[75]
  i2294.m_IsTextObjectScaleStatic = !!i2295[76]
  i2294.m_VertexBufferAutoSizeReduction = !!i2295[77]
  i2294.m_useMaxVisibleDescender = !!i2295[78]
  i2294.m_pageToDisplay = i2295[79]
  i2294.m_margin = new pc.Vec4( i2295[80], i2295[81], i2295[82], i2295[83] )
  i2294.m_isUsingLegacyAnimationComponent = !!i2295[84]
  i2294.m_isVolumetricText = !!i2295[85]
  request.r(i2295[86], i2295[87], 0, i2294, 'm_Material')
  i2294.m_EmojiFallbackSupport = !!i2295[88]
  i2294.m_Maskable = !!i2295[89]
  i2294.m_Color = new pc.Color(i2295[90], i2295[91], i2295[92], i2295[93])
  i2294.m_RaycastTarget = !!i2295[94]
  i2294.m_RaycastPadding = new pc.Vec4( i2295[95], i2295[96], i2295[97], i2295[98] )
  return i2294
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2302 = root || request.c( 'TMPro.VertexGradient' )
  var i2303 = data
  i2302.topLeft = new pc.Color(i2303[0], i2303[1], i2303[2], i2303[3])
  i2302.topRight = new pc.Color(i2303[4], i2303[5], i2303[6], i2303[7])
  i2302.bottomLeft = new pc.Color(i2303[8], i2303[9], i2303[10], i2303[11])
  i2302.bottomRight = new pc.Color(i2303[12], i2303[13], i2303[14], i2303[15])
  return i2302
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'm_FillRect')
  request.r(i2307[2], i2307[3], 0, i2306, 'm_HandleRect')
  i2306.m_Direction = i2307[4]
  i2306.m_MinValue = i2307[5]
  i2306.m_MaxValue = i2307[6]
  i2306.m_WholeNumbers = !!i2307[7]
  i2306.m_Value = i2307[8]
  i2306.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2307[9], i2306.m_OnValueChanged)
  i2306.m_Navigation = request.d('UnityEngine.UI.Navigation', i2307[10], i2306.m_Navigation)
  i2306.m_Transition = i2307[11]
  i2306.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2307[12], i2306.m_Colors)
  i2306.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2307[13], i2306.m_SpriteState)
  i2306.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2307[14], i2306.m_AnimationTriggers)
  i2306.m_Interactable = !!i2307[15]
  request.r(i2307[16], i2307[17], 0, i2306, 'm_TargetGraphic')
  return i2306
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2309 = data
  i2308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2309[0], i2308.m_PersistentCalls)
  return i2308
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2311 = data
  var i2313 = i2311[0]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2313.length; i += 1) {
    i2312.add(request.d('UnityEngine.Events.PersistentCall', i2313[i + 0]));
  }
  i2310.m_Calls = i2312
  return i2310
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_Target')
  i2316.m_TargetAssemblyTypeName = i2317[2]
  i2316.m_MethodName = i2317[3]
  i2316.m_Mode = i2317[4]
  i2316.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2317[5], i2316.m_Arguments)
  i2316.m_CallState = i2317[6]
  return i2316
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2319 = data
  i2318.m_Mode = i2319[0]
  i2318.m_WrapAround = !!i2319[1]
  request.r(i2319[2], i2319[3], 0, i2318, 'm_SelectOnUp')
  request.r(i2319[4], i2319[5], 0, i2318, 'm_SelectOnDown')
  request.r(i2319[6], i2319[7], 0, i2318, 'm_SelectOnLeft')
  request.r(i2319[8], i2319[9], 0, i2318, 'm_SelectOnRight')
  return i2318
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2321 = data
  i2320.m_NormalColor = new pc.Color(i2321[0], i2321[1], i2321[2], i2321[3])
  i2320.m_HighlightedColor = new pc.Color(i2321[4], i2321[5], i2321[6], i2321[7])
  i2320.m_PressedColor = new pc.Color(i2321[8], i2321[9], i2321[10], i2321[11])
  i2320.m_SelectedColor = new pc.Color(i2321[12], i2321[13], i2321[14], i2321[15])
  i2320.m_DisabledColor = new pc.Color(i2321[16], i2321[17], i2321[18], i2321[19])
  i2320.m_ColorMultiplier = i2321[20]
  i2320.m_FadeDuration = i2321[21]
  return i2320
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2322 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'm_HighlightedSprite')
  request.r(i2323[2], i2323[3], 0, i2322, 'm_PressedSprite')
  request.r(i2323[4], i2323[5], 0, i2322, 'm_SelectedSprite')
  request.r(i2323[6], i2323[7], 0, i2322, 'm_DisabledSprite')
  return i2322
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2324 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2325 = data
  i2324.m_NormalTrigger = i2325[0]
  i2324.m_HighlightedTrigger = i2325[1]
  i2324.m_PressedTrigger = i2325[2]
  i2324.m_SelectedTrigger = i2325[3]
  i2324.m_DisabledTrigger = i2325[4]
  return i2324
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2326 = root || request.c( 'UnityEngine.UI.Image' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'm_Sprite')
  i2326.m_Type = i2327[2]
  i2326.m_PreserveAspect = !!i2327[3]
  i2326.m_FillCenter = !!i2327[4]
  i2326.m_FillMethod = i2327[5]
  i2326.m_FillAmount = i2327[6]
  i2326.m_FillClockwise = !!i2327[7]
  i2326.m_FillOrigin = i2327[8]
  i2326.m_UseSpriteMesh = !!i2327[9]
  i2326.m_PixelsPerUnitMultiplier = i2327[10]
  request.r(i2327[11], i2327[12], 0, i2326, 'm_Material')
  i2326.m_Maskable = !!i2327[13]
  i2326.m_Color = new pc.Color(i2327[14], i2327[15], i2327[16], i2327[17])
  i2326.m_RaycastTarget = !!i2327[18]
  i2326.m_RaycastPadding = new pc.Vec4( i2327[19], i2327[20], i2327[21], i2327[22] )
  return i2326
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.Button' )
  var i2329 = data
  i2328.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2329[0], i2328.m_OnClick)
  i2328.m_Navigation = request.d('UnityEngine.UI.Navigation', i2329[1], i2328.m_Navigation)
  i2328.m_Transition = i2329[2]
  i2328.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2329[3], i2328.m_Colors)
  i2328.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2329[4], i2328.m_SpriteState)
  i2328.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2329[5], i2328.m_AnimationTriggers)
  i2328.m_Interactable = !!i2329[6]
  request.r(i2329[7], i2329[8], 0, i2328, 'm_TargetGraphic')
  return i2328
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2330 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2331 = data
  i2330.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2331[0], i2330.m_PersistentCalls)
  return i2330
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_ObjectArgument')
  i2332.m_ObjectArgumentAssemblyTypeName = i2333[2]
  i2332.m_IntArgument = i2333[3]
  i2332.m_FloatArgument = i2333[4]
  i2332.m_StringArgument = i2333[5]
  i2332.m_BoolArgument = !!i2333[6]
  return i2332
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2334 = root || request.c( 'Ply_Pool' )
  var i2335 = data
  var i2337 = i2335[0]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Ply_Pool+PoolAmount', i2337[i + 0]) );
  }
  i2334.poolAmounts = i2336
  request.r(i2335[1], i2335[2], 0, i2334, 'poolHolder')
  return i2334
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2340 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2341 = data
  i2340.type = i2341[0]
  i2340.amount = i2341[1]
  request.r(i2341[2], i2341[3], 0, i2340, 'gameUnit')
  return i2340
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2342 = root || request.c( 'Ply_SoundManager' )
  var i2343 = data
  var i2345 = i2343[0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 2, i2344, '')
  }
  i2342.audioClips = i2344
  request.r(i2343[1], i2343[2], 0, i2342, 'sound')
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2349 = data
  request.r(i2349[0], i2349[1], 0, i2348, 'clip')
  request.r(i2349[2], i2349[3], 0, i2348, 'outputAudioMixerGroup')
  i2348.playOnAwake = !!i2349[4]
  i2348.loop = !!i2349[5]
  i2348.time = i2349[6]
  i2348.volume = i2349[7]
  i2348.pitch = i2349[8]
  i2348.enabled = !!i2349[9]
  return i2348
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2350 = root || request.c( 'GameManager' )
  var i2351 = data
  i2350.isPlaying = !!i2351[0]
  i2350.isTutorial = !!i2351[1]
  i2350.isGotoStore = !!i2351[2]
  i2350.countMove = i2351[3]
  i2350.maxMove = i2351[4]
  i2350.startLayer = i2351[5]
  i2350.currentLayer = i2351[6]
  request.r(i2351[7], i2351[8], 0, i2350, 'mainBox')
  request.r(i2351[9], i2351[10], 0, i2350, 'handTutorial')
  i2350.tutorialDelay = i2351[11]
  return i2350
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2352 = root || request.c( 'UIManager' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'winUI')
  request.r(i2353[2], i2353[3], 0, i2352, 'loseUI')
  request.r(i2353[4], i2353[5], 0, i2352, 'tutorial')
  request.r(i2353[6], i2353[7], 0, i2352, 'verticalUI')
  request.r(i2353[8], i2353[9], 0, i2352, 'horizontalUI')
  request.r(i2353[10], i2353[11], 0, i2352, 'downloadBtnVertical')
  request.r(i2353[12], i2353[13], 0, i2352, 'dowloadBtnHorizontal')
  request.r(i2353[14], i2353[15], 0, i2352, 'progressSlider')
  request.r(i2353[16], i2353[17], 0, i2352, 'progressText')
  i2352.maxProgressItems = i2353[18]
  i2352.startProgressItems = i2353[19]
  i2352.screenWidth = i2353[20]
  i2352.screenHeight = i2353[21]
  i2352.scaleHeightOnWidth = i2353[22]
  i2352.isVertical = !!i2353[23]
  request.r(i2353[24], i2353[25], 0, i2352, 'cam')
  i2352.introZoomOutMultiplier = i2353[26]
  i2352.cameraZoomDuration = i2353[27]
  i2352.useContinuousScaling = !!i2353[28]
  i2352.baseOrthographicSize = i2353[29]
  i2352.baseAspect = i2353[30]
  i2352.landscapeSize = i2353[31]
  i2352.defaultPortraitSize = i2353[32]
  var i2355 = i2353[33]
  var i2354 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.add(request.d('ScreenScaleStep', i2355[i + 0]));
  }
  i2352.discreteScaleSteps = i2354
  i2352.usePerspectiveCamera = !!i2353[34]
  request.r(i2353[35], i2353[36], 0, i2352, 'perspectiveFocus')
  i2352.perspectiveFocusDistance = i2353[37]
  i2352.perspectivePadding = i2353[38]
  i2352.fitRendererBounds = !!i2353[39]
  request.r(i2353[40], i2353[41], 0, i2352, 'boundsRoot')
  var i2357 = i2353[42]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2357.length; i += 2) {
  request.r(i2357[i + 0], i2357[i + 1], 1, i2356, '')
  }
  i2352.boundsRenderers = i2356
  return i2352
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2360 = root || request.c( 'ScreenScaleStep' )
  var i2361 = data
  i2360.heightOnWidthRatio = i2361[0]
  i2360.orthographicSize = i2361[1]
  return i2360
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2364 = root || request.c( 'InputManager' )
  var i2365 = data
  i2364.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2365[0] )
  i2364.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i2365[1] )
  i2364.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2365[2] )
  i2364.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i2365[3] )
  i2364.isDragging = !!i2365[4]
  request.r(i2365[5], i2365[6], 0, i2364, 'mainCamera')
  return i2364
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i2366 = root || request.c( 'ItemSetupTool' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'spritesParent')
  request.r(i2367[2], i2367[3], 0, i2366, 'holdersParent')
  i2366.shadowSuffix = i2367[4]
  i2366.holderPrefix = i2367[5]
  i2366.holdersParentName = i2367[6]
  i2366.colliderDepth = i2367[7]
  i2366.colliderSizeMultiplier = i2367[8]
  i2366.generatedShadowColor = new pc.Color(i2367[9], i2367[10], i2367[11], i2367[12])
  i2366.fadedBlackShadowColor = new pc.Color(i2367[13], i2367[14], i2367[15], i2367[16])
  i2366.generatedShadowLocalOffset = new pc.Vec3( i2367[17], i2367[18], i2367[19] )
  i2366.itemLayerName = i2367[20]
  i2366.holderLayerName = i2367[21]
  return i2366
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2368 = root || request.c( 'CameraController' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'targetCamera')
  i2368.enableZoom = !!i2369[2]
  i2368.minZoomRatio = i2369[3]
  i2368.maxZoomRatio = i2369[4]
  i2368.mouseWheelZoomSpeed = i2369[5]
  i2368.pinchZoomSpeed = i2369[6]
  i2368.enableDrag = !!i2369[7]
  i2368.horizontalOnly = !!i2369[8]
  i2368.dragSensitivity = i2369[9]
  i2368.maxHorizontalOffset = i2369[10]
  i2368.maxVerticalOffset = i2369[11]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2371 = data
  i2370.aspect = i2371[0]
  i2370.orthographic = !!i2371[1]
  i2370.orthographicSize = i2371[2]
  i2370.backgroundColor = new pc.Color(i2371[3], i2371[4], i2371[5], i2371[6])
  i2370.nearClipPlane = i2371[7]
  i2370.farClipPlane = i2371[8]
  i2370.fieldOfView = i2371[9]
  i2370.depth = i2371[10]
  i2370.clearFlags = i2371[11]
  i2370.cullingMask = i2371[12]
  i2370.rect = i2371[13]
  request.r(i2371[14], i2371[15], 0, i2370, 'targetTexture')
  i2370.usePhysicalProperties = !!i2371[16]
  i2370.focalLength = i2371[17]
  i2370.sensorSize = new pc.Vec2( i2371[18], i2371[19] )
  i2370.lensShift = new pc.Vec2( i2371[20], i2371[21] )
  i2370.gateFit = i2371[22]
  i2370.commandBufferCount = i2371[23]
  i2370.cameraType = i2371[24]
  i2370.enabled = !!i2371[25]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2373 = data
  i2372.type = i2373[0]
  i2372.color = new pc.Color(i2373[1], i2373[2], i2373[3], i2373[4])
  i2372.cullingMask = i2373[5]
  i2372.intensity = i2373[6]
  i2372.range = i2373[7]
  i2372.spotAngle = i2373[8]
  i2372.shadows = i2373[9]
  i2372.shadowNormalBias = i2373[10]
  i2372.shadowBias = i2373[11]
  i2372.shadowStrength = i2373[12]
  i2372.shadowResolution = i2373[13]
  i2372.lightmapBakeType = i2373[14]
  i2372.renderMode = i2373[15]
  request.r(i2373[16], i2373[17], 0, i2372, 'cookie')
  i2372.cookieSize = i2373[18]
  i2372.shadowNearPlane = i2373[19]
  i2372.occlusionMaskChannel = i2373[20]
  i2372.enabled = !!i2373[21]
  return i2372
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2374 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'm_FirstSelected')
  i2374.m_sendNavigationEvents = !!i2375[2]
  i2374.m_DragThreshold = i2375[3]
  return i2374
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2376 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2377 = data
  i2376.m_HorizontalAxis = i2377[0]
  i2376.m_VerticalAxis = i2377[1]
  i2376.m_SubmitButton = i2377[2]
  i2376.m_CancelButton = i2377[3]
  i2376.m_InputActionsPerSecond = i2377[4]
  i2376.m_RepeatDelay = i2377[5]
  i2376.m_ForceModuleActive = !!i2377[6]
  i2376.m_SendPointerHoverToParent = !!i2377[7]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2379 = data
  i2378.color = new pc.Color(i2379[0], i2379[1], i2379[2], i2379[3])
  request.r(i2379[4], i2379[5], 0, i2378, 'sprite')
  i2378.flipX = !!i2379[6]
  i2378.flipY = !!i2379[7]
  i2378.drawMode = i2379[8]
  i2378.size = new pc.Vec2( i2379[9], i2379[10] )
  i2378.tileMode = i2379[11]
  i2378.adaptiveModeThreshold = i2379[12]
  i2378.maskInteraction = i2379[13]
  i2378.spriteSortPoint = i2379[14]
  i2378.enabled = !!i2379[15]
  request.r(i2379[16], i2379[17], 0, i2378, 'sharedMaterial')
  var i2381 = i2379[18]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2378.sharedMaterials = i2380
  i2378.receiveShadows = !!i2379[19]
  i2378.shadowCastingMode = i2379[20]
  i2378.sortingLayerID = i2379[21]
  i2378.sortingOrder = i2379[22]
  i2378.lightmapIndex = i2379[23]
  i2378.lightmapSceneIndex = i2379[24]
  i2378.lightmapScaleOffset = new pc.Vec4( i2379[25], i2379[26], i2379[27], i2379[28] )
  i2378.lightProbeUsage = i2379[29]
  i2378.reflectionProbeUsage = i2379[30]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2383 = data
  i2382.center = new pc.Vec3( i2383[0], i2383[1], i2383[2] )
  i2382.radius = i2383[3]
  i2382.enabled = !!i2383[4]
  i2382.isTrigger = !!i2383[5]
  request.r(i2383[6], i2383[7], 0, i2382, 'material')
  return i2382
}

Deserializers["Box"] = function (request, data, root) {
  var i2384 = root || request.c( 'Box' )
  var i2385 = data
  i2384.useBox = !!i2385[0]
  i2384.spawnMode = i2385[1]
  var i2387 = i2385[2]
  var i2386 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 1, i2386, '')
  }
  i2384.dynamicItems = i2386
  var i2389 = i2385[3]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2384.spawnTargets = i2388
  i2384.initialSpawnCount = i2385[4]
  i2384.revealDuration = i2385[5]
  i2384.showInitialBatchShadowsOnSpawn = !!i2385[6]
  request.r(i2385[7], i2385[8], 0, i2384, 'graphicController')
  return i2384
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i2394 = root || request.c( 'BoxGraphicController' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'skeletonAnimation')
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'sharedMesh')
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'additionalVertexStreams')
  i2398.enabled = !!i2399[2]
  request.r(i2399[3], i2399[4], 0, i2398, 'sharedMaterial')
  var i2401 = i2399[5]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 2, i2400, '')
  }
  i2398.sharedMaterials = i2400
  i2398.receiveShadows = !!i2399[6]
  i2398.shadowCastingMode = i2399[7]
  i2398.sortingLayerID = i2399[8]
  i2398.sortingOrder = i2399[9]
  i2398.lightmapIndex = i2399[10]
  i2398.lightmapSceneIndex = i2399[11]
  i2398.lightmapScaleOffset = new pc.Vec4( i2399[12], i2399[13], i2399[14], i2399[15] )
  i2398.lightProbeUsage = i2399[16]
  i2398.reflectionProbeUsage = i2399[17]
  return i2398
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i2402 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i2403 = data
  i2402.loop = !!i2403[0]
  i2402.timeScale = i2403[1]
  request.r(i2403[2], i2403[3], 0, i2402, 'skeletonDataAsset')
  i2402.initialSkinName = i2403[4]
  i2402.fixPrefabOverrideViaMeshFilter = i2403[5]
  i2402.initialFlipX = !!i2403[6]
  i2402.initialFlipY = !!i2403[7]
  i2402.updateWhenInvisible = i2403[8]
  i2402.zSpacing = i2403[9]
  i2402.useClipping = !!i2403[10]
  i2402.immutableTriangles = !!i2403[11]
  i2402.pmaVertexColors = !!i2403[12]
  i2402.clearStateOnDisable = !!i2403[13]
  i2402.tintBlack = !!i2403[14]
  i2402.singleSubmesh = !!i2403[15]
  i2402.fixDrawOrder = !!i2403[16]
  i2402.addNormals = !!i2403[17]
  i2402.calculateTangents = !!i2403[18]
  i2402.maskInteraction = i2403[19]
  i2402.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i2403[20], i2402.maskMaterials)
  i2402.disableRenderingOnOverride = !!i2403[21]
  i2402._animationName = i2403[22]
  var i2405 = i2403[23]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( i2405[i + 0] );
  }
  i2402.separatorSlotNames = i2404
  return i2402
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i2406 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i2407 = data
  var i2409 = i2407[0]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2406.materialsMaskDisabled = i2408
  var i2411 = i2407[1]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2406.materialsInsideMask = i2410
  var i2413 = i2407[2]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2406.materialsOutsideMask = i2412
  return i2406
}

Deserializers["Item"] = function (request, data, root) {
  var i2416 = root || request.c( 'Item' )
  var i2417 = data
  i2416.placeSoundType = i2417[0]
  i2416.id = i2417[1]
  i2416.currentState = i2417[2]
  i2416.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i2417[3] )
  request.r(i2417[4], i2417[5], 0, i2416, 'correctHolderTransform')
  request.r(i2417[6], i2417[7], 0, i2416, 'shadowOnHolder')
  i2416.canShowShadowHint = !!i2417[8]
  i2416.waitingPosition = new pc.Vec3( i2417[9], i2417[10], i2417[11] )
  request.r(i2417[12], i2417[13], 0, i2416, 'spriteRenderer')
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2419 = data
  i2418.center = new pc.Vec3( i2419[0], i2419[1], i2419[2] )
  i2418.size = new pc.Vec3( i2419[3], i2419[4], i2419[5] )
  i2418.enabled = !!i2419[6]
  i2418.isTrigger = !!i2419[7]
  request.r(i2419[8], i2419[9], 0, i2418, 'material')
  return i2418
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i2420 = root || request.c( 'ItemHolder' )
  var i2421 = data
  i2420.id = i2421[0]
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2423 = data
  i2422.ambientIntensity = i2423[0]
  i2422.reflectionIntensity = i2423[1]
  i2422.ambientMode = i2423[2]
  i2422.ambientLight = new pc.Color(i2423[3], i2423[4], i2423[5], i2423[6])
  i2422.ambientSkyColor = new pc.Color(i2423[7], i2423[8], i2423[9], i2423[10])
  i2422.ambientGroundColor = new pc.Color(i2423[11], i2423[12], i2423[13], i2423[14])
  i2422.ambientEquatorColor = new pc.Color(i2423[15], i2423[16], i2423[17], i2423[18])
  i2422.fogColor = new pc.Color(i2423[19], i2423[20], i2423[21], i2423[22])
  i2422.fogEndDistance = i2423[23]
  i2422.fogStartDistance = i2423[24]
  i2422.fogDensity = i2423[25]
  i2422.fog = !!i2423[26]
  request.r(i2423[27], i2423[28], 0, i2422, 'skybox')
  i2422.fogMode = i2423[29]
  var i2425 = i2423[30]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2425[i + 0]) );
  }
  i2422.lightmaps = i2424
  i2422.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2423[31], i2422.lightProbes)
  i2422.lightmapsMode = i2423[32]
  i2422.mixedBakeMode = i2423[33]
  i2422.environmentLightingMode = i2423[34]
  i2422.ambientProbe = new pc.SphericalHarmonicsL2(i2423[35])
  i2422.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2423[36])
  i2422.useReferenceAmbientProbe = !!i2423[37]
  request.r(i2423[38], i2423[39], 0, i2422, 'customReflection')
  request.r(i2423[40], i2423[41], 0, i2422, 'defaultReflection')
  i2422.defaultReflectionMode = i2423[42]
  i2422.defaultReflectionResolution = i2423[43]
  i2422.sunLightObjectId = i2423[44]
  i2422.pixelLightCount = i2423[45]
  i2422.defaultReflectionHDR = !!i2423[46]
  i2422.hasLightDataAsset = !!i2423[47]
  i2422.hasManualGenerate = !!i2423[48]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'lightmapColor')
  request.r(i2429[2], i2429[3], 0, i2428, 'lightmapDirection')
  request.r(i2429[4], i2429[5], 0, i2428, 'shadowMask')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2430 = root || new UnityEngine.LightProbes()
  var i2431 = data
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2439 = data
  var i2441 = i2439[0]
  var i2440 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2441[i + 0]));
  }
  i2438.ShaderCompilationErrors = i2440
  i2438.name = i2439[1]
  i2438.guid = i2439[2]
  var i2443 = i2439[3]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( i2443[i + 0] );
  }
  i2438.shaderDefinedKeywords = i2442
  var i2445 = i2439[4]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2445[i + 0]) );
  }
  i2438.passes = i2444
  var i2447 = i2439[5]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2447[i + 0]) );
  }
  i2438.usePasses = i2446
  var i2449 = i2439[6]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2449[i + 0]) );
  }
  i2438.defaultParameterValues = i2448
  request.r(i2439[7], i2439[8], 0, i2438, 'unityFallbackShader')
  i2438.readDepth = !!i2439[9]
  i2438.hasDepthOnlyPass = !!i2439[10]
  i2438.isCreatedByShaderGraph = !!i2439[11]
  i2438.disableBatching = !!i2439[12]
  i2438.compiled = !!i2439[13]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2453 = data
  i2452.shaderName = i2453[0]
  i2452.errorMessage = i2453[1]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2456 = root || new pc.UnityShaderPass()
  var i2457 = data
  i2456.id = i2457[0]
  i2456.subShaderIndex = i2457[1]
  i2456.name = i2457[2]
  i2456.passType = i2457[3]
  i2456.grabPassTextureName = i2457[4]
  i2456.usePass = !!i2457[5]
  i2456.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[6], i2456.zTest)
  i2456.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[7], i2456.zWrite)
  i2456.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[8], i2456.culling)
  i2456.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2457[9], i2456.blending)
  i2456.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2457[10], i2456.alphaBlending)
  i2456.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[11], i2456.colorWriteMask)
  i2456.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[12], i2456.offsetUnits)
  i2456.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[13], i2456.offsetFactor)
  i2456.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[14], i2456.stencilRef)
  i2456.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[15], i2456.stencilReadMask)
  i2456.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2457[16], i2456.stencilWriteMask)
  i2456.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[17], i2456.stencilOp)
  i2456.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[18], i2456.stencilOpFront)
  i2456.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2457[19], i2456.stencilOpBack)
  var i2459 = i2457[20]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2459[i + 0]) );
  }
  i2456.tags = i2458
  var i2461 = i2457[21]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( i2461[i + 0] );
  }
  i2456.passDefinedKeywords = i2460
  var i2463 = i2457[22]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2463[i + 0]) );
  }
  i2456.passDefinedKeywordGroups = i2462
  var i2465 = i2457[23]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2465[i + 0]) );
  }
  i2456.variants = i2464
  var i2467 = i2457[24]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2467[i + 0]) );
  }
  i2456.excludedVariants = i2466
  i2456.hasDepthReader = !!i2457[25]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2469 = data
  i2468.val = i2469[0]
  i2468.name = i2469[1]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2471 = data
  i2470.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[0], i2470.src)
  i2470.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[1], i2470.dst)
  i2470.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2471[2], i2470.op)
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2473 = data
  i2472.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[0], i2472.pass)
  i2472.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[1], i2472.fail)
  i2472.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[2], i2472.zFail)
  i2472.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2473[3], i2472.comp)
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2477 = data
  i2476.name = i2477[0]
  i2476.value = i2477[1]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2480.keywords = i2482
  i2480.hasDiscard = !!i2481[1]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2487 = data
  i2486.passId = i2487[0]
  i2486.subShaderIndex = i2487[1]
  var i2489 = i2487[2]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( i2489[i + 0] );
  }
  i2486.keywords = i2488
  i2486.vertexProgram = i2487[3]
  i2486.fragmentProgram = i2487[4]
  i2486.exportedForWebGl2 = !!i2487[5]
  i2486.readDepth = !!i2487[6]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'shader')
  i2492.pass = i2493[2]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2497 = data
  i2496.name = i2497[0]
  i2496.type = i2497[1]
  i2496.value = new pc.Vec4( i2497[2], i2497[3], i2497[4], i2497[5] )
  i2496.textureValue = i2497[6]
  i2496.shaderPropertyFlag = i2497[7]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2499 = data
  i2498.name = i2499[0]
  request.r(i2499[1], i2499[2], 0, i2498, 'texture')
  i2498.aabb = i2499[3]
  i2498.vertices = i2499[4]
  i2498.triangles = i2499[5]
  i2498.textureRect = UnityEngine.Rect.MinMaxRect(i2499[6], i2499[7], i2499[8], i2499[9])
  i2498.packedRect = UnityEngine.Rect.MinMaxRect(i2499[10], i2499[11], i2499[12], i2499[13])
  i2498.border = new pc.Vec4( i2499[14], i2499[15], i2499[16], i2499[17] )
  i2498.transparency = i2499[18]
  i2498.bounds = i2499[19]
  i2498.pixelsPerUnit = i2499[20]
  i2498.textureWidth = i2499[21]
  i2498.textureHeight = i2499[22]
  i2498.nativeSize = new pc.Vec2( i2499[23], i2499[24] )
  i2498.pivot = new pc.Vec2( i2499[25], i2499[26] )
  i2498.textureRectOffset = new pc.Vec2( i2499[27], i2499[28] )
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2501 = data
  i2500.name = i2501[0]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2503 = data
  i2502.name = i2503[0]
  i2502.wrapMode = i2503[1]
  i2502.isLooping = !!i2503[2]
  i2502.length = i2503[3]
  var i2505 = i2503[4]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2505[i + 0]) );
  }
  i2502.curves = i2504
  var i2507 = i2503[5]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2507[i + 0]) );
  }
  i2502.events = i2506
  i2502.halfPrecision = !!i2503[6]
  i2502._frameRate = i2503[7]
  i2502.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2503[8], i2502.localBounds)
  i2502.hasMuscleCurves = !!i2503[9]
  var i2509 = i2503[10]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2502.clipMuscleConstant = i2508
  i2502.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2503[11], i2502.clipBindingConstant)
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2513 = data
  i2512.path = i2513[0]
  i2512.hash = i2513[1]
  i2512.componentType = i2513[2]
  i2512.property = i2513[3]
  i2512.keys = i2513[4]
  var i2515 = i2513[5]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2515[i + 0]) );
  }
  i2512.objectReferenceKeys = i2514
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2519 = data
  i2518.time = i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'value')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2523 = data
  i2522.functionName = i2523[0]
  i2522.floatParameter = i2523[1]
  i2522.intParameter = i2523[2]
  i2522.stringParameter = i2523[3]
  request.r(i2523[4], i2523[5], 0, i2522, 'objectReferenceParameter')
  i2522.time = i2523[6]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2525 = data
  i2524.center = new pc.Vec3( i2525[0], i2525[1], i2525[2] )
  i2524.extends = new pc.Vec3( i2525[3], i2525[4], i2525[5] )
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2529 = data
  var i2531 = i2529[0]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2528.genericBindings = i2530
  var i2533 = i2529[1]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( i2533[i + 0] );
  }
  i2528.pptrCurveMapping = i2532
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2535 = data
  i2534.name = i2535[0]
  var i2537 = i2535[1]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2537[i + 0]) );
  }
  i2534.layers = i2536
  var i2539 = i2535[2]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2539[i + 0]) );
  }
  i2534.parameters = i2538
  i2534.animationClips = i2535[3]
  i2534.avatarUnsupported = i2535[4]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2543 = data
  i2542.name = i2543[0]
  i2542.defaultWeight = i2543[1]
  i2542.blendingMode = i2543[2]
  i2542.avatarMask = i2543[3]
  i2542.syncedLayerIndex = i2543[4]
  i2542.syncedLayerAffectsTiming = !!i2543[5]
  i2542.syncedLayers = i2543[6]
  i2542.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2543[7], i2542.stateMachine)
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2545 = data
  i2544.id = i2545[0]
  i2544.name = i2545[1]
  i2544.path = i2545[2]
  var i2547 = i2545[3]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2547[i + 0]) );
  }
  i2544.states = i2546
  var i2549 = i2545[4]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2549[i + 0]) );
  }
  i2544.machines = i2548
  var i2551 = i2545[5]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2551[i + 0]) );
  }
  i2544.entryStateTransitions = i2550
  var i2553 = i2545[6]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2553[i + 0]) );
  }
  i2544.exitStateTransitions = i2552
  var i2555 = i2545[7]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2555[i + 0]) );
  }
  i2544.anyStateTransitions = i2554
  i2544.defaultStateId = i2545[8]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2559 = data
  i2558.id = i2559[0]
  i2558.name = i2559[1]
  i2558.cycleOffset = i2559[2]
  i2558.cycleOffsetParameter = i2559[3]
  i2558.cycleOffsetParameterActive = !!i2559[4]
  i2558.mirror = !!i2559[5]
  i2558.mirrorParameter = i2559[6]
  i2558.mirrorParameterActive = !!i2559[7]
  i2558.motionId = i2559[8]
  i2558.nameHash = i2559[9]
  i2558.fullPathHash = i2559[10]
  i2558.speed = i2559[11]
  i2558.speedParameter = i2559[12]
  i2558.speedParameterActive = !!i2559[13]
  i2558.tag = i2559[14]
  i2558.tagHash = i2559[15]
  i2558.writeDefaultValues = !!i2559[16]
  var i2561 = i2559[17]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 2) {
  request.r(i2561[i + 0], i2561[i + 1], 2, i2560, '')
  }
  i2558.behaviours = i2560
  var i2563 = i2559[18]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2563[i + 0]) );
  }
  i2558.transitions = i2562
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2569 = data
  i2568.fullPath = i2569[0]
  i2568.canTransitionToSelf = !!i2569[1]
  i2568.duration = i2569[2]
  i2568.exitTime = i2569[3]
  i2568.hasExitTime = !!i2569[4]
  i2568.hasFixedDuration = !!i2569[5]
  i2568.interruptionSource = i2569[6]
  i2568.offset = i2569[7]
  i2568.orderedInterruption = !!i2569[8]
  i2568.destinationStateId = i2569[9]
  i2568.isExit = !!i2569[10]
  i2568.mute = !!i2569[11]
  i2568.solo = !!i2569[12]
  var i2571 = i2569[13]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2571[i + 0]) );
  }
  i2568.conditions = i2570
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2577 = data
  i2576.destinationStateId = i2577[0]
  i2576.isExit = !!i2577[1]
  i2576.mute = !!i2577[2]
  i2576.solo = !!i2577[3]
  var i2579 = i2577[4]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2579[i + 0]) );
  }
  i2576.conditions = i2578
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2583 = data
  i2582.defaultBool = !!i2583[0]
  i2582.defaultFloat = i2583[1]
  i2582.defaultInt = i2583[2]
  i2582.name = i2583[3]
  i2582.nameHash = i2583[4]
  i2582.type = i2583[5]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2585 = data
  i2584.name = i2585[0]
  i2584.bytes64 = i2585[1]
  i2584.data = i2585[2]
  return i2584
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2586 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2587 = data
  i2586.normalStyle = i2587[0]
  i2586.normalSpacingOffset = i2587[1]
  i2586.boldStyle = i2587[2]
  i2586.boldSpacing = i2587[3]
  i2586.italicStyle = i2587[4]
  i2586.tabSize = i2587[5]
  request.r(i2587[6], i2587[7], 0, i2586, 'atlas')
  i2586.m_SourceFontFileGUID = i2587[8]
  i2586.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2587[9], i2586.m_CreationSettings)
  request.r(i2587[10], i2587[11], 0, i2586, 'm_SourceFontFile')
  i2586.m_SourceFontFilePath = i2587[12]
  i2586.m_AtlasPopulationMode = i2587[13]
  i2586.InternalDynamicOS = !!i2587[14]
  var i2589 = i2587[15]
  var i2588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.add(request.d('UnityEngine.TextCore.Glyph', i2589[i + 0]));
  }
  i2586.m_GlyphTable = i2588
  var i2591 = i2587[16]
  var i2590 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.add(request.d('TMPro.TMP_Character', i2591[i + 0]));
  }
  i2586.m_CharacterTable = i2590
  var i2593 = i2587[17]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 2, i2592, '')
  }
  i2586.m_AtlasTextures = i2592
  i2586.m_AtlasTextureIndex = i2587[18]
  i2586.m_IsMultiAtlasTexturesEnabled = !!i2587[19]
  i2586.m_GetFontFeatures = !!i2587[20]
  i2586.m_ClearDynamicDataOnBuild = !!i2587[21]
  i2586.m_AtlasWidth = i2587[22]
  i2586.m_AtlasHeight = i2587[23]
  i2586.m_AtlasPadding = i2587[24]
  i2586.m_AtlasRenderMode = i2587[25]
  var i2595 = i2587[26]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.add(request.d('UnityEngine.TextCore.GlyphRect', i2595[i + 0]));
  }
  i2586.m_UsedGlyphRects = i2594
  var i2597 = i2587[27]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('UnityEngine.TextCore.GlyphRect', i2597[i + 0]));
  }
  i2586.m_FreeGlyphRects = i2596
  i2586.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2587[28], i2586.m_FontFeatureTable)
  i2586.m_ShouldReimportFontFeatures = !!i2587[29]
  var i2599 = i2587[30]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 1, i2598, '')
  }
  i2586.m_FallbackFontAssetTable = i2598
  var i2601 = i2587[31]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('TMPro.TMP_FontWeightPair', i2601[i + 0]) );
  }
  i2586.m_FontWeightTable = i2600
  var i2603 = i2587[32]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('TMPro.TMP_FontWeightPair', i2603[i + 0]) );
  }
  i2586.fontWeights = i2602
  i2586.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2587[33], i2586.m_fontInfo)
  var i2605 = i2587[34]
  var i2604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.add(request.d('TMPro.TMP_Glyph', i2605[i + 0]));
  }
  i2586.m_glyphInfoList = i2604
  i2586.m_KerningTable = request.d('TMPro.KerningTable', i2587[35], i2586.m_KerningTable)
  var i2607 = i2587[36]
  var i2606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 1, i2606, '')
  }
  i2586.fallbackFontAssets = i2606
  i2586.m_Version = i2587[37]
  i2586.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2587[38], i2586.m_FaceInfo)
  request.r(i2587[39], i2587[40], 0, i2586, 'm_Material')
  return i2586
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2609 = data
  i2608.sourceFontFileName = i2609[0]
  i2608.sourceFontFileGUID = i2609[1]
  i2608.faceIndex = i2609[2]
  i2608.pointSizeSamplingMode = i2609[3]
  i2608.pointSize = i2609[4]
  i2608.padding = i2609[5]
  i2608.paddingMode = i2609[6]
  i2608.packingMode = i2609[7]
  i2608.atlasWidth = i2609[8]
  i2608.atlasHeight = i2609[9]
  i2608.characterSetSelectionMode = i2609[10]
  i2608.characterSequence = i2609[11]
  i2608.referencedFontAssetGUID = i2609[12]
  i2608.referencedTextAssetGUID = i2609[13]
  i2608.fontStyle = i2609[14]
  i2608.fontStyleModifier = i2609[15]
  i2608.renderMode = i2609[16]
  i2608.includeFontFeatures = !!i2609[17]
  return i2608
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2613 = data
  i2612.m_Index = i2613[0]
  i2612.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2613[1], i2612.m_Metrics)
  i2612.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2613[2], i2612.m_GlyphRect)
  i2612.m_Scale = i2613[3]
  i2612.m_AtlasIndex = i2613[4]
  i2612.m_ClassDefinitionType = i2613[5]
  return i2612
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2615 = data
  i2614.m_Width = i2615[0]
  i2614.m_Height = i2615[1]
  i2614.m_HorizontalBearingX = i2615[2]
  i2614.m_HorizontalBearingY = i2615[3]
  i2614.m_HorizontalAdvance = i2615[4]
  return i2614
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2617 = data
  i2616.m_X = i2617[0]
  i2616.m_Y = i2617[1]
  i2616.m_Width = i2617[2]
  i2616.m_Height = i2617[3]
  return i2616
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_Character' )
  var i2621 = data
  i2620.m_ElementType = i2621[0]
  i2620.m_Unicode = i2621[1]
  i2620.m_GlyphIndex = i2621[2]
  i2620.m_Scale = i2621[3]
  return i2620
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2626 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.add(request.d('TMPro.MultipleSubstitutionRecord', i2629[i + 0]));
  }
  i2626.m_MultipleSubstitutionRecords = i2628
  var i2631 = i2627[1]
  var i2630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.add(request.d('TMPro.LigatureSubstitutionRecord', i2631[i + 0]));
  }
  i2626.m_LigatureSubstitutionRecords = i2630
  var i2633 = i2627[2]
  var i2632 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2633[i + 0]));
  }
  i2626.m_GlyphPairAdjustmentRecords = i2632
  var i2635 = i2627[3]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2635[i + 0]));
  }
  i2626.m_MarkToBaseAdjustmentRecords = i2634
  var i2637 = i2627[4]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2637[i + 0]));
  }
  i2626.m_MarkToMarkAdjustmentRecords = i2636
  return i2626
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2640 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2641 = data
  i2640.m_TargetGlyphID = i2641[0]
  i2640.m_SubstituteGlyphIDs = i2641[1]
  return i2640
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2644 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2645 = data
  i2644.m_ComponentGlyphIDs = i2645[0]
  i2644.m_LigatureGlyphID = i2645[1]
  return i2644
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2649 = data
  i2648.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2649[0], i2648.m_FirstAdjustmentRecord)
  i2648.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2649[1], i2648.m_SecondAdjustmentRecord)
  i2648.m_FeatureLookupFlags = i2649[2]
  return i2648
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2652 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2653 = data
  i2652.m_BaseGlyphID = i2653[0]
  i2652.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2653[1], i2652.m_BaseGlyphAnchorPoint)
  i2652.m_MarkGlyphID = i2653[2]
  i2652.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2653[3], i2652.m_MarkPositionAdjustment)
  return i2652
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2657 = data
  i2656.m_BaseMarkGlyphID = i2657[0]
  i2656.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2657[1], i2656.m_BaseMarkGlyphAnchorPoint)
  i2656.m_CombiningMarkGlyphID = i2657[2]
  i2656.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2657[3], i2656.m_CombiningMarkPositionAdjustment)
  return i2656
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2662 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'regularTypeface')
  request.r(i2663[2], i2663[3], 0, i2662, 'italicTypeface')
  return i2662
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2664 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2665 = data
  i2664.Name = i2665[0]
  i2664.PointSize = i2665[1]
  i2664.Scale = i2665[2]
  i2664.CharacterCount = i2665[3]
  i2664.LineHeight = i2665[4]
  i2664.Baseline = i2665[5]
  i2664.Ascender = i2665[6]
  i2664.CapHeight = i2665[7]
  i2664.Descender = i2665[8]
  i2664.CenterLine = i2665[9]
  i2664.SuperscriptOffset = i2665[10]
  i2664.SubscriptOffset = i2665[11]
  i2664.SubSize = i2665[12]
  i2664.Underline = i2665[13]
  i2664.UnderlineThickness = i2665[14]
  i2664.strikethrough = i2665[15]
  i2664.strikethroughThickness = i2665[16]
  i2664.TabWidth = i2665[17]
  i2664.Padding = i2665[18]
  i2664.AtlasWidth = i2665[19]
  i2664.AtlasHeight = i2665[20]
  return i2664
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2668 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2669 = data
  i2668.id = i2669[0]
  i2668.x = i2669[1]
  i2668.y = i2669[2]
  i2668.width = i2669[3]
  i2668.height = i2669[4]
  i2668.xOffset = i2669[5]
  i2668.yOffset = i2669[6]
  i2668.xAdvance = i2669[7]
  i2668.scale = i2669[8]
  return i2668
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2670 = root || request.c( 'TMPro.KerningTable' )
  var i2671 = data
  var i2673 = i2671[0]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.add(request.d('TMPro.KerningPair', i2673[i + 0]));
  }
  i2670.kerningPairs = i2672
  return i2670
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.KerningPair' )
  var i2677 = data
  i2676.xOffset = i2677[0]
  i2676.m_FirstGlyph = i2677[1]
  i2676.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2677[2], i2676.m_FirstGlyphAdjustments)
  i2676.m_SecondGlyph = i2677[3]
  i2676.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2677[4], i2676.m_SecondGlyphAdjustments)
  i2676.m_IgnoreSpacingAdjustments = !!i2677[5]
  return i2676
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2679 = data
  i2678.m_FaceIndex = i2679[0]
  i2678.m_FamilyName = i2679[1]
  i2678.m_StyleName = i2679[2]
  i2678.m_PointSize = i2679[3]
  i2678.m_Scale = i2679[4]
  i2678.m_UnitsPerEM = i2679[5]
  i2678.m_LineHeight = i2679[6]
  i2678.m_AscentLine = i2679[7]
  i2678.m_CapLine = i2679[8]
  i2678.m_MeanLine = i2679[9]
  i2678.m_Baseline = i2679[10]
  i2678.m_DescentLine = i2679[11]
  i2678.m_SuperscriptOffset = i2679[12]
  i2678.m_SuperscriptSize = i2679[13]
  i2678.m_SubscriptOffset = i2679[14]
  i2678.m_SubscriptSize = i2679[15]
  i2678.m_UnderlineOffset = i2679[16]
  i2678.m_UnderlineThickness = i2679[17]
  i2678.m_StrikethroughOffset = i2679[18]
  i2678.m_StrikethroughThickness = i2679[19]
  i2678.m_TabWidth = i2679[20]
  return i2678
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i2680 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i2681 = data
  var i2683 = i2681[0]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 2) {
  request.r(i2683[i + 0], i2683[i + 1], 2, i2682, '')
  }
  i2680.atlasAssets = i2682
  i2680.scale = i2681[1]
  request.r(i2681[2], i2681[3], 0, i2680, 'skeletonJSON')
  i2680.isUpgradingBlendModeMaterials = !!i2681[4]
  i2680.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i2681[5], i2680.blendModeMaterials)
  var i2685 = i2681[6]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i2685.length; i += 2) {
  request.r(i2685[i + 0], i2685[i + 1], 1, i2684, '')
  }
  i2680.skeletonDataModifiers = i2684
  var i2687 = i2681[7]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( i2687[i + 0] );
  }
  i2680.fromAnimation = i2686
  var i2689 = i2681[8]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( i2689[i + 0] );
  }
  i2680.toAnimation = i2688
  i2680.duration = i2681[9]
  i2680.defaultMix = i2681[10]
  request.r(i2681[11], i2681[12], 0, i2680, 'controller')
  return i2680
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i2692 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i2693 = data
  i2692.applyAdditiveMaterial = !!i2693[0]
  var i2695 = i2693[1]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2695[i + 0]));
  }
  i2692.additiveMaterials = i2694
  var i2697 = i2693[2]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2697[i + 0]));
  }
  i2692.multiplyMaterials = i2696
  var i2699 = i2693[3]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i2699[i + 0]));
  }
  i2692.screenMaterials = i2698
  i2692.requiresBlendModeMaterials = !!i2693[4]
  return i2692
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i2702 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i2703 = data
  i2702.pageName = i2703[0]
  request.r(i2703[1], i2703[2], 0, i2702, 'material')
  return i2702
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i2706 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'atlasFile')
  var i2709 = i2707[2]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 2) {
  request.r(i2709[i + 0], i2709[i + 1], 2, i2708, '')
  }
  i2706.materials = i2708
  return i2706
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2711 = data
  i2710.useSafeMode = !!i2711[0]
  i2710.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2711[1], i2710.safeModeOptions)
  i2710.timeScale = i2711[2]
  i2710.unscaledTimeScale = i2711[3]
  i2710.useSmoothDeltaTime = !!i2711[4]
  i2710.maxSmoothUnscaledTime = i2711[5]
  i2710.rewindCallbackMode = i2711[6]
  i2710.showUnityEditorReport = !!i2711[7]
  i2710.logBehaviour = i2711[8]
  i2710.drawGizmos = !!i2711[9]
  i2710.defaultRecyclable = !!i2711[10]
  i2710.defaultAutoPlay = i2711[11]
  i2710.defaultUpdateType = i2711[12]
  i2710.defaultTimeScaleIndependent = !!i2711[13]
  i2710.defaultEaseType = i2711[14]
  i2710.defaultEaseOvershootOrAmplitude = i2711[15]
  i2710.defaultEasePeriod = i2711[16]
  i2710.defaultAutoKill = !!i2711[17]
  i2710.defaultLoopType = i2711[18]
  i2710.debugMode = !!i2711[19]
  i2710.debugStoreTargetId = !!i2711[20]
  i2710.showPreviewPanel = !!i2711[21]
  i2710.storeSettingsLocation = i2711[22]
  i2710.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2711[23], i2710.modules)
  i2710.createASMDEF = !!i2711[24]
  i2710.showPlayingTweens = !!i2711[25]
  i2710.showPausedTweens = !!i2711[26]
  return i2710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2713 = data
  i2712.logBehaviour = i2713[0]
  i2712.nestedTweenFailureBehaviour = i2713[1]
  return i2712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2715 = data
  i2714.showPanel = !!i2715[0]
  i2714.audioEnabled = !!i2715[1]
  i2714.physicsEnabled = !!i2715[2]
  i2714.physics2DEnabled = !!i2715[3]
  i2714.spriteEnabled = !!i2715[4]
  i2714.uiEnabled = !!i2715[5]
  i2714.uiToolkitEnabled = !!i2715[6]
  i2714.textMeshProEnabled = !!i2715[7]
  i2714.tk2DEnabled = !!i2715[8]
  i2714.deAudioEnabled = !!i2715[9]
  i2714.deUnityExtendedEnabled = !!i2715[10]
  i2714.epoOutlineEnabled = !!i2715[11]
  return i2714
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_Settings' )
  var i2717 = data
  i2716.assetVersion = i2717[0]
  i2716.m_TextWrappingMode = i2717[1]
  i2716.m_enableKerning = !!i2717[2]
  var i2719 = i2717[3]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.add(i2719[i + 0]);
  }
  i2716.m_ActiveFontFeatures = i2718
  i2716.m_enableExtraPadding = !!i2717[4]
  i2716.m_enableTintAllSprites = !!i2717[5]
  i2716.m_enableParseEscapeCharacters = !!i2717[6]
  i2716.m_EnableRaycastTarget = !!i2717[7]
  i2716.m_GetFontFeaturesAtRuntime = !!i2717[8]
  i2716.m_missingGlyphCharacter = i2717[9]
  i2716.m_ClearDynamicDataOnBuild = !!i2717[10]
  i2716.m_warningsDisabled = !!i2717[11]
  request.r(i2717[12], i2717[13], 0, i2716, 'm_defaultFontAsset')
  i2716.m_defaultFontAssetPath = i2717[14]
  i2716.m_defaultFontSize = i2717[15]
  i2716.m_defaultAutoSizeMinRatio = i2717[16]
  i2716.m_defaultAutoSizeMaxRatio = i2717[17]
  i2716.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2717[18], i2717[19] )
  i2716.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2717[20], i2717[21] )
  i2716.m_autoSizeTextContainer = !!i2717[22]
  i2716.m_IsTextObjectScaleStatic = !!i2717[23]
  var i2721 = i2717[24]
  var i2720 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2721.length; i += 2) {
  request.r(i2721[i + 0], i2721[i + 1], 1, i2720, '')
  }
  i2716.m_fallbackFontAssets = i2720
  i2716.m_matchMaterialPreset = !!i2717[25]
  i2716.m_HideSubTextObjects = !!i2717[26]
  request.r(i2717[27], i2717[28], 0, i2716, 'm_defaultSpriteAsset')
  i2716.m_defaultSpriteAssetPath = i2717[29]
  i2716.m_enableEmojiSupport = !!i2717[30]
  i2716.m_MissingCharacterSpriteUnicode = i2717[31]
  var i2723 = i2717[32]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 1, i2722, '')
  }
  i2716.m_EmojiFallbackTextAssets = i2722
  i2716.m_defaultColorGradientPresetsPath = i2717[33]
  request.r(i2717[34], i2717[35], 0, i2716, 'm_defaultStyleSheet')
  i2716.m_StyleSheetsResourcePath = i2717[36]
  request.r(i2717[37], i2717[38], 0, i2716, 'm_leadingCharacters')
  request.r(i2717[39], i2717[40], 0, i2716, 'm_followingCharacters')
  i2716.m_UseModernHangulLineBreakingRules = !!i2717[41]
  return i2716
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2727 = data
  request.r(i2727[0], i2727[1], 0, i2726, 'spriteSheet')
  var i2729 = i2727[2]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('TMPro.TMP_Sprite', i2729[i + 0]));
  }
  i2726.spriteInfoList = i2728
  var i2731 = i2727[3]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 1, i2730, '')
  }
  i2726.fallbackSpriteAssets = i2730
  var i2733 = i2727[4]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.TMP_SpriteCharacter', i2733[i + 0]));
  }
  i2726.m_SpriteCharacterTable = i2732
  var i2735 = i2727[5]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('TMPro.TMP_SpriteGlyph', i2735[i + 0]));
  }
  i2726.m_GlyphTable = i2734
  i2726.m_Version = i2727[6]
  i2726.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2727[7], i2726.m_FaceInfo)
  request.r(i2727[8], i2727[9], 0, i2726, 'm_Material')
  return i2726
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.hashCode = i2739[1]
  i2738.unicode = i2739[2]
  i2738.pivot = new pc.Vec2( i2739[3], i2739[4] )
  request.r(i2739[5], i2739[6], 0, i2738, 'sprite')
  i2738.id = i2739[7]
  i2738.x = i2739[8]
  i2738.y = i2739[9]
  i2738.width = i2739[10]
  i2738.height = i2739[11]
  i2738.xOffset = i2739[12]
  i2738.yOffset = i2739[13]
  i2738.xAdvance = i2739[14]
  i2738.scale = i2739[15]
  return i2738
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2745 = data
  i2744.m_Name = i2745[0]
  i2744.m_ElementType = i2745[1]
  i2744.m_Unicode = i2745[2]
  i2744.m_GlyphIndex = i2745[3]
  i2744.m_Scale = i2745[4]
  return i2744
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2749 = data
  request.r(i2749[0], i2749[1], 0, i2748, 'sprite')
  i2748.m_Index = i2749[2]
  i2748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2749[3], i2748.m_Metrics)
  i2748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2749[4], i2748.m_GlyphRect)
  i2748.m_Scale = i2749[5]
  i2748.m_AtlasIndex = i2749[6]
  i2748.m_ClassDefinitionType = i2749[7]
  return i2748
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2751 = data
  var i2753 = i2751[0]
  var i2752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.add(request.d('TMPro.TMP_Style', i2753[i + 0]));
  }
  i2750.m_StyleList = i2752
  return i2750
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Style' )
  var i2757 = data
  i2756.m_Name = i2757[0]
  i2756.m_HashCode = i2757[1]
  i2756.m_OpeningDefinition = i2757[2]
  i2756.m_ClosingDefinition = i2757[3]
  i2756.m_OpeningTagArray = i2757[4]
  i2756.m_ClosingTagArray = i2757[5]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2761[i + 0]) );
  }
  i2758.files = i2760
  i2758.componentToPrefabIds = i2759[1]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2765 = data
  i2764.path = i2765[0]
  request.r(i2765[1], i2765[2], 0, i2764, 'unityObject')
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2769[i + 0]) );
  }
  i2766.scriptsExecutionOrder = i2768
  var i2771 = i2767[1]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2771[i + 0]) );
  }
  i2766.sortingLayers = i2770
  var i2773 = i2767[2]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2773[i + 0]) );
  }
  i2766.cullingLayers = i2772
  i2766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2767[3], i2766.timeSettings)
  i2766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2767[4], i2766.physicsSettings)
  i2766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2767[5], i2766.physics2DSettings)
  i2766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2767[6], i2766.qualitySettings)
  i2766.enableRealtimeShadows = !!i2767[7]
  i2766.enableAutoInstancing = !!i2767[8]
  i2766.enableStaticBatching = !!i2767[9]
  i2766.enableDynamicBatching = !!i2767[10]
  i2766.lightmapEncodingQuality = i2767[11]
  i2766.desiredColorSpace = i2767[12]
  var i2775 = i2767[13]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( i2775[i + 0] );
  }
  i2766.allTags = i2774
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.value = i2779[1]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2783 = data
  i2782.id = i2783[0]
  i2782.name = i2783[1]
  i2782.value = i2783[2]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2787 = data
  i2786.id = i2787[0]
  i2786.name = i2787[1]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2789 = data
  i2788.fixedDeltaTime = i2789[0]
  i2788.maximumDeltaTime = i2789[1]
  i2788.timeScale = i2789[2]
  i2788.maximumParticleTimestep = i2789[3]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2791 = data
  i2790.gravity = new pc.Vec3( i2791[0], i2791[1], i2791[2] )
  i2790.defaultSolverIterations = i2791[3]
  i2790.bounceThreshold = i2791[4]
  i2790.autoSyncTransforms = !!i2791[5]
  i2790.autoSimulation = !!i2791[6]
  var i2793 = i2791[7]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2793[i + 0]) );
  }
  i2790.collisionMatrix = i2792
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2797 = data
  i2796.enabled = !!i2797[0]
  i2796.layerId = i2797[1]
  i2796.otherLayerId = i2797[2]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'material')
  i2798.gravity = new pc.Vec2( i2799[2], i2799[3] )
  i2798.positionIterations = i2799[4]
  i2798.velocityIterations = i2799[5]
  i2798.velocityThreshold = i2799[6]
  i2798.maxLinearCorrection = i2799[7]
  i2798.maxAngularCorrection = i2799[8]
  i2798.maxTranslationSpeed = i2799[9]
  i2798.maxRotationSpeed = i2799[10]
  i2798.baumgarteScale = i2799[11]
  i2798.baumgarteTOIScale = i2799[12]
  i2798.timeToSleep = i2799[13]
  i2798.linearSleepTolerance = i2799[14]
  i2798.angularSleepTolerance = i2799[15]
  i2798.defaultContactOffset = i2799[16]
  i2798.autoSimulation = !!i2799[17]
  i2798.queriesHitTriggers = !!i2799[18]
  i2798.queriesStartInColliders = !!i2799[19]
  i2798.callbacksOnDisable = !!i2799[20]
  i2798.reuseCollisionCallbacks = !!i2799[21]
  i2798.autoSyncTransforms = !!i2799[22]
  var i2801 = i2799[23]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2801[i + 0]) );
  }
  i2798.collisionMatrix = i2800
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.layerId = i2805[1]
  i2804.otherLayerId = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2809[i + 0]) );
  }
  i2806.qualityLevels = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( i2811[i + 0] );
  }
  i2806.names = i2810
  i2806.shadows = i2807[2]
  i2806.anisotropicFiltering = i2807[3]
  i2806.antiAliasing = i2807[4]
  i2806.lodBias = i2807[5]
  i2806.shadowCascades = i2807[6]
  i2806.shadowDistance = i2807[7]
  i2806.shadowmaskMode = i2807[8]
  i2806.shadowProjection = i2807[9]
  i2806.shadowResolution = i2807[10]
  i2806.softParticles = !!i2807[11]
  i2806.softVegetation = !!i2807[12]
  i2806.activeColorSpace = i2807[13]
  i2806.desiredColorSpace = i2807[14]
  i2806.masterTextureLimit = i2807[15]
  i2806.maxQueuedFrames = i2807[16]
  i2806.particleRaycastBudget = i2807[17]
  i2806.pixelLightCount = i2807[18]
  i2806.realtimeReflectionProbes = !!i2807[19]
  i2806.shadowCascade2Split = i2807[20]
  i2806.shadowCascade4Split = new pc.Vec3( i2807[21], i2807[22], i2807[23] )
  i2806.streamingMipmapsActive = !!i2807[24]
  i2806.vSyncCount = i2807[25]
  i2806.asyncUploadBufferSize = i2807[26]
  i2806.asyncUploadTimeSlice = i2807[27]
  i2806.billboardsFaceCameraPosition = !!i2807[28]
  i2806.shadowNearPlaneOffset = i2807[29]
  i2806.streamingMipmapsMemoryBudget = i2807[30]
  i2806.maximumLODLevel = i2807[31]
  i2806.streamingMipmapsAddAllCameras = !!i2807[32]
  i2806.streamingMipmapsMaxLevelReduction = i2807[33]
  i2806.streamingMipmapsRenderersPerFrame = i2807[34]
  i2806.resolutionScalingFixedDPIFactor = i2807[35]
  i2806.streamingMipmapsMaxFileIORequests = i2807[36]
  i2806.currentQualityLevel = i2807[37]
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2817 = data
  i2816.weight = i2817[0]
  i2816.vertices = i2817[1]
  i2816.normals = i2817[2]
  i2816.tangents = i2817[3]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2821 = data
  i2820.mode = i2821[0]
  i2820.parameter = i2821[1]
  i2820.threshold = i2821[2]
  return i2820
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2823 = data
  i2822.m_GlyphIndex = i2823[0]
  i2822.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2823[1], i2822.m_GlyphValueRecord)
  return i2822
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2825 = data
  i2824.m_XCoordinate = i2825[0]
  i2824.m_YCoordinate = i2825[1]
  return i2824
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2827 = data
  i2826.m_XPositionAdjustment = i2827[0]
  i2826.m_YPositionAdjustment = i2827[1]
  return i2826
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2829 = data
  i2828.xPlacement = i2829[0]
  i2828.yPlacement = i2829[1]
  i2828.xAdvance = i2829[2]
  i2828.yAdvance = i2829[3]
  return i2828
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2831 = data
  i2830.m_XPlacement = i2831[0]
  i2830.m_YPlacement = i2831[1]
  i2830.m_XAdvance = i2831[2]
  i2830.m_YAdvance = i2831[3]
  return i2830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[32],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[32],"88":[46],"89":[90],"91":[90],"10":[9],"92":[93],"94":[95],"96":[46,45],"97":[95],"98":[97],"99":[95],"100":[95],"101":[102],"103":[102],"104":[95],"105":[9],"106":[16,9],"44":[46],"107":[16,9],"108":[14,46],"95":[46],"109":[46,45],"110":[67],"111":[74],"112":[113],"114":[102],"115":[40],"116":[32],"117":[118],"119":[38],"120":[10],"121":[9],"122":[46,9],"17":[9,16],"123":[9],"124":[16,9],"125":[46],"126":[16,9],"127":[9],"128":[129],"130":[129],"131":[129],"132":[9],"133":[9],"13":[10],"20":[16,9],"134":[9],"12":[10],"135":[9],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[16,9],"145":[9],"146":[9],"147":[9],"19":[9],"148":[16,9],"149":[9],"150":[38],"151":[38],"39":[38],"152":[38],"153":[32],"154":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "1.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv491";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4941";

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

Deserializers.buildID = "2b0ea7db-7972-42d7-9162-079e810aa522";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

