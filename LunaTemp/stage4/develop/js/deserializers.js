var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointSpring' )
  var i707 = data
  i706.spring = i707[0]
  i706.damper = i707[1]
  i706.targetPosition = i707[2]
  return i706
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointMotor' )
  var i709 = data
  i708.m_TargetVelocity = i709[0]
  i708.m_Force = i709[1]
  i708.m_FreeSpin = i709[2]
  return i708
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointLimits' )
  var i711 = data
  i710.m_Min = i711[0]
  i710.m_Max = i711[1]
  i710.m_Bounciness = i711[2]
  i710.m_BounceMinVelocity = i711[3]
  i710.m_ContactDistance = i711[4]
  i710.minBounce = i711[5]
  i710.maxBounce = i711[6]
  return i710
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointDrive' )
  var i713 = data
  i712.m_PositionSpring = i713[0]
  i712.m_PositionDamper = i713[1]
  i712.m_MaximumForce = i713[2]
  i712.m_UseAcceleration = i713[3]
  return i712
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i715 = data
  i714.m_Spring = i715[0]
  i714.m_Damper = i715[1]
  return i714
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i717 = data
  i716.m_Limit = i717[0]
  i716.m_Bounciness = i717[1]
  i716.m_ContactDistance = i717[2]
  return i716
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i719 = data
  i718.m_ExtremumSlip = i719[0]
  i718.m_ExtremumValue = i719[1]
  i718.m_AsymptoteSlip = i719[2]
  i718.m_AsymptoteValue = i719[3]
  i718.m_Stiffness = i719[4]
  return i718
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i721 = data
  i720.m_LowerAngle = i721[0]
  i720.m_UpperAngle = i721[1]
  return i720
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i723 = data
  i722.m_MotorSpeed = i723[0]
  i722.m_MaximumMotorTorque = i723[1]
  return i722
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i725 = data
  i724.m_DampingRatio = i725[0]
  i724.m_Frequency = i725[1]
  i724.m_Angle = i725[2]
  return i724
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i727 = data
  i726.m_LowerTranslation = i727[0]
  i726.m_UpperTranslation = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i728 = root || new pc.UnityMaterial()
  var i729 = data
  i728.name = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'shader')
  i728.renderQueue = i729[3]
  i728.enableInstancing = !!i729[4]
  var i731 = i729[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i731[i + 0]) );
  }
  i728.floatParameters = i730
  var i733 = i729[6]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i733[i + 0]) );
  }
  i728.colorParameters = i732
  var i735 = i729[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i735[i + 0]) );
  }
  i728.vectorParameters = i734
  var i737 = i729[8]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i737[i + 0]) );
  }
  i728.textureParameters = i736
  var i739 = i729[9]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i739[i + 0]) );
  }
  i728.materialFlags = i738
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = new pc.Color(i747[1], i747[2], i747[3], i747[4])
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = new pc.Vec4( i751[1], i751[2], i751[3], i751[4] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'value')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i759 = data
  i758.name = i759[0]
  i758.enabled = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i761 = data
  i760.name = i761[0]
  i760.width = i761[1]
  i760.height = i761[2]
  i760.mipmapCount = i761[3]
  i760.anisoLevel = i761[4]
  i760.filterMode = i761[5]
  i760.hdr = !!i761[6]
  i760.format = i761[7]
  i760.wrapMode = i761[8]
  i760.alphaIsTransparency = !!i761[9]
  i760.alphaSource = i761[10]
  i760.graphicsFormat = i761[11]
  i760.sRGBTexture = !!i761[12]
  i760.desiredColorSpace = i761[13]
  i760.wrapU = i761[14]
  i760.wrapV = i761[15]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i763 = data
  i762.position = new pc.Vec3( i763[0], i763[1], i763[2] )
  i762.scale = new pc.Vec3( i763[3], i763[4], i763[5] )
  i762.rotation = new pc.Quat(i763[6], i763[7], i763[8], i763[9])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i765 = data
  i764.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i765[0], i764.main)
  i764.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i765[1], i764.colorBySpeed)
  i764.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i765[2], i764.colorOverLifetime)
  i764.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i765[3], i764.emission)
  i764.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i765[4], i764.rotationBySpeed)
  i764.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i765[5], i764.rotationOverLifetime)
  i764.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i765[6], i764.shape)
  i764.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i765[7], i764.sizeBySpeed)
  i764.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i765[8], i764.sizeOverLifetime)
  i764.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i765[9], i764.textureSheetAnimation)
  i764.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i765[10], i764.velocityOverLifetime)
  i764.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i765[11], i764.noise)
  i764.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i765[12], i764.inheritVelocity)
  i764.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i765[13], i764.forceOverLifetime)
  i764.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i765[14], i764.limitVelocityOverLifetime)
  i764.useAutoRandomSeed = !!i765[15]
  i764.randomSeed = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemMain()
  var i767 = data
  i766.duration = i767[0]
  i766.loop = !!i767[1]
  i766.prewarm = !!i767[2]
  i766.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.startDelay)
  i766.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.startLifetime)
  i766.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[5], i766.startSpeed)
  i766.startSize3D = !!i767[6]
  i766.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startSizeX)
  i766.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.startSizeY)
  i766.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.startSizeZ)
  i766.startRotation3D = !!i767[10]
  i766.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.startRotationX)
  i766.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[12], i766.startRotationY)
  i766.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[13], i766.startRotationZ)
  i766.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[14], i766.startColor)
  i766.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.gravityModifier)
  i766.simulationSpace = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'customSimulationSpace')
  i766.simulationSpeed = i767[19]
  i766.useUnscaledTime = !!i767[20]
  i766.scalingMode = i767[21]
  i766.playOnAwake = !!i767[22]
  i766.maxParticles = i767[23]
  i766.emitterVelocityMode = i767[24]
  i766.stopAction = i767[25]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i768 = root || new pc.MinMaxCurve()
  var i769 = data
  i768.mode = i769[0]
  i768.curveMin = new pc.AnimationCurve( { keys_flow: i769[1] } )
  i768.curveMax = new pc.AnimationCurve( { keys_flow: i769[2] } )
  i768.curveMultiplier = i769[3]
  i768.constantMin = i769[4]
  i768.constantMax = i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxGradient()
  var i771 = data
  i770.mode = i771[0]
  i770.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[1], i770.gradientMin)
  i770.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[2], i770.gradientMax)
  i770.colorMin = new pc.Color(i771[3], i771[4], i771[5], i771[6])
  i770.colorMax = new pc.Color(i771[7], i771[8], i771[9], i771[10])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i773 = data
  i772.mode = i773[0]
  var i775 = i773[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i775[i + 0]) );
  }
  i772.colorKeys = i774
  var i777 = i773[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i777[i + 0]) );
  }
  i772.alphaKeys = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  i778.range = new pc.Vec2( i779[2], i779[3] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i783 = data
  i782.color = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  i782.time = i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i787 = data
  i786.alpha = i787[0]
  i786.time = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemColorOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[1], i788.color)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemEmitter()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.rateOverTime)
  i790.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.rateOverDistance)
  var i793 = i791[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i793[i + 0]) );
  }
  i790.bursts = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemBurst()
  var i797 = data
  i796.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[0], i796.count)
  i796.cycleCount = i797[1]
  i796.minCount = i797[2]
  i796.maxCount = i797[3]
  i796.repeatInterval = i797[4]
  i796.time = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemRotationBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemShape()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.shapeType = i803[1]
  i802.randomDirectionAmount = i803[2]
  i802.sphericalDirectionAmount = i803[3]
  i802.randomPositionAmount = i803[4]
  i802.alignToDirection = !!i803[5]
  i802.radius = i803[6]
  i802.radiusMode = i803[7]
  i802.radiusSpread = i803[8]
  i802.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.radiusSpeed)
  i802.radiusThickness = i803[10]
  i802.angle = i803[11]
  i802.length = i803[12]
  i802.boxThickness = new pc.Vec3( i803[13], i803[14], i803[15] )
  i802.meshShapeType = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'mesh')
  request.r(i803[19], i803[20], 0, i802, 'meshRenderer')
  request.r(i803[21], i803[22], 0, i802, 'skinnedMeshRenderer')
  i802.useMeshMaterialIndex = !!i803[23]
  i802.meshMaterialIndex = i803[24]
  i802.useMeshColors = !!i803[25]
  i802.normalOffset = i803[26]
  i802.arc = i803[27]
  i802.arcMode = i803[28]
  i802.arcSpread = i803[29]
  i802.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[30], i802.arcSpeed)
  i802.donutRadius = i803[31]
  i802.position = new pc.Vec3( i803[32], i803[33], i803[34] )
  i802.rotation = new pc.Vec3( i803[35], i803[36], i803[37] )
  i802.scale = new pc.Vec3( i803[38], i803[39], i803[40] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemSizeBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.animation = i809[2]
  i808.numTilesX = i809[3]
  i808.numTilesY = i809[4]
  i808.useRandomRow = !!i809[5]
  i808.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[6], i808.frameOverTime)
  i808.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.startFrame)
  i808.cycleCount = i809[8]
  i808.rowIndex = i809[9]
  i808.flipU = i809[10]
  i808.flipV = i809[11]
  i808.spriteCount = i809[12]
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sprites = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.radial)
  i814.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[5], i814.speedModifier)
  i814.space = i815[6]
  i814.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.orbitalX)
  i814.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.orbitalY)
  i814.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.orbitalZ)
  i814.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[10], i814.orbitalOffsetX)
  i814.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[11], i814.orbitalOffsetY)
  i814.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[12], i814.orbitalOffsetZ)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemNoise()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.separateAxes = !!i817[1]
  i816.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.strengthX)
  i816.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.strengthY)
  i816.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.strengthZ)
  i816.frequency = i817[5]
  i816.damping = !!i817[6]
  i816.octaveCount = i817[7]
  i816.octaveMultiplier = i817[8]
  i816.octaveScale = i817[9]
  i816.quality = i817[10]
  i816.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.scrollSpeed)
  i816.scrollSpeedMultiplier = i817[12]
  i816.remapEnabled = !!i817[13]
  i816.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[14], i816.remapX)
  i816.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[15], i816.remapY)
  i816.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[16], i816.remapZ)
  i816.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[17], i816.positionAmount)
  i816.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[18], i816.rotationAmount)
  i816.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[19], i816.sizeAmount)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemInheritVelocity()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.mode = i819[1]
  i818.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.curve)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemForceOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.space = i821[4]
  i820.randomized = !!i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.limit)
  i822.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.limitX)
  i822.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.limitY)
  i822.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.limitZ)
  i822.dampen = i823[5]
  i822.separateAxes = !!i823[6]
  i822.space = i823[7]
  i822.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[8], i822.drag)
  i822.multiplyDragByParticleSize = !!i823[9]
  i822.multiplyDragByParticleVelocity = !!i823[10]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'mesh')
  i824.meshCount = i825[2]
  i824.activeVertexStreamsCount = i825[3]
  i824.alignment = i825[4]
  i824.renderMode = i825[5]
  i824.sortMode = i825[6]
  i824.lengthScale = i825[7]
  i824.velocityScale = i825[8]
  i824.cameraVelocityScale = i825[9]
  i824.normalDirection = i825[10]
  i824.sortingFudge = i825[11]
  i824.minParticleSize = i825[12]
  i824.maxParticleSize = i825[13]
  i824.pivot = new pc.Vec3( i825[14], i825[15], i825[16] )
  request.r(i825[17], i825[18], 0, i824, 'trailMaterial')
  i824.applyActiveColorSpace = !!i825[19]
  i824.enabled = !!i825[20]
  request.r(i825[21], i825[22], 0, i824, 'sharedMaterial')
  var i827 = i825[23]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[24]
  i824.shadowCastingMode = i825[25]
  i824.sortingLayerID = i825[26]
  i824.sortingOrder = i825[27]
  i824.lightmapIndex = i825[28]
  i824.lightmapSceneIndex = i825[29]
  i824.lightmapScaleOffset = new pc.Vec4( i825[30], i825[31], i825[32], i825[33] )
  i824.lightProbeUsage = i825[34]
  i824.reflectionProbeUsage = i825[35]
  return i824
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i830 = root || request.c( 'MergeEffect' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'tf')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i833 = data
  i832.name = i833[0]
  i832.tagId = i833[1]
  i832.enabled = !!i833[2]
  i832.isStatic = !!i833[3]
  i832.layer = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i835 = data
  i834.name = i835[0]
  i834.halfPrecision = !!i835[1]
  i834.useSimplification = !!i835[2]
  i834.useUInt32IndexFormat = !!i835[3]
  i834.vertexCount = i835[4]
  i834.aabb = i835[5]
  var i837 = i835[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( !!i837[i + 0] );
  }
  i834.streams = i836
  i834.vertices = i835[7]
  var i839 = i835[8]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i839[i + 0]) );
  }
  i834.subMeshes = i838
  var i841 = i835[9]
  var i840 = []
  for(var i = 0; i < i841.length; i += 16) {
    i840.push( new pc.Mat4().setData(i841[i + 0], i841[i + 1], i841[i + 2], i841[i + 3],  i841[i + 4], i841[i + 5], i841[i + 6], i841[i + 7],  i841[i + 8], i841[i + 9], i841[i + 10], i841[i + 11],  i841[i + 12], i841[i + 13], i841[i + 14], i841[i + 15]) );
  }
  i834.bindposes = i840
  var i843 = i835[10]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i843[i + 0]) );
  }
  i834.blendShapes = i842
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i849 = data
  i848.triangles = i849[0]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i855 = data
  i854.name = i855[0]
  var i857 = i855[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i857[i + 0]) );
  }
  i854.frames = i856
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i859 = data
  i858.name = i859[0]
  i858.index = i859[1]
  i858.startup = !!i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i861 = data
  i860.pivot = new pc.Vec2( i861[0], i861[1] )
  i860.anchorMin = new pc.Vec2( i861[2], i861[3] )
  i860.anchorMax = new pc.Vec2( i861[4], i861[5] )
  i860.sizeDelta = new pc.Vec2( i861[6], i861[7] )
  i860.anchoredPosition3D = new pc.Vec3( i861[8], i861[9], i861[10] )
  i860.rotation = new pc.Quat(i861[11], i861[12], i861[13], i861[14])
  i860.scale = new pc.Vec3( i861[15], i861[16], i861[17] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i863 = data
  i862.planeDistance = i863[0]
  i862.referencePixelsPerUnit = i863[1]
  i862.isFallbackOverlay = !!i863[2]
  i862.renderMode = i863[3]
  i862.renderOrder = i863[4]
  i862.sortingLayerName = i863[5]
  i862.sortingOrder = i863[6]
  i862.scaleFactor = i863[7]
  request.r(i863[8], i863[9], 0, i862, 'worldCamera')
  i862.overrideSorting = !!i863[10]
  i862.pixelPerfect = !!i863[11]
  i862.targetDisplay = i863[12]
  i862.overridePixelPerfect = !!i863[13]
  i862.enabled = !!i863[14]
  return i862
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i865 = data
  i864.m_UiScaleMode = i865[0]
  i864.m_ReferencePixelsPerUnit = i865[1]
  i864.m_ScaleFactor = i865[2]
  i864.m_ReferenceResolution = new pc.Vec2( i865[3], i865[4] )
  i864.m_ScreenMatchMode = i865[5]
  i864.m_MatchWidthOrHeight = i865[6]
  i864.m_PhysicalUnit = i865[7]
  i864.m_FallbackScreenDPI = i865[8]
  i864.m_DefaultSpriteDPI = i865[9]
  i864.m_DynamicPixelsPerUnit = i865[10]
  i864.m_PresetInfoIsWorld = !!i865[11]
  return i864
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i867 = data
  i866.m_IgnoreReversedGraphics = !!i867[0]
  i866.m_BlockingObjects = i867[1]
  i866.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i867[2] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'animatorController')
  request.r(i869[2], i869[3], 0, i868, 'avatar')
  i868.updateMode = i869[4]
  i868.hasTransformHierarchy = !!i869[5]
  i868.applyRootMotion = !!i869[6]
  var i871 = i869[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.humanBones = i870
  i868.enabled = !!i869[8]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i875 = data
  i874.cullTransparentMesh = !!i875[0]
  return i874
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i876 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i877 = data
  i876.m_hasFontAssetChanged = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'm_baseMaterial')
  i876.m_maskOffset = new pc.Vec4( i877[3], i877[4], i877[5], i877[6] )
  i876.m_text = i877[7]
  i876.m_isRightToLeft = !!i877[8]
  request.r(i877[9], i877[10], 0, i876, 'm_fontAsset')
  request.r(i877[11], i877[12], 0, i876, 'm_sharedMaterial')
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.m_fontSharedMaterials = i878
  request.r(i877[14], i877[15], 0, i876, 'm_fontMaterial')
  var i881 = i877[16]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i876.m_fontMaterials = i880
  i876.m_fontColor32 = UnityEngine.Color32.ConstructColor(i877[17], i877[18], i877[19], i877[20])
  i876.m_fontColor = new pc.Color(i877[21], i877[22], i877[23], i877[24])
  i876.m_enableVertexGradient = !!i877[25]
  i876.m_colorMode = i877[26]
  i876.m_fontColorGradient = request.d('TMPro.VertexGradient', i877[27], i876.m_fontColorGradient)
  request.r(i877[28], i877[29], 0, i876, 'm_fontColorGradientPreset')
  request.r(i877[30], i877[31], 0, i876, 'm_spriteAsset')
  i876.m_tintAllSprites = !!i877[32]
  request.r(i877[33], i877[34], 0, i876, 'm_StyleSheet')
  i876.m_TextStyleHashCode = i877[35]
  i876.m_overrideHtmlColors = !!i877[36]
  i876.m_faceColor = UnityEngine.Color32.ConstructColor(i877[37], i877[38], i877[39], i877[40])
  i876.m_fontSize = i877[41]
  i876.m_fontSizeBase = i877[42]
  i876.m_fontWeight = i877[43]
  i876.m_enableAutoSizing = !!i877[44]
  i876.m_fontSizeMin = i877[45]
  i876.m_fontSizeMax = i877[46]
  i876.m_fontStyle = i877[47]
  i876.m_HorizontalAlignment = i877[48]
  i876.m_VerticalAlignment = i877[49]
  i876.m_textAlignment = i877[50]
  i876.m_characterSpacing = i877[51]
  i876.m_wordSpacing = i877[52]
  i876.m_lineSpacing = i877[53]
  i876.m_lineSpacingMax = i877[54]
  i876.m_paragraphSpacing = i877[55]
  i876.m_charWidthMaxAdj = i877[56]
  i876.m_TextWrappingMode = i877[57]
  i876.m_wordWrappingRatios = i877[58]
  i876.m_overflowMode = i877[59]
  request.r(i877[60], i877[61], 0, i876, 'm_linkedTextComponent')
  request.r(i877[62], i877[63], 0, i876, 'parentLinkedComponent')
  i876.m_enableKerning = !!i877[64]
  var i883 = i877[65]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(i883[i + 0]);
  }
  i876.m_ActiveFontFeatures = i882
  i876.m_enableExtraPadding = !!i877[66]
  i876.checkPaddingRequired = !!i877[67]
  i876.m_isRichText = !!i877[68]
  i876.m_parseCtrlCharacters = !!i877[69]
  i876.m_isOrthographic = !!i877[70]
  i876.m_isCullingEnabled = !!i877[71]
  i876.m_horizontalMapping = i877[72]
  i876.m_verticalMapping = i877[73]
  i876.m_uvLineOffset = i877[74]
  i876.m_geometrySortingOrder = i877[75]
  i876.m_IsTextObjectScaleStatic = !!i877[76]
  i876.m_VertexBufferAutoSizeReduction = !!i877[77]
  i876.m_useMaxVisibleDescender = !!i877[78]
  i876.m_pageToDisplay = i877[79]
  i876.m_margin = new pc.Vec4( i877[80], i877[81], i877[82], i877[83] )
  i876.m_isUsingLegacyAnimationComponent = !!i877[84]
  i876.m_isVolumetricText = !!i877[85]
  request.r(i877[86], i877[87], 0, i876, 'm_Material')
  i876.m_EmojiFallbackSupport = !!i877[88]
  i876.m_Maskable = !!i877[89]
  i876.m_Color = new pc.Color(i877[90], i877[91], i877[92], i877[93])
  i876.m_RaycastTarget = !!i877[94]
  i876.m_RaycastPadding = new pc.Vec4( i877[95], i877[96], i877[97], i877[98] )
  return i876
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i884 = root || request.c( 'TMPro.VertexGradient' )
  var i885 = data
  i884.topLeft = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.topRight = new pc.Color(i885[4], i885[5], i885[6], i885[7])
  i884.bottomLeft = new pc.Color(i885[8], i885[9], i885[10], i885[11])
  i884.bottomRight = new pc.Color(i885[12], i885[13], i885[14], i885[15])
  return i884
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i888 = root || request.c( 'UnityEngine.UI.Slider' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'm_FillRect')
  request.r(i889[2], i889[3], 0, i888, 'm_HandleRect')
  i888.m_Direction = i889[4]
  i888.m_MinValue = i889[5]
  i888.m_MaxValue = i889[6]
  i888.m_WholeNumbers = !!i889[7]
  i888.m_Value = i889[8]
  i888.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i889[9], i888.m_OnValueChanged)
  i888.m_Navigation = request.d('UnityEngine.UI.Navigation', i889[10], i888.m_Navigation)
  i888.m_Transition = i889[11]
  i888.m_Colors = request.d('UnityEngine.UI.ColorBlock', i889[12], i888.m_Colors)
  i888.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i889[13], i888.m_SpriteState)
  i888.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i889[14], i888.m_AnimationTriggers)
  i888.m_Interactable = !!i889[15]
  request.r(i889[16], i889[17], 0, i888, 'm_TargetGraphic')
  return i888
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i891 = data
  i890.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i891[0], i890.m_PersistentCalls)
  return i890
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('UnityEngine.Events.PersistentCall', i895[i + 0]));
  }
  i892.m_Calls = i894
  return i892
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_Target')
  i898.m_TargetAssemblyTypeName = i899[2]
  i898.m_MethodName = i899[3]
  i898.m_Mode = i899[4]
  i898.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i899[5], i898.m_Arguments)
  i898.m_CallState = i899[6]
  return i898
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i901 = data
  i900.m_Mode = i901[0]
  i900.m_WrapAround = !!i901[1]
  request.r(i901[2], i901[3], 0, i900, 'm_SelectOnUp')
  request.r(i901[4], i901[5], 0, i900, 'm_SelectOnDown')
  request.r(i901[6], i901[7], 0, i900, 'm_SelectOnLeft')
  request.r(i901[8], i901[9], 0, i900, 'm_SelectOnRight')
  return i900
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i903 = data
  i902.m_NormalColor = new pc.Color(i903[0], i903[1], i903[2], i903[3])
  i902.m_HighlightedColor = new pc.Color(i903[4], i903[5], i903[6], i903[7])
  i902.m_PressedColor = new pc.Color(i903[8], i903[9], i903[10], i903[11])
  i902.m_SelectedColor = new pc.Color(i903[12], i903[13], i903[14], i903[15])
  i902.m_DisabledColor = new pc.Color(i903[16], i903[17], i903[18], i903[19])
  i902.m_ColorMultiplier = i903[20]
  i902.m_FadeDuration = i903[21]
  return i902
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'm_HighlightedSprite')
  request.r(i905[2], i905[3], 0, i904, 'm_PressedSprite')
  request.r(i905[4], i905[5], 0, i904, 'm_SelectedSprite')
  request.r(i905[6], i905[7], 0, i904, 'm_DisabledSprite')
  return i904
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i907 = data
  i906.m_NormalTrigger = i907[0]
  i906.m_HighlightedTrigger = i907[1]
  i906.m_PressedTrigger = i907[2]
  i906.m_SelectedTrigger = i907[3]
  i906.m_DisabledTrigger = i907[4]
  return i906
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Image' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_Sprite')
  i908.m_Type = i909[2]
  i908.m_PreserveAspect = !!i909[3]
  i908.m_FillCenter = !!i909[4]
  i908.m_FillMethod = i909[5]
  i908.m_FillAmount = i909[6]
  i908.m_FillClockwise = !!i909[7]
  i908.m_FillOrigin = i909[8]
  i908.m_UseSpriteMesh = !!i909[9]
  i908.m_PixelsPerUnitMultiplier = i909[10]
  request.r(i909[11], i909[12], 0, i908, 'm_Material')
  i908.m_Maskable = !!i909[13]
  i908.m_Color = new pc.Color(i909[14], i909[15], i909[16], i909[17])
  i908.m_RaycastTarget = !!i909[18]
  i908.m_RaycastPadding = new pc.Vec4( i909[19], i909[20], i909[21], i909[22] )
  return i908
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Button' )
  var i911 = data
  i910.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i911[0], i910.m_OnClick)
  i910.m_Navigation = request.d('UnityEngine.UI.Navigation', i911[1], i910.m_Navigation)
  i910.m_Transition = i911[2]
  i910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i911[3], i910.m_Colors)
  i910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i911[4], i910.m_SpriteState)
  i910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i911[5], i910.m_AnimationTriggers)
  i910.m_Interactable = !!i911[6]
  request.r(i911[7], i911[8], 0, i910, 'm_TargetGraphic')
  return i910
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i913 = data
  i912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i913[0], i912.m_PersistentCalls)
  return i912
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_ObjectArgument')
  i914.m_ObjectArgumentAssemblyTypeName = i915[2]
  i914.m_IntArgument = i915[3]
  i914.m_FloatArgument = i915[4]
  i914.m_StringArgument = i915[5]
  i914.m_BoolArgument = !!i915[6]
  return i914
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i916 = root || request.c( 'Ply_Pool' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Ply_Pool+PoolAmount', i919[i + 0]) );
  }
  i916.poolAmounts = i918
  request.r(i917[1], i917[2], 0, i916, 'poolHolder')
  return i916
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i922 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i923 = data
  i922.type = i923[0]
  i922.amount = i923[1]
  request.r(i923[2], i923[3], 0, i922, 'gameUnit')
  return i922
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i924 = root || request.c( 'Ply_SoundManager' )
  var i925 = data
  var i927 = i925[0]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.audioClips = i926
  request.r(i925[1], i925[2], 0, i924, 'sound')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'clip')
  request.r(i931[2], i931[3], 0, i930, 'outputAudioMixerGroup')
  i930.playOnAwake = !!i931[4]
  i930.loop = !!i931[5]
  i930.time = i931[6]
  i930.volume = i931[7]
  i930.pitch = i931[8]
  i930.enabled = !!i931[9]
  return i930
}

