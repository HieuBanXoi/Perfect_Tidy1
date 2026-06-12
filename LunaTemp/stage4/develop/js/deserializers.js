var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointSpring' )
  var i719 = data
  i718.spring = i719[0]
  i718.damper = i719[1]
  i718.targetPosition = i719[2]
  return i718
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointMotor' )
  var i721 = data
  i720.m_TargetVelocity = i721[0]
  i720.m_Force = i721[1]
  i720.m_FreeSpin = i721[2]
  return i720
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointLimits' )
  var i723 = data
  i722.m_Min = i723[0]
  i722.m_Max = i723[1]
  i722.m_Bounciness = i723[2]
  i722.m_BounceMinVelocity = i723[3]
  i722.m_ContactDistance = i723[4]
  i722.minBounce = i723[5]
  i722.maxBounce = i723[6]
  return i722
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointDrive' )
  var i725 = data
  i724.m_PositionSpring = i725[0]
  i724.m_PositionDamper = i725[1]
  i724.m_MaximumForce = i725[2]
  i724.m_UseAcceleration = i725[3]
  return i724
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i727 = data
  i726.m_Spring = i727[0]
  i726.m_Damper = i727[1]
  return i726
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i729 = data
  i728.m_Limit = i729[0]
  i728.m_Bounciness = i729[1]
  i728.m_ContactDistance = i729[2]
  return i728
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i731 = data
  i730.m_ExtremumSlip = i731[0]
  i730.m_ExtremumValue = i731[1]
  i730.m_AsymptoteSlip = i731[2]
  i730.m_AsymptoteValue = i731[3]
  i730.m_Stiffness = i731[4]
  return i730
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i733 = data
  i732.m_LowerAngle = i733[0]
  i732.m_UpperAngle = i733[1]
  return i732
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i735 = data
  i734.m_MotorSpeed = i735[0]
  i734.m_MaximumMotorTorque = i735[1]
  return i734
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i737 = data
  i736.m_DampingRatio = i737[0]
  i736.m_Frequency = i737[1]
  i736.m_Angle = i737[2]
  return i736
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i739 = data
  i738.m_LowerTranslation = i739[0]
  i738.m_UpperTranslation = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i740 = root || new pc.UnityMaterial()
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'shader')
  i740.renderQueue = i741[3]
  i740.enableInstancing = !!i741[4]
  var i743 = i741[5]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i743[i + 0]) );
  }
  i740.floatParameters = i742
  var i745 = i741[6]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i745[i + 0]) );
  }
  i740.colorParameters = i744
  var i747 = i741[7]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i747[i + 0]) );
  }
  i740.vectorParameters = i746
  var i749 = i741[8]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i749[i + 0]) );
  }
  i740.textureParameters = i748
  var i751 = i741[9]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i751[i + 0]) );
  }
  i740.materialFlags = i750
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = new pc.Color(i759[1], i759[2], i759[3], i759[4])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Vec4( i763[1], i763[2], i763[3], i763[4] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i767 = data
  i766.name = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'value')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i771 = data
  i770.name = i771[0]
  i770.enabled = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i773 = data
  i772.name = i773[0]
  i772.width = i773[1]
  i772.height = i773[2]
  i772.mipmapCount = i773[3]
  i772.anisoLevel = i773[4]
  i772.filterMode = i773[5]
  i772.hdr = !!i773[6]
  i772.format = i773[7]
  i772.wrapMode = i773[8]
  i772.alphaIsTransparency = !!i773[9]
  i772.alphaSource = i773[10]
  i772.graphicsFormat = i773[11]
  i772.sRGBTexture = !!i773[12]
  i772.desiredColorSpace = i773[13]
  i772.wrapU = i773[14]
  i772.wrapV = i773[15]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i775 = data
  i774.position = new pc.Vec3( i775[0], i775[1], i775[2] )
  i774.scale = new pc.Vec3( i775[3], i775[4], i775[5] )
  i774.rotation = new pc.Quat(i775[6], i775[7], i775[8], i775[9])
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i777 = data
  i776.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i777[0], i776.main)
  i776.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i777[1], i776.colorBySpeed)
  i776.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i777[2], i776.colorOverLifetime)
  i776.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i777[3], i776.emission)
  i776.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i777[4], i776.rotationBySpeed)
  i776.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i777[5], i776.rotationOverLifetime)
  i776.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i777[6], i776.shape)
  i776.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i777[7], i776.sizeBySpeed)
  i776.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i777[8], i776.sizeOverLifetime)
  i776.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i777[9], i776.textureSheetAnimation)
  i776.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i777[10], i776.velocityOverLifetime)
  i776.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i777[11], i776.noise)
  i776.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i777[12], i776.inheritVelocity)
  i776.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i777[13], i776.forceOverLifetime)
  i776.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i777[14], i776.limitVelocityOverLifetime)
  i776.useAutoRandomSeed = !!i777[15]
  i776.randomSeed = i777[16]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemMain()
  var i779 = data
  i778.duration = i779[0]
  i778.loop = !!i779[1]
  i778.prewarm = !!i779[2]
  i778.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.startDelay)
  i778.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[4], i778.startLifetime)
  i778.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[5], i778.startSpeed)
  i778.startSize3D = !!i779[6]
  i778.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[7], i778.startSizeX)
  i778.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[8], i778.startSizeY)
  i778.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[9], i778.startSizeZ)
  i778.startRotation3D = !!i779[10]
  i778.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[11], i778.startRotationX)
  i778.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[12], i778.startRotationY)
  i778.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[13], i778.startRotationZ)
  i778.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[14], i778.startColor)
  i778.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[15], i778.gravityModifier)
  i778.simulationSpace = i779[16]
  request.r(i779[17], i779[18], 0, i778, 'customSimulationSpace')
  i778.simulationSpeed = i779[19]
  i778.useUnscaledTime = !!i779[20]
  i778.scalingMode = i779[21]
  i778.playOnAwake = !!i779[22]
  i778.maxParticles = i779[23]
  i778.emitterVelocityMode = i779[24]
  i778.stopAction = i779[25]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i780 = root || new pc.MinMaxCurve()
  var i781 = data
  i780.mode = i781[0]
  i780.curveMin = new pc.AnimationCurve( { keys_flow: i781[1] } )
  i780.curveMax = new pc.AnimationCurve( { keys_flow: i781[2] } )
  i780.curveMultiplier = i781[3]
  i780.constantMin = i781[4]
  i780.constantMax = i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i782 = root || new pc.MinMaxGradient()
  var i783 = data
  i782.mode = i783[0]
  i782.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[1], i782.gradientMin)
  i782.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i783[2], i782.gradientMax)
  i782.colorMin = new pc.Color(i783[3], i783[4], i783[5], i783[6])
  i782.colorMax = new pc.Color(i783[7], i783[8], i783[9], i783[10])
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i785 = data
  i784.mode = i785[0]
  var i787 = i785[1]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i787[i + 0]) );
  }
  i784.colorKeys = i786
  var i789 = i785[2]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i789[i + 0]) );
  }
  i784.alphaKeys = i788
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemColorBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[1], i790.color)
  i790.range = new pc.Vec2( i791[2], i791[3] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i795 = data
  i794.color = new pc.Color(i795[0], i795[1], i795[2], i795[3])
  i794.time = i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i799 = data
  i798.alpha = i799[0]
  i798.time = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemColorOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i801[1], i800.color)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemEmitter()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.rateOverTime)
  i802.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.rateOverDistance)
  var i805 = i803[3]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i805[i + 0]) );
  }
  i802.bursts = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemBurst()
  var i809 = data
  i808.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[0], i808.count)
  i808.cycleCount = i809[1]
  i808.minCount = i809[2]
  i808.maxCount = i809[3]
  i808.repeatInterval = i809[4]
  i808.time = i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemRotationBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemRotationOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemShape()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.shapeType = i815[1]
  i814.randomDirectionAmount = i815[2]
  i814.sphericalDirectionAmount = i815[3]
  i814.randomPositionAmount = i815[4]
  i814.alignToDirection = !!i815[5]
  i814.radius = i815[6]
  i814.radiusMode = i815[7]
  i814.radiusSpread = i815[8]
  i814.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[9], i814.radiusSpeed)
  i814.radiusThickness = i815[10]
  i814.angle = i815[11]
  i814.length = i815[12]
  i814.boxThickness = new pc.Vec3( i815[13], i815[14], i815[15] )
  i814.meshShapeType = i815[16]
  request.r(i815[17], i815[18], 0, i814, 'mesh')
  request.r(i815[19], i815[20], 0, i814, 'meshRenderer')
  request.r(i815[21], i815[22], 0, i814, 'skinnedMeshRenderer')
  i814.useMeshMaterialIndex = !!i815[23]
  i814.meshMaterialIndex = i815[24]
  i814.useMeshColors = !!i815[25]
  i814.normalOffset = i815[26]
  i814.arc = i815[27]
  i814.arcMode = i815[28]
  i814.arcSpread = i815[29]
  i814.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[30], i814.arcSpeed)
  i814.donutRadius = i815[31]
  i814.position = new pc.Vec3( i815[32], i815[33], i815[34] )
  i814.rotation = new pc.Vec3( i815[35], i815[36], i815[37] )
  i814.scale = new pc.Vec3( i815[38], i815[39], i815[40] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemSizeBySpeed()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  i816.range = new pc.Vec2( i817[5], i817[6] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemSizeOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.animation = i821[2]
  i820.numTilesX = i821[3]
  i820.numTilesY = i821[4]
  i820.useRandomRow = !!i821[5]
  i820.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[6], i820.frameOverTime)
  i820.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.startFrame)
  i820.cycleCount = i821[8]
  i820.rowIndex = i821[9]
  i820.flipU = i821[10]
  i820.flipV = i821[11]
  i820.spriteCount = i821[12]
  var i823 = i821[13]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sprites = i822
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.radial)
  i826.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[5], i826.speedModifier)
  i826.space = i827[6]
  i826.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.orbitalX)
  i826.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.orbitalY)
  i826.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.orbitalZ)
  i826.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[10], i826.orbitalOffsetX)
  i826.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[11], i826.orbitalOffsetY)
  i826.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[12], i826.orbitalOffsetZ)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemNoise()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.separateAxes = !!i829[1]
  i828.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.strengthX)
  i828.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.strengthY)
  i828.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.strengthZ)
  i828.frequency = i829[5]
  i828.damping = !!i829[6]
  i828.octaveCount = i829[7]
  i828.octaveMultiplier = i829[8]
  i828.octaveScale = i829[9]
  i828.quality = i829[10]
  i828.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[11], i828.scrollSpeed)
  i828.scrollSpeedMultiplier = i829[12]
  i828.remapEnabled = !!i829[13]
  i828.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[14], i828.remapX)
  i828.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[15], i828.remapY)
  i828.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[16], i828.remapZ)
  i828.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[17], i828.positionAmount)
  i828.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[18], i828.rotationAmount)
  i828.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[19], i828.sizeAmount)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemInheritVelocity()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.mode = i831[1]
  i830.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.curve)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemForceOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.space = i833[4]
  i832.randomized = !!i833[5]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[1], i834.limit)
  i834.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.limitX)
  i834.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.limitY)
  i834.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.limitZ)
  i834.dampen = i835[5]
  i834.separateAxes = !!i835[6]
  i834.space = i835[7]
  i834.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[8], i834.drag)
  i834.multiplyDragByParticleSize = !!i835[9]
  i834.multiplyDragByParticleVelocity = !!i835[10]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'mesh')
  i836.meshCount = i837[2]
  i836.activeVertexStreamsCount = i837[3]
  i836.alignment = i837[4]
  i836.renderMode = i837[5]
  i836.sortMode = i837[6]
  i836.lengthScale = i837[7]
  i836.velocityScale = i837[8]
  i836.cameraVelocityScale = i837[9]
  i836.normalDirection = i837[10]
  i836.sortingFudge = i837[11]
  i836.minParticleSize = i837[12]
  i836.maxParticleSize = i837[13]
  i836.pivot = new pc.Vec3( i837[14], i837[15], i837[16] )
  request.r(i837[17], i837[18], 0, i836, 'trailMaterial')
  i836.applyActiveColorSpace = !!i837[19]
  i836.enabled = !!i837[20]
  request.r(i837[21], i837[22], 0, i836, 'sharedMaterial')
  var i839 = i837[23]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[24]
  i836.shadowCastingMode = i837[25]
  i836.sortingLayerID = i837[26]
  i836.sortingOrder = i837[27]
  i836.lightmapIndex = i837[28]
  i836.lightmapSceneIndex = i837[29]
  i836.lightmapScaleOffset = new pc.Vec4( i837[30], i837[31], i837[32], i837[33] )
  i836.lightProbeUsage = i837[34]
  i836.reflectionProbeUsage = i837[35]
  return i836
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i842 = root || request.c( 'MergeEffect' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'tf')
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i845 = data
  i844.name = i845[0]
  i844.tagId = i845[1]
  i844.enabled = !!i845[2]
  i844.isStatic = !!i845[3]
  i844.layer = i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i847 = data
  i846.name = i847[0]
  i846.halfPrecision = !!i847[1]
  i846.useSimplification = !!i847[2]
  i846.useUInt32IndexFormat = !!i847[3]
  i846.vertexCount = i847[4]
  i846.aabb = i847[5]
  var i849 = i847[6]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( !!i849[i + 0] );
  }
  i846.streams = i848
  i846.vertices = i847[7]
  var i851 = i847[8]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i851[i + 0]) );
  }
  i846.subMeshes = i850
  var i853 = i847[9]
  var i852 = []
  for(var i = 0; i < i853.length; i += 16) {
    i852.push( new pc.Mat4().setData(i853[i + 0], i853[i + 1], i853[i + 2], i853[i + 3],  i853[i + 4], i853[i + 5], i853[i + 6], i853[i + 7],  i853[i + 8], i853[i + 9], i853[i + 10], i853[i + 11],  i853[i + 12], i853[i + 13], i853[i + 14], i853[i + 15]) );
  }
  i846.bindposes = i852
  var i855 = i847[10]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i855[i + 0]) );
  }
  i846.blendShapes = i854
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i861 = data
  i860.triangles = i861[0]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i867 = data
  i866.name = i867[0]
  var i869 = i867[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i869[i + 0]) );
  }
  i866.frames = i868
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i871 = data
  i870.name = i871[0]
  i870.index = i871[1]
  i870.startup = !!i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i873 = data
  i872.pivot = new pc.Vec2( i873[0], i873[1] )
  i872.anchorMin = new pc.Vec2( i873[2], i873[3] )
  i872.anchorMax = new pc.Vec2( i873[4], i873[5] )
  i872.sizeDelta = new pc.Vec2( i873[6], i873[7] )
  i872.anchoredPosition3D = new pc.Vec3( i873[8], i873[9], i873[10] )
  i872.rotation = new pc.Quat(i873[11], i873[12], i873[13], i873[14])
  i872.scale = new pc.Vec3( i873[15], i873[16], i873[17] )
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i875 = data
  i874.planeDistance = i875[0]
  i874.referencePixelsPerUnit = i875[1]
  i874.isFallbackOverlay = !!i875[2]
  i874.renderMode = i875[3]
  i874.renderOrder = i875[4]
  i874.sortingLayerName = i875[5]
  i874.sortingOrder = i875[6]
  i874.scaleFactor = i875[7]
  request.r(i875[8], i875[9], 0, i874, 'worldCamera')
  i874.overrideSorting = !!i875[10]
  i874.pixelPerfect = !!i875[11]
  i874.targetDisplay = i875[12]
  i874.overridePixelPerfect = !!i875[13]
  i874.enabled = !!i875[14]
  return i874
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i877 = data
  i876.m_UiScaleMode = i877[0]
  i876.m_ReferencePixelsPerUnit = i877[1]
  i876.m_ScaleFactor = i877[2]
  i876.m_ReferenceResolution = new pc.Vec2( i877[3], i877[4] )
  i876.m_ScreenMatchMode = i877[5]
  i876.m_MatchWidthOrHeight = i877[6]
  i876.m_PhysicalUnit = i877[7]
  i876.m_FallbackScreenDPI = i877[8]
  i876.m_DefaultSpriteDPI = i877[9]
  i876.m_DynamicPixelsPerUnit = i877[10]
  i876.m_PresetInfoIsWorld = !!i877[11]
  return i876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i879 = data
  i878.m_IgnoreReversedGraphics = !!i879[0]
  i878.m_BlockingObjects = i879[1]
  i878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i879[2] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'animatorController')
  request.r(i881[2], i881[3], 0, i880, 'avatar')
  i880.updateMode = i881[4]
  i880.hasTransformHierarchy = !!i881[5]
  i880.applyRootMotion = !!i881[6]
  var i883 = i881[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.humanBones = i882
  i880.enabled = !!i881[8]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i887 = data
  i886.cullTransparentMesh = !!i887[0]
  return i886
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i888 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i889 = data
  i888.m_hasFontAssetChanged = !!i889[0]
  request.r(i889[1], i889[2], 0, i888, 'm_baseMaterial')
  i888.m_maskOffset = new pc.Vec4( i889[3], i889[4], i889[5], i889[6] )
  i888.m_text = i889[7]
  i888.m_isRightToLeft = !!i889[8]
  request.r(i889[9], i889[10], 0, i888, 'm_fontAsset')
  request.r(i889[11], i889[12], 0, i888, 'm_sharedMaterial')
  var i891 = i889[13]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.m_fontSharedMaterials = i890
  request.r(i889[14], i889[15], 0, i888, 'm_fontMaterial')
  var i893 = i889[16]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i888.m_fontMaterials = i892
  i888.m_fontColor32 = UnityEngine.Color32.ConstructColor(i889[17], i889[18], i889[19], i889[20])
  i888.m_fontColor = new pc.Color(i889[21], i889[22], i889[23], i889[24])
  i888.m_enableVertexGradient = !!i889[25]
  i888.m_colorMode = i889[26]
  i888.m_fontColorGradient = request.d('TMPro.VertexGradient', i889[27], i888.m_fontColorGradient)
  request.r(i889[28], i889[29], 0, i888, 'm_fontColorGradientPreset')
  request.r(i889[30], i889[31], 0, i888, 'm_spriteAsset')
  i888.m_tintAllSprites = !!i889[32]
  request.r(i889[33], i889[34], 0, i888, 'm_StyleSheet')
  i888.m_TextStyleHashCode = i889[35]
  i888.m_overrideHtmlColors = !!i889[36]
  i888.m_faceColor = UnityEngine.Color32.ConstructColor(i889[37], i889[38], i889[39], i889[40])
  i888.m_fontSize = i889[41]
  i888.m_fontSizeBase = i889[42]
  i888.m_fontWeight = i889[43]
  i888.m_enableAutoSizing = !!i889[44]
  i888.m_fontSizeMin = i889[45]
  i888.m_fontSizeMax = i889[46]
  i888.m_fontStyle = i889[47]
  i888.m_HorizontalAlignment = i889[48]
  i888.m_VerticalAlignment = i889[49]
  i888.m_textAlignment = i889[50]
  i888.m_characterSpacing = i889[51]
  i888.m_wordSpacing = i889[52]
  i888.m_lineSpacing = i889[53]
  i888.m_lineSpacingMax = i889[54]
  i888.m_paragraphSpacing = i889[55]
  i888.m_charWidthMaxAdj = i889[56]
  i888.m_TextWrappingMode = i889[57]
  i888.m_wordWrappingRatios = i889[58]
  i888.m_overflowMode = i889[59]
  request.r(i889[60], i889[61], 0, i888, 'm_linkedTextComponent')
  request.r(i889[62], i889[63], 0, i888, 'parentLinkedComponent')
  i888.m_enableKerning = !!i889[64]
  var i895 = i889[65]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(i895[i + 0]);
  }
  i888.m_ActiveFontFeatures = i894
  i888.m_enableExtraPadding = !!i889[66]
  i888.checkPaddingRequired = !!i889[67]
  i888.m_isRichText = !!i889[68]
  i888.m_parseCtrlCharacters = !!i889[69]
  i888.m_isOrthographic = !!i889[70]
  i888.m_isCullingEnabled = !!i889[71]
  i888.m_horizontalMapping = i889[72]
  i888.m_verticalMapping = i889[73]
  i888.m_uvLineOffset = i889[74]
  i888.m_geometrySortingOrder = i889[75]
  i888.m_IsTextObjectScaleStatic = !!i889[76]
  i888.m_VertexBufferAutoSizeReduction = !!i889[77]
  i888.m_useMaxVisibleDescender = !!i889[78]
  i888.m_pageToDisplay = i889[79]
  i888.m_margin = new pc.Vec4( i889[80], i889[81], i889[82], i889[83] )
  i888.m_isUsingLegacyAnimationComponent = !!i889[84]
  i888.m_isVolumetricText = !!i889[85]
  request.r(i889[86], i889[87], 0, i888, 'm_Material')
  i888.m_EmojiFallbackSupport = !!i889[88]
  i888.m_Maskable = !!i889[89]
  i888.m_Color = new pc.Color(i889[90], i889[91], i889[92], i889[93])
  i888.m_RaycastTarget = !!i889[94]
  i888.m_RaycastPadding = new pc.Vec4( i889[95], i889[96], i889[97], i889[98] )
  return i888
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.VertexGradient' )
  var i897 = data
  i896.topLeft = new pc.Color(i897[0], i897[1], i897[2], i897[3])
  i896.topRight = new pc.Color(i897[4], i897[5], i897[6], i897[7])
  i896.bottomLeft = new pc.Color(i897[8], i897[9], i897[10], i897[11])
  i896.bottomRight = new pc.Color(i897[12], i897[13], i897[14], i897[15])
  return i896
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Slider' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_FillRect')
  request.r(i901[2], i901[3], 0, i900, 'm_HandleRect')
  i900.m_Direction = i901[4]
  i900.m_MinValue = i901[5]
  i900.m_MaxValue = i901[6]
  i900.m_WholeNumbers = !!i901[7]
  i900.m_Value = i901[8]
  i900.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i901[9], i900.m_OnValueChanged)
  i900.m_Navigation = request.d('UnityEngine.UI.Navigation', i901[10], i900.m_Navigation)
  i900.m_Transition = i901[11]
  i900.m_Colors = request.d('UnityEngine.UI.ColorBlock', i901[12], i900.m_Colors)
  i900.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i901[13], i900.m_SpriteState)
  i900.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i901[14], i900.m_AnimationTriggers)
  i900.m_Interactable = !!i901[15]
  request.r(i901[16], i901[17], 0, i900, 'm_TargetGraphic')
  return i900
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i903 = data
  i902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i903[0], i902.m_PersistentCalls)
  return i902
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i905 = data
  var i907 = i905[0]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('UnityEngine.Events.PersistentCall', i907[i + 0]));
  }
  i904.m_Calls = i906
  return i904
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Target')
  i910.m_TargetAssemblyTypeName = i911[2]
  i910.m_MethodName = i911[3]
  i910.m_Mode = i911[4]
  i910.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i911[5], i910.m_Arguments)
  i910.m_CallState = i911[6]
  return i910
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i913 = data
  i912.m_Mode = i913[0]
  i912.m_WrapAround = !!i913[1]
  request.r(i913[2], i913[3], 0, i912, 'm_SelectOnUp')
  request.r(i913[4], i913[5], 0, i912, 'm_SelectOnDown')
  request.r(i913[6], i913[7], 0, i912, 'm_SelectOnLeft')
  request.r(i913[8], i913[9], 0, i912, 'm_SelectOnRight')
  return i912
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i915 = data
  i914.m_NormalColor = new pc.Color(i915[0], i915[1], i915[2], i915[3])
  i914.m_HighlightedColor = new pc.Color(i915[4], i915[5], i915[6], i915[7])
  i914.m_PressedColor = new pc.Color(i915[8], i915[9], i915[10], i915[11])
  i914.m_SelectedColor = new pc.Color(i915[12], i915[13], i915[14], i915[15])
  i914.m_DisabledColor = new pc.Color(i915[16], i915[17], i915[18], i915[19])
  i914.m_ColorMultiplier = i915[20]
  i914.m_FadeDuration = i915[21]
  return i914
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_HighlightedSprite')
  request.r(i917[2], i917[3], 0, i916, 'm_PressedSprite')
  request.r(i917[4], i917[5], 0, i916, 'm_SelectedSprite')
  request.r(i917[6], i917[7], 0, i916, 'm_DisabledSprite')
  return i916
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i919 = data
  i918.m_NormalTrigger = i919[0]
  i918.m_HighlightedTrigger = i919[1]
  i918.m_PressedTrigger = i919[2]
  i918.m_SelectedTrigger = i919[3]
  i918.m_DisabledTrigger = i919[4]
  return i918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Image' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Sprite')
  i920.m_Type = i921[2]
  i920.m_PreserveAspect = !!i921[3]
  i920.m_FillCenter = !!i921[4]
  i920.m_FillMethod = i921[5]
  i920.m_FillAmount = i921[6]
  i920.m_FillClockwise = !!i921[7]
  i920.m_FillOrigin = i921[8]
  i920.m_UseSpriteMesh = !!i921[9]
  i920.m_PixelsPerUnitMultiplier = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_Material')
  i920.m_Maskable = !!i921[13]
  i920.m_Color = new pc.Color(i921[14], i921[15], i921[16], i921[17])
  i920.m_RaycastTarget = !!i921[18]
  i920.m_RaycastPadding = new pc.Vec4( i921[19], i921[20], i921[21], i921[22] )
  return i920
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Button' )
  var i923 = data
  i922.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i923[0], i922.m_OnClick)
  i922.m_Navigation = request.d('UnityEngine.UI.Navigation', i923[1], i922.m_Navigation)
  i922.m_Transition = i923[2]
  i922.m_Colors = request.d('UnityEngine.UI.ColorBlock', i923[3], i922.m_Colors)
  i922.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i923[4], i922.m_SpriteState)
  i922.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i923[5], i922.m_AnimationTriggers)
  i922.m_Interactable = !!i923[6]
  request.r(i923[7], i923[8], 0, i922, 'm_TargetGraphic')
  return i922
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i925 = data
  i924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i925[0], i924.m_PersistentCalls)
  return i924
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'm_ObjectArgument')
  i926.m_ObjectArgumentAssemblyTypeName = i927[2]
  i926.m_IntArgument = i927[3]
  i926.m_FloatArgument = i927[4]
  i926.m_StringArgument = i927[5]
  i926.m_BoolArgument = !!i927[6]
  return i926
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i928 = root || request.c( 'Ply_Pool' )
  var i929 = data
  var i931 = i929[0]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Ply_Pool+PoolAmount', i931[i + 0]) );
  }
  i928.poolAmounts = i930
  request.r(i929[1], i929[2], 0, i928, 'poolHolder')
  return i928
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i934 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i935 = data
  i934.type = i935[0]
  i934.amount = i935[1]
  request.r(i935[2], i935[3], 0, i934, 'gameUnit')
  return i934
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i936 = root || request.c( 'Ply_SoundManager' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.audioClips = i938
  request.r(i937[1], i937[2], 0, i936, 'sound')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'clip')
  request.r(i943[2], i943[3], 0, i942, 'outputAudioMixerGroup')
  i942.playOnAwake = !!i943[4]
  i942.loop = !!i943[5]
  i942.time = i943[6]
  i942.volume = i943[7]
  i942.pitch = i943[8]
  i942.enabled = !!i943[9]
  return i942
}

