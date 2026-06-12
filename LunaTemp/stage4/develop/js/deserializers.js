var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSpring' )
  var i709 = data
  i708.spring = i709[0]
  i708.damper = i709[1]
  i708.targetPosition = i709[2]
  return i708
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointMotor' )
  var i711 = data
  i710.m_TargetVelocity = i711[0]
  i710.m_Force = i711[1]
  i710.m_FreeSpin = i711[2]
  return i710
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointLimits' )
  var i713 = data
  i712.m_Min = i713[0]
  i712.m_Max = i713[1]
  i712.m_Bounciness = i713[2]
  i712.m_BounceMinVelocity = i713[3]
  i712.m_ContactDistance = i713[4]
  i712.minBounce = i713[5]
  i712.maxBounce = i713[6]
  return i712
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointDrive' )
  var i715 = data
  i714.m_PositionSpring = i715[0]
  i714.m_PositionDamper = i715[1]
  i714.m_MaximumForce = i715[2]
  i714.m_UseAcceleration = i715[3]
  return i714
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i717 = data
  i716.m_Spring = i717[0]
  i716.m_Damper = i717[1]
  return i716
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i719 = data
  i718.m_Limit = i719[0]
  i718.m_Bounciness = i719[1]
  i718.m_ContactDistance = i719[2]
  return i718
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i721 = data
  i720.m_ExtremumSlip = i721[0]
  i720.m_ExtremumValue = i721[1]
  i720.m_AsymptoteSlip = i721[2]
  i720.m_AsymptoteValue = i721[3]
  i720.m_Stiffness = i721[4]
  return i720
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i723 = data
  i722.m_LowerAngle = i723[0]
  i722.m_UpperAngle = i723[1]
  return i722
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i725 = data
  i724.m_MotorSpeed = i725[0]
  i724.m_MaximumMotorTorque = i725[1]
  return i724
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i727 = data
  i726.m_DampingRatio = i727[0]
  i726.m_Frequency = i727[1]
  i726.m_Angle = i727[2]
  return i726
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i729 = data
  i728.m_LowerTranslation = i729[0]
  i728.m_UpperTranslation = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i730 = root || new pc.UnityMaterial()
  var i731 = data
  i730.name = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'shader')
  i730.renderQueue = i731[3]
  i730.enableInstancing = !!i731[4]
  var i733 = i731[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i733[i + 0]) );
  }
  i730.floatParameters = i732
  var i735 = i731[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i735[i + 0]) );
  }
  i730.colorParameters = i734
  var i737 = i731[7]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i737[i + 0]) );
  }
  i730.vectorParameters = i736
  var i739 = i731[8]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i739[i + 0]) );
  }
  i730.textureParameters = i738
  var i741 = i731[9]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i741[i + 0]) );
  }
  i730.materialFlags = i740
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i749 = data
  i748.name = i749[0]
  i748.value = new pc.Color(i749[1], i749[2], i749[3], i749[4])
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = new pc.Vec4( i753[1], i753[2], i753[3], i753[4] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'value')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i761 = data
  i760.name = i761[0]
  i760.enabled = !!i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i763 = data
  i762.name = i763[0]
  i762.width = i763[1]
  i762.height = i763[2]
  i762.mipmapCount = i763[3]
  i762.anisoLevel = i763[4]
  i762.filterMode = i763[5]
  i762.hdr = !!i763[6]
  i762.format = i763[7]
  i762.wrapMode = i763[8]
  i762.alphaIsTransparency = !!i763[9]
  i762.alphaSource = i763[10]
  i762.graphicsFormat = i763[11]
  i762.sRGBTexture = !!i763[12]
  i762.desiredColorSpace = i763[13]
  i762.wrapU = i763[14]
  i762.wrapV = i763[15]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i765 = data
  i764.position = new pc.Vec3( i765[0], i765[1], i765[2] )
  i764.scale = new pc.Vec3( i765[3], i765[4], i765[5] )
  i764.rotation = new pc.Quat(i765[6], i765[7], i765[8], i765[9])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i767 = data
  i766.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i767[0], i766.main)
  i766.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i767[1], i766.colorBySpeed)
  i766.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i767[2], i766.colorOverLifetime)
  i766.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i767[3], i766.emission)
  i766.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i767[4], i766.rotationBySpeed)
  i766.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i767[5], i766.rotationOverLifetime)
  i766.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i767[6], i766.shape)
  i766.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i767[7], i766.sizeBySpeed)
  i766.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i767[8], i766.sizeOverLifetime)
  i766.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i767[9], i766.textureSheetAnimation)
  i766.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i767[10], i766.velocityOverLifetime)
  i766.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i767[11], i766.noise)
  i766.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i767[12], i766.inheritVelocity)
  i766.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i767[13], i766.forceOverLifetime)
  i766.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i767[14], i766.limitVelocityOverLifetime)
  i766.useAutoRandomSeed = !!i767[15]
  i766.randomSeed = i767[16]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemMain()
  var i769 = data
  i768.duration = i769[0]
  i768.loop = !!i769[1]
  i768.prewarm = !!i769[2]
  i768.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.startDelay)
  i768.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.startLifetime)
  i768.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[5], i768.startSpeed)
  i768.startSize3D = !!i769[6]
  i768.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[7], i768.startSizeX)
  i768.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.startSizeY)
  i768.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[9], i768.startSizeZ)
  i768.startRotation3D = !!i769[10]
  i768.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[11], i768.startRotationX)
  i768.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[12], i768.startRotationY)
  i768.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[13], i768.startRotationZ)
  i768.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[14], i768.startColor)
  i768.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[15], i768.gravityModifier)
  i768.simulationSpace = i769[16]
  request.r(i769[17], i769[18], 0, i768, 'customSimulationSpace')
  i768.simulationSpeed = i769[19]
  i768.useUnscaledTime = !!i769[20]
  i768.scalingMode = i769[21]
  i768.playOnAwake = !!i769[22]
  i768.maxParticles = i769[23]
  i768.emitterVelocityMode = i769[24]
  i768.stopAction = i769[25]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxCurve()
  var i771 = data
  i770.mode = i771[0]
  i770.curveMin = new pc.AnimationCurve( { keys_flow: i771[1] } )
  i770.curveMax = new pc.AnimationCurve( { keys_flow: i771[2] } )
  i770.curveMultiplier = i771[3]
  i770.constantMin = i771[4]
  i770.constantMax = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i772 = root || new pc.MinMaxGradient()
  var i773 = data
  i772.mode = i773[0]
  i772.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[1], i772.gradientMin)
  i772.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[2], i772.gradientMax)
  i772.colorMin = new pc.Color(i773[3], i773[4], i773[5], i773[6])
  i772.colorMax = new pc.Color(i773[7], i773[8], i773[9], i773[10])
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i775 = data
  i774.mode = i775[0]
  var i777 = i775[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i777[i + 0]) );
  }
  i774.colorKeys = i776
  var i779 = i775[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i779[i + 0]) );
  }
  i774.alphaKeys = i778
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorBySpeed()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  i780.range = new pc.Vec2( i781[2], i781[3] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.time = i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i789 = data
  i788.alpha = i789[0]
  i788.time = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemColorOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[1], i790.color)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemEmitter()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.rateOverTime)
  i792.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.rateOverDistance)
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i795[i + 0]) );
  }
  i792.bursts = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemBurst()
  var i799 = data
  i798.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[0], i798.count)
  i798.cycleCount = i799[1]
  i798.minCount = i799[2]
  i798.maxCount = i799[3]
  i798.repeatInterval = i799[4]
  i798.time = i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemRotationOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemShape()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.shapeType = i805[1]
  i804.randomDirectionAmount = i805[2]
  i804.sphericalDirectionAmount = i805[3]
  i804.randomPositionAmount = i805[4]
  i804.alignToDirection = !!i805[5]
  i804.radius = i805[6]
  i804.radiusMode = i805[7]
  i804.radiusSpread = i805[8]
  i804.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.radiusSpeed)
  i804.radiusThickness = i805[10]
  i804.angle = i805[11]
  i804.length = i805[12]
  i804.boxThickness = new pc.Vec3( i805[13], i805[14], i805[15] )
  i804.meshShapeType = i805[16]
  request.r(i805[17], i805[18], 0, i804, 'mesh')
  request.r(i805[19], i805[20], 0, i804, 'meshRenderer')
  request.r(i805[21], i805[22], 0, i804, 'skinnedMeshRenderer')
  i804.useMeshMaterialIndex = !!i805[23]
  i804.meshMaterialIndex = i805[24]
  i804.useMeshColors = !!i805[25]
  i804.normalOffset = i805[26]
  i804.arc = i805[27]
  i804.arcMode = i805[28]
  i804.arcSpread = i805[29]
  i804.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[30], i804.arcSpeed)
  i804.donutRadius = i805[31]
  i804.position = new pc.Vec3( i805[32], i805[33], i805[34] )
  i804.rotation = new pc.Vec3( i805[35], i805[36], i805[37] )
  i804.scale = new pc.Vec3( i805[38], i805[39], i805[40] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  i806.range = new pc.Vec2( i807[5], i807[6] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemSizeOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.animation = i811[2]
  i810.numTilesX = i811[3]
  i810.numTilesY = i811[4]
  i810.useRandomRow = !!i811[5]
  i810.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[6], i810.frameOverTime)
  i810.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.startFrame)
  i810.cycleCount = i811[8]
  i810.rowIndex = i811[9]
  i810.flipU = i811[10]
  i810.flipV = i811[11]
  i810.spriteCount = i811[12]
  var i813 = i811[13]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sprites = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.radial)
  i816.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[5], i816.speedModifier)
  i816.space = i817[6]
  i816.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[7], i816.orbitalX)
  i816.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.orbitalY)
  i816.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[9], i816.orbitalZ)
  i816.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[10], i816.orbitalOffsetX)
  i816.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.orbitalOffsetY)
  i816.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[12], i816.orbitalOffsetZ)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemNoise()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.separateAxes = !!i819[1]
  i818.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.strengthX)
  i818.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.strengthY)
  i818.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.strengthZ)
  i818.frequency = i819[5]
  i818.damping = !!i819[6]
  i818.octaveCount = i819[7]
  i818.octaveMultiplier = i819[8]
  i818.octaveScale = i819[9]
  i818.quality = i819[10]
  i818.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.scrollSpeed)
  i818.scrollSpeedMultiplier = i819[12]
  i818.remapEnabled = !!i819[13]
  i818.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[14], i818.remapX)
  i818.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[15], i818.remapY)
  i818.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[16], i818.remapZ)
  i818.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[17], i818.positionAmount)
  i818.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[18], i818.rotationAmount)
  i818.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[19], i818.sizeAmount)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemInheritVelocity()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.curve)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemForceOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.space = i823[4]
  i822.randomized = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.limit)
  i824.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.limitX)
  i824.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.limitY)
  i824.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[4], i824.limitZ)
  i824.dampen = i825[5]
  i824.separateAxes = !!i825[6]
  i824.space = i825[7]
  i824.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[8], i824.drag)
  i824.multiplyDragByParticleSize = !!i825[9]
  i824.multiplyDragByParticleVelocity = !!i825[10]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'mesh')
  i826.meshCount = i827[2]
  i826.activeVertexStreamsCount = i827[3]
  i826.alignment = i827[4]
  i826.renderMode = i827[5]
  i826.sortMode = i827[6]
  i826.lengthScale = i827[7]
  i826.velocityScale = i827[8]
  i826.cameraVelocityScale = i827[9]
  i826.normalDirection = i827[10]
  i826.sortingFudge = i827[11]
  i826.minParticleSize = i827[12]
  i826.maxParticleSize = i827[13]
  i826.pivot = new pc.Vec3( i827[14], i827[15], i827[16] )
  request.r(i827[17], i827[18], 0, i826, 'trailMaterial')
  i826.applyActiveColorSpace = !!i827[19]
  i826.enabled = !!i827[20]
  request.r(i827[21], i827[22], 0, i826, 'sharedMaterial')
  var i829 = i827[23]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[24]
  i826.shadowCastingMode = i827[25]
  i826.sortingLayerID = i827[26]
  i826.sortingOrder = i827[27]
  i826.lightmapIndex = i827[28]
  i826.lightmapSceneIndex = i827[29]
  i826.lightmapScaleOffset = new pc.Vec4( i827[30], i827[31], i827[32], i827[33] )
  i826.lightProbeUsage = i827[34]
  i826.reflectionProbeUsage = i827[35]
  return i826
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i832 = root || request.c( 'MergeEffect' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'tf')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i835 = data
  i834.name = i835[0]
  i834.tagId = i835[1]
  i834.enabled = !!i835[2]
  i834.isStatic = !!i835[3]
  i834.layer = i835[4]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i837 = data
  i836.name = i837[0]
  i836.halfPrecision = !!i837[1]
  i836.useSimplification = !!i837[2]
  i836.useUInt32IndexFormat = !!i837[3]
  i836.vertexCount = i837[4]
  i836.aabb = i837[5]
  var i839 = i837[6]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( !!i839[i + 0] );
  }
  i836.streams = i838
  i836.vertices = i837[7]
  var i841 = i837[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i841[i + 0]) );
  }
  i836.subMeshes = i840
  var i843 = i837[9]
  var i842 = []
  for(var i = 0; i < i843.length; i += 16) {
    i842.push( new pc.Mat4().setData(i843[i + 0], i843[i + 1], i843[i + 2], i843[i + 3],  i843[i + 4], i843[i + 5], i843[i + 6], i843[i + 7],  i843[i + 8], i843[i + 9], i843[i + 10], i843[i + 11],  i843[i + 12], i843[i + 13], i843[i + 14], i843[i + 15]) );
  }
  i836.bindposes = i842
  var i845 = i837[10]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i845[i + 0]) );
  }
  i836.blendShapes = i844
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i851 = data
  i850.triangles = i851[0]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i857 = data
  i856.name = i857[0]
  var i859 = i857[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i859[i + 0]) );
  }
  i856.frames = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i861 = data
  i860.name = i861[0]
  i860.index = i861[1]
  i860.startup = !!i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i863 = data
  i862.pivot = new pc.Vec2( i863[0], i863[1] )
  i862.anchorMin = new pc.Vec2( i863[2], i863[3] )
  i862.anchorMax = new pc.Vec2( i863[4], i863[5] )
  i862.sizeDelta = new pc.Vec2( i863[6], i863[7] )
  i862.anchoredPosition3D = new pc.Vec3( i863[8], i863[9], i863[10] )
  i862.rotation = new pc.Quat(i863[11], i863[12], i863[13], i863[14])
  i862.scale = new pc.Vec3( i863[15], i863[16], i863[17] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i865 = data
  i864.planeDistance = i865[0]
  i864.referencePixelsPerUnit = i865[1]
  i864.isFallbackOverlay = !!i865[2]
  i864.renderMode = i865[3]
  i864.renderOrder = i865[4]
  i864.sortingLayerName = i865[5]
  i864.sortingOrder = i865[6]
  i864.scaleFactor = i865[7]
  request.r(i865[8], i865[9], 0, i864, 'worldCamera')
  i864.overrideSorting = !!i865[10]
  i864.pixelPerfect = !!i865[11]
  i864.targetDisplay = i865[12]
  i864.overridePixelPerfect = !!i865[13]
  i864.enabled = !!i865[14]
  return i864
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i867 = data
  i866.m_UiScaleMode = i867[0]
  i866.m_ReferencePixelsPerUnit = i867[1]
  i866.m_ScaleFactor = i867[2]
  i866.m_ReferenceResolution = new pc.Vec2( i867[3], i867[4] )
  i866.m_ScreenMatchMode = i867[5]
  i866.m_MatchWidthOrHeight = i867[6]
  i866.m_PhysicalUnit = i867[7]
  i866.m_FallbackScreenDPI = i867[8]
  i866.m_DefaultSpriteDPI = i867[9]
  i866.m_DynamicPixelsPerUnit = i867[10]
  i866.m_PresetInfoIsWorld = !!i867[11]
  return i866
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i868 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i869 = data
  i868.m_IgnoreReversedGraphics = !!i869[0]
  i868.m_BlockingObjects = i869[1]
  i868.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i869[2] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'animatorController')
  request.r(i871[2], i871[3], 0, i870, 'avatar')
  i870.updateMode = i871[4]
  i870.hasTransformHierarchy = !!i871[5]
  i870.applyRootMotion = !!i871[6]
  var i873 = i871[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.humanBones = i872
  i870.enabled = !!i871[8]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i877 = data
  i876.cullTransparentMesh = !!i877[0]
  return i876
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i878 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i879 = data
  i878.m_hasFontAssetChanged = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'm_baseMaterial')
  i878.m_maskOffset = new pc.Vec4( i879[3], i879[4], i879[5], i879[6] )
  i878.m_text = i879[7]
  i878.m_isRightToLeft = !!i879[8]
  request.r(i879[9], i879[10], 0, i878, 'm_fontAsset')
  request.r(i879[11], i879[12], 0, i878, 'm_sharedMaterial')
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.m_fontSharedMaterials = i880
  request.r(i879[14], i879[15], 0, i878, 'm_fontMaterial')
  var i883 = i879[16]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i878.m_fontMaterials = i882
  i878.m_fontColor32 = UnityEngine.Color32.ConstructColor(i879[17], i879[18], i879[19], i879[20])
  i878.m_fontColor = new pc.Color(i879[21], i879[22], i879[23], i879[24])
  i878.m_enableVertexGradient = !!i879[25]
  i878.m_colorMode = i879[26]
  i878.m_fontColorGradient = request.d('TMPro.VertexGradient', i879[27], i878.m_fontColorGradient)
  request.r(i879[28], i879[29], 0, i878, 'm_fontColorGradientPreset')
  request.r(i879[30], i879[31], 0, i878, 'm_spriteAsset')
  i878.m_tintAllSprites = !!i879[32]
  request.r(i879[33], i879[34], 0, i878, 'm_StyleSheet')
  i878.m_TextStyleHashCode = i879[35]
  i878.m_overrideHtmlColors = !!i879[36]
  i878.m_faceColor = UnityEngine.Color32.ConstructColor(i879[37], i879[38], i879[39], i879[40])
  i878.m_fontSize = i879[41]
  i878.m_fontSizeBase = i879[42]
  i878.m_fontWeight = i879[43]
  i878.m_enableAutoSizing = !!i879[44]
  i878.m_fontSizeMin = i879[45]
  i878.m_fontSizeMax = i879[46]
  i878.m_fontStyle = i879[47]
  i878.m_HorizontalAlignment = i879[48]
  i878.m_VerticalAlignment = i879[49]
  i878.m_textAlignment = i879[50]
  i878.m_characterSpacing = i879[51]
  i878.m_wordSpacing = i879[52]
  i878.m_lineSpacing = i879[53]
  i878.m_lineSpacingMax = i879[54]
  i878.m_paragraphSpacing = i879[55]
  i878.m_charWidthMaxAdj = i879[56]
  i878.m_TextWrappingMode = i879[57]
  i878.m_wordWrappingRatios = i879[58]
  i878.m_overflowMode = i879[59]
  request.r(i879[60], i879[61], 0, i878, 'm_linkedTextComponent')
  request.r(i879[62], i879[63], 0, i878, 'parentLinkedComponent')
  i878.m_enableKerning = !!i879[64]
  var i885 = i879[65]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(i885[i + 0]);
  }
  i878.m_ActiveFontFeatures = i884
  i878.m_enableExtraPadding = !!i879[66]
  i878.checkPaddingRequired = !!i879[67]
  i878.m_isRichText = !!i879[68]
  i878.m_parseCtrlCharacters = !!i879[69]
  i878.m_isOrthographic = !!i879[70]
  i878.m_isCullingEnabled = !!i879[71]
  i878.m_horizontalMapping = i879[72]
  i878.m_verticalMapping = i879[73]
  i878.m_uvLineOffset = i879[74]
  i878.m_geometrySortingOrder = i879[75]
  i878.m_IsTextObjectScaleStatic = !!i879[76]
  i878.m_VertexBufferAutoSizeReduction = !!i879[77]
  i878.m_useMaxVisibleDescender = !!i879[78]
  i878.m_pageToDisplay = i879[79]
  i878.m_margin = new pc.Vec4( i879[80], i879[81], i879[82], i879[83] )
  i878.m_isUsingLegacyAnimationComponent = !!i879[84]
  i878.m_isVolumetricText = !!i879[85]
  request.r(i879[86], i879[87], 0, i878, 'm_Material')
  i878.m_EmojiFallbackSupport = !!i879[88]
  i878.m_Maskable = !!i879[89]
  i878.m_Color = new pc.Color(i879[90], i879[91], i879[92], i879[93])
  i878.m_RaycastTarget = !!i879[94]
  i878.m_RaycastPadding = new pc.Vec4( i879[95], i879[96], i879[97], i879[98] )
  return i878
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.VertexGradient' )
  var i887 = data
  i886.topLeft = new pc.Color(i887[0], i887[1], i887[2], i887[3])
  i886.topRight = new pc.Color(i887[4], i887[5], i887[6], i887[7])
  i886.bottomLeft = new pc.Color(i887[8], i887[9], i887[10], i887[11])
  i886.bottomRight = new pc.Color(i887[12], i887[13], i887[14], i887[15])
  return i886
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Slider' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_FillRect')
  request.r(i891[2], i891[3], 0, i890, 'm_HandleRect')
  i890.m_Direction = i891[4]
  i890.m_MinValue = i891[5]
  i890.m_MaxValue = i891[6]
  i890.m_WholeNumbers = !!i891[7]
  i890.m_Value = i891[8]
  i890.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i891[9], i890.m_OnValueChanged)
  i890.m_Navigation = request.d('UnityEngine.UI.Navigation', i891[10], i890.m_Navigation)
  i890.m_Transition = i891[11]
  i890.m_Colors = request.d('UnityEngine.UI.ColorBlock', i891[12], i890.m_Colors)
  i890.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i891[13], i890.m_SpriteState)
  i890.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i891[14], i890.m_AnimationTriggers)
  i890.m_Interactable = !!i891[15]
  request.r(i891[16], i891[17], 0, i890, 'm_TargetGraphic')
  return i890
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.Events.PersistentCall', i897[i + 0]));
  }
  i894.m_Calls = i896
  return i894
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Target')
  i900.m_TargetAssemblyTypeName = i901[2]
  i900.m_MethodName = i901[3]
  i900.m_Mode = i901[4]
  i900.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i901[5], i900.m_Arguments)
  i900.m_CallState = i901[6]
  return i900
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i903 = data
  i902.m_Mode = i903[0]
  i902.m_WrapAround = !!i903[1]
  request.r(i903[2], i903[3], 0, i902, 'm_SelectOnUp')
  request.r(i903[4], i903[5], 0, i902, 'm_SelectOnDown')
  request.r(i903[6], i903[7], 0, i902, 'm_SelectOnLeft')
  request.r(i903[8], i903[9], 0, i902, 'm_SelectOnRight')
  return i902
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i905 = data
  i904.m_NormalColor = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.m_HighlightedColor = new pc.Color(i905[4], i905[5], i905[6], i905[7])
  i904.m_PressedColor = new pc.Color(i905[8], i905[9], i905[10], i905[11])
  i904.m_SelectedColor = new pc.Color(i905[12], i905[13], i905[14], i905[15])
  i904.m_DisabledColor = new pc.Color(i905[16], i905[17], i905[18], i905[19])
  i904.m_ColorMultiplier = i905[20]
  i904.m_FadeDuration = i905[21]
  return i904
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'm_HighlightedSprite')
  request.r(i907[2], i907[3], 0, i906, 'm_PressedSprite')
  request.r(i907[4], i907[5], 0, i906, 'm_SelectedSprite')
  request.r(i907[6], i907[7], 0, i906, 'm_DisabledSprite')
  return i906
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i909 = data
  i908.m_NormalTrigger = i909[0]
  i908.m_HighlightedTrigger = i909[1]
  i908.m_PressedTrigger = i909[2]
  i908.m_SelectedTrigger = i909[3]
  i908.m_DisabledTrigger = i909[4]
  return i908
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Image' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Sprite')
  i910.m_Type = i911[2]
  i910.m_PreserveAspect = !!i911[3]
  i910.m_FillCenter = !!i911[4]
  i910.m_FillMethod = i911[5]
  i910.m_FillAmount = i911[6]
  i910.m_FillClockwise = !!i911[7]
  i910.m_FillOrigin = i911[8]
  i910.m_UseSpriteMesh = !!i911[9]
  i910.m_PixelsPerUnitMultiplier = i911[10]
  request.r(i911[11], i911[12], 0, i910, 'm_Material')
  i910.m_Maskable = !!i911[13]
  i910.m_Color = new pc.Color(i911[14], i911[15], i911[16], i911[17])
  i910.m_RaycastTarget = !!i911[18]
  i910.m_RaycastPadding = new pc.Vec4( i911[19], i911[20], i911[21], i911[22] )
  return i910
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Button' )
  var i913 = data
  i912.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i913[0], i912.m_OnClick)
  i912.m_Navigation = request.d('UnityEngine.UI.Navigation', i913[1], i912.m_Navigation)
  i912.m_Transition = i913[2]
  i912.m_Colors = request.d('UnityEngine.UI.ColorBlock', i913[3], i912.m_Colors)
  i912.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i913[4], i912.m_SpriteState)
  i912.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i913[5], i912.m_AnimationTriggers)
  i912.m_Interactable = !!i913[6]
  request.r(i913[7], i913[8], 0, i912, 'm_TargetGraphic')
  return i912
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i915 = data
  i914.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i915[0], i914.m_PersistentCalls)
  return i914
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_ObjectArgument')
  i916.m_ObjectArgumentAssemblyTypeName = i917[2]
  i916.m_IntArgument = i917[3]
  i916.m_FloatArgument = i917[4]
  i916.m_StringArgument = i917[5]
  i916.m_BoolArgument = !!i917[6]
  return i916
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i918 = root || request.c( 'Ply_Pool' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Ply_Pool+PoolAmount', i921[i + 0]) );
  }
  i918.poolAmounts = i920
  request.r(i919[1], i919[2], 0, i918, 'poolHolder')
  return i918
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i924 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i925 = data
  i924.type = i925[0]
  i924.amount = i925[1]
  request.r(i925[2], i925[3], 0, i924, 'gameUnit')
  return i924
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i926 = root || request.c( 'Ply_SoundManager' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.audioClips = i928
  request.r(i927[1], i927[2], 0, i926, 'sound')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'clip')
  request.r(i933[2], i933[3], 0, i932, 'outputAudioMixerGroup')
  i932.playOnAwake = !!i933[4]
  i932.loop = !!i933[5]
  i932.time = i933[6]
  i932.volume = i933[7]
  i932.pitch = i933[8]
  i932.enabled = !!i933[9]
  return i932
}