Deserializers["GameManager"] = function (request, data, root) {
  var i932 = root || request.c( 'GameManager' )
  var i933 = data
  i932.isPlaying = !!i933[0]
  i932.isTutorial = !!i933[1]
  i932.isGotoStore = !!i933[2]
  i932.countMove = i933[3]
  i932.maxMove = i933[4]
  i932.startLayer = i933[5]
  i932.currentLayer = i933[6]
  request.r(i933[7], i933[8], 0, i932, 'mainBox')
  request.r(i933[9], i933[10], 0, i932, 'handTutorial')
  i932.tutorialDelay = i933[11]
  return i932
}

Deserializers["UIManager"] = function (request, data, root) {
  var i934 = root || request.c( 'UIManager' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'winUI')
  request.r(i935[2], i935[3], 0, i934, 'loseUI')
  request.r(i935[4], i935[5], 0, i934, 'tutorial')
  request.r(i935[6], i935[7], 0, i934, 'verticalUI')
  request.r(i935[8], i935[9], 0, i934, 'horizontalUI')
  request.r(i935[10], i935[11], 0, i934, 'downloadBtnVertical')
  request.r(i935[12], i935[13], 0, i934, 'dowloadBtnHorizontal')
  request.r(i935[14], i935[15], 0, i934, 'progressSlider')
  request.r(i935[16], i935[17], 0, i934, 'progressText')
  i934.maxProgressItems = i935[18]
  i934.startProgressItems = i935[19]
  i934.screenWidth = i935[20]
  i934.screenHeight = i935[21]
  i934.scaleHeightOnWidth = i935[22]
  i934.isVertical = !!i935[23]
  request.r(i935[24], i935[25], 0, i934, 'cam')
  i934.introZoomOutMultiplier = i935[26]
  i934.cameraZoomDuration = i935[27]
  i934.useContinuousScaling = !!i935[28]
  i934.baseOrthographicSize = i935[29]
  i934.baseAspect = i935[30]
  i934.landscapeSize = i935[31]
  i934.defaultPortraitSize = i935[32]
  var i937 = i935[33]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('ScreenScaleStep', i937[i + 0]));
  }
  i934.discreteScaleSteps = i936
  i934.usePerspectiveCamera = !!i935[34]
  request.r(i935[35], i935[36], 0, i934, 'perspectiveFocus')
  i934.perspectiveFocusDistance = i935[37]
  i934.perspectivePadding = i935[38]
  i934.fitRendererBounds = !!i935[39]
  request.r(i935[40], i935[41], 0, i934, 'boundsRoot')
  var i939 = i935[42]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i934.boundsRenderers = i938
  return i934
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i942 = root || request.c( 'ScreenScaleStep' )
  var i943 = data
  i942.heightOnWidthRatio = i943[0]
  i942.orthographicSize = i943[1]
  return i942
}