Deserializers["GameManager"] = function (request, data, root) {
  var i944 = root || request.c( 'GameManager' )
  var i945 = data
  i944.isPlaying = !!i945[0]
  i944.isTutorial = !!i945[1]
  i944.isGotoStore = !!i945[2]
  i944.countMove = i945[3]
  i944.maxMove = i945[4]
  i944.startLayer = i945[5]
  i944.currentLayer = i945[6]
  request.r(i945[7], i945[8], 0, i944, 'mainBox')
  request.r(i945[9], i945[10], 0, i944, 'handTutorial')
  i944.tutorialDelay = i945[11]
  return i944
}

Deserializers["UIManager"] = function (request, data, root) {
  var i946 = root || request.c( 'UIManager' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'winUI')
  request.r(i947[2], i947[3], 0, i946, 'loseUI')
  request.r(i947[4], i947[5], 0, i946, 'tutorial')
  request.r(i947[6], i947[7], 0, i946, 'verticalUI')
  request.r(i947[8], i947[9], 0, i946, 'horizontalUI')
  request.r(i947[10], i947[11], 0, i946, 'downloadBtnVertical')
  request.r(i947[12], i947[13], 0, i946, 'dowloadBtnHorizontal')
  request.r(i947[14], i947[15], 0, i946, 'progressSlider')
  request.r(i947[16], i947[17], 0, i946, 'progressText')
  i946.maxProgressItems = i947[18]
  i946.startProgressItems = i947[19]
  i946.screenWidth = i947[20]
  i946.screenHeight = i947[21]
  i946.scaleHeightOnWidth = i947[22]
  i946.isVertical = !!i947[23]
  request.r(i947[24], i947[25], 0, i946, 'cam')
  i946.introZoomOutMultiplier = i947[26]
  i946.cameraZoomDuration = i947[27]
  i946.useContinuousScaling = !!i947[28]
  i946.baseOrthographicSize = i947[29]
  i946.baseAspect = i947[30]
  i946.landscapeSize = i947[31]
  i946.defaultPortraitSize = i947[32]
  var i949 = i947[33]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('ScreenScaleStep', i949[i + 0]));
  }
  i946.discreteScaleSteps = i948
  i946.usePerspectiveCamera = !!i947[34]
  request.r(i947[35], i947[36], 0, i946, 'perspectiveFocus')
  i946.perspectiveFocusDistance = i947[37]
  i946.perspectivePadding = i947[38]
  i946.fitRendererBounds = !!i947[39]
  request.r(i947[40], i947[41], 0, i946, 'boundsRoot')
  var i951 = i947[42]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i946.boundsRenderers = i950
  return i946
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i954 = root || request.c( 'ScreenScaleStep' )
  var i955 = data
  i954.heightOnWidthRatio = i955[0]
  i954.orthographicSize = i955[1]
  return i954
}

