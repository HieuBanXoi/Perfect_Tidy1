var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSpring' )
  var i725 = data
  i724.spring = i725[0]
  i724.damper = i725[1]
  i724.targetPosition = i725[2]
  return i724
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor' )
  var i727 = data
  i726.m_TargetVelocity = i727[0]
  i726.m_Force = i727[1]
  i726.m_FreeSpin = i727[2]
  return i726
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointLimits' )
  var i729 = data
  i728.m_Min = i729[0]
  i728.m_Max = i729[1]
  i728.m_Bounciness = i729[2]
  i728.m_BounceMinVelocity = i729[3]
  i728.m_ContactDistance = i729[4]
  i728.minBounce = i729[5]
  i728.maxBounce = i729[6]
  return i728
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointDrive' )
  var i731 = data
  i730.m_PositionSpring = i731[0]
  i730.m_PositionDamper = i731[1]
  i730.m_MaximumForce = i731[2]
  i730.m_UseAcceleration = i731[3]
  return i730
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i733 = data
  i732.m_Spring = i733[0]
  i732.m_Damper = i733[1]
  return i732
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i735 = data
  i734.m_Limit = i735[0]
  i734.m_Bounciness = i735[1]
  i734.m_ContactDistance = i735[2]
  return i734
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i737 = data
  i736.m_ExtremumSlip = i737[0]
  i736.m_ExtremumValue = i737[1]
  i736.m_AsymptoteSlip = i737[2]
  i736.m_AsymptoteValue = i737[3]
  i736.m_Stiffness = i737[4]
  return i736
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i739 = data
  i738.m_LowerAngle = i739[0]
  i738.m_UpperAngle = i739[1]
  return i738
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i741 = data
  i740.m_MotorSpeed = i741[0]
  i740.m_MaximumMotorTorque = i741[1]
  return i740
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i743 = data
  i742.m_DampingRatio = i743[0]
  i742.m_Frequency = i743[1]
  i742.m_Angle = i743[2]
  return i742
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i745 = data
  i744.m_LowerTranslation = i745[0]
  i744.m_UpperTranslation = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i746 = root || new pc.UnityMaterial()
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'shader')
  i746.renderQueue = i747[3]
  i746.enableInstancing = !!i747[4]
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i749[i + 0]) );
  }
  i746.floatParameters = i748
  var i751 = i747[6]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i751[i + 0]) );
  }
  i746.colorParameters = i750
  var i753 = i747[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i753[i + 0]) );
  }
  i746.vectorParameters = i752
  var i755 = i747[8]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i755[i + 0]) );
  }
  i746.textureParameters = i754
  var i757 = i747[9]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i757[i + 0]) );
  }
  i746.materialFlags = i756
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = new pc.Color(i765[1], i765[2], i765[3], i765[4])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Vec4( i769[1], i769[2], i769[3], i769[4] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i773 = data
  i772.name = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'value')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i777 = data
  i776.name = i777[0]
  i776.enabled = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i779 = data
  i778.name = i779[0]
  i778.width = i779[1]
  i778.height = i779[2]
  i778.mipmapCount = i779[3]
  i778.anisoLevel = i779[4]
  i778.filterMode = i779[5]
  i778.hdr = !!i779[6]
  i778.format = i779[7]
  i778.wrapMode = i779[8]
  i778.alphaIsTransparency = !!i779[9]
  i778.alphaSource = i779[10]
  i778.graphicsFormat = i779[11]
  i778.sRGBTexture = !!i779[12]
  i778.desiredColorSpace = i779[13]
  i778.wrapU = i779[14]
  i778.wrapV = i779[15]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i781 = data
  i780.position = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.scale = new pc.Vec3( i781[3], i781[4], i781[5] )
  i780.rotation = new pc.Quat(i781[6], i781[7], i781[8], i781[9])
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i783 = data
  i782.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i783[0], i782.main)
  i782.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i783[1], i782.colorBySpeed)
  i782.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i783[2], i782.colorOverLifetime)
  i782.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i783[3], i782.emission)
  i782.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i783[4], i782.rotationBySpeed)
  i782.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i783[5], i782.rotationOverLifetime)
  i782.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i783[6], i782.shape)
  i782.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i783[7], i782.sizeBySpeed)
  i782.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i783[8], i782.sizeOverLifetime)
  i782.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i783[9], i782.textureSheetAnimation)
  i782.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i783[10], i782.velocityOverLifetime)
  i782.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i783[11], i782.noise)
  i782.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i783[12], i782.inheritVelocity)
  i782.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i783[13], i782.forceOverLifetime)
  i782.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i783[14], i782.limitVelocityOverLifetime)
  i782.useAutoRandomSeed = !!i783[15]
  i782.randomSeed = i783[16]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemMain()
  var i785 = data
  i784.duration = i785[0]
  i784.loop = !!i785[1]
  i784.prewarm = !!i785[2]
  i784.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.startDelay)
  i784.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.startLifetime)
  i784.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[5], i784.startSpeed)
  i784.startSize3D = !!i785[6]
  i784.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[7], i784.startSizeX)
  i784.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[8], i784.startSizeY)
  i784.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[9], i784.startSizeZ)
  i784.startRotation3D = !!i785[10]
  i784.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.startRotationX)
  i784.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[12], i784.startRotationY)
  i784.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[13], i784.startRotationZ)
  i784.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[14], i784.startColor)
  i784.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.gravityModifier)
  i784.simulationSpace = i785[16]
  request.r(i785[17], i785[18], 0, i784, 'customSimulationSpace')
  i784.simulationSpeed = i785[19]
  i784.useUnscaledTime = !!i785[20]
  i784.scalingMode = i785[21]
  i784.playOnAwake = !!i785[22]
  i784.maxParticles = i785[23]
  i784.emitterVelocityMode = i785[24]
  i784.stopAction = i785[25]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i786 = root || new pc.MinMaxCurve()
  var i787 = data
  i786.mode = i787[0]
  i786.curveMin = new pc.AnimationCurve( { keys_flow: i787[1] } )
  i786.curveMax = new pc.AnimationCurve( { keys_flow: i787[2] } )
  i786.curveMultiplier = i787[3]
  i786.constantMin = i787[4]
  i786.constantMax = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i788 = root || new pc.MinMaxGradient()
  var i789 = data
  i788.mode = i789[0]
  i788.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i789[1], i788.gradientMin)
  i788.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i789[2], i788.gradientMax)
  i788.colorMin = new pc.Color(i789[3], i789[4], i789[5], i789[6])
  i788.colorMax = new pc.Color(i789[7], i789[8], i789[9], i789[10])
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i791 = data
  i790.mode = i791[0]
  var i793 = i791[1]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i793[i + 0]) );
  }
  i790.colorKeys = i792
  var i795 = i791[2]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i795[i + 0]) );
  }
  i790.alphaKeys = i794
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemColorBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i797[1], i796.color)
  i796.range = new pc.Vec2( i797[2], i797[3] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i801 = data
  i800.color = new pc.Color(i801[0], i801[1], i801[2], i801[3])
  i800.time = i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i805 = data
  i804.alpha = i805[0]
  i804.time = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemColorOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[1], i806.color)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemEmitter()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.rateOverTime)
  i808.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.rateOverDistance)
  var i811 = i809[3]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i811[i + 0]) );
  }
  i808.bursts = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemBurst()
  var i815 = data
  i814.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[0], i814.count)
  i814.cycleCount = i815[1]
  i814.minCount = i815[2]
  i814.maxCount = i815[3]
  i814.repeatInterval = i815[4]
  i814.time = i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemRotationBySpeed()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.separateAxes = !!i817[4]
  i816.range = new pc.Vec2( i817[5], i817[6] )
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemRotationOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.separateAxes = !!i819[4]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemShape()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.shapeType = i821[1]
  i820.randomDirectionAmount = i821[2]
  i820.sphericalDirectionAmount = i821[3]
  i820.randomPositionAmount = i821[4]
  i820.alignToDirection = !!i821[5]
  i820.radius = i821[6]
  i820.radiusMode = i821[7]
  i820.radiusSpread = i821[8]
  i820.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[9], i820.radiusSpeed)
  i820.radiusThickness = i821[10]
  i820.angle = i821[11]
  i820.length = i821[12]
  i820.boxThickness = new pc.Vec3( i821[13], i821[14], i821[15] )
  i820.meshShapeType = i821[16]
  request.r(i821[17], i821[18], 0, i820, 'mesh')
  request.r(i821[19], i821[20], 0, i820, 'meshRenderer')
  request.r(i821[21], i821[22], 0, i820, 'skinnedMeshRenderer')
  i820.useMeshMaterialIndex = !!i821[23]
  i820.meshMaterialIndex = i821[24]
  i820.useMeshColors = !!i821[25]
  i820.normalOffset = i821[26]
  i820.arc = i821[27]
  i820.arcMode = i821[28]
  i820.arcSpread = i821[29]
  i820.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[30], i820.arcSpeed)
  i820.donutRadius = i821[31]
  i820.position = new pc.Vec3( i821[32], i821[33], i821[34] )
  i820.rotation = new pc.Vec3( i821[35], i821[36], i821[37] )
  i820.scale = new pc.Vec3( i821[38], i821[39], i821[40] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemSizeBySpeed()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  i822.range = new pc.Vec2( i823[5], i823[6] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemSizeOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.mode = i827[1]
  i826.animation = i827[2]
  i826.numTilesX = i827[3]
  i826.numTilesY = i827[4]
  i826.useRandomRow = !!i827[5]
  i826.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[6], i826.frameOverTime)
  i826.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[7], i826.startFrame)
  i826.cycleCount = i827[8]
  i826.rowIndex = i827[9]
  i826.flipU = i827[10]
  i826.flipV = i827[11]
  i826.spriteCount = i827[12]
  var i829 = i827[13]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sprites = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.x)
  i832.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.y)
  i832.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[3], i832.z)
  i832.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[4], i832.radial)
  i832.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[5], i832.speedModifier)
  i832.space = i833[6]
  i832.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[7], i832.orbitalX)
  i832.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[8], i832.orbitalY)
  i832.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[9], i832.orbitalZ)
  i832.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[10], i832.orbitalOffsetX)
  i832.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[11], i832.orbitalOffsetY)
  i832.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[12], i832.orbitalOffsetZ)
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i834 = root || new pc.ParticleSystemNoise()
  var i835 = data
  i834.enabled = !!i835[0]
  i834.separateAxes = !!i835[1]
  i834.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[2], i834.strengthX)
  i834.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[3], i834.strengthY)
  i834.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[4], i834.strengthZ)
  i834.frequency = i835[5]
  i834.damping = !!i835[6]
  i834.octaveCount = i835[7]
  i834.octaveMultiplier = i835[8]
  i834.octaveScale = i835[9]
  i834.quality = i835[10]
  i834.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[11], i834.scrollSpeed)
  i834.scrollSpeedMultiplier = i835[12]
  i834.remapEnabled = !!i835[13]
  i834.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[14], i834.remapX)
  i834.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[15], i834.remapY)
  i834.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[16], i834.remapZ)
  i834.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[17], i834.positionAmount)
  i834.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[18], i834.rotationAmount)
  i834.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i835[19], i834.sizeAmount)
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemInheritVelocity()
  var i837 = data
  i836.enabled = !!i837[0]
  i836.mode = i837[1]
  i836.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[2], i836.curve)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemForceOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.space = i839[4]
  i838.randomized = !!i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.limit)
  i840.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.limitX)
  i840.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.limitY)
  i840.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.limitZ)
  i840.dampen = i841[5]
  i840.separateAxes = !!i841[6]
  i840.space = i841[7]
  i840.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[8], i840.drag)
  i840.multiplyDragByParticleSize = !!i841[9]
  i840.multiplyDragByParticleVelocity = !!i841[10]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'mesh')
  i842.meshCount = i843[2]
  i842.activeVertexStreamsCount = i843[3]
  i842.alignment = i843[4]
  i842.renderMode = i843[5]
  i842.sortMode = i843[6]
  i842.lengthScale = i843[7]
  i842.velocityScale = i843[8]
  i842.cameraVelocityScale = i843[9]
  i842.normalDirection = i843[10]
  i842.sortingFudge = i843[11]
  i842.minParticleSize = i843[12]
  i842.maxParticleSize = i843[13]
  i842.pivot = new pc.Vec3( i843[14], i843[15], i843[16] )
  request.r(i843[17], i843[18], 0, i842, 'trailMaterial')
  i842.applyActiveColorSpace = !!i843[19]
  i842.enabled = !!i843[20]
  request.r(i843[21], i843[22], 0, i842, 'sharedMaterial')
  var i845 = i843[23]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[24]
  i842.shadowCastingMode = i843[25]
  i842.sortingLayerID = i843[26]
  i842.sortingOrder = i843[27]
  i842.lightmapIndex = i843[28]
  i842.lightmapSceneIndex = i843[29]
  i842.lightmapScaleOffset = new pc.Vec4( i843[30], i843[31], i843[32], i843[33] )
  i842.lightProbeUsage = i843[34]
  i842.reflectionProbeUsage = i843[35]
  return i842
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i848 = root || request.c( 'MergeEffect' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'tf')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i851 = data
  i850.name = i851[0]
  i850.tagId = i851[1]
  i850.enabled = !!i851[2]
  i850.isStatic = !!i851[3]
  i850.layer = i851[4]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i853 = data
  i852.name = i853[0]
  i852.halfPrecision = !!i853[1]
  i852.useSimplification = !!i853[2]
  i852.useUInt32IndexFormat = !!i853[3]
  i852.vertexCount = i853[4]
  i852.aabb = i853[5]
  var i855 = i853[6]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( !!i855[i + 0] );
  }
  i852.streams = i854
  i852.vertices = i853[7]
  var i857 = i853[8]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i857[i + 0]) );
  }
  i852.subMeshes = i856
  var i859 = i853[9]
  var i858 = []
  for(var i = 0; i < i859.length; i += 16) {
    i858.push( new pc.Mat4().setData(i859[i + 0], i859[i + 1], i859[i + 2], i859[i + 3],  i859[i + 4], i859[i + 5], i859[i + 6], i859[i + 7],  i859[i + 8], i859[i + 9], i859[i + 10], i859[i + 11],  i859[i + 12], i859[i + 13], i859[i + 14], i859[i + 15]) );
  }
  i852.bindposes = i858
  var i861 = i853[10]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i861[i + 0]) );
  }
  i852.blendShapes = i860
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i867 = data
  i866.triangles = i867[0]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i873 = data
  i872.name = i873[0]
  var i875 = i873[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i875[i + 0]) );
  }
  i872.frames = i874
  return i872
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i876 = root || request.c( 'BlinkEffect' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'tf')
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i879 = data
  i878.frontSortingLayerID = i879[0]
  i878.frontSortingOrder = i879[1]
  i878.backSortingLayerID = i879[2]
  i878.backSortingOrder = i879[3]
  i878.alphaCutoff = i879[4]
  request.r(i879[5], i879[6], 0, i878, 'sprite')
  i878.tileMode = i879[7]
  i878.isCustomRangeActive = !!i879[8]
  i878.spriteSortPoint = i879[9]
  i878.enabled = !!i879[10]
  request.r(i879[11], i879[12], 0, i878, 'sharedMaterial')
  var i881 = i879[13]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sharedMaterials = i880
  i878.receiveShadows = !!i879[14]
  i878.shadowCastingMode = i879[15]
  i878.sortingLayerID = i879[16]
  i878.sortingOrder = i879[17]
  i878.lightmapIndex = i879[18]
  i878.lightmapSceneIndex = i879[19]
  i878.lightmapScaleOffset = new pc.Vec4( i879[20], i879[21], i879[22], i879[23] )
  i878.lightProbeUsage = i879[24]
  i878.reflectionProbeUsage = i879[25]
  return i878
}

