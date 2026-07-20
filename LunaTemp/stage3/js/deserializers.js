var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.JointSpring' )
  var i2023 = data
  i2022.spring = i2023[0]
  i2022.damper = i2023[1]
  i2022.targetPosition = i2023[2]
  return i2022
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2024 = root || request.c( 'UnityEngine.JointMotor' )
  var i2025 = data
  i2024.m_TargetVelocity = i2025[0]
  i2024.m_Force = i2025[1]
  i2024.m_FreeSpin = i2025[2]
  return i2024
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2026 = root || request.c( 'UnityEngine.JointLimits' )
  var i2027 = data
  i2026.m_Min = i2027[0]
  i2026.m_Max = i2027[1]
  i2026.m_Bounciness = i2027[2]
  i2026.m_BounceMinVelocity = i2027[3]
  i2026.m_ContactDistance = i2027[4]
  i2026.minBounce = i2027[5]
  i2026.maxBounce = i2027[6]
  return i2026
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.JointDrive' )
  var i2029 = data
  i2028.m_PositionSpring = i2029[0]
  i2028.m_PositionDamper = i2029[1]
  i2028.m_MaximumForce = i2029[2]
  i2028.m_UseAcceleration = i2029[3]
  return i2028
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2031 = data
  i2030.m_Spring = i2031[0]
  i2030.m_Damper = i2031[1]
  return i2030
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2033 = data
  i2032.m_Limit = i2033[0]
  i2032.m_Bounciness = i2033[1]
  i2032.m_ContactDistance = i2033[2]
  return i2032
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2035 = data
  i2034.m_ExtremumSlip = i2035[0]
  i2034.m_ExtremumValue = i2035[1]
  i2034.m_AsymptoteSlip = i2035[2]
  i2034.m_AsymptoteValue = i2035[3]
  i2034.m_Stiffness = i2035[4]
  return i2034
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2037 = data
  i2036.m_LowerAngle = i2037[0]
  i2036.m_UpperAngle = i2037[1]
  return i2036
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2039 = data
  i2038.m_MotorSpeed = i2039[0]
  i2038.m_MaximumMotorTorque = i2039[1]
  return i2038
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2041 = data
  i2040.m_DampingRatio = i2041[0]
  i2040.m_Frequency = i2041[1]
  i2040.m_Angle = i2041[2]
  return i2040
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2043 = data
  i2042.m_LowerTranslation = i2043[0]
  i2042.m_UpperTranslation = i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2044 = root || new pc.UnityMaterial()
  var i2045 = data
  i2044.name = i2045[0]
  request.r(i2045[1], i2045[2], 0, i2044, 'shader')
  i2044.renderQueue = i2045[3]
  i2044.enableInstancing = !!i2045[4]
  var i2047 = i2045[5]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2047[i + 0]) );
  }
  i2044.floatParameters = i2046
  var i2049 = i2045[6]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2049[i + 0]) );
  }
  i2044.colorParameters = i2048
  var i2051 = i2045[7]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2051[i + 0]) );
  }
  i2044.vectorParameters = i2050
  var i2053 = i2045[8]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2053[i + 0]) );
  }
  i2044.textureParameters = i2052
  var i2055 = i2045[9]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2055[i + 0]) );
  }
  i2044.materialFlags = i2054
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.value = i2059[1]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2063 = data
  i2062.name = i2063[0]
  i2062.value = new pc.Color(i2063[1], i2063[2], i2063[3], i2063[4])
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2067 = data
  i2066.name = i2067[0]
  i2066.value = new pc.Vec4( i2067[1], i2067[2], i2067[3], i2067[4] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2071 = data
  i2070.name = i2071[0]
  request.r(i2071[1], i2071[2], 0, i2070, 'value')
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.enabled = !!i2075[1]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2077 = data
  i2076.name = i2077[0]
  i2076.width = i2077[1]
  i2076.height = i2077[2]
  i2076.mipmapCount = i2077[3]
  i2076.anisoLevel = i2077[4]
  i2076.filterMode = i2077[5]
  i2076.hdr = !!i2077[6]
  i2076.format = i2077[7]
  i2076.wrapMode = i2077[8]
  i2076.alphaIsTransparency = !!i2077[9]
  i2076.alphaSource = i2077[10]
  i2076.graphicsFormat = i2077[11]
  i2076.sRGBTexture = !!i2077[12]
  i2076.desiredColorSpace = i2077[13]
  i2076.wrapU = i2077[14]
  i2076.wrapV = i2077[15]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2079 = data
  i2078.position = new pc.Vec3( i2079[0], i2079[1], i2079[2] )
  i2078.scale = new pc.Vec3( i2079[3], i2079[4], i2079[5] )
  i2078.rotation = new pc.Quat(i2079[6], i2079[7], i2079[8], i2079[9])
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2081 = data
  i2080.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2081[0], i2080.main)
  i2080.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2081[1], i2080.colorBySpeed)
  i2080.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2081[2], i2080.colorOverLifetime)
  i2080.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2081[3], i2080.emission)
  i2080.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2081[4], i2080.rotationBySpeed)
  i2080.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2081[5], i2080.rotationOverLifetime)
  i2080.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2081[6], i2080.shape)
  i2080.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2081[7], i2080.sizeBySpeed)
  i2080.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2081[8], i2080.sizeOverLifetime)
  i2080.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2081[9], i2080.textureSheetAnimation)
  i2080.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2081[10], i2080.velocityOverLifetime)
  i2080.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2081[11], i2080.noise)
  i2080.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2081[12], i2080.inheritVelocity)
  i2080.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2081[13], i2080.forceOverLifetime)
  i2080.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2081[14], i2080.limitVelocityOverLifetime)
  i2080.useAutoRandomSeed = !!i2081[15]
  i2080.randomSeed = i2081[16]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemMain()
  var i2083 = data
  i2082.duration = i2083[0]
  i2082.loop = !!i2083[1]
  i2082.prewarm = !!i2083[2]
  i2082.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.startDelay)
  i2082.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[4], i2082.startLifetime)
  i2082.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[5], i2082.startSpeed)
  i2082.startSize3D = !!i2083[6]
  i2082.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[7], i2082.startSizeX)
  i2082.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[8], i2082.startSizeY)
  i2082.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[9], i2082.startSizeZ)
  i2082.startRotation3D = !!i2083[10]
  i2082.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[11], i2082.startRotationX)
  i2082.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[12], i2082.startRotationY)
  i2082.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[13], i2082.startRotationZ)
  i2082.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2083[14], i2082.startColor)
  i2082.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[15], i2082.gravityModifier)
  i2082.simulationSpace = i2083[16]
  request.r(i2083[17], i2083[18], 0, i2082, 'customSimulationSpace')
  i2082.simulationSpeed = i2083[19]
  i2082.useUnscaledTime = !!i2083[20]
  i2082.scalingMode = i2083[21]
  i2082.playOnAwake = !!i2083[22]
  i2082.maxParticles = i2083[23]
  i2082.emitterVelocityMode = i2083[24]
  i2082.stopAction = i2083[25]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2084 = root || new pc.MinMaxCurve()
  var i2085 = data
  i2084.mode = i2085[0]
  i2084.curveMin = new pc.AnimationCurve( { keys_flow: i2085[1] } )
  i2084.curveMax = new pc.AnimationCurve( { keys_flow: i2085[2] } )
  i2084.curveMultiplier = i2085[3]
  i2084.constantMin = i2085[4]
  i2084.constantMax = i2085[5]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2086 = root || new pc.MinMaxGradient()
  var i2087 = data
  i2086.mode = i2087[0]
  i2086.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2087[1], i2086.gradientMin)
  i2086.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2087[2], i2086.gradientMax)
  i2086.colorMin = new pc.Color(i2087[3], i2087[4], i2087[5], i2087[6])
  i2086.colorMax = new pc.Color(i2087[7], i2087[8], i2087[9], i2087[10])
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2089 = data
  i2088.mode = i2089[0]
  var i2091 = i2089[1]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2091[i + 0]) );
  }
  i2088.colorKeys = i2090
  var i2093 = i2089[2]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2093[i + 0]) );
  }
  i2088.alphaKeys = i2092
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemColorBySpeed()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2095[1], i2094.color)
  i2094.range = new pc.Vec2( i2095[2], i2095[3] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2099 = data
  i2098.color = new pc.Color(i2099[0], i2099[1], i2099[2], i2099[3])
  i2098.time = i2099[4]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2103 = data
  i2102.alpha = i2103[0]
  i2102.time = i2103[1]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2104 = root || new pc.ParticleSystemColorOverLifetime()
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2105[1], i2104.color)
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemEmitter()
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[1], i2106.rateOverTime)
  i2106.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[2], i2106.rateOverDistance)
  var i2109 = i2107[3]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2109[i + 0]) );
  }
  i2106.bursts = i2108
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemBurst()
  var i2113 = data
  i2112.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[0], i2112.count)
  i2112.cycleCount = i2113[1]
  i2112.minCount = i2113[2]
  i2112.maxCount = i2113[3]
  i2112.repeatInterval = i2113[4]
  i2112.time = i2113[5]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2114 = root || new pc.ParticleSystemRotationBySpeed()
  var i2115 = data
  i2114.enabled = !!i2115[0]
  i2114.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[1], i2114.x)
  i2114.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[2], i2114.y)
  i2114.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[3], i2114.z)
  i2114.separateAxes = !!i2115[4]
  i2114.range = new pc.Vec2( i2115[5], i2115[6] )
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2116 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2117 = data
  i2116.enabled = !!i2117[0]
  i2116.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2117[1], i2116.x)
  i2116.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2117[2], i2116.y)
  i2116.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2117[3], i2116.z)
  i2116.separateAxes = !!i2117[4]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2118 = root || new pc.ParticleSystemShape()
  var i2119 = data
  i2118.enabled = !!i2119[0]
  i2118.shapeType = i2119[1]
  i2118.randomDirectionAmount = i2119[2]
  i2118.sphericalDirectionAmount = i2119[3]
  i2118.randomPositionAmount = i2119[4]
  i2118.alignToDirection = !!i2119[5]
  i2118.radius = i2119[6]
  i2118.radiusMode = i2119[7]
  i2118.radiusSpread = i2119[8]
  i2118.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[9], i2118.radiusSpeed)
  i2118.radiusThickness = i2119[10]
  i2118.angle = i2119[11]
  i2118.length = i2119[12]
  i2118.boxThickness = new pc.Vec3( i2119[13], i2119[14], i2119[15] )
  i2118.meshShapeType = i2119[16]
  request.r(i2119[17], i2119[18], 0, i2118, 'mesh')
  request.r(i2119[19], i2119[20], 0, i2118, 'meshRenderer')
  request.r(i2119[21], i2119[22], 0, i2118, 'skinnedMeshRenderer')
  i2118.useMeshMaterialIndex = !!i2119[23]
  i2118.meshMaterialIndex = i2119[24]
  i2118.useMeshColors = !!i2119[25]
  i2118.normalOffset = i2119[26]
  i2118.arc = i2119[27]
  i2118.arcMode = i2119[28]
  i2118.arcSpread = i2119[29]
  i2118.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[30], i2118.arcSpeed)
  i2118.donutRadius = i2119[31]
  i2118.position = new pc.Vec3( i2119[32], i2119[33], i2119[34] )
  i2118.rotation = new pc.Vec3( i2119[35], i2119[36], i2119[37] )
  i2118.scale = new pc.Vec3( i2119[38], i2119[39], i2119[40] )
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2120 = root || new pc.ParticleSystemSizeBySpeed()
  var i2121 = data
  i2120.enabled = !!i2121[0]
  i2120.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2121[1], i2120.x)
  i2120.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2121[2], i2120.y)
  i2120.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2121[3], i2120.z)
  i2120.separateAxes = !!i2121[4]
  i2120.range = new pc.Vec2( i2121[5], i2121[6] )
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2122 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2123 = data
  i2122.enabled = !!i2123[0]
  i2122.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[1], i2122.x)
  i2122.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[2], i2122.y)
  i2122.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2123[3], i2122.z)
  i2122.separateAxes = !!i2123[4]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2124 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2125 = data
  i2124.enabled = !!i2125[0]
  i2124.mode = i2125[1]
  i2124.animation = i2125[2]
  i2124.numTilesX = i2125[3]
  i2124.numTilesY = i2125[4]
  i2124.useRandomRow = !!i2125[5]
  i2124.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[6], i2124.frameOverTime)
  i2124.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2125[7], i2124.startFrame)
  i2124.cycleCount = i2125[8]
  i2124.rowIndex = i2125[9]
  i2124.flipU = i2125[10]
  i2124.flipV = i2125[11]
  i2124.spriteCount = i2125[12]
  var i2127 = i2125[13]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.sprites = i2126
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2130 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2131 = data
  i2130.enabled = !!i2131[0]
  i2130.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[1], i2130.x)
  i2130.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[2], i2130.y)
  i2130.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[3], i2130.z)
  i2130.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[4], i2130.radial)
  i2130.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[5], i2130.speedModifier)
  i2130.space = i2131[6]
  i2130.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[7], i2130.orbitalX)
  i2130.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[8], i2130.orbitalY)
  i2130.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[9], i2130.orbitalZ)
  i2130.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[10], i2130.orbitalOffsetX)
  i2130.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[11], i2130.orbitalOffsetY)
  i2130.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2131[12], i2130.orbitalOffsetZ)
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2132 = root || new pc.ParticleSystemNoise()
  var i2133 = data
  i2132.enabled = !!i2133[0]
  i2132.separateAxes = !!i2133[1]
  i2132.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[2], i2132.strengthX)
  i2132.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[3], i2132.strengthY)
  i2132.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[4], i2132.strengthZ)
  i2132.frequency = i2133[5]
  i2132.damping = !!i2133[6]
  i2132.octaveCount = i2133[7]
  i2132.octaveMultiplier = i2133[8]
  i2132.octaveScale = i2133[9]
  i2132.quality = i2133[10]
  i2132.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[11], i2132.scrollSpeed)
  i2132.scrollSpeedMultiplier = i2133[12]
  i2132.remapEnabled = !!i2133[13]
  i2132.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[14], i2132.remapX)
  i2132.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[15], i2132.remapY)
  i2132.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[16], i2132.remapZ)
  i2132.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[17], i2132.positionAmount)
  i2132.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[18], i2132.rotationAmount)
  i2132.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2133[19], i2132.sizeAmount)
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2134 = root || new pc.ParticleSystemInheritVelocity()
  var i2135 = data
  i2134.enabled = !!i2135[0]
  i2134.mode = i2135[1]
  i2134.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2135[2], i2134.curve)
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2136 = root || new pc.ParticleSystemForceOverLifetime()
  var i2137 = data
  i2136.enabled = !!i2137[0]
  i2136.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[1], i2136.x)
  i2136.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[2], i2136.y)
  i2136.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[3], i2136.z)
  i2136.space = i2137[4]
  i2136.randomized = !!i2137[5]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2138 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2139 = data
  i2138.enabled = !!i2139[0]
  i2138.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[1], i2138.limit)
  i2138.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[2], i2138.limitX)
  i2138.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[3], i2138.limitY)
  i2138.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[4], i2138.limitZ)
  i2138.dampen = i2139[5]
  i2138.separateAxes = !!i2139[6]
  i2138.space = i2139[7]
  i2138.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2139[8], i2138.drag)
  i2138.multiplyDragByParticleSize = !!i2139[9]
  i2138.multiplyDragByParticleVelocity = !!i2139[10]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2141 = data
  request.r(i2141[0], i2141[1], 0, i2140, 'mesh')
  i2140.meshCount = i2141[2]
  i2140.activeVertexStreamsCount = i2141[3]
  i2140.alignment = i2141[4]
  i2140.renderMode = i2141[5]
  i2140.sortMode = i2141[6]
  i2140.lengthScale = i2141[7]
  i2140.velocityScale = i2141[8]
  i2140.cameraVelocityScale = i2141[9]
  i2140.normalDirection = i2141[10]
  i2140.sortingFudge = i2141[11]
  i2140.minParticleSize = i2141[12]
  i2140.maxParticleSize = i2141[13]
  i2140.pivot = new pc.Vec3( i2141[14], i2141[15], i2141[16] )
  request.r(i2141[17], i2141[18], 0, i2140, 'trailMaterial')
  i2140.applyActiveColorSpace = !!i2141[19]
  i2140.enabled = !!i2141[20]
  request.r(i2141[21], i2141[22], 0, i2140, 'sharedMaterial')
  var i2143 = i2141[23]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2140.sharedMaterials = i2142
  i2140.receiveShadows = !!i2141[24]
  i2140.shadowCastingMode = i2141[25]
  i2140.sortingLayerID = i2141[26]
  i2140.sortingOrder = i2141[27]
  i2140.lightmapIndex = i2141[28]
  i2140.lightmapSceneIndex = i2141[29]
  i2140.lightmapScaleOffset = new pc.Vec4( i2141[30], i2141[31], i2141[32], i2141[33] )
  i2140.lightProbeUsage = i2141[34]
  i2140.reflectionProbeUsage = i2141[35]
  return i2140
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i2146 = root || request.c( 'MergeEffect' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'tf')
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.tagId = i2149[1]
  i2148.enabled = !!i2149[2]
  i2148.isStatic = !!i2149[3]
  i2148.layer = i2149[4]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.halfPrecision = !!i2151[1]
  i2150.useSimplification = !!i2151[2]
  i2150.useUInt32IndexFormat = !!i2151[3]
  i2150.vertexCount = i2151[4]
  i2150.aabb = i2151[5]
  var i2153 = i2151[6]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( !!i2153[i + 0] );
  }
  i2150.streams = i2152
  i2150.vertices = i2151[7]
  var i2155 = i2151[8]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2155[i + 0]) );
  }
  i2150.subMeshes = i2154
  var i2157 = i2151[9]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 16) {
    i2156.push( new pc.Mat4().setData(i2157[i + 0], i2157[i + 1], i2157[i + 2], i2157[i + 3],  i2157[i + 4], i2157[i + 5], i2157[i + 6], i2157[i + 7],  i2157[i + 8], i2157[i + 9], i2157[i + 10], i2157[i + 11],  i2157[i + 12], i2157[i + 13], i2157[i + 14], i2157[i + 15]) );
  }
  i2150.bindposes = i2156
  var i2159 = i2151[10]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2159[i + 0]) );
  }
  i2150.blendShapes = i2158
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2165 = data
  i2164.triangles = i2165[0]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2171 = data
  i2170.name = i2171[0]
  var i2173 = i2171[1]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2173[i + 0]) );
  }
  i2170.frames = i2172
  return i2170
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i2174 = root || request.c( 'BlinkEffect' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'tf')
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.index = i2177[1]
  i2176.startup = !!i2177[2]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2179 = data
  i2178.pivot = new pc.Vec2( i2179[0], i2179[1] )
  i2178.anchorMin = new pc.Vec2( i2179[2], i2179[3] )
  i2178.anchorMax = new pc.Vec2( i2179[4], i2179[5] )
  i2178.sizeDelta = new pc.Vec2( i2179[6], i2179[7] )
  i2178.anchoredPosition3D = new pc.Vec3( i2179[8], i2179[9], i2179[10] )
  i2178.rotation = new pc.Quat(i2179[11], i2179[12], i2179[13], i2179[14])
  i2178.scale = new pc.Vec3( i2179[15], i2179[16], i2179[17] )
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2181 = data
  i2180.planeDistance = i2181[0]
  i2180.referencePixelsPerUnit = i2181[1]
  i2180.isFallbackOverlay = !!i2181[2]
  i2180.renderMode = i2181[3]
  i2180.renderOrder = i2181[4]
  i2180.sortingLayerName = i2181[5]
  i2180.sortingOrder = i2181[6]
  i2180.scaleFactor = i2181[7]
  request.r(i2181[8], i2181[9], 0, i2180, 'worldCamera')
  i2180.overrideSorting = !!i2181[10]
  i2180.pixelPerfect = !!i2181[11]
  i2180.targetDisplay = i2181[12]
  i2180.overridePixelPerfect = !!i2181[13]
  i2180.enabled = !!i2181[14]
  return i2180
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2183 = data
  i2182.m_UiScaleMode = i2183[0]
  i2182.m_ReferencePixelsPerUnit = i2183[1]
  i2182.m_ScaleFactor = i2183[2]
  i2182.m_ReferenceResolution = new pc.Vec2( i2183[3], i2183[4] )
  i2182.m_ScreenMatchMode = i2183[5]
  i2182.m_MatchWidthOrHeight = i2183[6]
  i2182.m_PhysicalUnit = i2183[7]
  i2182.m_FallbackScreenDPI = i2183[8]
  i2182.m_DefaultSpriteDPI = i2183[9]
  i2182.m_DynamicPixelsPerUnit = i2183[10]
  i2182.m_PresetInfoIsWorld = !!i2183[11]
  return i2182
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2185 = data
  i2184.m_IgnoreReversedGraphics = !!i2185[0]
  i2184.m_BlockingObjects = i2185[1]
  i2184.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2185[2] )
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'animatorController')
  request.r(i2187[2], i2187[3], 0, i2186, 'avatar')
  i2186.updateMode = i2187[4]
  i2186.hasTransformHierarchy = !!i2187[5]
  i2186.applyRootMotion = !!i2187[6]
  var i2189 = i2187[7]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2186.humanBones = i2188
  i2186.enabled = !!i2187[8]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2193 = data
  i2192.cullTransparentMesh = !!i2193[0]
  return i2192
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2194 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2195 = data
  i2194.m_hasFontAssetChanged = !!i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'm_baseMaterial')
  i2194.m_maskOffset = new pc.Vec4( i2195[3], i2195[4], i2195[5], i2195[6] )
  i2194.m_text = i2195[7]
  i2194.m_isRightToLeft = !!i2195[8]
  request.r(i2195[9], i2195[10], 0, i2194, 'm_fontAsset')
  request.r(i2195[11], i2195[12], 0, i2194, 'm_sharedMaterial')
  var i2197 = i2195[13]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2194.m_fontSharedMaterials = i2196
  request.r(i2195[14], i2195[15], 0, i2194, 'm_fontMaterial')
  var i2199 = i2195[16]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2194.m_fontMaterials = i2198
  i2194.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2195[17], i2195[18], i2195[19], i2195[20])
  i2194.m_fontColor = new pc.Color(i2195[21], i2195[22], i2195[23], i2195[24])
  i2194.m_enableVertexGradient = !!i2195[25]
  i2194.m_colorMode = i2195[26]
  i2194.m_fontColorGradient = request.d('TMPro.VertexGradient', i2195[27], i2194.m_fontColorGradient)
  request.r(i2195[28], i2195[29], 0, i2194, 'm_fontColorGradientPreset')
  request.r(i2195[30], i2195[31], 0, i2194, 'm_spriteAsset')
  i2194.m_tintAllSprites = !!i2195[32]
  request.r(i2195[33], i2195[34], 0, i2194, 'm_StyleSheet')
  i2194.m_TextStyleHashCode = i2195[35]
  i2194.m_overrideHtmlColors = !!i2195[36]
  i2194.m_faceColor = UnityEngine.Color32.ConstructColor(i2195[37], i2195[38], i2195[39], i2195[40])
  i2194.m_fontSize = i2195[41]
  i2194.m_fontSizeBase = i2195[42]
  i2194.m_fontWeight = i2195[43]
  i2194.m_enableAutoSizing = !!i2195[44]
  i2194.m_fontSizeMin = i2195[45]
  i2194.m_fontSizeMax = i2195[46]
  i2194.m_fontStyle = i2195[47]
  i2194.m_HorizontalAlignment = i2195[48]
  i2194.m_VerticalAlignment = i2195[49]
  i2194.m_textAlignment = i2195[50]
  i2194.m_characterSpacing = i2195[51]
  i2194.m_wordSpacing = i2195[52]
  i2194.m_lineSpacing = i2195[53]
  i2194.m_lineSpacingMax = i2195[54]
  i2194.m_paragraphSpacing = i2195[55]
  i2194.m_charWidthMaxAdj = i2195[56]
  i2194.m_TextWrappingMode = i2195[57]
  i2194.m_wordWrappingRatios = i2195[58]
  i2194.m_overflowMode = i2195[59]
  request.r(i2195[60], i2195[61], 0, i2194, 'm_linkedTextComponent')
  request.r(i2195[62], i2195[63], 0, i2194, 'parentLinkedComponent')
  i2194.m_enableKerning = !!i2195[64]
  var i2201 = i2195[65]
  var i2200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.add(i2201[i + 0]);
  }
  i2194.m_ActiveFontFeatures = i2200
  i2194.m_enableExtraPadding = !!i2195[66]
  i2194.checkPaddingRequired = !!i2195[67]
  i2194.m_isRichText = !!i2195[68]
  i2194.m_parseCtrlCharacters = !!i2195[69]
  i2194.m_isOrthographic = !!i2195[70]
  i2194.m_isCullingEnabled = !!i2195[71]
  i2194.m_horizontalMapping = i2195[72]
  i2194.m_verticalMapping = i2195[73]
  i2194.m_uvLineOffset = i2195[74]
  i2194.m_geometrySortingOrder = i2195[75]
  i2194.m_IsTextObjectScaleStatic = !!i2195[76]
  i2194.m_VertexBufferAutoSizeReduction = !!i2195[77]
  i2194.m_useMaxVisibleDescender = !!i2195[78]
  i2194.m_pageToDisplay = i2195[79]
  i2194.m_margin = new pc.Vec4( i2195[80], i2195[81], i2195[82], i2195[83] )
  i2194.m_isUsingLegacyAnimationComponent = !!i2195[84]
  i2194.m_isVolumetricText = !!i2195[85]
  request.r(i2195[86], i2195[87], 0, i2194, 'm_Material')
  i2194.m_EmojiFallbackSupport = !!i2195[88]
  i2194.m_Maskable = !!i2195[89]
  i2194.m_Color = new pc.Color(i2195[90], i2195[91], i2195[92], i2195[93])
  i2194.m_RaycastTarget = !!i2195[94]
  i2194.m_RaycastPadding = new pc.Vec4( i2195[95], i2195[96], i2195[97], i2195[98] )
  return i2194
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2202 = root || request.c( 'TMPro.VertexGradient' )
  var i2203 = data
  i2202.topLeft = new pc.Color(i2203[0], i2203[1], i2203[2], i2203[3])
  i2202.topRight = new pc.Color(i2203[4], i2203[5], i2203[6], i2203[7])
  i2202.bottomLeft = new pc.Color(i2203[8], i2203[9], i2203[10], i2203[11])
  i2202.bottomRight = new pc.Color(i2203[12], i2203[13], i2203[14], i2203[15])
  return i2202
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2206 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'm_FillRect')
  request.r(i2207[2], i2207[3], 0, i2206, 'm_HandleRect')
  i2206.m_Direction = i2207[4]
  i2206.m_MinValue = i2207[5]
  i2206.m_MaxValue = i2207[6]
  i2206.m_WholeNumbers = !!i2207[7]
  i2206.m_Value = i2207[8]
  i2206.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2207[9], i2206.m_OnValueChanged)
  i2206.m_Navigation = request.d('UnityEngine.UI.Navigation', i2207[10], i2206.m_Navigation)
  i2206.m_Transition = i2207[11]
  i2206.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2207[12], i2206.m_Colors)
  i2206.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2207[13], i2206.m_SpriteState)
  i2206.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2207[14], i2206.m_AnimationTriggers)
  i2206.m_Interactable = !!i2207[15]
  request.r(i2207[16], i2207[17], 0, i2206, 'm_TargetGraphic')
  return i2206
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2209 = data
  i2208.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2209[0], i2208.m_PersistentCalls)
  return i2208
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2211 = data
  var i2213 = i2211[0]
  var i2212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.add(request.d('UnityEngine.Events.PersistentCall', i2213[i + 0]));
  }
  i2210.m_Calls = i2212
  return i2210
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'm_Target')
  i2216.m_TargetAssemblyTypeName = i2217[2]
  i2216.m_MethodName = i2217[3]
  i2216.m_Mode = i2217[4]
  i2216.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2217[5], i2216.m_Arguments)
  i2216.m_CallState = i2217[6]
  return i2216
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2219 = data
  i2218.m_Mode = i2219[0]
  i2218.m_WrapAround = !!i2219[1]
  request.r(i2219[2], i2219[3], 0, i2218, 'm_SelectOnUp')
  request.r(i2219[4], i2219[5], 0, i2218, 'm_SelectOnDown')
  request.r(i2219[6], i2219[7], 0, i2218, 'm_SelectOnLeft')
  request.r(i2219[8], i2219[9], 0, i2218, 'm_SelectOnRight')
  return i2218
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2221 = data
  i2220.m_NormalColor = new pc.Color(i2221[0], i2221[1], i2221[2], i2221[3])
  i2220.m_HighlightedColor = new pc.Color(i2221[4], i2221[5], i2221[6], i2221[7])
  i2220.m_PressedColor = new pc.Color(i2221[8], i2221[9], i2221[10], i2221[11])
  i2220.m_SelectedColor = new pc.Color(i2221[12], i2221[13], i2221[14], i2221[15])
  i2220.m_DisabledColor = new pc.Color(i2221[16], i2221[17], i2221[18], i2221[19])
  i2220.m_ColorMultiplier = i2221[20]
  i2220.m_FadeDuration = i2221[21]
  return i2220
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'm_HighlightedSprite')
  request.r(i2223[2], i2223[3], 0, i2222, 'm_PressedSprite')
  request.r(i2223[4], i2223[5], 0, i2222, 'm_SelectedSprite')
  request.r(i2223[6], i2223[7], 0, i2222, 'm_DisabledSprite')
  return i2222
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2225 = data
  i2224.m_NormalTrigger = i2225[0]
  i2224.m_HighlightedTrigger = i2225[1]
  i2224.m_PressedTrigger = i2225[2]
  i2224.m_SelectedTrigger = i2225[3]
  i2224.m_DisabledTrigger = i2225[4]
  return i2224
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.UI.Image' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'm_Sprite')
  i2226.m_Type = i2227[2]
  i2226.m_PreserveAspect = !!i2227[3]
  i2226.m_FillCenter = !!i2227[4]
  i2226.m_FillMethod = i2227[5]
  i2226.m_FillAmount = i2227[6]
  i2226.m_FillClockwise = !!i2227[7]
  i2226.m_FillOrigin = i2227[8]
  i2226.m_UseSpriteMesh = !!i2227[9]
  i2226.m_PixelsPerUnitMultiplier = i2227[10]
  request.r(i2227[11], i2227[12], 0, i2226, 'm_Material')
  i2226.m_Maskable = !!i2227[13]
  i2226.m_Color = new pc.Color(i2227[14], i2227[15], i2227[16], i2227[17])
  i2226.m_RaycastTarget = !!i2227[18]
  i2226.m_RaycastPadding = new pc.Vec4( i2227[19], i2227[20], i2227[21], i2227[22] )
  return i2226
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.UI.Button' )
  var i2229 = data
  i2228.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2229[0], i2228.m_OnClick)
  i2228.m_Navigation = request.d('UnityEngine.UI.Navigation', i2229[1], i2228.m_Navigation)
  i2228.m_Transition = i2229[2]
  i2228.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2229[3], i2228.m_Colors)
  i2228.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2229[4], i2228.m_SpriteState)
  i2228.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2229[5], i2228.m_AnimationTriggers)
  i2228.m_Interactable = !!i2229[6]
  request.r(i2229[7], i2229[8], 0, i2228, 'm_TargetGraphic')
  return i2228
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2230 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2231 = data
  i2230.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2231[0], i2230.m_PersistentCalls)
  return i2230
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_ObjectArgument')
  i2232.m_ObjectArgumentAssemblyTypeName = i2233[2]
  i2232.m_IntArgument = i2233[3]
  i2232.m_FloatArgument = i2233[4]
  i2232.m_StringArgument = i2233[5]
  i2232.m_BoolArgument = !!i2233[6]
  return i2232
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i2234 = root || request.c( 'Ply_Pool' )
  var i2235 = data
  var i2237 = i2235[0]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Ply_Pool+PoolAmount', i2237[i + 0]) );
  }
  i2234.poolAmounts = i2236
  request.r(i2235[1], i2235[2], 0, i2234, 'poolHolder')
  return i2234
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i2240 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i2241 = data
  i2240.type = i2241[0]
  i2240.amount = i2241[1]
  request.r(i2241[2], i2241[3], 0, i2240, 'gameUnit')
  return i2240
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i2242 = root || request.c( 'Ply_SoundManager' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Ply_SoundManager+FxAudio', i2245[i + 0]) );
  }
  i2242.fxAudios = i2244
  var i2247 = i2243[1]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 2, i2246, '')
  }
  i2242.audioClips = i2246
  request.r(i2243[2], i2243[3], 0, i2242, 'sound')
  return i2242
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i2250 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i2251 = data
  i2250.fxType = i2251[0]
  request.r(i2251[1], i2251[2], 0, i2250, 'audioClip')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'clip')
  request.r(i2255[2], i2255[3], 0, i2254, 'outputAudioMixerGroup')
  i2254.playOnAwake = !!i2255[4]
  i2254.loop = !!i2255[5]
  i2254.time = i2255[6]
  i2254.volume = i2255[7]
  i2254.pitch = i2255[8]
  i2254.enabled = !!i2255[9]
  return i2254
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2256 = root || request.c( 'GameManager' )
  var i2257 = data
  i2256.isPlaying = !!i2257[0]
  i2256.isTutorial = !!i2257[1]
  i2256.isGotoStore = !!i2257[2]
  i2256.isDraggingConveyor = !!i2257[3]
  i2256.countMove = i2257[4]
  i2256.maxMove = i2257[5]
  i2256.startLayer = i2257[6]
  i2256.currentLayer = i2257[7]
  request.r(i2257[8], i2257[9], 0, i2256, 'mainBox')
  request.r(i2257[10], i2257[11], 0, i2256, 'itemConveyor')
  i2256.useTimer = !!i2257[12]
  i2256.gameDuration = i2257[13]
  request.r(i2257[14], i2257[15], 0, i2256, 'handTutorial')
  i2256.tutorialDelay = i2257[16]
  i2256.maxTutorialPlacements = i2257[17]
  return i2256
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2258 = root || request.c( 'UIManager' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'winUI')
  request.r(i2259[2], i2259[3], 0, i2258, 'loseUI')
  request.r(i2259[4], i2259[5], 0, i2258, 'tutorial')
  request.r(i2259[6], i2259[7], 0, i2258, 'verticalUI')
  request.r(i2259[8], i2259[9], 0, i2258, 'horizontalUI')
  request.r(i2259[10], i2259[11], 0, i2258, 'downloadBtnVertical')
  request.r(i2259[12], i2259[13], 0, i2258, 'dowloadBtnHorizontal')
  request.r(i2259[14], i2259[15], 0, i2258, 'textAnim')
  i2258.isGoogleBuild = !!i2259[16]
  request.r(i2259[17], i2259[18], 0, i2258, 'progressSlider')
  request.r(i2259[19], i2259[20], 0, i2258, 'progressText')
  i2258.maxProgressItems = i2259[21]
  i2258.startProgressItems = i2259[22]
  i2258.screenWidth = i2259[23]
  i2258.screenHeight = i2259[24]
  i2258.scaleHeightOnWidth = i2259[25]
  i2258.isVertical = !!i2259[26]
  i2258.isScreenVertical = !!i2259[27]
  request.r(i2259[28], i2259[29], 0, i2258, 'cam')
  i2258.verticalUIHeightOnWidthRatio = i2259[30]
  i2258.screenVerticalHeightOnWidthRatio = i2259[31]
  i2258.introZoomOutMultiplier = i2259[32]
  i2258.cameraZoomDuration = i2259[33]
  i2258.useContinuousScaling = !!i2259[34]
  i2258.baseOrthographicSize = i2259[35]
  i2258.baseAspect = i2259[36]
  i2258.landscapeSize = i2259[37]
  i2258.defaultPortraitSize = i2259[38]
  var i2261 = i2259[39]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.add(request.d('ScreenScaleStep', i2261[i + 0]));
  }
  i2258.discreteScaleSteps = i2260
  i2258.usePerspectiveCamera = !!i2259[40]
  request.r(i2259[41], i2259[42], 0, i2258, 'perspectiveFocus')
  i2258.perspectiveFocusDistance = i2259[43]
  i2258.perspectivePadding = i2259[44]
  i2258.fitRendererBounds = !!i2259[45]
  request.r(i2259[46], i2259[47], 0, i2258, 'boundsRoot')
  var i2263 = i2259[48]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i2263.length; i += 2) {
  request.r(i2263[i + 0], i2263[i + 1], 1, i2262, '')
  }
  i2258.boundsRenderers = i2262
  return i2258
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i2266 = root || request.c( 'ScreenScaleStep' )
  var i2267 = data
  i2266.heightOnWidthRatio = i2267[0]
  i2266.orthographicSize = i2267[1]
  return i2266
}