Deserializers["InputManager"] = function (request, data, root) {
  var i958 = root || request.c( 'InputManager' )
  var i959 = data
  i958.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i959[0] )
  i958.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i959[1] )
  i958.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i959[2] )
  i958.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i959[3] )
  i958.isDragging = !!i959[4]
  request.r(i959[5], i959[6], 0, i958, 'mainCamera')
  return i958
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i960 = root || request.c( 'ItemSetupTool' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'spritesParent')
  request.r(i961[2], i961[3], 0, i960, 'holdersParent')
  i960.shadowSuffix = i961[4]
  i960.holderPrefix = i961[5]
  i960.holdersParentName = i961[6]
  i960.colliderDepth = i961[7]
  i960.colliderSizeMultiplier = i961[8]
  i960.generatedShadowColor = new pc.Color(i961[9], i961[10], i961[11], i961[12])
  i960.fadedBlackShadowColor = new pc.Color(i961[13], i961[14], i961[15], i961[16])
  i960.generatedShadowLocalOffset = new pc.Vec3( i961[17], i961[18], i961[19] )
  i960.itemLayerName = i961[20]
  i960.holderLayerName = i961[21]
  return i960
}

Deserializers["CameraController"] = function (request, data, root) {
  var i962 = root || request.c( 'CameraController' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'targetCamera')
  i962.enableZoom = !!i963[2]
  i962.minZoomRatio = i963[3]
  i962.maxZoomRatio = i963[4]
  i962.mouseWheelZoomSpeed = i963[5]
  i962.pinchZoomSpeed = i963[6]
  i962.enableDrag = !!i963[7]
  i962.horizontalOnly = !!i963[8]
  i962.dragSensitivity = i963[9]
  i962.maxHorizontalOffset = i963[10]
  i962.maxVerticalOffset = i963[11]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i965 = data
  i964.aspect = i965[0]
  i964.orthographic = !!i965[1]
  i964.orthographicSize = i965[2]
  i964.backgroundColor = new pc.Color(i965[3], i965[4], i965[5], i965[6])
  i964.nearClipPlane = i965[7]
  i964.farClipPlane = i965[8]
  i964.fieldOfView = i965[9]
  i964.depth = i965[10]
  i964.clearFlags = i965[11]
  i964.cullingMask = i965[12]
  i964.rect = i965[13]
  request.r(i965[14], i965[15], 0, i964, 'targetTexture')
  i964.usePhysicalProperties = !!i965[16]
  i964.focalLength = i965[17]
  i964.sensorSize = new pc.Vec2( i965[18], i965[19] )
  i964.lensShift = new pc.Vec2( i965[20], i965[21] )
  i964.gateFit = i965[22]
  i964.commandBufferCount = i965[23]
  i964.cameraType = i965[24]
  i964.enabled = !!i965[25]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i967 = data
  i966.type = i967[0]
  i966.color = new pc.Color(i967[1], i967[2], i967[3], i967[4])
  i966.cullingMask = i967[5]
  i966.intensity = i967[6]
  i966.range = i967[7]
  i966.spotAngle = i967[8]
  i966.shadows = i967[9]
  i966.shadowNormalBias = i967[10]
  i966.shadowBias = i967[11]
  i966.shadowStrength = i967[12]
  i966.shadowResolution = i967[13]
  i966.lightmapBakeType = i967[14]
  i966.renderMode = i967[15]
  request.r(i967[16], i967[17], 0, i966, 'cookie')
  i966.cookieSize = i967[18]
  i966.shadowNearPlane = i967[19]
  i966.occlusionMaskChannel = i967[20]
  i966.enabled = !!i967[21]
  return i966
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_FirstSelected')
  i968.m_sendNavigationEvents = !!i969[2]
  i968.m_DragThreshold = i969[3]
  return i968
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i971 = data
  i970.m_HorizontalAxis = i971[0]
  i970.m_VerticalAxis = i971[1]
  i970.m_SubmitButton = i971[2]
  i970.m_CancelButton = i971[3]
  i970.m_InputActionsPerSecond = i971[4]
  i970.m_RepeatDelay = i971[5]
  i970.m_ForceModuleActive = !!i971[6]
  i970.m_SendPointerHoverToParent = !!i971[7]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i973 = data
  i972.color = new pc.Color(i973[0], i973[1], i973[2], i973[3])
  request.r(i973[4], i973[5], 0, i972, 'sprite')
  i972.flipX = !!i973[6]
  i972.flipY = !!i973[7]
  i972.drawMode = i973[8]
  i972.size = new pc.Vec2( i973[9], i973[10] )
  i972.tileMode = i973[11]
  i972.adaptiveModeThreshold = i973[12]
  i972.maskInteraction = i973[13]
  i972.spriteSortPoint = i973[14]
  i972.enabled = !!i973[15]
  request.r(i973[16], i973[17], 0, i972, 'sharedMaterial')
  var i975 = i973[18]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.sharedMaterials = i974
  i972.receiveShadows = !!i973[19]
  i972.shadowCastingMode = i973[20]
  i972.sortingLayerID = i973[21]
  i972.sortingOrder = i973[22]
  i972.lightmapIndex = i973[23]
  i972.lightmapSceneIndex = i973[24]
  i972.lightmapScaleOffset = new pc.Vec4( i973[25], i973[26], i973[27], i973[28] )
  i972.lightProbeUsage = i973[29]
  i972.reflectionProbeUsage = i973[30]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i977 = data
  i976.center = new pc.Vec3( i977[0], i977[1], i977[2] )
  i976.radius = i977[3]
  i976.enabled = !!i977[4]
  i976.isTrigger = !!i977[5]
  request.r(i977[6], i977[7], 0, i976, 'material')
  return i976
}