Deserializers["GameManager"] = function (request, data, root) {
  var i934 = root || request.c( 'GameManager' )
  var i935 = data
  i934.isPlaying = !!i935[0]
  i934.isTutorial = !!i935[1]
  i934.isGotoStore = !!i935[2]
  i934.countMove = i935[3]
  i934.maxMove = i935[4]
  i934.startLayer = i935[5]
  i934.currentLayer = i935[6]
  request.r(i935[7], i935[8], 0, i934, 'mainBox')
  request.r(i935[9], i935[10], 0, i934, 'handTutorial')
  i934.tutorialDelay = i935[11]
  return i934
}

Deserializers["UIManager"] = function (request, data, root) {
  var i936 = root || request.c( 'UIManager' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'winUI')
  request.r(i937[2], i937[3], 0, i936, 'loseUI')
  request.r(i937[4], i937[5], 0, i936, 'tutorial')
  request.r(i937[6], i937[7], 0, i936, 'verticalUI')
  request.r(i937[8], i937[9], 0, i936, 'horizontalUI')
  request.r(i937[10], i937[11], 0, i936, 'downloadBtnVertical')
  request.r(i937[12], i937[13], 0, i936, 'dowloadBtnHorizontal')
  request.r(i937[14], i937[15], 0, i936, 'progressSlider')
  request.r(i937[16], i937[17], 0, i936, 'progressText')
  i936.maxProgressItems = i937[18]
  i936.startProgressItems = i937[19]
  i936.screenWidth = i937[20]
  i936.screenHeight = i937[21]
  i936.scaleHeightOnWidth = i937[22]
  i936.isVertical = !!i937[23]
  request.r(i937[24], i937[25], 0, i936, 'cam')
  i936.introZoomOutMultiplier = i937[26]
  i936.cameraZoomDuration = i937[27]
  i936.useContinuousScaling = !!i937[28]
  i936.baseOrthographicSize = i937[29]
  i936.baseAspect = i937[30]
  i936.landscapeSize = i937[31]
  i936.defaultPortraitSize = i937[32]
  var i939 = i937[33]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('ScreenScaleStep', i939[i + 0]));
  }
  i936.discreteScaleSteps = i938
  i936.usePerspectiveCamera = !!i937[34]
  request.r(i937[35], i937[36], 0, i936, 'perspectiveFocus')
  i936.perspectiveFocusDistance = i937[37]
  i936.perspectivePadding = i937[38]
  i936.fitRendererBounds = !!i937[39]
  request.r(i937[40], i937[41], 0, i936, 'boundsRoot')
  var i941 = i937[42]
  var i940 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 1, i940, '')
  }
  i936.boundsRenderers = i940
  return i936
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i944 = root || request.c( 'ScreenScaleStep' )
  var i945 = data
  i944.heightOnWidthRatio = i945[0]
  i944.orthographicSize = i945[1]
  return i944
}

