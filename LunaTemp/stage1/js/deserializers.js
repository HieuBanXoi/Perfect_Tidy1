var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointSpring' )
  var i711 = data
  i710.spring = i711[0]
  i710.damper = i711[1]
  i710.targetPosition = i711[2]
  return i710
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointMotor' )
  var i713 = data
  i712.m_TargetVelocity = i713[0]
  i712.m_Force = i713[1]
  i712.m_FreeSpin = i713[2]
  return i712
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointLimits' )
  var i715 = data
  i714.m_Min = i715[0]
  i714.m_Max = i715[1]
  i714.m_Bounciness = i715[2]
  i714.m_BounceMinVelocity = i715[3]
  i714.m_ContactDistance = i715[4]
  i714.minBounce = i715[5]
  i714.maxBounce = i715[6]
  return i714
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointDrive' )
  var i717 = data
  i716.m_PositionSpring = i717[0]
  i716.m_PositionDamper = i717[1]
  i716.m_MaximumForce = i717[2]
  i716.m_UseAcceleration = i717[3]
  return i716
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i719 = data
  i718.m_Spring = i719[0]
  i718.m_Damper = i719[1]
  return i718
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i721 = data
  i720.m_Limit = i721[0]
  i720.m_Bounciness = i721[1]
  i720.m_ContactDistance = i721[2]
  return i720
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i723 = data
  i722.m_ExtremumSlip = i723[0]
  i722.m_ExtremumValue = i723[1]
  i722.m_AsymptoteSlip = i723[2]
  i722.m_AsymptoteValue = i723[3]
  i722.m_Stiffness = i723[4]
  return i722
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i725 = data
  i724.m_LowerAngle = i725[0]
  i724.m_UpperAngle = i725[1]
  return i724
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i727 = data
  i726.m_MotorSpeed = i727[0]
  i726.m_MaximumMotorTorque = i727[1]
  return i726
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i729 = data
  i728.m_DampingRatio = i729[0]
  i728.m_Frequency = i729[1]
  i728.m_Angle = i729[2]
  return i728
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i731 = data
  i730.m_LowerTranslation = i731[0]
  i730.m_UpperTranslation = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i732 = root || new pc.UnityMaterial()
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'shader')
  i732.renderQueue = i733[3]
  i732.enableInstancing = !!i733[4]
  var i735 = i733[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i735[i + 0]) );
  }
  i732.floatParameters = i734
  var i737 = i733[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i737[i + 0]) );
  }
  i732.colorParameters = i736
  var i739 = i733[7]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i739[i + 0]) );
  }
  i732.vectorParameters = i738
  var i741 = i733[8]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i741[i + 0]) );
  }
  i732.textureParameters = i740
  var i743 = i733[9]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i743[i + 0]) );
  }
  i732.materialFlags = i742
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = new pc.Color(i751[1], i751[2], i751[3], i751[4])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = new pc.Vec4( i755[1], i755[2], i755[3], i755[4] )
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'value')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i763 = data
  i762.name = i763[0]
  i762.enabled = !!i763[1]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i765 = data
  i764.name = i765[0]
  i764.width = i765[1]
  i764.height = i765[2]
  i764.mipmapCount = i765[3]
  i764.anisoLevel = i765[4]
  i764.filterMode = i765[5]
  i764.hdr = !!i765[6]
  i764.format = i765[7]
  i764.wrapMode = i765[8]
  i764.alphaIsTransparency = !!i765[9]
  i764.alphaSource = i765[10]
  i764.graphicsFormat = i765[11]
  i764.sRGBTexture = !!i765[12]
  i764.desiredColorSpace = i765[13]
  i764.wrapU = i765[14]
  i764.wrapV = i765[15]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i767 = data
  i766.position = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.scale = new pc.Vec3( i767[3], i767[4], i767[5] )
  i766.rotation = new pc.Quat(i767[6], i767[7], i767[8], i767[9])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i769 = data
  i768.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i769[0], i768.main)
  i768.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i769[1], i768.colorBySpeed)
  i768.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i769[2], i768.colorOverLifetime)
  i768.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i769[3], i768.emission)
  i768.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i769[4], i768.rotationBySpeed)
  i768.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i769[5], i768.rotationOverLifetime)
  i768.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i769[6], i768.shape)
  i768.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i769[7], i768.sizeBySpeed)
  i768.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i769[8], i768.sizeOverLifetime)
  i768.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i769[9], i768.textureSheetAnimation)
  i768.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i769[10], i768.velocityOverLifetime)
  i768.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i769[11], i768.noise)
  i768.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i769[12], i768.inheritVelocity)
  i768.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i769[13], i768.forceOverLifetime)
  i768.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i769[14], i768.limitVelocityOverLifetime)
  i768.useAutoRandomSeed = !!i769[15]
  i768.randomSeed = i769[16]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemMain()
  var i771 = data
  i770.duration = i771[0]
  i770.loop = !!i771[1]
  i770.prewarm = !!i771[2]
  i770.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.startDelay)
  i770.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.startLifetime)
  i770.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[5], i770.startSpeed)
  i770.startSize3D = !!i771[6]
  i770.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[7], i770.startSizeX)
  i770.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[8], i770.startSizeY)
  i770.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.startSizeZ)
  i770.startRotation3D = !!i771[10]
  i770.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[11], i770.startRotationX)
  i770.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[12], i770.startRotationY)
  i770.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[13], i770.startRotationZ)
  i770.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[14], i770.startColor)
  i770.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[15], i770.gravityModifier)
  i770.simulationSpace = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'customSimulationSpace')
  i770.simulationSpeed = i771[19]
  i770.useUnscaledTime = !!i771[20]
  i770.scalingMode = i771[21]
  i770.playOnAwake = !!i771[22]
  i770.maxParticles = i771[23]
  i770.emitterVelocityMode = i771[24]
  i770.stopAction = i771[25]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i772 = root || new pc.MinMaxCurve()
  var i773 = data
  i772.mode = i773[0]
  i772.curveMin = new pc.AnimationCurve( { keys_flow: i773[1] } )
  i772.curveMax = new pc.AnimationCurve( { keys_flow: i773[2] } )
  i772.curveMultiplier = i773[3]
  i772.constantMin = i773[4]
  i772.constantMax = i773[5]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i774 = root || new pc.MinMaxGradient()
  var i775 = data
  i774.mode = i775[0]
  i774.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i775[1], i774.gradientMin)
  i774.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i775[2], i774.gradientMax)
  i774.colorMin = new pc.Color(i775[3], i775[4], i775[5], i775[6])
  i774.colorMax = new pc.Color(i775[7], i775[8], i775[9], i775[10])
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i777 = data
  i776.mode = i777[0]
  var i779 = i777[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i779[i + 0]) );
  }
  i776.colorKeys = i778
  var i781 = i777[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i781[i + 0]) );
  }
  i776.alphaKeys = i780
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorBySpeed()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  i782.range = new pc.Vec2( i783[2], i783[3] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i787 = data
  i786.color = new pc.Color(i787[0], i787[1], i787[2], i787[3])
  i786.time = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i791 = data
  i790.alpha = i791[0]
  i790.time = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemColorOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[1], i792.color)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemEmitter()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.rateOverTime)
  i794.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.rateOverDistance)
  var i797 = i795[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i797[i + 0]) );
  }
  i794.bursts = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemBurst()
  var i801 = data
  i800.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[0], i800.count)
  i800.cycleCount = i801[1]
  i800.minCount = i801[2]
  i800.maxCount = i801[3]
  i800.repeatInterval = i801[4]
  i800.time = i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemRotationBySpeed()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  i802.range = new pc.Vec2( i803[5], i803[6] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemRotationOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemShape()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.shapeType = i807[1]
  i806.randomDirectionAmount = i807[2]
  i806.sphericalDirectionAmount = i807[3]
  i806.randomPositionAmount = i807[4]
  i806.alignToDirection = !!i807[5]
  i806.radius = i807[6]
  i806.radiusMode = i807[7]
  i806.radiusSpread = i807[8]
  i806.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.radiusSpeed)
  i806.radiusThickness = i807[10]
  i806.angle = i807[11]
  i806.length = i807[12]
  i806.boxThickness = new pc.Vec3( i807[13], i807[14], i807[15] )
  i806.meshShapeType = i807[16]
  request.r(i807[17], i807[18], 0, i806, 'mesh')
  request.r(i807[19], i807[20], 0, i806, 'meshRenderer')
  request.r(i807[21], i807[22], 0, i806, 'skinnedMeshRenderer')
  i806.useMeshMaterialIndex = !!i807[23]
  i806.meshMaterialIndex = i807[24]
  i806.useMeshColors = !!i807[25]
  i806.normalOffset = i807[26]
  i806.arc = i807[27]
  i806.arcMode = i807[28]
  i806.arcSpread = i807[29]
  i806.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[30], i806.arcSpeed)
  i806.donutRadius = i807[31]
  i806.position = new pc.Vec3( i807[32], i807[33], i807[34] )
  i806.rotation = new pc.Vec3( i807[35], i807[36], i807[37] )
  i806.scale = new pc.Vec3( i807[38], i807[39], i807[40] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemSizeBySpeed()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  i808.range = new pc.Vec2( i809[5], i809[6] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemSizeOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.mode = i813[1]
  i812.animation = i813[2]
  i812.numTilesX = i813[3]
  i812.numTilesY = i813[4]
  i812.useRandomRow = !!i813[5]
  i812.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[6], i812.frameOverTime)
  i812.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[7], i812.startFrame)
  i812.cycleCount = i813[8]
  i812.rowIndex = i813[9]
  i812.flipU = i813[10]
  i812.flipV = i813[11]
  i812.spriteCount = i813[12]
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sprites = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.radial)
  i818.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[5], i818.speedModifier)
  i818.space = i819[6]
  i818.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[7], i818.orbitalX)
  i818.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.orbitalY)
  i818.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[9], i818.orbitalZ)
  i818.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[10], i818.orbitalOffsetX)
  i818.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.orbitalOffsetY)
  i818.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[12], i818.orbitalOffsetZ)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemNoise()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.separateAxes = !!i821[1]
  i820.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.strengthX)
  i820.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.strengthY)
  i820.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.strengthZ)
  i820.frequency = i821[5]
  i820.damping = !!i821[6]
  i820.octaveCount = i821[7]
  i820.octaveMultiplier = i821[8]
  i820.octaveScale = i821[9]
  i820.quality = i821[10]
  i820.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[11], i820.scrollSpeed)
  i820.scrollSpeedMultiplier = i821[12]
  i820.remapEnabled = !!i821[13]
  i820.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[14], i820.remapX)
  i820.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[15], i820.remapY)
  i820.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[16], i820.remapZ)
  i820.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[17], i820.positionAmount)
  i820.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[18], i820.rotationAmount)
  i820.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[19], i820.sizeAmount)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemInheritVelocity()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.mode = i823[1]
  i822.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.curve)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemForceOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.space = i825[4]
  i824.randomized = !!i825[5]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.limit)
  i826.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.limitX)
  i826.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.limitY)
  i826.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.limitZ)
  i826.dampen = i827[5]
  i826.separateAxes = !!i827[6]
  i826.space = i827[7]
  i826.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.drag)
  i826.multiplyDragByParticleSize = !!i827[9]
  i826.multiplyDragByParticleVelocity = !!i827[10]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'mesh')
  i828.meshCount = i829[2]
  i828.activeVertexStreamsCount = i829[3]
  i828.alignment = i829[4]
  i828.renderMode = i829[5]
  i828.sortMode = i829[6]
  i828.lengthScale = i829[7]
  i828.velocityScale = i829[8]
  i828.cameraVelocityScale = i829[9]
  i828.normalDirection = i829[10]
  i828.sortingFudge = i829[11]
  i828.minParticleSize = i829[12]
  i828.maxParticleSize = i829[13]
  i828.pivot = new pc.Vec3( i829[14], i829[15], i829[16] )
  request.r(i829[17], i829[18], 0, i828, 'trailMaterial')
  i828.applyActiveColorSpace = !!i829[19]
  i828.enabled = !!i829[20]
  request.r(i829[21], i829[22], 0, i828, 'sharedMaterial')
  var i831 = i829[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[24]
  i828.shadowCastingMode = i829[25]
  i828.sortingLayerID = i829[26]
  i828.sortingOrder = i829[27]
  i828.lightmapIndex = i829[28]
  i828.lightmapSceneIndex = i829[29]
  i828.lightmapScaleOffset = new pc.Vec4( i829[30], i829[31], i829[32], i829[33] )
  i828.lightProbeUsage = i829[34]
  i828.reflectionProbeUsage = i829[35]
  return i828
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i834 = root || request.c( 'MergeEffect' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'tf')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i837 = data
  i836.name = i837[0]
  i836.tagId = i837[1]
  i836.enabled = !!i837[2]
  i836.isStatic = !!i837[3]
  i836.layer = i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i839 = data
  i838.name = i839[0]
  i838.halfPrecision = !!i839[1]
  i838.useSimplification = !!i839[2]
  i838.useUInt32IndexFormat = !!i839[3]
  i838.vertexCount = i839[4]
  i838.aabb = i839[5]
  var i841 = i839[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( !!i841[i + 0] );
  }
  i838.streams = i840
  i838.vertices = i839[7]
  var i843 = i839[8]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i843[i + 0]) );
  }
  i838.subMeshes = i842
  var i845 = i839[9]
  var i844 = []
  for(var i = 0; i < i845.length; i += 16) {
    i844.push( new pc.Mat4().setData(i845[i + 0], i845[i + 1], i845[i + 2], i845[i + 3],  i845[i + 4], i845[i + 5], i845[i + 6], i845[i + 7],  i845[i + 8], i845[i + 9], i845[i + 10], i845[i + 11],  i845[i + 12], i845[i + 13], i845[i + 14], i845[i + 15]) );
  }
  i838.bindposes = i844
  var i847 = i839[10]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i847[i + 0]) );
  }
  i838.blendShapes = i846
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i853 = data
  i852.triangles = i853[0]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i861[i + 0]) );
  }
  i858.frames = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i863 = data
  i862.name = i863[0]
  i862.index = i863[1]
  i862.startup = !!i863[2]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i865 = data
  i864.pivot = new pc.Vec2( i865[0], i865[1] )
  i864.anchorMin = new pc.Vec2( i865[2], i865[3] )
  i864.anchorMax = new pc.Vec2( i865[4], i865[5] )
  i864.sizeDelta = new pc.Vec2( i865[6], i865[7] )
  i864.anchoredPosition3D = new pc.Vec3( i865[8], i865[9], i865[10] )
  i864.rotation = new pc.Quat(i865[11], i865[12], i865[13], i865[14])
  i864.scale = new pc.Vec3( i865[15], i865[16], i865[17] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i867 = data
  i866.planeDistance = i867[0]
  i866.referencePixelsPerUnit = i867[1]
  i866.isFallbackOverlay = !!i867[2]
  i866.renderMode = i867[3]
  i866.renderOrder = i867[4]
  i866.sortingLayerName = i867[5]
  i866.sortingOrder = i867[6]
  i866.scaleFactor = i867[7]
  request.r(i867[8], i867[9], 0, i866, 'worldCamera')
  i866.overrideSorting = !!i867[10]
  i866.pixelPerfect = !!i867[11]
  i866.targetDisplay = i867[12]
  i866.overridePixelPerfect = !!i867[13]
  i866.enabled = !!i867[14]
  return i866
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i869 = data
  i868.m_UiScaleMode = i869[0]
  i868.m_ReferencePixelsPerUnit = i869[1]
  i868.m_ScaleFactor = i869[2]
  i868.m_ReferenceResolution = new pc.Vec2( i869[3], i869[4] )
  i868.m_ScreenMatchMode = i869[5]
  i868.m_MatchWidthOrHeight = i869[6]
  i868.m_PhysicalUnit = i869[7]
  i868.m_FallbackScreenDPI = i869[8]
  i868.m_DefaultSpriteDPI = i869[9]
  i868.m_DynamicPixelsPerUnit = i869[10]
  i868.m_PresetInfoIsWorld = !!i869[11]
  return i868
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i871 = data
  i870.m_IgnoreReversedGraphics = !!i871[0]
  i870.m_BlockingObjects = i871[1]
  i870.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i871[2] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  request.r(i873[2], i873[3], 0, i872, 'avatar')
  i872.updateMode = i873[4]
  i872.hasTransformHierarchy = !!i873[5]
  i872.applyRootMotion = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i879 = data
  i878.cullTransparentMesh = !!i879[0]
  return i878
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i880 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i881 = data
  i880.m_hasFontAssetChanged = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'm_baseMaterial')
  i880.m_maskOffset = new pc.Vec4( i881[3], i881[4], i881[5], i881[6] )
  i880.m_text = i881[7]
  i880.m_isRightToLeft = !!i881[8]
  request.r(i881[9], i881[10], 0, i880, 'm_fontAsset')
  request.r(i881[11], i881[12], 0, i880, 'm_sharedMaterial')
  var i883 = i881[13]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.m_fontSharedMaterials = i882
  request.r(i881[14], i881[15], 0, i880, 'm_fontMaterial')
  var i885 = i881[16]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i880.m_fontMaterials = i884
  i880.m_fontColor32 = UnityEngine.Color32.ConstructColor(i881[17], i881[18], i881[19], i881[20])
  i880.m_fontColor = new pc.Color(i881[21], i881[22], i881[23], i881[24])
  i880.m_enableVertexGradient = !!i881[25]
  i880.m_colorMode = i881[26]
  i880.m_fontColorGradient = request.d('TMPro.VertexGradient', i881[27], i880.m_fontColorGradient)
  request.r(i881[28], i881[29], 0, i880, 'm_fontColorGradientPreset')
  request.r(i881[30], i881[31], 0, i880, 'm_spriteAsset')
  i880.m_tintAllSprites = !!i881[32]
  request.r(i881[33], i881[34], 0, i880, 'm_StyleSheet')
  i880.m_TextStyleHashCode = i881[35]
  i880.m_overrideHtmlColors = !!i881[36]
  i880.m_faceColor = UnityEngine.Color32.ConstructColor(i881[37], i881[38], i881[39], i881[40])
  i880.m_fontSize = i881[41]
  i880.m_fontSizeBase = i881[42]
  i880.m_fontWeight = i881[43]
  i880.m_enableAutoSizing = !!i881[44]
  i880.m_fontSizeMin = i881[45]
  i880.m_fontSizeMax = i881[46]
  i880.m_fontStyle = i881[47]
  i880.m_HorizontalAlignment = i881[48]
  i880.m_VerticalAlignment = i881[49]
  i880.m_textAlignment = i881[50]
  i880.m_characterSpacing = i881[51]
  i880.m_wordSpacing = i881[52]
  i880.m_lineSpacing = i881[53]
  i880.m_lineSpacingMax = i881[54]
  i880.m_paragraphSpacing = i881[55]
  i880.m_charWidthMaxAdj = i881[56]
  i880.m_TextWrappingMode = i881[57]
  i880.m_wordWrappingRatios = i881[58]
  i880.m_overflowMode = i881[59]
  request.r(i881[60], i881[61], 0, i880, 'm_linkedTextComponent')
  request.r(i881[62], i881[63], 0, i880, 'parentLinkedComponent')
  i880.m_enableKerning = !!i881[64]
  var i887 = i881[65]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(i887[i + 0]);
  }
  i880.m_ActiveFontFeatures = i886
  i880.m_enableExtraPadding = !!i881[66]
  i880.checkPaddingRequired = !!i881[67]
  i880.m_isRichText = !!i881[68]
  i880.m_parseCtrlCharacters = !!i881[69]
  i880.m_isOrthographic = !!i881[70]
  i880.m_isCullingEnabled = !!i881[71]
  i880.m_horizontalMapping = i881[72]
  i880.m_verticalMapping = i881[73]
  i880.m_uvLineOffset = i881[74]
  i880.m_geometrySortingOrder = i881[75]
  i880.m_IsTextObjectScaleStatic = !!i881[76]
  i880.m_VertexBufferAutoSizeReduction = !!i881[77]
  i880.m_useMaxVisibleDescender = !!i881[78]
  i880.m_pageToDisplay = i881[79]
  i880.m_margin = new pc.Vec4( i881[80], i881[81], i881[82], i881[83] )
  i880.m_isUsingLegacyAnimationComponent = !!i881[84]
  i880.m_isVolumetricText = !!i881[85]
  request.r(i881[86], i881[87], 0, i880, 'm_Material')
  i880.m_EmojiFallbackSupport = !!i881[88]
  i880.m_Maskable = !!i881[89]
  i880.m_Color = new pc.Color(i881[90], i881[91], i881[92], i881[93])
  i880.m_RaycastTarget = !!i881[94]
  i880.m_RaycastPadding = new pc.Vec4( i881[95], i881[96], i881[97], i881[98] )
  return i880
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.VertexGradient' )
  var i889 = data
  i888.topLeft = new pc.Color(i889[0], i889[1], i889[2], i889[3])
  i888.topRight = new pc.Color(i889[4], i889[5], i889[6], i889[7])
  i888.bottomLeft = new pc.Color(i889[8], i889[9], i889[10], i889[11])
  i888.bottomRight = new pc.Color(i889[12], i889[13], i889[14], i889[15])
  return i888
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Slider' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_FillRect')
  request.r(i893[2], i893[3], 0, i892, 'm_HandleRect')
  i892.m_Direction = i893[4]
  i892.m_MinValue = i893[5]
  i892.m_MaxValue = i893[6]
  i892.m_WholeNumbers = !!i893[7]
  i892.m_Value = i893[8]
  i892.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i893[9], i892.m_OnValueChanged)
  i892.m_Navigation = request.d('UnityEngine.UI.Navigation', i893[10], i892.m_Navigation)
  i892.m_Transition = i893[11]
  i892.m_Colors = request.d('UnityEngine.UI.ColorBlock', i893[12], i892.m_Colors)
  i892.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i893[13], i892.m_SpriteState)
  i892.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i893[14], i892.m_AnimationTriggers)
  i892.m_Interactable = !!i893[15]
  request.r(i893[16], i893[17], 0, i892, 'm_TargetGraphic')
  return i892
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i895 = data
  i894.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i895[0], i894.m_PersistentCalls)
  return i894
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.Events.PersistentCall', i899[i + 0]));
  }
  i896.m_Calls = i898
  return i896
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_Target')
  i902.m_TargetAssemblyTypeName = i903[2]
  i902.m_MethodName = i903[3]
  i902.m_Mode = i903[4]
  i902.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i903[5], i902.m_Arguments)
  i902.m_CallState = i903[6]
  return i902
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i905 = data
  i904.m_Mode = i905[0]
  i904.m_WrapAround = !!i905[1]
  request.r(i905[2], i905[3], 0, i904, 'm_SelectOnUp')
  request.r(i905[4], i905[5], 0, i904, 'm_SelectOnDown')
  request.r(i905[6], i905[7], 0, i904, 'm_SelectOnLeft')
  request.r(i905[8], i905[9], 0, i904, 'm_SelectOnRight')
  return i904
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i907 = data
  i906.m_NormalColor = new pc.Color(i907[0], i907[1], i907[2], i907[3])
  i906.m_HighlightedColor = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.m_PressedColor = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.m_SelectedColor = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  i906.m_DisabledColor = new pc.Color(i907[16], i907[17], i907[18], i907[19])
  i906.m_ColorMultiplier = i907[20]
  i906.m_FadeDuration = i907[21]
  return i906
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_HighlightedSprite')
  request.r(i909[2], i909[3], 0, i908, 'm_PressedSprite')
  request.r(i909[4], i909[5], 0, i908, 'm_SelectedSprite')
  request.r(i909[6], i909[7], 0, i908, 'm_DisabledSprite')
  return i908
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i911 = data
  i910.m_NormalTrigger = i911[0]
  i910.m_HighlightedTrigger = i911[1]
  i910.m_PressedTrigger = i911[2]
  i910.m_SelectedTrigger = i911[3]
  i910.m_DisabledTrigger = i911[4]
  return i910
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Image' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_Sprite')
  i912.m_Type = i913[2]
  i912.m_PreserveAspect = !!i913[3]
  i912.m_FillCenter = !!i913[4]
  i912.m_FillMethod = i913[5]
  i912.m_FillAmount = i913[6]
  i912.m_FillClockwise = !!i913[7]
  i912.m_FillOrigin = i913[8]
  i912.m_UseSpriteMesh = !!i913[9]
  i912.m_PixelsPerUnitMultiplier = i913[10]
  request.r(i913[11], i913[12], 0, i912, 'm_Material')
  i912.m_Maskable = !!i913[13]
  i912.m_Color = new pc.Color(i913[14], i913[15], i913[16], i913[17])
  i912.m_RaycastTarget = !!i913[18]
  i912.m_RaycastPadding = new pc.Vec4( i913[19], i913[20], i913[21], i913[22] )
  return i912
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Button' )
  var i915 = data
  i914.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i915[0], i914.m_OnClick)
  i914.m_Navigation = request.d('UnityEngine.UI.Navigation', i915[1], i914.m_Navigation)
  i914.m_Transition = i915[2]
  i914.m_Colors = request.d('UnityEngine.UI.ColorBlock', i915[3], i914.m_Colors)
  i914.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i915[4], i914.m_SpriteState)
  i914.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i915[5], i914.m_AnimationTriggers)
  i914.m_Interactable = !!i915[6]
  request.r(i915[7], i915[8], 0, i914, 'm_TargetGraphic')
  return i914
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i917 = data
  i916.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i917[0], i916.m_PersistentCalls)
  return i916
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_ObjectArgument')
  i918.m_ObjectArgumentAssemblyTypeName = i919[2]
  i918.m_IntArgument = i919[3]
  i918.m_FloatArgument = i919[4]
  i918.m_StringArgument = i919[5]
  i918.m_BoolArgument = !!i919[6]
  return i918
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i920 = root || request.c( 'Ply_Pool' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Ply_Pool+PoolAmount', i923[i + 0]) );
  }
  i920.poolAmounts = i922
  request.r(i921[1], i921[2], 0, i920, 'poolHolder')
  return i920
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i926 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i927 = data
  i926.type = i927[0]
  i926.amount = i927[1]
  request.r(i927[2], i927[3], 0, i926, 'gameUnit')
  return i926
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i928 = root || request.c( 'Ply_SoundManager' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.audioClips = i930
  request.r(i929[1], i929[2], 0, i928, 'sound')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'clip')
  request.r(i935[2], i935[3], 0, i934, 'outputAudioMixerGroup')
  i934.playOnAwake = !!i935[4]
  i934.loop = !!i935[5]
  i934.time = i935[6]
  i934.volume = i935[7]
  i934.pitch = i935[8]
  i934.enabled = !!i935[9]
  return i934
}