Deserializers["BrushMaskUnit"] = function (request, data, root) {
  var i882 = root || request.c( 'BrushMaskUnit' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'spriteMask')
  request.r(i883[2], i883[3], 0, i882, 'tf')
  return i882
}

Deserializers["HeartBreakEffect"] = function (request, data, root) {
  var i884 = root || request.c( 'HeartBreakEffect' )
  var i885 = data
  i884.defaultLifeTime = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'tf')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i887 = data
  i886.color = new pc.Color(i887[0], i887[1], i887[2], i887[3])
  request.r(i887[4], i887[5], 0, i886, 'sprite')
  i886.flipX = !!i887[6]
  i886.flipY = !!i887[7]
  i886.drawMode = i887[8]
  i886.size = new pc.Vec2( i887[9], i887[10] )
  i886.tileMode = i887[11]
  i886.adaptiveModeThreshold = i887[12]
  i886.maskInteraction = i887[13]
  i886.spriteSortPoint = i887[14]
  i886.enabled = !!i887[15]
  request.r(i887[16], i887[17], 0, i886, 'sharedMaterial')
  var i889 = i887[18]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.sharedMaterials = i888
  i886.receiveShadows = !!i887[19]
  i886.shadowCastingMode = i887[20]
  i886.sortingLayerID = i887[21]
  i886.sortingOrder = i887[22]
  i886.lightmapIndex = i887[23]
  i886.lightmapSceneIndex = i887[24]
  i886.lightmapScaleOffset = new pc.Vec4( i887[25], i887[26], i887[27], i887[28] )
  i886.lightProbeUsage = i887[29]
  i886.reflectionProbeUsage = i887[30]
  return i886
}