Deserializers["InputManager"] = function (request, data, root) {
  var i948 = root || request.c( 'InputManager' )
  var i949 = data
  i948.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i949[0] )
  i948.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i949[1] )
  i948.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i949[2] )
  i948.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i949[3] )
  i948.isDragging = !!i949[4]
  request.r(i949[5], i949[6], 0, i948, 'mainCamera')
  return i948
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i950 = root || request.c( 'ItemSetupTool' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'spritesParent')
  request.r(i951[2], i951[3], 0, i950, 'holdersParent')
  i950.shadowSuffix = i951[4]
  i950.holderPrefix = i951[5]
  i950.holdersParentName = i951[6]
  i950.colliderDepth = i951[7]
  i950.colliderSizeMultiplier = i951[8]
  i950.generatedShadowColor = new pc.Color(i951[9], i951[10], i951[11], i951[12])
  i950.fadedBlackShadowColor = new pc.Color(i951[13], i951[14], i951[15], i951[16])
  i950.generatedShadowLocalOffset = new pc.Vec3( i951[17], i951[18], i951[19] )
  i950.itemLayerName = i951[20]
  i950.holderLayerName = i951[21]
  return i950
}

Deserializers["CameraController"] = function (request, data, root) {
  var i952 = root || request.c( 'CameraController' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'targetCamera')
  i952.enableZoom = !!i953[2]
  i952.minZoomRatio = i953[3]
  i952.maxZoomRatio = i953[4]
  i952.mouseWheelZoomSpeed = i953[5]
  i952.pinchZoomSpeed = i953[6]
  i952.enableDrag = !!i953[7]
  i952.horizontalOnly = !!i953[8]
  i952.dragSensitivity = i953[9]
  i952.maxHorizontalOffset = i953[10]
  i952.maxVerticalOffset = i953[11]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i955 = data
  i954.aspect = i955[0]
  i954.orthographic = !!i955[1]
  i954.orthographicSize = i955[2]
  i954.backgroundColor = new pc.Color(i955[3], i955[4], i955[5], i955[6])
  i954.nearClipPlane = i955[7]
  i954.farClipPlane = i955[8]
  i954.fieldOfView = i955[9]
  i954.depth = i955[10]
  i954.clearFlags = i955[11]
  i954.cullingMask = i955[12]
  i954.rect = i955[13]
  request.r(i955[14], i955[15], 0, i954, 'targetTexture')
  i954.usePhysicalProperties = !!i955[16]
  i954.focalLength = i955[17]
  i954.sensorSize = new pc.Vec2( i955[18], i955[19] )
  i954.lensShift = new pc.Vec2( i955[20], i955[21] )
  i954.gateFit = i955[22]
  i954.commandBufferCount = i955[23]
  i954.cameraType = i955[24]
  i954.enabled = !!i955[25]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i957 = data
  i956.type = i957[0]
  i956.color = new pc.Color(i957[1], i957[2], i957[3], i957[4])
  i956.cullingMask = i957[5]
  i956.intensity = i957[6]
  i956.range = i957[7]
  i956.spotAngle = i957[8]
  i956.shadows = i957[9]
  i956.shadowNormalBias = i957[10]
  i956.shadowBias = i957[11]
  i956.shadowStrength = i957[12]
  i956.shadowResolution = i957[13]
  i956.lightmapBakeType = i957[14]
  i956.renderMode = i957[15]
  request.r(i957[16], i957[17], 0, i956, 'cookie')
  i956.cookieSize = i957[18]
  i956.shadowNearPlane = i957[19]
  i956.occlusionMaskChannel = i957[20]
  i956.enabled = !!i957[21]
  return i956
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_FirstSelected')
  i958.m_sendNavigationEvents = !!i959[2]
  i958.m_DragThreshold = i959[3]
  return i958
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i961 = data
  i960.m_HorizontalAxis = i961[0]
  i960.m_VerticalAxis = i961[1]
  i960.m_SubmitButton = i961[2]
  i960.m_CancelButton = i961[3]
  i960.m_InputActionsPerSecond = i961[4]
  i960.m_RepeatDelay = i961[5]
  i960.m_ForceModuleActive = !!i961[6]
  i960.m_SendPointerHoverToParent = !!i961[7]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i963 = data
  i962.color = new pc.Color(i963[0], i963[1], i963[2], i963[3])
  request.r(i963[4], i963[5], 0, i962, 'sprite')
  i962.flipX = !!i963[6]
  i962.flipY = !!i963[7]
  i962.drawMode = i963[8]
  i962.size = new pc.Vec2( i963[9], i963[10] )
  i962.tileMode = i963[11]
  i962.adaptiveModeThreshold = i963[12]
  i962.maskInteraction = i963[13]
  i962.spriteSortPoint = i963[14]
  i962.enabled = !!i963[15]
  request.r(i963[16], i963[17], 0, i962, 'sharedMaterial')
  var i965 = i963[18]
  var i964 = []
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 2, i964, '')
  }
  i962.sharedMaterials = i964
  i962.receiveShadows = !!i963[19]
  i962.shadowCastingMode = i963[20]
  i962.sortingLayerID = i963[21]
  i962.sortingOrder = i963[22]
  i962.lightmapIndex = i963[23]
  i962.lightmapSceneIndex = i963[24]
  i962.lightmapScaleOffset = new pc.Vec4( i963[25], i963[26], i963[27], i963[28] )
  i962.lightProbeUsage = i963[29]
  i962.reflectionProbeUsage = i963[30]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i967 = data
  i966.center = new pc.Vec3( i967[0], i967[1], i967[2] )
  i966.radius = i967[3]
  i966.enabled = !!i967[4]
  i966.isTrigger = !!i967[5]
  request.r(i967[6], i967[7], 0, i966, 'material')
  return i966
}