Deserializers["GameManager"] = function (request, data, root) {
  var i936 = root || request.c( 'GameManager' )
  var i937 = data
  i936.isPlaying = !!i937[0]
  i936.isTutorial = !!i937[1]
  i936.isGotoStore = !!i937[2]
  i936.countMove = i937[3]
  i936.maxMove = i937[4]
  i936.startLayer = i937[5]
  i936.currentLayer = i937[6]
  request.r(i937[7], i937[8], 0, i936, 'mainBox')
  request.r(i937[9], i937[10], 0, i936, 'handTutorial')
  i936.tutorialDelay = i937[11]
  return i936
}

Deserializers["UIManager"] = function (request, data, root) {
  var i938 = root || request.c( 'UIManager' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'winUI')
  request.r(i939[2], i939[3], 0, i938, 'loseUI')
  request.r(i939[4], i939[5], 0, i938, 'tutorial')
  request.r(i939[6], i939[7], 0, i938, 'verticalUI')
  request.r(i939[8], i939[9], 0, i938, 'horizontalUI')
  request.r(i939[10], i939[11], 0, i938, 'downloadBtnVertical')
  request.r(i939[12], i939[13], 0, i938, 'dowloadBtnHorizontal')
  request.r(i939[14], i939[15], 0, i938, 'progressSlider')
  request.r(i939[16], i939[17], 0, i938, 'progressText')
  i938.maxProgressItems = i939[18]
  i938.startProgressItems = i939[19]
  i938.screenWidth = i939[20]
  i938.screenHeight = i939[21]
  i938.scaleHeightOnWidth = i939[22]
  i938.isVertical = !!i939[23]
  request.r(i939[24], i939[25], 0, i938, 'cam')
  i938.introZoomOutMultiplier = i939[26]
  i938.cameraZoomDuration = i939[27]
  i938.useContinuousScaling = !!i939[28]
  i938.baseOrthographicSize = i939[29]
  i938.baseAspect = i939[30]
  i938.landscapeSize = i939[31]
  i938.defaultPortraitSize = i939[32]
  var i941 = i939[33]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i941.length; i += 1) {
    i940.add(request.d('ScreenScaleStep', i941[i + 0]));
  }
  i938.discreteScaleSteps = i940
  i938.usePerspectiveCamera = !!i939[34]
  request.r(i939[35], i939[36], 0, i938, 'perspectiveFocus')
  i938.perspectiveFocusDistance = i939[37]
  i938.perspectivePadding = i939[38]
  i938.fitRendererBounds = !!i939[39]
  request.r(i939[40], i939[41], 0, i938, 'boundsRoot')
  var i943 = i939[42]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i938.boundsRenderers = i942
  return i938
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i946 = root || request.c( 'ScreenScaleStep' )
  var i947 = data
  i946.heightOnWidthRatio = i947[0]
  i946.orthographicSize = i947[1]
  return i946
}