Deserializers["HeartEffect"] = function (request, data, root) {
  var i890 = root || request.c( 'HeartEffect' )
  var i891 = data
  i890.defaultLifeTime = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'tf')
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i893 = data
  i892.name = i893[0]
  i892.index = i893[1]
  i892.startup = !!i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i895 = data
  i894.pivot = new pc.Vec2( i895[0], i895[1] )
  i894.anchorMin = new pc.Vec2( i895[2], i895[3] )
  i894.anchorMax = new pc.Vec2( i895[4], i895[5] )
  i894.sizeDelta = new pc.Vec2( i895[6], i895[7] )
  i894.anchoredPosition3D = new pc.Vec3( i895[8], i895[9], i895[10] )
  i894.rotation = new pc.Quat(i895[11], i895[12], i895[13], i895[14])
  i894.scale = new pc.Vec3( i895[15], i895[16], i895[17] )
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i897 = data
  i896.planeDistance = i897[0]
  i896.referencePixelsPerUnit = i897[1]
  i896.isFallbackOverlay = !!i897[2]
  i896.renderMode = i897[3]
  i896.renderOrder = i897[4]
  i896.sortingLayerName = i897[5]
  i896.sortingOrder = i897[6]
  i896.scaleFactor = i897[7]
  request.r(i897[8], i897[9], 0, i896, 'worldCamera')
  i896.overrideSorting = !!i897[10]
  i896.pixelPerfect = !!i897[11]
  i896.targetDisplay = i897[12]
  i896.overridePixelPerfect = !!i897[13]
  i896.enabled = !!i897[14]
  return i896
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i899 = data
  i898.m_UiScaleMode = i899[0]
  i898.m_ReferencePixelsPerUnit = i899[1]
  i898.m_ScaleFactor = i899[2]
  i898.m_ReferenceResolution = new pc.Vec2( i899[3], i899[4] )
  i898.m_ScreenMatchMode = i899[5]
  i898.m_MatchWidthOrHeight = i899[6]
  i898.m_PhysicalUnit = i899[7]
  i898.m_FallbackScreenDPI = i899[8]
  i898.m_DefaultSpriteDPI = i899[9]
  i898.m_DynamicPixelsPerUnit = i899[10]
  i898.m_PresetInfoIsWorld = !!i899[11]
  return i898
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i901 = data
  i900.m_IgnoreReversedGraphics = !!i901[0]
  i900.m_BlockingObjects = i901[1]
  i900.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i901[2] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'animatorController')
  request.r(i903[2], i903[3], 0, i902, 'avatar')
  i902.updateMode = i903[4]
  i902.hasTransformHierarchy = !!i903[5]
  i902.applyRootMotion = !!i903[6]
  var i905 = i903[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.humanBones = i904
  i902.enabled = !!i903[8]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i909 = data
  i908.cullTransparentMesh = !!i909[0]
  return i908
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i911 = data
  i910.m_hasFontAssetChanged = !!i911[0]
  request.r(i911[1], i911[2], 0, i910, 'm_baseMaterial')
  i910.m_maskOffset = new pc.Vec4( i911[3], i911[4], i911[5], i911[6] )
  i910.m_text = i911[7]
  i910.m_isRightToLeft = !!i911[8]
  request.r(i911[9], i911[10], 0, i910, 'm_fontAsset')
  request.r(i911[11], i911[12], 0, i910, 'm_sharedMaterial')
  var i913 = i911[13]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.m_fontSharedMaterials = i912
  request.r(i911[14], i911[15], 0, i910, 'm_fontMaterial')
  var i915 = i911[16]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i910.m_fontMaterials = i914
  i910.m_fontColor32 = UnityEngine.Color32.ConstructColor(i911[17], i911[18], i911[19], i911[20])
  i910.m_fontColor = new pc.Color(i911[21], i911[22], i911[23], i911[24])
  i910.m_enableVertexGradient = !!i911[25]
  i910.m_colorMode = i911[26]
  i910.m_fontColorGradient = request.d('TMPro.VertexGradient', i911[27], i910.m_fontColorGradient)
  request.r(i911[28], i911[29], 0, i910, 'm_fontColorGradientPreset')
  request.r(i911[30], i911[31], 0, i910, 'm_spriteAsset')
  i910.m_tintAllSprites = !!i911[32]
  request.r(i911[33], i911[34], 0, i910, 'm_StyleSheet')
  i910.m_TextStyleHashCode = i911[35]
  i910.m_overrideHtmlColors = !!i911[36]
  i910.m_faceColor = UnityEngine.Color32.ConstructColor(i911[37], i911[38], i911[39], i911[40])
  i910.m_fontSize = i911[41]
  i910.m_fontSizeBase = i911[42]
  i910.m_fontWeight = i911[43]
  i910.m_enableAutoSizing = !!i911[44]
  i910.m_fontSizeMin = i911[45]
  i910.m_fontSizeMax = i911[46]
  i910.m_fontStyle = i911[47]
  i910.m_HorizontalAlignment = i911[48]
  i910.m_VerticalAlignment = i911[49]
  i910.m_textAlignment = i911[50]
  i910.m_characterSpacing = i911[51]
  i910.m_wordSpacing = i911[52]
  i910.m_lineSpacing = i911[53]
  i910.m_lineSpacingMax = i911[54]
  i910.m_paragraphSpacing = i911[55]
  i910.m_charWidthMaxAdj = i911[56]
  i910.m_TextWrappingMode = i911[57]
  i910.m_wordWrappingRatios = i911[58]
  i910.m_overflowMode = i911[59]
  request.r(i911[60], i911[61], 0, i910, 'm_linkedTextComponent')
  request.r(i911[62], i911[63], 0, i910, 'parentLinkedComponent')
  i910.m_enableKerning = !!i911[64]
  var i917 = i911[65]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(i917[i + 0]);
  }
  i910.m_ActiveFontFeatures = i916
  i910.m_enableExtraPadding = !!i911[66]
  i910.checkPaddingRequired = !!i911[67]
  i910.m_isRichText = !!i911[68]
  i910.m_parseCtrlCharacters = !!i911[69]
  i910.m_isOrthographic = !!i911[70]
  i910.m_isCullingEnabled = !!i911[71]
  i910.m_horizontalMapping = i911[72]
  i910.m_verticalMapping = i911[73]
  i910.m_uvLineOffset = i911[74]
  i910.m_geometrySortingOrder = i911[75]
  i910.m_IsTextObjectScaleStatic = !!i911[76]
  i910.m_VertexBufferAutoSizeReduction = !!i911[77]
  i910.m_useMaxVisibleDescender = !!i911[78]
  i910.m_pageToDisplay = i911[79]
  i910.m_margin = new pc.Vec4( i911[80], i911[81], i911[82], i911[83] )
  i910.m_isUsingLegacyAnimationComponent = !!i911[84]
  i910.m_isVolumetricText = !!i911[85]
  request.r(i911[86], i911[87], 0, i910, 'm_Material')
  i910.m_EmojiFallbackSupport = !!i911[88]
  i910.m_Maskable = !!i911[89]
  i910.m_Color = new pc.Color(i911[90], i911[91], i911[92], i911[93])
  i910.m_RaycastTarget = !!i911[94]
  i910.m_RaycastPadding = new pc.Vec4( i911[95], i911[96], i911[97], i911[98] )
  return i910
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.VertexGradient' )
  var i919 = data
  i918.topLeft = new pc.Color(i919[0], i919[1], i919[2], i919[3])
  i918.topRight = new pc.Color(i919[4], i919[5], i919[6], i919[7])
  i918.bottomLeft = new pc.Color(i919[8], i919[9], i919[10], i919[11])
  i918.bottomRight = new pc.Color(i919[12], i919[13], i919[14], i919[15])
  return i918
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Slider' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'm_FillRect')
  request.r(i923[2], i923[3], 0, i922, 'm_HandleRect')
  i922.m_Direction = i923[4]
  i922.m_MinValue = i923[5]
  i922.m_MaxValue = i923[6]
  i922.m_WholeNumbers = !!i923[7]
  i922.m_Value = i923[8]
  i922.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i923[9], i922.m_OnValueChanged)
  i922.m_Navigation = request.d('UnityEngine.UI.Navigation', i923[10], i922.m_Navigation)
  i922.m_Transition = i923[11]
  i922.m_Colors = request.d('UnityEngine.UI.ColorBlock', i923[12], i922.m_Colors)
  i922.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i923[13], i922.m_SpriteState)
  i922.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i923[14], i922.m_AnimationTriggers)
  i922.m_Interactable = !!i923[15]
  request.r(i923[16], i923[17], 0, i922, 'm_TargetGraphic')
  return i922
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i925 = data
  i924.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i925[0], i924.m_PersistentCalls)
  return i924
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i927 = data
  var i929 = i927[0]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('UnityEngine.Events.PersistentCall', i929[i + 0]));
  }
  i926.m_Calls = i928
  return i926
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_Target')
  i932.m_TargetAssemblyTypeName = i933[2]
  i932.m_MethodName = i933[3]
  i932.m_Mode = i933[4]
  i932.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i933[5], i932.m_Arguments)
  i932.m_CallState = i933[6]
  return i932
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i935 = data
  i934.m_Mode = i935[0]
  i934.m_WrapAround = !!i935[1]
  request.r(i935[2], i935[3], 0, i934, 'm_SelectOnUp')
  request.r(i935[4], i935[5], 0, i934, 'm_SelectOnDown')
  request.r(i935[6], i935[7], 0, i934, 'm_SelectOnLeft')
  request.r(i935[8], i935[9], 0, i934, 'm_SelectOnRight')
  return i934
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i937 = data
  i936.m_NormalColor = new pc.Color(i937[0], i937[1], i937[2], i937[3])
  i936.m_HighlightedColor = new pc.Color(i937[4], i937[5], i937[6], i937[7])
  i936.m_PressedColor = new pc.Color(i937[8], i937[9], i937[10], i937[11])
  i936.m_SelectedColor = new pc.Color(i937[12], i937[13], i937[14], i937[15])
  i936.m_DisabledColor = new pc.Color(i937[16], i937[17], i937[18], i937[19])
  i936.m_ColorMultiplier = i937[20]
  i936.m_FadeDuration = i937[21]
  return i936
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_HighlightedSprite')
  request.r(i939[2], i939[3], 0, i938, 'm_PressedSprite')
  request.r(i939[4], i939[5], 0, i938, 'm_SelectedSprite')
  request.r(i939[6], i939[7], 0, i938, 'm_DisabledSprite')
  return i938
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i941 = data
  i940.m_NormalTrigger = i941[0]
  i940.m_HighlightedTrigger = i941[1]
  i940.m_PressedTrigger = i941[2]
  i940.m_SelectedTrigger = i941[3]
  i940.m_DisabledTrigger = i941[4]
  return i940
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Image' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Sprite')
  i942.m_Type = i943[2]
  i942.m_PreserveAspect = !!i943[3]
  i942.m_FillCenter = !!i943[4]
  i942.m_FillMethod = i943[5]
  i942.m_FillAmount = i943[6]
  i942.m_FillClockwise = !!i943[7]
  i942.m_FillOrigin = i943[8]
  i942.m_UseSpriteMesh = !!i943[9]
  i942.m_PixelsPerUnitMultiplier = i943[10]
  request.r(i943[11], i943[12], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[13]
  i942.m_Color = new pc.Color(i943[14], i943[15], i943[16], i943[17])
  i942.m_RaycastTarget = !!i943[18]
  i942.m_RaycastPadding = new pc.Vec4( i943[19], i943[20], i943[21], i943[22] )
  return i942
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.Button' )
  var i945 = data
  i944.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i945[0], i944.m_OnClick)
  i944.m_Navigation = request.d('UnityEngine.UI.Navigation', i945[1], i944.m_Navigation)
  i944.m_Transition = i945[2]
  i944.m_Colors = request.d('UnityEngine.UI.ColorBlock', i945[3], i944.m_Colors)
  i944.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i945[4], i944.m_SpriteState)
  i944.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i945[5], i944.m_AnimationTriggers)
  i944.m_Interactable = !!i945[6]
  request.r(i945[7], i945[8], 0, i944, 'm_TargetGraphic')
  return i944
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i947 = data
  i946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i947[0], i946.m_PersistentCalls)
  return i946
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_ObjectArgument')
  i948.m_ObjectArgumentAssemblyTypeName = i949[2]
  i948.m_IntArgument = i949[3]
  i948.m_FloatArgument = i949[4]
  i948.m_StringArgument = i949[5]
  i948.m_BoolArgument = !!i949[6]
  return i948
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i950 = root || request.c( 'Ply_Pool' )
  var i951 = data
  var i953 = i951[0]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Ply_Pool+PoolAmount', i953[i + 0]) );
  }
  i950.poolAmounts = i952
  request.r(i951[1], i951[2], 0, i950, 'poolHolder')
  return i950
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i956 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i957 = data
  i956.type = i957[0]
  i956.amount = i957[1]
  request.r(i957[2], i957[3], 0, i956, 'gameUnit')
  return i956
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i958 = root || request.c( 'Ply_SoundManager' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Ply_SoundManager+FxAudio', i961[i + 0]) );
  }
  i958.fxAudios = i960
  request.r(i959[1], i959[2], 0, i958, 'sound')
  return i958
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i964 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i965 = data
  i964.fxType = i965[0]
  request.r(i965[1], i965[2], 0, i964, 'audioClip')
  i964.volume = i965[3]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'clip')
  request.r(i967[2], i967[3], 0, i966, 'outputAudioMixerGroup')
  i966.playOnAwake = !!i967[4]
  i966.loop = !!i967[5]
  i966.time = i967[6]
  i966.volume = i967[7]
  i966.pitch = i967[8]
  i966.enabled = !!i967[9]
  return i966
}

Deserializers["GameManager"] = function (request, data, root) {
  var i968 = root || request.c( 'GameManager' )
  var i969 = data
  i968.isPlaying = !!i969[0]
  i968.isTutorial = !!i969[1]
  i968.isGotoStore = !!i969[2]
  i968.isLoseGame = !!i969[3]
  i968.countMove = i969[4]
  i968.currentLayer = i969[5]
  request.r(i969[6], i969[7], 0, i968, 'trashCan')
  request.r(i969[8], i969[9], 0, i968, 'paperBox')
  return i968
}

Deserializers["UIManager"] = function (request, data, root) {
  var i970 = root || request.c( 'UIManager' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'winUI')
  request.r(i971[2], i971[3], 0, i970, 'loseUI')
  request.r(i971[4], i971[5], 0, i970, 'tutorial')
  request.r(i971[6], i971[7], 0, i970, 'verticalUI')
  request.r(i971[8], i971[9], 0, i970, 'horizontalUI')
  request.r(i971[10], i971[11], 0, i970, 'downloadBtn')
  request.r(i971[12], i971[13], 0, i970, 'horizontalDownloadBtn')
  request.r(i971[14], i971[15], 0, i970, 'textAnim')
  i970.isGoogleBuild = !!i971[16]
  i970.screenWidth = i971[17]
  i970.screenHeight = i971[18]
  i970.scaleHeightOnWidth = i971[19]
  i970.isVertical = !!i971[20]
  i970.isScreenVertical = !!i971[21]
  request.r(i971[22], i971[23], 0, i970, 'cam')
  i970.verticalUIHeightOnWidthRatio = i971[24]
  i970.scaleCameraOnValidate = !!i971[25]
  i970.screenVerticalHeightOnWidthRatio = i971[26]
  i970.useContinuousScaling = !!i971[27]
  i970.baseOrthographicSize = i971[28]
  i970.baseAspect = i971[29]
  i970.landscapeSizeRatio = i971[30]
  i970.defaultPortraitSizeRatio = i971[31]
  var i973 = i971[32]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('ScreenScaleStep', i973[i + 0]));
  }
  i970.discreteScaleSteps = i972
  i970.usePerspectiveCamera = !!i971[33]
  request.r(i971[34], i971[35], 0, i970, 'perspectiveFocus')
  i970.perspectiveFocusDistance = i971[36]
  i970.perspectivePadding = i971[37]
  i970.fitRendererBounds = !!i971[38]
  request.r(i971[39], i971[40], 0, i970, 'boundsRoot')
  var i975 = i971[41]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 1, i974, '')
  }
  i970.boundsRenderers = i974
  return i970
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i978 = root || request.c( 'ScreenScaleStep' )
  var i979 = data
  i978.heightOnWidthRatio = i979[0]
  i978.orthographicSize = i979[1]
  return i978
}