Deserializers["Box"] = function (request, data, root) {
  var i968 = root || request.c( 'Box' )
  var i969 = data
  i968.useBox = !!i969[0]
  i968.spawnMode = i969[1]
  var i971 = i969[2]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i968.dynamicItems = i970
  var i973 = i969[3]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i968.spawnTargets = i972
  i968.initialSpawnCount = i969[4]
  i968.revealDuration = i969[5]
  i968.showInitialBatchShadowsOnSpawn = !!i969[6]
  request.r(i969[7], i969[8], 0, i968, 'graphicController')
  return i968
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i978 = root || request.c( 'BoxGraphicController' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'skeletonAnimation')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'sharedMesh')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'additionalVertexStreams')
  i982.enabled = !!i983[2]
  request.r(i983[3], i983[4], 0, i982, 'sharedMaterial')
  var i985 = i983[5]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.sharedMaterials = i984
  i982.receiveShadows = !!i983[6]
  i982.shadowCastingMode = i983[7]
  i982.sortingLayerID = i983[8]
  i982.sortingOrder = i983[9]
  i982.lightmapIndex = i983[10]
  i982.lightmapSceneIndex = i983[11]
  i982.lightmapScaleOffset = new pc.Vec4( i983[12], i983[13], i983[14], i983[15] )
  i982.lightProbeUsage = i983[16]
  i982.reflectionProbeUsage = i983[17]
  return i982
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i986 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i987 = data
  i986.loop = !!i987[0]
  i986.timeScale = i987[1]
  request.r(i987[2], i987[3], 0, i986, 'skeletonDataAsset')
  i986.initialSkinName = i987[4]
  i986.fixPrefabOverrideViaMeshFilter = i987[5]
  i986.initialFlipX = !!i987[6]
  i986.initialFlipY = !!i987[7]
  i986.updateWhenInvisible = i987[8]
  i986.zSpacing = i987[9]
  i986.useClipping = !!i987[10]
  i986.immutableTriangles = !!i987[11]
  i986.pmaVertexColors = !!i987[12]
  i986.clearStateOnDisable = !!i987[13]
  i986.tintBlack = !!i987[14]
  i986.singleSubmesh = !!i987[15]
  i986.fixDrawOrder = !!i987[16]
  i986.addNormals = !!i987[17]
  i986.calculateTangents = !!i987[18]
  i986.maskInteraction = i987[19]
  i986.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i987[20], i986.maskMaterials)
  i986.disableRenderingOnOverride = !!i987[21]
  i986._animationName = i987[22]
  var i989 = i987[23]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i986.separatorSlotNames = i988
  return i986
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i990 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.materialsMaskDisabled = i992
  var i995 = i991[1]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i990.materialsInsideMask = i994
  var i997 = i991[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i990.materialsOutsideMask = i996
  return i990
}