Deserializers["InputManager"] = function (request, data, root) {
  var i950 = root || request.c( 'InputManager' )
  var i951 = data
  i950.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i951[0] )
  i950.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i951[1] )
  i950.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i951[2] )
  i950.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i951[3] )
  i950.isDragging = !!i951[4]
  request.r(i951[5], i951[6], 0, i950, 'mainCamera')
  return i950
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i952 = root || request.c( 'ItemSetupTool' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'spritesParent')
  request.r(i953[2], i953[3], 0, i952, 'holdersParent')
  i952.shadowSuffix = i953[4]
  i952.holderPrefix = i953[5]
  i952.holdersParentName = i953[6]
  i952.colliderDepth = i953[7]
  i952.colliderSizeMultiplier = i953[8]
  i952.generatedShadowColor = new pc.Color(i953[9], i953[10], i953[11], i953[12])
  i952.fadedBlackShadowColor = new pc.Color(i953[13], i953[14], i953[15], i953[16])
  i952.generatedShadowLocalOffset = new pc.Vec3( i953[17], i953[18], i953[19] )
  i952.itemLayerName = i953[20]
  i952.holderLayerName = i953[21]
  return i952
}

Deserializers["CameraController"] = function (request, data, root) {
  var i954 = root || request.c( 'CameraController' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'targetCamera')
  i954.enableZoom = !!i955[2]
  i954.minZoomRatio = i955[3]
  i954.maxZoomRatio = i955[4]
  i954.mouseWheelZoomSpeed = i955[5]
  i954.pinchZoomSpeed = i955[6]
  i954.enableDrag = !!i955[7]
  i954.horizontalOnly = !!i955[8]
  i954.dragSensitivity = i955[9]
  i954.maxHorizontalOffset = i955[10]
  i954.maxVerticalOffset = i955[11]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i957 = data
  i956.aspect = i957[0]
  i956.orthographic = !!i957[1]
  i956.orthographicSize = i957[2]
  i956.backgroundColor = new pc.Color(i957[3], i957[4], i957[5], i957[6])
  i956.nearClipPlane = i957[7]
  i956.farClipPlane = i957[8]
  i956.fieldOfView = i957[9]
  i956.depth = i957[10]
  i956.clearFlags = i957[11]
  i956.cullingMask = i957[12]
  i956.rect = i957[13]
  request.r(i957[14], i957[15], 0, i956, 'targetTexture')
  i956.usePhysicalProperties = !!i957[16]
  i956.focalLength = i957[17]
  i956.sensorSize = new pc.Vec2( i957[18], i957[19] )
  i956.lensShift = new pc.Vec2( i957[20], i957[21] )
  i956.gateFit = i957[22]
  i956.commandBufferCount = i957[23]
  i956.cameraType = i957[24]
  i956.enabled = !!i957[25]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i959 = data
  i958.type = i959[0]
  i958.color = new pc.Color(i959[1], i959[2], i959[3], i959[4])
  i958.cullingMask = i959[5]
  i958.intensity = i959[6]
  i958.range = i959[7]
  i958.spotAngle = i959[8]
  i958.shadows = i959[9]
  i958.shadowNormalBias = i959[10]
  i958.shadowBias = i959[11]
  i958.shadowStrength = i959[12]
  i958.shadowResolution = i959[13]
  i958.lightmapBakeType = i959[14]
  i958.renderMode = i959[15]
  request.r(i959[16], i959[17], 0, i958, 'cookie')
  i958.cookieSize = i959[18]
  i958.shadowNearPlane = i959[19]
  i958.occlusionMaskChannel = i959[20]
  i958.enabled = !!i959[21]
  return i958
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'm_FirstSelected')
  i960.m_sendNavigationEvents = !!i961[2]
  i960.m_DragThreshold = i961[3]
  return i960
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i963 = data
  i962.m_HorizontalAxis = i963[0]
  i962.m_VerticalAxis = i963[1]
  i962.m_SubmitButton = i963[2]
  i962.m_CancelButton = i963[3]
  i962.m_InputActionsPerSecond = i963[4]
  i962.m_RepeatDelay = i963[5]
  i962.m_ForceModuleActive = !!i963[6]
  i962.m_SendPointerHoverToParent = !!i963[7]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i965 = data
  i964.color = new pc.Color(i965[0], i965[1], i965[2], i965[3])
  request.r(i965[4], i965[5], 0, i964, 'sprite')
  i964.flipX = !!i965[6]
  i964.flipY = !!i965[7]
  i964.drawMode = i965[8]
  i964.size = new pc.Vec2( i965[9], i965[10] )
  i964.tileMode = i965[11]
  i964.adaptiveModeThreshold = i965[12]
  i964.maskInteraction = i965[13]
  i964.spriteSortPoint = i965[14]
  i964.enabled = !!i965[15]
  request.r(i965[16], i965[17], 0, i964, 'sharedMaterial')
  var i967 = i965[18]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.sharedMaterials = i966
  i964.receiveShadows = !!i965[19]
  i964.shadowCastingMode = i965[20]
  i964.sortingLayerID = i965[21]
  i964.sortingOrder = i965[22]
  i964.lightmapIndex = i965[23]
  i964.lightmapSceneIndex = i965[24]
  i964.lightmapScaleOffset = new pc.Vec4( i965[25], i965[26], i965[27], i965[28] )
  i964.lightProbeUsage = i965[29]
  i964.reflectionProbeUsage = i965[30]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i969 = data
  i968.center = new pc.Vec3( i969[0], i969[1], i969[2] )
  i968.radius = i969[3]
  i968.enabled = !!i969[4]
  i968.isTrigger = !!i969[5]
  request.r(i969[6], i969[7], 0, i968, 'material')
  return i968
}