Deserializers["InputManager"] = function (request, data, root) {
  var i982 = root || request.c( 'InputManager' )
  var i983 = data
  i982.toggleButtonLayerMask = UnityEngine.LayerMask.FromIntegerValue( i983[0] )
  i982.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i983[1] )
  i982.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i983[2] )
  i982.isDragging = !!i983[3]
  return i982
}

Deserializers["HandTutManager"] = function (request, data, root) {
  var i984 = root || request.c( 'HandTutManager' )
  var i985 = data
  var i987 = i985[0]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.items = i986
  request.r(i985[1], i985[2], 0, i984, 'handTutObject')
  i984.idleDelay = i985[3]
  i984.firstHandTutDelay = i985[4]
  i984.moveDuration = i985[5]
  i984.dragFadeDuration = i985[6]
  i984.clickScaleDuration = i985[7]
  i984.waitAtEndDuration = i985[8]
  i984.handZPosition = i985[9]
  i984.clickScaleMultiplier = i985[10]
  i984.moveEase = i985[11]
  var i989 = i985[12]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('ItemDragSpriteMaskPainter')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i984.itemDragSpriteMaskPainters = i988
  i984.sockCount = i985[13]
  var i991 = i985[14]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i984.toolObjects = i990
  var i993 = i985[15]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i984.socks = i992
  i984.brushedShoeCount = i985[16]
  request.r(i985[17], i985[18], 0, i984, 'lastHandTut')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1003 = data
  i1002.aspect = i1003[0]
  i1002.orthographic = !!i1003[1]
  i1002.orthographicSize = i1003[2]
  i1002.backgroundColor = new pc.Color(i1003[3], i1003[4], i1003[5], i1003[6])
  i1002.nearClipPlane = i1003[7]
  i1002.farClipPlane = i1003[8]
  i1002.fieldOfView = i1003[9]
  i1002.depth = i1003[10]
  i1002.clearFlags = i1003[11]
  i1002.cullingMask = i1003[12]
  i1002.rect = i1003[13]
  request.r(i1003[14], i1003[15], 0, i1002, 'targetTexture')
  i1002.usePhysicalProperties = !!i1003[16]
  i1002.focalLength = i1003[17]
  i1002.sensorSize = new pc.Vec2( i1003[18], i1003[19] )
  i1002.lensShift = new pc.Vec2( i1003[20], i1003[21] )
  i1002.gateFit = i1003[22]
  i1002.commandBufferCount = i1003[23]
  i1002.cameraType = i1003[24]
  i1002.enabled = !!i1003[25]
  return i1002
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'm_FirstSelected')
  i1004.m_sendNavigationEvents = !!i1005[2]
  i1004.m_DragThreshold = i1005[3]
  return i1004
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1007 = data
  i1006.m_HorizontalAxis = i1007[0]
  i1006.m_VerticalAxis = i1007[1]
  i1006.m_SubmitButton = i1007[2]
  i1006.m_CancelButton = i1007[3]
  i1006.m_InputActionsPerSecond = i1007[4]
  i1006.m_RepeatDelay = i1007[5]
  i1006.m_ForceModuleActive = !!i1007[6]
  i1006.m_SendPointerHoverToParent = !!i1007[7]
  return i1006
}

Deserializers["SortChildByZPos"] = function (request, data, root) {
  var i1008 = root || request.c( 'SortChildByZPos' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'transformToSort')
  var i1011 = i1009[2]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 1, i1010, '')
  }
  i1008.childrenToSort = i1010
  i1008.zOffset = i1009[3]
  i1008.baseZ = i1009[4]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1015 = data
  i1014.center = new pc.Vec3( i1015[0], i1015[1], i1015[2] )
  i1014.radius = i1015[3]
  i1014.height = i1015[4]
  i1014.direction = i1015[5]
  i1014.enabled = !!i1015[6]
  i1014.isTrigger = !!i1015[7]
  request.r(i1015[8], i1015[9], 0, i1014, 'material')
  return i1014
}

Deserializers["ItemSpriteMaskPainter"] = function (request, data, root) {
  var i1016 = root || request.c( 'ItemSpriteMaskPainter' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'brushMaskPrefab')
  request.r(i1017[2], i1017[3], 0, i1016, 'brushLinePrefab')
  i1016.useBrushMaskPool = !!i1017[4]
  i1016.brushMaskPoolType = i1017[5]
  i1016.useBrushLinePool = !!i1017[6]
  i1016.brushLinePoolType = i1017[7]
  request.r(i1017[8], i1017[9], 0, i1016, 'brushParent')
  i1016.brushRadius = i1017[10]
  i1016.brushDiameterAtScaleOne = i1017[11]
  i1016.scaleBrushFromRadius = !!i1017[12]
  i1016.brushSpacing = i1017[13]
  i1016.brushZOffset = i1017[14]
  i1016.overrideMaskSorting = !!i1017[15]
  i1016.maskSortingLayerName = i1017[16]
  request.r(i1017[17], i1017[18], 0, i1016, 'paintAreaCollider')
  request.r(i1017[19], i1017[20], 0, i1016, 'paintPlaneCenter')
  i1016.requiredPercent = i1017[21]
  i1016.sampleColumns = i1017[22]
  i1016.sampleRows = i1017[23]
  i1016.resetOnEnable = !!i1017[24]
  i1016.onPaintBegin = request.d('UnityEngine.Events.UnityEvent', i1017[25], i1016.onPaintBegin)
  i1016.onPaint = request.d('UnityEngine.Events.UnityEvent', i1017[26], i1016.onPaint)
  i1016.onPaintComplete = request.d('UnityEngine.Events.UnityEvent', i1017[27], i1016.onPaintComplete)
  return i1016
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1019 = data
  i1018.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1019[0], i1018.m_PersistentCalls)
  return i1018
}

Deserializers["Item"] = function (request, data, root) {
  var i1020 = root || request.c( 'Item' )
  var i1021 = data
  i1020.isDone = !!i1021[0]
  i1020.onProcess = !!i1021[1]
  i1020.requireMatchingTargetTypeForHandTut = !!i1021[2]
  request.r(i1021[3], i1021[4], 0, i1020, 'itemDraggable')
  request.r(i1021[5], i1021[6], 0, i1020, 'itemClickable')
  request.r(i1021[7], i1021[8], 0, i1020, 'itemStirring')
  request.r(i1021[9], i1021[10], 0, i1020, 'itemKnifeSpriteMaskCutter')
  request.r(i1021[11], i1021[12], 0, i1020, 'itemSpriteMaskPainter')
  request.r(i1021[13], i1021[14], 0, i1020, 'itemDragSpriteMaskPainter')
  request.r(i1021[15], i1021[16], 0, i1020, 'itemSpriteRevealPainter')
  request.r(i1021[17], i1021[18], 0, i1020, 'itemMoveToTarget')
  request.r(i1021[19], i1021[20], 0, i1020, 'animator')
  i1020.itemType = i1021[21]
  request.r(i1021[22], i1021[23], 0, i1020, 'spriteRenderer')
  i1020.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1021[24], i1020.onKnifeIn)
  request.r(i1021[25], i1021[26], 0, i1020, 'knifePos')
  i1020.heartEffectScale = i1021[27]
  i1020.breakHeartEffectScale = i1021[28]
  i1020.blinkEffectScale = i1021[29]
  i1020.mergeEffectScale = i1021[30]
  i1020.playMoveToTargetFinishSound = !!i1021[31]
  i1020.moveToTargetFinishFxType = i1021[32]
  i1020.fxSpawnZPos = i1021[33]
  request.r(i1021[34], i1021[35], 0, i1020, 'tf')
  return i1020
}

Deserializers["ItemSpriteRevealPainter"] = function (request, data, root) {
  var i1022 = root || request.c( 'ItemSpriteRevealPainter' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteRevealPainter+RevealTarget')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('ItemSpriteRevealPainter+RevealTarget', i1025[i + 0]));
  }
  i1022.revealTargets = i1024
  i1022.initialAlpha = i1023[1]
  request.r(i1023[2], i1023[3], 0, i1022, 'paintAreaCollider')
  i1022.resetOnEnable = !!i1023[4]
  i1022.onPaintBegin = request.d('UnityEngine.Events.UnityEvent', i1023[5], i1022.onPaintBegin)
  i1022.onPaint = request.d('UnityEngine.Events.UnityEvent', i1023[6], i1022.onPaint)
  i1022.onPaintComplete = request.d('UnityEngine.Events.UnityEvent', i1023[7], i1022.onPaintComplete)
  return i1022
}

Deserializers["ItemSpriteRevealPainter+RevealTarget"] = function (request, data, root) {
  var i1028 = root || request.c( 'ItemSpriteRevealPainter+RevealTarget' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'targetSprite')
  i1028.hitRadius = i1029[2]
  i1028.fadeSpeed = i1029[3]
  i1028.completeThreshold = i1029[4]
  i1028.isRevealed = !!i1029[5]
  return i1028
}

Deserializers["CleaningTarget"] = function (request, data, root) {
  var i1030 = root || request.c( 'CleaningTarget' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('CleaningTarget+CleaningState')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('CleaningTarget+CleaningState', i1033[i + 0]));
  }
  i1030.states = i1032
  i1030.onAllStatesComplete = request.d('UnityEngine.Events.UnityEvent', i1031[1], i1030.onAllStatesComplete)
  var i1035 = i1031[2]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('CleaningTarget+DirtTarget')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('CleaningTarget+DirtTarget', i1035[i + 0]));
  }
  i1030.dirtTargets = i1034
  return i1030
}

Deserializers["CleaningTarget+CleaningState"] = function (request, data, root) {
  var i1038 = root || request.c( 'CleaningTarget+CleaningState' )
  var i1039 = data
  i1038.stateName = i1039[0]
  i1038.paintMode = i1039[1]
  request.r(i1039[2], i1039[3], 0, i1038, 'requiredTool')
  i1038.brushRadius = i1039[4]
  i1038.brushSpacing = i1039[5]
  i1038.overrideMaskSorting = !!i1039[6]
  i1038.maskSortingLayerName = i1039[7]
  var i1041 = i1039[8]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteRevealPainter+RevealTarget')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('ItemSpriteRevealPainter+RevealTarget', i1041[i + 0]));
  }
  i1038.revealTargets = i1040
  i1038.initialAlpha = i1039[9]
  i1038.spawnDirtWhenPaint = !!i1039[10]
  var i1043 = i1039[11]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('MaskInteractionConfig')))
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.add(request.d('MaskInteractionConfig', i1043[i + 0]));
  }
  i1038.maskInteractionsToReset = i1042
  i1038.onStateComplete = request.d('UnityEngine.Events.UnityEvent', i1039[12], i1038.onStateComplete)
  return i1038
}

Deserializers["MaskInteractionConfig"] = function (request, data, root) {
  var i1046 = root || request.c( 'MaskInteractionConfig' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'targetRenderer')
  i1046.interaction = i1047[2]
  return i1046
}

