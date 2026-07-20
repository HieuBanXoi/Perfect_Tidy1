var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointSpring' )
  var i699 = data
  i698.spring = i699[0]
  i698.damper = i699[1]
  i698.targetPosition = i699[2]
  return i698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor' )
  var i701 = data
  i700.m_TargetVelocity = i701[0]
  i700.m_Force = i701[1]
  i700.m_FreeSpin = i701[2]
  return i700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointLimits' )
  var i703 = data
  i702.m_Min = i703[0]
  i702.m_Max = i703[1]
  i702.m_Bounciness = i703[2]
  i702.m_BounceMinVelocity = i703[3]
  i702.m_ContactDistance = i703[4]
  i702.minBounce = i703[5]
  i702.maxBounce = i703[6]
  return i702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointDrive' )
  var i705 = data
  i704.m_PositionSpring = i705[0]
  i704.m_PositionDamper = i705[1]
  i704.m_MaximumForce = i705[2]
  i704.m_UseAcceleration = i705[3]
  return i704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i707 = data
  i706.m_Spring = i707[0]
  i706.m_Damper = i707[1]
  return i706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i709 = data
  i708.m_Limit = i709[0]
  i708.m_Bounciness = i709[1]
  i708.m_ContactDistance = i709[2]
  return i708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i711 = data
  i710.m_ExtremumSlip = i711[0]
  i710.m_ExtremumValue = i711[1]
  i710.m_AsymptoteSlip = i711[2]
  i710.m_AsymptoteValue = i711[3]
  i710.m_Stiffness = i711[4]
  return i710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i713 = data
  i712.m_LowerAngle = i713[0]
  i712.m_UpperAngle = i713[1]
  return i712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i715 = data
  i714.m_MotorSpeed = i715[0]
  i714.m_MaximumMotorTorque = i715[1]
  return i714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i717 = data
  i716.m_DampingRatio = i717[0]
  i716.m_Frequency = i717[1]
  i716.m_Angle = i717[2]
  return i716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i719 = data
  i718.m_LowerTranslation = i719[0]
  i718.m_UpperTranslation = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i720 = root || new pc.UnityMaterial()
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'shader')
  i720.renderQueue = i721[3]
  i720.enableInstancing = !!i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i723[i + 0]) );
  }
  i720.floatParameters = i722
  var i725 = i721[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i725[i + 0]) );
  }
  i720.colorParameters = i724
  var i727 = i721[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i727[i + 0]) );
  }
  i720.vectorParameters = i726
  var i729 = i721[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i729[i + 0]) );
  }
  i720.textureParameters = i728
  var i731 = i721[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i731[i + 0]) );
  }
  i720.materialFlags = i730
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Color(i739[1], i739[2], i739[3], i739[4])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Vec4( i743[1], i743[2], i743[3], i743[4] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'value')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i751 = data
  i750.name = i751[0]
  i750.enabled = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i753 = data
  i752.name = i753[0]
  i752.width = i753[1]
  i752.height = i753[2]
  i752.mipmapCount = i753[3]
  i752.anisoLevel = i753[4]
  i752.filterMode = i753[5]
  i752.hdr = !!i753[6]
  i752.format = i753[7]
  i752.wrapMode = i753[8]
  i752.alphaIsTransparency = !!i753[9]
  i752.alphaSource = i753[10]
  i752.graphicsFormat = i753[11]
  i752.sRGBTexture = !!i753[12]
  i752.desiredColorSpace = i753[13]
  i752.wrapU = i753[14]
  i752.wrapV = i753[15]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i755 = data
  i754.position = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.scale = new pc.Vec3( i755[3], i755[4], i755[5] )
  i754.rotation = new pc.Quat(i755[6], i755[7], i755[8], i755[9])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.startLifetime)
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startSpeed)
  i758.startSize3D = !!i759[6]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSizeX)
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.startSizeY)
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.startSizeZ)
  i758.startRotation3D = !!i759[10]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.startRotationX)
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startRotationY)
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[13], i758.startRotationZ)
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[14], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.gravityModifier)
  i758.simulationSpace = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[19]
  i758.useUnscaledTime = !!i759[20]
  i758.scalingMode = i759[21]
  i758.playOnAwake = !!i759[22]
  i758.maxParticles = i759[23]
  i758.emitterVelocityMode = i759[24]
  i758.stopAction = i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.mode = i761[0]
  i760.curveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.curveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.curveMultiplier = i761[3]
  i760.constantMin = i761[4]
  i760.constantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.mode = i763[0]
  i762.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.gradientMin)
  i762.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.gradientMax)
  i762.colorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.colorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.rateOverDistance)
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusThickness = i795[10]
  i794.angle = i795[11]
  i794.length = i795[12]
  i794.boxThickness = new pc.Vec3( i795[13], i795[14], i795[15] )
  i794.meshShapeType = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'mesh')
  request.r(i795[19], i795[20], 0, i794, 'meshRenderer')
  request.r(i795[21], i795[22], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[23]
  i794.meshMaterialIndex = i795[24]
  i794.useMeshColors = !!i795[25]
  i794.normalOffset = i795[26]
  i794.arc = i795[27]
  i794.arcMode = i795[28]
  i794.arcSpread = i795[29]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[30], i794.arcSpeed)
  i794.donutRadius = i795[31]
  i794.position = new pc.Vec3( i795[32], i795[33], i795[34] )
  i794.rotation = new pc.Vec3( i795[35], i795[36], i795[37] )
  i794.scale = new pc.Vec3( i795[38], i795[39], i795[40] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.startFrame)
  i800.cycleCount = i801[8]
  i800.rowIndex = i801[9]
  i800.flipU = i801[10]
  i800.flipV = i801[11]
  i800.spriteCount = i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sprites = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.radial)
  i806.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[5], i806.speedModifier)
  i806.space = i807[6]
  i806.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.orbitalX)
  i806.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[8], i806.orbitalY)
  i806.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.orbitalZ)
  i806.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[10], i806.orbitalOffsetX)
  i806.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.orbitalOffsetY)
  i806.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[12], i806.orbitalOffsetZ)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemNoise()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.separateAxes = !!i809[1]
  i808.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.strengthX)
  i808.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.strengthY)
  i808.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.strengthZ)
  i808.frequency = i809[5]
  i808.damping = !!i809[6]
  i808.octaveCount = i809[7]
  i808.octaveMultiplier = i809[8]
  i808.octaveScale = i809[9]
  i808.quality = i809[10]
  i808.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.scrollSpeed)
  i808.scrollSpeedMultiplier = i809[12]
  i808.remapEnabled = !!i809[13]
  i808.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[14], i808.remapX)
  i808.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.remapY)
  i808.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[16], i808.remapZ)
  i808.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[17], i808.positionAmount)
  i808.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[18], i808.rotationAmount)
  i808.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[19], i808.sizeAmount)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemInheritVelocity()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.curve)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemForceOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.space = i813[4]
  i812.randomized = !!i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.limit)
  i814.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.limitX)
  i814.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.limitY)
  i814.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.limitZ)
  i814.dampen = i815[5]
  i814.separateAxes = !!i815[6]
  i814.space = i815[7]
  i814.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[8], i814.drag)
  i814.multiplyDragByParticleSize = !!i815[9]
  i814.multiplyDragByParticleVelocity = !!i815[10]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'mesh')
  i816.meshCount = i817[2]
  i816.activeVertexStreamsCount = i817[3]
  i816.alignment = i817[4]
  i816.renderMode = i817[5]
  i816.sortMode = i817[6]
  i816.lengthScale = i817[7]
  i816.velocityScale = i817[8]
  i816.cameraVelocityScale = i817[9]
  i816.normalDirection = i817[10]
  i816.sortingFudge = i817[11]
  i816.minParticleSize = i817[12]
  i816.maxParticleSize = i817[13]
  i816.pivot = new pc.Vec3( i817[14], i817[15], i817[16] )
  request.r(i817[17], i817[18], 0, i816, 'trailMaterial')
  i816.applyActiveColorSpace = !!i817[19]
  i816.enabled = !!i817[20]
  request.r(i817[21], i817[22], 0, i816, 'sharedMaterial')
  var i819 = i817[23]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[24]
  i816.shadowCastingMode = i817[25]
  i816.sortingLayerID = i817[26]
  i816.sortingOrder = i817[27]
  i816.lightmapIndex = i817[28]
  i816.lightmapSceneIndex = i817[29]
  i816.lightmapScaleOffset = new pc.Vec4( i817[30], i817[31], i817[32], i817[33] )
  i816.lightProbeUsage = i817[34]
  i816.reflectionProbeUsage = i817[35]
  return i816
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i822 = root || request.c( 'MergeEffect' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'tf')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i825 = data
  i824.name = i825[0]
  i824.tagId = i825[1]
  i824.enabled = !!i825[2]
  i824.isStatic = !!i825[3]
  i824.layer = i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i827 = data
  i826.name = i827[0]
  i826.halfPrecision = !!i827[1]
  i826.useSimplification = !!i827[2]
  i826.useUInt32IndexFormat = !!i827[3]
  i826.vertexCount = i827[4]
  i826.aabb = i827[5]
  var i829 = i827[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( !!i829[i + 0] );
  }
  i826.streams = i828
  i826.vertices = i827[7]
  var i831 = i827[8]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i831[i + 0]) );
  }
  i826.subMeshes = i830
  var i833 = i827[9]
  var i832 = []
  for(var i = 0; i < i833.length; i += 16) {
    i832.push( new pc.Mat4().setData(i833[i + 0], i833[i + 1], i833[i + 2], i833[i + 3],  i833[i + 4], i833[i + 5], i833[i + 6], i833[i + 7],  i833[i + 8], i833[i + 9], i833[i + 10], i833[i + 11],  i833[i + 12], i833[i + 13], i833[i + 14], i833[i + 15]) );
  }
  i826.bindposes = i832
  var i835 = i827[10]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i835[i + 0]) );
  }
  i826.blendShapes = i834
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i841 = data
  i840.triangles = i841[0]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i847 = data
  i846.name = i847[0]
  var i849 = i847[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i849[i + 0]) );
  }
  i846.frames = i848
  return i846
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i850 = root || request.c( 'BlinkEffect' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'tf')
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i853 = data
  i852.frontSortingLayerID = i853[0]
  i852.frontSortingOrder = i853[1]
  i852.backSortingLayerID = i853[2]
  i852.backSortingOrder = i853[3]
  i852.alphaCutoff = i853[4]
  request.r(i853[5], i853[6], 0, i852, 'sprite')
  i852.tileMode = i853[7]
  i852.isCustomRangeActive = !!i853[8]
  i852.spriteSortPoint = i853[9]
  i852.enabled = !!i853[10]
  request.r(i853[11], i853[12], 0, i852, 'sharedMaterial')
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.sharedMaterials = i854
  i852.receiveShadows = !!i853[14]
  i852.shadowCastingMode = i853[15]
  i852.sortingLayerID = i853[16]
  i852.sortingOrder = i853[17]
  i852.lightmapIndex = i853[18]
  i852.lightmapSceneIndex = i853[19]
  i852.lightmapScaleOffset = new pc.Vec4( i853[20], i853[21], i853[22], i853[23] )
  i852.lightProbeUsage = i853[24]
  i852.reflectionProbeUsage = i853[25]
  return i852
}