Deserializers["Box"] = function (request, data, root) {
  var i970 = root || request.c( 'Box' )
  var i971 = data
  i970.useBox = !!i971[0]
  i970.spawnMode = i971[1]
  var i973 = i971[2]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.dynamicItems = i972
  var i975 = i971[3]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 1, i974, '')
  }
  i970.spawnTargets = i974
  i970.initialSpawnCount = i971[4]
  i970.revealDuration = i971[5]
  i970.showInitialBatchShadowsOnSpawn = !!i971[6]
  request.r(i971[7], i971[8], 0, i970, 'graphicController')
  return i970
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i980 = root || request.c( 'BoxGraphicController' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'skeletonAnimation')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'sharedMesh')
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'additionalVertexStreams')
  i984.enabled = !!i985[2]
  request.r(i985[3], i985[4], 0, i984, 'sharedMaterial')
  var i987 = i985[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sharedMaterials = i986
  i984.receiveShadows = !!i985[6]
  i984.shadowCastingMode = i985[7]
  i984.sortingLayerID = i985[8]
  i984.sortingOrder = i985[9]
  i984.lightmapIndex = i985[10]
  i984.lightmapSceneIndex = i985[11]
  i984.lightmapScaleOffset = new pc.Vec4( i985[12], i985[13], i985[14], i985[15] )
  i984.lightProbeUsage = i985[16]
  i984.reflectionProbeUsage = i985[17]
  return i984
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i988 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i989 = data
  i988.loop = !!i989[0]
  i988.timeScale = i989[1]
  request.r(i989[2], i989[3], 0, i988, 'skeletonDataAsset')
  i988.initialSkinName = i989[4]
  i988.fixPrefabOverrideViaMeshFilter = i989[5]
  i988.initialFlipX = !!i989[6]
  i988.initialFlipY = !!i989[7]
  i988.updateWhenInvisible = i989[8]
  i988.zSpacing = i989[9]
  i988.useClipping = !!i989[10]
  i988.immutableTriangles = !!i989[11]
  i988.pmaVertexColors = !!i989[12]
  i988.clearStateOnDisable = !!i989[13]
  i988.tintBlack = !!i989[14]
  i988.singleSubmesh = !!i989[15]
  i988.fixDrawOrder = !!i989[16]
  i988.addNormals = !!i989[17]
  i988.calculateTangents = !!i989[18]
  i988.maskInteraction = i989[19]
  i988.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i989[20], i988.maskMaterials)
  i988.disableRenderingOnOverride = !!i989[21]
  i988._animationName = i989[22]
  var i991 = i989[23]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i988.separatorSlotNames = i990
  return i988
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i992 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i993 = data
  var i995 = i993[0]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.materialsMaskDisabled = i994
  var i997 = i993[1]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i992.materialsInsideMask = i996
  var i999 = i993[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i992.materialsOutsideMask = i998
  return i992
}

Deserializers["DelayStartAnim"] = function (request, data, root) {
  var i1002 = root || request.c( 'DelayStartAnim' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'anim')
  i1002.minDelay = i1003[2]
  i1002.maxDelay = i1003[3]
  return i1002
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemHolder' )
  var i1005 = data
  i1004.id = i1005[0]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1007 = data
  i1006.center = new pc.Vec3( i1007[0], i1007[1], i1007[2] )
  i1006.size = new pc.Vec3( i1007[3], i1007[4], i1007[5] )
  i1006.enabled = !!i1007[6]
  i1006.isTrigger = !!i1007[7]
  request.r(i1007[8], i1007[9], 0, i1006, 'material')
  return i1006
}