Deserializers["InputManager"] = function (request, data, root) {
  var i946 = root || request.c( 'InputManager' )
  var i947 = data
  i946.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i947[0] )
  i946.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i947[1] )
  i946.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i947[2] )
  i946.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i947[3] )
  i946.isDragging = !!i947[4]
  request.r(i947[5], i947[6], 0, i946, 'mainCamera')
  return i946
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i948 = root || request.c( 'ItemSetupTool' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'spritesParent')
  request.r(i949[2], i949[3], 0, i948, 'holdersParent')
  i948.shadowSuffix = i949[4]
  i948.holderPrefix = i949[5]
  i948.holdersParentName = i949[6]
  i948.colliderDepth = i949[7]
  i948.colliderSizeMultiplier = i949[8]
  i948.generatedShadowColor = new pc.Color(i949[9], i949[10], i949[11], i949[12])
  i948.generatedShadowLocalOffset = new pc.Vec3( i949[13], i949[14], i949[15] )
  i948.itemLayerName = i949[16]
  i948.holderLayerName = i949[17]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i951 = data
  i950.aspect = i951[0]
  i950.orthographic = !!i951[1]
  i950.orthographicSize = i951[2]
  i950.backgroundColor = new pc.Color(i951[3], i951[4], i951[5], i951[6])
  i950.nearClipPlane = i951[7]
  i950.farClipPlane = i951[8]
  i950.fieldOfView = i951[9]
  i950.depth = i951[10]
  i950.clearFlags = i951[11]
  i950.cullingMask = i951[12]
  i950.rect = i951[13]
  request.r(i951[14], i951[15], 0, i950, 'targetTexture')
  i950.usePhysicalProperties = !!i951[16]
  i950.focalLength = i951[17]
  i950.sensorSize = new pc.Vec2( i951[18], i951[19] )
  i950.lensShift = new pc.Vec2( i951[20], i951[21] )
  i950.gateFit = i951[22]
  i950.commandBufferCount = i951[23]
  i950.cameraType = i951[24]
  i950.enabled = !!i951[25]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i953 = data
  i952.type = i953[0]
  i952.color = new pc.Color(i953[1], i953[2], i953[3], i953[4])
  i952.cullingMask = i953[5]
  i952.intensity = i953[6]
  i952.range = i953[7]
  i952.spotAngle = i953[8]
  i952.shadows = i953[9]
  i952.shadowNormalBias = i953[10]
  i952.shadowBias = i953[11]
  i952.shadowStrength = i953[12]
  i952.shadowResolution = i953[13]
  i952.lightmapBakeType = i953[14]
  i952.renderMode = i953[15]
  request.r(i953[16], i953[17], 0, i952, 'cookie')
  i952.cookieSize = i953[18]
  i952.shadowNearPlane = i953[19]
  i952.occlusionMaskChannel = i953[20]
  i952.enabled = !!i953[21]
  return i952
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'm_FirstSelected')
  i954.m_sendNavigationEvents = !!i955[2]
  i954.m_DragThreshold = i955[3]
  return i954
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i957 = data
  i956.m_HorizontalAxis = i957[0]
  i956.m_VerticalAxis = i957[1]
  i956.m_SubmitButton = i957[2]
  i956.m_CancelButton = i957[3]
  i956.m_InputActionsPerSecond = i957[4]
  i956.m_RepeatDelay = i957[5]
  i956.m_ForceModuleActive = !!i957[6]
  i956.m_SendPointerHoverToParent = !!i957[7]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i959 = data
  i958.color = new pc.Color(i959[0], i959[1], i959[2], i959[3])
  request.r(i959[4], i959[5], 0, i958, 'sprite')
  i958.flipX = !!i959[6]
  i958.flipY = !!i959[7]
  i958.drawMode = i959[8]
  i958.size = new pc.Vec2( i959[9], i959[10] )
  i958.tileMode = i959[11]
  i958.adaptiveModeThreshold = i959[12]
  i958.maskInteraction = i959[13]
  i958.spriteSortPoint = i959[14]
  i958.enabled = !!i959[15]
  request.r(i959[16], i959[17], 0, i958, 'sharedMaterial')
  var i961 = i959[18]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.sharedMaterials = i960
  i958.receiveShadows = !!i959[19]
  i958.shadowCastingMode = i959[20]
  i958.sortingLayerID = i959[21]
  i958.sortingOrder = i959[22]
  i958.lightmapIndex = i959[23]
  i958.lightmapSceneIndex = i959[24]
  i958.lightmapScaleOffset = new pc.Vec4( i959[25], i959[26], i959[27], i959[28] )
  i958.lightProbeUsage = i959[29]
  i958.reflectionProbeUsage = i959[30]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i963 = data
  i962.center = new pc.Vec3( i963[0], i963[1], i963[2] )
  i962.radius = i963[3]
  i962.enabled = !!i963[4]
  i962.isTrigger = !!i963[5]
  request.r(i963[6], i963[7], 0, i962, 'material')
  return i962
}