Deserializers["BrushMaskUnit"] = function (request, data, root) {
  var i856 = root || request.c( 'BrushMaskUnit' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'spriteMask')
  request.r(i857[2], i857[3], 0, i856, 'tf')
  return i856
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i858 = root || request.c( 'HeartBreakEffect' )
  var i859 = data
  i858.defaultLifeTime = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'tf')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i861 = data
  i860.color = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  request.r(i861[4], i861[5], 0, i860, 'sprite')
  i860.flipX = !!i861[6]
  i860.flipY = !!i861[7]
  i860.drawMode = i861[8]
  i860.size = new pc.Vec2( i861[9], i861[10] )
  i860.tileMode = i861[11]
  i860.adaptiveModeThreshold = i861[12]
  i860.maskInteraction = i861[13]
  i860.spriteSortPoint = i861[14]
  i860.enabled = !!i861[15]
  request.r(i861[16], i861[17], 0, i860, 'sharedMaterial')
  var i863 = i861[18]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.sharedMaterials = i862
  i860.receiveShadows = !!i861[19]
  i860.shadowCastingMode = i861[20]
  i860.sortingLayerID = i861[21]
  i860.sortingOrder = i861[22]
  i860.lightmapIndex = i861[23]
  i860.lightmapSceneIndex = i861[24]
  i860.lightmapScaleOffset = new pc.Vec4( i861[25], i861[26], i861[27], i861[28] )
  i860.lightProbeUsage = i861[29]
  i860.reflectionProbeUsage = i861[30]
  return i860
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i864 = root || request.c( 'HeartEffect' )
  var i865 = data
  i864.defaultLifeTime = i865[0]
  request.r(i865[1], i865[2], 0, i864, 'tf')
  return i864
}

Deserializers["DirtFX"] = function (request, data, root) {
  var i866 = root || request.c( 'DirtFX' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'tf')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i869 = data
  i868.name = i869[0]
  i868.index = i869[1]
  i868.startup = !!i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i871 = data
  i870.pivot = new pc.Vec2( i871[0], i871[1] )
  i870.anchorMin = new pc.Vec2( i871[2], i871[3] )
  i870.anchorMax = new pc.Vec2( i871[4], i871[5] )
  i870.sizeDelta = new pc.Vec2( i871[6], i871[7] )
  i870.anchoredPosition3D = new pc.Vec3( i871[8], i871[9], i871[10] )
  i870.rotation = new pc.Quat(i871[11], i871[12], i871[13], i871[14])
  i870.scale = new pc.Vec3( i871[15], i871[16], i871[17] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i873 = data
  i872.planeDistance = i873[0]
  i872.referencePixelsPerUnit = i873[1]
  i872.isFallbackOverlay = !!i873[2]
  i872.renderMode = i873[3]
  i872.renderOrder = i873[4]
  i872.sortingLayerName = i873[5]
  i872.sortingOrder = i873[6]
  i872.scaleFactor = i873[7]
  request.r(i873[8], i873[9], 0, i872, 'worldCamera')
  i872.overrideSorting = !!i873[10]
  i872.pixelPerfect = !!i873[11]
  i872.targetDisplay = i873[12]
  i872.overridePixelPerfect = !!i873[13]
  i872.enabled = !!i873[14]
  return i872
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i875 = data
  i874.m_UiScaleMode = i875[0]
  i874.m_ReferencePixelsPerUnit = i875[1]
  i874.m_ScaleFactor = i875[2]
  i874.m_ReferenceResolution = new pc.Vec2( i875[3], i875[4] )
  i874.m_ScreenMatchMode = i875[5]
  i874.m_MatchWidthOrHeight = i875[6]
  i874.m_PhysicalUnit = i875[7]
  i874.m_FallbackScreenDPI = i875[8]
  i874.m_DefaultSpriteDPI = i875[9]
  i874.m_DynamicPixelsPerUnit = i875[10]
  i874.m_PresetInfoIsWorld = !!i875[11]
  return i874
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i877 = data
  i876.m_IgnoreReversedGraphics = !!i877[0]
  i876.m_BlockingObjects = i877[1]
  i876.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i877[2] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'animatorController')
  request.r(i879[2], i879[3], 0, i878, 'avatar')
  i878.updateMode = i879[4]
  i878.hasTransformHierarchy = !!i879[5]
  i878.applyRootMotion = !!i879[6]
  var i881 = i879[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.humanBones = i880
  i878.enabled = !!i879[8]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i885 = data
  i884.cullTransparentMesh = !!i885[0]
  return i884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i887 = data
  i886.m_hasFontAssetChanged = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'm_baseMaterial')
  i886.m_maskOffset = new pc.Vec4( i887[3], i887[4], i887[5], i887[6] )
  i886.m_text = i887[7]
  i886.m_isRightToLeft = !!i887[8]
  request.r(i887[9], i887[10], 0, i886, 'm_fontAsset')
  request.r(i887[11], i887[12], 0, i886, 'm_sharedMaterial')
  var i889 = i887[13]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.m_fontSharedMaterials = i888
  request.r(i887[14], i887[15], 0, i886, 'm_fontMaterial')
  var i891 = i887[16]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.m_fontMaterials = i890
  i886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i887[17], i887[18], i887[19], i887[20])
  i886.m_fontColor = new pc.Color(i887[21], i887[22], i887[23], i887[24])
  i886.m_enableVertexGradient = !!i887[25]
  i886.m_colorMode = i887[26]
  i886.m_fontColorGradient = request.d('TMPro.VertexGradient', i887[27], i886.m_fontColorGradient)
  request.r(i887[28], i887[29], 0, i886, 'm_fontColorGradientPreset')
  request.r(i887[30], i887[31], 0, i886, 'm_spriteAsset')
  i886.m_tintAllSprites = !!i887[32]
  request.r(i887[33], i887[34], 0, i886, 'm_StyleSheet')
  i886.m_TextStyleHashCode = i887[35]
  i886.m_overrideHtmlColors = !!i887[36]
  i886.m_faceColor = UnityEngine.Color32.ConstructColor(i887[37], i887[38], i887[39], i887[40])
  i886.m_fontSize = i887[41]
  i886.m_fontSizeBase = i887[42]
  i886.m_fontWeight = i887[43]
  i886.m_enableAutoSizing = !!i887[44]
  i886.m_fontSizeMin = i887[45]
  i886.m_fontSizeMax = i887[46]
  i886.m_fontStyle = i887[47]
  i886.m_HorizontalAlignment = i887[48]
  i886.m_VerticalAlignment = i887[49]
  i886.m_textAlignment = i887[50]
  i886.m_characterSpacing = i887[51]
  i886.m_wordSpacing = i887[52]
  i886.m_lineSpacing = i887[53]
  i886.m_lineSpacingMax = i887[54]
  i886.m_paragraphSpacing = i887[55]
  i886.m_charWidthMaxAdj = i887[56]
  i886.m_TextWrappingMode = i887[57]
  i886.m_wordWrappingRatios = i887[58]
  i886.m_overflowMode = i887[59]
  request.r(i887[60], i887[61], 0, i886, 'm_linkedTextComponent')
  request.r(i887[62], i887[63], 0, i886, 'parentLinkedComponent')
  i886.m_enableKerning = !!i887[64]
  var i893 = i887[65]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(i893[i + 0]);
  }
  i886.m_ActiveFontFeatures = i892
  i886.m_enableExtraPadding = !!i887[66]
  i886.checkPaddingRequired = !!i887[67]
  i886.m_isRichText = !!i887[68]
  i886.m_parseCtrlCharacters = !!i887[69]
  i886.m_isOrthographic = !!i887[70]
  i886.m_isCullingEnabled = !!i887[71]
  i886.m_horizontalMapping = i887[72]
  i886.m_verticalMapping = i887[73]
  i886.m_uvLineOffset = i887[74]
  i886.m_geometrySortingOrder = i887[75]
  i886.m_IsTextObjectScaleStatic = !!i887[76]
  i886.m_VertexBufferAutoSizeReduction = !!i887[77]
  i886.m_useMaxVisibleDescender = !!i887[78]
  i886.m_pageToDisplay = i887[79]
  i886.m_margin = new pc.Vec4( i887[80], i887[81], i887[82], i887[83] )
  i886.m_isUsingLegacyAnimationComponent = !!i887[84]
  i886.m_isVolumetricText = !!i887[85]
  request.r(i887[86], i887[87], 0, i886, 'm_Material')
  i886.m_EmojiFallbackSupport = !!i887[88]
  i886.m_Maskable = !!i887[89]
  i886.m_Color = new pc.Color(i887[90], i887[91], i887[92], i887[93])
  i886.m_RaycastTarget = !!i887[94]
  i886.m_RaycastPadding = new pc.Vec4( i887[95], i887[96], i887[97], i887[98] )
  return i886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i894 = root || request.c( 'TMPro.VertexGradient' )
  var i895 = data
  i894.topLeft = new pc.Color(i895[0], i895[1], i895[2], i895[3])
  i894.topRight = new pc.Color(i895[4], i895[5], i895[6], i895[7])
  i894.bottomLeft = new pc.Color(i895[8], i895[9], i895[10], i895[11])
  i894.bottomRight = new pc.Color(i895[12], i895[13], i895[14], i895[15])
  return i894
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.Slider' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_FillRect')
  request.r(i899[2], i899[3], 0, i898, 'm_HandleRect')
  i898.m_Direction = i899[4]
  i898.m_MinValue = i899[5]
  i898.m_MaxValue = i899[6]
  i898.m_WholeNumbers = !!i899[7]
  i898.m_Value = i899[8]
  i898.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i899[9], i898.m_OnValueChanged)
  i898.m_Navigation = request.d('UnityEngine.UI.Navigation', i899[10], i898.m_Navigation)
  i898.m_Transition = i899[11]
  i898.m_Colors = request.d('UnityEngine.UI.ColorBlock', i899[12], i898.m_Colors)
  i898.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i899[13], i898.m_SpriteState)
  i898.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i899[14], i898.m_AnimationTriggers)
  i898.m_Interactable = !!i899[15]
  request.r(i899[16], i899[17], 0, i898, 'm_TargetGraphic')
  return i898
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i901 = data
  i900.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i901[0], i900.m_PersistentCalls)
  return i900
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.Events.PersistentCall', i905[i + 0]));
  }
  i902.m_Calls = i904
  return i902
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_Target')
  i908.m_TargetAssemblyTypeName = i909[2]
  i908.m_MethodName = i909[3]
  i908.m_Mode = i909[4]
  i908.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i909[5], i908.m_Arguments)
  i908.m_CallState = i909[6]
  return i908
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i911 = data
  i910.m_Mode = i911[0]
  i910.m_WrapAround = !!i911[1]
  request.r(i911[2], i911[3], 0, i910, 'm_SelectOnUp')
  request.r(i911[4], i911[5], 0, i910, 'm_SelectOnDown')
  request.r(i911[6], i911[7], 0, i910, 'm_SelectOnLeft')
  request.r(i911[8], i911[9], 0, i910, 'm_SelectOnRight')
  return i910
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i913 = data
  i912.m_NormalColor = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.m_HighlightedColor = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.m_PressedColor = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.m_SelectedColor = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  i912.m_DisabledColor = new pc.Color(i913[16], i913[17], i913[18], i913[19])
  i912.m_ColorMultiplier = i913[20]
  i912.m_FadeDuration = i913[21]
  return i912
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_HighlightedSprite')
  request.r(i915[2], i915[3], 0, i914, 'm_PressedSprite')
  request.r(i915[4], i915[5], 0, i914, 'm_SelectedSprite')
  request.r(i915[6], i915[7], 0, i914, 'm_DisabledSprite')
  return i914
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i917 = data
  i916.m_NormalTrigger = i917[0]
  i916.m_HighlightedTrigger = i917[1]
  i916.m_PressedTrigger = i917[2]
  i916.m_SelectedTrigger = i917[3]
  i916.m_DisabledTrigger = i917[4]
  return i916
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.Image' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_Sprite')
  i918.m_Type = i919[2]
  i918.m_PreserveAspect = !!i919[3]
  i918.m_FillCenter = !!i919[4]
  i918.m_FillMethod = i919[5]
  i918.m_FillAmount = i919[6]
  i918.m_FillClockwise = !!i919[7]
  i918.m_FillOrigin = i919[8]
  i918.m_UseSpriteMesh = !!i919[9]
  i918.m_PixelsPerUnitMultiplier = i919[10]
  request.r(i919[11], i919[12], 0, i918, 'm_Material')
  i918.m_Maskable = !!i919[13]
  i918.m_Color = new pc.Color(i919[14], i919[15], i919[16], i919[17])
  i918.m_RaycastTarget = !!i919[18]
  i918.m_RaycastPadding = new pc.Vec4( i919[19], i919[20], i919[21], i919[22] )
  return i918
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Button' )
  var i921 = data
  i920.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i921[0], i920.m_OnClick)
  i920.m_Navigation = request.d('UnityEngine.UI.Navigation', i921[1], i920.m_Navigation)
  i920.m_Transition = i921[2]
  i920.m_Colors = request.d('UnityEngine.UI.ColorBlock', i921[3], i920.m_Colors)
  i920.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i921[4], i920.m_SpriteState)
  i920.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i921[5], i920.m_AnimationTriggers)
  i920.m_Interactable = !!i921[6]
  request.r(i921[7], i921[8], 0, i920, 'm_TargetGraphic')
  return i920
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i923 = data
  i922.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i923[0], i922.m_PersistentCalls)
  return i922
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_ObjectArgument')
  i924.m_ObjectArgumentAssemblyTypeName = i925[2]
  i924.m_IntArgument = i925[3]
  i924.m_FloatArgument = i925[4]
  i924.m_StringArgument = i925[5]
  i924.m_BoolArgument = !!i925[6]
  return i924
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i926 = root || request.c( 'Ply_Pool' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Ply_Pool+PoolAmount', i929[i + 0]) );
  }
  i926.poolAmounts = i928
  request.r(i927[1], i927[2], 0, i926, 'poolHolder')
  return i926
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i932 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i933 = data
  i932.type = i933[0]
  i932.amount = i933[1]
  request.r(i933[2], i933[3], 0, i932, 'gameUnit')
  return i932
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i934 = root || request.c( 'Ply_SoundManager' )
  var i935 = data
  var i937 = i935[0]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Ply_SoundManager+FxAudio', i937[i + 0]) );
  }
  i934.fxAudios = i936
  var i939 = i935[1]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i934.audioClips = i938
  request.r(i935[2], i935[3], 0, i934, 'sound')
  return i934
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i942 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i943 = data
  i942.fxType = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'audioClip')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'clip')
  request.r(i947[2], i947[3], 0, i946, 'outputAudioMixerGroup')
  i946.playOnAwake = !!i947[4]
  i946.loop = !!i947[5]
  i946.time = i947[6]
  i946.volume = i947[7]
  i946.pitch = i947[8]
  i946.enabled = !!i947[9]
  return i946
}