Deserializers["Item"] = function (request, data, root) {
  var i1008 = root || request.c( 'Item' )
  var i1009 = data
  i1008.fxType = i1009[0]
  i1008.fxTypeOnPlace = i1009[1]
  i1008.id = i1009[2]
  i1008.currentState = i1009[3]
  i1008.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1009[4] )
  request.r(i1009[5], i1009[6], 0, i1008, 'auraEffect')
  i1008.scaleOnSpawn = !!i1009[7]
  i1008.spawnScaleMultiplier = i1009[8]
  request.r(i1009[9], i1009[10], 0, i1008, 'correctHolderTransform')
  request.r(i1009[11], i1009[12], 0, i1008, 'shadowOnHolder')
  i1008.canShowShadowHint = !!i1009[13]
  i1008.waitingPosition = new pc.Vec3( i1009[14], i1009[15], i1009[16] )
  request.r(i1009[17], i1009[18], 0, i1008, 'spriteRenderer')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1011 = data
  i1010.ambientIntensity = i1011[0]
  i1010.reflectionIntensity = i1011[1]
  i1010.ambientMode = i1011[2]
  i1010.ambientLight = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.ambientSkyColor = new pc.Color(i1011[7], i1011[8], i1011[9], i1011[10])
  i1010.ambientGroundColor = new pc.Color(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.ambientEquatorColor = new pc.Color(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fogColor = new pc.Color(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.fogEndDistance = i1011[23]
  i1010.fogStartDistance = i1011[24]
  i1010.fogDensity = i1011[25]
  i1010.fog = !!i1011[26]
  request.r(i1011[27], i1011[28], 0, i1010, 'skybox')
  i1010.fogMode = i1011[29]
  var i1013 = i1011[30]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1013[i + 0]) );
  }
  i1010.lightmaps = i1012
  i1010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1011[31], i1010.lightProbes)
  i1010.lightmapsMode = i1011[32]
  i1010.mixedBakeMode = i1011[33]
  i1010.environmentLightingMode = i1011[34]
  i1010.ambientProbe = new pc.SphericalHarmonicsL2(i1011[35])
  i1010.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1011[36])
  i1010.useReferenceAmbientProbe = !!i1011[37]
  request.r(i1011[38], i1011[39], 0, i1010, 'customReflection')
  request.r(i1011[40], i1011[41], 0, i1010, 'defaultReflection')
  i1010.defaultReflectionMode = i1011[42]
  i1010.defaultReflectionResolution = i1011[43]
  i1010.sunLightObjectId = i1011[44]
  i1010.pixelLightCount = i1011[45]
  i1010.defaultReflectionHDR = !!i1011[46]
  i1010.hasLightDataAsset = !!i1011[47]
  i1010.hasManualGenerate = !!i1011[48]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'lightmapColor')
  request.r(i1017[2], i1017[3], 0, i1016, 'lightmapDirection')
  request.r(i1017[4], i1017[5], 0, i1016, 'shadowMask')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1018 = root || new UnityEngine.LightProbes()
  var i1019 = data
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1029[i + 0]));
  }
  i1026.ShaderCompilationErrors = i1028
  i1026.name = i1027[1]
  i1026.guid = i1027[2]
  var i1031 = i1027[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.shaderDefinedKeywords = i1030
  var i1033 = i1027[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1033[i + 0]) );
  }
  i1026.passes = i1032
  var i1035 = i1027[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1035[i + 0]) );
  }
  i1026.usePasses = i1034
  var i1037 = i1027[6]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1037[i + 0]) );
  }
  i1026.defaultParameterValues = i1036
  request.r(i1027[7], i1027[8], 0, i1026, 'unityFallbackShader')
  i1026.readDepth = !!i1027[9]
  i1026.hasDepthOnlyPass = !!i1027[10]
  i1026.isCreatedByShaderGraph = !!i1027[11]
  i1026.disableBatching = !!i1027[12]
  i1026.compiled = !!i1027[13]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1041 = data
  i1040.shaderName = i1041[0]
  i1040.errorMessage = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1044 = root || new pc.UnityShaderPass()
  var i1045 = data
  i1044.id = i1045[0]
  i1044.subShaderIndex = i1045[1]
  i1044.name = i1045[2]
  i1044.passType = i1045[3]
  i1044.grabPassTextureName = i1045[4]
  i1044.usePass = !!i1045[5]
  i1044.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[6], i1044.zTest)
  i1044.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[7], i1044.zWrite)
  i1044.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[8], i1044.culling)
  i1044.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1045[9], i1044.blending)
  i1044.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1045[10], i1044.alphaBlending)
  i1044.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[11], i1044.colorWriteMask)
  i1044.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[12], i1044.offsetUnits)
  i1044.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[13], i1044.offsetFactor)
  i1044.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[14], i1044.stencilRef)
  i1044.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[15], i1044.stencilReadMask)
  i1044.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[16], i1044.stencilWriteMask)
  i1044.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[17], i1044.stencilOp)
  i1044.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[18], i1044.stencilOpFront)
  i1044.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1045[19], i1044.stencilOpBack)
  var i1047 = i1045[20]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1047[i + 0]) );
  }
  i1044.tags = i1046
  var i1049 = i1045[21]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1044.passDefinedKeywords = i1048
  var i1051 = i1045[22]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1051[i + 0]) );
  }
  i1044.passDefinedKeywordGroups = i1050
  var i1053 = i1045[23]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1053[i + 0]) );
  }
  i1044.variants = i1052
  var i1055 = i1045[24]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1055[i + 0]) );
  }
  i1044.excludedVariants = i1054
  i1044.hasDepthReader = !!i1045[25]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1057 = data
  i1056.val = i1057[0]
  i1056.name = i1057[1]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1059 = data
  i1058.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[0], i1058.src)
  i1058.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[1], i1058.dst)
  i1058.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[2], i1058.op)
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1061 = data
  i1060.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[0], i1060.pass)
  i1060.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[1], i1060.fail)
  i1060.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[2], i1060.zFail)
  i1060.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[3], i1060.comp)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.value = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1068.keywords = i1070
  i1068.hasDiscard = !!i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1075 = data
  i1074.passId = i1075[0]
  i1074.subShaderIndex = i1075[1]
  var i1077 = i1075[2]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1074.keywords = i1076
  i1074.vertexProgram = i1075[3]
  i1074.fragmentProgram = i1075[4]
  i1074.exportedForWebGl2 = !!i1075[5]
  i1074.readDepth = !!i1075[6]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'shader')
  i1080.pass = i1081[2]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.type = i1085[1]
  i1084.value = new pc.Vec4( i1085[2], i1085[3], i1085[4], i1085[5] )
  i1084.textureValue = i1085[6]
  i1084.shaderPropertyFlag = i1085[7]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1087 = data
  i1086.name = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'texture')
  i1086.aabb = i1087[3]
  i1086.vertices = i1087[4]
  i1086.triangles = i1087[5]
  i1086.textureRect = UnityEngine.Rect.MinMaxRect(i1087[6], i1087[7], i1087[8], i1087[9])
  i1086.packedRect = UnityEngine.Rect.MinMaxRect(i1087[10], i1087[11], i1087[12], i1087[13])
  i1086.border = new pc.Vec4( i1087[14], i1087[15], i1087[16], i1087[17] )
  i1086.transparency = i1087[18]
  i1086.bounds = i1087[19]
  i1086.pixelsPerUnit = i1087[20]
  i1086.textureWidth = i1087[21]
  i1086.textureHeight = i1087[22]
  i1086.nativeSize = new pc.Vec2( i1087[23], i1087[24] )
  i1086.pivot = new pc.Vec2( i1087[25], i1087[26] )
  i1086.textureRectOffset = new pc.Vec2( i1087[27], i1087[28] )
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1089 = data
  i1088.name = i1089[0]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.wrapMode = i1091[1]
  i1090.isLooping = !!i1091[2]
  i1090.length = i1091[3]
  var i1093 = i1091[4]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1093[i + 0]) );
  }
  i1090.curves = i1092
  var i1095 = i1091[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1095[i + 0]) );
  }
  i1090.events = i1094
  i1090.halfPrecision = !!i1091[6]
  i1090._frameRate = i1091[7]
  i1090.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1091[8], i1090.localBounds)
  i1090.hasMuscleCurves = !!i1091[9]
  var i1097 = i1091[10]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1090.clipMuscleConstant = i1096
  i1090.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1091[11], i1090.clipBindingConstant)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1101 = data
  i1100.path = i1101[0]
  i1100.hash = i1101[1]
  i1100.componentType = i1101[2]
  i1100.property = i1101[3]
  i1100.keys = i1101[4]
  var i1103 = i1101[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1103[i + 0]) );
  }
  i1100.objectReferenceKeys = i1102
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1107 = data
  i1106.time = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'value')
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1111 = data
  i1110.functionName = i1111[0]
  i1110.floatParameter = i1111[1]
  i1110.intParameter = i1111[2]
  i1110.stringParameter = i1111[3]
  request.r(i1111[4], i1111[5], 0, i1110, 'objectReferenceParameter')
  i1110.time = i1111[6]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1113 = data
  i1112.center = new pc.Vec3( i1113[0], i1113[1], i1113[2] )
  i1112.extends = new pc.Vec3( i1113[3], i1113[4], i1113[5] )
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1117 = data
  var i1119 = i1117[0]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.genericBindings = i1118
  var i1121 = i1117[1]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1116.pptrCurveMapping = i1120
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1123 = data
  i1122.name = i1123[0]
  var i1125 = i1123[1]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1125[i + 0]) );
  }
  i1122.layers = i1124
  var i1127 = i1123[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1127[i + 0]) );
  }
  i1122.parameters = i1126
  i1122.animationClips = i1123[3]
  i1122.avatarUnsupported = i1123[4]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.defaultWeight = i1131[1]
  i1130.blendingMode = i1131[2]
  i1130.avatarMask = i1131[3]
  i1130.syncedLayerIndex = i1131[4]
  i1130.syncedLayerAffectsTiming = !!i1131[5]
  i1130.syncedLayers = i1131[6]
  i1130.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1131[7], i1130.stateMachine)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1133 = data
  i1132.id = i1133[0]
  i1132.name = i1133[1]
  i1132.path = i1133[2]
  var i1135 = i1133[3]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1135[i + 0]) );
  }
  i1132.states = i1134
  var i1137 = i1133[4]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1137[i + 0]) );
  }
  i1132.machines = i1136
  var i1139 = i1133[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1139[i + 0]) );
  }
  i1132.entryStateTransitions = i1138
  var i1141 = i1133[6]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1141[i + 0]) );
  }
  i1132.exitStateTransitions = i1140
  var i1143 = i1133[7]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1143[i + 0]) );
  }
  i1132.anyStateTransitions = i1142
  i1132.defaultStateId = i1133[8]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1147 = data
  i1146.id = i1147[0]
  i1146.name = i1147[1]
  i1146.cycleOffset = i1147[2]
  i1146.cycleOffsetParameter = i1147[3]
  i1146.cycleOffsetParameterActive = !!i1147[4]
  i1146.mirror = !!i1147[5]
  i1146.mirrorParameter = i1147[6]
  i1146.mirrorParameterActive = !!i1147[7]
  i1146.motionId = i1147[8]
  i1146.nameHash = i1147[9]
  i1146.fullPathHash = i1147[10]
  i1146.speed = i1147[11]
  i1146.speedParameter = i1147[12]
  i1146.speedParameterActive = !!i1147[13]
  i1146.tag = i1147[14]
  i1146.tagHash = i1147[15]
  i1146.writeDefaultValues = !!i1147[16]
  var i1149 = i1147[17]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 2, i1148, '')
  }
  i1146.behaviours = i1148
  var i1151 = i1147[18]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1151[i + 0]) );
  }
  i1146.transitions = i1150
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1157 = data
  i1156.fullPath = i1157[0]
  i1156.canTransitionToSelf = !!i1157[1]
  i1156.duration = i1157[2]
  i1156.exitTime = i1157[3]
  i1156.hasExitTime = !!i1157[4]
  i1156.hasFixedDuration = !!i1157[5]
  i1156.interruptionSource = i1157[6]
  i1156.offset = i1157[7]
  i1156.orderedInterruption = !!i1157[8]
  i1156.destinationStateId = i1157[9]
  i1156.isExit = !!i1157[10]
  i1156.mute = !!i1157[11]
  i1156.solo = !!i1157[12]
  var i1159 = i1157[13]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1159[i + 0]) );
  }
  i1156.conditions = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1165 = data
  i1164.destinationStateId = i1165[0]
  i1164.isExit = !!i1165[1]
  i1164.mute = !!i1165[2]
  i1164.solo = !!i1165[3]
  var i1167 = i1165[4]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1167[i + 0]) );
  }
  i1164.conditions = i1166
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1171 = data
  i1170.defaultBool = !!i1171[0]
  i1170.defaultFloat = i1171[1]
  i1170.defaultInt = i1171[2]
  i1170.name = i1171[3]
  i1170.nameHash = i1171[4]
  i1170.type = i1171[5]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.bytes64 = i1173[1]
  i1172.data = i1173[2]
  return i1172
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1175 = data
  i1174.normalStyle = i1175[0]
  i1174.normalSpacingOffset = i1175[1]
  i1174.boldStyle = i1175[2]
  i1174.boldSpacing = i1175[3]
  i1174.italicStyle = i1175[4]
  i1174.tabSize = i1175[5]
  request.r(i1175[6], i1175[7], 0, i1174, 'atlas')
  i1174.m_SourceFontFileGUID = i1175[8]
  i1174.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1175[9], i1174.m_CreationSettings)
  request.r(i1175[10], i1175[11], 0, i1174, 'm_SourceFontFile')
  i1174.m_SourceFontFilePath = i1175[12]
  i1174.m_AtlasPopulationMode = i1175[13]
  i1174.InternalDynamicOS = !!i1175[14]
  var i1177 = i1175[15]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('UnityEngine.TextCore.Glyph', i1177[i + 0]));
  }
  i1174.m_GlyphTable = i1176
  var i1179 = i1175[16]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('TMPro.TMP_Character', i1179[i + 0]));
  }
  i1174.m_CharacterTable = i1178
  var i1181 = i1175[17]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 2) {
  request.r(i1181[i + 0], i1181[i + 1], 2, i1180, '')
  }
  i1174.m_AtlasTextures = i1180
  i1174.m_AtlasTextureIndex = i1175[18]
  i1174.m_IsMultiAtlasTexturesEnabled = !!i1175[19]
  i1174.m_GetFontFeatures = !!i1175[20]
  i1174.m_ClearDynamicDataOnBuild = !!i1175[21]
  i1174.m_AtlasWidth = i1175[22]
  i1174.m_AtlasHeight = i1175[23]
  i1174.m_AtlasPadding = i1175[24]
  i1174.m_AtlasRenderMode = i1175[25]
  var i1183 = i1175[26]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.GlyphRect', i1183[i + 0]));
  }
  i1174.m_UsedGlyphRects = i1182
  var i1185 = i1175[27]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('UnityEngine.TextCore.GlyphRect', i1185[i + 0]));
  }
  i1174.m_FreeGlyphRects = i1184
  i1174.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1175[28], i1174.m_FontFeatureTable)
  i1174.m_ShouldReimportFontFeatures = !!i1175[29]
  var i1187 = i1175[30]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1174.m_FallbackFontAssetTable = i1186
  var i1189 = i1175[31]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('TMPro.TMP_FontWeightPair', i1189[i + 0]) );
  }
  i1174.m_FontWeightTable = i1188
  var i1191 = i1175[32]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('TMPro.TMP_FontWeightPair', i1191[i + 0]) );
  }
  i1174.fontWeights = i1190
  i1174.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1175[33], i1174.m_fontInfo)
  var i1193 = i1175[34]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('TMPro.TMP_Glyph', i1193[i + 0]));
  }
  i1174.m_glyphInfoList = i1192
  i1174.m_KerningTable = request.d('TMPro.KerningTable', i1175[35], i1174.m_KerningTable)
  var i1195 = i1175[36]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1195.length; i += 2) {
  request.r(i1195[i + 0], i1195[i + 1], 1, i1194, '')
  }
  i1174.fallbackFontAssets = i1194
  i1174.m_Version = i1175[37]
  i1174.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1175[38], i1174.m_FaceInfo)
  request.r(i1175[39], i1175[40], 0, i1174, 'm_Material')
  return i1174
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1196 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1197 = data
  i1196.sourceFontFileName = i1197[0]
  i1196.sourceFontFileGUID = i1197[1]
  i1196.faceIndex = i1197[2]
  i1196.pointSizeSamplingMode = i1197[3]
  i1196.pointSize = i1197[4]
  i1196.padding = i1197[5]
  i1196.paddingMode = i1197[6]
  i1196.packingMode = i1197[7]
  i1196.atlasWidth = i1197[8]
  i1196.atlasHeight = i1197[9]
  i1196.characterSetSelectionMode = i1197[10]
  i1196.characterSequence = i1197[11]
  i1196.referencedFontAssetGUID = i1197[12]
  i1196.referencedTextAssetGUID = i1197[13]
  i1196.fontStyle = i1197[14]
  i1196.fontStyleModifier = i1197[15]
  i1196.renderMode = i1197[16]
  i1196.includeFontFeatures = !!i1197[17]
  return i1196
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1201 = data
  i1200.m_Index = i1201[0]
  i1200.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1201[1], i1200.m_Metrics)
  i1200.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1201[2], i1200.m_GlyphRect)
  i1200.m_Scale = i1201[3]
  i1200.m_AtlasIndex = i1201[4]
  i1200.m_ClassDefinitionType = i1201[5]
  return i1200
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1203 = data
  i1202.m_Width = i1203[0]
  i1202.m_Height = i1203[1]
  i1202.m_HorizontalBearingX = i1203[2]
  i1202.m_HorizontalBearingY = i1203[3]
  i1202.m_HorizontalAdvance = i1203[4]
  return i1202
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1205 = data
  i1204.m_X = i1205[0]
  i1204.m_Y = i1205[1]
  i1204.m_Width = i1205[2]
  i1204.m_Height = i1205[3]
  return i1204
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1208 = root || request.c( 'TMPro.TMP_Character' )
  var i1209 = data
  i1208.m_ElementType = i1209[0]
  i1208.m_Unicode = i1209[1]
  i1208.m_GlyphIndex = i1209[2]
  i1208.m_Scale = i1209[3]
  return i1208
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.MultipleSubstitutionRecord', i1217[i + 0]));
  }
  i1214.m_MultipleSubstitutionRecords = i1216
  var i1219 = i1215[1]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.LigatureSubstitutionRecord', i1219[i + 0]));
  }
  i1214.m_LigatureSubstitutionRecords = i1218
  var i1221 = i1215[2]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1221[i + 0]));
  }
  i1214.m_GlyphPairAdjustmentRecords = i1220
  var i1223 = i1215[3]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1223[i + 0]));
  }
  i1214.m_MarkToBaseAdjustmentRecords = i1222
  var i1225 = i1215[4]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1225[i + 0]));
  }
  i1214.m_MarkToMarkAdjustmentRecords = i1224
  return i1214
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1229 = data
  i1228.m_TargetGlyphID = i1229[0]
  i1228.m_SubstituteGlyphIDs = i1229[1]
  return i1228
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1233 = data
  i1232.m_ComponentGlyphIDs = i1233[0]
  i1232.m_LigatureGlyphID = i1233[1]
  return i1232
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1237 = data
  i1236.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1237[0], i1236.m_FirstAdjustmentRecord)
  i1236.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1237[1], i1236.m_SecondAdjustmentRecord)
  i1236.m_FeatureLookupFlags = i1237[2]
  return i1236
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1241 = data
  i1240.m_BaseGlyphID = i1241[0]
  i1240.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1241[1], i1240.m_BaseGlyphAnchorPoint)
  i1240.m_MarkGlyphID = i1241[2]
  i1240.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1241[3], i1240.m_MarkPositionAdjustment)
  return i1240
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1245 = data
  i1244.m_BaseMarkGlyphID = i1245[0]
  i1244.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1245[1], i1244.m_BaseMarkGlyphAnchorPoint)
  i1244.m_CombiningMarkGlyphID = i1245[2]
  i1244.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1245[3], i1244.m_CombiningMarkPositionAdjustment)
  return i1244
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'regularTypeface')
  request.r(i1251[2], i1251[3], 0, i1250, 'italicTypeface')
  return i1250
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1253 = data
  i1252.Name = i1253[0]
  i1252.PointSize = i1253[1]
  i1252.Scale = i1253[2]
  i1252.CharacterCount = i1253[3]
  i1252.LineHeight = i1253[4]
  i1252.Baseline = i1253[5]
  i1252.Ascender = i1253[6]
  i1252.CapHeight = i1253[7]
  i1252.Descender = i1253[8]
  i1252.CenterLine = i1253[9]
  i1252.SuperscriptOffset = i1253[10]
  i1252.SubscriptOffset = i1253[11]
  i1252.SubSize = i1253[12]
  i1252.Underline = i1253[13]
  i1252.UnderlineThickness = i1253[14]
  i1252.strikethrough = i1253[15]
  i1252.strikethroughThickness = i1253[16]
  i1252.TabWidth = i1253[17]
  i1252.Padding = i1253[18]
  i1252.AtlasWidth = i1253[19]
  i1252.AtlasHeight = i1253[20]
  return i1252
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1257 = data
  i1256.id = i1257[0]
  i1256.x = i1257[1]
  i1256.y = i1257[2]
  i1256.width = i1257[3]
  i1256.height = i1257[4]
  i1256.xOffset = i1257[5]
  i1256.yOffset = i1257[6]
  i1256.xAdvance = i1257[7]
  i1256.scale = i1257[8]
  return i1256
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.KerningTable' )
  var i1259 = data
  var i1261 = i1259[0]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('TMPro.KerningPair', i1261[i + 0]));
  }
  i1258.kerningPairs = i1260
  return i1258
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.KerningPair' )
  var i1265 = data
  i1264.xOffset = i1265[0]
  i1264.m_FirstGlyph = i1265[1]
  i1264.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1265[2], i1264.m_FirstGlyphAdjustments)
  i1264.m_SecondGlyph = i1265[3]
  i1264.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1265[4], i1264.m_SecondGlyphAdjustments)
  i1264.m_IgnoreSpacingAdjustments = !!i1265[5]
  return i1264
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1267 = data
  i1266.m_FaceIndex = i1267[0]
  i1266.m_FamilyName = i1267[1]
  i1266.m_StyleName = i1267[2]
  i1266.m_PointSize = i1267[3]
  i1266.m_Scale = i1267[4]
  i1266.m_UnitsPerEM = i1267[5]
  i1266.m_LineHeight = i1267[6]
  i1266.m_AscentLine = i1267[7]
  i1266.m_CapLine = i1267[8]
  i1266.m_MeanLine = i1267[9]
  i1266.m_Baseline = i1267[10]
  i1266.m_DescentLine = i1267[11]
  i1266.m_SuperscriptOffset = i1267[12]
  i1266.m_SuperscriptSize = i1267[13]
  i1266.m_SubscriptOffset = i1267[14]
  i1266.m_SubscriptSize = i1267[15]
  i1266.m_UnderlineOffset = i1267[16]
  i1266.m_UnderlineThickness = i1267[17]
  i1266.m_StrikethroughOffset = i1267[18]
  i1266.m_StrikethroughThickness = i1267[19]
  i1266.m_TabWidth = i1267[20]
  return i1266
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1268 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 2, i1270, '')
  }
  i1268.atlasAssets = i1270
  i1268.scale = i1269[1]
  request.r(i1269[2], i1269[3], 0, i1268, 'skeletonJSON')
  i1268.isUpgradingBlendModeMaterials = !!i1269[4]
  i1268.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1269[5], i1268.blendModeMaterials)
  var i1273 = i1269[6]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1273.length; i += 2) {
  request.r(i1273[i + 0], i1273[i + 1], 1, i1272, '')
  }
  i1268.skeletonDataModifiers = i1272
  var i1275 = i1269[7]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1268.fromAnimation = i1274
  var i1277 = i1269[8]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( i1277[i + 0] );
  }
  i1268.toAnimation = i1276
  i1268.duration = i1269[9]
  i1268.defaultMix = i1269[10]
  request.r(i1269[11], i1269[12], 0, i1268, 'controller')
  return i1268
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1280 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1281 = data
  i1280.applyAdditiveMaterial = !!i1281[0]
  var i1283 = i1281[1]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1283[i + 0]));
  }
  i1280.additiveMaterials = i1282
  var i1285 = i1281[2]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1285[i + 0]));
  }
  i1280.multiplyMaterials = i1284
  var i1287 = i1281[3]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1287[i + 0]));
  }
  i1280.screenMaterials = i1286
  i1280.requiresBlendModeMaterials = !!i1281[4]
  return i1280
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1290 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1291 = data
  i1290.pageName = i1291[0]
  request.r(i1291[1], i1291[2], 0, i1290, 'material')
  return i1290
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1294 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'atlasFile')
  var i1297 = i1295[2]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 2) {
  request.r(i1297[i + 0], i1297[i + 1], 2, i1296, '')
  }
  i1294.materials = i1296
  return i1294
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1299 = data
  i1298.useSafeMode = !!i1299[0]
  i1298.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1299[1], i1298.safeModeOptions)
  i1298.timeScale = i1299[2]
  i1298.unscaledTimeScale = i1299[3]
  i1298.useSmoothDeltaTime = !!i1299[4]
  i1298.maxSmoothUnscaledTime = i1299[5]
  i1298.rewindCallbackMode = i1299[6]
  i1298.showUnityEditorReport = !!i1299[7]
  i1298.logBehaviour = i1299[8]
  i1298.drawGizmos = !!i1299[9]
  i1298.defaultRecyclable = !!i1299[10]
  i1298.defaultAutoPlay = i1299[11]
  i1298.defaultUpdateType = i1299[12]
  i1298.defaultTimeScaleIndependent = !!i1299[13]
  i1298.defaultEaseType = i1299[14]
  i1298.defaultEaseOvershootOrAmplitude = i1299[15]
  i1298.defaultEasePeriod = i1299[16]
  i1298.defaultAutoKill = !!i1299[17]
  i1298.defaultLoopType = i1299[18]
  i1298.debugMode = !!i1299[19]
  i1298.debugStoreTargetId = !!i1299[20]
  i1298.showPreviewPanel = !!i1299[21]
  i1298.storeSettingsLocation = i1299[22]
  i1298.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1299[23], i1298.modules)
  i1298.createASMDEF = !!i1299[24]
  i1298.showPlayingTweens = !!i1299[25]
  i1298.showPausedTweens = !!i1299[26]
  return i1298
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1300 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1301 = data
  i1300.logBehaviour = i1301[0]
  i1300.nestedTweenFailureBehaviour = i1301[1]
  return i1300
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1302 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1303 = data
  i1302.showPanel = !!i1303[0]
  i1302.audioEnabled = !!i1303[1]
  i1302.physicsEnabled = !!i1303[2]
  i1302.physics2DEnabled = !!i1303[3]
  i1302.spriteEnabled = !!i1303[4]
  i1302.uiEnabled = !!i1303[5]
  i1302.uiToolkitEnabled = !!i1303[6]
  i1302.textMeshProEnabled = !!i1303[7]
  i1302.tk2DEnabled = !!i1303[8]
  i1302.deAudioEnabled = !!i1303[9]
  i1302.deUnityExtendedEnabled = !!i1303[10]
  i1302.epoOutlineEnabled = !!i1303[11]
  return i1302
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_Settings' )
  var i1305 = data
  i1304.assetVersion = i1305[0]
  i1304.m_TextWrappingMode = i1305[1]
  i1304.m_enableKerning = !!i1305[2]
  var i1307 = i1305[3]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(i1307[i + 0]);
  }
  i1304.m_ActiveFontFeatures = i1306
  i1304.m_enableExtraPadding = !!i1305[4]
  i1304.m_enableTintAllSprites = !!i1305[5]
  i1304.m_enableParseEscapeCharacters = !!i1305[6]
  i1304.m_EnableRaycastTarget = !!i1305[7]
  i1304.m_GetFontFeaturesAtRuntime = !!i1305[8]
  i1304.m_missingGlyphCharacter = i1305[9]
  i1304.m_ClearDynamicDataOnBuild = !!i1305[10]
  i1304.m_warningsDisabled = !!i1305[11]
  request.r(i1305[12], i1305[13], 0, i1304, 'm_defaultFontAsset')
  i1304.m_defaultFontAssetPath = i1305[14]
  i1304.m_defaultFontSize = i1305[15]
  i1304.m_defaultAutoSizeMinRatio = i1305[16]
  i1304.m_defaultAutoSizeMaxRatio = i1305[17]
  i1304.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1305[18], i1305[19] )
  i1304.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1305[20], i1305[21] )
  i1304.m_autoSizeTextContainer = !!i1305[22]
  i1304.m_IsTextObjectScaleStatic = !!i1305[23]
  var i1309 = i1305[24]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1304.m_fallbackFontAssets = i1308
  i1304.m_matchMaterialPreset = !!i1305[25]
  i1304.m_HideSubTextObjects = !!i1305[26]
  request.r(i1305[27], i1305[28], 0, i1304, 'm_defaultSpriteAsset')
  i1304.m_defaultSpriteAssetPath = i1305[29]
  i1304.m_enableEmojiSupport = !!i1305[30]
  i1304.m_MissingCharacterSpriteUnicode = i1305[31]
  var i1311 = i1305[32]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1304.m_EmojiFallbackTextAssets = i1310
  i1304.m_defaultColorGradientPresetsPath = i1305[33]
  request.r(i1305[34], i1305[35], 0, i1304, 'm_defaultStyleSheet')
  i1304.m_StyleSheetsResourcePath = i1305[36]
  request.r(i1305[37], i1305[38], 0, i1304, 'm_leadingCharacters')
  request.r(i1305[39], i1305[40], 0, i1304, 'm_followingCharacters')
  i1304.m_UseModernHangulLineBreakingRules = !!i1305[41]
  return i1304
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1315 = data
  request.r(i1315[0], i1315[1], 0, i1314, 'spriteSheet')
  var i1317 = i1315[2]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Sprite', i1317[i + 0]));
  }
  i1314.spriteInfoList = i1316
  var i1319 = i1315[3]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1314.fallbackSpriteAssets = i1318
  var i1321 = i1315[4]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('TMPro.TMP_SpriteCharacter', i1321[i + 0]));
  }
  i1314.m_SpriteCharacterTable = i1320
  var i1323 = i1315[5]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_SpriteGlyph', i1323[i + 0]));
  }
  i1314.m_GlyphTable = i1322
  i1314.m_Version = i1315[6]
  i1314.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1315[7], i1314.m_FaceInfo)
  request.r(i1315[8], i1315[9], 0, i1314, 'm_Material')
  return i1314
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1327 = data
  i1326.name = i1327[0]
  i1326.hashCode = i1327[1]
  i1326.unicode = i1327[2]
  i1326.pivot = new pc.Vec2( i1327[3], i1327[4] )
  request.r(i1327[5], i1327[6], 0, i1326, 'sprite')
  i1326.id = i1327[7]
  i1326.x = i1327[8]
  i1326.y = i1327[9]
  i1326.width = i1327[10]
  i1326.height = i1327[11]
  i1326.xOffset = i1327[12]
  i1326.yOffset = i1327[13]
  i1326.xAdvance = i1327[14]
  i1326.scale = i1327[15]
  return i1326
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1333 = data
  i1332.m_Name = i1333[0]
  i1332.m_ElementType = i1333[1]
  i1332.m_Unicode = i1333[2]
  i1332.m_GlyphIndex = i1333[3]
  i1332.m_Scale = i1333[4]
  return i1332
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'sprite')
  i1336.m_Index = i1337[2]
  i1336.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1337[3], i1336.m_Metrics)
  i1336.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1337[4], i1336.m_GlyphRect)
  i1336.m_Scale = i1337[5]
  i1336.m_AtlasIndex = i1337[6]
  i1336.m_ClassDefinitionType = i1337[7]
  return i1336
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_Style', i1341[i + 0]));
  }
  i1338.m_StyleList = i1340
  return i1338
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Style' )
  var i1345 = data
  i1344.m_Name = i1345[0]
  i1344.m_HashCode = i1345[1]
  i1344.m_OpeningDefinition = i1345[2]
  i1344.m_ClosingDefinition = i1345[3]
  i1344.m_OpeningTagArray = i1345[4]
  i1344.m_ClosingTagArray = i1345[5]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1349[i + 0]) );
  }
  i1346.files = i1348
  i1346.componentToPrefabIds = i1347[1]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1353 = data
  i1352.path = i1353[0]
  request.r(i1353[1], i1353[2], 0, i1352, 'unityObject')
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1357[i + 0]) );
  }
  i1354.scriptsExecutionOrder = i1356
  var i1359 = i1355[1]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1359[i + 0]) );
  }
  i1354.sortingLayers = i1358
  var i1361 = i1355[2]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1361[i + 0]) );
  }
  i1354.cullingLayers = i1360
  i1354.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1355[3], i1354.timeSettings)
  i1354.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1355[4], i1354.physicsSettings)
  i1354.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1355[5], i1354.physics2DSettings)
  i1354.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1355[6], i1354.qualitySettings)
  i1354.enableRealtimeShadows = !!i1355[7]
  i1354.enableAutoInstancing = !!i1355[8]
  i1354.enableStaticBatching = !!i1355[9]
  i1354.enableDynamicBatching = !!i1355[10]
  i1354.lightmapEncodingQuality = i1355[11]
  i1354.desiredColorSpace = i1355[12]
  var i1363 = i1355[13]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( i1363[i + 0] );
  }
  i1354.allTags = i1362
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.value = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1371 = data
  i1370.id = i1371[0]
  i1370.name = i1371[1]
  i1370.value = i1371[2]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.name = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1377 = data
  i1376.fixedDeltaTime = i1377[0]
  i1376.maximumDeltaTime = i1377[1]
  i1376.timeScale = i1377[2]
  i1376.maximumParticleTimestep = i1377[3]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1379 = data
  i1378.gravity = new pc.Vec3( i1379[0], i1379[1], i1379[2] )
  i1378.defaultSolverIterations = i1379[3]
  i1378.bounceThreshold = i1379[4]
  i1378.autoSyncTransforms = !!i1379[5]
  i1378.autoSimulation = !!i1379[6]
  var i1381 = i1379[7]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'material')
  i1386.gravity = new pc.Vec2( i1387[2], i1387[3] )
  i1386.positionIterations = i1387[4]
  i1386.velocityIterations = i1387[5]
  i1386.velocityThreshold = i1387[6]
  i1386.maxLinearCorrection = i1387[7]
  i1386.maxAngularCorrection = i1387[8]
  i1386.maxTranslationSpeed = i1387[9]
  i1386.maxRotationSpeed = i1387[10]
  i1386.baumgarteScale = i1387[11]
  i1386.baumgarteTOIScale = i1387[12]
  i1386.timeToSleep = i1387[13]
  i1386.linearSleepTolerance = i1387[14]
  i1386.angularSleepTolerance = i1387[15]
  i1386.defaultContactOffset = i1387[16]
  i1386.autoSimulation = !!i1387[17]
  i1386.queriesHitTriggers = !!i1387[18]
  i1386.queriesStartInColliders = !!i1387[19]
  i1386.callbacksOnDisable = !!i1387[20]
  i1386.reuseCollisionCallbacks = !!i1387[21]
  i1386.autoSyncTransforms = !!i1387[22]
  var i1389 = i1387[23]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1389[i + 0]) );
  }
  i1386.collisionMatrix = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.layerId = i1393[1]
  i1392.otherLayerId = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1397[i + 0]) );
  }
  i1394.qualityLevels = i1396
  var i1399 = i1395[1]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1394.names = i1398
  i1394.shadows = i1395[2]
  i1394.anisotropicFiltering = i1395[3]
  i1394.antiAliasing = i1395[4]
  i1394.lodBias = i1395[5]
  i1394.shadowCascades = i1395[6]
  i1394.shadowDistance = i1395[7]
  i1394.shadowmaskMode = i1395[8]
  i1394.shadowProjection = i1395[9]
  i1394.shadowResolution = i1395[10]
  i1394.softParticles = !!i1395[11]
  i1394.softVegetation = !!i1395[12]
  i1394.activeColorSpace = i1395[13]
  i1394.desiredColorSpace = i1395[14]
  i1394.masterTextureLimit = i1395[15]
  i1394.maxQueuedFrames = i1395[16]
  i1394.particleRaycastBudget = i1395[17]
  i1394.pixelLightCount = i1395[18]
  i1394.realtimeReflectionProbes = !!i1395[19]
  i1394.shadowCascade2Split = i1395[20]
  i1394.shadowCascade4Split = new pc.Vec3( i1395[21], i1395[22], i1395[23] )
  i1394.streamingMipmapsActive = !!i1395[24]
  i1394.vSyncCount = i1395[25]
  i1394.asyncUploadBufferSize = i1395[26]
  i1394.asyncUploadTimeSlice = i1395[27]
  i1394.billboardsFaceCameraPosition = !!i1395[28]
  i1394.shadowNearPlaneOffset = i1395[29]
  i1394.streamingMipmapsMemoryBudget = i1395[30]
  i1394.maximumLODLevel = i1395[31]
  i1394.streamingMipmapsAddAllCameras = !!i1395[32]
  i1394.streamingMipmapsMaxLevelReduction = i1395[33]
  i1394.streamingMipmapsRenderersPerFrame = i1395[34]
  i1394.resolutionScalingFixedDPIFactor = i1395[35]
  i1394.streamingMipmapsMaxFileIORequests = i1395[36]
  i1394.currentQualityLevel = i1395[37]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1405 = data
  i1404.weight = i1405[0]
  i1404.vertices = i1405[1]
  i1404.normals = i1405[2]
  i1404.tangents = i1405[3]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1409 = data
  i1408.mode = i1409[0]
  i1408.parameter = i1409[1]
  i1408.threshold = i1409[2]
  return i1408
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1411 = data
  i1410.m_GlyphIndex = i1411[0]
  i1410.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1411[1], i1410.m_GlyphValueRecord)
  return i1410
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1413 = data
  i1412.m_XCoordinate = i1413[0]
  i1412.m_YCoordinate = i1413[1]
  return i1412
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1415 = data
  i1414.m_XPositionAdjustment = i1415[0]
  i1414.m_YPositionAdjustment = i1415[1]
  return i1414
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1416 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1417 = data
  i1416.xPlacement = i1417[0]
  i1416.yPlacement = i1417[1]
  i1416.xAdvance = i1417[2]
  i1416.yAdvance = i1417[3]
  return i1416
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1419 = data
  i1418.m_XPlacement = i1419[0]
  i1418.m_YPlacement = i1419[1]
  i1418.m_XAdvance = i1419[2]
  i1418.m_YAdvance = i1419[3]
  return i1418
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[32],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[32],"89":[46],"90":[91],"92":[91],"10":[9],"93":[94],"95":[96],"97":[46,45],"98":[96],"99":[98],"100":[96],"101":[96],"102":[103],"104":[103],"105":[96],"106":[9],"107":[16,9],"44":[46],"108":[16,9],"109":[14,46],"96":[46],"110":[46,45],"111":[68],"112":[75],"113":[114],"115":[103],"116":[40],"117":[32],"118":[119],"120":[38],"121":[10],"122":[9],"123":[46,9],"17":[9,16],"124":[9],"125":[16,9],"126":[46],"127":[16,9],"128":[9],"129":[130],"131":[130],"132":[130],"133":[9],"134":[9],"13":[10],"20":[16,9],"135":[9],"12":[10],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[9],"145":[16,9],"146":[9],"147":[9],"148":[9],"19":[9],"149":[16,9],"150":[9],"151":[38],"152":[38],"39":[38],"153":[38],"154":[32],"155":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","DelayStartAnim","ItemHolder","UnityEngine.BoxCollider","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv689_GG";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1858";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5004";

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

Deserializers.buildID = "8fe35cf3-dc45-42da-8196-e2e4b28bc1ee";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