Deserializers["CleaningTarget+DirtTarget"] = function (request, data, root) {
  var i1050 = root || request.c( 'CleaningTarget+DirtTarget' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'targetSprite')
  i1050.hitRadius = i1051[2]
  i1050.fadeSpeed = i1051[3]
  i1050.fadeOutSpeed = i1051[4]
  i1050.isBeingHit = !!i1051[5]
  return i1050
}

Deserializers["Sock"] = function (request, data, root) {
  var i1052 = root || request.c( 'Sock' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'stretchTarget')
  i1052.detachDistance = i1053[2]
  i1052.stretchScaleMultiplier = i1053[3]
  i1052.returnToAnchorDuration = i1053[4]
  i1052.shrinkDuration = i1053[5]
  request.r(i1053[6], i1053[7], 0, i1052, 'defaultTarget')
  i1052.moveDuration = i1053[8]
  i1052.moveEase = i1053[9]
  i1052.onMoveComplete = request.d('UnityEngine.Events.UnityEvent', i1053[10], i1052.onMoveComplete)
  i1052.isDone = !!i1053[11]
  i1052.onProcess = !!i1053[12]
  i1052.requireMatchingTargetTypeForHandTut = !!i1053[13]
  request.r(i1053[14], i1053[15], 0, i1052, 'itemDraggable')
  request.r(i1053[16], i1053[17], 0, i1052, 'itemClickable')
  request.r(i1053[18], i1053[19], 0, i1052, 'itemStirring')
  request.r(i1053[20], i1053[21], 0, i1052, 'itemKnifeSpriteMaskCutter')
  request.r(i1053[22], i1053[23], 0, i1052, 'itemSpriteMaskPainter')
  request.r(i1053[24], i1053[25], 0, i1052, 'itemDragSpriteMaskPainter')
  request.r(i1053[26], i1053[27], 0, i1052, 'itemSpriteRevealPainter')
  request.r(i1053[28], i1053[29], 0, i1052, 'itemMoveToTarget')
  request.r(i1053[30], i1053[31], 0, i1052, 'animator')
  i1052.itemType = i1053[32]
  request.r(i1053[33], i1053[34], 0, i1052, 'spriteRenderer')
  i1052.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1053[35], i1052.onKnifeIn)
  request.r(i1053[36], i1053[37], 0, i1052, 'knifePos')
  i1052.heartEffectScale = i1053[38]
  i1052.breakHeartEffectScale = i1053[39]
  i1052.blinkEffectScale = i1053[40]
  i1052.mergeEffectScale = i1053[41]
  i1052.playMoveToTargetFinishSound = !!i1053[42]
  i1052.moveToTargetFinishFxType = i1053[43]
  i1052.fxSpawnZPos = i1053[44]
  request.r(i1053[45], i1053[46], 0, i1052, 'tf')
  return i1052
}

Deserializers["ItemDraggable"] = function (request, data, root) {
  var i1054 = root || request.c( 'ItemDraggable' )
  var i1055 = data
  i1054.isDraggable = !!i1055[0]
  request.r(i1055[1], i1055[2], 0, i1054, 'returnTransform')
  i1054.setParentToReturnTransform = !!i1055[3]
  i1054.returnToStartOnDragFailed = !!i1055[4]
  i1054.returnToExactReturnTransformPosition = !!i1055[5]
  i1054.targetItemType = i1055[6]
  request.r(i1055[7], i1055[8], 0, i1054, 'item')
  i1054.checkState = !!i1055[9]
  request.r(i1055[10], i1055[11], 0, i1054, 'shadowObject')
  i1054.playReturnToStartFinishSound = !!i1055[12]
  i1054.returnToStartFinishFxType = i1055[13]
  i1054.spawnBreakHeartOnDropFail = !!i1055[14]
  i1054.playBeginDragSound = !!i1055[15]
  i1054.beginDragFxType = i1055[16]
  i1054.liftOffset = i1055[17]
  i1054.dragScaleMultiplier = i1055[18]
  i1054.dragScaleDuration = i1055[19]
  i1054.onBeginDrag = request.d('UnityEngine.Events.UnityEvent', i1055[20], i1054.onBeginDrag)
  i1054.onDropSuccess = request.d('UnityEngine.Events.UnityEvent', i1055[21], i1054.onDropSuccess)
  i1054.onDropFail = request.d('UnityEngine.Events.UnityEvent', i1055[22], i1054.onDropFail)
  i1054.onReturnToStartComplete = request.d('UnityEngine.Events.UnityEvent', i1055[23], i1054.onReturnToStartComplete)
  return i1054
}

Deserializers["ToolObject"] = function (request, data, root) {
  var i1056 = root || request.c( 'ToolObject' )
  var i1057 = data
  i1056.flyDistance = i1057[0]
  i1056.flyYOffset = i1057[1]
  i1056.flyInDuration = i1057[2]
  i1056.flyOutDuration = i1057[3]
  i1056.flyEase = i1057[4]
  i1056.flyInSide = i1057[5]
  i1056.flyOutSide = i1057[6]
  i1056.onFlyIn = request.d('UnityEngine.Events.UnityEvent', i1057[7], i1056.onFlyIn)
  i1056.onFlyOut = request.d('UnityEngine.Events.UnityEvent', i1057[8], i1056.onFlyOut)
  i1056.isDone = !!i1057[9]
  i1056.onProcess = !!i1057[10]
  i1056.requireMatchingTargetTypeForHandTut = !!i1057[11]
  request.r(i1057[12], i1057[13], 0, i1056, 'itemDraggable')
  request.r(i1057[14], i1057[15], 0, i1056, 'itemClickable')
  request.r(i1057[16], i1057[17], 0, i1056, 'itemStirring')
  request.r(i1057[18], i1057[19], 0, i1056, 'itemKnifeSpriteMaskCutter')
  request.r(i1057[20], i1057[21], 0, i1056, 'itemSpriteMaskPainter')
  request.r(i1057[22], i1057[23], 0, i1056, 'itemDragSpriteMaskPainter')
  request.r(i1057[24], i1057[25], 0, i1056, 'itemSpriteRevealPainter')
  request.r(i1057[26], i1057[27], 0, i1056, 'itemMoveToTarget')
  request.r(i1057[28], i1057[29], 0, i1056, 'animator')
  i1056.itemType = i1057[30]
  request.r(i1057[31], i1057[32], 0, i1056, 'spriteRenderer')
  i1056.onKnifeIn = request.d('UnityEngine.Events.UnityEvent', i1057[33], i1056.onKnifeIn)
  request.r(i1057[34], i1057[35], 0, i1056, 'knifePos')
  i1056.heartEffectScale = i1057[36]
  i1056.breakHeartEffectScale = i1057[37]
  i1056.blinkEffectScale = i1057[38]
  i1056.mergeEffectScale = i1057[39]
  i1056.playMoveToTargetFinishSound = !!i1057[40]
  i1056.moveToTargetFinishFxType = i1057[41]
  i1056.fxSpawnZPos = i1057[42]
  request.r(i1057[43], i1057[44], 0, i1056, 'tf')
  return i1056
}

Deserializers["ItemDragChildRotator"] = function (request, data, root) {
  var i1058 = root || request.c( 'ItemDragChildRotator' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'rotateTarget')
  i1058.dragEulerAngles = new pc.Vec3( i1059[2], i1059[3], i1059[4] )
  i1058.useLocalRotation = !!i1059[5]
  i1058.rotateRelative = !!i1059[6]
  i1058.rotateDuration = i1059[7]
  i1058.rotateEase = i1059[8]
  i1058.rotateMode = i1059[9]
  return i1058
}