Deserializers["GameManager"] = function (request, data, root) {
  var i948 = root || request.c( 'GameManager' )
  var i949 = data
  i948.isPlaying = !!i949[0]
  i948.isTutorial = !!i949[1]
  i948.isGotoStore = !!i949[2]
  i948.isLoseGame = !!i949[3]
  i948.countMove = i949[4]
  i948.currentLayer = i949[5]
  request.r(i949[6], i949[7], 0, i948, 'trashCan')
  request.r(i949[8], i949[9], 0, i948, 'step1')
  request.r(i949[10], i949[11], 0, i948, 'paperBox')
  return i948
}

Deserializers["UIManager"] = function (request, data, root) {
  var i950 = root || request.c( 'UIManager' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'winUI')
  request.r(i951[2], i951[3], 0, i950, 'loseUI')
  request.r(i951[4], i951[5], 0, i950, 'tutorial')
  request.r(i951[6], i951[7], 0, i950, 'verticalUI')
  request.r(i951[8], i951[9], 0, i950, 'horizontalUI')
  request.r(i951[10], i951[11], 0, i950, 'downloadBtn')
  request.r(i951[12], i951[13], 0, i950, 'horizontalDownloadBtn')
  request.r(i951[14], i951[15], 0, i950, 'textAnim')
  i950.isGoogleBuild = !!i951[16]
  i950.screenWidth = i951[17]
  i950.screenHeight = i951[18]
  i950.scaleHeightOnWidth = i951[19]
  i950.isVertical = !!i951[20]
  i950.isScreenVertical = !!i951[21]
  request.r(i951[22], i951[23], 0, i950, 'cam')
  i950.verticalUIHeightOnWidthRatio = i951[24]
  i950.scaleCameraOnValidate = !!i951[25]
  i950.screenVerticalHeightOnWidthRatio = i951[26]
  i950.useContinuousScaling = !!i951[27]
  i950.baseOrthographicSize = i951[28]
  i950.baseAspect = i951[29]
  i950.landscapeSizeRatio = i951[30]
  i950.defaultPortraitSizeRatio = i951[31]
  var i953 = i951[32]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('ScreenScaleStep', i953[i + 0]));
  }
  i950.discreteScaleSteps = i952
  i950.usePerspectiveCamera = !!i951[33]
  request.r(i951[34], i951[35], 0, i950, 'perspectiveFocus')
  i950.perspectiveFocusDistance = i951[36]
  i950.perspectivePadding = i951[37]
  i950.fitRendererBounds = !!i951[38]
  request.r(i951[39], i951[40], 0, i950, 'boundsRoot')
  var i955 = i951[41]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i950.boundsRenderers = i954
  return i950
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i958 = root || request.c( 'ScreenScaleStep' )
  var i959 = data
  i958.heightOnWidthRatio = i959[0]
  i958.orthographicSize = i959[1]
  return i958
}