Deserializers["Box"] = function (request, data, root) {
  var i978 = root || request.c( 'Box' )
  var i979 = data
  i978.useBox = !!i979[0]
  i978.spawnMode = i979[1]
  var i981 = i979[2]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 1, i980, '')
  }
  i978.dynamicItems = i980
  var i983 = i979[3]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i978.spawnTargets = i982
  i978.initialSpawnCount = i979[4]
  i978.revealDuration = i979[5]
  i978.showInitialBatchShadowsOnSpawn = !!i979[6]
  request.r(i979[7], i979[8], 0, i978, 'graphicController')
  return i978
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i988 = root || request.c( 'BoxGraphicController' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'skeletonAnimation')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'sharedMesh')
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'additionalVertexStreams')
  i992.enabled = !!i993[2]
  request.r(i993[3], i993[4], 0, i992, 'sharedMaterial')
  var i995 = i993[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sharedMaterials = i994
  i992.receiveShadows = !!i993[6]
  i992.shadowCastingMode = i993[7]
  i992.sortingLayerID = i993[8]
  i992.sortingOrder = i993[9]
  i992.lightmapIndex = i993[10]
  i992.lightmapSceneIndex = i993[11]
  i992.lightmapScaleOffset = new pc.Vec4( i993[12], i993[13], i993[14], i993[15] )
  i992.lightProbeUsage = i993[16]
  i992.reflectionProbeUsage = i993[17]
  return i992
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i996 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i997 = data
  i996.loop = !!i997[0]
  i996.timeScale = i997[1]
  request.r(i997[2], i997[3], 0, i996, 'skeletonDataAsset')
  i996.initialSkinName = i997[4]
  i996.fixPrefabOverrideViaMeshFilter = i997[5]
  i996.initialFlipX = !!i997[6]
  i996.initialFlipY = !!i997[7]
  i996.updateWhenInvisible = i997[8]
  i996.zSpacing = i997[9]
  i996.useClipping = !!i997[10]
  i996.immutableTriangles = !!i997[11]
  i996.pmaVertexColors = !!i997[12]
  i996.clearStateOnDisable = !!i997[13]
  i996.tintBlack = !!i997[14]
  i996.singleSubmesh = !!i997[15]
  i996.fixDrawOrder = !!i997[16]
  i996.addNormals = !!i997[17]
  i996.calculateTangents = !!i997[18]
  i996.maskInteraction = i997[19]
  i996.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i997[20], i996.maskMaterials)
  i996.disableRenderingOnOverride = !!i997[21]
  i996._animationName = i997[22]
  var i999 = i997[23]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i996.separatorSlotNames = i998
  return i996
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1000 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.materialsMaskDisabled = i1002
  var i1005 = i1001[1]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1000.materialsInsideMask = i1004
  var i1007 = i1001[2]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1000.materialsOutsideMask = i1006
  return i1000
}

Deserializers["Item"] = function (request, data, root) {
  var i1010 = root || request.c( 'Item' )
  var i1011 = data
  i1010.placeSoundType = i1011[0]
  i1010.id = i1011[1]
  i1010.currentState = i1011[2]
  i1010.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1011[3] )
  i1010.scaleOnSpawn = !!i1011[4]
  i1010.spawnScaleMultiplier = i1011[5]
  request.r(i1011[6], i1011[7], 0, i1010, 'correctHolderTransform')
  request.r(i1011[8], i1011[9], 0, i1010, 'shadowOnHolder')
  i1010.canShowShadowHint = !!i1011[10]
  i1010.waitingPosition = new pc.Vec3( i1011[11], i1011[12], i1011[13] )
  request.r(i1011[14], i1011[15], 0, i1010, 'spriteRenderer')
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1013 = data
  i1012.center = new pc.Vec3( i1013[0], i1013[1], i1013[2] )
  i1012.size = new pc.Vec3( i1013[3], i1013[4], i1013[5] )
  i1012.enabled = !!i1013[6]
  i1012.isTrigger = !!i1013[7]
  request.r(i1013[8], i1013[9], 0, i1012, 'material')
  return i1012
}