Deserializers["ItemDragSpriteMaskPainter"] = function (request, data, root) {
  var i1060 = root || request.c( 'ItemDragSpriteMaskPainter' )
  var i1061 = data
  var i1063 = i1061[0]
  var i1062 = new (System.Collections.Generic.List$1(Bridge.ns('ItemSpriteMaskPainter')))
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 1, i1062, '')
  }
  i1060.targetPainters = i1062
  request.r(i1061[1], i1061[2], 0, i1060, 'brushSpawnPoint')
  i1060.paintOnBeginDrag = !!i1061[3]
  i1060.returnToStartOnPaintComplete = !!i1061[4]
  i1060.spawnHeartOnAutoDropFail = !!i1061[5]
  request.r(i1061[6], i1061[7], 0, i1060, 'paintTrailFx')
  i1060.fxSoundType = i1061[8]
  i1060.soundPlayback = i1061[9]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1067 = data
  i1066.ambientIntensity = i1067[0]
  i1066.reflectionIntensity = i1067[1]
  i1066.ambientMode = i1067[2]
  i1066.ambientLight = new pc.Color(i1067[3], i1067[4], i1067[5], i1067[6])
  i1066.ambientSkyColor = new pc.Color(i1067[7], i1067[8], i1067[9], i1067[10])
  i1066.ambientGroundColor = new pc.Color(i1067[11], i1067[12], i1067[13], i1067[14])
  i1066.ambientEquatorColor = new pc.Color(i1067[15], i1067[16], i1067[17], i1067[18])
  i1066.fogColor = new pc.Color(i1067[19], i1067[20], i1067[21], i1067[22])
  i1066.fogEndDistance = i1067[23]
  i1066.fogStartDistance = i1067[24]
  i1066.fogDensity = i1067[25]
  i1066.fog = !!i1067[26]
  request.r(i1067[27], i1067[28], 0, i1066, 'skybox')
  i1066.fogMode = i1067[29]
  var i1069 = i1067[30]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1069[i + 0]) );
  }
  i1066.lightmaps = i1068
  i1066.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1067[31], i1066.lightProbes)
  i1066.lightmapsMode = i1067[32]
  i1066.mixedBakeMode = i1067[33]
  i1066.environmentLightingMode = i1067[34]
  i1066.ambientProbe = new pc.SphericalHarmonicsL2(i1067[35])
  i1066.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1067[36])
  i1066.useReferenceAmbientProbe = !!i1067[37]
  request.r(i1067[38], i1067[39], 0, i1066, 'customReflection')
  request.r(i1067[40], i1067[41], 0, i1066, 'defaultReflection')
  i1066.defaultReflectionMode = i1067[42]
  i1066.defaultReflectionResolution = i1067[43]
  i1066.sunLightObjectId = i1067[44]
  i1066.pixelLightCount = i1067[45]
  i1066.defaultReflectionHDR = !!i1067[46]
  i1066.hasLightDataAsset = !!i1067[47]
  i1066.hasManualGenerate = !!i1067[48]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'lightmapColor')
  request.r(i1073[2], i1073[3], 0, i1072, 'lightmapDirection')
  request.r(i1073[4], i1073[5], 0, i1072, 'shadowMask')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1074 = root || new UnityEngine.LightProbes()
  var i1075 = data
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1085[i + 0]));
  }
  i1082.ShaderCompilationErrors = i1084
  i1082.name = i1083[1]
  i1082.guid = i1083[2]
  var i1087 = i1083[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.shaderDefinedKeywords = i1086
  var i1089 = i1083[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1089[i + 0]) );
  }
  i1082.passes = i1088
  var i1091 = i1083[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1091[i + 0]) );
  }
  i1082.usePasses = i1090
  var i1093 = i1083[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1093[i + 0]) );
  }
  i1082.defaultParameterValues = i1092
  request.r(i1083[7], i1083[8], 0, i1082, 'unityFallbackShader')
  i1082.readDepth = !!i1083[9]
  i1082.hasDepthOnlyPass = !!i1083[10]
  i1082.isCreatedByShaderGraph = !!i1083[11]
  i1082.disableBatching = !!i1083[12]
  i1082.compiled = !!i1083[13]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1097 = data
  i1096.shaderName = i1097[0]
  i1096.errorMessage = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1102 = root || new pc.UnityShaderPass()
  var i1103 = data
  i1102.id = i1103[0]
  i1102.subShaderIndex = i1103[1]
  i1102.name = i1103[2]
  i1102.passType = i1103[3]
  i1102.grabPassTextureName = i1103[4]
  i1102.usePass = !!i1103[5]
  i1102.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[6], i1102.zTest)
  i1102.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[7], i1102.zWrite)
  i1102.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[8], i1102.culling)
  i1102.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[9], i1102.blending)
  i1102.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1103[10], i1102.alphaBlending)
  i1102.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[11], i1102.colorWriteMask)
  i1102.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[12], i1102.offsetUnits)
  i1102.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[13], i1102.offsetFactor)
  i1102.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[14], i1102.stencilRef)
  i1102.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[15], i1102.stencilReadMask)
  i1102.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[16], i1102.stencilWriteMask)
  i1102.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[17], i1102.stencilOp)
  i1102.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[18], i1102.stencilOpFront)
  i1102.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1103[19], i1102.stencilOpBack)
  var i1105 = i1103[20]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1105[i + 0]) );
  }
  i1102.tags = i1104
  var i1107 = i1103[21]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.passDefinedKeywords = i1106
  var i1109 = i1103[22]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1109[i + 0]) );
  }
  i1102.passDefinedKeywordGroups = i1108
  var i1111 = i1103[23]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1111[i + 0]) );
  }
  i1102.variants = i1110
  var i1113 = i1103[24]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1113[i + 0]) );
  }
  i1102.excludedVariants = i1112
  i1102.hasDepthReader = !!i1103[25]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1115 = data
  i1114.val = i1115[0]
  i1114.name = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1117 = data
  i1116.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[0], i1116.src)
  i1116.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[1], i1116.dst)
  i1116.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[2], i1116.op)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1119 = data
  i1118.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[0], i1118.pass)
  i1118.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[1], i1118.fail)
  i1118.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[2], i1118.zFail)
  i1118.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[3], i1118.comp)
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.value = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( i1129[i + 0] );
  }
  i1126.keywords = i1128
  i1126.hasDiscard = !!i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1133 = data
  i1132.passId = i1133[0]
  i1132.subShaderIndex = i1133[1]
  var i1135 = i1133[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1132.keywords = i1134
  i1132.vertexProgram = i1133[3]
  i1132.fragmentProgram = i1133[4]
  i1132.exportedForWebGl2 = !!i1133[5]
  i1132.readDepth = !!i1133[6]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'shader')
  i1138.pass = i1139[2]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.type = i1143[1]
  i1142.value = new pc.Vec4( i1143[2], i1143[3], i1143[4], i1143[5] )
  i1142.textureValue = i1143[6]
  i1142.shaderPropertyFlag = i1143[7]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1145 = data
  i1144.name = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'texture')
  i1144.aabb = i1145[3]
  i1144.vertices = i1145[4]
  i1144.triangles = i1145[5]
  i1144.textureRect = UnityEngine.Rect.MinMaxRect(i1145[6], i1145[7], i1145[8], i1145[9])
  i1144.packedRect = UnityEngine.Rect.MinMaxRect(i1145[10], i1145[11], i1145[12], i1145[13])
  i1144.border = new pc.Vec4( i1145[14], i1145[15], i1145[16], i1145[17] )
  i1144.transparency = i1145[18]
  i1144.bounds = i1145[19]
  i1144.pixelsPerUnit = i1145[20]
  i1144.textureWidth = i1145[21]
  i1144.textureHeight = i1145[22]
  i1144.nativeSize = new pc.Vec2( i1145[23], i1145[24] )
  i1144.pivot = new pc.Vec2( i1145[25], i1145[26] )
  i1144.textureRectOffset = new pc.Vec2( i1145[27], i1145[28] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1147 = data
  i1146.name = i1147[0]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.wrapMode = i1149[1]
  i1148.isLooping = !!i1149[2]
  i1148.length = i1149[3]
  var i1151 = i1149[4]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1151[i + 0]) );
  }
  i1148.curves = i1150
  var i1153 = i1149[5]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1153[i + 0]) );
  }
  i1148.events = i1152
  i1148.halfPrecision = !!i1149[6]
  i1148._frameRate = i1149[7]
  i1148.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1149[8], i1148.localBounds)
  i1148.hasMuscleCurves = !!i1149[9]
  var i1155 = i1149[10]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1148.clipMuscleConstant = i1154
  i1148.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1149[11], i1148.clipBindingConstant)
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1159 = data
  i1158.path = i1159[0]
  i1158.hash = i1159[1]
  i1158.componentType = i1159[2]
  i1158.property = i1159[3]
  i1158.keys = i1159[4]
  var i1161 = i1159[5]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1161[i + 0]) );
  }
  i1158.objectReferenceKeys = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1165 = data
  i1164.time = i1165[0]
  request.r(i1165[1], i1165[2], 0, i1164, 'value')
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1169 = data
  i1168.functionName = i1169[0]
  i1168.floatParameter = i1169[1]
  i1168.intParameter = i1169[2]
  i1168.stringParameter = i1169[3]
  request.r(i1169[4], i1169[5], 0, i1168, 'objectReferenceParameter')
  i1168.time = i1169[6]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1171 = data
  i1170.center = new pc.Vec3( i1171[0], i1171[1], i1171[2] )
  i1170.extends = new pc.Vec3( i1171[3], i1171[4], i1171[5] )
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1174.genericBindings = i1176
  var i1179 = i1175[1]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1174.pptrCurveMapping = i1178
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1181 = data
  i1180.name = i1181[0]
  var i1183 = i1181[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1183[i + 0]) );
  }
  i1180.layers = i1182
  var i1185 = i1181[2]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1185[i + 0]) );
  }
  i1180.parameters = i1184
  i1180.animationClips = i1181[3]
  i1180.avatarUnsupported = i1181[4]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.defaultWeight = i1189[1]
  i1188.blendingMode = i1189[2]
  i1188.avatarMask = i1189[3]
  i1188.syncedLayerIndex = i1189[4]
  i1188.syncedLayerAffectsTiming = !!i1189[5]
  i1188.syncedLayers = i1189[6]
  i1188.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1189[7], i1188.stateMachine)
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1191 = data
  i1190.id = i1191[0]
  i1190.name = i1191[1]
  i1190.path = i1191[2]
  var i1193 = i1191[3]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1193[i + 0]) );
  }
  i1190.states = i1192
  var i1195 = i1191[4]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1195[i + 0]) );
  }
  i1190.machines = i1194
  var i1197 = i1191[5]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1197[i + 0]) );
  }
  i1190.entryStateTransitions = i1196
  var i1199 = i1191[6]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1199[i + 0]) );
  }
  i1190.exitStateTransitions = i1198
  var i1201 = i1191[7]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1201[i + 0]) );
  }
  i1190.anyStateTransitions = i1200
  i1190.defaultStateId = i1191[8]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.name = i1205[1]
  i1204.cycleOffset = i1205[2]
  i1204.cycleOffsetParameter = i1205[3]
  i1204.cycleOffsetParameterActive = !!i1205[4]
  i1204.mirror = !!i1205[5]
  i1204.mirrorParameter = i1205[6]
  i1204.mirrorParameterActive = !!i1205[7]
  i1204.motionId = i1205[8]
  i1204.nameHash = i1205[9]
  i1204.fullPathHash = i1205[10]
  i1204.speed = i1205[11]
  i1204.speedParameter = i1205[12]
  i1204.speedParameterActive = !!i1205[13]
  i1204.tag = i1205[14]
  i1204.tagHash = i1205[15]
  i1204.writeDefaultValues = !!i1205[16]
  var i1207 = i1205[17]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 2, i1206, '')
  }
  i1204.behaviours = i1206
  var i1209 = i1205[18]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1209[i + 0]) );
  }
  i1204.transitions = i1208
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1215 = data
  i1214.fullPath = i1215[0]
  i1214.canTransitionToSelf = !!i1215[1]
  i1214.duration = i1215[2]
  i1214.exitTime = i1215[3]
  i1214.hasExitTime = !!i1215[4]
  i1214.hasFixedDuration = !!i1215[5]
  i1214.interruptionSource = i1215[6]
  i1214.offset = i1215[7]
  i1214.orderedInterruption = !!i1215[8]
  i1214.destinationStateId = i1215[9]
  i1214.isExit = !!i1215[10]
  i1214.mute = !!i1215[11]
  i1214.solo = !!i1215[12]
  var i1217 = i1215[13]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1217[i + 0]) );
  }
  i1214.conditions = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1223 = data
  i1222.destinationStateId = i1223[0]
  i1222.isExit = !!i1223[1]
  i1222.mute = !!i1223[2]
  i1222.solo = !!i1223[3]
  var i1225 = i1223[4]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1225[i + 0]) );
  }
  i1222.conditions = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1229 = data
  i1228.defaultBool = !!i1229[0]
  i1228.defaultFloat = i1229[1]
  i1228.defaultInt = i1229[2]
  i1228.name = i1229[3]
  i1228.nameHash = i1229[4]
  i1228.type = i1229[5]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.bytes64 = i1231[1]
  i1230.data = i1231[2]
  return i1230
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1232 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1233 = data
  i1232.normalStyle = i1233[0]
  i1232.normalSpacingOffset = i1233[1]
  i1232.boldStyle = i1233[2]
  i1232.boldSpacing = i1233[3]
  i1232.italicStyle = i1233[4]
  i1232.tabSize = i1233[5]
  request.r(i1233[6], i1233[7], 0, i1232, 'atlas')
  i1232.m_SourceFontFileGUID = i1233[8]
  i1232.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1233[9], i1232.m_CreationSettings)
  request.r(i1233[10], i1233[11], 0, i1232, 'm_SourceFontFile')
  i1232.m_SourceFontFilePath = i1233[12]
  i1232.m_AtlasPopulationMode = i1233[13]
  i1232.InternalDynamicOS = !!i1233[14]
  var i1235 = i1233[15]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.Glyph', i1235[i + 0]));
  }
  i1232.m_GlyphTable = i1234
  var i1237 = i1233[16]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('TMPro.TMP_Character', i1237[i + 0]));
  }
  i1232.m_CharacterTable = i1236
  var i1239 = i1233[17]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 2, i1238, '')
  }
  i1232.m_AtlasTextures = i1238
  i1232.m_AtlasTextureIndex = i1233[18]
  i1232.m_IsMultiAtlasTexturesEnabled = !!i1233[19]
  i1232.m_GetFontFeatures = !!i1233[20]
  i1232.m_ClearDynamicDataOnBuild = !!i1233[21]
  i1232.m_AtlasWidth = i1233[22]
  i1232.m_AtlasHeight = i1233[23]
  i1232.m_AtlasPadding = i1233[24]
  i1232.m_AtlasRenderMode = i1233[25]
  var i1241 = i1233[26]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('UnityEngine.TextCore.GlyphRect', i1241[i + 0]));
  }
  i1232.m_UsedGlyphRects = i1240
  var i1243 = i1233[27]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.GlyphRect', i1243[i + 0]));
  }
  i1232.m_FreeGlyphRects = i1242
  i1232.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1233[28], i1232.m_FontFeatureTable)
  i1232.m_ShouldReimportFontFeatures = !!i1233[29]
  var i1245 = i1233[30]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1232.m_FallbackFontAssetTable = i1244
  var i1247 = i1233[31]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1232.m_FontWeightTable = i1246
  var i1249 = i1233[32]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('TMPro.TMP_FontWeightPair', i1249[i + 0]) );
  }
  i1232.fontWeights = i1248
  i1232.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1233[33], i1232.m_fontInfo)
  var i1251 = i1233[34]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_Glyph', i1251[i + 0]));
  }
  i1232.m_glyphInfoList = i1250
  i1232.m_KerningTable = request.d('TMPro.KerningTable', i1233[35], i1232.m_KerningTable)
  var i1253 = i1233[36]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1232.fallbackFontAssets = i1252
  i1232.m_Version = i1233[37]
  i1232.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1233[38], i1232.m_FaceInfo)
  request.r(i1233[39], i1233[40], 0, i1232, 'm_Material')
  return i1232
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1255 = data
  i1254.sourceFontFileName = i1255[0]
  i1254.sourceFontFileGUID = i1255[1]
  i1254.faceIndex = i1255[2]
  i1254.pointSizeSamplingMode = i1255[3]
  i1254.pointSize = i1255[4]
  i1254.padding = i1255[5]
  i1254.paddingMode = i1255[6]
  i1254.packingMode = i1255[7]
  i1254.atlasWidth = i1255[8]
  i1254.atlasHeight = i1255[9]
  i1254.characterSetSelectionMode = i1255[10]
  i1254.characterSequence = i1255[11]
  i1254.referencedFontAssetGUID = i1255[12]
  i1254.referencedTextAssetGUID = i1255[13]
  i1254.fontStyle = i1255[14]
  i1254.fontStyleModifier = i1255[15]
  i1254.renderMode = i1255[16]
  i1254.includeFontFeatures = !!i1255[17]
  return i1254
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1258 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1259 = data
  i1258.m_Index = i1259[0]
  i1258.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1259[1], i1258.m_Metrics)
  i1258.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1259[2], i1258.m_GlyphRect)
  i1258.m_Scale = i1259[3]
  i1258.m_AtlasIndex = i1259[4]
  i1258.m_ClassDefinitionType = i1259[5]
  return i1258
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1261 = data
  i1260.m_Width = i1261[0]
  i1260.m_Height = i1261[1]
  i1260.m_HorizontalBearingX = i1261[2]
  i1260.m_HorizontalBearingY = i1261[3]
  i1260.m_HorizontalAdvance = i1261[4]
  return i1260
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1263 = data
  i1262.m_X = i1263[0]
  i1262.m_Y = i1263[1]
  i1262.m_Width = i1263[2]
  i1262.m_Height = i1263[3]
  return i1262
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Character' )
  var i1267 = data
  i1266.m_ElementType = i1267[0]
  i1266.m_Unicode = i1267[1]
  i1266.m_GlyphIndex = i1267[2]
  i1266.m_Scale = i1267[3]
  return i1266
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.MultipleSubstitutionRecord', i1275[i + 0]));
  }
  i1272.m_MultipleSubstitutionRecords = i1274
  var i1277 = i1273[1]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.LigatureSubstitutionRecord', i1277[i + 0]));
  }
  i1272.m_LigatureSubstitutionRecords = i1276
  var i1279 = i1273[2]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1279[i + 0]));
  }
  i1272.m_GlyphPairAdjustmentRecords = i1278
  var i1281 = i1273[3]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1281[i + 0]));
  }
  i1272.m_MarkToBaseAdjustmentRecords = i1280
  var i1283 = i1273[4]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1283[i + 0]));
  }
  i1272.m_MarkToMarkAdjustmentRecords = i1282
  return i1272
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1287 = data
  i1286.m_TargetGlyphID = i1287[0]
  i1286.m_SubstituteGlyphIDs = i1287[1]
  return i1286
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1291 = data
  i1290.m_ComponentGlyphIDs = i1291[0]
  i1290.m_LigatureGlyphID = i1291[1]
  return i1290
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1295 = data
  i1294.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[0], i1294.m_FirstAdjustmentRecord)
  i1294.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1295[1], i1294.m_SecondAdjustmentRecord)
  i1294.m_FeatureLookupFlags = i1295[2]
  return i1294
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1299 = data
  i1298.m_BaseGlyphID = i1299[0]
  i1298.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1299[1], i1298.m_BaseGlyphAnchorPoint)
  i1298.m_MarkGlyphID = i1299[2]
  i1298.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1299[3], i1298.m_MarkPositionAdjustment)
  return i1298
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1303 = data
  i1302.m_BaseMarkGlyphID = i1303[0]
  i1302.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1303[1], i1302.m_BaseMarkGlyphAnchorPoint)
  i1302.m_CombiningMarkGlyphID = i1303[2]
  i1302.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1303[3], i1302.m_CombiningMarkPositionAdjustment)
  return i1302
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'regularTypeface')
  request.r(i1309[2], i1309[3], 0, i1308, 'italicTypeface')
  return i1308
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1311 = data
  i1310.Name = i1311[0]
  i1310.PointSize = i1311[1]
  i1310.Scale = i1311[2]
  i1310.CharacterCount = i1311[3]
  i1310.LineHeight = i1311[4]
  i1310.Baseline = i1311[5]
  i1310.Ascender = i1311[6]
  i1310.CapHeight = i1311[7]
  i1310.Descender = i1311[8]
  i1310.CenterLine = i1311[9]
  i1310.SuperscriptOffset = i1311[10]
  i1310.SubscriptOffset = i1311[11]
  i1310.SubSize = i1311[12]
  i1310.Underline = i1311[13]
  i1310.UnderlineThickness = i1311[14]
  i1310.strikethrough = i1311[15]
  i1310.strikethroughThickness = i1311[16]
  i1310.TabWidth = i1311[17]
  i1310.Padding = i1311[18]
  i1310.AtlasWidth = i1311[19]
  i1310.AtlasHeight = i1311[20]
  return i1310
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.x = i1315[1]
  i1314.y = i1315[2]
  i1314.width = i1315[3]
  i1314.height = i1315[4]
  i1314.xOffset = i1315[5]
  i1314.yOffset = i1315[6]
  i1314.xAdvance = i1315[7]
  i1314.scale = i1315[8]
  return i1314
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.KerningTable' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.KerningPair', i1319[i + 0]));
  }
  i1316.kerningPairs = i1318
  return i1316
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.KerningPair' )
  var i1323 = data
  i1322.xOffset = i1323[0]
  i1322.m_FirstGlyph = i1323[1]
  i1322.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[2], i1322.m_FirstGlyphAdjustments)
  i1322.m_SecondGlyph = i1323[3]
  i1322.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1323[4], i1322.m_SecondGlyphAdjustments)
  i1322.m_IgnoreSpacingAdjustments = !!i1323[5]
  return i1322
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1325 = data
  i1324.m_FaceIndex = i1325[0]
  i1324.m_FamilyName = i1325[1]
  i1324.m_StyleName = i1325[2]
  i1324.m_PointSize = i1325[3]
  i1324.m_Scale = i1325[4]
  i1324.m_UnitsPerEM = i1325[5]
  i1324.m_LineHeight = i1325[6]
  i1324.m_AscentLine = i1325[7]
  i1324.m_CapLine = i1325[8]
  i1324.m_MeanLine = i1325[9]
  i1324.m_Baseline = i1325[10]
  i1324.m_DescentLine = i1325[11]
  i1324.m_SuperscriptOffset = i1325[12]
  i1324.m_SuperscriptSize = i1325[13]
  i1324.m_SubscriptOffset = i1325[14]
  i1324.m_SubscriptSize = i1325[15]
  i1324.m_UnderlineOffset = i1325[16]
  i1324.m_UnderlineThickness = i1325[17]
  i1324.m_StrikethroughOffset = i1325[18]
  i1324.m_StrikethroughThickness = i1325[19]
  i1324.m_TabWidth = i1325[20]
  return i1324
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1327 = data
  i1326.useSafeMode = !!i1327[0]
  i1326.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1327[1], i1326.safeModeOptions)
  i1326.timeScale = i1327[2]
  i1326.unscaledTimeScale = i1327[3]
  i1326.useSmoothDeltaTime = !!i1327[4]
  i1326.maxSmoothUnscaledTime = i1327[5]
  i1326.rewindCallbackMode = i1327[6]
  i1326.showUnityEditorReport = !!i1327[7]
  i1326.logBehaviour = i1327[8]
  i1326.drawGizmos = !!i1327[9]
  i1326.defaultRecyclable = !!i1327[10]
  i1326.defaultAutoPlay = i1327[11]
  i1326.defaultUpdateType = i1327[12]
  i1326.defaultTimeScaleIndependent = !!i1327[13]
  i1326.defaultEaseType = i1327[14]
  i1326.defaultEaseOvershootOrAmplitude = i1327[15]
  i1326.defaultEasePeriod = i1327[16]
  i1326.defaultAutoKill = !!i1327[17]
  i1326.defaultLoopType = i1327[18]
  i1326.debugMode = !!i1327[19]
  i1326.debugStoreTargetId = !!i1327[20]
  i1326.showPreviewPanel = !!i1327[21]
  i1326.storeSettingsLocation = i1327[22]
  i1326.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1327[23], i1326.modules)
  i1326.createASMDEF = !!i1327[24]
  i1326.showPlayingTweens = !!i1327[25]
  i1326.showPausedTweens = !!i1327[26]
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1329 = data
  i1328.logBehaviour = i1329[0]
  i1328.nestedTweenFailureBehaviour = i1329[1]
  return i1328
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1331 = data
  i1330.showPanel = !!i1331[0]
  i1330.audioEnabled = !!i1331[1]
  i1330.physicsEnabled = !!i1331[2]
  i1330.physics2DEnabled = !!i1331[3]
  i1330.spriteEnabled = !!i1331[4]
  i1330.uiEnabled = !!i1331[5]
  i1330.uiToolkitEnabled = !!i1331[6]
  i1330.textMeshProEnabled = !!i1331[7]
  i1330.tk2DEnabled = !!i1331[8]
  i1330.deAudioEnabled = !!i1331[9]
  i1330.deUnityExtendedEnabled = !!i1331[10]
  i1330.epoOutlineEnabled = !!i1331[11]
  return i1330
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_Settings' )
  var i1333 = data
  i1332.assetVersion = i1333[0]
  i1332.m_TextWrappingMode = i1333[1]
  i1332.m_enableKerning = !!i1333[2]
  var i1335 = i1333[3]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(i1335[i + 0]);
  }
  i1332.m_ActiveFontFeatures = i1334
  i1332.m_enableExtraPadding = !!i1333[4]
  i1332.m_enableTintAllSprites = !!i1333[5]
  i1332.m_enableParseEscapeCharacters = !!i1333[6]
  i1332.m_EnableRaycastTarget = !!i1333[7]
  i1332.m_GetFontFeaturesAtRuntime = !!i1333[8]
  i1332.m_missingGlyphCharacter = i1333[9]
  i1332.m_ClearDynamicDataOnBuild = !!i1333[10]
  i1332.m_warningsDisabled = !!i1333[11]
  request.r(i1333[12], i1333[13], 0, i1332, 'm_defaultFontAsset')
  i1332.m_defaultFontAssetPath = i1333[14]
  i1332.m_defaultFontSize = i1333[15]
  i1332.m_defaultAutoSizeMinRatio = i1333[16]
  i1332.m_defaultAutoSizeMaxRatio = i1333[17]
  i1332.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1333[18], i1333[19] )
  i1332.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1333[20], i1333[21] )
  i1332.m_autoSizeTextContainer = !!i1333[22]
  i1332.m_IsTextObjectScaleStatic = !!i1333[23]
  var i1337 = i1333[24]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1332.m_fallbackFontAssets = i1336
  i1332.m_matchMaterialPreset = !!i1333[25]
  i1332.m_HideSubTextObjects = !!i1333[26]
  request.r(i1333[27], i1333[28], 0, i1332, 'm_defaultSpriteAsset')
  i1332.m_defaultSpriteAssetPath = i1333[29]
  i1332.m_enableEmojiSupport = !!i1333[30]
  i1332.m_MissingCharacterSpriteUnicode = i1333[31]
  var i1339 = i1333[32]
  var i1338 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1339.length; i += 2) {
  request.r(i1339[i + 0], i1339[i + 1], 1, i1338, '')
  }
  i1332.m_EmojiFallbackTextAssets = i1338
  i1332.m_defaultColorGradientPresetsPath = i1333[33]
  request.r(i1333[34], i1333[35], 0, i1332, 'm_defaultStyleSheet')
  i1332.m_StyleSheetsResourcePath = i1333[36]
  request.r(i1333[37], i1333[38], 0, i1332, 'm_leadingCharacters')
  request.r(i1333[39], i1333[40], 0, i1332, 'm_followingCharacters')
  i1332.m_UseModernHangulLineBreakingRules = !!i1333[41]
  return i1332
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'spriteSheet')
  var i1345 = i1343[2]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_Sprite', i1345[i + 0]));
  }
  i1342.spriteInfoList = i1344
  var i1347 = i1343[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1342.fallbackSpriteAssets = i1346
  var i1349 = i1343[4]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.add(request.d('TMPro.TMP_SpriteCharacter', i1349[i + 0]));
  }
  i1342.m_SpriteCharacterTable = i1348
  var i1351 = i1343[5]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_SpriteGlyph', i1351[i + 0]));
  }
  i1342.m_GlyphTable = i1350
  i1342.m_Version = i1343[6]
  i1342.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1343[7], i1342.m_FaceInfo)
  request.r(i1343[8], i1343[9], 0, i1342, 'm_Material')
  return i1342
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.hashCode = i1355[1]
  i1354.unicode = i1355[2]
  i1354.pivot = new pc.Vec2( i1355[3], i1355[4] )
  request.r(i1355[5], i1355[6], 0, i1354, 'sprite')
  i1354.id = i1355[7]
  i1354.x = i1355[8]
  i1354.y = i1355[9]
  i1354.width = i1355[10]
  i1354.height = i1355[11]
  i1354.xOffset = i1355[12]
  i1354.yOffset = i1355[13]
  i1354.xAdvance = i1355[14]
  i1354.scale = i1355[15]
  return i1354
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1361 = data
  i1360.m_Name = i1361[0]
  i1360.m_ElementType = i1361[1]
  i1360.m_Unicode = i1361[2]
  i1360.m_GlyphIndex = i1361[3]
  i1360.m_Scale = i1361[4]
  return i1360
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1364 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'sprite')
  i1364.m_Index = i1365[2]
  i1364.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1365[3], i1364.m_Metrics)
  i1364.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1365[4], i1364.m_GlyphRect)
  i1364.m_Scale = i1365[5]
  i1364.m_AtlasIndex = i1365[6]
  i1364.m_ClassDefinitionType = i1365[7]
  return i1364
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.add(request.d('TMPro.TMP_Style', i1369[i + 0]));
  }
  i1366.m_StyleList = i1368
  return i1366
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_Style' )
  var i1373 = data
  i1372.m_Name = i1373[0]
  i1372.m_HashCode = i1373[1]
  i1372.m_OpeningDefinition = i1373[2]
  i1372.m_ClosingDefinition = i1373[3]
  i1372.m_OpeningTagArray = i1373[4]
  i1372.m_ClosingTagArray = i1373[5]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1377[i + 0]) );
  }
  i1374.files = i1376
  i1374.componentToPrefabIds = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1381 = data
  i1380.path = i1381[0]
  request.r(i1381[1], i1381[2], 0, i1380, 'unityObject')
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1385[i + 0]) );
  }
  i1382.scriptsExecutionOrder = i1384
  var i1387 = i1383[1]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1387[i + 0]) );
  }
  i1382.sortingLayers = i1386
  var i1389 = i1383[2]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1389[i + 0]) );
  }
  i1382.cullingLayers = i1388
  i1382.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1383[3], i1382.timeSettings)
  i1382.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1383[4], i1382.physicsSettings)
  i1382.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1383[5], i1382.physics2DSettings)
  i1382.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1383[6], i1382.qualitySettings)
  i1382.enableRealtimeShadows = !!i1383[7]
  i1382.enableAutoInstancing = !!i1383[8]
  i1382.enableStaticBatching = !!i1383[9]
  i1382.enableDynamicBatching = !!i1383[10]
  i1382.lightmapEncodingQuality = i1383[11]
  i1382.desiredColorSpace = i1383[12]
  var i1391 = i1383[13]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1382.allTags = i1390
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.value = i1395[1]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  i1398.value = i1399[2]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1403 = data
  i1402.id = i1403[0]
  i1402.name = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1405 = data
  i1404.fixedDeltaTime = i1405[0]
  i1404.maximumDeltaTime = i1405[1]
  i1404.timeScale = i1405[2]
  i1404.maximumParticleTimestep = i1405[3]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1407 = data
  i1406.gravity = new pc.Vec3( i1407[0], i1407[1], i1407[2] )
  i1406.defaultSolverIterations = i1407[3]
  i1406.bounceThreshold = i1407[4]
  i1406.autoSyncTransforms = !!i1407[5]
  i1406.autoSimulation = !!i1407[6]
  var i1409 = i1407[7]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1409[i + 0]) );
  }
  i1406.collisionMatrix = i1408
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1413 = data
  i1412.enabled = !!i1413[0]
  i1412.layerId = i1413[1]
  i1412.otherLayerId = i1413[2]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1415 = data
  request.r(i1415[0], i1415[1], 0, i1414, 'material')
  i1414.gravity = new pc.Vec2( i1415[2], i1415[3] )
  i1414.positionIterations = i1415[4]
  i1414.velocityIterations = i1415[5]
  i1414.velocityThreshold = i1415[6]
  i1414.maxLinearCorrection = i1415[7]
  i1414.maxAngularCorrection = i1415[8]
  i1414.maxTranslationSpeed = i1415[9]
  i1414.maxRotationSpeed = i1415[10]
  i1414.baumgarteScale = i1415[11]
  i1414.baumgarteTOIScale = i1415[12]
  i1414.timeToSleep = i1415[13]
  i1414.linearSleepTolerance = i1415[14]
  i1414.angularSleepTolerance = i1415[15]
  i1414.defaultContactOffset = i1415[16]
  i1414.autoSimulation = !!i1415[17]
  i1414.queriesHitTriggers = !!i1415[18]
  i1414.queriesStartInColliders = !!i1415[19]
  i1414.callbacksOnDisable = !!i1415[20]
  i1414.reuseCollisionCallbacks = !!i1415[21]
  i1414.autoSyncTransforms = !!i1415[22]
  var i1417 = i1415[23]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1423 = data
  var i1425 = i1423[0]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1425[i + 0]) );
  }
  i1422.qualityLevels = i1424
  var i1427 = i1423[1]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( i1427[i + 0] );
  }
  i1422.names = i1426
  i1422.shadows = i1423[2]
  i1422.anisotropicFiltering = i1423[3]
  i1422.antiAliasing = i1423[4]
  i1422.lodBias = i1423[5]
  i1422.shadowCascades = i1423[6]
  i1422.shadowDistance = i1423[7]
  i1422.shadowmaskMode = i1423[8]
  i1422.shadowProjection = i1423[9]
  i1422.shadowResolution = i1423[10]
  i1422.softParticles = !!i1423[11]
  i1422.softVegetation = !!i1423[12]
  i1422.activeColorSpace = i1423[13]
  i1422.desiredColorSpace = i1423[14]
  i1422.masterTextureLimit = i1423[15]
  i1422.maxQueuedFrames = i1423[16]
  i1422.particleRaycastBudget = i1423[17]
  i1422.pixelLightCount = i1423[18]
  i1422.realtimeReflectionProbes = !!i1423[19]
  i1422.shadowCascade2Split = i1423[20]
  i1422.shadowCascade4Split = new pc.Vec3( i1423[21], i1423[22], i1423[23] )
  i1422.streamingMipmapsActive = !!i1423[24]
  i1422.vSyncCount = i1423[25]
  i1422.asyncUploadBufferSize = i1423[26]
  i1422.asyncUploadTimeSlice = i1423[27]
  i1422.billboardsFaceCameraPosition = !!i1423[28]
  i1422.shadowNearPlaneOffset = i1423[29]
  i1422.streamingMipmapsMemoryBudget = i1423[30]
  i1422.maximumLODLevel = i1423[31]
  i1422.streamingMipmapsAddAllCameras = !!i1423[32]
  i1422.streamingMipmapsMaxLevelReduction = i1423[33]
  i1422.streamingMipmapsRenderersPerFrame = i1423[34]
  i1422.resolutionScalingFixedDPIFactor = i1423[35]
  i1422.streamingMipmapsMaxFileIORequests = i1423[36]
  i1422.currentQualityLevel = i1423[37]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1433 = data
  i1432.weight = i1433[0]
  i1432.vertices = i1433[1]
  i1432.normals = i1433[2]
  i1432.tangents = i1433[3]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1437 = data
  i1436.mode = i1437[0]
  i1436.parameter = i1437[1]
  i1436.threshold = i1437[2]
  return i1436
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1439 = data
  i1438.m_GlyphIndex = i1439[0]
  i1438.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1439[1], i1438.m_GlyphValueRecord)
  return i1438
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1441 = data
  i1440.m_XCoordinate = i1441[0]
  i1440.m_YCoordinate = i1441[1]
  return i1440
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1443 = data
  i1442.m_XPositionAdjustment = i1443[0]
  i1442.m_YPositionAdjustment = i1443[1]
  return i1442
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1445 = data
  i1444.xPlacement = i1445[0]
  i1444.yPlacement = i1445[1]
  i1444.xAdvance = i1445[2]
  i1444.yAdvance = i1445[3]
  return i1444
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1447 = data
  i1446.m_XPlacement = i1447[0]
  i1446.m_YPlacement = i1447[1]
  i1446.m_XAdvance = i1447[2]
  i1446.m_YAdvance = i1447[3]
  return i1446
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

Deserializers.buildID = "259a24d6-043f-4c61-9408-b77e33359495";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