Deserializers["Box"] = function (request, data, root) {
  var i964 = root || request.c( 'Box' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i964.dynamicItems = i966
  var i969 = i965[1]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i964.spawnTargets = i968
  i964.initialSpawnCount = i965[2]
  i964.revealDuration = i965[3]
  request.r(i965[4], i965[5], 0, i964, 'graphicController')
  return i964
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i974 = root || request.c( 'BoxGraphicController' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'skeletonAnimation')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'sharedMesh')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'additionalVertexStreams')
  i978.enabled = !!i979[2]
  request.r(i979[3], i979[4], 0, i978, 'sharedMaterial')
  var i981 = i979[5]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.sharedMaterials = i980
  i978.receiveShadows = !!i979[6]
  i978.shadowCastingMode = i979[7]
  i978.sortingLayerID = i979[8]
  i978.sortingOrder = i979[9]
  i978.lightmapIndex = i979[10]
  i978.lightmapSceneIndex = i979[11]
  i978.lightmapScaleOffset = new pc.Vec4( i979[12], i979[13], i979[14], i979[15] )
  i978.lightProbeUsage = i979[16]
  i978.reflectionProbeUsage = i979[17]
  return i978
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i982 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i983 = data
  i982.loop = !!i983[0]
  i982.timeScale = i983[1]
  request.r(i983[2], i983[3], 0, i982, 'skeletonDataAsset')
  i982.initialSkinName = i983[4]
  i982.fixPrefabOverrideViaMeshFilter = i983[5]
  i982.initialFlipX = !!i983[6]
  i982.initialFlipY = !!i983[7]
  i982.updateWhenInvisible = i983[8]
  i982.zSpacing = i983[9]
  i982.useClipping = !!i983[10]
  i982.immutableTriangles = !!i983[11]
  i982.pmaVertexColors = !!i983[12]
  i982.clearStateOnDisable = !!i983[13]
  i982.tintBlack = !!i983[14]
  i982.singleSubmesh = !!i983[15]
  i982.fixDrawOrder = !!i983[16]
  i982.addNormals = !!i983[17]
  i982.calculateTangents = !!i983[18]
  i982.maskInteraction = i983[19]
  i982.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i983[20], i982.maskMaterials)
  i982.disableRenderingOnOverride = !!i983[21]
  i982._animationName = i983[22]
  var i985 = i983[23]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i982.separatorSlotNames = i984
  return i982
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i986 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.materialsMaskDisabled = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i986.materialsInsideMask = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i986.materialsOutsideMask = i992
  return i986
}