Deserializers["PSD_Tool"] = function (request, data, root) {
  var i1014 = root || request.c( 'PSD_Tool' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1014.sprites = i1016
  request.r(i1015[1], i1015[2], 0, i1014, 'holder')
  var i1019 = i1015[3]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1014.childGameObjects = i1018
  return i1014
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1024 = root || request.c( 'ItemHolder' )
  var i1025 = data
  i1024.id = i1025[0]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1027 = data
  i1026.ambientIntensity = i1027[0]
  i1026.reflectionIntensity = i1027[1]
  i1026.ambientMode = i1027[2]
  i1026.ambientLight = new pc.Color(i1027[3], i1027[4], i1027[5], i1027[6])
  i1026.ambientSkyColor = new pc.Color(i1027[7], i1027[8], i1027[9], i1027[10])
  i1026.ambientGroundColor = new pc.Color(i1027[11], i1027[12], i1027[13], i1027[14])
  i1026.ambientEquatorColor = new pc.Color(i1027[15], i1027[16], i1027[17], i1027[18])
  i1026.fogColor = new pc.Color(i1027[19], i1027[20], i1027[21], i1027[22])
  i1026.fogEndDistance = i1027[23]
  i1026.fogStartDistance = i1027[24]
  i1026.fogDensity = i1027[25]
  i1026.fog = !!i1027[26]
  request.r(i1027[27], i1027[28], 0, i1026, 'skybox')
  i1026.fogMode = i1027[29]
  var i1029 = i1027[30]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1029[i + 0]) );
  }
  i1026.lightmaps = i1028
  i1026.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1027[31], i1026.lightProbes)
  i1026.lightmapsMode = i1027[32]
  i1026.mixedBakeMode = i1027[33]
  i1026.environmentLightingMode = i1027[34]
  i1026.ambientProbe = new pc.SphericalHarmonicsL2(i1027[35])
  i1026.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1027[36])
  i1026.useReferenceAmbientProbe = !!i1027[37]
  request.r(i1027[38], i1027[39], 0, i1026, 'customReflection')
  request.r(i1027[40], i1027[41], 0, i1026, 'defaultReflection')
  i1026.defaultReflectionMode = i1027[42]
  i1026.defaultReflectionResolution = i1027[43]
  i1026.sunLightObjectId = i1027[44]
  i1026.pixelLightCount = i1027[45]
  i1026.defaultReflectionHDR = !!i1027[46]
  i1026.hasLightDataAsset = !!i1027[47]
  i1026.hasManualGenerate = !!i1027[48]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'lightmapColor')
  request.r(i1033[2], i1033[3], 0, i1032, 'lightmapDirection')
  request.r(i1033[4], i1033[5], 0, i1032, 'shadowMask')
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1034 = root || new UnityEngine.LightProbes()
  var i1035 = data
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1045[i + 0]));
  }
  i1042.ShaderCompilationErrors = i1044
  i1042.name = i1043[1]
  i1042.guid = i1043[2]
  var i1047 = i1043[3]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.shaderDefinedKeywords = i1046
  var i1049 = i1043[4]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1049[i + 0]) );
  }
  i1042.passes = i1048
  var i1051 = i1043[5]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1051[i + 0]) );
  }
  i1042.usePasses = i1050
  var i1053 = i1043[6]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1053[i + 0]) );
  }
  i1042.defaultParameterValues = i1052
  request.r(i1043[7], i1043[8], 0, i1042, 'unityFallbackShader')
  i1042.readDepth = !!i1043[9]
  i1042.hasDepthOnlyPass = !!i1043[10]
  i1042.isCreatedByShaderGraph = !!i1043[11]
  i1042.disableBatching = !!i1043[12]
  i1042.compiled = !!i1043[13]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1057 = data
  i1056.shaderName = i1057[0]
  i1056.errorMessage = i1057[1]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1060 = root || new pc.UnityShaderPass()
  var i1061 = data
  i1060.id = i1061[0]
  i1060.subShaderIndex = i1061[1]
  i1060.name = i1061[2]
  i1060.passType = i1061[3]
  i1060.grabPassTextureName = i1061[4]
  i1060.usePass = !!i1061[5]
  i1060.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[6], i1060.zTest)
  i1060.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[7], i1060.zWrite)
  i1060.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[8], i1060.culling)
  i1060.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1061[9], i1060.blending)
  i1060.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1061[10], i1060.alphaBlending)
  i1060.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[11], i1060.colorWriteMask)
  i1060.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[12], i1060.offsetUnits)
  i1060.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[13], i1060.offsetFactor)
  i1060.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[14], i1060.stencilRef)
  i1060.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[15], i1060.stencilReadMask)
  i1060.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1061[16], i1060.stencilWriteMask)
  i1060.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[17], i1060.stencilOp)
  i1060.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[18], i1060.stencilOpFront)
  i1060.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1061[19], i1060.stencilOpBack)
  var i1063 = i1061[20]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1063[i + 0]) );
  }
  i1060.tags = i1062
  var i1065 = i1061[21]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( i1065[i + 0] );
  }
  i1060.passDefinedKeywords = i1064
  var i1067 = i1061[22]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1067[i + 0]) );
  }
  i1060.passDefinedKeywordGroups = i1066
  var i1069 = i1061[23]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1069[i + 0]) );
  }
  i1060.variants = i1068
  var i1071 = i1061[24]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1071[i + 0]) );
  }
  i1060.excludedVariants = i1070
  i1060.hasDepthReader = !!i1061[25]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1073 = data
  i1072.val = i1073[0]
  i1072.name = i1073[1]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1075 = data
  i1074.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[0], i1074.src)
  i1074.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[1], i1074.dst)
  i1074.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[2], i1074.op)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1077 = data
  i1076.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[0], i1076.pass)
  i1076.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[1], i1076.fail)
  i1076.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[2], i1076.zFail)
  i1076.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1077[3], i1076.comp)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.value = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1085 = data
  var i1087 = i1085[0]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1084.keywords = i1086
  i1084.hasDiscard = !!i1085[1]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1091 = data
  i1090.passId = i1091[0]
  i1090.subShaderIndex = i1091[1]
  var i1093 = i1091[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1090.keywords = i1092
  i1090.vertexProgram = i1091[3]
  i1090.fragmentProgram = i1091[4]
  i1090.exportedForWebGl2 = !!i1091[5]
  i1090.readDepth = !!i1091[6]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'shader')
  i1096.pass = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.type = i1101[1]
  i1100.value = new pc.Vec4( i1101[2], i1101[3], i1101[4], i1101[5] )
  i1100.textureValue = i1101[6]
  i1100.shaderPropertyFlag = i1101[7]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1103 = data
  i1102.name = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'texture')
  i1102.aabb = i1103[3]
  i1102.vertices = i1103[4]
  i1102.triangles = i1103[5]
  i1102.textureRect = UnityEngine.Rect.MinMaxRect(i1103[6], i1103[7], i1103[8], i1103[9])
  i1102.packedRect = UnityEngine.Rect.MinMaxRect(i1103[10], i1103[11], i1103[12], i1103[13])
  i1102.border = new pc.Vec4( i1103[14], i1103[15], i1103[16], i1103[17] )
  i1102.transparency = i1103[18]
  i1102.bounds = i1103[19]
  i1102.pixelsPerUnit = i1103[20]
  i1102.textureWidth = i1103[21]
  i1102.textureHeight = i1103[22]
  i1102.nativeSize = new pc.Vec2( i1103[23], i1103[24] )
  i1102.pivot = new pc.Vec2( i1103[25], i1103[26] )
  i1102.textureRectOffset = new pc.Vec2( i1103[27], i1103[28] )
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1105 = data
  i1104.name = i1105[0]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.wrapMode = i1107[1]
  i1106.isLooping = !!i1107[2]
  i1106.length = i1107[3]
  var i1109 = i1107[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1109[i + 0]) );
  }
  i1106.curves = i1108
  var i1111 = i1107[5]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1111[i + 0]) );
  }
  i1106.events = i1110
  i1106.halfPrecision = !!i1107[6]
  i1106._frameRate = i1107[7]
  i1106.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1107[8], i1106.localBounds)
  i1106.hasMuscleCurves = !!i1107[9]
  var i1113 = i1107[10]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1106.clipMuscleConstant = i1112
  i1106.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1107[11], i1106.clipBindingConstant)
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1117 = data
  i1116.path = i1117[0]
  i1116.hash = i1117[1]
  i1116.componentType = i1117[2]
  i1116.property = i1117[3]
  i1116.keys = i1117[4]
  var i1119 = i1117[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1119[i + 0]) );
  }
  i1116.objectReferenceKeys = i1118
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1123 = data
  i1122.time = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'value')
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1127 = data
  i1126.functionName = i1127[0]
  i1126.floatParameter = i1127[1]
  i1126.intParameter = i1127[2]
  i1126.stringParameter = i1127[3]
  request.r(i1127[4], i1127[5], 0, i1126, 'objectReferenceParameter')
  i1126.time = i1127[6]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1129 = data
  i1128.center = new pc.Vec3( i1129[0], i1129[1], i1129[2] )
  i1128.extends = new pc.Vec3( i1129[3], i1129[4], i1129[5] )
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1132.genericBindings = i1134
  var i1137 = i1133[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1132.pptrCurveMapping = i1136
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1139 = data
  i1138.name = i1139[0]
  var i1141 = i1139[1]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1141[i + 0]) );
  }
  i1138.layers = i1140
  var i1143 = i1139[2]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1143[i + 0]) );
  }
  i1138.parameters = i1142
  i1138.animationClips = i1139[3]
  i1138.avatarUnsupported = i1139[4]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.defaultWeight = i1147[1]
  i1146.blendingMode = i1147[2]
  i1146.avatarMask = i1147[3]
  i1146.syncedLayerIndex = i1147[4]
  i1146.syncedLayerAffectsTiming = !!i1147[5]
  i1146.syncedLayers = i1147[6]
  i1146.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1147[7], i1146.stateMachine)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  i1148.path = i1149[2]
  var i1151 = i1149[3]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1151[i + 0]) );
  }
  i1148.states = i1150
  var i1153 = i1149[4]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1153[i + 0]) );
  }
  i1148.machines = i1152
  var i1155 = i1149[5]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1155[i + 0]) );
  }
  i1148.entryStateTransitions = i1154
  var i1157 = i1149[6]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1157[i + 0]) );
  }
  i1148.exitStateTransitions = i1156
  var i1159 = i1149[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1159[i + 0]) );
  }
  i1148.anyStateTransitions = i1158
  i1148.defaultStateId = i1149[8]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1163 = data
  i1162.id = i1163[0]
  i1162.name = i1163[1]
  i1162.cycleOffset = i1163[2]
  i1162.cycleOffsetParameter = i1163[3]
  i1162.cycleOffsetParameterActive = !!i1163[4]
  i1162.mirror = !!i1163[5]
  i1162.mirrorParameter = i1163[6]
  i1162.mirrorParameterActive = !!i1163[7]
  i1162.motionId = i1163[8]
  i1162.nameHash = i1163[9]
  i1162.fullPathHash = i1163[10]
  i1162.speed = i1163[11]
  i1162.speedParameter = i1163[12]
  i1162.speedParameterActive = !!i1163[13]
  i1162.tag = i1163[14]
  i1162.tagHash = i1163[15]
  i1162.writeDefaultValues = !!i1163[16]
  var i1165 = i1163[17]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 2) {
  request.r(i1165[i + 0], i1165[i + 1], 2, i1164, '')
  }
  i1162.behaviours = i1164
  var i1167 = i1163[18]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1167[i + 0]) );
  }
  i1162.transitions = i1166
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1173 = data
  i1172.fullPath = i1173[0]
  i1172.canTransitionToSelf = !!i1173[1]
  i1172.duration = i1173[2]
  i1172.exitTime = i1173[3]
  i1172.hasExitTime = !!i1173[4]
  i1172.hasFixedDuration = !!i1173[5]
  i1172.interruptionSource = i1173[6]
  i1172.offset = i1173[7]
  i1172.orderedInterruption = !!i1173[8]
  i1172.destinationStateId = i1173[9]
  i1172.isExit = !!i1173[10]
  i1172.mute = !!i1173[11]
  i1172.solo = !!i1173[12]
  var i1175 = i1173[13]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1175[i + 0]) );
  }
  i1172.conditions = i1174
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1181 = data
  i1180.destinationStateId = i1181[0]
  i1180.isExit = !!i1181[1]
  i1180.mute = !!i1181[2]
  i1180.solo = !!i1181[3]
  var i1183 = i1181[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1183[i + 0]) );
  }
  i1180.conditions = i1182
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1187 = data
  i1186.defaultBool = !!i1187[0]
  i1186.defaultFloat = i1187[1]
  i1186.defaultInt = i1187[2]
  i1186.name = i1187[3]
  i1186.nameHash = i1187[4]
  i1186.type = i1187[5]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.bytes64 = i1189[1]
  i1188.data = i1189[2]
  return i1188
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1191 = data
  i1190.normalStyle = i1191[0]
  i1190.normalSpacingOffset = i1191[1]
  i1190.boldStyle = i1191[2]
  i1190.boldSpacing = i1191[3]
  i1190.italicStyle = i1191[4]
  i1190.tabSize = i1191[5]
  request.r(i1191[6], i1191[7], 0, i1190, 'atlas')
  i1190.m_SourceFontFileGUID = i1191[8]
  i1190.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1191[9], i1190.m_CreationSettings)
  request.r(i1191[10], i1191[11], 0, i1190, 'm_SourceFontFile')
  i1190.m_SourceFontFilePath = i1191[12]
  i1190.m_AtlasPopulationMode = i1191[13]
  i1190.InternalDynamicOS = !!i1191[14]
  var i1193 = i1191[15]
  var i1192 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.add(request.d('UnityEngine.TextCore.Glyph', i1193[i + 0]));
  }
  i1190.m_GlyphTable = i1192
  var i1195 = i1191[16]
  var i1194 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.add(request.d('TMPro.TMP_Character', i1195[i + 0]));
  }
  i1190.m_CharacterTable = i1194
  var i1197 = i1191[17]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1190.m_AtlasTextures = i1196
  i1190.m_AtlasTextureIndex = i1191[18]
  i1190.m_IsMultiAtlasTexturesEnabled = !!i1191[19]
  i1190.m_GetFontFeatures = !!i1191[20]
  i1190.m_ClearDynamicDataOnBuild = !!i1191[21]
  i1190.m_AtlasWidth = i1191[22]
  i1190.m_AtlasHeight = i1191[23]
  i1190.m_AtlasPadding = i1191[24]
  i1190.m_AtlasRenderMode = i1191[25]
  var i1199 = i1191[26]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.add(request.d('UnityEngine.TextCore.GlyphRect', i1199[i + 0]));
  }
  i1190.m_UsedGlyphRects = i1198
  var i1201 = i1191[27]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('UnityEngine.TextCore.GlyphRect', i1201[i + 0]));
  }
  i1190.m_FreeGlyphRects = i1200
  i1190.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1191[28], i1190.m_FontFeatureTable)
  i1190.m_ShouldReimportFontFeatures = !!i1191[29]
  var i1203 = i1191[30]
  var i1202 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 1, i1202, '')
  }
  i1190.m_FallbackFontAssetTable = i1202
  var i1205 = i1191[31]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('TMPro.TMP_FontWeightPair', i1205[i + 0]) );
  }
  i1190.m_FontWeightTable = i1204
  var i1207 = i1191[32]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('TMPro.TMP_FontWeightPair', i1207[i + 0]) );
  }
  i1190.fontWeights = i1206
  i1190.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1191[33], i1190.m_fontInfo)
  var i1209 = i1191[34]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Glyph', i1209[i + 0]));
  }
  i1190.m_glyphInfoList = i1208
  i1190.m_KerningTable = request.d('TMPro.KerningTable', i1191[35], i1190.m_KerningTable)
  var i1211 = i1191[36]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1190.fallbackFontAssets = i1210
  i1190.m_Version = i1191[37]
  i1190.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1191[38], i1190.m_FaceInfo)
  request.r(i1191[39], i1191[40], 0, i1190, 'm_Material')
  return i1190
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1213 = data
  i1212.sourceFontFileName = i1213[0]
  i1212.sourceFontFileGUID = i1213[1]
  i1212.faceIndex = i1213[2]
  i1212.pointSizeSamplingMode = i1213[3]
  i1212.pointSize = i1213[4]
  i1212.padding = i1213[5]
  i1212.paddingMode = i1213[6]
  i1212.packingMode = i1213[7]
  i1212.atlasWidth = i1213[8]
  i1212.atlasHeight = i1213[9]
  i1212.characterSetSelectionMode = i1213[10]
  i1212.characterSequence = i1213[11]
  i1212.referencedFontAssetGUID = i1213[12]
  i1212.referencedTextAssetGUID = i1213[13]
  i1212.fontStyle = i1213[14]
  i1212.fontStyleModifier = i1213[15]
  i1212.renderMode = i1213[16]
  i1212.includeFontFeatures = !!i1213[17]
  return i1212
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1217 = data
  i1216.m_Index = i1217[0]
  i1216.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1217[1], i1216.m_Metrics)
  i1216.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1217[2], i1216.m_GlyphRect)
  i1216.m_Scale = i1217[3]
  i1216.m_AtlasIndex = i1217[4]
  i1216.m_ClassDefinitionType = i1217[5]
  return i1216
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1219 = data
  i1218.m_Width = i1219[0]
  i1218.m_Height = i1219[1]
  i1218.m_HorizontalBearingX = i1219[2]
  i1218.m_HorizontalBearingY = i1219[3]
  i1218.m_HorizontalAdvance = i1219[4]
  return i1218
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1221 = data
  i1220.m_X = i1221[0]
  i1220.m_Y = i1221[1]
  i1220.m_Width = i1221[2]
  i1220.m_Height = i1221[3]
  return i1220
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_Character' )
  var i1225 = data
  i1224.m_ElementType = i1225[0]
  i1224.m_Unicode = i1225[1]
  i1224.m_GlyphIndex = i1225[2]
  i1224.m_Scale = i1225[3]
  return i1224
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.MultipleSubstitutionRecord', i1233[i + 0]));
  }
  i1230.m_MultipleSubstitutionRecords = i1232
  var i1235 = i1231[1]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.LigatureSubstitutionRecord', i1235[i + 0]));
  }
  i1230.m_LigatureSubstitutionRecords = i1234
  var i1237 = i1231[2]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1237[i + 0]));
  }
  i1230.m_GlyphPairAdjustmentRecords = i1236
  var i1239 = i1231[3]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1239[i + 0]));
  }
  i1230.m_MarkToBaseAdjustmentRecords = i1238
  var i1241 = i1231[4]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1241[i + 0]));
  }
  i1230.m_MarkToMarkAdjustmentRecords = i1240
  return i1230
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1244 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1245 = data
  i1244.m_TargetGlyphID = i1245[0]
  i1244.m_SubstituteGlyphIDs = i1245[1]
  return i1244
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1249 = data
  i1248.m_ComponentGlyphIDs = i1249[0]
  i1248.m_LigatureGlyphID = i1249[1]
  return i1248
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1253 = data
  i1252.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1253[0], i1252.m_FirstAdjustmentRecord)
  i1252.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1253[1], i1252.m_SecondAdjustmentRecord)
  i1252.m_FeatureLookupFlags = i1253[2]
  return i1252
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1257 = data
  i1256.m_BaseGlyphID = i1257[0]
  i1256.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1257[1], i1256.m_BaseGlyphAnchorPoint)
  i1256.m_MarkGlyphID = i1257[2]
  i1256.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1257[3], i1256.m_MarkPositionAdjustment)
  return i1256
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1261 = data
  i1260.m_BaseMarkGlyphID = i1261[0]
  i1260.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1261[1], i1260.m_BaseMarkGlyphAnchorPoint)
  i1260.m_CombiningMarkGlyphID = i1261[2]
  i1260.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1261[3], i1260.m_CombiningMarkPositionAdjustment)
  return i1260
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1267 = data
  request.r(i1267[0], i1267[1], 0, i1266, 'regularTypeface')
  request.r(i1267[2], i1267[3], 0, i1266, 'italicTypeface')
  return i1266
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1269 = data
  i1268.Name = i1269[0]
  i1268.PointSize = i1269[1]
  i1268.Scale = i1269[2]
  i1268.CharacterCount = i1269[3]
  i1268.LineHeight = i1269[4]
  i1268.Baseline = i1269[5]
  i1268.Ascender = i1269[6]
  i1268.CapHeight = i1269[7]
  i1268.Descender = i1269[8]
  i1268.CenterLine = i1269[9]
  i1268.SuperscriptOffset = i1269[10]
  i1268.SubscriptOffset = i1269[11]
  i1268.SubSize = i1269[12]
  i1268.Underline = i1269[13]
  i1268.UnderlineThickness = i1269[14]
  i1268.strikethrough = i1269[15]
  i1268.strikethroughThickness = i1269[16]
  i1268.TabWidth = i1269[17]
  i1268.Padding = i1269[18]
  i1268.AtlasWidth = i1269[19]
  i1268.AtlasHeight = i1269[20]
  return i1268
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1273 = data
  i1272.id = i1273[0]
  i1272.x = i1273[1]
  i1272.y = i1273[2]
  i1272.width = i1273[3]
  i1272.height = i1273[4]
  i1272.xOffset = i1273[5]
  i1272.yOffset = i1273[6]
  i1272.xAdvance = i1273[7]
  i1272.scale = i1273[8]
  return i1272
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.KerningTable' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.KerningPair', i1277[i + 0]));
  }
  i1274.kerningPairs = i1276
  return i1274
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.KerningPair' )
  var i1281 = data
  i1280.xOffset = i1281[0]
  i1280.m_FirstGlyph = i1281[1]
  i1280.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1281[2], i1280.m_FirstGlyphAdjustments)
  i1280.m_SecondGlyph = i1281[3]
  i1280.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1281[4], i1280.m_SecondGlyphAdjustments)
  i1280.m_IgnoreSpacingAdjustments = !!i1281[5]
  return i1280
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1283 = data
  i1282.m_FaceIndex = i1283[0]
  i1282.m_FamilyName = i1283[1]
  i1282.m_StyleName = i1283[2]
  i1282.m_PointSize = i1283[3]
  i1282.m_Scale = i1283[4]
  i1282.m_UnitsPerEM = i1283[5]
  i1282.m_LineHeight = i1283[6]
  i1282.m_AscentLine = i1283[7]
  i1282.m_CapLine = i1283[8]
  i1282.m_MeanLine = i1283[9]
  i1282.m_Baseline = i1283[10]
  i1282.m_DescentLine = i1283[11]
  i1282.m_SuperscriptOffset = i1283[12]
  i1282.m_SuperscriptSize = i1283[13]
  i1282.m_SubscriptOffset = i1283[14]
  i1282.m_SubscriptSize = i1283[15]
  i1282.m_UnderlineOffset = i1283[16]
  i1282.m_UnderlineThickness = i1283[17]
  i1282.m_StrikethroughOffset = i1283[18]
  i1282.m_StrikethroughThickness = i1283[19]
  i1282.m_TabWidth = i1283[20]
  return i1282
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1284 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 2, i1286, '')
  }
  i1284.atlasAssets = i1286
  i1284.scale = i1285[1]
  request.r(i1285[2], i1285[3], 0, i1284, 'skeletonJSON')
  i1284.isUpgradingBlendModeMaterials = !!i1285[4]
  i1284.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1285[5], i1284.blendModeMaterials)
  var i1289 = i1285[6]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 1, i1288, '')
  }
  i1284.skeletonDataModifiers = i1288
  var i1291 = i1285[7]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1284.fromAnimation = i1290
  var i1293 = i1285[8]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1284.toAnimation = i1292
  i1284.duration = i1285[9]
  i1284.defaultMix = i1285[10]
  request.r(i1285[11], i1285[12], 0, i1284, 'controller')
  return i1284
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1296 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1297 = data
  i1296.applyAdditiveMaterial = !!i1297[0]
  var i1299 = i1297[1]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1299[i + 0]));
  }
  i1296.additiveMaterials = i1298
  var i1301 = i1297[2]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1301[i + 0]));
  }
  i1296.multiplyMaterials = i1300
  var i1303 = i1297[3]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1303[i + 0]));
  }
  i1296.screenMaterials = i1302
  i1296.requiresBlendModeMaterials = !!i1297[4]
  return i1296
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1306 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1307 = data
  i1306.pageName = i1307[0]
  request.r(i1307[1], i1307[2], 0, i1306, 'material')
  return i1306
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1310 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'atlasFile')
  var i1313 = i1311[2]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 2, i1312, '')
  }
  i1310.materials = i1312
  return i1310
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1315 = data
  i1314.useSafeMode = !!i1315[0]
  i1314.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1315[1], i1314.safeModeOptions)
  i1314.timeScale = i1315[2]
  i1314.unscaledTimeScale = i1315[3]
  i1314.useSmoothDeltaTime = !!i1315[4]
  i1314.maxSmoothUnscaledTime = i1315[5]
  i1314.rewindCallbackMode = i1315[6]
  i1314.showUnityEditorReport = !!i1315[7]
  i1314.logBehaviour = i1315[8]
  i1314.drawGizmos = !!i1315[9]
  i1314.defaultRecyclable = !!i1315[10]
  i1314.defaultAutoPlay = i1315[11]
  i1314.defaultUpdateType = i1315[12]
  i1314.defaultTimeScaleIndependent = !!i1315[13]
  i1314.defaultEaseType = i1315[14]
  i1314.defaultEaseOvershootOrAmplitude = i1315[15]
  i1314.defaultEasePeriod = i1315[16]
  i1314.defaultAutoKill = !!i1315[17]
  i1314.defaultLoopType = i1315[18]
  i1314.debugMode = !!i1315[19]
  i1314.debugStoreTargetId = !!i1315[20]
  i1314.showPreviewPanel = !!i1315[21]
  i1314.storeSettingsLocation = i1315[22]
  i1314.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1315[23], i1314.modules)
  i1314.createASMDEF = !!i1315[24]
  i1314.showPlayingTweens = !!i1315[25]
  i1314.showPausedTweens = !!i1315[26]
  return i1314
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1316 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1317 = data
  i1316.logBehaviour = i1317[0]
  i1316.nestedTweenFailureBehaviour = i1317[1]
  return i1316
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1318 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1319 = data
  i1318.showPanel = !!i1319[0]
  i1318.audioEnabled = !!i1319[1]
  i1318.physicsEnabled = !!i1319[2]
  i1318.physics2DEnabled = !!i1319[3]
  i1318.spriteEnabled = !!i1319[4]
  i1318.uiEnabled = !!i1319[5]
  i1318.uiToolkitEnabled = !!i1319[6]
  i1318.textMeshProEnabled = !!i1319[7]
  i1318.tk2DEnabled = !!i1319[8]
  i1318.deAudioEnabled = !!i1319[9]
  i1318.deUnityExtendedEnabled = !!i1319[10]
  i1318.epoOutlineEnabled = !!i1319[11]
  return i1318
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Settings' )
  var i1321 = data
  i1320.assetVersion = i1321[0]
  i1320.m_TextWrappingMode = i1321[1]
  i1320.m_enableKerning = !!i1321[2]
  var i1323 = i1321[3]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(i1323[i + 0]);
  }
  i1320.m_ActiveFontFeatures = i1322
  i1320.m_enableExtraPadding = !!i1321[4]
  i1320.m_enableTintAllSprites = !!i1321[5]
  i1320.m_enableParseEscapeCharacters = !!i1321[6]
  i1320.m_EnableRaycastTarget = !!i1321[7]
  i1320.m_GetFontFeaturesAtRuntime = !!i1321[8]
  i1320.m_missingGlyphCharacter = i1321[9]
  i1320.m_ClearDynamicDataOnBuild = !!i1321[10]
  i1320.m_warningsDisabled = !!i1321[11]
  request.r(i1321[12], i1321[13], 0, i1320, 'm_defaultFontAsset')
  i1320.m_defaultFontAssetPath = i1321[14]
  i1320.m_defaultFontSize = i1321[15]
  i1320.m_defaultAutoSizeMinRatio = i1321[16]
  i1320.m_defaultAutoSizeMaxRatio = i1321[17]
  i1320.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1321[18], i1321[19] )
  i1320.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1321[20], i1321[21] )
  i1320.m_autoSizeTextContainer = !!i1321[22]
  i1320.m_IsTextObjectScaleStatic = !!i1321[23]
  var i1325 = i1321[24]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1320.m_fallbackFontAssets = i1324
  i1320.m_matchMaterialPreset = !!i1321[25]
  i1320.m_HideSubTextObjects = !!i1321[26]
  request.r(i1321[27], i1321[28], 0, i1320, 'm_defaultSpriteAsset')
  i1320.m_defaultSpriteAssetPath = i1321[29]
  i1320.m_enableEmojiSupport = !!i1321[30]
  i1320.m_MissingCharacterSpriteUnicode = i1321[31]
  var i1327 = i1321[32]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 1, i1326, '')
  }
  i1320.m_EmojiFallbackTextAssets = i1326
  i1320.m_defaultColorGradientPresetsPath = i1321[33]
  request.r(i1321[34], i1321[35], 0, i1320, 'm_defaultStyleSheet')
  i1320.m_StyleSheetsResourcePath = i1321[36]
  request.r(i1321[37], i1321[38], 0, i1320, 'm_leadingCharacters')
  request.r(i1321[39], i1321[40], 0, i1320, 'm_followingCharacters')
  i1320.m_UseModernHangulLineBreakingRules = !!i1321[41]
  return i1320
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'spriteSheet')
  var i1333 = i1331[2]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.TMP_Sprite', i1333[i + 0]));
  }
  i1330.spriteInfoList = i1332
  var i1335 = i1331[3]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 1, i1334, '')
  }
  i1330.fallbackSpriteAssets = i1334
  var i1337 = i1331[4]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.add(request.d('TMPro.TMP_SpriteCharacter', i1337[i + 0]));
  }
  i1330.m_SpriteCharacterTable = i1336
  var i1339 = i1331[5]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.add(request.d('TMPro.TMP_SpriteGlyph', i1339[i + 0]));
  }
  i1330.m_GlyphTable = i1338
  i1330.m_Version = i1331[6]
  i1330.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1331[7], i1330.m_FaceInfo)
  request.r(i1331[8], i1331[9], 0, i1330, 'm_Material')
  return i1330
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.hashCode = i1343[1]
  i1342.unicode = i1343[2]
  i1342.pivot = new pc.Vec2( i1343[3], i1343[4] )
  request.r(i1343[5], i1343[6], 0, i1342, 'sprite')
  i1342.id = i1343[7]
  i1342.x = i1343[8]
  i1342.y = i1343[9]
  i1342.width = i1343[10]
  i1342.height = i1343[11]
  i1342.xOffset = i1343[12]
  i1342.yOffset = i1343[13]
  i1342.xAdvance = i1343[14]
  i1342.scale = i1343[15]
  return i1342
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1349 = data
  i1348.m_Name = i1349[0]
  i1348.m_ElementType = i1349[1]
  i1348.m_Unicode = i1349[2]
  i1348.m_GlyphIndex = i1349[3]
  i1348.m_Scale = i1349[4]
  return i1348
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1353 = data
  request.r(i1353[0], i1353[1], 0, i1352, 'sprite')
  i1352.m_Index = i1353[2]
  i1352.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1353[3], i1352.m_Metrics)
  i1352.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1353[4], i1352.m_GlyphRect)
  i1352.m_Scale = i1353[5]
  i1352.m_AtlasIndex = i1353[6]
  i1352.m_ClassDefinitionType = i1353[7]
  return i1352
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_Style', i1357[i + 0]));
  }
  i1354.m_StyleList = i1356
  return i1354
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_Style' )
  var i1361 = data
  i1360.m_Name = i1361[0]
  i1360.m_HashCode = i1361[1]
  i1360.m_OpeningDefinition = i1361[2]
  i1360.m_ClosingDefinition = i1361[3]
  i1360.m_OpeningTagArray = i1361[4]
  i1360.m_ClosingTagArray = i1361[5]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1365[i + 0]) );
  }
  i1362.files = i1364
  i1362.componentToPrefabIds = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1369 = data
  i1368.path = i1369[0]
  request.r(i1369[1], i1369[2], 0, i1368, 'unityObject')
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1373[i + 0]) );
  }
  i1370.scriptsExecutionOrder = i1372
  var i1375 = i1371[1]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1375[i + 0]) );
  }
  i1370.sortingLayers = i1374
  var i1377 = i1371[2]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1377[i + 0]) );
  }
  i1370.cullingLayers = i1376
  i1370.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1371[3], i1370.timeSettings)
  i1370.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1371[4], i1370.physicsSettings)
  i1370.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1371[5], i1370.physics2DSettings)
  i1370.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1371[6], i1370.qualitySettings)
  i1370.enableRealtimeShadows = !!i1371[7]
  i1370.enableAutoInstancing = !!i1371[8]
  i1370.enableStaticBatching = !!i1371[9]
  i1370.enableDynamicBatching = !!i1371[10]
  i1370.lightmapEncodingQuality = i1371[11]
  i1370.desiredColorSpace = i1371[12]
  var i1379 = i1371[13]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( i1379[i + 0] );
  }
  i1370.allTags = i1378
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.value = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1387 = data
  i1386.id = i1387[0]
  i1386.name = i1387[1]
  i1386.value = i1387[2]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1391 = data
  i1390.id = i1391[0]
  i1390.name = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1393 = data
  i1392.fixedDeltaTime = i1393[0]
  i1392.maximumDeltaTime = i1393[1]
  i1392.timeScale = i1393[2]
  i1392.maximumParticleTimestep = i1393[3]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1395 = data
  i1394.gravity = new pc.Vec3( i1395[0], i1395[1], i1395[2] )
  i1394.defaultSolverIterations = i1395[3]
  i1394.bounceThreshold = i1395[4]
  i1394.autoSyncTransforms = !!i1395[5]
  i1394.autoSimulation = !!i1395[6]
  var i1397 = i1395[7]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1397[i + 0]) );
  }
  i1394.collisionMatrix = i1396
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1401 = data
  i1400.enabled = !!i1401[0]
  i1400.layerId = i1401[1]
  i1400.otherLayerId = i1401[2]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'material')
  i1402.gravity = new pc.Vec2( i1403[2], i1403[3] )
  i1402.positionIterations = i1403[4]
  i1402.velocityIterations = i1403[5]
  i1402.velocityThreshold = i1403[6]
  i1402.maxLinearCorrection = i1403[7]
  i1402.maxAngularCorrection = i1403[8]
  i1402.maxTranslationSpeed = i1403[9]
  i1402.maxRotationSpeed = i1403[10]
  i1402.baumgarteScale = i1403[11]
  i1402.baumgarteTOIScale = i1403[12]
  i1402.timeToSleep = i1403[13]
  i1402.linearSleepTolerance = i1403[14]
  i1402.angularSleepTolerance = i1403[15]
  i1402.defaultContactOffset = i1403[16]
  i1402.autoSimulation = !!i1403[17]
  i1402.queriesHitTriggers = !!i1403[18]
  i1402.queriesStartInColliders = !!i1403[19]
  i1402.callbacksOnDisable = !!i1403[20]
  i1402.reuseCollisionCallbacks = !!i1403[21]
  i1402.autoSyncTransforms = !!i1403[22]
  var i1405 = i1403[23]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1405[i + 0]) );
  }
  i1402.collisionMatrix = i1404
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.layerId = i1409[1]
  i1408.otherLayerId = i1409[2]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1411 = data
  var i1413 = i1411[0]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1413[i + 0]) );
  }
  i1410.qualityLevels = i1412
  var i1415 = i1411[1]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( i1415[i + 0] );
  }
  i1410.names = i1414
  i1410.shadows = i1411[2]
  i1410.anisotropicFiltering = i1411[3]
  i1410.antiAliasing = i1411[4]
  i1410.lodBias = i1411[5]
  i1410.shadowCascades = i1411[6]
  i1410.shadowDistance = i1411[7]
  i1410.shadowmaskMode = i1411[8]
  i1410.shadowProjection = i1411[9]
  i1410.shadowResolution = i1411[10]
  i1410.softParticles = !!i1411[11]
  i1410.softVegetation = !!i1411[12]
  i1410.activeColorSpace = i1411[13]
  i1410.desiredColorSpace = i1411[14]
  i1410.masterTextureLimit = i1411[15]
  i1410.maxQueuedFrames = i1411[16]
  i1410.particleRaycastBudget = i1411[17]
  i1410.pixelLightCount = i1411[18]
  i1410.realtimeReflectionProbes = !!i1411[19]
  i1410.shadowCascade2Split = i1411[20]
  i1410.shadowCascade4Split = new pc.Vec3( i1411[21], i1411[22], i1411[23] )
  i1410.streamingMipmapsActive = !!i1411[24]
  i1410.vSyncCount = i1411[25]
  i1410.asyncUploadBufferSize = i1411[26]
  i1410.asyncUploadTimeSlice = i1411[27]
  i1410.billboardsFaceCameraPosition = !!i1411[28]
  i1410.shadowNearPlaneOffset = i1411[29]
  i1410.streamingMipmapsMemoryBudget = i1411[30]
  i1410.maximumLODLevel = i1411[31]
  i1410.streamingMipmapsAddAllCameras = !!i1411[32]
  i1410.streamingMipmapsMaxLevelReduction = i1411[33]
  i1410.streamingMipmapsRenderersPerFrame = i1411[34]
  i1410.resolutionScalingFixedDPIFactor = i1411[35]
  i1410.streamingMipmapsMaxFileIORequests = i1411[36]
  i1410.currentQualityLevel = i1411[37]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1421 = data
  i1420.weight = i1421[0]
  i1420.vertices = i1421[1]
  i1420.normals = i1421[2]
  i1420.tangents = i1421[3]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1425 = data
  i1424.mode = i1425[0]
  i1424.parameter = i1425[1]
  i1424.threshold = i1425[2]
  return i1424
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1427 = data
  i1426.m_GlyphIndex = i1427[0]
  i1426.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1427[1], i1426.m_GlyphValueRecord)
  return i1426
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1429 = data
  i1428.m_XCoordinate = i1429[0]
  i1428.m_YCoordinate = i1429[1]
  return i1428
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1431 = data
  i1430.m_XPositionAdjustment = i1431[0]
  i1430.m_YPositionAdjustment = i1431[1]
  return i1430
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1433 = data
  i1432.xPlacement = i1433[0]
  i1432.yPlacement = i1433[1]
  i1432.xAdvance = i1433[2]
  i1432.yAdvance = i1433[3]
  return i1432
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1435 = data
  i1434.m_XPlacement = i1435[0]
  i1434.m_YPlacement = i1435[1]
  i1434.m_XAdvance = i1435[2]
  i1434.m_YAdvance = i1435[3]
  return i1434
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

Deserializers.creativeName = "PLY_DreamyRoom_Lv491_V2";

Deserializers.lunaAppID = "27599";

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

Deserializers.buildID = "90b12915-1dc1-4fbb-93f4-e8101fae1c96";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