Deserializers["InputManager"] = function (request, data, root) {
  var i2270 = root || request.c( 'InputManager' )
  var i2271 = data
  i2270.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2271[0] )
  i2270.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i2271[1] )
  i2270.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i2271[2] )
  i2270.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i2271[3] )
  i2270.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i2271[4] )
  i2270.isDragging = !!i2271[5]
  request.r(i2271[6], i2271[7], 0, i2270, 'mainCamera')
  return i2270
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i2272 = root || request.c( 'ItemSetupTool' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'spritesParent')
  request.r(i2273[2], i2273[3], 0, i2272, 'holdersParent')
  i2272.shadowSuffix = i2273[4]
  i2272.holderPrefix = i2273[5]
  i2272.holdersParentName = i2273[6]
  i2272.colliderDepth = i2273[7]
  i2272.colliderSizeMultiplier = i2273[8]
  i2272.minColliderSize = new pc.Vec2( i2273[9], i2273[10] )
  i2272.generatedShadowColor = new pc.Color(i2273[11], i2273[12], i2273[13], i2273[14])
  i2272.fadedBlackShadowColor = new pc.Color(i2273[15], i2273[16], i2273[17], i2273[18])
  i2272.generatedShadowLocalOffset = new pc.Vec3( i2273[19], i2273[20], i2273[21] )
  i2272.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i2273[22] )
  i2272.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i2273[23] )
  return i2272
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2274 = root || request.c( 'CameraController' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'targetCamera')
  i2274.enableZoom = !!i2275[2]
  i2274.minZoomRatio = i2275[3]
  i2274.maxZoomRatio = i2275[4]
  i2274.mouseWheelZoomSpeed = i2275[5]
  i2274.pinchZoomSpeed = i2275[6]
  request.r(i2275[7], i2275[8], 0, i2274, 'conveyor')
  i2274.enableDrag = !!i2275[9]
  i2274.horizontalOnly = !!i2275[10]
  i2274.dragSensitivity = i2275[11]
  i2274.maxHorizontalOffset = i2275[12]
  i2274.maxVerticalOffset = i2275[13]
  return i2274
}