Deserializers["Item"] = function (request, data, root) {
  var i996 = root || request.c( 'Item' )
  var i997 = data
  i996.placeSoundType = i997[0]
  i996.id = i997[1]
  i996.currentState = i997[2]
  i996.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i997[3] )
  request.r(i997[4], i997[5], 0, i996, 'correctHolderTransform')
  request.r(i997[6], i997[7], 0, i996, 'shadowOnHolder')
  i996.canShowShadowHint = !!i997[8]
  i996.waitingPosition = new pc.Vec3( i997[9], i997[10], i997[11] )
  request.r(i997[12], i997[13], 0, i996, 'spriteRenderer')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i999 = data
  i998.center = new pc.Vec3( i999[0], i999[1], i999[2] )
  i998.size = new pc.Vec3( i999[3], i999[4], i999[5] )
  i998.enabled = !!i999[6]
  i998.isTrigger = !!i999[7]
  request.r(i999[8], i999[9], 0, i998, 'material')
  return i998
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1000 = root || request.c( 'ItemHolder' )
  var i1001 = data
  i1000.id = i1001[0]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1003 = data
  i1002.ambientIntensity = i1003[0]
  i1002.reflectionIntensity = i1003[1]
  i1002.ambientMode = i1003[2]
  i1002.ambientLight = new pc.Color(i1003[3], i1003[4], i1003[5], i1003[6])
  i1002.ambientSkyColor = new pc.Color(i1003[7], i1003[8], i1003[9], i1003[10])
  i1002.ambientGroundColor = new pc.Color(i1003[11], i1003[12], i1003[13], i1003[14])
  i1002.ambientEquatorColor = new pc.Color(i1003[15], i1003[16], i1003[17], i1003[18])
  i1002.fogColor = new pc.Color(i1003[19], i1003[20], i1003[21], i1003[22])
  i1002.fogEndDistance = i1003[23]
  i1002.fogStartDistance = i1003[24]
  i1002.fogDensity = i1003[25]
  i1002.fog = !!i1003[26]
  request.r(i1003[27], i1003[28], 0, i1002, 'skybox')
  i1002.fogMode = i1003[29]
  var i1005 = i1003[30]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1005[i + 0]) );
  }
  i1002.lightmaps = i1004
  i1002.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1003[31], i1002.lightProbes)
  i1002.lightmapsMode = i1003[32]
  i1002.mixedBakeMode = i1003[33]
  i1002.environmentLightingMode = i1003[34]
  i1002.ambientProbe = new pc.SphericalHarmonicsL2(i1003[35])
  i1002.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1003[36])
  i1002.useReferenceAmbientProbe = !!i1003[37]
  request.r(i1003[38], i1003[39], 0, i1002, 'customReflection')
  request.r(i1003[40], i1003[41], 0, i1002, 'defaultReflection')
  i1002.defaultReflectionMode = i1003[42]
  i1002.defaultReflectionResolution = i1003[43]
  i1002.sunLightObjectId = i1003[44]
  i1002.pixelLightCount = i1003[45]
  i1002.defaultReflectionHDR = !!i1003[46]
  i1002.hasLightDataAsset = !!i1003[47]
  i1002.hasManualGenerate = !!i1003[48]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'lightmapColor')
  request.r(i1009[2], i1009[3], 0, i1008, 'lightmapDirection')
  request.r(i1009[4], i1009[5], 0, i1008, 'shadowMask')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1010 = root || new UnityEngine.LightProbes()
  var i1011 = data
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1021[i + 0]));
  }
  i1018.ShaderCompilationErrors = i1020
  i1018.name = i1019[1]
  i1018.guid = i1019[2]
  var i1023 = i1019[3]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1018.shaderDefinedKeywords = i1022
  var i1025 = i1019[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1025[i + 0]) );
  }
  i1018.passes = i1024
  var i1027 = i1019[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1027[i + 0]) );
  }
  i1018.usePasses = i1026
  var i1029 = i1019[6]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1029[i + 0]) );
  }
  i1018.defaultParameterValues = i1028
  request.r(i1019[7], i1019[8], 0, i1018, 'unityFallbackShader')
  i1018.readDepth = !!i1019[9]
  i1018.hasDepthOnlyPass = !!i1019[10]
  i1018.isCreatedByShaderGraph = !!i1019[11]
  i1018.disableBatching = !!i1019[12]
  i1018.compiled = !!i1019[13]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1033 = data
  i1032.shaderName = i1033[0]
  i1032.errorMessage = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1036 = root || new pc.UnityShaderPass()
  var i1037 = data
  i1036.id = i1037[0]
  i1036.subShaderIndex = i1037[1]
  i1036.name = i1037[2]
  i1036.passType = i1037[3]
  i1036.grabPassTextureName = i1037[4]
  i1036.usePass = !!i1037[5]
  i1036.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[6], i1036.zTest)
  i1036.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[7], i1036.zWrite)
  i1036.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[8], i1036.culling)
  i1036.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1037[9], i1036.blending)
  i1036.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1037[10], i1036.alphaBlending)
  i1036.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[11], i1036.colorWriteMask)
  i1036.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[12], i1036.offsetUnits)
  i1036.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[13], i1036.offsetFactor)
  i1036.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[14], i1036.stencilRef)
  i1036.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[15], i1036.stencilReadMask)
  i1036.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1037[16], i1036.stencilWriteMask)
  i1036.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1037[17], i1036.stencilOp)
  i1036.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1037[18], i1036.stencilOpFront)
  i1036.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1037[19], i1036.stencilOpBack)
  var i1039 = i1037[20]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1039[i + 0]) );
  }
  i1036.tags = i1038
  var i1041 = i1037[21]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1036.passDefinedKeywords = i1040
  var i1043 = i1037[22]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1043[i + 0]) );
  }
  i1036.passDefinedKeywordGroups = i1042
  var i1045 = i1037[23]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1045[i + 0]) );
  }
  i1036.variants = i1044
  var i1047 = i1037[24]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1047[i + 0]) );
  }
  i1036.excludedVariants = i1046
  i1036.hasDepthReader = !!i1037[25]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1049 = data
  i1048.val = i1049[0]
  i1048.name = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1051 = data
  i1050.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[0], i1050.src)
  i1050.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[1], i1050.dst)
  i1050.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[2], i1050.op)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1053 = data
  i1052.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[0], i1052.pass)
  i1052.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[1], i1052.fail)
  i1052.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[2], i1052.zFail)
  i1052.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1053[3], i1052.comp)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.value = i1057[1]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.keywords = i1062
  i1060.hasDiscard = !!i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1067 = data
  i1066.passId = i1067[0]
  i1066.subShaderIndex = i1067[1]
  var i1069 = i1067[2]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( i1069[i + 0] );
  }
  i1066.keywords = i1068
  i1066.vertexProgram = i1067[3]
  i1066.fragmentProgram = i1067[4]
  i1066.exportedForWebGl2 = !!i1067[5]
  i1066.readDepth = !!i1067[6]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'shader')
  i1072.pass = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.type = i1077[1]
  i1076.value = new pc.Vec4( i1077[2], i1077[3], i1077[4], i1077[5] )
  i1076.textureValue = i1077[6]
  i1076.shaderPropertyFlag = i1077[7]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1079 = data
  i1078.name = i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'texture')
  i1078.aabb = i1079[3]
  i1078.vertices = i1079[4]
  i1078.triangles = i1079[5]
  i1078.textureRect = UnityEngine.Rect.MinMaxRect(i1079[6], i1079[7], i1079[8], i1079[9])
  i1078.packedRect = UnityEngine.Rect.MinMaxRect(i1079[10], i1079[11], i1079[12], i1079[13])
  i1078.border = new pc.Vec4( i1079[14], i1079[15], i1079[16], i1079[17] )
  i1078.transparency = i1079[18]
  i1078.bounds = i1079[19]
  i1078.pixelsPerUnit = i1079[20]
  i1078.textureWidth = i1079[21]
  i1078.textureHeight = i1079[22]
  i1078.nativeSize = new pc.Vec2( i1079[23], i1079[24] )
  i1078.pivot = new pc.Vec2( i1079[25], i1079[26] )
  i1078.textureRectOffset = new pc.Vec2( i1079[27], i1079[28] )
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1081 = data
  i1080.name = i1081[0]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.wrapMode = i1083[1]
  i1082.isLooping = !!i1083[2]
  i1082.length = i1083[3]
  var i1085 = i1083[4]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1085[i + 0]) );
  }
  i1082.curves = i1084
  var i1087 = i1083[5]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1087[i + 0]) );
  }
  i1082.events = i1086
  i1082.halfPrecision = !!i1083[6]
  i1082._frameRate = i1083[7]
  i1082.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1083[8], i1082.localBounds)
  i1082.hasMuscleCurves = !!i1083[9]
  var i1089 = i1083[10]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1082.clipMuscleConstant = i1088
  i1082.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1083[11], i1082.clipBindingConstant)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1093 = data
  i1092.path = i1093[0]
  i1092.hash = i1093[1]
  i1092.componentType = i1093[2]
  i1092.property = i1093[3]
  i1092.keys = i1093[4]
  var i1095 = i1093[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1095[i + 0]) );
  }
  i1092.objectReferenceKeys = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1099 = data
  i1098.time = i1099[0]
  request.r(i1099[1], i1099[2], 0, i1098, 'value')
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1103 = data
  i1102.functionName = i1103[0]
  i1102.floatParameter = i1103[1]
  i1102.intParameter = i1103[2]
  i1102.stringParameter = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'objectReferenceParameter')
  i1102.time = i1103[6]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1105 = data
  i1104.center = new pc.Vec3( i1105[0], i1105[1], i1105[2] )
  i1104.extends = new pc.Vec3( i1105[3], i1105[4], i1105[5] )
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.genericBindings = i1110
  var i1113 = i1109[1]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1108.pptrCurveMapping = i1112
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1115 = data
  i1114.name = i1115[0]
  var i1117 = i1115[1]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1117[i + 0]) );
  }
  i1114.layers = i1116
  var i1119 = i1115[2]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1119[i + 0]) );
  }
  i1114.parameters = i1118
  i1114.animationClips = i1115[3]
  i1114.avatarUnsupported = i1115[4]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.defaultWeight = i1123[1]
  i1122.blendingMode = i1123[2]
  i1122.avatarMask = i1123[3]
  i1122.syncedLayerIndex = i1123[4]
  i1122.syncedLayerAffectsTiming = !!i1123[5]
  i1122.syncedLayers = i1123[6]
  i1122.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1123[7], i1122.stateMachine)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1125 = data
  i1124.id = i1125[0]
  i1124.name = i1125[1]
  i1124.path = i1125[2]
  var i1127 = i1125[3]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1127[i + 0]) );
  }
  i1124.states = i1126
  var i1129 = i1125[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1129[i + 0]) );
  }
  i1124.machines = i1128
  var i1131 = i1125[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1131[i + 0]) );
  }
  i1124.entryStateTransitions = i1130
  var i1133 = i1125[6]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1133[i + 0]) );
  }
  i1124.exitStateTransitions = i1132
  var i1135 = i1125[7]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1135[i + 0]) );
  }
  i1124.anyStateTransitions = i1134
  i1124.defaultStateId = i1125[8]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1139 = data
  i1138.id = i1139[0]
  i1138.name = i1139[1]
  i1138.cycleOffset = i1139[2]
  i1138.cycleOffsetParameter = i1139[3]
  i1138.cycleOffsetParameterActive = !!i1139[4]
  i1138.mirror = !!i1139[5]
  i1138.mirrorParameter = i1139[6]
  i1138.mirrorParameterActive = !!i1139[7]
  i1138.motionId = i1139[8]
  i1138.nameHash = i1139[9]
  i1138.fullPathHash = i1139[10]
  i1138.speed = i1139[11]
  i1138.speedParameter = i1139[12]
  i1138.speedParameterActive = !!i1139[13]
  i1138.tag = i1139[14]
  i1138.tagHash = i1139[15]
  i1138.writeDefaultValues = !!i1139[16]
  var i1141 = i1139[17]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 2, i1140, '')
  }
  i1138.behaviours = i1140
  var i1143 = i1139[18]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1143[i + 0]) );
  }
  i1138.transitions = i1142
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1149 = data
  i1148.fullPath = i1149[0]
  i1148.canTransitionToSelf = !!i1149[1]
  i1148.duration = i1149[2]
  i1148.exitTime = i1149[3]
  i1148.hasExitTime = !!i1149[4]
  i1148.hasFixedDuration = !!i1149[5]
  i1148.interruptionSource = i1149[6]
  i1148.offset = i1149[7]
  i1148.orderedInterruption = !!i1149[8]
  i1148.destinationStateId = i1149[9]
  i1148.isExit = !!i1149[10]
  i1148.mute = !!i1149[11]
  i1148.solo = !!i1149[12]
  var i1151 = i1149[13]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1151[i + 0]) );
  }
  i1148.conditions = i1150
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1157 = data
  i1156.destinationStateId = i1157[0]
  i1156.isExit = !!i1157[1]
  i1156.mute = !!i1157[2]
  i1156.solo = !!i1157[3]
  var i1159 = i1157[4]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1159[i + 0]) );
  }
  i1156.conditions = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1163 = data
  i1162.defaultBool = !!i1163[0]
  i1162.defaultFloat = i1163[1]
  i1162.defaultInt = i1163[2]
  i1162.name = i1163[3]
  i1162.nameHash = i1163[4]
  i1162.type = i1163[5]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.bytes64 = i1165[1]
  i1164.data = i1165[2]
  return i1164
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1167 = data
  i1166.normalStyle = i1167[0]
  i1166.normalSpacingOffset = i1167[1]
  i1166.boldStyle = i1167[2]
  i1166.boldSpacing = i1167[3]
  i1166.italicStyle = i1167[4]
  i1166.tabSize = i1167[5]
  request.r(i1167[6], i1167[7], 0, i1166, 'atlas')
  i1166.m_SourceFontFileGUID = i1167[8]
  i1166.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1167[9], i1166.m_CreationSettings)
  request.r(i1167[10], i1167[11], 0, i1166, 'm_SourceFontFile')
  i1166.m_SourceFontFilePath = i1167[12]
  i1166.m_AtlasPopulationMode = i1167[13]
  i1166.InternalDynamicOS = !!i1167[14]
  var i1169 = i1167[15]
  var i1168 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.add(request.d('UnityEngine.TextCore.Glyph', i1169[i + 0]));
  }
  i1166.m_GlyphTable = i1168
  var i1171 = i1167[16]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_Character', i1171[i + 0]));
  }
  i1166.m_CharacterTable = i1170
  var i1173 = i1167[17]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 2, i1172, '')
  }
  i1166.m_AtlasTextures = i1172
  i1166.m_AtlasTextureIndex = i1167[18]
  i1166.m_IsMultiAtlasTexturesEnabled = !!i1167[19]
  i1166.m_GetFontFeatures = !!i1167[20]
  i1166.m_ClearDynamicDataOnBuild = !!i1167[21]
  i1166.m_AtlasWidth = i1167[22]
  i1166.m_AtlasHeight = i1167[23]
  i1166.m_AtlasPadding = i1167[24]
  i1166.m_AtlasRenderMode = i1167[25]
  var i1175 = i1167[26]
  var i1174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.add(request.d('UnityEngine.TextCore.GlyphRect', i1175[i + 0]));
  }
  i1166.m_UsedGlyphRects = i1174
  var i1177 = i1167[27]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('UnityEngine.TextCore.GlyphRect', i1177[i + 0]));
  }
  i1166.m_FreeGlyphRects = i1176
  i1166.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1167[28], i1166.m_FontFeatureTable)
  i1166.m_ShouldReimportFontFeatures = !!i1167[29]
  var i1179 = i1167[30]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1166.m_FallbackFontAssetTable = i1178
  var i1181 = i1167[31]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('TMPro.TMP_FontWeightPair', i1181[i + 0]) );
  }
  i1166.m_FontWeightTable = i1180
  var i1183 = i1167[32]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('TMPro.TMP_FontWeightPair', i1183[i + 0]) );
  }
  i1166.fontWeights = i1182
  i1166.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1167[33], i1166.m_fontInfo)
  var i1185 = i1167[34]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Glyph', i1185[i + 0]));
  }
  i1166.m_glyphInfoList = i1184
  i1166.m_KerningTable = request.d('TMPro.KerningTable', i1167[35], i1166.m_KerningTable)
  var i1187 = i1167[36]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1166.fallbackFontAssets = i1186
  i1166.m_Version = i1167[37]
  i1166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1167[38], i1166.m_FaceInfo)
  request.r(i1167[39], i1167[40], 0, i1166, 'm_Material')
  return i1166
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1189 = data
  i1188.sourceFontFileName = i1189[0]
  i1188.sourceFontFileGUID = i1189[1]
  i1188.faceIndex = i1189[2]
  i1188.pointSizeSamplingMode = i1189[3]
  i1188.pointSize = i1189[4]
  i1188.padding = i1189[5]
  i1188.paddingMode = i1189[6]
  i1188.packingMode = i1189[7]
  i1188.atlasWidth = i1189[8]
  i1188.atlasHeight = i1189[9]
  i1188.characterSetSelectionMode = i1189[10]
  i1188.characterSequence = i1189[11]
  i1188.referencedFontAssetGUID = i1189[12]
  i1188.referencedTextAssetGUID = i1189[13]
  i1188.fontStyle = i1189[14]
  i1188.fontStyleModifier = i1189[15]
  i1188.renderMode = i1189[16]
  i1188.includeFontFeatures = !!i1189[17]
  return i1188
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1193 = data
  i1192.m_Index = i1193[0]
  i1192.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1193[1], i1192.m_Metrics)
  i1192.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1193[2], i1192.m_GlyphRect)
  i1192.m_Scale = i1193[3]
  i1192.m_AtlasIndex = i1193[4]
  i1192.m_ClassDefinitionType = i1193[5]
  return i1192
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1195 = data
  i1194.m_Width = i1195[0]
  i1194.m_Height = i1195[1]
  i1194.m_HorizontalBearingX = i1195[2]
  i1194.m_HorizontalBearingY = i1195[3]
  i1194.m_HorizontalAdvance = i1195[4]
  return i1194
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1197 = data
  i1196.m_X = i1197[0]
  i1196.m_Y = i1197[1]
  i1196.m_Width = i1197[2]
  i1196.m_Height = i1197[3]
  return i1196
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1200 = root || request.c( 'TMPro.TMP_Character' )
  var i1201 = data
  i1200.m_ElementType = i1201[0]
  i1200.m_Unicode = i1201[1]
  i1200.m_GlyphIndex = i1201[2]
  i1200.m_Scale = i1201[3]
  return i1200
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1207 = data
  var i1209 = i1207[0]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.MultipleSubstitutionRecord', i1209[i + 0]));
  }
  i1206.m_MultipleSubstitutionRecords = i1208
  var i1211 = i1207[1]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.add(request.d('TMPro.LigatureSubstitutionRecord', i1211[i + 0]));
  }
  i1206.m_LigatureSubstitutionRecords = i1210
  var i1213 = i1207[2]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1213[i + 0]));
  }
  i1206.m_GlyphPairAdjustmentRecords = i1212
  var i1215 = i1207[3]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1215[i + 0]));
  }
  i1206.m_MarkToBaseAdjustmentRecords = i1214
  var i1217 = i1207[4]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1217[i + 0]));
  }
  i1206.m_MarkToMarkAdjustmentRecords = i1216
  return i1206
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1221 = data
  i1220.m_TargetGlyphID = i1221[0]
  i1220.m_SubstituteGlyphIDs = i1221[1]
  return i1220
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1225 = data
  i1224.m_ComponentGlyphIDs = i1225[0]
  i1224.m_LigatureGlyphID = i1225[1]
  return i1224
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1229 = data
  i1228.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1229[0], i1228.m_FirstAdjustmentRecord)
  i1228.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1229[1], i1228.m_SecondAdjustmentRecord)
  i1228.m_FeatureLookupFlags = i1229[2]
  return i1228
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1233 = data
  i1232.m_BaseGlyphID = i1233[0]
  i1232.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1233[1], i1232.m_BaseGlyphAnchorPoint)
  i1232.m_MarkGlyphID = i1233[2]
  i1232.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1233[3], i1232.m_MarkPositionAdjustment)
  return i1232
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1237 = data
  i1236.m_BaseMarkGlyphID = i1237[0]
  i1236.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1237[1], i1236.m_BaseMarkGlyphAnchorPoint)
  i1236.m_CombiningMarkGlyphID = i1237[2]
  i1236.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1237[3], i1236.m_CombiningMarkPositionAdjustment)
  return i1236
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'regularTypeface')
  request.r(i1243[2], i1243[3], 0, i1242, 'italicTypeface')
  return i1242
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1245 = data
  i1244.Name = i1245[0]
  i1244.PointSize = i1245[1]
  i1244.Scale = i1245[2]
  i1244.CharacterCount = i1245[3]
  i1244.LineHeight = i1245[4]
  i1244.Baseline = i1245[5]
  i1244.Ascender = i1245[6]
  i1244.CapHeight = i1245[7]
  i1244.Descender = i1245[8]
  i1244.CenterLine = i1245[9]
  i1244.SuperscriptOffset = i1245[10]
  i1244.SubscriptOffset = i1245[11]
  i1244.SubSize = i1245[12]
  i1244.Underline = i1245[13]
  i1244.UnderlineThickness = i1245[14]
  i1244.strikethrough = i1245[15]
  i1244.strikethroughThickness = i1245[16]
  i1244.TabWidth = i1245[17]
  i1244.Padding = i1245[18]
  i1244.AtlasWidth = i1245[19]
  i1244.AtlasHeight = i1245[20]
  return i1244
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1249 = data
  i1248.id = i1249[0]
  i1248.x = i1249[1]
  i1248.y = i1249[2]
  i1248.width = i1249[3]
  i1248.height = i1249[4]
  i1248.xOffset = i1249[5]
  i1248.yOffset = i1249[6]
  i1248.xAdvance = i1249[7]
  i1248.scale = i1249[8]
  return i1248
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.KerningTable' )
  var i1251 = data
  var i1253 = i1251[0]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('TMPro.KerningPair', i1253[i + 0]));
  }
  i1250.kerningPairs = i1252
  return i1250
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.KerningPair' )
  var i1257 = data
  i1256.xOffset = i1257[0]
  i1256.m_FirstGlyph = i1257[1]
  i1256.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1257[2], i1256.m_FirstGlyphAdjustments)
  i1256.m_SecondGlyph = i1257[3]
  i1256.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1257[4], i1256.m_SecondGlyphAdjustments)
  i1256.m_IgnoreSpacingAdjustments = !!i1257[5]
  return i1256
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1259 = data
  i1258.m_FaceIndex = i1259[0]
  i1258.m_FamilyName = i1259[1]
  i1258.m_StyleName = i1259[2]
  i1258.m_PointSize = i1259[3]
  i1258.m_Scale = i1259[4]
  i1258.m_UnitsPerEM = i1259[5]
  i1258.m_LineHeight = i1259[6]
  i1258.m_AscentLine = i1259[7]
  i1258.m_CapLine = i1259[8]
  i1258.m_MeanLine = i1259[9]
  i1258.m_Baseline = i1259[10]
  i1258.m_DescentLine = i1259[11]
  i1258.m_SuperscriptOffset = i1259[12]
  i1258.m_SuperscriptSize = i1259[13]
  i1258.m_SubscriptOffset = i1259[14]
  i1258.m_SubscriptSize = i1259[15]
  i1258.m_UnderlineOffset = i1259[16]
  i1258.m_UnderlineThickness = i1259[17]
  i1258.m_StrikethroughOffset = i1259[18]
  i1258.m_StrikethroughThickness = i1259[19]
  i1258.m_TabWidth = i1259[20]
  return i1258
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1260 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 2, i1262, '')
  }
  i1260.atlasAssets = i1262
  i1260.scale = i1261[1]
  request.r(i1261[2], i1261[3], 0, i1260, 'skeletonJSON')
  i1260.isUpgradingBlendModeMaterials = !!i1261[4]
  i1260.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1261[5], i1260.blendModeMaterials)
  var i1265 = i1261[6]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 1, i1264, '')
  }
  i1260.skeletonDataModifiers = i1264
  var i1267 = i1261[7]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( i1267[i + 0] );
  }
  i1260.fromAnimation = i1266
  var i1269 = i1261[8]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1260.toAnimation = i1268
  i1260.duration = i1261[9]
  i1260.defaultMix = i1261[10]
  request.r(i1261[11], i1261[12], 0, i1260, 'controller')
  return i1260
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1272 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1273 = data
  i1272.applyAdditiveMaterial = !!i1273[0]
  var i1275 = i1273[1]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1275[i + 0]));
  }
  i1272.additiveMaterials = i1274
  var i1277 = i1273[2]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1277[i + 0]));
  }
  i1272.multiplyMaterials = i1276
  var i1279 = i1273[3]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1279[i + 0]));
  }
  i1272.screenMaterials = i1278
  i1272.requiresBlendModeMaterials = !!i1273[4]
  return i1272
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1282 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1283 = data
  i1282.pageName = i1283[0]
  request.r(i1283[1], i1283[2], 0, i1282, 'material')
  return i1282
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1286 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'atlasFile')
  var i1289 = i1287[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 2, i1288, '')
  }
  i1286.materials = i1288
  return i1286
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1291 = data
  i1290.useSafeMode = !!i1291[0]
  i1290.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1291[1], i1290.safeModeOptions)
  i1290.timeScale = i1291[2]
  i1290.unscaledTimeScale = i1291[3]
  i1290.useSmoothDeltaTime = !!i1291[4]
  i1290.maxSmoothUnscaledTime = i1291[5]
  i1290.rewindCallbackMode = i1291[6]
  i1290.showUnityEditorReport = !!i1291[7]
  i1290.logBehaviour = i1291[8]
  i1290.drawGizmos = !!i1291[9]
  i1290.defaultRecyclable = !!i1291[10]
  i1290.defaultAutoPlay = i1291[11]
  i1290.defaultUpdateType = i1291[12]
  i1290.defaultTimeScaleIndependent = !!i1291[13]
  i1290.defaultEaseType = i1291[14]
  i1290.defaultEaseOvershootOrAmplitude = i1291[15]
  i1290.defaultEasePeriod = i1291[16]
  i1290.defaultAutoKill = !!i1291[17]
  i1290.defaultLoopType = i1291[18]
  i1290.debugMode = !!i1291[19]
  i1290.debugStoreTargetId = !!i1291[20]
  i1290.showPreviewPanel = !!i1291[21]
  i1290.storeSettingsLocation = i1291[22]
  i1290.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1291[23], i1290.modules)
  i1290.createASMDEF = !!i1291[24]
  i1290.showPlayingTweens = !!i1291[25]
  i1290.showPausedTweens = !!i1291[26]
  return i1290
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1293 = data
  i1292.logBehaviour = i1293[0]
  i1292.nestedTweenFailureBehaviour = i1293[1]
  return i1292
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1295 = data
  i1294.showPanel = !!i1295[0]
  i1294.audioEnabled = !!i1295[1]
  i1294.physicsEnabled = !!i1295[2]
  i1294.physics2DEnabled = !!i1295[3]
  i1294.spriteEnabled = !!i1295[4]
  i1294.uiEnabled = !!i1295[5]
  i1294.uiToolkitEnabled = !!i1295[6]
  i1294.textMeshProEnabled = !!i1295[7]
  i1294.tk2DEnabled = !!i1295[8]
  i1294.deAudioEnabled = !!i1295[9]
  i1294.deUnityExtendedEnabled = !!i1295[10]
  i1294.epoOutlineEnabled = !!i1295[11]
  return i1294
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_Settings' )
  var i1297 = data
  i1296.assetVersion = i1297[0]
  i1296.m_TextWrappingMode = i1297[1]
  i1296.m_enableKerning = !!i1297[2]
  var i1299 = i1297[3]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(i1299[i + 0]);
  }
  i1296.m_ActiveFontFeatures = i1298
  i1296.m_enableExtraPadding = !!i1297[4]
  i1296.m_enableTintAllSprites = !!i1297[5]
  i1296.m_enableParseEscapeCharacters = !!i1297[6]
  i1296.m_EnableRaycastTarget = !!i1297[7]
  i1296.m_GetFontFeaturesAtRuntime = !!i1297[8]
  i1296.m_missingGlyphCharacter = i1297[9]
  i1296.m_ClearDynamicDataOnBuild = !!i1297[10]
  i1296.m_warningsDisabled = !!i1297[11]
  request.r(i1297[12], i1297[13], 0, i1296, 'm_defaultFontAsset')
  i1296.m_defaultFontAssetPath = i1297[14]
  i1296.m_defaultFontSize = i1297[15]
  i1296.m_defaultAutoSizeMinRatio = i1297[16]
  i1296.m_defaultAutoSizeMaxRatio = i1297[17]
  i1296.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1297[18], i1297[19] )
  i1296.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1297[20], i1297[21] )
  i1296.m_autoSizeTextContainer = !!i1297[22]
  i1296.m_IsTextObjectScaleStatic = !!i1297[23]
  var i1301 = i1297[24]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1301.length; i += 2) {
  request.r(i1301[i + 0], i1301[i + 1], 1, i1300, '')
  }
  i1296.m_fallbackFontAssets = i1300
  i1296.m_matchMaterialPreset = !!i1297[25]
  i1296.m_HideSubTextObjects = !!i1297[26]
  request.r(i1297[27], i1297[28], 0, i1296, 'm_defaultSpriteAsset')
  i1296.m_defaultSpriteAssetPath = i1297[29]
  i1296.m_enableEmojiSupport = !!i1297[30]
  i1296.m_MissingCharacterSpriteUnicode = i1297[31]
  var i1303 = i1297[32]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 1, i1302, '')
  }
  i1296.m_EmojiFallbackTextAssets = i1302
  i1296.m_defaultColorGradientPresetsPath = i1297[33]
  request.r(i1297[34], i1297[35], 0, i1296, 'm_defaultStyleSheet')
  i1296.m_StyleSheetsResourcePath = i1297[36]
  request.r(i1297[37], i1297[38], 0, i1296, 'm_leadingCharacters')
  request.r(i1297[39], i1297[40], 0, i1296, 'm_followingCharacters')
  i1296.m_UseModernHangulLineBreakingRules = !!i1297[41]
  return i1296
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'spriteSheet')
  var i1309 = i1307[2]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.add(request.d('TMPro.TMP_Sprite', i1309[i + 0]));
  }
  i1306.spriteInfoList = i1308
  var i1311 = i1307[3]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 1, i1310, '')
  }
  i1306.fallbackSpriteAssets = i1310
  var i1313 = i1307[4]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_SpriteCharacter', i1313[i + 0]));
  }
  i1306.m_SpriteCharacterTable = i1312
  var i1315 = i1307[5]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('TMPro.TMP_SpriteGlyph', i1315[i + 0]));
  }
  i1306.m_GlyphTable = i1314
  i1306.m_Version = i1307[6]
  i1306.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1307[7], i1306.m_FaceInfo)
  request.r(i1307[8], i1307[9], 0, i1306, 'm_Material')
  return i1306
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1319 = data
  i1318.name = i1319[0]
  i1318.hashCode = i1319[1]
  i1318.unicode = i1319[2]
  i1318.pivot = new pc.Vec2( i1319[3], i1319[4] )
  request.r(i1319[5], i1319[6], 0, i1318, 'sprite')
  i1318.id = i1319[7]
  i1318.x = i1319[8]
  i1318.y = i1319[9]
  i1318.width = i1319[10]
  i1318.height = i1319[11]
  i1318.xOffset = i1319[12]
  i1318.yOffset = i1319[13]
  i1318.xAdvance = i1319[14]
  i1318.scale = i1319[15]
  return i1318
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1325 = data
  i1324.m_Name = i1325[0]
  i1324.m_ElementType = i1325[1]
  i1324.m_Unicode = i1325[2]
  i1324.m_GlyphIndex = i1325[3]
  i1324.m_Scale = i1325[4]
  return i1324
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'sprite')
  i1328.m_Index = i1329[2]
  i1328.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1329[3], i1328.m_Metrics)
  i1328.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1329[4], i1328.m_GlyphRect)
  i1328.m_Scale = i1329[5]
  i1328.m_AtlasIndex = i1329[6]
  i1328.m_ClassDefinitionType = i1329[7]
  return i1328
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.TMP_Style', i1333[i + 0]));
  }
  i1330.m_StyleList = i1332
  return i1330
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_Style' )
  var i1337 = data
  i1336.m_Name = i1337[0]
  i1336.m_HashCode = i1337[1]
  i1336.m_OpeningDefinition = i1337[2]
  i1336.m_ClosingDefinition = i1337[3]
  i1336.m_OpeningTagArray = i1337[4]
  i1336.m_ClosingTagArray = i1337[5]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1341[i + 0]) );
  }
  i1338.files = i1340
  i1338.componentToPrefabIds = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1345 = data
  i1344.path = i1345[0]
  request.r(i1345[1], i1345[2], 0, i1344, 'unityObject')
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1347 = data
  var i1349 = i1347[0]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1349[i + 0]) );
  }
  i1346.scriptsExecutionOrder = i1348
  var i1351 = i1347[1]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1351[i + 0]) );
  }
  i1346.sortingLayers = i1350
  var i1353 = i1347[2]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1353[i + 0]) );
  }
  i1346.cullingLayers = i1352
  i1346.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1347[3], i1346.timeSettings)
  i1346.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1347[4], i1346.physicsSettings)
  i1346.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1347[5], i1346.physics2DSettings)
  i1346.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1347[6], i1346.qualitySettings)
  i1346.enableRealtimeShadows = !!i1347[7]
  i1346.enableAutoInstancing = !!i1347[8]
  i1346.enableStaticBatching = !!i1347[9]
  i1346.enableDynamicBatching = !!i1347[10]
  i1346.lightmapEncodingQuality = i1347[11]
  i1346.desiredColorSpace = i1347[12]
  var i1355 = i1347[13]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1346.allTags = i1354
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.value = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1363 = data
  i1362.id = i1363[0]
  i1362.name = i1363[1]
  i1362.value = i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.name = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1369 = data
  i1368.fixedDeltaTime = i1369[0]
  i1368.maximumDeltaTime = i1369[1]
  i1368.timeScale = i1369[2]
  i1368.maximumParticleTimestep = i1369[3]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1371 = data
  i1370.gravity = new pc.Vec3( i1371[0], i1371[1], i1371[2] )
  i1370.defaultSolverIterations = i1371[3]
  i1370.bounceThreshold = i1371[4]
  i1370.autoSyncTransforms = !!i1371[5]
  i1370.autoSimulation = !!i1371[6]
  var i1373 = i1371[7]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1373[i + 0]) );
  }
  i1370.collisionMatrix = i1372
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.layerId = i1377[1]
  i1376.otherLayerId = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'material')
  i1378.gravity = new pc.Vec2( i1379[2], i1379[3] )
  i1378.positionIterations = i1379[4]
  i1378.velocityIterations = i1379[5]
  i1378.velocityThreshold = i1379[6]
  i1378.maxLinearCorrection = i1379[7]
  i1378.maxAngularCorrection = i1379[8]
  i1378.maxTranslationSpeed = i1379[9]
  i1378.maxRotationSpeed = i1379[10]
  i1378.baumgarteScale = i1379[11]
  i1378.baumgarteTOIScale = i1379[12]
  i1378.timeToSleep = i1379[13]
  i1378.linearSleepTolerance = i1379[14]
  i1378.angularSleepTolerance = i1379[15]
  i1378.defaultContactOffset = i1379[16]
  i1378.autoSimulation = !!i1379[17]
  i1378.queriesHitTriggers = !!i1379[18]
  i1378.queriesStartInColliders = !!i1379[19]
  i1378.callbacksOnDisable = !!i1379[20]
  i1378.reuseCollisionCallbacks = !!i1379[21]
  i1378.autoSyncTransforms = !!i1379[22]
  var i1381 = i1379[23]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1389[i + 0]) );
  }
  i1386.qualityLevels = i1388
  var i1391 = i1387[1]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1386.names = i1390
  i1386.shadows = i1387[2]
  i1386.anisotropicFiltering = i1387[3]
  i1386.antiAliasing = i1387[4]
  i1386.lodBias = i1387[5]
  i1386.shadowCascades = i1387[6]
  i1386.shadowDistance = i1387[7]
  i1386.shadowmaskMode = i1387[8]
  i1386.shadowProjection = i1387[9]
  i1386.shadowResolution = i1387[10]
  i1386.softParticles = !!i1387[11]
  i1386.softVegetation = !!i1387[12]
  i1386.activeColorSpace = i1387[13]
  i1386.desiredColorSpace = i1387[14]
  i1386.masterTextureLimit = i1387[15]
  i1386.maxQueuedFrames = i1387[16]
  i1386.particleRaycastBudget = i1387[17]
  i1386.pixelLightCount = i1387[18]
  i1386.realtimeReflectionProbes = !!i1387[19]
  i1386.shadowCascade2Split = i1387[20]
  i1386.shadowCascade4Split = new pc.Vec3( i1387[21], i1387[22], i1387[23] )
  i1386.streamingMipmapsActive = !!i1387[24]
  i1386.vSyncCount = i1387[25]
  i1386.asyncUploadBufferSize = i1387[26]
  i1386.asyncUploadTimeSlice = i1387[27]
  i1386.billboardsFaceCameraPosition = !!i1387[28]
  i1386.shadowNearPlaneOffset = i1387[29]
  i1386.streamingMipmapsMemoryBudget = i1387[30]
  i1386.maximumLODLevel = i1387[31]
  i1386.streamingMipmapsAddAllCameras = !!i1387[32]
  i1386.streamingMipmapsMaxLevelReduction = i1387[33]
  i1386.streamingMipmapsRenderersPerFrame = i1387[34]
  i1386.resolutionScalingFixedDPIFactor = i1387[35]
  i1386.streamingMipmapsMaxFileIORequests = i1387[36]
  i1386.currentQualityLevel = i1387[37]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1397 = data
  i1396.weight = i1397[0]
  i1396.vertices = i1397[1]
  i1396.normals = i1397[2]
  i1396.tangents = i1397[3]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1401 = data
  i1400.mode = i1401[0]
  i1400.parameter = i1401[1]
  i1400.threshold = i1401[2]
  return i1400
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1403 = data
  i1402.m_GlyphIndex = i1403[0]
  i1402.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1403[1], i1402.m_GlyphValueRecord)
  return i1402
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1405 = data
  i1404.m_XCoordinate = i1405[0]
  i1404.m_YCoordinate = i1405[1]
  return i1404
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1407 = data
  i1406.m_XPositionAdjustment = i1407[0]
  i1406.m_YPositionAdjustment = i1407[1]
  return i1406
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1409 = data
  i1408.xPlacement = i1409[0]
  i1408.yPlacement = i1409[1]
  i1408.xAdvance = i1409[2]
  i1408.yAdvance = i1409[3]
  return i1408
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1411 = data
  i1410.m_XPlacement = i1411[0]
  i1410.m_YPlacement = i1411[1]
  i1410.m_XAdvance = i1411[2]
  i1410.m_YAdvance = i1411[3]
  return i1410
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[32],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[32],"87":[45],"88":[89],"90":[89],"10":[9],"91":[92],"93":[94],"95":[45,44],"96":[94],"97":[96],"98":[94],"99":[94],"100":[101],"102":[101],"103":[94],"104":[9],"105":[16,9],"43":[45],"106":[16,9],"107":[14,45],"94":[45],"108":[45,44],"109":[66],"110":[73],"111":[112],"113":[101],"114":[39],"115":[32],"116":[117],"118":[37],"119":[10],"120":[9],"121":[45,9],"17":[9,16],"122":[9],"123":[16,9],"124":[45],"125":[16,9],"126":[9],"127":[128],"129":[128],"130":[128],"131":[9],"132":[9],"13":[10],"20":[16,9],"133":[9],"12":[10],"134":[9],"135":[9],"136":[9],"137":[9],"138":[9],"139":[9],"140":[9],"141":[9],"142":[9],"143":[16,9],"144":[9],"145":[9],"146":[9],"19":[9],"147":[16,9],"148":[9],"149":[37],"150":[37],"38":[37],"151":[37],"152":[32],"153":[32]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","ItemSetupTool","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","UnityEngine.BoxCollider","ItemHolder","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv711_PrideMonth";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4942";

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

Deserializers.buildID = "543c09cc-a471-429f-8e83-af8f9d8c5bce";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