Deserializers["InputManager"] = function (request, data, root) {
  var i962 = root || request.c( 'InputManager' )
  var i963 = data
  i962.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i963[0] )
  i962.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i963[1] )
  i962.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i963[2] )
  i962.isDragging = !!i963[3]
  return i962
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i964 = root || request.c( 'HandTutManager' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i964.items = i966
  request.r(i965[1], i965[2], 0, i964, 'handTutObject')
  i964.idleDelay = i965[3]
  i964.firstHandTutDelay = i965[4]
  i964.moveDuration = i965[5]
  i964.dragFadeDuration = i965[6]
  i964.clickScaleDuration = i965[7]
  i964.waitAtEndDuration = i965[8]
  i964.handZPosition = i965[9]
  i964.clickScaleMultiplier = i965[10]
  i964.moveEase = i965[11]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i971 = data
  i970.aspect = i971[0]
  i970.orthographic = !!i971[1]
  i970.orthographicSize = i971[2]
  i970.backgroundColor = new pc.Color(i971[3], i971[4], i971[5], i971[6])
  i970.nearClipPlane = i971[7]
  i970.farClipPlane = i971[8]
  i970.fieldOfView = i971[9]
  i970.depth = i971[10]
  i970.clearFlags = i971[11]
  i970.cullingMask = i971[12]
  i970.rect = i971[13]
  request.r(i971[14], i971[15], 0, i970, 'targetTexture')
  i970.usePhysicalProperties = !!i971[16]
  i970.focalLength = i971[17]
  i970.sensorSize = new pc.Vec2( i971[18], i971[19] )
  i970.lensShift = new pc.Vec2( i971[20], i971[21] )
  i970.gateFit = i971[22]
  i970.commandBufferCount = i971[23]
  i970.cameraType = i971[24]
  i970.enabled = !!i971[25]
  return i970
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_FirstSelected')
  i972.m_sendNavigationEvents = !!i973[2]
  i972.m_DragThreshold = i973[3]
  return i972
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i975 = data
  i974.m_HorizontalAxis = i975[0]
  i974.m_VerticalAxis = i975[1]
  i974.m_SubmitButton = i975[2]
  i974.m_CancelButton = i975[3]
  i974.m_InputActionsPerSecond = i975[4]
  i974.m_RepeatDelay = i975[5]
  i974.m_ForceModuleActive = !!i975[6]
  i974.m_SendPointerHoverToParent = !!i975[7]
  return i974
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i976 = root || request.c( 'SortChildByZPos' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'transformToSort')
  var i979 = i977[2]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i976.childrenToSort = i978
  i976.zOffset = i977[3]
  i976.baseZ = i977[4]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i983 = data
  i982.center = new pc.Vec3( i983[0], i983[1], i983[2] )
  i982.radius = i983[3]
  i982.height = i983[4]
  i982.direction = i983[5]
  i982.enabled = !!i983[6]
  i982.isTrigger = !!i983[7]
  request.r(i983[8], i983[9], 0, i982, 'material')
  return i982
}

Deserializers["ItemSpriteMaskPainter"] = function (request, data, root) {
  var i984 = root || request.c( 'ItemSpriteMaskPainter' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'brushMaskPrefab')
  i984.useBrushMaskPool = !!i985[2]
  i984.brushMaskPoolType = i985[3]
  request.r(i985[4], i985[5], 0, i984, 'brushParent')
  i984.brushRadius = i985[6]
  i984.brushDiameterAtScaleOne = i985[7]
  i984.scaleBrushFromRadius = !!i985[8]
  i984.brushSpacing = i985[9]
  i984.brushZOffset = i985[10]
  i984.overrideMaskSorting = !!i985[11]
  i984.maskSortingLayerName = i985[12]
  request.r(i985[13], i985[14], 0, i984, 'paintAreaCollider')
  request.r(i985[15], i985[16], 0, i984, 'paintPlaneCenter')
  i984.requiredPercent = i985[17]
  i984.sampleColumns = i985[18]
  i984.sampleRows = i985[19]
  i984.resetOnEnable = !!i985[20]
  i984.onPaintBegin = request.d('UnityEngine.Events.UnityEvent', i985[21], i984.onPaintBegin)
  i984.onPaint = request.d('UnityEngine.Events.UnityEvent', i985[22], i984.onPaint)
  i984.onPaintComplete = request.d('UnityEngine.Events.UnityEvent', i985[23], i984.onPaintComplete)
  return i984
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i987 = data
  i986.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i987[0], i986.m_PersistentCalls)
  return i986
}

Deserializers["Item"] = function (request, data, root) {
  var i988 = root || request.c( 'Item' )
  var i989 = data
  i988.isDone = !!i989[0]
  i988.onProcess = !!i989[1]
  i988.requireMatchingTargetTypeForHandTut = !!i989[2]
  request.r(i989[3], i989[4], 0, i988, 'itemDraggable')
  request.r(i989[5], i989[6], 0, i988, 'itemClickable')
  request.r(i989[7], i989[8], 0, i988, 'itemStirring')
  request.r(i989[9], i989[10], 0, i988, 'itemKnifeSpriteMaskCutter')
  request.r(i989[11], i989[12], 0, i988, 'itemSpriteMaskPainter')
  request.r(i989[13], i989[14], 0, i988, 'itemDragSpriteMaskPainter')
  request.r(i989[15], i989[16], 0, i988, 'itemMoveToTarget')
  request.r(i989[17], i989[18], 0, i988, 'animator')
  i988.itemType = i989[19]
  request.r(i989[20], i989[21], 0, i988, 'spriteRenderer')
  i988.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i989[22], i988.onKnifeIn)
  request.r(i989[23], i989[24], 0, i988, 'knifePos')
  i988.heartEffectScale = i989[25]
  i988.breakHeartEffectScale = i989[26]
  i988.blinkEffectScale = i989[27]
  i988.mergeEffectScale = i989[28]
  i988.playMoveToTargetFinishSound = !!i989[29]
  i988.moveToTargetFinishFxType = i989[30]
  i988.fxSpawnZPos = i989[31]
  request.r(i989[32], i989[33], 0, i988, 'tf')
  return i988
}

Deserializers["CleaningTarget"] = function (request, data, root) {
  var i990 = root || request.c( 'CleaningTarget' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('CleaningTarget+CleaningState')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('CleaningTarget+CleaningState', i993[i + 0]));
  }
  i990.states = i992
  i990.onAllStatesComplete = request.d('UnityEngine.Events.UnityEvent', i991[1], i990.onAllStatesComplete)
  return i990
}

Deserializers["CleaningTarget+CleaningState"] = function (request, data, root) {
  var i996 = root || request.c( 'CleaningTarget+CleaningState' )
  var i997 = data
  i996.stateName = i997[0]
  request.r(i997[1], i997[2], 0, i996, 'requiredTool')
  i996.brushRadius = i997[3]
  i996.overrideMaskSorting = !!i997[4]
  i996.maskSortingLayerName = i997[5]
  var i999 = i997[6]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('MaskInteractionConfig')))
  for(var i = 0; i < i999.length; i += 1) {
    i998.add(request.d('MaskInteractionConfig', i999[i + 0]));
  }
  i996.maskInteractionsToReset = i998
  i996.onStateComplete = request.d('UnityEngine.Events.UnityEvent', i997[7], i996.onStateComplete)
  return i996
}

Deserializers["MaskInteractionConfig"] = function (request, data, root) {
  var i1002 = root || request.c( 'MaskInteractionConfig' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'targetRenderer')
  i1002.interaction = i1003[2]
  return i1002
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1004 = root || request.c( 'ItemDraggable' )
  var i1005 = data
  i1004.isDraggable = !!i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'returnTransform')
  i1004.setParentToReturnTransform = !!i1005[3]
  i1004.returnToStartOnDragFailed = !!i1005[4]
  i1004.returnToExactReturnTransformPosition = !!i1005[5]
  i1004.targetItemType = i1005[6]
  request.r(i1005[7], i1005[8], 0, i1004, 'item')
  i1004.checkState = !!i1005[9]
  request.r(i1005[10], i1005[11], 0, i1004, 'shadowObject')
  i1004.playReturnToStartFinishSound = !!i1005[12]
  i1004.returnToStartFinishFxType = i1005[13]
  i1004.spawnBreakHeartOnDropFail = !!i1005[14]
  i1004.playBeginDragSound = !!i1005[15]
  i1004.beginDragFxType = i1005[16]
  i1004.liftOffset = i1005[17]
  i1004.dragScaleMultiplier = i1005[18]
  i1004.dragScaleDuration = i1005[19]
  i1004.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1005[20], i1004.onBeginDrag)
  i1004.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1005[21], i1004.onDropSuccess)
  i1004.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1005[22], i1004.onDropFail)
  i1004.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i1005[23], i1004.onReturnToStartComplete)
  return i1004
}

Deserializers["ToolObject"] = function (request, data, root) {
  var i1006 = root || request.c( 'ToolObject' )
  var i1007 = data
  i1006.flyDistance = i1007[0]
  i1006.flyYOffset = i1007[1]
  i1006.flyInDuration = i1007[2]
  i1006.flyOutDuration = i1007[3]
  i1006.flyEase = i1007[4]
  i1006.flyInSide = i1007[5]
  i1006.flyOutSide = i1007[6]
  i1006.onFlyIn = request.d('UnityEngine.Events.UnityEvent', i1007[7], i1006.onFlyIn)
  i1006.onFlyOut = request.d('UnityEngine.Events.UnityEvent', i1007[8], i1006.onFlyOut)
  i1006.isDone = !!i1007[9]
  i1006.onProcess = !!i1007[10]
  i1006.requireMatchingTargetTypeForHandTut = !!i1007[11]
  request.r(i1007[12], i1007[13], 0, i1006, 'itemDraggable')
  request.r(i1007[14], i1007[15], 0, i1006, 'itemClickable')
  request.r(i1007[16], i1007[17], 0, i1006, 'itemStirring')
  request.r(i1007[18], i1007[19], 0, i1006, 'itemKnifeSpriteMaskCutter')
  request.r(i1007[20], i1007[21], 0, i1006, 'itemSpriteMaskPainter')
  request.r(i1007[22], i1007[23], 0, i1006, 'itemDragSpriteMaskPainter')
  request.r(i1007[24], i1007[25], 0, i1006, 'itemMoveToTarget')
  request.r(i1007[26], i1007[27], 0, i1006, 'animator')
  i1006.itemType = i1007[28]
  request.r(i1007[29], i1007[30], 0, i1006, 'spriteRenderer')
  i1006.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1007[31], i1006.onKnifeIn)
  request.r(i1007[32], i1007[33], 0, i1006, 'knifePos')
  i1006.heartEffectScale = i1007[34]
  i1006.breakHeartEffectScale = i1007[35]
  i1006.blinkEffectScale = i1007[36]
  i1006.mergeEffectScale = i1007[37]
  i1006.playMoveToTargetFinishSound = !!i1007[38]
  i1006.moveToTargetFinishFxType = i1007[39]
  i1006.fxSpawnZPos = i1007[40]
  request.r(i1007[41], i1007[42], 0, i1006, 'tf')
  return i1006
}