Deserializers["Item"] = function (request, data, root) {
  var i1000 = root || request.c( 'Item' )
  var i1001 = data
  i1000.placeSoundType = i1001[0]
  i1000.id = i1001[1]
  i1000.currentState = i1001[2]
  i1000.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1001[3] )
  i1000.scaleOnSpawn = !!i1001[4]
  i1000.spawnScaleMultiplier = i1001[5]
  request.r(i1001[6], i1001[7], 0, i1000, 'correctHolderTransform')
  request.r(i1001[8], i1001[9], 0, i1000, 'shadowOnHolder')
  i1000.canShowShadowHint = !!i1001[10]
  i1000.waitingPosition = new pc.Vec3( i1001[11], i1001[12], i1001[13] )
  request.r(i1001[14], i1001[15], 0, i1000, 'spriteRenderer')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1003 = data
  i1002.center = new pc.Vec3( i1003[0], i1003[1], i1003[2] )
  i1002.size = new pc.Vec3( i1003[3], i1003[4], i1003[5] )
  i1002.enabled = !!i1003[6]
  i1002.isTrigger = !!i1003[7]
  request.r(i1003[8], i1003[9], 0, i1002, 'material')
  return i1002
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemHolder' )
  var i1005 = data
  i1004.id = i1005[0]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1007 = data
  i1006.ambientIntensity = i1007[0]
  i1006.reflectionIntensity = i1007[1]
  i1006.ambientMode = i1007[2]
  i1006.ambientLight = new pc.Color(i1007[3], i1007[4], i1007[5], i1007[6])
  i1006.ambientSkyColor = new pc.Color(i1007[7], i1007[8], i1007[9], i1007[10])
  i1006.ambientGroundColor = new pc.Color(i1007[11], i1007[12], i1007[13], i1007[14])
  i1006.ambientEquatorColor = new pc.Color(i1007[15], i1007[16], i1007[17], i1007[18])
  i1006.fogColor = new pc.Color(i1007[19], i1007[20], i1007[21], i1007[22])
  i1006.fogEndDistance = i1007[23]
  i1006.fogStartDistance = i1007[24]
  i1006.fogDensity = i1007[25]
  i1006.fog = !!i1007[26]
  request.r(i1007[27], i1007[28], 0, i1006, 'skybox')
  i1006.fogMode = i1007[29]
  var i1009 = i1007[30]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1009[i + 0]) );
  }
  i1006.lightmaps = i1008
  i1006.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1007[31], i1006.lightProbes)
  i1006.lightmapsMode = i1007[32]
  i1006.mixedBakeMode = i1007[33]
  i1006.environmentLightingMode = i1007[34]
  i1006.ambientProbe = new pc.SphericalHarmonicsL2(i1007[35])
  i1006.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1007[36])
  i1006.useReferenceAmbientProbe = !!i1007[37]
  request.r(i1007[38], i1007[39], 0, i1006, 'customReflection')
  request.r(i1007[40], i1007[41], 0, i1006, 'defaultReflection')
  i1006.defaultReflectionMode = i1007[42]
  i1006.defaultReflectionResolution = i1007[43]
  i1006.sunLightObjectId = i1007[44]
  i1006.pixelLightCount = i1007[45]
  i1006.defaultReflectionHDR = !!i1007[46]
  i1006.hasLightDataAsset = !!i1007[47]
  i1006.hasManualGenerate = !!i1007[48]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'lightmapColor')
  request.r(i1013[2], i1013[3], 0, i1012, 'lightmapDirection')
  request.r(i1013[4], i1013[5], 0, i1012, 'shadowMask')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1014 = root || new UnityEngine.LightProbes()
  var i1015 = data
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1025[i + 0]));
  }
  i1022.ShaderCompilationErrors = i1024
  i1022.name = i1023[1]
  i1022.guid = i1023[2]
  var i1027 = i1023[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.shaderDefinedKeywords = i1026
  var i1029 = i1023[4]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1029[i + 0]) );
  }
  i1022.passes = i1028
  var i1031 = i1023[5]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1031[i + 0]) );
  }
  i1022.usePasses = i1030
  var i1033 = i1023[6]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1033[i + 0]) );
  }
  i1022.defaultParameterValues = i1032
  request.r(i1023[7], i1023[8], 0, i1022, 'unityFallbackShader')
  i1022.readDepth = !!i1023[9]
  i1022.hasDepthOnlyPass = !!i1023[10]
  i1022.isCreatedByShaderGraph = !!i1023[11]
  i1022.disableBatching = !!i1023[12]
  i1022.compiled = !!i1023[13]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1037 = data
  i1036.shaderName = i1037[0]
  i1036.errorMessage = i1037[1]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1040 = root || new pc.UnityShaderPass()
  var i1041 = data
  i1040.id = i1041[0]
  i1040.subShaderIndex = i1041[1]
  i1040.name = i1041[2]
  i1040.passType = i1041[3]
  i1040.grabPassTextureName = i1041[4]
  i1040.usePass = !!i1041[5]
  i1040.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[6], i1040.zTest)
  i1040.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[7], i1040.zWrite)
  i1040.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[8], i1040.culling)
  i1040.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[9], i1040.blending)
  i1040.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1041[10], i1040.alphaBlending)
  i1040.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[11], i1040.colorWriteMask)
  i1040.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[12], i1040.offsetUnits)
  i1040.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[13], i1040.offsetFactor)
  i1040.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[14], i1040.stencilRef)
  i1040.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[15], i1040.stencilReadMask)
  i1040.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1041[16], i1040.stencilWriteMask)
  i1040.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[17], i1040.stencilOp)
  i1040.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[18], i1040.stencilOpFront)
  i1040.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1041[19], i1040.stencilOpBack)
  var i1043 = i1041[20]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1043[i + 0]) );
  }
  i1040.tags = i1042
  var i1045 = i1041[21]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1040.passDefinedKeywords = i1044
  var i1047 = i1041[22]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1047[i + 0]) );
  }
  i1040.passDefinedKeywordGroups = i1046
  var i1049 = i1041[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1049[i + 0]) );
  }
  i1040.variants = i1048
  var i1051 = i1041[24]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1051[i + 0]) );
  }
  i1040.excludedVariants = i1050
  i1040.hasDepthReader = !!i1041[25]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1053 = data
  i1052.val = i1053[0]
  i1052.name = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1055 = data
  i1054.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[0], i1054.src)
  i1054.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[1], i1054.dst)
  i1054.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1055[2], i1054.op)
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1057 = data
  i1056.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[0], i1056.pass)
  i1056.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[1], i1056.fail)
  i1056.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[2], i1056.zFail)
  i1056.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1057[3], i1056.comp)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.value = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1065 = data
  var i1067 = i1065[0]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.hasDiscard = !!i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1071 = data
  i1070.passId = i1071[0]
  i1070.subShaderIndex = i1071[1]
  var i1073 = i1071[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( i1073[i + 0] );
  }
  i1070.keywords = i1072
  i1070.vertexProgram = i1071[3]
  i1070.fragmentProgram = i1071[4]
  i1070.exportedForWebGl2 = !!i1071[5]
  i1070.readDepth = !!i1071[6]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'shader')
  i1076.pass = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.type = i1081[1]
  i1080.value = new pc.Vec4( i1081[2], i1081[3], i1081[4], i1081[5] )
  i1080.textureValue = i1081[6]
  i1080.shaderPropertyFlag = i1081[7]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1083 = data
  i1082.name = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'texture')
  i1082.aabb = i1083[3]
  i1082.vertices = i1083[4]
  i1082.triangles = i1083[5]
  i1082.textureRect = UnityEngine.Rect.MinMaxRect(i1083[6], i1083[7], i1083[8], i1083[9])
  i1082.packedRect = UnityEngine.Rect.MinMaxRect(i1083[10], i1083[11], i1083[12], i1083[13])
  i1082.border = new pc.Vec4( i1083[14], i1083[15], i1083[16], i1083[17] )
  i1082.transparency = i1083[18]
  i1082.bounds = i1083[19]
  i1082.pixelsPerUnit = i1083[20]
  i1082.textureWidth = i1083[21]
  i1082.textureHeight = i1083[22]
  i1082.nativeSize = new pc.Vec2( i1083[23], i1083[24] )
  i1082.pivot = new pc.Vec2( i1083[25], i1083[26] )
  i1082.textureRectOffset = new pc.Vec2( i1083[27], i1083[28] )
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1085 = data
  i1084.name = i1085[0]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1087 = data
  i1086.name = i1087[0]
  i1086.wrapMode = i1087[1]
  i1086.isLooping = !!i1087[2]
  i1086.length = i1087[3]
  var i1089 = i1087[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1089[i + 0]) );
  }
  i1086.curves = i1088
  var i1091 = i1087[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1091[i + 0]) );
  }
  i1086.events = i1090
  i1086.halfPrecision = !!i1087[6]
  i1086._frameRate = i1087[7]
  i1086.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1087[8], i1086.localBounds)
  i1086.hasMuscleCurves = !!i1087[9]
  var i1093 = i1087[10]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1086.clipMuscleConstant = i1092
  i1086.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1087[11], i1086.clipBindingConstant)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1097 = data
  i1096.path = i1097[0]
  i1096.hash = i1097[1]
  i1096.componentType = i1097[2]
  i1096.property = i1097[3]
  i1096.keys = i1097[4]
  var i1099 = i1097[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1099[i + 0]) );
  }
  i1096.objectReferenceKeys = i1098
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1103 = data
  i1102.time = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'value')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1107 = data
  i1106.functionName = i1107[0]
  i1106.floatParameter = i1107[1]
  i1106.intParameter = i1107[2]
  i1106.stringParameter = i1107[3]
  request.r(i1107[4], i1107[5], 0, i1106, 'objectReferenceParameter')
  i1106.time = i1107[6]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1109 = data
  i1108.center = new pc.Vec3( i1109[0], i1109[1], i1109[2] )
  i1108.extends = new pc.Vec3( i1109[3], i1109[4], i1109[5] )
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1112.genericBindings = i1114
  var i1117 = i1113[1]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1112.pptrCurveMapping = i1116
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1119 = data
  i1118.name = i1119[0]
  var i1121 = i1119[1]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1121[i + 0]) );
  }
  i1118.layers = i1120
  var i1123 = i1119[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1123[i + 0]) );
  }
  i1118.parameters = i1122
  i1118.animationClips = i1119[3]
  i1118.avatarUnsupported = i1119[4]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.defaultWeight = i1127[1]
  i1126.blendingMode = i1127[2]
  i1126.avatarMask = i1127[3]
  i1126.syncedLayerIndex = i1127[4]
  i1126.syncedLayerAffectsTiming = !!i1127[5]
  i1126.syncedLayers = i1127[6]
  i1126.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1127[7], i1126.stateMachine)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1129 = data
  i1128.id = i1129[0]
  i1128.name = i1129[1]
  i1128.path = i1129[2]
  var i1131 = i1129[3]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1131[i + 0]) );
  }
  i1128.states = i1130
  var i1133 = i1129[4]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1133[i + 0]) );
  }
  i1128.machines = i1132
  var i1135 = i1129[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1135[i + 0]) );
  }
  i1128.entryStateTransitions = i1134
  var i1137 = i1129[6]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1137[i + 0]) );
  }
  i1128.exitStateTransitions = i1136
  var i1139 = i1129[7]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1139[i + 0]) );
  }
  i1128.anyStateTransitions = i1138
  i1128.defaultStateId = i1129[8]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1143 = data
  i1142.id = i1143[0]
  i1142.name = i1143[1]
  i1142.cycleOffset = i1143[2]
  i1142.cycleOffsetParameter = i1143[3]
  i1142.cycleOffsetParameterActive = !!i1143[4]
  i1142.mirror = !!i1143[5]
  i1142.mirrorParameter = i1143[6]
  i1142.mirrorParameterActive = !!i1143[7]
  i1142.motionId = i1143[8]
  i1142.nameHash = i1143[9]
  i1142.fullPathHash = i1143[10]
  i1142.speed = i1143[11]
  i1142.speedParameter = i1143[12]
  i1142.speedParameterActive = !!i1143[13]
  i1142.tag = i1143[14]
  i1142.tagHash = i1143[15]
  i1142.writeDefaultValues = !!i1143[16]
  var i1145 = i1143[17]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 2, i1144, '')
  }
  i1142.behaviours = i1144
  var i1147 = i1143[18]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1147[i + 0]) );
  }
  i1142.transitions = i1146
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1153 = data
  i1152.fullPath = i1153[0]
  i1152.canTransitionToSelf = !!i1153[1]
  i1152.duration = i1153[2]
  i1152.exitTime = i1153[3]
  i1152.hasExitTime = !!i1153[4]
  i1152.hasFixedDuration = !!i1153[5]
  i1152.interruptionSource = i1153[6]
  i1152.offset = i1153[7]
  i1152.orderedInterruption = !!i1153[8]
  i1152.destinationStateId = i1153[9]
  i1152.isExit = !!i1153[10]
  i1152.mute = !!i1153[11]
  i1152.solo = !!i1153[12]
  var i1155 = i1153[13]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1155[i + 0]) );
  }
  i1152.conditions = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1161 = data
  i1160.destinationStateId = i1161[0]
  i1160.isExit = !!i1161[1]
  i1160.mute = !!i1161[2]
  i1160.solo = !!i1161[3]
  var i1163 = i1161[4]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1163[i + 0]) );
  }
  i1160.conditions = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1167 = data
  i1166.defaultBool = !!i1167[0]
  i1166.defaultFloat = i1167[1]
  i1166.defaultInt = i1167[2]
  i1166.name = i1167[3]
  i1166.nameHash = i1167[4]
  i1166.type = i1167[5]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.bytes64 = i1169[1]
  i1168.data = i1169[2]
  return i1168
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1171 = data
  i1170.normalStyle = i1171[0]
  i1170.normalSpacingOffset = i1171[1]
  i1170.boldStyle = i1171[2]
  i1170.boldSpacing = i1171[3]
  i1170.italicStyle = i1171[4]
  i1170.tabSize = i1171[5]
  request.r(i1171[6], i1171[7], 0, i1170, 'atlas')
  i1170.m_SourceFontFileGUID = i1171[8]
  i1170.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1171[9], i1170.m_CreationSettings)
  request.r(i1171[10], i1171[11], 0, i1170, 'm_SourceFontFile')
  i1170.m_SourceFontFilePath = i1171[12]
  i1170.m_AtlasPopulationMode = i1171[13]
  i1170.InternalDynamicOS = !!i1171[14]
  var i1173 = i1171[15]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.add(request.d('UnityEngine.TextCore.Glyph', i1173[i + 0]));
  }
  i1170.m_GlyphTable = i1172
  var i1175 = i1171[16]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('TMPro.TMP_Character', i1175[i + 0]));
  }
  i1170.m_CharacterTable = i1174
  var i1177 = i1171[17]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 2, i1176, '')
  }
  i1170.m_AtlasTextures = i1176
  i1170.m_AtlasTextureIndex = i1171[18]
  i1170.m_IsMultiAtlasTexturesEnabled = !!i1171[19]
  i1170.m_GetFontFeatures = !!i1171[20]
  i1170.m_ClearDynamicDataOnBuild = !!i1171[21]
  i1170.m_AtlasWidth = i1171[22]
  i1170.m_AtlasHeight = i1171[23]
  i1170.m_AtlasPadding = i1171[24]
  i1170.m_AtlasRenderMode = i1171[25]
  var i1179 = i1171[26]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.add(request.d('UnityEngine.TextCore.GlyphRect', i1179[i + 0]));
  }
  i1170.m_UsedGlyphRects = i1178
  var i1181 = i1171[27]
  var i1180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.add(request.d('UnityEngine.TextCore.GlyphRect', i1181[i + 0]));
  }
  i1170.m_FreeGlyphRects = i1180
  i1170.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1171[28], i1170.m_FontFeatureTable)
  i1170.m_ShouldReimportFontFeatures = !!i1171[29]
  var i1183 = i1171[30]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 1, i1182, '')
  }
  i1170.m_FallbackFontAssetTable = i1182
  var i1185 = i1171[31]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('TMPro.TMP_FontWeightPair', i1185[i + 0]) );
  }
  i1170.m_FontWeightTable = i1184
  var i1187 = i1171[32]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('TMPro.TMP_FontWeightPair', i1187[i + 0]) );
  }
  i1170.fontWeights = i1186
  i1170.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1171[33], i1170.m_fontInfo)
  var i1189 = i1171[34]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_Glyph', i1189[i + 0]));
  }
  i1170.m_glyphInfoList = i1188
  i1170.m_KerningTable = request.d('TMPro.KerningTable', i1171[35], i1170.m_KerningTable)
  var i1191 = i1171[36]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1170.fallbackFontAssets = i1190
  i1170.m_Version = i1171[37]
  i1170.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1171[38], i1170.m_FaceInfo)
  request.r(i1171[39], i1171[40], 0, i1170, 'm_Material')
  return i1170
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1193 = data
  i1192.sourceFontFileName = i1193[0]
  i1192.sourceFontFileGUID = i1193[1]
  i1192.faceIndex = i1193[2]
  i1192.pointSizeSamplingMode = i1193[3]
  i1192.pointSize = i1193[4]
  i1192.padding = i1193[5]
  i1192.paddingMode = i1193[6]
  i1192.packingMode = i1193[7]
  i1192.atlasWidth = i1193[8]
  i1192.atlasHeight = i1193[9]
  i1192.characterSetSelectionMode = i1193[10]
  i1192.characterSequence = i1193[11]
  i1192.referencedFontAssetGUID = i1193[12]
  i1192.referencedTextAssetGUID = i1193[13]
  i1192.fontStyle = i1193[14]
  i1192.fontStyleModifier = i1193[15]
  i1192.renderMode = i1193[16]
  i1192.includeFontFeatures = !!i1193[17]
  return i1192
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1197 = data
  i1196.m_Index = i1197[0]
  i1196.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1197[1], i1196.m_Metrics)
  i1196.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1197[2], i1196.m_GlyphRect)
  i1196.m_Scale = i1197[3]
  i1196.m_AtlasIndex = i1197[4]
  i1196.m_ClassDefinitionType = i1197[5]
  return i1196
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1199 = data
  i1198.m_Width = i1199[0]
  i1198.m_Height = i1199[1]
  i1198.m_HorizontalBearingX = i1199[2]
  i1198.m_HorizontalBearingY = i1199[3]
  i1198.m_HorizontalAdvance = i1199[4]
  return i1198
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1201 = data
  i1200.m_X = i1201[0]
  i1200.m_Y = i1201[1]
  i1200.m_Width = i1201[2]
  i1200.m_Height = i1201[3]
  return i1200
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_Character' )
  var i1205 = data
  i1204.m_ElementType = i1205[0]
  i1204.m_Unicode = i1205[1]
  i1204.m_GlyphIndex = i1205[2]
  i1204.m_Scale = i1205[3]
  return i1204
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1211 = data
  var i1213 = i1211[0]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.MultipleSubstitutionRecord', i1213[i + 0]));
  }
  i1210.m_MultipleSubstitutionRecords = i1212
  var i1215 = i1211[1]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.LigatureSubstitutionRecord', i1215[i + 0]));
  }
  i1210.m_LigatureSubstitutionRecords = i1214
  var i1217 = i1211[2]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1217[i + 0]));
  }
  i1210.m_GlyphPairAdjustmentRecords = i1216
  var i1219 = i1211[3]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1219[i + 0]));
  }
  i1210.m_MarkToBaseAdjustmentRecords = i1218
  var i1221 = i1211[4]
  var i1220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1221[i + 0]));
  }
  i1210.m_MarkToMarkAdjustmentRecords = i1220
  return i1210
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1225 = data
  i1224.m_TargetGlyphID = i1225[0]
  i1224.m_SubstituteGlyphIDs = i1225[1]
  return i1224
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1229 = data
  i1228.m_ComponentGlyphIDs = i1229[0]
  i1228.m_LigatureGlyphID = i1229[1]
  return i1228
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1233 = data
  i1232.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1233[0], i1232.m_FirstAdjustmentRecord)
  i1232.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1233[1], i1232.m_SecondAdjustmentRecord)
  i1232.m_FeatureLookupFlags = i1233[2]
  return i1232
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1237 = data
  i1236.m_BaseGlyphID = i1237[0]
  i1236.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1237[1], i1236.m_BaseGlyphAnchorPoint)
  i1236.m_MarkGlyphID = i1237[2]
  i1236.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1237[3], i1236.m_MarkPositionAdjustment)
  return i1236
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1240 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1241 = data
  i1240.m_BaseMarkGlyphID = i1241[0]
  i1240.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1241[1], i1240.m_BaseMarkGlyphAnchorPoint)
  i1240.m_CombiningMarkGlyphID = i1241[2]
  i1240.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1241[3], i1240.m_CombiningMarkPositionAdjustment)
  return i1240
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'regularTypeface')
  request.r(i1247[2], i1247[3], 0, i1246, 'italicTypeface')
  return i1246
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1249 = data
  i1248.Name = i1249[0]
  i1248.PointSize = i1249[1]
  i1248.Scale = i1249[2]
  i1248.CharacterCount = i1249[3]
  i1248.LineHeight = i1249[4]
  i1248.Baseline = i1249[5]
  i1248.Ascender = i1249[6]
  i1248.CapHeight = i1249[7]
  i1248.Descender = i1249[8]
  i1248.CenterLine = i1249[9]
  i1248.SuperscriptOffset = i1249[10]
  i1248.SubscriptOffset = i1249[11]
  i1248.SubSize = i1249[12]
  i1248.Underline = i1249[13]
  i1248.UnderlineThickness = i1249[14]
  i1248.strikethrough = i1249[15]
  i1248.strikethroughThickness = i1249[16]
  i1248.TabWidth = i1249[17]
  i1248.Padding = i1249[18]
  i1248.AtlasWidth = i1249[19]
  i1248.AtlasHeight = i1249[20]
  return i1248
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1253 = data
  i1252.id = i1253[0]
  i1252.x = i1253[1]
  i1252.y = i1253[2]
  i1252.width = i1253[3]
  i1252.height = i1253[4]
  i1252.xOffset = i1253[5]
  i1252.yOffset = i1253[6]
  i1252.xAdvance = i1253[7]
  i1252.scale = i1253[8]
  return i1252
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.KerningTable' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.KerningPair', i1257[i + 0]));
  }
  i1254.kerningPairs = i1256
  return i1254
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.KerningPair' )
  var i1261 = data
  i1260.xOffset = i1261[0]
  i1260.m_FirstGlyph = i1261[1]
  i1260.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1261[2], i1260.m_FirstGlyphAdjustments)
  i1260.m_SecondGlyph = i1261[3]
  i1260.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1261[4], i1260.m_SecondGlyphAdjustments)
  i1260.m_IgnoreSpacingAdjustments = !!i1261[5]
  return i1260
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1263 = data
  i1262.m_FaceIndex = i1263[0]
  i1262.m_FamilyName = i1263[1]
  i1262.m_StyleName = i1263[2]
  i1262.m_PointSize = i1263[3]
  i1262.m_Scale = i1263[4]
  i1262.m_UnitsPerEM = i1263[5]
  i1262.m_LineHeight = i1263[6]
  i1262.m_AscentLine = i1263[7]
  i1262.m_CapLine = i1263[8]
  i1262.m_MeanLine = i1263[9]
  i1262.m_Baseline = i1263[10]
  i1262.m_DescentLine = i1263[11]
  i1262.m_SuperscriptOffset = i1263[12]
  i1262.m_SuperscriptSize = i1263[13]
  i1262.m_SubscriptOffset = i1263[14]
  i1262.m_SubscriptSize = i1263[15]
  i1262.m_UnderlineOffset = i1263[16]
  i1262.m_UnderlineThickness = i1263[17]
  i1262.m_StrikethroughOffset = i1263[18]
  i1262.m_StrikethroughThickness = i1263[19]
  i1262.m_TabWidth = i1263[20]
  return i1262
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1264 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 2, i1266, '')
  }
  i1264.atlasAssets = i1266
  i1264.scale = i1265[1]
  request.r(i1265[2], i1265[3], 0, i1264, 'skeletonJSON')
  i1264.isUpgradingBlendModeMaterials = !!i1265[4]
  i1264.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1265[5], i1264.blendModeMaterials)
  var i1269 = i1265[6]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1269.length; i += 2) {
  request.r(i1269[i + 0], i1269[i + 1], 1, i1268, '')
  }
  i1264.skeletonDataModifiers = i1268
  var i1271 = i1265[7]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( i1271[i + 0] );
  }
  i1264.fromAnimation = i1270
  var i1273 = i1265[8]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1264.toAnimation = i1272
  i1264.duration = i1265[9]
  i1264.defaultMix = i1265[10]
  request.r(i1265[11], i1265[12], 0, i1264, 'controller')
  return i1264
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1276 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1277 = data
  i1276.applyAdditiveMaterial = !!i1277[0]
  var i1279 = i1277[1]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1279[i + 0]));
  }
  i1276.additiveMaterials = i1278
  var i1281 = i1277[2]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1281[i + 0]));
  }
  i1276.multiplyMaterials = i1280
  var i1283 = i1277[3]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1283[i + 0]));
  }
  i1276.screenMaterials = i1282
  i1276.requiresBlendModeMaterials = !!i1277[4]
  return i1276
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1286 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1287 = data
  i1286.pageName = i1287[0]
  request.r(i1287[1], i1287[2], 0, i1286, 'material')
  return i1286
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1290 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'atlasFile')
  var i1293 = i1291[2]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 2, i1292, '')
  }
  i1290.materials = i1292
  return i1290
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1295 = data
  i1294.useSafeMode = !!i1295[0]
  i1294.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1295[1], i1294.safeModeOptions)
  i1294.timeScale = i1295[2]
  i1294.unscaledTimeScale = i1295[3]
  i1294.useSmoothDeltaTime = !!i1295[4]
  i1294.maxSmoothUnscaledTime = i1295[5]
  i1294.rewindCallbackMode = i1295[6]
  i1294.showUnityEditorReport = !!i1295[7]
  i1294.logBehaviour = i1295[8]
  i1294.drawGizmos = !!i1295[9]
  i1294.defaultRecyclable = !!i1295[10]
  i1294.defaultAutoPlay = i1295[11]
  i1294.defaultUpdateType = i1295[12]
  i1294.defaultTimeScaleIndependent = !!i1295[13]
  i1294.defaultEaseType = i1295[14]
  i1294.defaultEaseOvershootOrAmplitude = i1295[15]
  i1294.defaultEasePeriod = i1295[16]
  i1294.defaultAutoKill = !!i1295[17]
  i1294.defaultLoopType = i1295[18]
  i1294.debugMode = !!i1295[19]
  i1294.debugStoreTargetId = !!i1295[20]
  i1294.showPreviewPanel = !!i1295[21]
  i1294.storeSettingsLocation = i1295[22]
  i1294.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1295[23], i1294.modules)
  i1294.createASMDEF = !!i1295[24]
  i1294.showPlayingTweens = !!i1295[25]
  i1294.showPausedTweens = !!i1295[26]
  return i1294
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1296 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1297 = data
  i1296.logBehaviour = i1297[0]
  i1296.nestedTweenFailureBehaviour = i1297[1]
  return i1296
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1298 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1299 = data
  i1298.showPanel = !!i1299[0]
  i1298.audioEnabled = !!i1299[1]
  i1298.physicsEnabled = !!i1299[2]
  i1298.physics2DEnabled = !!i1299[3]
  i1298.spriteEnabled = !!i1299[4]
  i1298.uiEnabled = !!i1299[5]
  i1298.uiToolkitEnabled = !!i1299[6]
  i1298.textMeshProEnabled = !!i1299[7]
  i1298.tk2DEnabled = !!i1299[8]
  i1298.deAudioEnabled = !!i1299[9]
  i1298.deUnityExtendedEnabled = !!i1299[10]
  i1298.epoOutlineEnabled = !!i1299[11]
  return i1298
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Settings' )
  var i1301 = data
  i1300.assetVersion = i1301[0]
  i1300.m_TextWrappingMode = i1301[1]
  i1300.m_enableKerning = !!i1301[2]
  var i1303 = i1301[3]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(i1303[i + 0]);
  }
  i1300.m_ActiveFontFeatures = i1302
  i1300.m_enableExtraPadding = !!i1301[4]
  i1300.m_enableTintAllSprites = !!i1301[5]
  i1300.m_enableParseEscapeCharacters = !!i1301[6]
  i1300.m_EnableRaycastTarget = !!i1301[7]
  i1300.m_GetFontFeaturesAtRuntime = !!i1301[8]
  i1300.m_missingGlyphCharacter = i1301[9]
  i1300.m_ClearDynamicDataOnBuild = !!i1301[10]
  i1300.m_warningsDisabled = !!i1301[11]
  request.r(i1301[12], i1301[13], 0, i1300, 'm_defaultFontAsset')
  i1300.m_defaultFontAssetPath = i1301[14]
  i1300.m_defaultFontSize = i1301[15]
  i1300.m_defaultAutoSizeMinRatio = i1301[16]
  i1300.m_defaultAutoSizeMaxRatio = i1301[17]
  i1300.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1301[18], i1301[19] )
  i1300.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1301[20], i1301[21] )
  i1300.m_autoSizeTextContainer = !!i1301[22]
  i1300.m_IsTextObjectScaleStatic = !!i1301[23]
  var i1305 = i1301[24]
  var i1304 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1305.length; i += 2) {
  request.r(i1305[i + 0], i1305[i + 1], 1, i1304, '')
  }
  i1300.m_fallbackFontAssets = i1304
  i1300.m_matchMaterialPreset = !!i1301[25]
  i1300.m_HideSubTextObjects = !!i1301[26]
  request.r(i1301[27], i1301[28], 0, i1300, 'm_defaultSpriteAsset')
  i1300.m_defaultSpriteAssetPath = i1301[29]
  i1300.m_enableEmojiSupport = !!i1301[30]
  i1300.m_MissingCharacterSpriteUnicode = i1301[31]
  var i1307 = i1301[32]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 1, i1306, '')
  }
  i1300.m_EmojiFallbackTextAssets = i1306
  i1300.m_defaultColorGradientPresetsPath = i1301[33]
  request.r(i1301[34], i1301[35], 0, i1300, 'm_defaultStyleSheet')
  i1300.m_StyleSheetsResourcePath = i1301[36]
  request.r(i1301[37], i1301[38], 0, i1300, 'm_leadingCharacters')
  request.r(i1301[39], i1301[40], 0, i1300, 'm_followingCharacters')
  i1300.m_UseModernHangulLineBreakingRules = !!i1301[41]
  return i1300
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'spriteSheet')
  var i1313 = i1311[2]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Sprite', i1313[i + 0]));
  }
  i1310.spriteInfoList = i1312
  var i1315 = i1311[3]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 1, i1314, '')
  }
  i1310.fallbackSpriteAssets = i1314
  var i1317 = i1311[4]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_SpriteCharacter', i1317[i + 0]));
  }
  i1310.m_SpriteCharacterTable = i1316
  var i1319 = i1311[5]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.TMP_SpriteGlyph', i1319[i + 0]));
  }
  i1310.m_GlyphTable = i1318
  i1310.m_Version = i1311[6]
  i1310.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1311[7], i1310.m_FaceInfo)
  request.r(i1311[8], i1311[9], 0, i1310, 'm_Material')
  return i1310
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.hashCode = i1323[1]
  i1322.unicode = i1323[2]
  i1322.pivot = new pc.Vec2( i1323[3], i1323[4] )
  request.r(i1323[5], i1323[6], 0, i1322, 'sprite')
  i1322.id = i1323[7]
  i1322.x = i1323[8]
  i1322.y = i1323[9]
  i1322.width = i1323[10]
  i1322.height = i1323[11]
  i1322.xOffset = i1323[12]
  i1322.yOffset = i1323[13]
  i1322.xAdvance = i1323[14]
  i1322.scale = i1323[15]
  return i1322
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1329 = data
  i1328.m_Name = i1329[0]
  i1328.m_ElementType = i1329[1]
  i1328.m_Unicode = i1329[2]
  i1328.m_GlyphIndex = i1329[3]
  i1328.m_Scale = i1329[4]
  return i1328
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'sprite')
  i1332.m_Index = i1333[2]
  i1332.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1333[3], i1332.m_Metrics)
  i1332.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1333[4], i1332.m_GlyphRect)
  i1332.m_Scale = i1333[5]
  i1332.m_AtlasIndex = i1333[6]
  i1332.m_ClassDefinitionType = i1333[7]
  return i1332
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1335 = data
  var i1337 = i1335[0]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_Style', i1337[i + 0]));
  }
  i1334.m_StyleList = i1336
  return i1334
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_Style' )
  var i1341 = data
  i1340.m_Name = i1341[0]
  i1340.m_HashCode = i1341[1]
  i1340.m_OpeningDefinition = i1341[2]
  i1340.m_ClosingDefinition = i1341[3]
  i1340.m_OpeningTagArray = i1341[4]
  i1340.m_ClosingTagArray = i1341[5]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1343 = data
  var i1345 = i1343[0]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1345[i + 0]) );
  }
  i1342.files = i1344
  i1342.componentToPrefabIds = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1349 = data
  i1348.path = i1349[0]
  request.r(i1349[1], i1349[2], 0, i1348, 'unityObject')
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1353[i + 0]) );
  }
  i1350.scriptsExecutionOrder = i1352
  var i1355 = i1351[1]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1355[i + 0]) );
  }
  i1350.sortingLayers = i1354
  var i1357 = i1351[2]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1357[i + 0]) );
  }
  i1350.cullingLayers = i1356
  i1350.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1351[3], i1350.timeSettings)
  i1350.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1351[4], i1350.physicsSettings)
  i1350.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1351[5], i1350.physics2DSettings)
  i1350.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1351[6], i1350.qualitySettings)
  i1350.enableRealtimeShadows = !!i1351[7]
  i1350.enableAutoInstancing = !!i1351[8]
  i1350.enableStaticBatching = !!i1351[9]
  i1350.enableDynamicBatching = !!i1351[10]
  i1350.lightmapEncodingQuality = i1351[11]
  i1350.desiredColorSpace = i1351[12]
  var i1359 = i1351[13]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( i1359[i + 0] );
  }
  i1350.allTags = i1358
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.value = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.name = i1367[1]
  i1366.value = i1367[2]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1371 = data
  i1370.id = i1371[0]
  i1370.name = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1373 = data
  i1372.fixedDeltaTime = i1373[0]
  i1372.maximumDeltaTime = i1373[1]
  i1372.timeScale = i1373[2]
  i1372.maximumParticleTimestep = i1373[3]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1375 = data
  i1374.gravity = new pc.Vec3( i1375[0], i1375[1], i1375[2] )
  i1374.defaultSolverIterations = i1375[3]
  i1374.bounceThreshold = i1375[4]
  i1374.autoSyncTransforms = !!i1375[5]
  i1374.autoSimulation = !!i1375[6]
  var i1377 = i1375[7]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1377[i + 0]) );
  }
  i1374.collisionMatrix = i1376
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1381 = data
  i1380.enabled = !!i1381[0]
  i1380.layerId = i1381[1]
  i1380.otherLayerId = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1383 = data
  request.r(i1383[0], i1383[1], 0, i1382, 'material')
  i1382.gravity = new pc.Vec2( i1383[2], i1383[3] )
  i1382.positionIterations = i1383[4]
  i1382.velocityIterations = i1383[5]
  i1382.velocityThreshold = i1383[6]
  i1382.maxLinearCorrection = i1383[7]
  i1382.maxAngularCorrection = i1383[8]
  i1382.maxTranslationSpeed = i1383[9]
  i1382.maxRotationSpeed = i1383[10]
  i1382.baumgarteScale = i1383[11]
  i1382.baumgarteTOIScale = i1383[12]
  i1382.timeToSleep = i1383[13]
  i1382.linearSleepTolerance = i1383[14]
  i1382.angularSleepTolerance = i1383[15]
  i1382.defaultContactOffset = i1383[16]
  i1382.autoSimulation = !!i1383[17]
  i1382.queriesHitTriggers = !!i1383[18]
  i1382.queriesStartInColliders = !!i1383[19]
  i1382.callbacksOnDisable = !!i1383[20]
  i1382.reuseCollisionCallbacks = !!i1383[21]
  i1382.autoSyncTransforms = !!i1383[22]
  var i1385 = i1383[23]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1385[i + 0]) );
  }
  i1382.collisionMatrix = i1384
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1389 = data
  i1388.enabled = !!i1389[0]
  i1388.layerId = i1389[1]
  i1388.otherLayerId = i1389[2]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1393[i + 0]) );
  }
  i1390.qualityLevels = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( i1395[i + 0] );
  }
  i1390.names = i1394
  i1390.shadows = i1391[2]
  i1390.anisotropicFiltering = i1391[3]
  i1390.antiAliasing = i1391[4]
  i1390.lodBias = i1391[5]
  i1390.shadowCascades = i1391[6]
  i1390.shadowDistance = i1391[7]
  i1390.shadowmaskMode = i1391[8]
  i1390.shadowProjection = i1391[9]
  i1390.shadowResolution = i1391[10]
  i1390.softParticles = !!i1391[11]
  i1390.softVegetation = !!i1391[12]
  i1390.activeColorSpace = i1391[13]
  i1390.desiredColorSpace = i1391[14]
  i1390.masterTextureLimit = i1391[15]
  i1390.maxQueuedFrames = i1391[16]
  i1390.particleRaycastBudget = i1391[17]
  i1390.pixelLightCount = i1391[18]
  i1390.realtimeReflectionProbes = !!i1391[19]
  i1390.shadowCascade2Split = i1391[20]
  i1390.shadowCascade4Split = new pc.Vec3( i1391[21], i1391[22], i1391[23] )
  i1390.streamingMipmapsActive = !!i1391[24]
  i1390.vSyncCount = i1391[25]
  i1390.asyncUploadBufferSize = i1391[26]
  i1390.asyncUploadTimeSlice = i1391[27]
  i1390.billboardsFaceCameraPosition = !!i1391[28]
  i1390.shadowNearPlaneOffset = i1391[29]
  i1390.streamingMipmapsMemoryBudget = i1391[30]
  i1390.maximumLODLevel = i1391[31]
  i1390.streamingMipmapsAddAllCameras = !!i1391[32]
  i1390.streamingMipmapsMaxLevelReduction = i1391[33]
  i1390.streamingMipmapsRenderersPerFrame = i1391[34]
  i1390.resolutionScalingFixedDPIFactor = i1391[35]
  i1390.streamingMipmapsMaxFileIORequests = i1391[36]
  i1390.currentQualityLevel = i1391[37]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1401 = data
  i1400.weight = i1401[0]
  i1400.vertices = i1401[1]
  i1400.normals = i1401[2]
  i1400.tangents = i1401[3]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1405 = data
  i1404.mode = i1405[0]
  i1404.parameter = i1405[1]
  i1404.threshold = i1405[2]
  return i1404
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1407 = data
  i1406.m_GlyphIndex = i1407[0]
  i1406.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1407[1], i1406.m_GlyphValueRecord)
  return i1406
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1409 = data
  i1408.m_XCoordinate = i1409[0]
  i1408.m_YCoordinate = i1409[1]
  return i1408
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1411 = data
  i1410.m_XPositionAdjustment = i1411[0]
  i1410.m_YPositionAdjustment = i1411[1]
  return i1410
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1413 = data
  i1412.xPlacement = i1413[0]
  i1412.yPlacement = i1413[1]
  i1412.xAdvance = i1413[2]
  i1412.yAdvance = i1413[3]
  return i1412
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1415 = data
  i1414.m_XPlacement = i1415[0]
  i1414.m_YPlacement = i1415[1]
  i1414.m_XAdvance = i1415[2]
  i1414.m_YAdvance = i1415[3]
  return i1414
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[32],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[32],"88":[46],"89":[90],"91":[90],"10":[9],"92":[93],"94":[95],"96":[46,45],"97":[95],"98":[97],"99":[95],"100":[95],"101":[102],"103":[102],"104":[95],"105":[9],"106":[16,9],"44":[46],"107":[16,9],"108":[14,46],"95":[46],"109":[46,45],"110":[67],"111":[74],"112":[113],"114":[102],"115":[40],"116":[32],"117":[118],"119":[38],"120":[10],"121":[9],"122":[46,9],"17":[9,16],"123":[9],"124":[16,9],"125":[46],"126":[16,9],"127":[9],"128":[129],"130":[129],"131":[129],"132":[9],"133":[9],"13":[10],"20":[16,9],"134":[9],"12":[10],"135":[9],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[9],"144":[16,9],"145":[9],"146":[9],"147":[9],"19":[9],"148":[16,9],"149":[9],"150":[38],"151":[38],"39":[38],"152":[38],"153":[32],"154":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","CameraController","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "11.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv711_GG";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4944";

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

Deserializers.buildID = "d387a918-fcc6-4f44-bd77-d7a8cd9bb1e0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