Deserializers["ItemSpawnManager"] = function (request, data, root) {
  var i2276 = root || request.c( 'ItemSpawnManager' )
  var i2277 = data
  i2276.spawnInRandomArea = !!i2277[0]
  i2276.spawnTargetMode = i2277[1]
  var i2279 = i2277[2]
  var i2278 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 1, i2278, '')
  }
  i2276.dynamicItems = i2278
  var i2281 = i2277[3]
  var i2280 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 1, i2280, '')
  }
  i2276.spawnTargets = i2280
  i2276.initialSpawnCount = i2277[4]
  i2276.revealDuration = i2277[5]
  i2276.showInitialBatchShadowsOnSpawn = !!i2277[6]
  i2276.spawnAreaSize = new pc.Vec2( i2277[7], i2277[8] )
  i2276.spawnAreaOffset = new pc.Vec3( i2277[9], i2277[10], i2277[11] )
  request.r(i2277[12], i2277[13], 0, i2276, 'randomSpawnParent')
  i2276.showShadowOnDragCount = i2277[14]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2287 = data
  i2286.aspect = i2287[0]
  i2286.orthographic = !!i2287[1]
  i2286.orthographicSize = i2287[2]
  i2286.backgroundColor = new pc.Color(i2287[3], i2287[4], i2287[5], i2287[6])
  i2286.nearClipPlane = i2287[7]
  i2286.farClipPlane = i2287[8]
  i2286.fieldOfView = i2287[9]
  i2286.depth = i2287[10]
  i2286.clearFlags = i2287[11]
  i2286.cullingMask = i2287[12]
  i2286.rect = i2287[13]
  request.r(i2287[14], i2287[15], 0, i2286, 'targetTexture')
  i2286.usePhysicalProperties = !!i2287[16]
  i2286.focalLength = i2287[17]
  i2286.sensorSize = new pc.Vec2( i2287[18], i2287[19] )
  i2286.lensShift = new pc.Vec2( i2287[20], i2287[21] )
  i2286.gateFit = i2287[22]
  i2286.commandBufferCount = i2287[23]
  i2286.cameraType = i2287[24]
  i2286.enabled = !!i2287[25]
  return i2286
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'm_FirstSelected')
  i2288.m_sendNavigationEvents = !!i2289[2]
  i2288.m_DragThreshold = i2289[3]
  return i2288
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2291 = data
  i2290.m_HorizontalAxis = i2291[0]
  i2290.m_VerticalAxis = i2291[1]
  i2290.m_SubmitButton = i2291[2]
  i2290.m_CancelButton = i2291[3]
  i2290.m_InputActionsPerSecond = i2291[4]
  i2290.m_RepeatDelay = i2291[5]
  i2290.m_ForceModuleActive = !!i2291[6]
  i2290.m_SendPointerHoverToParent = !!i2291[7]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2293 = data
  i2292.color = new pc.Color(i2293[0], i2293[1], i2293[2], i2293[3])
  request.r(i2293[4], i2293[5], 0, i2292, 'sprite')
  i2292.flipX = !!i2293[6]
  i2292.flipY = !!i2293[7]
  i2292.drawMode = i2293[8]
  i2292.size = new pc.Vec2( i2293[9], i2293[10] )
  i2292.tileMode = i2293[11]
  i2292.adaptiveModeThreshold = i2293[12]
  i2292.maskInteraction = i2293[13]
  i2292.spriteSortPoint = i2293[14]
  i2292.enabled = !!i2293[15]
  request.r(i2293[16], i2293[17], 0, i2292, 'sharedMaterial')
  var i2295 = i2293[18]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 2) {
  request.r(i2295[i + 0], i2295[i + 1], 2, i2294, '')
  }
  i2292.sharedMaterials = i2294
  i2292.receiveShadows = !!i2293[19]
  i2292.shadowCastingMode = i2293[20]
  i2292.sortingLayerID = i2293[21]
  i2292.sortingOrder = i2293[22]
  i2292.lightmapIndex = i2293[23]
  i2292.lightmapSceneIndex = i2293[24]
  i2292.lightmapScaleOffset = new pc.Vec4( i2293[25], i2293[26], i2293[27], i2293[28] )
  i2292.lightProbeUsage = i2293[29]
  i2292.reflectionProbeUsage = i2293[30]
  return i2292
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i2296 = root || request.c( 'ItemHolder' )
  var i2297 = data
  i2296.id = i2297[0]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2299 = data
  i2298.center = new pc.Vec3( i2299[0], i2299[1], i2299[2] )
  i2298.size = new pc.Vec3( i2299[3], i2299[4], i2299[5] )
  i2298.enabled = !!i2299[6]
  i2298.isTrigger = !!i2299[7]
  request.r(i2299[8], i2299[9], 0, i2298, 'material')
  return i2298
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i2300 = root || request.c( 'PSD_Tool' )
  var i2301 = data
  var i2303 = i2301[0]
  var i2302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 1, i2302, '')
  }
  i2300.sprites = i2302
  request.r(i2301[1], i2301[2], 0, i2300, 'holder')
  var i2305 = i2301[3]
  var i2304 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2305.length; i += 2) {
  request.r(i2305[i + 0], i2305[i + 1], 1, i2304, '')
  }
  i2300.childGameObjects = i2304
  return i2300
}