Deserializers["ItemDragSpriteMaskPainter"] = function (request, data, root) {
  var i1008 = root || request.c( 'ItemDragSpriteMaskPainter' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMaskPainter')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1008.targetPainters = i1010
  request.r(i1009[1], i1009[2], 0, i1008, 'brushSpawnPoint')
  i1008.paintOnBeginDrag = !!i1009[3]
  i1008.returnToStartOnPaintComplete = !!i1009[4]
  i1008.spawnHeartOnAutoDropFail = !!i1009[5]
  request.r(i1009[6], i1009[7], 0, i1008, 'paintTrailFx')
  i1008.fxSoundType = i1009[8]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1015 = data
  i1014.ambientIntensity = i1015[0]
  i1014.reflectionIntensity = i1015[1]
  i1014.ambientMode = i1015[2]
  i1014.ambientLight = new pc.Color(i1015[3], i1015[4], i1015[5], i1015[6])
  i1014.ambientSkyColor = new pc.Color(i1015[7], i1015[8], i1015[9], i1015[10])
  i1014.ambientGroundColor = new pc.Color(i1015[11], i1015[12], i1015[13], i1015[14])
  i1014.ambientEquatorColor = new pc.Color(i1015[15], i1015[16], i1015[17], i1015[18])
  i1014.fogColor = new pc.Color(i1015[19], i1015[20], i1015[21], i1015[22])
  i1014.fogEndDistance = i1015[23]
  i1014.fogStartDistance = i1015[24]
  i1014.fogDensity = i1015[25]
  i1014.fog = !!i1015[26]
  request.r(i1015[27], i1015[28], 0, i1014, 'skybox')
  i1014.fogMode = i1015[29]
  var i1017 = i1015[30]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1017[i + 0]) );
  }
  i1014.lightmaps = i1016
  i1014.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1015[31], i1014.lightProbes)
  i1014.lightmapsMode = i1015[32]
  i1014.mixedBakeMode = i1015[33]
  i1014.environmentLightingMode = i1015[34]
  i1014.ambientProbe = new pc.SphericalHarmonicsL2(i1015[35])
  i1014.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1015[36])
  i1014.useReferenceAmbientProbe = !!i1015[37]
  request.r(i1015[38], i1015[39], 0, i1014, 'customReflection')
  request.r(i1015[40], i1015[41], 0, i1014, 'defaultReflection')
  i1014.defaultReflectionMode = i1015[42]
  i1014.defaultReflectionResolution = i1015[43]
  i1014.sunLightObjectId = i1015[44]
  i1014.pixelLightCount = i1015[45]
  i1014.defaultReflectionHDR = !!i1015[46]
  i1014.hasLightDataAsset = !!i1015[47]
  i1014.hasManualGenerate = !!i1015[48]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'lightmapColor')
  request.r(i1021[2], i1021[3], 0, i1020, 'lightmapDirection')
  request.r(i1021[4], i1021[5], 0, i1020, 'shadowMask')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1022 = root || new UnityEngine.LightProbes()
  var i1023 = data
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1033[i + 0]));
  }
  i1030.ShaderCompilationErrors = i1032
  i1030.name = i1031[1]
  i1030.guid = i1031[2]
  var i1035 = i1031[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.shaderDefinedKeywords = i1034
  var i1037 = i1031[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1037[i + 0]) );
  }
  i1030.passes = i1036
  var i1039 = i1031[5]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1039[i + 0]) );
  }
  i1030.usePasses = i1038
  var i1041 = i1031[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1041[i + 0]) );
  }
  i1030.defaultParameterValues = i1040
  request.r(i1031[7], i1031[8], 0, i1030, 'unityFallbackShader')
  i1030.readDepth = !!i1031[9]
  i1030.hasDepthOnlyPass = !!i1031[10]
  i1030.isCreatedByShaderGraph = !!i1031[11]
  i1030.disableBatching = !!i1031[12]
  i1030.compiled = !!i1031[13]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1045 = data
  i1044.shaderName = i1045[0]
  i1044.errorMessage = i1045[1]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1050 = root || new pc.UnityShaderPass()
  var i1051 = data
  i1050.id = i1051[0]
  i1050.subShaderIndex = i1051[1]
  i1050.name = i1051[2]
  i1050.passType = i1051[3]
  i1050.grabPassTextureName = i1051[4]
  i1050.usePass = !!i1051[5]
  i1050.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[6], i1050.zTest)
  i1050.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[7], i1050.zWrite)
  i1050.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[8], i1050.culling)
  i1050.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1051[9], i1050.blending)
  i1050.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1051[10], i1050.alphaBlending)
  i1050.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[11], i1050.colorWriteMask)
  i1050.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[12], i1050.offsetUnits)
  i1050.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[13], i1050.offsetFactor)
  i1050.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[14], i1050.stencilRef)
  i1050.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[15], i1050.stencilReadMask)
  i1050.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[16], i1050.stencilWriteMask)
  i1050.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[17], i1050.stencilOp)
  i1050.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[18], i1050.stencilOpFront)
  i1050.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1051[19], i1050.stencilOpBack)
  var i1053 = i1051[20]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1053[i + 0]) );
  }
  i1050.tags = i1052
  var i1055 = i1051[21]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.passDefinedKeywords = i1054
  var i1057 = i1051[22]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1057[i + 0]) );
  }
  i1050.passDefinedKeywordGroups = i1056
  var i1059 = i1051[23]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1059[i + 0]) );
  }
  i1050.variants = i1058
  var i1061 = i1051[24]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1061[i + 0]) );
  }
  i1050.excludedVariants = i1060
  i1050.hasDepthReader = !!i1051[25]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1063 = data
  i1062.val = i1063[0]
  i1062.name = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1065 = data
  i1064.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[0], i1064.src)
  i1064.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[1], i1064.dst)
  i1064.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1065[2], i1064.op)
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1067 = data
  i1066.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[0], i1066.pass)
  i1066.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[1], i1066.fail)
  i1066.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[2], i1066.zFail)
  i1066.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1067[3], i1066.comp)
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.value = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( i1077[i + 0] );
  }
  i1074.keywords = i1076
  i1074.hasDiscard = !!i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1081 = data
  i1080.passId = i1081[0]
  i1080.subShaderIndex = i1081[1]
  var i1083 = i1081[2]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1080.keywords = i1082
  i1080.vertexProgram = i1081[3]
  i1080.fragmentProgram = i1081[4]
  i1080.exportedForWebGl2 = !!i1081[5]
  i1080.readDepth = !!i1081[6]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'shader')
  i1086.pass = i1087[2]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.type = i1091[1]
  i1090.value = new pc.Vec4( i1091[2], i1091[3], i1091[4], i1091[5] )
  i1090.textureValue = i1091[6]
  i1090.shaderPropertyFlag = i1091[7]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1093 = data
  i1092.name = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'texture')
  i1092.aabb = i1093[3]
  i1092.vertices = i1093[4]
  i1092.triangles = i1093[5]
  i1092.textureRect = UnityEngine.Rect.MinMaxRect(i1093[6], i1093[7], i1093[8], i1093[9])
  i1092.packedRect = UnityEngine.Rect.MinMaxRect(i1093[10], i1093[11], i1093[12], i1093[13])
  i1092.border = new pc.Vec4( i1093[14], i1093[15], i1093[16], i1093[17] )
  i1092.transparency = i1093[18]
  i1092.bounds = i1093[19]
  i1092.pixelsPerUnit = i1093[20]
  i1092.textureWidth = i1093[21]
  i1092.textureHeight = i1093[22]
  i1092.nativeSize = new pc.Vec2( i1093[23], i1093[24] )
  i1092.pivot = new pc.Vec2( i1093[25], i1093[26] )
  i1092.textureRectOffset = new pc.Vec2( i1093[27], i1093[28] )
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1095 = data
  i1094.name = i1095[0]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1097 = data
  i1096.name = i1097[0]
  i1096.wrapMode = i1097[1]
  i1096.isLooping = !!i1097[2]
  i1096.length = i1097[3]
  var i1099 = i1097[4]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1099[i + 0]) );
  }
  i1096.curves = i1098
  var i1101 = i1097[5]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1101[i + 0]) );
  }
  i1096.events = i1100
  i1096.halfPrecision = !!i1097[6]
  i1096._frameRate = i1097[7]
  i1096.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1097[8], i1096.localBounds)
  i1096.hasMuscleCurves = !!i1097[9]
  var i1103 = i1097[10]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1096.clipMuscleConstant = i1102
  i1096.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1097[11], i1096.clipBindingConstant)
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1107 = data
  i1106.path = i1107[0]
  i1106.hash = i1107[1]
  i1106.componentType = i1107[2]
  i1106.property = i1107[3]
  i1106.keys = i1107[4]
  var i1109 = i1107[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1109[i + 0]) );
  }
  i1106.objectReferenceKeys = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1113 = data
  i1112.time = i1113[0]
  request.r(i1113[1], i1113[2], 0, i1112, 'value')
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1117 = data
  i1116.functionName = i1117[0]
  i1116.floatParameter = i1117[1]
  i1116.intParameter = i1117[2]
  i1116.stringParameter = i1117[3]
  request.r(i1117[4], i1117[5], 0, i1116, 'objectReferenceParameter')
  i1116.time = i1117[6]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1119 = data
  i1118.center = new pc.Vec3( i1119[0], i1119[1], i1119[2] )
  i1118.extends = new pc.Vec3( i1119[3], i1119[4], i1119[5] )
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( i1125[i + 0] );
  }
  i1122.genericBindings = i1124
  var i1127 = i1123[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.pptrCurveMapping = i1126
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1129 = data
  i1128.name = i1129[0]
  var i1131 = i1129[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1131[i + 0]) );
  }
  i1128.layers = i1130
  var i1133 = i1129[2]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1133[i + 0]) );
  }
  i1128.parameters = i1132
  i1128.animationClips = i1129[3]
  i1128.avatarUnsupported = i1129[4]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.defaultWeight = i1137[1]
  i1136.blendingMode = i1137[2]
  i1136.avatarMask = i1137[3]
  i1136.syncedLayerIndex = i1137[4]
  i1136.syncedLayerAffectsTiming = !!i1137[5]
  i1136.syncedLayers = i1137[6]
  i1136.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1137[7], i1136.stateMachine)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1139 = data
  i1138.id = i1139[0]
  i1138.name = i1139[1]
  i1138.path = i1139[2]
  var i1141 = i1139[3]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1141[i + 0]) );
  }
  i1138.states = i1140
  var i1143 = i1139[4]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1143[i + 0]) );
  }
  i1138.machines = i1142
  var i1145 = i1139[5]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1145[i + 0]) );
  }
  i1138.entryStateTransitions = i1144
  var i1147 = i1139[6]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1147[i + 0]) );
  }
  i1138.exitStateTransitions = i1146
  var i1149 = i1139[7]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1149[i + 0]) );
  }
  i1138.anyStateTransitions = i1148
  i1138.defaultStateId = i1139[8]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.name = i1153[1]
  i1152.cycleOffset = i1153[2]
  i1152.cycleOffsetParameter = i1153[3]
  i1152.cycleOffsetParameterActive = !!i1153[4]
  i1152.mirror = !!i1153[5]
  i1152.mirrorParameter = i1153[6]
  i1152.mirrorParameterActive = !!i1153[7]
  i1152.motionId = i1153[8]
  i1152.nameHash = i1153[9]
  i1152.fullPathHash = i1153[10]
  i1152.speed = i1153[11]
  i1152.speedParameter = i1153[12]
  i1152.speedParameterActive = !!i1153[13]
  i1152.tag = i1153[14]
  i1152.tagHash = i1153[15]
  i1152.writeDefaultValues = !!i1153[16]
  var i1155 = i1153[17]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 2, i1154, '')
  }
  i1152.behaviours = i1154
  var i1157 = i1153[18]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1157[i + 0]) );
  }
  i1152.transitions = i1156
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1163 = data
  i1162.fullPath = i1163[0]
  i1162.canTransitionToSelf = !!i1163[1]
  i1162.duration = i1163[2]
  i1162.exitTime = i1163[3]
  i1162.hasExitTime = !!i1163[4]
  i1162.hasFixedDuration = !!i1163[5]
  i1162.interruptionSource = i1163[6]
  i1162.offset = i1163[7]
  i1162.orderedInterruption = !!i1163[8]
  i1162.destinationStateId = i1163[9]
  i1162.isExit = !!i1163[10]
  i1162.mute = !!i1163[11]
  i1162.solo = !!i1163[12]
  var i1165 = i1163[13]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1165[i + 0]) );
  }
  i1162.conditions = i1164
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1171 = data
  i1170.destinationStateId = i1171[0]
  i1170.isExit = !!i1171[1]
  i1170.mute = !!i1171[2]
  i1170.solo = !!i1171[3]
  var i1173 = i1171[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1173[i + 0]) );
  }
  i1170.conditions = i1172
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1177 = data
  i1176.defaultBool = !!i1177[0]
  i1176.defaultFloat = i1177[1]
  i1176.defaultInt = i1177[2]
  i1176.name = i1177[3]
  i1176.nameHash = i1177[4]
  i1176.type = i1177[5]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.bytes64 = i1179[1]
  i1178.data = i1179[2]
  return i1178
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1181 = data
  i1180.normalStyle = i1181[0]
  i1180.normalSpacingOffset = i1181[1]
  i1180.boldStyle = i1181[2]
  i1180.boldSpacing = i1181[3]
  i1180.italicStyle = i1181[4]
  i1180.tabSize = i1181[5]
  request.r(i1181[6], i1181[7], 0, i1180, 'atlas')
  i1180.m_SourceFontFileGUID = i1181[8]
  i1180.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1181[9], i1180.m_CreationSettings)
  request.r(i1181[10], i1181[11], 0, i1180, 'm_SourceFontFile')
  i1180.m_SourceFontFilePath = i1181[12]
  i1180.m_AtlasPopulationMode = i1181[13]
  i1180.InternalDynamicOS = !!i1181[14]
  var i1183 = i1181[15]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('UnityEngine.TextCore.Glyph', i1183[i + 0]));
  }
  i1180.m_GlyphTable = i1182
  var i1185 = i1181[16]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Character', i1185[i + 0]));
  }
  i1180.m_CharacterTable = i1184
  var i1187 = i1181[17]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1180.m_AtlasTextures = i1186
  i1180.m_AtlasTextureIndex = i1181[18]
  i1180.m_IsMultiAtlasTexturesEnabled = !!i1181[19]
  i1180.m_GetFontFeatures = !!i1181[20]
  i1180.m_ClearDynamicDataOnBuild = !!i1181[21]
  i1180.m_AtlasWidth = i1181[22]
  i1180.m_AtlasHeight = i1181[23]
  i1180.m_AtlasPadding = i1181[24]
  i1180.m_AtlasRenderMode = i1181[25]
  var i1189 = i1181[26]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('UnityEngine.TextCore.GlyphRect', i1189[i + 0]));
  }
  i1180.m_UsedGlyphRects = i1188
  var i1191 = i1181[27]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.add(request.d('UnityEngine.TextCore.GlyphRect', i1191[i + 0]));
  }
  i1180.m_FreeGlyphRects = i1190
  i1180.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1181[28], i1180.m_FontFeatureTable)
  i1180.m_ShouldReimportFontFeatures = !!i1181[29]
  var i1193 = i1181[30]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1193.length; i += 2) {
  request.r(i1193[i + 0], i1193[i + 1], 1, i1192, '')
  }
  i1180.m_FallbackFontAssetTable = i1192
  var i1195 = i1181[31]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('TMPro.TMP_FontWeightPair', i1195[i + 0]) );
  }
  i1180.m_FontWeightTable = i1194
  var i1197 = i1181[32]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('TMPro.TMP_FontWeightPair', i1197[i + 0]) );
  }
  i1180.fontWeights = i1196
  i1180.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1181[33], i1180.m_fontInfo)
  var i1199 = i1181[34]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('TMPro.TMP_Glyph', i1199[i + 0]));
  }
  i1180.m_glyphInfoList = i1198
  i1180.m_KerningTable = request.d('TMPro.KerningTable', i1181[35], i1180.m_KerningTable)
  var i1201 = i1181[36]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1180.fallbackFontAssets = i1200
  i1180.m_Version = i1181[37]
  i1180.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1181[38], i1180.m_FaceInfo)
  request.r(i1181[39], i1181[40], 0, i1180, 'm_Material')
  return i1180
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1203 = data
  i1202.sourceFontFileName = i1203[0]
  i1202.sourceFontFileGUID = i1203[1]
  i1202.faceIndex = i1203[2]
  i1202.pointSizeSamplingMode = i1203[3]
  i1202.pointSize = i1203[4]
  i1202.padding = i1203[5]
  i1202.paddingMode = i1203[6]
  i1202.packingMode = i1203[7]
  i1202.atlasWidth = i1203[8]
  i1202.atlasHeight = i1203[9]
  i1202.characterSetSelectionMode = i1203[10]
  i1202.characterSequence = i1203[11]
  i1202.referencedFontAssetGUID = i1203[12]
  i1202.referencedTextAssetGUID = i1203[13]
  i1202.fontStyle = i1203[14]
  i1202.fontStyleModifier = i1203[15]
  i1202.renderMode = i1203[16]
  i1202.includeFontFeatures = !!i1203[17]
  return i1202
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1207 = data
  i1206.m_Index = i1207[0]
  i1206.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1207[1], i1206.m_Metrics)
  i1206.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1207[2], i1206.m_GlyphRect)
  i1206.m_Scale = i1207[3]
  i1206.m_AtlasIndex = i1207[4]
  i1206.m_ClassDefinitionType = i1207[5]
  return i1206
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1209 = data
  i1208.m_Width = i1209[0]
  i1208.m_Height = i1209[1]
  i1208.m_HorizontalBearingX = i1209[2]
  i1208.m_HorizontalBearingY = i1209[3]
  i1208.m_HorizontalAdvance = i1209[4]
  return i1208
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1211 = data
  i1210.m_X = i1211[0]
  i1210.m_Y = i1211[1]
  i1210.m_Width = i1211[2]
  i1210.m_Height = i1211[3]
  return i1210
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_Character' )
  var i1215 = data
  i1214.m_ElementType = i1215[0]
  i1214.m_Unicode = i1215[1]
  i1214.m_GlyphIndex = i1215[2]
  i1214.m_Scale = i1215[3]
  return i1214
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1220 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('TMPro.MultipleSubstitutionRecord', i1223[i + 0]));
  }
  i1220.m_MultipleSubstitutionRecords = i1222
  var i1225 = i1221[1]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('TMPro.LigatureSubstitutionRecord', i1225[i + 0]));
  }
  i1220.m_LigatureSubstitutionRecords = i1224
  var i1227 = i1221[2]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1227[i + 0]));
  }
  i1220.m_GlyphPairAdjustmentRecords = i1226
  var i1229 = i1221[3]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1229[i + 0]));
  }
  i1220.m_MarkToBaseAdjustmentRecords = i1228
  var i1231 = i1221[4]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1231[i + 0]));
  }
  i1220.m_MarkToMarkAdjustmentRecords = i1230
  return i1220
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1235 = data
  i1234.m_TargetGlyphID = i1235[0]
  i1234.m_SubstituteGlyphIDs = i1235[1]
  return i1234
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1239 = data
  i1238.m_ComponentGlyphIDs = i1239[0]
  i1238.m_LigatureGlyphID = i1239[1]
  return i1238
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1243 = data
  i1242.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1243[0], i1242.m_FirstAdjustmentRecord)
  i1242.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1243[1], i1242.m_SecondAdjustmentRecord)
  i1242.m_FeatureLookupFlags = i1243[2]
  return i1242
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1246 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1247 = data
  i1246.m_BaseGlyphID = i1247[0]
  i1246.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1247[1], i1246.m_BaseGlyphAnchorPoint)
  i1246.m_MarkGlyphID = i1247[2]
  i1246.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1247[3], i1246.m_MarkPositionAdjustment)
  return i1246
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1251 = data
  i1250.m_BaseMarkGlyphID = i1251[0]
  i1250.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1251[1], i1250.m_BaseMarkGlyphAnchorPoint)
  i1250.m_CombiningMarkGlyphID = i1251[2]
  i1250.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1251[3], i1250.m_CombiningMarkPositionAdjustment)
  return i1250
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'regularTypeface')
  request.r(i1257[2], i1257[3], 0, i1256, 'italicTypeface')
  return i1256
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1258 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1259 = data
  i1258.Name = i1259[0]
  i1258.PointSize = i1259[1]
  i1258.Scale = i1259[2]
  i1258.CharacterCount = i1259[3]
  i1258.LineHeight = i1259[4]
  i1258.Baseline = i1259[5]
  i1258.Ascender = i1259[6]
  i1258.CapHeight = i1259[7]
  i1258.Descender = i1259[8]
  i1258.CenterLine = i1259[9]
  i1258.SuperscriptOffset = i1259[10]
  i1258.SubscriptOffset = i1259[11]
  i1258.SubSize = i1259[12]
  i1258.Underline = i1259[13]
  i1258.UnderlineThickness = i1259[14]
  i1258.strikethrough = i1259[15]
  i1258.strikethroughThickness = i1259[16]
  i1258.TabWidth = i1259[17]
  i1258.Padding = i1259[18]
  i1258.AtlasWidth = i1259[19]
  i1258.AtlasHeight = i1259[20]
  return i1258
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.x = i1263[1]
  i1262.y = i1263[2]
  i1262.width = i1263[3]
  i1262.height = i1263[4]
  i1262.xOffset = i1263[5]
  i1262.yOffset = i1263[6]
  i1262.xAdvance = i1263[7]
  i1262.scale = i1263[8]
  return i1262
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.KerningTable' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('TMPro.KerningPair', i1267[i + 0]));
  }
  i1264.kerningPairs = i1266
  return i1264
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.KerningPair' )
  var i1271 = data
  i1270.xOffset = i1271[0]
  i1270.m_FirstGlyph = i1271[1]
  i1270.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[2], i1270.m_FirstGlyphAdjustments)
  i1270.m_SecondGlyph = i1271[3]
  i1270.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1271[4], i1270.m_SecondGlyphAdjustments)
  i1270.m_IgnoreSpacingAdjustments = !!i1271[5]
  return i1270
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1273 = data
  i1272.m_FaceIndex = i1273[0]
  i1272.m_FamilyName = i1273[1]
  i1272.m_StyleName = i1273[2]
  i1272.m_PointSize = i1273[3]
  i1272.m_Scale = i1273[4]
  i1272.m_UnitsPerEM = i1273[5]
  i1272.m_LineHeight = i1273[6]
  i1272.m_AscentLine = i1273[7]
  i1272.m_CapLine = i1273[8]
  i1272.m_MeanLine = i1273[9]
  i1272.m_Baseline = i1273[10]
  i1272.m_DescentLine = i1273[11]
  i1272.m_SuperscriptOffset = i1273[12]
  i1272.m_SuperscriptSize = i1273[13]
  i1272.m_SubscriptOffset = i1273[14]
  i1272.m_SubscriptSize = i1273[15]
  i1272.m_UnderlineOffset = i1273[16]
  i1272.m_UnderlineThickness = i1273[17]
  i1272.m_StrikethroughOffset = i1273[18]
  i1272.m_StrikethroughThickness = i1273[19]
  i1272.m_TabWidth = i1273[20]
  return i1272
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1274 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1275 = data
  i1274.useSafeMode = !!i1275[0]
  i1274.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1275[1], i1274.safeModeOptions)
  i1274.timeScale = i1275[2]
  i1274.unscaledTimeScale = i1275[3]
  i1274.useSmoothDeltaTime = !!i1275[4]
  i1274.maxSmoothUnscaledTime = i1275[5]
  i1274.rewindCallbackMode = i1275[6]
  i1274.showUnityEditorReport = !!i1275[7]
  i1274.logBehaviour = i1275[8]
  i1274.drawGizmos = !!i1275[9]
  i1274.defaultRecyclable = !!i1275[10]
  i1274.defaultAutoPlay = i1275[11]
  i1274.defaultUpdateType = i1275[12]
  i1274.defaultTimeScaleIndependent = !!i1275[13]
  i1274.defaultEaseType = i1275[14]
  i1274.defaultEaseOvershootOrAmplitude = i1275[15]
  i1274.defaultEasePeriod = i1275[16]
  i1274.defaultAutoKill = !!i1275[17]
  i1274.defaultLoopType = i1275[18]
  i1274.debugMode = !!i1275[19]
  i1274.debugStoreTargetId = !!i1275[20]
  i1274.showPreviewPanel = !!i1275[21]
  i1274.storeSettingsLocation = i1275[22]
  i1274.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1275[23], i1274.modules)
  i1274.createASMDEF = !!i1275[24]
  i1274.showPlayingTweens = !!i1275[25]
  i1274.showPausedTweens = !!i1275[26]
  return i1274
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1276 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1277 = data
  i1276.logBehaviour = i1277[0]
  i1276.nestedTweenFailureBehaviour = i1277[1]
  return i1276
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1278 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1279 = data
  i1278.showPanel = !!i1279[0]
  i1278.audioEnabled = !!i1279[1]
  i1278.physicsEnabled = !!i1279[2]
  i1278.physics2DEnabled = !!i1279[3]
  i1278.spriteEnabled = !!i1279[4]
  i1278.uiEnabled = !!i1279[5]
  i1278.uiToolkitEnabled = !!i1279[6]
  i1278.textMeshProEnabled = !!i1279[7]
  i1278.tk2DEnabled = !!i1279[8]
  i1278.deAudioEnabled = !!i1279[9]
  i1278.deUnityExtendedEnabled = !!i1279[10]
  i1278.epoOutlineEnabled = !!i1279[11]
  return i1278
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_Settings' )
  var i1281 = data
  i1280.assetVersion = i1281[0]
  i1280.m_TextWrappingMode = i1281[1]
  i1280.m_enableKerning = !!i1281[2]
  var i1283 = i1281[3]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(i1283[i + 0]);
  }
  i1280.m_ActiveFontFeatures = i1282
  i1280.m_enableExtraPadding = !!i1281[4]
  i1280.m_enableTintAllSprites = !!i1281[5]
  i1280.m_enableParseEscapeCharacters = !!i1281[6]
  i1280.m_EnableRaycastTarget = !!i1281[7]
  i1280.m_GetFontFeaturesAtRuntime = !!i1281[8]
  i1280.m_missingGlyphCharacter = i1281[9]
  i1280.m_ClearDynamicDataOnBuild = !!i1281[10]
  i1280.m_warningsDisabled = !!i1281[11]
  request.r(i1281[12], i1281[13], 0, i1280, 'm_defaultFontAsset')
  i1280.m_defaultFontAssetPath = i1281[14]
  i1280.m_defaultFontSize = i1281[15]
  i1280.m_defaultAutoSizeMinRatio = i1281[16]
  i1280.m_defaultAutoSizeMaxRatio = i1281[17]
  i1280.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1281[18], i1281[19] )
  i1280.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1281[20], i1281[21] )
  i1280.m_autoSizeTextContainer = !!i1281[22]
  i1280.m_IsTextObjectScaleStatic = !!i1281[23]
  var i1285 = i1281[24]
  var i1284 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1285.length; i += 2) {
  request.r(i1285[i + 0], i1285[i + 1], 1, i1284, '')
  }
  i1280.m_fallbackFontAssets = i1284
  i1280.m_matchMaterialPreset = !!i1281[25]
  i1280.m_HideSubTextObjects = !!i1281[26]
  request.r(i1281[27], i1281[28], 0, i1280, 'm_defaultSpriteAsset')
  i1280.m_defaultSpriteAssetPath = i1281[29]
  i1280.m_enableEmojiSupport = !!i1281[30]
  i1280.m_MissingCharacterSpriteUnicode = i1281[31]
  var i1287 = i1281[32]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1280.m_EmojiFallbackTextAssets = i1286
  i1280.m_defaultColorGradientPresetsPath = i1281[33]
  request.r(i1281[34], i1281[35], 0, i1280, 'm_defaultStyleSheet')
  i1280.m_StyleSheetsResourcePath = i1281[36]
  request.r(i1281[37], i1281[38], 0, i1280, 'm_leadingCharacters')
  request.r(i1281[39], i1281[40], 0, i1280, 'm_followingCharacters')
  i1280.m_UseModernHangulLineBreakingRules = !!i1281[41]
  return i1280
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'spriteSheet')
  var i1293 = i1291[2]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.add(request.d('TMPro.TMP_Sprite', i1293[i + 0]));
  }
  i1290.spriteInfoList = i1292
  var i1295 = i1291[3]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1290.fallbackSpriteAssets = i1294
  var i1297 = i1291[4]
  var i1296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.add(request.d('TMPro.TMP_SpriteCharacter', i1297[i + 0]));
  }
  i1290.m_SpriteCharacterTable = i1296
  var i1299 = i1291[5]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_SpriteGlyph', i1299[i + 0]));
  }
  i1290.m_GlyphTable = i1298
  i1290.m_Version = i1291[6]
  i1290.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1291[7], i1290.m_FaceInfo)
  request.r(i1291[8], i1291[9], 0, i1290, 'm_Material')
  return i1290
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.hashCode = i1303[1]
  i1302.unicode = i1303[2]
  i1302.pivot = new pc.Vec2( i1303[3], i1303[4] )
  request.r(i1303[5], i1303[6], 0, i1302, 'sprite')
  i1302.id = i1303[7]
  i1302.x = i1303[8]
  i1302.y = i1303[9]
  i1302.width = i1303[10]
  i1302.height = i1303[11]
  i1302.xOffset = i1303[12]
  i1302.yOffset = i1303[13]
  i1302.xAdvance = i1303[14]
  i1302.scale = i1303[15]
  return i1302
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1309 = data
  i1308.m_Name = i1309[0]
  i1308.m_ElementType = i1309[1]
  i1308.m_Unicode = i1309[2]
  i1308.m_GlyphIndex = i1309[3]
  i1308.m_Scale = i1309[4]
  return i1308
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'sprite')
  i1312.m_Index = i1313[2]
  i1312.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1313[3], i1312.m_Metrics)
  i1312.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1313[4], i1312.m_GlyphRect)
  i1312.m_Scale = i1313[5]
  i1312.m_AtlasIndex = i1313[6]
  i1312.m_ClassDefinitionType = i1313[7]
  return i1312
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1315 = data
  var i1317 = i1315[0]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_Style', i1317[i + 0]));
  }
  i1314.m_StyleList = i1316
  return i1314
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Style' )
  var i1321 = data
  i1320.m_Name = i1321[0]
  i1320.m_HashCode = i1321[1]
  i1320.m_OpeningDefinition = i1321[2]
  i1320.m_ClosingDefinition = i1321[3]
  i1320.m_OpeningTagArray = i1321[4]
  i1320.m_ClosingTagArray = i1321[5]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1325[i + 0]) );
  }
  i1322.files = i1324
  i1322.componentToPrefabIds = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1329 = data
  i1328.path = i1329[0]
  request.r(i1329[1], i1329[2], 0, i1328, 'unityObject')
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1333[i + 0]) );
  }
  i1330.scriptsExecutionOrder = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1335[i + 0]) );
  }
  i1330.sortingLayers = i1334
  var i1337 = i1331[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1337[i + 0]) );
  }
  i1330.cullingLayers = i1336
  i1330.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1331[3], i1330.timeSettings)
  i1330.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1331[4], i1330.physicsSettings)
  i1330.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1331[5], i1330.physics2DSettings)
  i1330.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1331[6], i1330.qualitySettings)
  i1330.enableRealtimeShadows = !!i1331[7]
  i1330.enableAutoInstancing = !!i1331[8]
  i1330.enableStaticBatching = !!i1331[9]
  i1330.enableDynamicBatching = !!i1331[10]
  i1330.lightmapEncodingQuality = i1331[11]
  i1330.desiredColorSpace = i1331[12]
  var i1339 = i1331[13]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1330.allTags = i1338
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.value = i1343[1]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  i1346.value = i1347[2]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1351 = data
  i1350.id = i1351[0]
  i1350.name = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1353 = data
  i1352.fixedDeltaTime = i1353[0]
  i1352.maximumDeltaTime = i1353[1]
  i1352.timeScale = i1353[2]
  i1352.maximumParticleTimestep = i1353[3]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1355 = data
  i1354.gravity = new pc.Vec3( i1355[0], i1355[1], i1355[2] )
  i1354.defaultSolverIterations = i1355[3]
  i1354.bounceThreshold = i1355[4]
  i1354.autoSyncTransforms = !!i1355[5]
  i1354.autoSimulation = !!i1355[6]
  var i1357 = i1355[7]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1357[i + 0]) );
  }
  i1354.collisionMatrix = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1361 = data
  i1360.enabled = !!i1361[0]
  i1360.layerId = i1361[1]
  i1360.otherLayerId = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'material')
  i1362.gravity = new pc.Vec2( i1363[2], i1363[3] )
  i1362.positionIterations = i1363[4]
  i1362.velocityIterations = i1363[5]
  i1362.velocityThreshold = i1363[6]
  i1362.maxLinearCorrection = i1363[7]
  i1362.maxAngularCorrection = i1363[8]
  i1362.maxTranslationSpeed = i1363[9]
  i1362.maxRotationSpeed = i1363[10]
  i1362.baumgarteScale = i1363[11]
  i1362.baumgarteTOIScale = i1363[12]
  i1362.timeToSleep = i1363[13]
  i1362.linearSleepTolerance = i1363[14]
  i1362.angularSleepTolerance = i1363[15]
  i1362.defaultContactOffset = i1363[16]
  i1362.autoSimulation = !!i1363[17]
  i1362.queriesHitTriggers = !!i1363[18]
  i1362.queriesStartInColliders = !!i1363[19]
  i1362.callbacksOnDisable = !!i1363[20]
  i1362.reuseCollisionCallbacks = !!i1363[21]
  i1362.autoSyncTransforms = !!i1363[22]
  var i1365 = i1363[23]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1365[i + 0]) );
  }
  i1362.collisionMatrix = i1364
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.layerId = i1369[1]
  i1368.otherLayerId = i1369[2]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1373[i + 0]) );
  }
  i1370.qualityLevels = i1372
  var i1375 = i1371[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1370.names = i1374
  i1370.shadows = i1371[2]
  i1370.anisotropicFiltering = i1371[3]
  i1370.antiAliasing = i1371[4]
  i1370.lodBias = i1371[5]
  i1370.shadowCascades = i1371[6]
  i1370.shadowDistance = i1371[7]
  i1370.shadowmaskMode = i1371[8]
  i1370.shadowProjection = i1371[9]
  i1370.shadowResolution = i1371[10]
  i1370.softParticles = !!i1371[11]
  i1370.softVegetation = !!i1371[12]
  i1370.activeColorSpace = i1371[13]
  i1370.desiredColorSpace = i1371[14]
  i1370.masterTextureLimit = i1371[15]
  i1370.maxQueuedFrames = i1371[16]
  i1370.particleRaycastBudget = i1371[17]
  i1370.pixelLightCount = i1371[18]
  i1370.realtimeReflectionProbes = !!i1371[19]
  i1370.shadowCascade2Split = i1371[20]
  i1370.shadowCascade4Split = new pc.Vec3( i1371[21], i1371[22], i1371[23] )
  i1370.streamingMipmapsActive = !!i1371[24]
  i1370.vSyncCount = i1371[25]
  i1370.asyncUploadBufferSize = i1371[26]
  i1370.asyncUploadTimeSlice = i1371[27]
  i1370.billboardsFaceCameraPosition = !!i1371[28]
  i1370.shadowNearPlaneOffset = i1371[29]
  i1370.streamingMipmapsMemoryBudget = i1371[30]
  i1370.maximumLODLevel = i1371[31]
  i1370.streamingMipmapsAddAllCameras = !!i1371[32]
  i1370.streamingMipmapsMaxLevelReduction = i1371[33]
  i1370.streamingMipmapsRenderersPerFrame = i1371[34]
  i1370.resolutionScalingFixedDPIFactor = i1371[35]
  i1370.streamingMipmapsMaxFileIORequests = i1371[36]
  i1370.currentQualityLevel = i1371[37]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1381 = data
  i1380.weight = i1381[0]
  i1380.vertices = i1381[1]
  i1380.normals = i1381[2]
  i1380.tangents = i1381[3]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1385 = data
  i1384.mode = i1385[0]
  i1384.parameter = i1385[1]
  i1384.threshold = i1385[2]
  return i1384
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1387 = data
  i1386.m_GlyphIndex = i1387[0]
  i1386.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1387[1], i1386.m_GlyphValueRecord)
  return i1386
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1388 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1389 = data
  i1388.m_XCoordinate = i1389[0]
  i1388.m_YCoordinate = i1389[1]
  return i1388
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1391 = data
  i1390.m_XPositionAdjustment = i1391[0]
  i1390.m_YPositionAdjustment = i1391[1]
  return i1390
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1393 = data
  i1392.xPlacement = i1393[0]
  i1392.yPlacement = i1393[1]
  i1392.xAdvance = i1393[2]
  i1392.yAdvance = i1393[3]
  return i1392
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1395 = data
  i1394.m_XPlacement = i1395[0]
  i1394.m_YPlacement = i1395[1]
  i1394.m_XAdvance = i1395[2]
  i1394.m_YAdvance = i1395[3]
  return i1394
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[65],"66":[38],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[75],"82":[75],"83":[75],"84":[75],"85":[75],"86":[75],"87":[75],"88":[38],"89":[90],"91":[92],"93":[92],"18":[17],"12":[10],"48":[46],"94":[95],"96":[50],"50":[95],"97":[50],"51":[50],"98":[95],"46":[95],"99":[95],"100":[101],"102":[103],"104":[90,105],"106":[103],"107":[106],"108":[103],"109":[103],"110":[111],"112":[111],"113":[103],"114":[17],"115":[24,17],"116":[90],"117":[24,17],"118":[22,90],"103":[90],"119":[90,105],"120":[68],"121":[75],"122":[123],"124":[111],"125":[14],"126":[38],"127":[128],"129":[42],"130":[18],"131":[17],"132":[90,17],"25":[17,24],"133":[17],"134":[24,17],"135":[90],"136":[24,17],"137":[17],"138":[139],"140":[139],"141":[139],"142":[17],"143":[17],"21":[18],"28":[24,17],"144":[17],"20":[18],"145":[17],"146":[17],"147":[17],"148":[17],"149":[17],"150":[17],"151":[17],"152":[17],"153":[17],"154":[24,17],"155":[17],"156":[17],"157":[17],"27":[17],"158":[24,17],"159":[17],"160":[42],"161":[42],"43":[42],"162":[42],"163":[38],"164":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.SpriteMask","UnityEngine.Sprite","BrushMaskUnit","HeartBreakEffect","UnityEngine.SpriteRenderer","HeartEffect","DirtFX","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UIManager","UnityEngine.GameObject","UnityEngine.Camera","InputManager","HandTutManager","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SortChildByZPos","UnityEngine.CapsuleCollider","ItemSpriteMaskPainter","Item","CleaningTarget","ToolObject","ItemDraggable","ItemDragSpriteMaskPainter","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ItemClickable","UnityEngine.Collider","ItemDragChildRotator","ItemDragRaycastTarget","ItemKnifeSpriteMaskCutter","ItemStirring","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","UnityEngine.MeshFilter","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "07/17/2026 09:46:11";

Deserializers.lunaDaysRunning = "2.9";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_PerfectTidy_V132";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1868";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5394";

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

Deserializers.buildID = "3ae4388c-e4d5-4b2c-b2cf-978395fcfb4c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