Deserializers["Item"] = function (request, data, root) {
  var i2310 = root || request.c( 'Item' )
  var i2311 = data
  i2310.fxTypeOnPlace = i2311[0]
  i2310.id = i2311[1]
  i2310.currentState = i2311[2]
  i2310.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i2311[3] )
  request.r(i2311[4], i2311[5], 0, i2310, 'defaultShadow')
  i2310.returnToSlotOnMiss = !!i2311[6]
  i2310.hideShadowOnDrop = !!i2311[7]
  i2310.scaleOnSpawn = !!i2311[8]
  i2310.spawnScaleMultiplier = i2311[9]
  var i2313 = i2311[10]
  var i2312 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i2313.length; i += 2) {
  request.r(i2313[i + 0], i2313[i + 1], 1, i2312, '')
  }
  i2310.requiredItems = i2312
  request.r(i2311[11], i2311[12], 0, i2310, 'correctHolderTransform')
  request.r(i2311[13], i2311[14], 0, i2310, 'shadowOnHolder')
  i2310.canShowShadowHint = !!i2311[15]
  request.r(i2311[16], i2311[17], 0, i2310, 'homeSlot')
  i2310.waitingPosition = new pc.Vec3( i2311[18], i2311[19], i2311[20] )
  request.r(i2311[21], i2311[22], 0, i2310, 'spriteRenderer')
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2315 = data
  i2314.ambientIntensity = i2315[0]
  i2314.reflectionIntensity = i2315[1]
  i2314.ambientMode = i2315[2]
  i2314.ambientLight = new pc.Color(i2315[3], i2315[4], i2315[5], i2315[6])
  i2314.ambientSkyColor = new pc.Color(i2315[7], i2315[8], i2315[9], i2315[10])
  i2314.ambientGroundColor = new pc.Color(i2315[11], i2315[12], i2315[13], i2315[14])
  i2314.ambientEquatorColor = new pc.Color(i2315[15], i2315[16], i2315[17], i2315[18])
  i2314.fogColor = new pc.Color(i2315[19], i2315[20], i2315[21], i2315[22])
  i2314.fogEndDistance = i2315[23]
  i2314.fogStartDistance = i2315[24]
  i2314.fogDensity = i2315[25]
  i2314.fog = !!i2315[26]
  request.r(i2315[27], i2315[28], 0, i2314, 'skybox')
  i2314.fogMode = i2315[29]
  var i2317 = i2315[30]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2317[i + 0]) );
  }
  i2314.lightmaps = i2316
  i2314.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2315[31], i2314.lightProbes)
  i2314.lightmapsMode = i2315[32]
  i2314.mixedBakeMode = i2315[33]
  i2314.environmentLightingMode = i2315[34]
  i2314.ambientProbe = new pc.SphericalHarmonicsL2(i2315[35])
  i2314.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2315[36])
  i2314.useReferenceAmbientProbe = !!i2315[37]
  request.r(i2315[38], i2315[39], 0, i2314, 'customReflection')
  request.r(i2315[40], i2315[41], 0, i2314, 'defaultReflection')
  i2314.defaultReflectionMode = i2315[42]
  i2314.defaultReflectionResolution = i2315[43]
  i2314.sunLightObjectId = i2315[44]
  i2314.pixelLightCount = i2315[45]
  i2314.defaultReflectionHDR = !!i2315[46]
  i2314.hasLightDataAsset = !!i2315[47]
  i2314.hasManualGenerate = !!i2315[48]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2321 = data
  request.r(i2321[0], i2321[1], 0, i2320, 'lightmapColor')
  request.r(i2321[2], i2321[3], 0, i2320, 'lightmapDirection')
  request.r(i2321[4], i2321[5], 0, i2320, 'shadowMask')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2322 = root || new UnityEngine.LightProbes()
  var i2323 = data
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2331 = data
  var i2333 = i2331[0]
  var i2332 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2333[i + 0]));
  }
  i2330.ShaderCompilationErrors = i2332
  i2330.name = i2331[1]
  i2330.guid = i2331[2]
  var i2335 = i2331[3]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( i2335[i + 0] );
  }
  i2330.shaderDefinedKeywords = i2334
  var i2337 = i2331[4]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2337[i + 0]) );
  }
  i2330.passes = i2336
  var i2339 = i2331[5]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2339[i + 0]) );
  }
  i2330.usePasses = i2338
  var i2341 = i2331[6]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2341[i + 0]) );
  }
  i2330.defaultParameterValues = i2340
  request.r(i2331[7], i2331[8], 0, i2330, 'unityFallbackShader')
  i2330.readDepth = !!i2331[9]
  i2330.hasDepthOnlyPass = !!i2331[10]
  i2330.isCreatedByShaderGraph = !!i2331[11]
  i2330.disableBatching = !!i2331[12]
  i2330.compiled = !!i2331[13]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2345 = data
  i2344.shaderName = i2345[0]
  i2344.errorMessage = i2345[1]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2350 = root || new pc.UnityShaderPass()
  var i2351 = data
  i2350.id = i2351[0]
  i2350.subShaderIndex = i2351[1]
  i2350.name = i2351[2]
  i2350.passType = i2351[3]
  i2350.grabPassTextureName = i2351[4]
  i2350.usePass = !!i2351[5]
  i2350.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[6], i2350.zTest)
  i2350.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[7], i2350.zWrite)
  i2350.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[8], i2350.culling)
  i2350.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2351[9], i2350.blending)
  i2350.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2351[10], i2350.alphaBlending)
  i2350.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[11], i2350.colorWriteMask)
  i2350.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[12], i2350.offsetUnits)
  i2350.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[13], i2350.offsetFactor)
  i2350.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[14], i2350.stencilRef)
  i2350.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[15], i2350.stencilReadMask)
  i2350.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2351[16], i2350.stencilWriteMask)
  i2350.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2351[17], i2350.stencilOp)
  i2350.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2351[18], i2350.stencilOpFront)
  i2350.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2351[19], i2350.stencilOpBack)
  var i2353 = i2351[20]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2353[i + 0]) );
  }
  i2350.tags = i2352
  var i2355 = i2351[21]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( i2355[i + 0] );
  }
  i2350.passDefinedKeywords = i2354
  var i2357 = i2351[22]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2357[i + 0]) );
  }
  i2350.passDefinedKeywordGroups = i2356
  var i2359 = i2351[23]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2359[i + 0]) );
  }
  i2350.variants = i2358
  var i2361 = i2351[24]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2361[i + 0]) );
  }
  i2350.excludedVariants = i2360
  i2350.hasDepthReader = !!i2351[25]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2363 = data
  i2362.val = i2363[0]
  i2362.name = i2363[1]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2365 = data
  i2364.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2365[0], i2364.src)
  i2364.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2365[1], i2364.dst)
  i2364.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2365[2], i2364.op)
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2367 = data
  i2366.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[0], i2366.pass)
  i2366.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[1], i2366.fail)
  i2366.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[2], i2366.zFail)
  i2366.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[3], i2366.comp)
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2371 = data
  i2370.name = i2371[0]
  i2370.value = i2371[1]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( i2377[i + 0] );
  }
  i2374.keywords = i2376
  i2374.hasDiscard = !!i2375[1]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2381 = data
  i2380.passId = i2381[0]
  i2380.subShaderIndex = i2381[1]
  var i2383 = i2381[2]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( i2383[i + 0] );
  }
  i2380.keywords = i2382
  i2380.vertexProgram = i2381[3]
  i2380.fragmentProgram = i2381[4]
  i2380.exportedForWebGl2 = !!i2381[5]
  i2380.readDepth = !!i2381[6]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'shader')
  i2386.pass = i2387[2]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2391 = data
  i2390.name = i2391[0]
  i2390.type = i2391[1]
  i2390.value = new pc.Vec4( i2391[2], i2391[3], i2391[4], i2391[5] )
  i2390.textureValue = i2391[6]
  i2390.shaderPropertyFlag = i2391[7]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2393 = data
  i2392.name = i2393[0]
  request.r(i2393[1], i2393[2], 0, i2392, 'texture')
  i2392.aabb = i2393[3]
  i2392.vertices = i2393[4]
  i2392.triangles = i2393[5]
  i2392.textureRect = UnityEngine.Rect.MinMaxRect(i2393[6], i2393[7], i2393[8], i2393[9])
  i2392.packedRect = UnityEngine.Rect.MinMaxRect(i2393[10], i2393[11], i2393[12], i2393[13])
  i2392.border = new pc.Vec4( i2393[14], i2393[15], i2393[16], i2393[17] )
  i2392.transparency = i2393[18]
  i2392.bounds = i2393[19]
  i2392.pixelsPerUnit = i2393[20]
  i2392.textureWidth = i2393[21]
  i2392.textureHeight = i2393[22]
  i2392.nativeSize = new pc.Vec2( i2393[23], i2393[24] )
  i2392.pivot = new pc.Vec2( i2393[25], i2393[26] )
  i2392.textureRectOffset = new pc.Vec2( i2393[27], i2393[28] )
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2395 = data
  i2394.name = i2395[0]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2397 = data
  i2396.name = i2397[0]
  i2396.wrapMode = i2397[1]
  i2396.isLooping = !!i2397[2]
  i2396.length = i2397[3]
  var i2399 = i2397[4]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2399[i + 0]) );
  }
  i2396.curves = i2398
  var i2401 = i2397[5]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2401[i + 0]) );
  }
  i2396.events = i2400
  i2396.halfPrecision = !!i2397[6]
  i2396._frameRate = i2397[7]
  i2396.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2397[8], i2396.localBounds)
  i2396.hasMuscleCurves = !!i2397[9]
  var i2403 = i2397[10]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 1) {
    i2402.push( i2403[i + 0] );
  }
  i2396.clipMuscleConstant = i2402
  i2396.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2397[11], i2396.clipBindingConstant)
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2407 = data
  i2406.path = i2407[0]
  i2406.hash = i2407[1]
  i2406.componentType = i2407[2]
  i2406.property = i2407[3]
  i2406.keys = i2407[4]
  var i2409 = i2407[5]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2409[i + 0]) );
  }
  i2406.objectReferenceKeys = i2408
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2413 = data
  i2412.time = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'value')
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2417 = data
  i2416.functionName = i2417[0]
  i2416.floatParameter = i2417[1]
  i2416.intParameter = i2417[2]
  i2416.stringParameter = i2417[3]
  request.r(i2417[4], i2417[5], 0, i2416, 'objectReferenceParameter')
  i2416.time = i2417[6]
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2419 = data
  i2418.center = new pc.Vec3( i2419[0], i2419[1], i2419[2] )
  i2418.extends = new pc.Vec3( i2419[3], i2419[4], i2419[5] )
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2423 = data
  var i2425 = i2423[0]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( i2425[i + 0] );
  }
  i2422.genericBindings = i2424
  var i2427 = i2423[1]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( i2427[i + 0] );
  }
  i2422.pptrCurveMapping = i2426
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2429 = data
  i2428.name = i2429[0]
  var i2431 = i2429[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2431[i + 0]) );
  }
  i2428.layers = i2430
  var i2433 = i2429[2]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2433[i + 0]) );
  }
  i2428.parameters = i2432
  i2428.animationClips = i2429[3]
  i2428.avatarUnsupported = i2429[4]
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2437 = data
  i2436.name = i2437[0]
  i2436.defaultWeight = i2437[1]
  i2436.blendingMode = i2437[2]
  i2436.avatarMask = i2437[3]
  i2436.syncedLayerIndex = i2437[4]
  i2436.syncedLayerAffectsTiming = !!i2437[5]
  i2436.syncedLayers = i2437[6]
  i2436.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2437[7], i2436.stateMachine)
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2439 = data
  i2438.id = i2439[0]
  i2438.name = i2439[1]
  i2438.path = i2439[2]
  var i2441 = i2439[3]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2441[i + 0]) );
  }
  i2438.states = i2440
  var i2443 = i2439[4]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2443[i + 0]) );
  }
  i2438.machines = i2442
  var i2445 = i2439[5]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2445[i + 0]) );
  }
  i2438.entryStateTransitions = i2444
  var i2447 = i2439[6]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2447[i + 0]) );
  }
  i2438.exitStateTransitions = i2446
  var i2449 = i2439[7]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2449[i + 0]) );
  }
  i2438.anyStateTransitions = i2448
  i2438.defaultStateId = i2439[8]
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2453 = data
  i2452.id = i2453[0]
  i2452.name = i2453[1]
  i2452.cycleOffset = i2453[2]
  i2452.cycleOffsetParameter = i2453[3]
  i2452.cycleOffsetParameterActive = !!i2453[4]
  i2452.mirror = !!i2453[5]
  i2452.mirrorParameter = i2453[6]
  i2452.mirrorParameterActive = !!i2453[7]
  i2452.motionId = i2453[8]
  i2452.nameHash = i2453[9]
  i2452.fullPathHash = i2453[10]
  i2452.speed = i2453[11]
  i2452.speedParameter = i2453[12]
  i2452.speedParameterActive = !!i2453[13]
  i2452.tag = i2453[14]
  i2452.tagHash = i2453[15]
  i2452.writeDefaultValues = !!i2453[16]
  var i2455 = i2453[17]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2452.behaviours = i2454
  var i2457 = i2453[18]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2457[i + 0]) );
  }
  i2452.transitions = i2456
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2463 = data
  i2462.fullPath = i2463[0]
  i2462.canTransitionToSelf = !!i2463[1]
  i2462.duration = i2463[2]
  i2462.exitTime = i2463[3]
  i2462.hasExitTime = !!i2463[4]
  i2462.hasFixedDuration = !!i2463[5]
  i2462.interruptionSource = i2463[6]
  i2462.offset = i2463[7]
  i2462.orderedInterruption = !!i2463[8]
  i2462.destinationStateId = i2463[9]
  i2462.isExit = !!i2463[10]
  i2462.mute = !!i2463[11]
  i2462.solo = !!i2463[12]
  var i2465 = i2463[13]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2465[i + 0]) );
  }
  i2462.conditions = i2464
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2471 = data
  i2470.destinationStateId = i2471[0]
  i2470.isExit = !!i2471[1]
  i2470.mute = !!i2471[2]
  i2470.solo = !!i2471[3]
  var i2473 = i2471[4]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2473[i + 0]) );
  }
  i2470.conditions = i2472
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2477 = data
  i2476.defaultBool = !!i2477[0]
  i2476.defaultFloat = i2477[1]
  i2476.defaultInt = i2477[2]
  i2476.name = i2477[3]
  i2476.nameHash = i2477[4]
  i2476.type = i2477[5]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2479 = data
  i2478.name = i2479[0]
  i2478.bytes64 = i2479[1]
  i2478.data = i2479[2]
  return i2478
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2480 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2481 = data
  i2480.normalStyle = i2481[0]
  i2480.normalSpacingOffset = i2481[1]
  i2480.boldStyle = i2481[2]
  i2480.boldSpacing = i2481[3]
  i2480.italicStyle = i2481[4]
  i2480.tabSize = i2481[5]
  request.r(i2481[6], i2481[7], 0, i2480, 'atlas')
  i2480.m_SourceFontFileGUID = i2481[8]
  i2480.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2481[9], i2480.m_CreationSettings)
  request.r(i2481[10], i2481[11], 0, i2480, 'm_SourceFontFile')
  i2480.m_SourceFontFilePath = i2481[12]
  i2480.m_AtlasPopulationMode = i2481[13]
  i2480.InternalDynamicOS = !!i2481[14]
  var i2483 = i2481[15]
  var i2482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.add(request.d('UnityEngine.TextCore.Glyph', i2483[i + 0]));
  }
  i2480.m_GlyphTable = i2482
  var i2485 = i2481[16]
  var i2484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2485.length; i += 1) {
    i2484.add(request.d('TMPro.TMP_Character', i2485[i + 0]));
  }
  i2480.m_CharacterTable = i2484
  var i2487 = i2481[17]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2480.m_AtlasTextures = i2486
  i2480.m_AtlasTextureIndex = i2481[18]
  i2480.m_IsMultiAtlasTexturesEnabled = !!i2481[19]
  i2480.m_GetFontFeatures = !!i2481[20]
  i2480.m_ClearDynamicDataOnBuild = !!i2481[21]
  i2480.m_AtlasWidth = i2481[22]
  i2480.m_AtlasHeight = i2481[23]
  i2480.m_AtlasPadding = i2481[24]
  i2480.m_AtlasRenderMode = i2481[25]
  var i2489 = i2481[26]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.add(request.d('UnityEngine.TextCore.GlyphRect', i2489[i + 0]));
  }
  i2480.m_UsedGlyphRects = i2488
  var i2491 = i2481[27]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.add(request.d('UnityEngine.TextCore.GlyphRect', i2491[i + 0]));
  }
  i2480.m_FreeGlyphRects = i2490
  i2480.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2481[28], i2480.m_FontFeatureTable)
  i2480.m_ShouldReimportFontFeatures = !!i2481[29]
  var i2493 = i2481[30]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 1, i2492, '')
  }
  i2480.m_FallbackFontAssetTable = i2492
  var i2495 = i2481[31]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('TMPro.TMP_FontWeightPair', i2495[i + 0]) );
  }
  i2480.m_FontWeightTable = i2494
  var i2497 = i2481[32]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('TMPro.TMP_FontWeightPair', i2497[i + 0]) );
  }
  i2480.fontWeights = i2496
  i2480.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2481[33], i2480.m_fontInfo)
  var i2499 = i2481[34]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.add(request.d('TMPro.TMP_Glyph', i2499[i + 0]));
  }
  i2480.m_glyphInfoList = i2498
  i2480.m_KerningTable = request.d('TMPro.KerningTable', i2481[35], i2480.m_KerningTable)
  var i2501 = i2481[36]
  var i2500 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 1, i2500, '')
  }
  i2480.fallbackFontAssets = i2500
  i2480.m_Version = i2481[37]
  i2480.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2481[38], i2480.m_FaceInfo)
  request.r(i2481[39], i2481[40], 0, i2480, 'm_Material')
  return i2480
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2502 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2503 = data
  i2502.sourceFontFileName = i2503[0]
  i2502.sourceFontFileGUID = i2503[1]
  i2502.faceIndex = i2503[2]
  i2502.pointSizeSamplingMode = i2503[3]
  i2502.pointSize = i2503[4]
  i2502.padding = i2503[5]
  i2502.paddingMode = i2503[6]
  i2502.packingMode = i2503[7]
  i2502.atlasWidth = i2503[8]
  i2502.atlasHeight = i2503[9]
  i2502.characterSetSelectionMode = i2503[10]
  i2502.characterSequence = i2503[11]
  i2502.referencedFontAssetGUID = i2503[12]
  i2502.referencedTextAssetGUID = i2503[13]
  i2502.fontStyle = i2503[14]
  i2502.fontStyleModifier = i2503[15]
  i2502.renderMode = i2503[16]
  i2502.includeFontFeatures = !!i2503[17]
  return i2502
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2507 = data
  i2506.m_Index = i2507[0]
  i2506.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2507[1], i2506.m_Metrics)
  i2506.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2507[2], i2506.m_GlyphRect)
  i2506.m_Scale = i2507[3]
  i2506.m_AtlasIndex = i2507[4]
  i2506.m_ClassDefinitionType = i2507[5]
  return i2506
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2509 = data
  i2508.m_Width = i2509[0]
  i2508.m_Height = i2509[1]
  i2508.m_HorizontalBearingX = i2509[2]
  i2508.m_HorizontalBearingY = i2509[3]
  i2508.m_HorizontalAdvance = i2509[4]
  return i2508
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2511 = data
  i2510.m_X = i2511[0]
  i2510.m_Y = i2511[1]
  i2510.m_Width = i2511[2]
  i2510.m_Height = i2511[3]
  return i2510
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2514 = root || request.c( 'TMPro.TMP_Character' )
  var i2515 = data
  i2514.m_ElementType = i2515[0]
  i2514.m_Unicode = i2515[1]
  i2514.m_GlyphIndex = i2515[2]
  i2514.m_Scale = i2515[3]
  return i2514
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2520 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.add(request.d('TMPro.MultipleSubstitutionRecord', i2523[i + 0]));
  }
  i2520.m_MultipleSubstitutionRecords = i2522
  var i2525 = i2521[1]
  var i2524 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.add(request.d('TMPro.LigatureSubstitutionRecord', i2525[i + 0]));
  }
  i2520.m_LigatureSubstitutionRecords = i2524
  var i2527 = i2521[2]
  var i2526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i2527[i + 0]));
  }
  i2520.m_GlyphPairAdjustmentRecords = i2526
  var i2529 = i2521[3]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i2529[i + 0]));
  }
  i2520.m_MarkToBaseAdjustmentRecords = i2528
  var i2531 = i2521[4]
  var i2530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i2531[i + 0]));
  }
  i2520.m_MarkToMarkAdjustmentRecords = i2530
  return i2520
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i2534 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i2535 = data
  i2534.m_TargetGlyphID = i2535[0]
  i2534.m_SubstituteGlyphIDs = i2535[1]
  return i2534
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i2538 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i2539 = data
  i2538.m_ComponentGlyphIDs = i2539[0]
  i2538.m_LigatureGlyphID = i2539[1]
  return i2538
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i2543 = data
  i2542.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2543[0], i2542.m_FirstAdjustmentRecord)
  i2542.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i2543[1], i2542.m_SecondAdjustmentRecord)
  i2542.m_FeatureLookupFlags = i2543[2]
  return i2542
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i2546 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i2547 = data
  i2546.m_BaseGlyphID = i2547[0]
  i2546.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2547[1], i2546.m_BaseGlyphAnchorPoint)
  i2546.m_MarkGlyphID = i2547[2]
  i2546.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2547[3], i2546.m_MarkPositionAdjustment)
  return i2546
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i2550 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i2551 = data
  i2550.m_BaseMarkGlyphID = i2551[0]
  i2550.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i2551[1], i2550.m_BaseMarkGlyphAnchorPoint)
  i2550.m_CombiningMarkGlyphID = i2551[2]
  i2550.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i2551[3], i2550.m_CombiningMarkPositionAdjustment)
  return i2550
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2556 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'regularTypeface')
  request.r(i2557[2], i2557[3], 0, i2556, 'italicTypeface')
  return i2556
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2558 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2559 = data
  i2558.Name = i2559[0]
  i2558.PointSize = i2559[1]
  i2558.Scale = i2559[2]
  i2558.CharacterCount = i2559[3]
  i2558.LineHeight = i2559[4]
  i2558.Baseline = i2559[5]
  i2558.Ascender = i2559[6]
  i2558.CapHeight = i2559[7]
  i2558.Descender = i2559[8]
  i2558.CenterLine = i2559[9]
  i2558.SuperscriptOffset = i2559[10]
  i2558.SubscriptOffset = i2559[11]
  i2558.SubSize = i2559[12]
  i2558.Underline = i2559[13]
  i2558.UnderlineThickness = i2559[14]
  i2558.strikethrough = i2559[15]
  i2558.strikethroughThickness = i2559[16]
  i2558.TabWidth = i2559[17]
  i2558.Padding = i2559[18]
  i2558.AtlasWidth = i2559[19]
  i2558.AtlasHeight = i2559[20]
  return i2558
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2562 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2563 = data
  i2562.id = i2563[0]
  i2562.x = i2563[1]
  i2562.y = i2563[2]
  i2562.width = i2563[3]
  i2562.height = i2563[4]
  i2562.xOffset = i2563[5]
  i2562.yOffset = i2563[6]
  i2562.xAdvance = i2563[7]
  i2562.scale = i2563[8]
  return i2562
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2564 = root || request.c( 'TMPro.KerningTable' )
  var i2565 = data
  var i2567 = i2565[0]
  var i2566 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.add(request.d('TMPro.KerningPair', i2567[i + 0]));
  }
  i2564.kerningPairs = i2566
  return i2564
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2570 = root || request.c( 'TMPro.KerningPair' )
  var i2571 = data
  i2570.xOffset = i2571[0]
  i2570.m_FirstGlyph = i2571[1]
  i2570.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2571[2], i2570.m_FirstGlyphAdjustments)
  i2570.m_SecondGlyph = i2571[3]
  i2570.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2571[4], i2570.m_SecondGlyphAdjustments)
  i2570.m_IgnoreSpacingAdjustments = !!i2571[5]
  return i2570
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2573 = data
  i2572.m_FaceIndex = i2573[0]
  i2572.m_FamilyName = i2573[1]
  i2572.m_StyleName = i2573[2]
  i2572.m_PointSize = i2573[3]
  i2572.m_Scale = i2573[4]
  i2572.m_UnitsPerEM = i2573[5]
  i2572.m_LineHeight = i2573[6]
  i2572.m_AscentLine = i2573[7]
  i2572.m_CapLine = i2573[8]
  i2572.m_MeanLine = i2573[9]
  i2572.m_Baseline = i2573[10]
  i2572.m_DescentLine = i2573[11]
  i2572.m_SuperscriptOffset = i2573[12]
  i2572.m_SuperscriptSize = i2573[13]
  i2572.m_SubscriptOffset = i2573[14]
  i2572.m_SubscriptSize = i2573[15]
  i2572.m_UnderlineOffset = i2573[16]
  i2572.m_UnderlineThickness = i2573[17]
  i2572.m_StrikethroughOffset = i2573[18]
  i2572.m_StrikethroughThickness = i2573[19]
  i2572.m_TabWidth = i2573[20]
  return i2572
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2574 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2575 = data
  i2574.useSafeMode = !!i2575[0]
  i2574.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2575[1], i2574.safeModeOptions)
  i2574.timeScale = i2575[2]
  i2574.unscaledTimeScale = i2575[3]
  i2574.useSmoothDeltaTime = !!i2575[4]
  i2574.maxSmoothUnscaledTime = i2575[5]
  i2574.rewindCallbackMode = i2575[6]
  i2574.showUnityEditorReport = !!i2575[7]
  i2574.logBehaviour = i2575[8]
  i2574.drawGizmos = !!i2575[9]
  i2574.defaultRecyclable = !!i2575[10]
  i2574.defaultAutoPlay = i2575[11]
  i2574.defaultUpdateType = i2575[12]
  i2574.defaultTimeScaleIndependent = !!i2575[13]
  i2574.defaultEaseType = i2575[14]
  i2574.defaultEaseOvershootOrAmplitude = i2575[15]
  i2574.defaultEasePeriod = i2575[16]
  i2574.defaultAutoKill = !!i2575[17]
  i2574.defaultLoopType = i2575[18]
  i2574.debugMode = !!i2575[19]
  i2574.debugStoreTargetId = !!i2575[20]
  i2574.showPreviewPanel = !!i2575[21]
  i2574.storeSettingsLocation = i2575[22]
  i2574.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2575[23], i2574.modules)
  i2574.createASMDEF = !!i2575[24]
  i2574.showPlayingTweens = !!i2575[25]
  i2574.showPausedTweens = !!i2575[26]
  return i2574
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2576 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2577 = data
  i2576.logBehaviour = i2577[0]
  i2576.nestedTweenFailureBehaviour = i2577[1]
  return i2576
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2578 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2579 = data
  i2578.showPanel = !!i2579[0]
  i2578.audioEnabled = !!i2579[1]
  i2578.physicsEnabled = !!i2579[2]
  i2578.physics2DEnabled = !!i2579[3]
  i2578.spriteEnabled = !!i2579[4]
  i2578.uiEnabled = !!i2579[5]
  i2578.uiToolkitEnabled = !!i2579[6]
  i2578.textMeshProEnabled = !!i2579[7]
  i2578.tk2DEnabled = !!i2579[8]
  i2578.deAudioEnabled = !!i2579[9]
  i2578.deUnityExtendedEnabled = !!i2579[10]
  i2578.epoOutlineEnabled = !!i2579[11]
  return i2578
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2580 = root || request.c( 'TMPro.TMP_Settings' )
  var i2581 = data
  i2580.assetVersion = i2581[0]
  i2580.m_TextWrappingMode = i2581[1]
  i2580.m_enableKerning = !!i2581[2]
  var i2583 = i2581[3]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.add(i2583[i + 0]);
  }
  i2580.m_ActiveFontFeatures = i2582
  i2580.m_enableExtraPadding = !!i2581[4]
  i2580.m_enableTintAllSprites = !!i2581[5]
  i2580.m_enableParseEscapeCharacters = !!i2581[6]
  i2580.m_EnableRaycastTarget = !!i2581[7]
  i2580.m_GetFontFeaturesAtRuntime = !!i2581[8]
  i2580.m_missingGlyphCharacter = i2581[9]
  i2580.m_ClearDynamicDataOnBuild = !!i2581[10]
  i2580.m_warningsDisabled = !!i2581[11]
  request.r(i2581[12], i2581[13], 0, i2580, 'm_defaultFontAsset')
  i2580.m_defaultFontAssetPath = i2581[14]
  i2580.m_defaultFontSize = i2581[15]
  i2580.m_defaultAutoSizeMinRatio = i2581[16]
  i2580.m_defaultAutoSizeMaxRatio = i2581[17]
  i2580.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2581[18], i2581[19] )
  i2580.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2581[20], i2581[21] )
  i2580.m_autoSizeTextContainer = !!i2581[22]
  i2580.m_IsTextObjectScaleStatic = !!i2581[23]
  var i2585 = i2581[24]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2580.m_fallbackFontAssets = i2584
  i2580.m_matchMaterialPreset = !!i2581[25]
  i2580.m_HideSubTextObjects = !!i2581[26]
  request.r(i2581[27], i2581[28], 0, i2580, 'm_defaultSpriteAsset')
  i2580.m_defaultSpriteAssetPath = i2581[29]
  i2580.m_enableEmojiSupport = !!i2581[30]
  i2580.m_MissingCharacterSpriteUnicode = i2581[31]
  var i2587 = i2581[32]
  var i2586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i2587.length; i += 2) {
  request.r(i2587[i + 0], i2587[i + 1], 1, i2586, '')
  }
  i2580.m_EmojiFallbackTextAssets = i2586
  i2580.m_defaultColorGradientPresetsPath = i2581[33]
  request.r(i2581[34], i2581[35], 0, i2580, 'm_defaultStyleSheet')
  i2580.m_StyleSheetsResourcePath = i2581[36]
  request.r(i2581[37], i2581[38], 0, i2580, 'm_leadingCharacters')
  request.r(i2581[39], i2581[40], 0, i2580, 'm_followingCharacters')
  i2580.m_UseModernHangulLineBreakingRules = !!i2581[41]
  return i2580
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2590 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'spriteSheet')
  var i2593 = i2591[2]
  var i2592 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.add(request.d('TMPro.TMP_Sprite', i2593[i + 0]));
  }
  i2590.spriteInfoList = i2592
  var i2595 = i2591[3]
  var i2594 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 1, i2594, '')
  }
  i2590.fallbackSpriteAssets = i2594
  var i2597 = i2591[4]
  var i2596 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.add(request.d('TMPro.TMP_SpriteCharacter', i2597[i + 0]));
  }
  i2590.m_SpriteCharacterTable = i2596
  var i2599 = i2591[5]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('TMPro.TMP_SpriteGlyph', i2599[i + 0]));
  }
  i2590.m_GlyphTable = i2598
  i2590.m_Version = i2591[6]
  i2590.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2591[7], i2590.m_FaceInfo)
  request.r(i2591[8], i2591[9], 0, i2590, 'm_Material')
  return i2590
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2602 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2603 = data
  i2602.name = i2603[0]
  i2602.hashCode = i2603[1]
  i2602.unicode = i2603[2]
  i2602.pivot = new pc.Vec2( i2603[3], i2603[4] )
  request.r(i2603[5], i2603[6], 0, i2602, 'sprite')
  i2602.id = i2603[7]
  i2602.x = i2603[8]
  i2602.y = i2603[9]
  i2602.width = i2603[10]
  i2602.height = i2603[11]
  i2602.xOffset = i2603[12]
  i2602.yOffset = i2603[13]
  i2602.xAdvance = i2603[14]
  i2602.scale = i2603[15]
  return i2602
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2608 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2609 = data
  i2608.m_Name = i2609[0]
  i2608.m_ElementType = i2609[1]
  i2608.m_Unicode = i2609[2]
  i2608.m_GlyphIndex = i2609[3]
  i2608.m_Scale = i2609[4]
  return i2608
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2612 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'sprite')
  i2612.m_Index = i2613[2]
  i2612.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2613[3], i2612.m_Metrics)
  i2612.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2613[4], i2612.m_GlyphRect)
  i2612.m_Scale = i2613[5]
  i2612.m_AtlasIndex = i2613[6]
  i2612.m_ClassDefinitionType = i2613[7]
  return i2612
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2614 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.add(request.d('TMPro.TMP_Style', i2617[i + 0]));
  }
  i2614.m_StyleList = i2616
  return i2614
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2620 = root || request.c( 'TMPro.TMP_Style' )
  var i2621 = data
  i2620.m_Name = i2621[0]
  i2620.m_HashCode = i2621[1]
  i2620.m_OpeningDefinition = i2621[2]
  i2620.m_ClosingDefinition = i2621[3]
  i2620.m_OpeningTagArray = i2621[4]
  i2620.m_ClosingTagArray = i2621[5]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2623 = data
  var i2625 = i2623[0]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2625[i + 0]) );
  }
  i2622.files = i2624
  i2622.componentToPrefabIds = i2623[1]
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2629 = data
  i2628.path = i2629[0]
  request.r(i2629[1], i2629[2], 0, i2628, 'unityObject')
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2631 = data
  var i2633 = i2631[0]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2633[i + 0]) );
  }
  i2630.scriptsExecutionOrder = i2632
  var i2635 = i2631[1]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2635[i + 0]) );
  }
  i2630.sortingLayers = i2634
  var i2637 = i2631[2]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2637[i + 0]) );
  }
  i2630.cullingLayers = i2636
  i2630.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2631[3], i2630.timeSettings)
  i2630.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2631[4], i2630.physicsSettings)
  i2630.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2631[5], i2630.physics2DSettings)
  i2630.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2631[6], i2630.qualitySettings)
  i2630.enableRealtimeShadows = !!i2631[7]
  i2630.enableAutoInstancing = !!i2631[8]
  i2630.enableStaticBatching = !!i2631[9]
  i2630.enableDynamicBatching = !!i2631[10]
  i2630.lightmapEncodingQuality = i2631[11]
  i2630.desiredColorSpace = i2631[12]
  var i2639 = i2631[13]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( i2639[i + 0] );
  }
  i2630.allTags = i2638
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2643 = data
  i2642.name = i2643[0]
  i2642.value = i2643[1]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2647 = data
  i2646.id = i2647[0]
  i2646.name = i2647[1]
  i2646.value = i2647[2]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2651 = data
  i2650.id = i2651[0]
  i2650.name = i2651[1]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2653 = data
  i2652.fixedDeltaTime = i2653[0]
  i2652.maximumDeltaTime = i2653[1]
  i2652.timeScale = i2653[2]
  i2652.maximumParticleTimestep = i2653[3]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2655 = data
  i2654.gravity = new pc.Vec3( i2655[0], i2655[1], i2655[2] )
  i2654.defaultSolverIterations = i2655[3]
  i2654.bounceThreshold = i2655[4]
  i2654.autoSyncTransforms = !!i2655[5]
  i2654.autoSimulation = !!i2655[6]
  var i2657 = i2655[7]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2657[i + 0]) );
  }
  i2654.collisionMatrix = i2656
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2661 = data
  i2660.enabled = !!i2661[0]
  i2660.layerId = i2661[1]
  i2660.otherLayerId = i2661[2]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, 'material')
  i2662.gravity = new pc.Vec2( i2663[2], i2663[3] )
  i2662.positionIterations = i2663[4]
  i2662.velocityIterations = i2663[5]
  i2662.velocityThreshold = i2663[6]
  i2662.maxLinearCorrection = i2663[7]
  i2662.maxAngularCorrection = i2663[8]
  i2662.maxTranslationSpeed = i2663[9]
  i2662.maxRotationSpeed = i2663[10]
  i2662.baumgarteScale = i2663[11]
  i2662.baumgarteTOIScale = i2663[12]
  i2662.timeToSleep = i2663[13]
  i2662.linearSleepTolerance = i2663[14]
  i2662.angularSleepTolerance = i2663[15]
  i2662.defaultContactOffset = i2663[16]
  i2662.autoSimulation = !!i2663[17]
  i2662.queriesHitTriggers = !!i2663[18]
  i2662.queriesStartInColliders = !!i2663[19]
  i2662.callbacksOnDisable = !!i2663[20]
  i2662.reuseCollisionCallbacks = !!i2663[21]
  i2662.autoSyncTransforms = !!i2663[22]
  var i2665 = i2663[23]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2665[i + 0]) );
  }
  i2662.collisionMatrix = i2664
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2669 = data
  i2668.enabled = !!i2669[0]
  i2668.layerId = i2669[1]
  i2668.otherLayerId = i2669[2]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2671 = data
  var i2673 = i2671[0]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2673[i + 0]) );
  }
  i2670.qualityLevels = i2672
  var i2675 = i2671[1]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( i2675[i + 0] );
  }
  i2670.names = i2674
  i2670.shadows = i2671[2]
  i2670.anisotropicFiltering = i2671[3]
  i2670.antiAliasing = i2671[4]
  i2670.lodBias = i2671[5]
  i2670.shadowCascades = i2671[6]
  i2670.shadowDistance = i2671[7]
  i2670.shadowmaskMode = i2671[8]
  i2670.shadowProjection = i2671[9]
  i2670.shadowResolution = i2671[10]
  i2670.softParticles = !!i2671[11]
  i2670.softVegetation = !!i2671[12]
  i2670.activeColorSpace = i2671[13]
  i2670.desiredColorSpace = i2671[14]
  i2670.masterTextureLimit = i2671[15]
  i2670.maxQueuedFrames = i2671[16]
  i2670.particleRaycastBudget = i2671[17]
  i2670.pixelLightCount = i2671[18]
  i2670.realtimeReflectionProbes = !!i2671[19]
  i2670.shadowCascade2Split = i2671[20]
  i2670.shadowCascade4Split = new pc.Vec3( i2671[21], i2671[22], i2671[23] )
  i2670.streamingMipmapsActive = !!i2671[24]
  i2670.vSyncCount = i2671[25]
  i2670.asyncUploadBufferSize = i2671[26]
  i2670.asyncUploadTimeSlice = i2671[27]
  i2670.billboardsFaceCameraPosition = !!i2671[28]
  i2670.shadowNearPlaneOffset = i2671[29]
  i2670.streamingMipmapsMemoryBudget = i2671[30]
  i2670.maximumLODLevel = i2671[31]
  i2670.streamingMipmapsAddAllCameras = !!i2671[32]
  i2670.streamingMipmapsMaxLevelReduction = i2671[33]
  i2670.streamingMipmapsRenderersPerFrame = i2671[34]
  i2670.resolutionScalingFixedDPIFactor = i2671[35]
  i2670.streamingMipmapsMaxFileIORequests = i2671[36]
  i2670.currentQualityLevel = i2671[37]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2681 = data
  i2680.weight = i2681[0]
  i2680.vertices = i2681[1]
  i2680.normals = i2681[2]
  i2680.tangents = i2681[3]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2685 = data
  i2684.mode = i2685[0]
  i2684.parameter = i2685[1]
  i2684.threshold = i2685[2]
  return i2684
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i2687 = data
  i2686.m_GlyphIndex = i2687[0]
  i2686.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i2687[1], i2686.m_GlyphValueRecord)
  return i2686
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i2689 = data
  i2688.m_XCoordinate = i2689[0]
  i2688.m_YCoordinate = i2689[1]
  return i2688
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i2691 = data
  i2690.m_XPositionAdjustment = i2691[0]
  i2690.m_YPositionAdjustment = i2691[1]
  return i2690
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2692 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2693 = data
  i2692.xPlacement = i2693[0]
  i2692.yPlacement = i2693[1]
  i2692.xAdvance = i2693[2]
  i2692.yAdvance = i2693[3]
  return i2692
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i2695 = data
  i2694.m_XPlacement = i2695[0]
  i2694.m_YPlacement = i2695[1]
  i2694.m_XAdvance = i2695[2]
  i2694.m_YAdvance = i2695[3]
  return i2694
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[33],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[33],"82":[83],"84":[85],"86":[85],"11":[10],"87":[88],"89":[90],"91":[83,92],"93":[90],"94":[93],"95":[90],"96":[90],"97":[98],"99":[98],"100":[90],"101":[10],"102":[17,10],"103":[83],"104":[17,10],"105":[15,83],"90":[83],"106":[83,92],"107":[61],"108":[68],"109":[110],"111":[98],"112":[41],"113":[33],"114":[115],"116":[39],"117":[11],"118":[10],"119":[83,10],"18":[10,17],"120":[10],"121":[17,10],"122":[83],"123":[17,10],"124":[10],"125":[126],"127":[126],"128":[126],"129":[10],"130":[10],"14":[11],"21":[17,10],"131":[10],"13":[11],"132":[10],"133":[10],"134":[10],"135":[10],"136":[10],"137":[10],"138":[10],"139":[10],"140":[10],"141":[17,10],"142":[10],"143":[10],"144":[10],"20":[10],"145":[17,10],"146":[10],"147":[39],"148":[39],"40":[39],"149":[39],"150":[33],"151":[33]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ItemSpawnManager","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","Item","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","ItemHolder","UnityEngine.BoxCollider","PSD_Tool","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "2.7";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_PerfectTidy_V132";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1848";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5173";

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

Deserializers.buildID = "136b87dc-9442-4efd-a183-91fe7aefa52d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

