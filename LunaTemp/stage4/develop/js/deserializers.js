var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointSpring' )
  var i731 = data
  i730.spring = i731[0]
  i730.damper = i731[1]
  i730.targetPosition = i731[2]
  return i730
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointMotor' )
  var i733 = data
  i732.m_TargetVelocity = i733[0]
  i732.m_Force = i733[1]
  i732.m_FreeSpin = i733[2]
  return i732
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointLimits' )
  var i735 = data
  i734.m_Min = i735[0]
  i734.m_Max = i735[1]
  i734.m_Bounciness = i735[2]
  i734.m_BounceMinVelocity = i735[3]
  i734.m_ContactDistance = i735[4]
  i734.minBounce = i735[5]
  i734.maxBounce = i735[6]
  return i734
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointDrive' )
  var i737 = data
  i736.m_PositionSpring = i737[0]
  i736.m_PositionDamper = i737[1]
  i736.m_MaximumForce = i737[2]
  i736.m_UseAcceleration = i737[3]
  return i736
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i739 = data
  i738.m_Spring = i739[0]
  i738.m_Damper = i739[1]
  return i738
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i741 = data
  i740.m_Limit = i741[0]
  i740.m_Bounciness = i741[1]
  i740.m_ContactDistance = i741[2]
  return i740
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i743 = data
  i742.m_ExtremumSlip = i743[0]
  i742.m_ExtremumValue = i743[1]
  i742.m_AsymptoteSlip = i743[2]
  i742.m_AsymptoteValue = i743[3]
  i742.m_Stiffness = i743[4]
  return i742
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i745 = data
  i744.m_LowerAngle = i745[0]
  i744.m_UpperAngle = i745[1]
  return i744
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i747 = data
  i746.m_MotorSpeed = i747[0]
  i746.m_MaximumMotorTorque = i747[1]
  return i746
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i749 = data
  i748.m_DampingRatio = i749[0]
  i748.m_Frequency = i749[1]
  i748.m_Angle = i749[2]
  return i748
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i751 = data
  i750.m_LowerTranslation = i751[0]
  i750.m_UpperTranslation = i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i752 = root || new pc.UnityMaterial()
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'shader')
  i752.renderQueue = i753[3]
  i752.enableInstancing = !!i753[4]
  var i755 = i753[5]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i755[i + 0]) );
  }
  i752.floatParameters = i754
  var i757 = i753[6]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i757[i + 0]) );
  }
  i752.colorParameters = i756
  var i759 = i753[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i759[i + 0]) );
  }
  i752.vectorParameters = i758
  var i761 = i753[8]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i761[i + 0]) );
  }
  i752.textureParameters = i760
  var i763 = i753[9]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i763[i + 0]) );
  }
  i752.materialFlags = i762
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i771 = data
  i770.name = i771[0]
  i770.value = new pc.Color(i771[1], i771[2], i771[3], i771[4])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i775 = data
  i774.name = i775[0]
  i774.value = new pc.Vec4( i775[1], i775[2], i775[3], i775[4] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i779 = data
  i778.name = i779[0]
  request.r(i779[1], i779[2], 0, i778, 'value')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i783 = data
  i782.name = i783[0]
  i782.enabled = !!i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i785 = data
  i784.name = i785[0]
  i784.width = i785[1]
  i784.height = i785[2]
  i784.mipmapCount = i785[3]
  i784.anisoLevel = i785[4]
  i784.filterMode = i785[5]
  i784.hdr = !!i785[6]
  i784.format = i785[7]
  i784.wrapMode = i785[8]
  i784.alphaIsTransparency = !!i785[9]
  i784.alphaSource = i785[10]
  i784.graphicsFormat = i785[11]
  i784.sRGBTexture = !!i785[12]
  i784.desiredColorSpace = i785[13]
  i784.wrapU = i785[14]
  i784.wrapV = i785[15]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i787 = data
  i786.position = new pc.Vec3( i787[0], i787[1], i787[2] )
  i786.scale = new pc.Vec3( i787[3], i787[4], i787[5] )
  i786.rotation = new pc.Quat(i787[6], i787[7], i787[8], i787[9])
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i789 = data
  i788.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i789[0], i788.main)
  i788.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i789[1], i788.colorBySpeed)
  i788.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i789[2], i788.colorOverLifetime)
  i788.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i789[3], i788.emission)
  i788.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i789[4], i788.rotationBySpeed)
  i788.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i789[5], i788.rotationOverLifetime)
  i788.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i789[6], i788.shape)
  i788.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i789[7], i788.sizeBySpeed)
  i788.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i789[8], i788.sizeOverLifetime)
  i788.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i789[9], i788.textureSheetAnimation)
  i788.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i789[10], i788.velocityOverLifetime)
  i788.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i789[11], i788.noise)
  i788.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i789[12], i788.inheritVelocity)
  i788.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i789[13], i788.forceOverLifetime)
  i788.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i789[14], i788.limitVelocityOverLifetime)
  i788.useAutoRandomSeed = !!i789[15]
  i788.randomSeed = i789[16]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemMain()
  var i791 = data
  i790.duration = i791[0]
  i790.loop = !!i791[1]
  i790.prewarm = !!i791[2]
  i790.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.startDelay)
  i790.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.startLifetime)
  i790.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[5], i790.startSpeed)
  i790.startSize3D = !!i791[6]
  i790.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[7], i790.startSizeX)
  i790.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.startSizeY)
  i790.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[9], i790.startSizeZ)
  i790.startRotation3D = !!i791[10]
  i790.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.startRotationX)
  i790.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[12], i790.startRotationY)
  i790.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[13], i790.startRotationZ)
  i790.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[14], i790.startColor)
  i790.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[15], i790.gravityModifier)
  i790.simulationSpace = i791[16]
  request.r(i791[17], i791[18], 0, i790, 'customSimulationSpace')
  i790.simulationSpeed = i791[19]
  i790.useUnscaledTime = !!i791[20]
  i790.scalingMode = i791[21]
  i790.playOnAwake = !!i791[22]
  i790.maxParticles = i791[23]
  i790.emitterVelocityMode = i791[24]
  i790.stopAction = i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i792 = root || new pc.MinMaxCurve()
  var i793 = data
  i792.mode = i793[0]
  i792.curveMin = new pc.AnimationCurve( { keys_flow: i793[1] } )
  i792.curveMax = new pc.AnimationCurve( { keys_flow: i793[2] } )
  i792.curveMultiplier = i793[3]
  i792.constantMin = i793[4]
  i792.constantMax = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i794 = root || new pc.MinMaxGradient()
  var i795 = data
  i794.mode = i795[0]
  i794.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i795[1], i794.gradientMin)
  i794.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i795[2], i794.gradientMax)
  i794.colorMin = new pc.Color(i795[3], i795[4], i795[5], i795[6])
  i794.colorMax = new pc.Color(i795[7], i795[8], i795[9], i795[10])
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i797 = data
  i796.mode = i797[0]
  var i799 = i797[1]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i799[i + 0]) );
  }
  i796.colorKeys = i798
  var i801 = i797[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i801[i + 0]) );
  }
  i796.alphaKeys = i800
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemColorBySpeed()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i803[1], i802.color)
  i802.range = new pc.Vec2( i803[2], i803[3] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i807 = data
  i806.color = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.time = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i811 = data
  i810.alpha = i811[0]
  i810.time = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemColorOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i813[1], i812.color)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemEmitter()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.rateOverTime)
  i814.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.rateOverDistance)
  var i817 = i815[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i817[i + 0]) );
  }
  i814.bursts = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemBurst()
  var i821 = data
  i820.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[0], i820.count)
  i820.cycleCount = i821[1]
  i820.minCount = i821[2]
  i820.maxCount = i821[3]
  i820.repeatInterval = i821[4]
  i820.time = i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemRotationBySpeed()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.separateAxes = !!i823[4]
  i822.range = new pc.Vec2( i823[5], i823[6] )
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemRotationOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.separateAxes = !!i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemShape()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.shapeType = i827[1]
  i826.randomDirectionAmount = i827[2]
  i826.sphericalDirectionAmount = i827[3]
  i826.randomPositionAmount = i827[4]
  i826.alignToDirection = !!i827[5]
  i826.radius = i827[6]
  i826.radiusMode = i827[7]
  i826.radiusSpread = i827[8]
  i826.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[9], i826.radiusSpeed)
  i826.radiusThickness = i827[10]
  i826.angle = i827[11]
  i826.length = i827[12]
  i826.boxThickness = new pc.Vec3( i827[13], i827[14], i827[15] )
  i826.meshShapeType = i827[16]
  request.r(i827[17], i827[18], 0, i826, 'mesh')
  request.r(i827[19], i827[20], 0, i826, 'meshRenderer')
  request.r(i827[21], i827[22], 0, i826, 'skinnedMeshRenderer')
  i826.useMeshMaterialIndex = !!i827[23]
  i826.meshMaterialIndex = i827[24]
  i826.useMeshColors = !!i827[25]
  i826.normalOffset = i827[26]
  i826.arc = i827[27]
  i826.arcMode = i827[28]
  i826.arcSpread = i827[29]
  i826.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[30], i826.arcSpeed)
  i826.donutRadius = i827[31]
  i826.position = new pc.Vec3( i827[32], i827[33], i827[34] )
  i826.rotation = new pc.Vec3( i827[35], i827[36], i827[37] )
  i826.scale = new pc.Vec3( i827[38], i827[39], i827[40] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemSizeBySpeed()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.x)
  i828.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.y)
  i828.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.z)
  i828.separateAxes = !!i829[4]
  i828.range = new pc.Vec2( i829[5], i829[6] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemSizeOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.x)
  i830.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.y)
  i830.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[3], i830.z)
  i830.separateAxes = !!i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.mode = i833[1]
  i832.animation = i833[2]
  i832.numTilesX = i833[3]
  i832.numTilesY = i833[4]
  i832.useRandomRow = !!i833[5]
  i832.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[6], i832.frameOverTime)
  i832.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[7], i832.startFrame)
  i832.cycleCount = i833[8]
  i832.rowIndex = i833[9]
  i832.flipU = i833[10]
  i832.flipV = i833[11]
  i832.spriteCount = i833[12]
  var i835 = i833[13]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.sprites = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[4], i838.radial)
  i838.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[5], i838.speedModifier)
  i838.space = i839[6]
  i838.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[7], i838.orbitalX)
  i838.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[8], i838.orbitalY)
  i838.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[9], i838.orbitalZ)
  i838.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[10], i838.orbitalOffsetX)
  i838.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[11], i838.orbitalOffsetY)
  i838.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[12], i838.orbitalOffsetZ)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemNoise()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.separateAxes = !!i841[1]
  i840.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.strengthX)
  i840.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.strengthY)
  i840.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.strengthZ)
  i840.frequency = i841[5]
  i840.damping = !!i841[6]
  i840.octaveCount = i841[7]
  i840.octaveMultiplier = i841[8]
  i840.octaveScale = i841[9]
  i840.quality = i841[10]
  i840.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.scrollSpeed)
  i840.scrollSpeedMultiplier = i841[12]
  i840.remapEnabled = !!i841[13]
  i840.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[14], i840.remapX)
  i840.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[15], i840.remapY)
  i840.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[16], i840.remapZ)
  i840.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[17], i840.positionAmount)
  i840.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[18], i840.rotationAmount)
  i840.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[19], i840.sizeAmount)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemInheritVelocity()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.mode = i843[1]
  i842.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.curve)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemForceOverLifetime()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.x)
  i844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.y)
  i844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.z)
  i844.space = i845[4]
  i844.randomized = !!i845[5]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.limit)
  i846.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.limitX)
  i846.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.limitY)
  i846.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[4], i846.limitZ)
  i846.dampen = i847[5]
  i846.separateAxes = !!i847[6]
  i846.space = i847[7]
  i846.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[8], i846.drag)
  i846.multiplyDragByParticleSize = !!i847[9]
  i846.multiplyDragByParticleVelocity = !!i847[10]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'mesh')
  i848.meshCount = i849[2]
  i848.activeVertexStreamsCount = i849[3]
  i848.alignment = i849[4]
  i848.renderMode = i849[5]
  i848.sortMode = i849[6]
  i848.lengthScale = i849[7]
  i848.velocityScale = i849[8]
  i848.cameraVelocityScale = i849[9]
  i848.normalDirection = i849[10]
  i848.sortingFudge = i849[11]
  i848.minParticleSize = i849[12]
  i848.maxParticleSize = i849[13]
  i848.pivot = new pc.Vec3( i849[14], i849[15], i849[16] )
  request.r(i849[17], i849[18], 0, i848, 'trailMaterial')
  i848.applyActiveColorSpace = !!i849[19]
  i848.enabled = !!i849[20]
  request.r(i849[21], i849[22], 0, i848, 'sharedMaterial')
  var i851 = i849[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[24]
  i848.shadowCastingMode = i849[25]
  i848.sortingLayerID = i849[26]
  i848.sortingOrder = i849[27]
  i848.lightmapIndex = i849[28]
  i848.lightmapSceneIndex = i849[29]
  i848.lightmapScaleOffset = new pc.Vec4( i849[30], i849[31], i849[32], i849[33] )
  i848.lightProbeUsage = i849[34]
  i848.reflectionProbeUsage = i849[35]
  return i848
}

Deserializers["MergeEffect"] = function (request, data, root) {
  var i854 = root || request.c( 'MergeEffect' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'tf')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i857 = data
  i856.name = i857[0]
  i856.tagId = i857[1]
  i856.enabled = !!i857[2]
  i856.isStatic = !!i857[3]
  i856.layer = i857[4]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i859 = data
  i858.name = i859[0]
  i858.halfPrecision = !!i859[1]
  i858.useSimplification = !!i859[2]
  i858.useUInt32IndexFormat = !!i859[3]
  i858.vertexCount = i859[4]
  i858.aabb = i859[5]
  var i861 = i859[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( !!i861[i + 0] );
  }
  i858.streams = i860
  i858.vertices = i859[7]
  var i863 = i859[8]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i863[i + 0]) );
  }
  i858.subMeshes = i862
  var i865 = i859[9]
  var i864 = []
  for(var i = 0; i < i865.length; i += 16) {
    i864.push( new pc.Mat4().setData(i865[i + 0], i865[i + 1], i865[i + 2], i865[i + 3],  i865[i + 4], i865[i + 5], i865[i + 6], i865[i + 7],  i865[i + 8], i865[i + 9], i865[i + 10], i865[i + 11],  i865[i + 12], i865[i + 13], i865[i + 14], i865[i + 15]) );
  }
  i858.bindposes = i864
  var i867 = i859[10]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i867[i + 0]) );
  }
  i858.blendShapes = i866
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i873 = data
  i872.triangles = i873[0]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i879 = data
  i878.name = i879[0]
  var i881 = i879[1]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i881[i + 0]) );
  }
  i878.frames = i880
  return i878
}

Deserializers["BlinkEffect"] = function (request, data, root) {
  var i882 = root || request.c( 'BlinkEffect' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'tf')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i885 = data
  i884.name = i885[0]
  i884.index = i885[1]
  i884.startup = !!i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i887 = data
  i886.pivot = new pc.Vec2( i887[0], i887[1] )
  i886.anchorMin = new pc.Vec2( i887[2], i887[3] )
  i886.anchorMax = new pc.Vec2( i887[4], i887[5] )
  i886.sizeDelta = new pc.Vec2( i887[6], i887[7] )
  i886.anchoredPosition3D = new pc.Vec3( i887[8], i887[9], i887[10] )
  i886.rotation = new pc.Quat(i887[11], i887[12], i887[13], i887[14])
  i886.scale = new pc.Vec3( i887[15], i887[16], i887[17] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i889 = data
  i888.planeDistance = i889[0]
  i888.referencePixelsPerUnit = i889[1]
  i888.isFallbackOverlay = !!i889[2]
  i888.renderMode = i889[3]
  i888.renderOrder = i889[4]
  i888.sortingLayerName = i889[5]
  i888.sortingOrder = i889[6]
  i888.scaleFactor = i889[7]
  request.r(i889[8], i889[9], 0, i888, 'worldCamera')
  i888.overrideSorting = !!i889[10]
  i888.pixelPerfect = !!i889[11]
  i888.targetDisplay = i889[12]
  i888.overridePixelPerfect = !!i889[13]
  i888.enabled = !!i889[14]
  return i888
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i891 = data
  i890.m_UiScaleMode = i891[0]
  i890.m_ReferencePixelsPerUnit = i891[1]
  i890.m_ScaleFactor = i891[2]
  i890.m_ReferenceResolution = new pc.Vec2( i891[3], i891[4] )
  i890.m_ScreenMatchMode = i891[5]
  i890.m_MatchWidthOrHeight = i891[6]
  i890.m_PhysicalUnit = i891[7]
  i890.m_FallbackScreenDPI = i891[8]
  i890.m_DefaultSpriteDPI = i891[9]
  i890.m_DynamicPixelsPerUnit = i891[10]
  i890.m_PresetInfoIsWorld = !!i891[11]
  return i890
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i893 = data
  i892.m_IgnoreReversedGraphics = !!i893[0]
  i892.m_BlockingObjects = i893[1]
  i892.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i893[2] )
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'animatorController')
  request.r(i895[2], i895[3], 0, i894, 'avatar')
  i894.updateMode = i895[4]
  i894.hasTransformHierarchy = !!i895[5]
  i894.applyRootMotion = !!i895[6]
  var i897 = i895[7]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i894.humanBones = i896
  i894.enabled = !!i895[8]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i901 = data
  i900.cullTransparentMesh = !!i901[0]
  return i900
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i903 = data
  i902.m_hasFontAssetChanged = !!i903[0]
  request.r(i903[1], i903[2], 0, i902, 'm_baseMaterial')
  i902.m_maskOffset = new pc.Vec4( i903[3], i903[4], i903[5], i903[6] )
  i902.m_text = i903[7]
  i902.m_isRightToLeft = !!i903[8]
  request.r(i903[9], i903[10], 0, i902, 'm_fontAsset')
  request.r(i903[11], i903[12], 0, i902, 'm_sharedMaterial')
  var i905 = i903[13]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.m_fontSharedMaterials = i904
  request.r(i903[14], i903[15], 0, i902, 'm_fontMaterial')
  var i907 = i903[16]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i902.m_fontMaterials = i906
  i902.m_fontColor32 = UnityEngine.Color32.ConstructColor(i903[17], i903[18], i903[19], i903[20])
  i902.m_fontColor = new pc.Color(i903[21], i903[22], i903[23], i903[24])
  i902.m_enableVertexGradient = !!i903[25]
  i902.m_colorMode = i903[26]
  i902.m_fontColorGradient = request.d('TMPro.VertexGradient', i903[27], i902.m_fontColorGradient)
  request.r(i903[28], i903[29], 0, i902, 'm_fontColorGradientPreset')
  request.r(i903[30], i903[31], 0, i902, 'm_spriteAsset')
  i902.m_tintAllSprites = !!i903[32]
  request.r(i903[33], i903[34], 0, i902, 'm_StyleSheet')
  i902.m_TextStyleHashCode = i903[35]
  i902.m_overrideHtmlColors = !!i903[36]
  i902.m_faceColor = UnityEngine.Color32.ConstructColor(i903[37], i903[38], i903[39], i903[40])
  i902.m_fontSize = i903[41]
  i902.m_fontSizeBase = i903[42]
  i902.m_fontWeight = i903[43]
  i902.m_enableAutoSizing = !!i903[44]
  i902.m_fontSizeMin = i903[45]
  i902.m_fontSizeMax = i903[46]
  i902.m_fontStyle = i903[47]
  i902.m_HorizontalAlignment = i903[48]
  i902.m_VerticalAlignment = i903[49]
  i902.m_textAlignment = i903[50]
  i902.m_characterSpacing = i903[51]
  i902.m_wordSpacing = i903[52]
  i902.m_lineSpacing = i903[53]
  i902.m_lineSpacingMax = i903[54]
  i902.m_paragraphSpacing = i903[55]
  i902.m_charWidthMaxAdj = i903[56]
  i902.m_TextWrappingMode = i903[57]
  i902.m_wordWrappingRatios = i903[58]
  i902.m_overflowMode = i903[59]
  request.r(i903[60], i903[61], 0, i902, 'm_linkedTextComponent')
  request.r(i903[62], i903[63], 0, i902, 'parentLinkedComponent')
  i902.m_enableKerning = !!i903[64]
  var i909 = i903[65]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(i909[i + 0]);
  }
  i902.m_ActiveFontFeatures = i908
  i902.m_enableExtraPadding = !!i903[66]
  i902.checkPaddingRequired = !!i903[67]
  i902.m_isRichText = !!i903[68]
  i902.m_parseCtrlCharacters = !!i903[69]
  i902.m_isOrthographic = !!i903[70]
  i902.m_isCullingEnabled = !!i903[71]
  i902.m_horizontalMapping = i903[72]
  i902.m_verticalMapping = i903[73]
  i902.m_uvLineOffset = i903[74]
  i902.m_geometrySortingOrder = i903[75]
  i902.m_IsTextObjectScaleStatic = !!i903[76]
  i902.m_VertexBufferAutoSizeReduction = !!i903[77]
  i902.m_useMaxVisibleDescender = !!i903[78]
  i902.m_pageToDisplay = i903[79]
  i902.m_margin = new pc.Vec4( i903[80], i903[81], i903[82], i903[83] )
  i902.m_isUsingLegacyAnimationComponent = !!i903[84]
  i902.m_isVolumetricText = !!i903[85]
  request.r(i903[86], i903[87], 0, i902, 'm_Material')
  i902.m_EmojiFallbackSupport = !!i903[88]
  i902.m_Maskable = !!i903[89]
  i902.m_Color = new pc.Color(i903[90], i903[91], i903[92], i903[93])
  i902.m_RaycastTarget = !!i903[94]
  i902.m_RaycastPadding = new pc.Vec4( i903[95], i903[96], i903[97], i903[98] )
  return i902
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i910 = root || request.c( 'TMPro.VertexGradient' )
  var i911 = data
  i910.topLeft = new pc.Color(i911[0], i911[1], i911[2], i911[3])
  i910.topRight = new pc.Color(i911[4], i911[5], i911[6], i911[7])
  i910.bottomLeft = new pc.Color(i911[8], i911[9], i911[10], i911[11])
  i910.bottomRight = new pc.Color(i911[12], i911[13], i911[14], i911[15])
  return i910
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Slider' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_FillRect')
  request.r(i915[2], i915[3], 0, i914, 'm_HandleRect')
  i914.m_Direction = i915[4]
  i914.m_MinValue = i915[5]
  i914.m_MaxValue = i915[6]
  i914.m_WholeNumbers = !!i915[7]
  i914.m_Value = i915[8]
  i914.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i915[9], i914.m_OnValueChanged)
  i914.m_Navigation = request.d('UnityEngine.UI.Navigation', i915[10], i914.m_Navigation)
  i914.m_Transition = i915[11]
  i914.m_Colors = request.d('UnityEngine.UI.ColorBlock', i915[12], i914.m_Colors)
  i914.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i915[13], i914.m_SpriteState)
  i914.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i915[14], i914.m_AnimationTriggers)
  i914.m_Interactable = !!i915[15]
  request.r(i915[16], i915[17], 0, i914, 'm_TargetGraphic')
  return i914
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i917 = data
  i916.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i917[0], i916.m_PersistentCalls)
  return i916
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i919 = data
  var i921 = i919[0]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('UnityEngine.Events.PersistentCall', i921[i + 0]));
  }
  i918.m_Calls = i920
  return i918
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'm_Target')
  i924.m_TargetAssemblyTypeName = i925[2]
  i924.m_MethodName = i925[3]
  i924.m_Mode = i925[4]
  i924.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i925[5], i924.m_Arguments)
  i924.m_CallState = i925[6]
  return i924
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i927 = data
  i926.m_Mode = i927[0]
  i926.m_WrapAround = !!i927[1]
  request.r(i927[2], i927[3], 0, i926, 'm_SelectOnUp')
  request.r(i927[4], i927[5], 0, i926, 'm_SelectOnDown')
  request.r(i927[6], i927[7], 0, i926, 'm_SelectOnLeft')
  request.r(i927[8], i927[9], 0, i926, 'm_SelectOnRight')
  return i926
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i929 = data
  i928.m_NormalColor = new pc.Color(i929[0], i929[1], i929[2], i929[3])
  i928.m_HighlightedColor = new pc.Color(i929[4], i929[5], i929[6], i929[7])
  i928.m_PressedColor = new pc.Color(i929[8], i929[9], i929[10], i929[11])
  i928.m_SelectedColor = new pc.Color(i929[12], i929[13], i929[14], i929[15])
  i928.m_DisabledColor = new pc.Color(i929[16], i929[17], i929[18], i929[19])
  i928.m_ColorMultiplier = i929[20]
  i928.m_FadeDuration = i929[21]
  return i928
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_HighlightedSprite')
  request.r(i931[2], i931[3], 0, i930, 'm_PressedSprite')
  request.r(i931[4], i931[5], 0, i930, 'm_SelectedSprite')
  request.r(i931[6], i931[7], 0, i930, 'm_DisabledSprite')
  return i930
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i933 = data
  i932.m_NormalTrigger = i933[0]
  i932.m_HighlightedTrigger = i933[1]
  i932.m_PressedTrigger = i933[2]
  i932.m_SelectedTrigger = i933[3]
  i932.m_DisabledTrigger = i933[4]
  return i932
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.Image' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_Sprite')
  i934.m_Type = i935[2]
  i934.m_PreserveAspect = !!i935[3]
  i934.m_FillCenter = !!i935[4]
  i934.m_FillMethod = i935[5]
  i934.m_FillAmount = i935[6]
  i934.m_FillClockwise = !!i935[7]
  i934.m_FillOrigin = i935[8]
  i934.m_UseSpriteMesh = !!i935[9]
  i934.m_PixelsPerUnitMultiplier = i935[10]
  request.r(i935[11], i935[12], 0, i934, 'm_Material')
  i934.m_Maskable = !!i935[13]
  i934.m_Color = new pc.Color(i935[14], i935[15], i935[16], i935[17])
  i934.m_RaycastTarget = !!i935[18]
  i934.m_RaycastPadding = new pc.Vec4( i935[19], i935[20], i935[21], i935[22] )
  return i934
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Button' )
  var i937 = data
  i936.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i937[0], i936.m_OnClick)
  i936.m_Navigation = request.d('UnityEngine.UI.Navigation', i937[1], i936.m_Navigation)
  i936.m_Transition = i937[2]
  i936.m_Colors = request.d('UnityEngine.UI.ColorBlock', i937[3], i936.m_Colors)
  i936.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i937[4], i936.m_SpriteState)
  i936.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i937[5], i936.m_AnimationTriggers)
  i936.m_Interactable = !!i937[6]
  request.r(i937[7], i937[8], 0, i936, 'm_TargetGraphic')
  return i936
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i939 = data
  i938.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i939[0], i938.m_PersistentCalls)
  return i938
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_ObjectArgument')
  i940.m_ObjectArgumentAssemblyTypeName = i941[2]
  i940.m_IntArgument = i941[3]
  i940.m_FloatArgument = i941[4]
  i940.m_StringArgument = i941[5]
  i940.m_BoolArgument = !!i941[6]
  return i940
}

Deserializers["Ply_Pool"] = function (request, data, root) {
  var i942 = root || request.c( 'Ply_Pool' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Ply_Pool+PoolAmount', i945[i + 0]) );
  }
  i942.poolAmounts = i944
  request.r(i943[1], i943[2], 0, i942, 'poolHolder')
  return i942
}

Deserializers["Ply_Pool+PoolAmount"] = function (request, data, root) {
  var i948 = root || request.c( 'Ply_Pool+PoolAmount' )
  var i949 = data
  i948.type = i949[0]
  i948.amount = i949[1]
  request.r(i949[2], i949[3], 0, i948, 'gameUnit')
  return i948
}

Deserializers["Ply_SoundManager"] = function (request, data, root) {
  var i950 = root || request.c( 'Ply_SoundManager' )
  var i951 = data
  var i953 = i951[0]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Ply_SoundManager+FxAudio', i953[i + 0]) );
  }
  i950.fxAudios = i952
  var i955 = i951[1]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i950.audioClips = i954
  request.r(i951[2], i951[3], 0, i950, 'sound')
  return i950
}

Deserializers["Ply_SoundManager+FxAudio"] = function (request, data, root) {
  var i958 = root || request.c( 'Ply_SoundManager+FxAudio' )
  var i959 = data
  i958.fxType = i959[0]
  request.r(i959[1], i959[2], 0, i958, 'audioClip')
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'clip')
  request.r(i963[2], i963[3], 0, i962, 'outputAudioMixerGroup')
  i962.playOnAwake = !!i963[4]
  i962.loop = !!i963[5]
  i962.time = i963[6]
  i962.volume = i963[7]
  i962.pitch = i963[8]
  i962.enabled = !!i963[9]
  return i962
}

Deserializers["GameManager"] = function (request, data, root) {
  var i964 = root || request.c( 'GameManager' )
  var i965 = data
  i964.isPlaying = !!i965[0]
  i964.isTutorial = !!i965[1]
  i964.isGotoStore = !!i965[2]
  i964.isDraggingConveyor = !!i965[3]
  i964.countMove = i965[4]
  i964.maxMove = i965[5]
  i964.startLayer = i965[6]
  i964.currentLayer = i965[7]
  request.r(i965[8], i965[9], 0, i964, 'mainBox')
  request.r(i965[10], i965[11], 0, i964, 'itemConveyor')
  request.r(i965[12], i965[13], 0, i964, 'handTutorial')
  i964.tutorialDelay = i965[14]
  return i964
}

Deserializers["UIManager"] = function (request, data, root) {
  var i966 = root || request.c( 'UIManager' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'winUI')
  request.r(i967[2], i967[3], 0, i966, 'loseUI')
  request.r(i967[4], i967[5], 0, i966, 'tutorial')
  request.r(i967[6], i967[7], 0, i966, 'verticalUI')
  request.r(i967[8], i967[9], 0, i966, 'horizontalUI')
  request.r(i967[10], i967[11], 0, i966, 'downloadBtnVertical')
  request.r(i967[12], i967[13], 0, i966, 'dowloadBtnHorizontal')
  request.r(i967[14], i967[15], 0, i966, 'textAnim')
  i966.isGoogleBuild = !!i967[16]
  request.r(i967[17], i967[18], 0, i966, 'progressSlider')
  request.r(i967[19], i967[20], 0, i966, 'progressText')
  i966.maxProgressItems = i967[21]
  i966.startProgressItems = i967[22]
  i966.screenWidth = i967[23]
  i966.screenHeight = i967[24]
  i966.scaleHeightOnWidth = i967[25]
  i966.isVertical = !!i967[26]
  i966.isScreenVertical = !!i967[27]
  request.r(i967[28], i967[29], 0, i966, 'cam')
  i966.verticalUIHeightOnWidthRatio = i967[30]
  i966.screenVerticalHeightOnWidthRatio = i967[31]
  i966.introZoomOutMultiplier = i967[32]
  i966.cameraZoomDuration = i967[33]
  i966.useContinuousScaling = !!i967[34]
  i966.baseOrthographicSize = i967[35]
  i966.baseAspect = i967[36]
  i966.landscapeSize = i967[37]
  i966.defaultPortraitSize = i967[38]
  var i969 = i967[39]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('ScreenScaleStep')))
  for(var i = 0; i < i969.length; i += 1) {
    i968.add(request.d('ScreenScaleStep', i969[i + 0]));
  }
  i966.discreteScaleSteps = i968
  i966.usePerspectiveCamera = !!i967[40]
  request.r(i967[41], i967[42], 0, i966, 'perspectiveFocus')
  i966.perspectiveFocusDistance = i967[43]
  i966.perspectivePadding = i967[44]
  i966.fitRendererBounds = !!i967[45]
  request.r(i967[46], i967[47], 0, i966, 'boundsRoot')
  var i971 = i967[48]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Renderer')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i966.boundsRenderers = i970
  return i966
}

Deserializers["ScreenScaleStep"] = function (request, data, root) {
  var i974 = root || request.c( 'ScreenScaleStep' )
  var i975 = data
  i974.heightOnWidthRatio = i975[0]
  i974.orthographicSize = i975[1]
  return i974
}

Deserializers["InputManager"] = function (request, data, root) {
  var i978 = root || request.c( 'InputManager' )
  var i979 = data
  i978.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i979[0] )
  i978.targetLayer = UnityEngine.LayerMask.FromIntegerValue( i979[1] )
  i978.defaultLayer = UnityEngine.LayerMask.FromIntegerValue( i979[2] )
  i978.boxLayer = UnityEngine.LayerMask.FromIntegerValue( i979[3] )
  i978.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i979[4] )
  i978.isDragging = !!i979[5]
  request.r(i979[6], i979[7], 0, i978, 'mainCamera')
  return i978
}

Deserializers["CameraController"] = function (request, data, root) {
  var i980 = root || request.c( 'CameraController' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'targetCamera')
  i980.enableZoom = !!i981[2]
  i980.minZoomRatio = i981[3]
  i980.maxZoomRatio = i981[4]
  i980.mouseWheelZoomSpeed = i981[5]
  i980.pinchZoomSpeed = i981[6]
  request.r(i981[7], i981[8], 0, i980, 'conveyor')
  i980.enableDrag = !!i981[9]
  i980.horizontalOnly = !!i981[10]
  i980.dragSensitivity = i981[11]
  i980.maxHorizontalOffset = i981[12]
  i980.maxVerticalOffset = i981[13]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i983 = data
  i982.aspect = i983[0]
  i982.orthographic = !!i983[1]
  i982.orthographicSize = i983[2]
  i982.backgroundColor = new pc.Color(i983[3], i983[4], i983[5], i983[6])
  i982.nearClipPlane = i983[7]
  i982.farClipPlane = i983[8]
  i982.fieldOfView = i983[9]
  i982.depth = i983[10]
  i982.clearFlags = i983[11]
  i982.cullingMask = i983[12]
  i982.rect = i983[13]
  request.r(i983[14], i983[15], 0, i982, 'targetTexture')
  i982.usePhysicalProperties = !!i983[16]
  i982.focalLength = i983[17]
  i982.sensorSize = new pc.Vec2( i983[18], i983[19] )
  i982.lensShift = new pc.Vec2( i983[20], i983[21] )
  i982.gateFit = i983[22]
  i982.commandBufferCount = i983[23]
  i982.cameraType = i983[24]
  i982.enabled = !!i983[25]
  return i982
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'm_FirstSelected')
  i984.m_sendNavigationEvents = !!i985[2]
  i984.m_DragThreshold = i985[3]
  return i984
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i987 = data
  i986.m_HorizontalAxis = i987[0]
  i986.m_VerticalAxis = i987[1]
  i986.m_SubmitButton = i987[2]
  i986.m_CancelButton = i987[3]
  i986.m_InputActionsPerSecond = i987[4]
  i986.m_RepeatDelay = i987[5]
  i986.m_ForceModuleActive = !!i987[6]
  i986.m_SendPointerHoverToParent = !!i987[7]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i989 = data
  i988.color = new pc.Color(i989[0], i989[1], i989[2], i989[3])
  request.r(i989[4], i989[5], 0, i988, 'sprite')
  i988.flipX = !!i989[6]
  i988.flipY = !!i989[7]
  i988.drawMode = i989[8]
  i988.size = new pc.Vec2( i989[9], i989[10] )
  i988.tileMode = i989[11]
  i988.adaptiveModeThreshold = i989[12]
  i988.maskInteraction = i989[13]
  i988.spriteSortPoint = i989[14]
  i988.enabled = !!i989[15]
  request.r(i989[16], i989[17], 0, i988, 'sharedMaterial')
  var i991 = i989[18]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i988.sharedMaterials = i990
  i988.receiveShadows = !!i989[19]
  i988.shadowCastingMode = i989[20]
  i988.sortingLayerID = i989[21]
  i988.sortingOrder = i989[22]
  i988.lightmapIndex = i989[23]
  i988.lightmapSceneIndex = i989[24]
  i988.lightmapScaleOffset = new pc.Vec4( i989[25], i989[26], i989[27], i989[28] )
  i988.lightProbeUsage = i989[29]
  i988.reflectionProbeUsage = i989[30]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i993 = data
  i992.center = new pc.Vec3( i993[0], i993[1], i993[2] )
  i992.radius = i993[3]
  i992.enabled = !!i993[4]
  i992.isTrigger = !!i993[5]
  request.r(i993[6], i993[7], 0, i992, 'material')
  return i992
}

Deserializers["Box"] = function (request, data, root) {
  var i994 = root || request.c( 'Box' )
  var i995 = data
  i994.useBox = !!i995[0]
  i994.spawnMode = i995[1]
  var i997 = i995[2]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 1, i996, '')
  }
  i994.dynamicItems = i996
  var i999 = i995[3]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i994.spawnTargets = i998
  i994.initialSpawnCount = i995[4]
  i994.revealDuration = i995[5]
  i994.showInitialBatchShadowsOnSpawn = !!i995[6]
  request.r(i995[7], i995[8], 0, i994, 'mainConveyor')
  request.r(i995[9], i995[10], 0, i994, 'graphicController')
  return i994
}

Deserializers["BoxGraphicController"] = function (request, data, root) {
  var i1004 = root || request.c( 'BoxGraphicController' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'skeletonAnimation')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'sharedMesh')
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'additionalVertexStreams')
  i1008.enabled = !!i1009[2]
  request.r(i1009[3], i1009[4], 0, i1008, 'sharedMaterial')
  var i1011 = i1009[5]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sharedMaterials = i1010
  i1008.receiveShadows = !!i1009[6]
  i1008.shadowCastingMode = i1009[7]
  i1008.sortingLayerID = i1009[8]
  i1008.sortingOrder = i1009[9]
  i1008.lightmapIndex = i1009[10]
  i1008.lightmapSceneIndex = i1009[11]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[12], i1009[13], i1009[14], i1009[15] )
  i1008.lightProbeUsage = i1009[16]
  i1008.reflectionProbeUsage = i1009[17]
  return i1008
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i1012 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i1013 = data
  i1012.loop = !!i1013[0]
  i1012.timeScale = i1013[1]
  request.r(i1013[2], i1013[3], 0, i1012, 'skeletonDataAsset')
  i1012.initialSkinName = i1013[4]
  i1012.fixPrefabOverrideViaMeshFilter = i1013[5]
  i1012.initialFlipX = !!i1013[6]
  i1012.initialFlipY = !!i1013[7]
  i1012.updateWhenInvisible = i1013[8]
  i1012.zSpacing = i1013[9]
  i1012.useClipping = !!i1013[10]
  i1012.immutableTriangles = !!i1013[11]
  i1012.pmaVertexColors = !!i1013[12]
  i1012.clearStateOnDisable = !!i1013[13]
  i1012.tintBlack = !!i1013[14]
  i1012.singleSubmesh = !!i1013[15]
  i1012.fixDrawOrder = !!i1013[16]
  i1012.addNormals = !!i1013[17]
  i1012.calculateTangents = !!i1013[18]
  i1012.maskInteraction = i1013[19]
  i1012.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i1013[20], i1012.maskMaterials)
  i1012.disableRenderingOnOverride = !!i1013[21]
  i1012._animationName = i1013[22]
  var i1015 = i1013[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1012.separatorSlotNames = i1014
  return i1012
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i1016 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1016.materialsMaskDisabled = i1018
  var i1021 = i1017[1]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1016.materialsInsideMask = i1020
  var i1023 = i1017[2]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1016.materialsOutsideMask = i1022
  return i1016
}

Deserializers["ItemHolder"] = function (request, data, root) {
  var i1026 = root || request.c( 'ItemHolder' )
  var i1027 = data
  i1026.id = i1027[0]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1029 = data
  i1028.center = new pc.Vec3( i1029[0], i1029[1], i1029[2] )
  i1028.size = new pc.Vec3( i1029[3], i1029[4], i1029[5] )
  i1028.enabled = !!i1029[6]
  i1028.isTrigger = !!i1029[7]
  request.r(i1029[8], i1029[9], 0, i1028, 'material')
  return i1028
}

Deserializers["ItemSetupTool"] = function (request, data, root) {
  var i1030 = root || request.c( 'ItemSetupTool' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'spritesParent')
  request.r(i1031[2], i1031[3], 0, i1030, 'holdersParent')
  i1030.shadowSuffix = i1031[4]
  i1030.holderPrefix = i1031[5]
  i1030.holdersParentName = i1031[6]
  i1030.colliderDepth = i1031[7]
  i1030.colliderSizeMultiplier = i1031[8]
  i1030.minColliderSize = new pc.Vec2( i1031[9], i1031[10] )
  i1030.generatedShadowColor = new pc.Color(i1031[11], i1031[12], i1031[13], i1031[14])
  i1030.fadedBlackShadowColor = new pc.Color(i1031[15], i1031[16], i1031[17], i1031[18])
  i1030.generatedShadowLocalOffset = new pc.Vec3( i1031[19], i1031[20], i1031[21] )
  i1030.itemLayer = UnityEngine.LayerMask.FromIntegerValue( i1031[22] )
  i1030.holderLayer = UnityEngine.LayerMask.FromIntegerValue( i1031[23] )
  return i1030
}

Deserializers["Item"] = function (request, data, root) {
  var i1032 = root || request.c( 'Item' )
  var i1033 = data
  i1032.fxTypeOnPlace = i1033[0]
  i1032.id = i1033[1]
  i1032.currentState = i1033[2]
  i1032.itemHolderLayer = UnityEngine.LayerMask.FromIntegerValue( i1033[3] )
  request.r(i1033[4], i1033[5], 0, i1032, 'defaultShadow')
  i1032.returnToSlotOnMiss = !!i1033[6]
  i1032.hideShadowOnDrop = !!i1033[7]
  i1032.scaleOnSpawn = !!i1033[8]
  i1032.spawnScaleMultiplier = i1033[9]
  var i1035 = i1033[10]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('Item')))
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 1, i1034, '')
  }
  i1032.requiredItems = i1034
  request.r(i1033[11], i1033[12], 0, i1032, 'correctHolderTransform')
  request.r(i1033[13], i1033[14], 0, i1032, 'shadowOnHolder')
  i1032.canShowShadowHint = !!i1033[15]
  request.r(i1033[16], i1033[17], 0, i1032, 'homeSlot')
  i1032.waitingPosition = new pc.Vec3( i1033[18], i1033[19], i1033[20] )
  request.r(i1033[21], i1033[22], 0, i1032, 'spriteRenderer')
  return i1032
}

Deserializers["ScreenHeightPositionAnchor"] = function (request, data, root) {
  var i1036 = root || request.c( 'ScreenHeightPositionAnchor' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'anchorPoint')
  request.r(i1037[2], i1037[3], 0, i1036, 'targetCamera')
  i1036.viewportYRatio = i1037[4]
  i1036.alignOnStart = !!i1037[5]
  i1036.alignOnEnable = !!i1037[6]
  i1036.realignOnScreenSizeChanged = !!i1037[7]
  i1036.drawGizmos = !!i1037[8]
  i1036.targetLineColor = new pc.Color(i1037[9], i1037[10], i1037[11], i1037[12])
  i1036.anchorColor = new pc.Color(i1037[13], i1037[14], i1037[15], i1037[16])
  return i1036
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TextMeshPro' )
  var i1039 = data
  i1038._SortingLayer = i1039[0]
  i1038._SortingLayerID = i1039[1]
  i1038._SortingOrder = i1039[2]
  i1038.m_hasFontAssetChanged = !!i1039[3]
  request.r(i1039[4], i1039[5], 0, i1038, 'm_renderer')
  i1038.m_maskType = i1039[6]
  i1038.m_text = i1039[7]
  i1038.m_isRightToLeft = !!i1039[8]
  request.r(i1039[9], i1039[10], 0, i1038, 'm_fontAsset')
  request.r(i1039[11], i1039[12], 0, i1038, 'm_sharedMaterial')
  var i1041 = i1039[13]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1038.m_fontSharedMaterials = i1040
  request.r(i1039[14], i1039[15], 0, i1038, 'm_fontMaterial')
  var i1043 = i1039[16]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1038.m_fontMaterials = i1042
  i1038.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1039[17], i1039[18], i1039[19], i1039[20])
  i1038.m_fontColor = new pc.Color(i1039[21], i1039[22], i1039[23], i1039[24])
  i1038.m_enableVertexGradient = !!i1039[25]
  i1038.m_colorMode = i1039[26]
  i1038.m_fontColorGradient = request.d('TMPro.VertexGradient', i1039[27], i1038.m_fontColorGradient)
  request.r(i1039[28], i1039[29], 0, i1038, 'm_fontColorGradientPreset')
  request.r(i1039[30], i1039[31], 0, i1038, 'm_spriteAsset')
  i1038.m_tintAllSprites = !!i1039[32]
  request.r(i1039[33], i1039[34], 0, i1038, 'm_StyleSheet')
  i1038.m_TextStyleHashCode = i1039[35]
  i1038.m_overrideHtmlColors = !!i1039[36]
  i1038.m_faceColor = UnityEngine.Color32.ConstructColor(i1039[37], i1039[38], i1039[39], i1039[40])
  i1038.m_fontSize = i1039[41]
  i1038.m_fontSizeBase = i1039[42]
  i1038.m_fontWeight = i1039[43]
  i1038.m_enableAutoSizing = !!i1039[44]
  i1038.m_fontSizeMin = i1039[45]
  i1038.m_fontSizeMax = i1039[46]
  i1038.m_fontStyle = i1039[47]
  i1038.m_HorizontalAlignment = i1039[48]
  i1038.m_VerticalAlignment = i1039[49]
  i1038.m_textAlignment = i1039[50]
  i1038.m_characterSpacing = i1039[51]
  i1038.m_wordSpacing = i1039[52]
  i1038.m_lineSpacing = i1039[53]
  i1038.m_lineSpacingMax = i1039[54]
  i1038.m_paragraphSpacing = i1039[55]
  i1038.m_charWidthMaxAdj = i1039[56]
  i1038.m_TextWrappingMode = i1039[57]
  i1038.m_wordWrappingRatios = i1039[58]
  i1038.m_overflowMode = i1039[59]
  request.r(i1039[60], i1039[61], 0, i1038, 'm_linkedTextComponent')
  request.r(i1039[62], i1039[63], 0, i1038, 'parentLinkedComponent')
  i1038.m_enableKerning = !!i1039[64]
  var i1045 = i1039[65]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(i1045[i + 0]);
  }
  i1038.m_ActiveFontFeatures = i1044
  i1038.m_enableExtraPadding = !!i1039[66]
  i1038.checkPaddingRequired = !!i1039[67]
  i1038.m_isRichText = !!i1039[68]
  i1038.m_parseCtrlCharacters = !!i1039[69]
  i1038.m_isOrthographic = !!i1039[70]
  i1038.m_isCullingEnabled = !!i1039[71]
  i1038.m_horizontalMapping = i1039[72]
  i1038.m_verticalMapping = i1039[73]
  i1038.m_uvLineOffset = i1039[74]
  i1038.m_geometrySortingOrder = i1039[75]
  i1038.m_IsTextObjectScaleStatic = !!i1039[76]
  i1038.m_VertexBufferAutoSizeReduction = !!i1039[77]
  i1038.m_useMaxVisibleDescender = !!i1039[78]
  i1038.m_pageToDisplay = i1039[79]
  i1038.m_margin = new pc.Vec4( i1039[80], i1039[81], i1039[82], i1039[83] )
  i1038.m_isUsingLegacyAnimationComponent = !!i1039[84]
  i1038.m_isVolumetricText = !!i1039[85]
  request.r(i1039[86], i1039[87], 0, i1038, 'm_Material')
  i1038.m_EmojiFallbackSupport = !!i1039[88]
  i1038.m_Maskable = !!i1039[89]
  i1038.m_Color = new pc.Color(i1039[90], i1039[91], i1039[92], i1039[93])
  i1038.m_RaycastTarget = !!i1039[94]
  i1038.m_RaycastPadding = new pc.Vec4( i1039[95], i1039[96], i1039[97], i1039[98] )
  return i1038
}

Deserializers["ItemConveyor"] = function (request, data, root) {
  var i1046 = root || request.c( 'ItemConveyor' )
  var i1047 = data
  i1046.isDraggingConveyor = !!i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'movingRoot')
  var i1049 = i1047[3]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1046.itemSlots = i1048
  i1046.arrangeSlotsOnStart = !!i1047[4]
  i1046.leftLocalPoint = new pc.Vec3( i1047[5], i1047[6], i1047[7] )
  i1046.rightLocalPoint = new pc.Vec3( i1047[8], i1047[9], i1047[10] )
  i1046.sortSlotsLeftToRight = !!i1047[11]
  i1046.alignLeftMostSlotToScreenLeftOnStart = !!i1047[12]
  i1046.enableHorizontalDrag = !!i1047[13]
  i1046.conveyorLayer = UnityEngine.LayerMask.FromIntegerValue( i1047[14] )
  request.r(i1047[15], i1047[16], 0, i1046, 'raycastCamera')
  i1046.raycastDistance = i1047[17]
  i1046.leftEdgeViewportPadding = i1047[18]
  i1046.rightEdgeViewportPadding = i1047[19]
  i1046.slideBackSpeed = i1047[20]
  request.r(i1047[21], i1047[22], 0, i1046, 'sliderBackground')
  request.r(i1047[23], i1047[24], 0, i1046, 'sliderHandle')
  request.r(i1047[25], i1047[26], 0, i1046, 'sliderHandleRenderer')
  i1046.hideSliderInLandscape = !!i1047[27]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1051 = data
  i1050.ambientIntensity = i1051[0]
  i1050.reflectionIntensity = i1051[1]
  i1050.ambientMode = i1051[2]
  i1050.ambientLight = new pc.Color(i1051[3], i1051[4], i1051[5], i1051[6])
  i1050.ambientSkyColor = new pc.Color(i1051[7], i1051[8], i1051[9], i1051[10])
  i1050.ambientGroundColor = new pc.Color(i1051[11], i1051[12], i1051[13], i1051[14])
  i1050.ambientEquatorColor = new pc.Color(i1051[15], i1051[16], i1051[17], i1051[18])
  i1050.fogColor = new pc.Color(i1051[19], i1051[20], i1051[21], i1051[22])
  i1050.fogEndDistance = i1051[23]
  i1050.fogStartDistance = i1051[24]
  i1050.fogDensity = i1051[25]
  i1050.fog = !!i1051[26]
  request.r(i1051[27], i1051[28], 0, i1050, 'skybox')
  i1050.fogMode = i1051[29]
  var i1053 = i1051[30]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1053[i + 0]) );
  }
  i1050.lightmaps = i1052
  i1050.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1051[31], i1050.lightProbes)
  i1050.lightmapsMode = i1051[32]
  i1050.mixedBakeMode = i1051[33]
  i1050.environmentLightingMode = i1051[34]
  i1050.ambientProbe = new pc.SphericalHarmonicsL2(i1051[35])
  i1050.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1051[36])
  i1050.useReferenceAmbientProbe = !!i1051[37]
  request.r(i1051[38], i1051[39], 0, i1050, 'customReflection')
  request.r(i1051[40], i1051[41], 0, i1050, 'defaultReflection')
  i1050.defaultReflectionMode = i1051[42]
  i1050.defaultReflectionResolution = i1051[43]
  i1050.sunLightObjectId = i1051[44]
  i1050.pixelLightCount = i1051[45]
  i1050.defaultReflectionHDR = !!i1051[46]
  i1050.hasLightDataAsset = !!i1051[47]
  i1050.hasManualGenerate = !!i1051[48]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'lightmapColor')
  request.r(i1057[2], i1057[3], 0, i1056, 'lightmapDirection')
  request.r(i1057[4], i1057[5], 0, i1056, 'shadowMask')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1058 = root || new UnityEngine.LightProbes()
  var i1059 = data
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1069[i + 0]));
  }
  i1066.ShaderCompilationErrors = i1068
  i1066.name = i1067[1]
  i1066.guid = i1067[2]
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.shaderDefinedKeywords = i1070
  var i1073 = i1067[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1073[i + 0]) );
  }
  i1066.passes = i1072
  var i1075 = i1067[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1075[i + 0]) );
  }
  i1066.usePasses = i1074
  var i1077 = i1067[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1077[i + 0]) );
  }
  i1066.defaultParameterValues = i1076
  request.r(i1067[7], i1067[8], 0, i1066, 'unityFallbackShader')
  i1066.readDepth = !!i1067[9]
  i1066.hasDepthOnlyPass = !!i1067[10]
  i1066.isCreatedByShaderGraph = !!i1067[11]
  i1066.disableBatching = !!i1067[12]
  i1066.compiled = !!i1067[13]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1081 = data
  i1080.shaderName = i1081[0]
  i1080.errorMessage = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1084 = root || new pc.UnityShaderPass()
  var i1085 = data
  i1084.id = i1085[0]
  i1084.subShaderIndex = i1085[1]
  i1084.name = i1085[2]
  i1084.passType = i1085[3]
  i1084.grabPassTextureName = i1085[4]
  i1084.usePass = !!i1085[5]
  i1084.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[6], i1084.zTest)
  i1084.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[7], i1084.zWrite)
  i1084.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[8], i1084.culling)
  i1084.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1085[9], i1084.blending)
  i1084.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1085[10], i1084.alphaBlending)
  i1084.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[11], i1084.colorWriteMask)
  i1084.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[12], i1084.offsetUnits)
  i1084.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[13], i1084.offsetFactor)
  i1084.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[14], i1084.stencilRef)
  i1084.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[15], i1084.stencilReadMask)
  i1084.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[16], i1084.stencilWriteMask)
  i1084.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[17], i1084.stencilOp)
  i1084.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[18], i1084.stencilOpFront)
  i1084.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1085[19], i1084.stencilOpBack)
  var i1087 = i1085[20]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1087[i + 0]) );
  }
  i1084.tags = i1086
  var i1089 = i1085[21]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1084.passDefinedKeywords = i1088
  var i1091 = i1085[22]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1091[i + 0]) );
  }
  i1084.passDefinedKeywordGroups = i1090
  var i1093 = i1085[23]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1093[i + 0]) );
  }
  i1084.variants = i1092
  var i1095 = i1085[24]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1095[i + 0]) );
  }
  i1084.excludedVariants = i1094
  i1084.hasDepthReader = !!i1085[25]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1097 = data
  i1096.val = i1097[0]
  i1096.name = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1099 = data
  i1098.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[0], i1098.src)
  i1098.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[1], i1098.dst)
  i1098.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1099[2], i1098.op)
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1101 = data
  i1100.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[0], i1100.pass)
  i1100.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[1], i1100.fail)
  i1100.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[2], i1100.zFail)
  i1100.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[3], i1100.comp)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.value = i1105[1]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1108.keywords = i1110
  i1108.hasDiscard = !!i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1115 = data
  i1114.passId = i1115[0]
  i1114.subShaderIndex = i1115[1]
  var i1117 = i1115[2]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( i1117[i + 0] );
  }
  i1114.keywords = i1116
  i1114.vertexProgram = i1115[3]
  i1114.fragmentProgram = i1115[4]
  i1114.exportedForWebGl2 = !!i1115[5]
  i1114.readDepth = !!i1115[6]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'shader')
  i1120.pass = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.type = i1125[1]
  i1124.value = new pc.Vec4( i1125[2], i1125[3], i1125[4], i1125[5] )
  i1124.textureValue = i1125[6]
  i1124.shaderPropertyFlag = i1125[7]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1127 = data
  i1126.name = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'texture')
  i1126.aabb = i1127[3]
  i1126.vertices = i1127[4]
  i1126.triangles = i1127[5]
  i1126.textureRect = UnityEngine.Rect.MinMaxRect(i1127[6], i1127[7], i1127[8], i1127[9])
  i1126.packedRect = UnityEngine.Rect.MinMaxRect(i1127[10], i1127[11], i1127[12], i1127[13])
  i1126.border = new pc.Vec4( i1127[14], i1127[15], i1127[16], i1127[17] )
  i1126.transparency = i1127[18]
  i1126.bounds = i1127[19]
  i1126.pixelsPerUnit = i1127[20]
  i1126.textureWidth = i1127[21]
  i1126.textureHeight = i1127[22]
  i1126.nativeSize = new pc.Vec2( i1127[23], i1127[24] )
  i1126.pivot = new pc.Vec2( i1127[25], i1127[26] )
  i1126.textureRectOffset = new pc.Vec2( i1127[27], i1127[28] )
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1129 = data
  i1128.name = i1129[0]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.wrapMode = i1131[1]
  i1130.isLooping = !!i1131[2]
  i1130.length = i1131[3]
  var i1133 = i1131[4]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1133[i + 0]) );
  }
  i1130.curves = i1132
  var i1135 = i1131[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1135[i + 0]) );
  }
  i1130.events = i1134
  i1130.halfPrecision = !!i1131[6]
  i1130._frameRate = i1131[7]
  i1130.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1131[8], i1130.localBounds)
  i1130.hasMuscleCurves = !!i1131[9]
  var i1137 = i1131[10]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1130.clipMuscleConstant = i1136
  i1130.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1131[11], i1130.clipBindingConstant)
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1141 = data
  i1140.path = i1141[0]
  i1140.hash = i1141[1]
  i1140.componentType = i1141[2]
  i1140.property = i1141[3]
  i1140.keys = i1141[4]
  var i1143 = i1141[5]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1143[i + 0]) );
  }
  i1140.objectReferenceKeys = i1142
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1147 = data
  i1146.time = i1147[0]
  request.r(i1147[1], i1147[2], 0, i1146, 'value')
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1151 = data
  i1150.functionName = i1151[0]
  i1150.floatParameter = i1151[1]
  i1150.intParameter = i1151[2]
  i1150.stringParameter = i1151[3]
  request.r(i1151[4], i1151[5], 0, i1150, 'objectReferenceParameter')
  i1150.time = i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1153 = data
  i1152.center = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.extends = new pc.Vec3( i1153[3], i1153[4], i1153[5] )
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.genericBindings = i1158
  var i1161 = i1157[1]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1156.pptrCurveMapping = i1160
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1163 = data
  i1162.name = i1163[0]
  var i1165 = i1163[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1165[i + 0]) );
  }
  i1162.layers = i1164
  var i1167 = i1163[2]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1167[i + 0]) );
  }
  i1162.parameters = i1166
  i1162.animationClips = i1163[3]
  i1162.avatarUnsupported = i1163[4]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.defaultWeight = i1171[1]
  i1170.blendingMode = i1171[2]
  i1170.avatarMask = i1171[3]
  i1170.syncedLayerIndex = i1171[4]
  i1170.syncedLayerAffectsTiming = !!i1171[5]
  i1170.syncedLayers = i1171[6]
  i1170.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[7], i1170.stateMachine)
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1173 = data
  i1172.id = i1173[0]
  i1172.name = i1173[1]
  i1172.path = i1173[2]
  var i1175 = i1173[3]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1175[i + 0]) );
  }
  i1172.states = i1174
  var i1177 = i1173[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1177[i + 0]) );
  }
  i1172.machines = i1176
  var i1179 = i1173[5]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1172.entryStateTransitions = i1178
  var i1181 = i1173[6]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1181[i + 0]) );
  }
  i1172.exitStateTransitions = i1180
  var i1183 = i1173[7]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1183[i + 0]) );
  }
  i1172.anyStateTransitions = i1182
  i1172.defaultStateId = i1173[8]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1187 = data
  i1186.id = i1187[0]
  i1186.name = i1187[1]
  i1186.cycleOffset = i1187[2]
  i1186.cycleOffsetParameter = i1187[3]
  i1186.cycleOffsetParameterActive = !!i1187[4]
  i1186.mirror = !!i1187[5]
  i1186.mirrorParameter = i1187[6]
  i1186.mirrorParameterActive = !!i1187[7]
  i1186.motionId = i1187[8]
  i1186.nameHash = i1187[9]
  i1186.fullPathHash = i1187[10]
  i1186.speed = i1187[11]
  i1186.speedParameter = i1187[12]
  i1186.speedParameterActive = !!i1187[13]
  i1186.tag = i1187[14]
  i1186.tagHash = i1187[15]
  i1186.writeDefaultValues = !!i1187[16]
  var i1189 = i1187[17]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 2, i1188, '')
  }
  i1186.behaviours = i1188
  var i1191 = i1187[18]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1191[i + 0]) );
  }
  i1186.transitions = i1190
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1197 = data
  i1196.fullPath = i1197[0]
  i1196.canTransitionToSelf = !!i1197[1]
  i1196.duration = i1197[2]
  i1196.exitTime = i1197[3]
  i1196.hasExitTime = !!i1197[4]
  i1196.hasFixedDuration = !!i1197[5]
  i1196.interruptionSource = i1197[6]
  i1196.offset = i1197[7]
  i1196.orderedInterruption = !!i1197[8]
  i1196.destinationStateId = i1197[9]
  i1196.isExit = !!i1197[10]
  i1196.mute = !!i1197[11]
  i1196.solo = !!i1197[12]
  var i1199 = i1197[13]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1199[i + 0]) );
  }
  i1196.conditions = i1198
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1205 = data
  i1204.destinationStateId = i1205[0]
  i1204.isExit = !!i1205[1]
  i1204.mute = !!i1205[2]
  i1204.solo = !!i1205[3]
  var i1207 = i1205[4]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1207[i + 0]) );
  }
  i1204.conditions = i1206
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1211 = data
  i1210.defaultBool = !!i1211[0]
  i1210.defaultFloat = i1211[1]
  i1210.defaultInt = i1211[2]
  i1210.name = i1211[3]
  i1210.nameHash = i1211[4]
  i1210.type = i1211[5]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.bytes64 = i1213[1]
  i1212.data = i1213[2]
  return i1212
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1214 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1215 = data
  i1214.normalStyle = i1215[0]
  i1214.normalSpacingOffset = i1215[1]
  i1214.boldStyle = i1215[2]
  i1214.boldSpacing = i1215[3]
  i1214.italicStyle = i1215[4]
  i1214.tabSize = i1215[5]
  request.r(i1215[6], i1215[7], 0, i1214, 'atlas')
  i1214.m_SourceFontFileGUID = i1215[8]
  i1214.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1215[9], i1214.m_CreationSettings)
  request.r(i1215[10], i1215[11], 0, i1214, 'm_SourceFontFile')
  i1214.m_SourceFontFilePath = i1215[12]
  i1214.m_AtlasPopulationMode = i1215[13]
  i1214.InternalDynamicOS = !!i1215[14]
  var i1217 = i1215[15]
  var i1216 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.add(request.d('UnityEngine.TextCore.Glyph', i1217[i + 0]));
  }
  i1214.m_GlyphTable = i1216
  var i1219 = i1215[16]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('TMPro.TMP_Character', i1219[i + 0]));
  }
  i1214.m_CharacterTable = i1218
  var i1221 = i1215[17]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1214.m_AtlasTextures = i1220
  i1214.m_AtlasTextureIndex = i1215[18]
  i1214.m_IsMultiAtlasTexturesEnabled = !!i1215[19]
  i1214.m_GetFontFeatures = !!i1215[20]
  i1214.m_ClearDynamicDataOnBuild = !!i1215[21]
  i1214.m_AtlasWidth = i1215[22]
  i1214.m_AtlasHeight = i1215[23]
  i1214.m_AtlasPadding = i1215[24]
  i1214.m_AtlasRenderMode = i1215[25]
  var i1223 = i1215[26]
  var i1222 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.add(request.d('UnityEngine.TextCore.GlyphRect', i1223[i + 0]));
  }
  i1214.m_UsedGlyphRects = i1222
  var i1225 = i1215[27]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('UnityEngine.TextCore.GlyphRect', i1225[i + 0]));
  }
  i1214.m_FreeGlyphRects = i1224
  i1214.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1215[28], i1214.m_FontFeatureTable)
  i1214.m_ShouldReimportFontFeatures = !!i1215[29]
  var i1227 = i1215[30]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 1, i1226, '')
  }
  i1214.m_FallbackFontAssetTable = i1226
  var i1229 = i1215[31]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('TMPro.TMP_FontWeightPair', i1229[i + 0]) );
  }
  i1214.m_FontWeightTable = i1228
  var i1231 = i1215[32]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('TMPro.TMP_FontWeightPair', i1231[i + 0]) );
  }
  i1214.fontWeights = i1230
  i1214.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1215[33], i1214.m_fontInfo)
  var i1233 = i1215[34]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Glyph', i1233[i + 0]));
  }
  i1214.m_glyphInfoList = i1232
  i1214.m_KerningTable = request.d('TMPro.KerningTable', i1215[35], i1214.m_KerningTable)
  var i1235 = i1215[36]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1214.fallbackFontAssets = i1234
  i1214.m_Version = i1215[37]
  i1214.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1215[38], i1214.m_FaceInfo)
  request.r(i1215[39], i1215[40], 0, i1214, 'm_Material')
  return i1214
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1237 = data
  i1236.sourceFontFileName = i1237[0]
  i1236.sourceFontFileGUID = i1237[1]
  i1236.faceIndex = i1237[2]
  i1236.pointSizeSamplingMode = i1237[3]
  i1236.pointSize = i1237[4]
  i1236.padding = i1237[5]
  i1236.paddingMode = i1237[6]
  i1236.packingMode = i1237[7]
  i1236.atlasWidth = i1237[8]
  i1236.atlasHeight = i1237[9]
  i1236.characterSetSelectionMode = i1237[10]
  i1236.characterSequence = i1237[11]
  i1236.referencedFontAssetGUID = i1237[12]
  i1236.referencedTextAssetGUID = i1237[13]
  i1236.fontStyle = i1237[14]
  i1236.fontStyleModifier = i1237[15]
  i1236.renderMode = i1237[16]
  i1236.includeFontFeatures = !!i1237[17]
  return i1236
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1241 = data
  i1240.m_Index = i1241[0]
  i1240.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1241[1], i1240.m_Metrics)
  i1240.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1241[2], i1240.m_GlyphRect)
  i1240.m_Scale = i1241[3]
  i1240.m_AtlasIndex = i1241[4]
  i1240.m_ClassDefinitionType = i1241[5]
  return i1240
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1243 = data
  i1242.m_Width = i1243[0]
  i1242.m_Height = i1243[1]
  i1242.m_HorizontalBearingX = i1243[2]
  i1242.m_HorizontalBearingY = i1243[3]
  i1242.m_HorizontalAdvance = i1243[4]
  return i1242
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1245 = data
  i1244.m_X = i1245[0]
  i1244.m_Y = i1245[1]
  i1244.m_Width = i1245[2]
  i1244.m_Height = i1245[3]
  return i1244
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1248 = root || request.c( 'TMPro.TMP_Character' )
  var i1249 = data
  i1248.m_ElementType = i1249[0]
  i1248.m_Unicode = i1249[1]
  i1248.m_GlyphIndex = i1249[2]
  i1248.m_Scale = i1249[3]
  return i1248
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1254 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1255 = data
  var i1257 = i1255[0]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.add(request.d('TMPro.MultipleSubstitutionRecord', i1257[i + 0]));
  }
  i1254.m_MultipleSubstitutionRecords = i1256
  var i1259 = i1255[1]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('TMPro.LigatureSubstitutionRecord', i1259[i + 0]));
  }
  i1254.m_LigatureSubstitutionRecords = i1258
  var i1261 = i1255[2]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1261[i + 0]));
  }
  i1254.m_GlyphPairAdjustmentRecords = i1260
  var i1263 = i1255[3]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1263[i + 0]));
  }
  i1254.m_MarkToBaseAdjustmentRecords = i1262
  var i1265 = i1255[4]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1265[i + 0]));
  }
  i1254.m_MarkToMarkAdjustmentRecords = i1264
  return i1254
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1269 = data
  i1268.m_TargetGlyphID = i1269[0]
  i1268.m_SubstituteGlyphIDs = i1269[1]
  return i1268
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1273 = data
  i1272.m_ComponentGlyphIDs = i1273[0]
  i1272.m_LigatureGlyphID = i1273[1]
  return i1272
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1277 = data
  i1276.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1277[0], i1276.m_FirstAdjustmentRecord)
  i1276.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1277[1], i1276.m_SecondAdjustmentRecord)
  i1276.m_FeatureLookupFlags = i1277[2]
  return i1276
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1281 = data
  i1280.m_BaseGlyphID = i1281[0]
  i1280.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1281[1], i1280.m_BaseGlyphAnchorPoint)
  i1280.m_MarkGlyphID = i1281[2]
  i1280.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1281[3], i1280.m_MarkPositionAdjustment)
  return i1280
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1285 = data
  i1284.m_BaseMarkGlyphID = i1285[0]
  i1284.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1285[1], i1284.m_BaseMarkGlyphAnchorPoint)
  i1284.m_CombiningMarkGlyphID = i1285[2]
  i1284.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1285[3], i1284.m_CombiningMarkPositionAdjustment)
  return i1284
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'regularTypeface')
  request.r(i1291[2], i1291[3], 0, i1290, 'italicTypeface')
  return i1290
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1293 = data
  i1292.Name = i1293[0]
  i1292.PointSize = i1293[1]
  i1292.Scale = i1293[2]
  i1292.CharacterCount = i1293[3]
  i1292.LineHeight = i1293[4]
  i1292.Baseline = i1293[5]
  i1292.Ascender = i1293[6]
  i1292.CapHeight = i1293[7]
  i1292.Descender = i1293[8]
  i1292.CenterLine = i1293[9]
  i1292.SuperscriptOffset = i1293[10]
  i1292.SubscriptOffset = i1293[11]
  i1292.SubSize = i1293[12]
  i1292.Underline = i1293[13]
  i1292.UnderlineThickness = i1293[14]
  i1292.strikethrough = i1293[15]
  i1292.strikethroughThickness = i1293[16]
  i1292.TabWidth = i1293[17]
  i1292.Padding = i1293[18]
  i1292.AtlasWidth = i1293[19]
  i1292.AtlasHeight = i1293[20]
  return i1292
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1297 = data
  i1296.id = i1297[0]
  i1296.x = i1297[1]
  i1296.y = i1297[2]
  i1296.width = i1297[3]
  i1296.height = i1297[4]
  i1296.xOffset = i1297[5]
  i1296.yOffset = i1297[6]
  i1296.xAdvance = i1297[7]
  i1296.scale = i1297[8]
  return i1296
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.KerningTable' )
  var i1299 = data
  var i1301 = i1299[0]
  var i1300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.add(request.d('TMPro.KerningPair', i1301[i + 0]));
  }
  i1298.kerningPairs = i1300
  return i1298
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.KerningPair' )
  var i1305 = data
  i1304.xOffset = i1305[0]
  i1304.m_FirstGlyph = i1305[1]
  i1304.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1305[2], i1304.m_FirstGlyphAdjustments)
  i1304.m_SecondGlyph = i1305[3]
  i1304.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1305[4], i1304.m_SecondGlyphAdjustments)
  i1304.m_IgnoreSpacingAdjustments = !!i1305[5]
  return i1304
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1307 = data
  i1306.m_FaceIndex = i1307[0]
  i1306.m_FamilyName = i1307[1]
  i1306.m_StyleName = i1307[2]
  i1306.m_PointSize = i1307[3]
  i1306.m_Scale = i1307[4]
  i1306.m_UnitsPerEM = i1307[5]
  i1306.m_LineHeight = i1307[6]
  i1306.m_AscentLine = i1307[7]
  i1306.m_CapLine = i1307[8]
  i1306.m_MeanLine = i1307[9]
  i1306.m_Baseline = i1307[10]
  i1306.m_DescentLine = i1307[11]
  i1306.m_SuperscriptOffset = i1307[12]
  i1306.m_SuperscriptSize = i1307[13]
  i1306.m_SubscriptOffset = i1307[14]
  i1306.m_SubscriptSize = i1307[15]
  i1306.m_UnderlineOffset = i1307[16]
  i1306.m_UnderlineThickness = i1307[17]
  i1306.m_StrikethroughOffset = i1307[18]
  i1306.m_StrikethroughThickness = i1307[19]
  i1306.m_TabWidth = i1307[20]
  return i1306
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1308 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1308.atlasAssets = i1310
  i1308.scale = i1309[1]
  request.r(i1309[2], i1309[3], 0, i1308, 'skeletonJSON')
  i1308.isUpgradingBlendModeMaterials = !!i1309[4]
  i1308.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1309[5], i1308.blendModeMaterials)
  var i1313 = i1309[6]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 1, i1312, '')
  }
  i1308.skeletonDataModifiers = i1312
  var i1315 = i1309[7]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( i1315[i + 0] );
  }
  i1308.fromAnimation = i1314
  var i1317 = i1309[8]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( i1317[i + 0] );
  }
  i1308.toAnimation = i1316
  i1308.duration = i1309[9]
  i1308.defaultMix = i1309[10]
  request.r(i1309[11], i1309[12], 0, i1308, 'controller')
  return i1308
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1320 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1321 = data
  i1320.applyAdditiveMaterial = !!i1321[0]
  var i1323 = i1321[1]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1323[i + 0]));
  }
  i1320.additiveMaterials = i1322
  var i1325 = i1321[2]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1325[i + 0]));
  }
  i1320.multiplyMaterials = i1324
  var i1327 = i1321[3]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1327[i + 0]));
  }
  i1320.screenMaterials = i1326
  i1320.requiresBlendModeMaterials = !!i1321[4]
  return i1320
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1330 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1331 = data
  i1330.pageName = i1331[0]
  request.r(i1331[1], i1331[2], 0, i1330, 'material')
  return i1330
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1334 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'atlasFile')
  var i1337 = i1335[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 2, i1336, '')
  }
  i1334.materials = i1336
  return i1334
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1339 = data
  i1338.useSafeMode = !!i1339[0]
  i1338.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1339[1], i1338.safeModeOptions)
  i1338.timeScale = i1339[2]
  i1338.unscaledTimeScale = i1339[3]
  i1338.useSmoothDeltaTime = !!i1339[4]
  i1338.maxSmoothUnscaledTime = i1339[5]
  i1338.rewindCallbackMode = i1339[6]
  i1338.showUnityEditorReport = !!i1339[7]
  i1338.logBehaviour = i1339[8]
  i1338.drawGizmos = !!i1339[9]
  i1338.defaultRecyclable = !!i1339[10]
  i1338.defaultAutoPlay = i1339[11]
  i1338.defaultUpdateType = i1339[12]
  i1338.defaultTimeScaleIndependent = !!i1339[13]
  i1338.defaultEaseType = i1339[14]
  i1338.defaultEaseOvershootOrAmplitude = i1339[15]
  i1338.defaultEasePeriod = i1339[16]
  i1338.defaultAutoKill = !!i1339[17]
  i1338.defaultLoopType = i1339[18]
  i1338.debugMode = !!i1339[19]
  i1338.debugStoreTargetId = !!i1339[20]
  i1338.showPreviewPanel = !!i1339[21]
  i1338.storeSettingsLocation = i1339[22]
  i1338.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1339[23], i1338.modules)
  i1338.createASMDEF = !!i1339[24]
  i1338.showPlayingTweens = !!i1339[25]
  i1338.showPausedTweens = !!i1339[26]
  return i1338
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1341 = data
  i1340.logBehaviour = i1341[0]
  i1340.nestedTweenFailureBehaviour = i1341[1]
  return i1340
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1343 = data
  i1342.showPanel = !!i1343[0]
  i1342.audioEnabled = !!i1343[1]
  i1342.physicsEnabled = !!i1343[2]
  i1342.physics2DEnabled = !!i1343[3]
  i1342.spriteEnabled = !!i1343[4]
  i1342.uiEnabled = !!i1343[5]
  i1342.uiToolkitEnabled = !!i1343[6]
  i1342.textMeshProEnabled = !!i1343[7]
  i1342.tk2DEnabled = !!i1343[8]
  i1342.deAudioEnabled = !!i1343[9]
  i1342.deUnityExtendedEnabled = !!i1343[10]
  i1342.epoOutlineEnabled = !!i1343[11]
  return i1342
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Settings' )
  var i1345 = data
  i1344.assetVersion = i1345[0]
  i1344.m_TextWrappingMode = i1345[1]
  i1344.m_enableKerning = !!i1345[2]
  var i1347 = i1345[3]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(i1347[i + 0]);
  }
  i1344.m_ActiveFontFeatures = i1346
  i1344.m_enableExtraPadding = !!i1345[4]
  i1344.m_enableTintAllSprites = !!i1345[5]
  i1344.m_enableParseEscapeCharacters = !!i1345[6]
  i1344.m_EnableRaycastTarget = !!i1345[7]
  i1344.m_GetFontFeaturesAtRuntime = !!i1345[8]
  i1344.m_missingGlyphCharacter = i1345[9]
  i1344.m_ClearDynamicDataOnBuild = !!i1345[10]
  i1344.m_warningsDisabled = !!i1345[11]
  request.r(i1345[12], i1345[13], 0, i1344, 'm_defaultFontAsset')
  i1344.m_defaultFontAssetPath = i1345[14]
  i1344.m_defaultFontSize = i1345[15]
  i1344.m_defaultAutoSizeMinRatio = i1345[16]
  i1344.m_defaultAutoSizeMaxRatio = i1345[17]
  i1344.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1345[18], i1345[19] )
  i1344.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1345[20], i1345[21] )
  i1344.m_autoSizeTextContainer = !!i1345[22]
  i1344.m_IsTextObjectScaleStatic = !!i1345[23]
  var i1349 = i1345[24]
  var i1348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 1, i1348, '')
  }
  i1344.m_fallbackFontAssets = i1348
  i1344.m_matchMaterialPreset = !!i1345[25]
  i1344.m_HideSubTextObjects = !!i1345[26]
  request.r(i1345[27], i1345[28], 0, i1344, 'm_defaultSpriteAsset')
  i1344.m_defaultSpriteAssetPath = i1345[29]
  i1344.m_enableEmojiSupport = !!i1345[30]
  i1344.m_MissingCharacterSpriteUnicode = i1345[31]
  var i1351 = i1345[32]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1344.m_EmojiFallbackTextAssets = i1350
  i1344.m_defaultColorGradientPresetsPath = i1345[33]
  request.r(i1345[34], i1345[35], 0, i1344, 'm_defaultStyleSheet')
  i1344.m_StyleSheetsResourcePath = i1345[36]
  request.r(i1345[37], i1345[38], 0, i1344, 'm_leadingCharacters')
  request.r(i1345[39], i1345[40], 0, i1344, 'm_followingCharacters')
  i1344.m_UseModernHangulLineBreakingRules = !!i1345[41]
  return i1344
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'spriteSheet')
  var i1357 = i1355[2]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_Sprite', i1357[i + 0]));
  }
  i1354.spriteInfoList = i1356
  var i1359 = i1355[3]
  var i1358 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1359.length; i += 2) {
  request.r(i1359[i + 0], i1359[i + 1], 1, i1358, '')
  }
  i1354.fallbackSpriteAssets = i1358
  var i1361 = i1355[4]
  var i1360 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.add(request.d('TMPro.TMP_SpriteCharacter', i1361[i + 0]));
  }
  i1354.m_SpriteCharacterTable = i1360
  var i1363 = i1355[5]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('TMPro.TMP_SpriteGlyph', i1363[i + 0]));
  }
  i1354.m_GlyphTable = i1362
  i1354.m_Version = i1355[6]
  i1354.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1355[7], i1354.m_FaceInfo)
  request.r(i1355[8], i1355[9], 0, i1354, 'm_Material')
  return i1354
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.hashCode = i1367[1]
  i1366.unicode = i1367[2]
  i1366.pivot = new pc.Vec2( i1367[3], i1367[4] )
  request.r(i1367[5], i1367[6], 0, i1366, 'sprite')
  i1366.id = i1367[7]
  i1366.x = i1367[8]
  i1366.y = i1367[9]
  i1366.width = i1367[10]
  i1366.height = i1367[11]
  i1366.xOffset = i1367[12]
  i1366.yOffset = i1367[13]
  i1366.xAdvance = i1367[14]
  i1366.scale = i1367[15]
  return i1366
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1373 = data
  i1372.m_Name = i1373[0]
  i1372.m_ElementType = i1373[1]
  i1372.m_Unicode = i1373[2]
  i1372.m_GlyphIndex = i1373[3]
  i1372.m_Scale = i1373[4]
  return i1372
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'sprite')
  i1376.m_Index = i1377[2]
  i1376.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1377[3], i1376.m_Metrics)
  i1376.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1377[4], i1376.m_GlyphRect)
  i1376.m_Scale = i1377[5]
  i1376.m_AtlasIndex = i1377[6]
  i1376.m_ClassDefinitionType = i1377[7]
  return i1376
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('TMPro.TMP_Style', i1381[i + 0]));
  }
  i1378.m_StyleList = i1380
  return i1378
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1384 = root || request.c( 'TMPro.TMP_Style' )
  var i1385 = data
  i1384.m_Name = i1385[0]
  i1384.m_HashCode = i1385[1]
  i1384.m_OpeningDefinition = i1385[2]
  i1384.m_ClosingDefinition = i1385[3]
  i1384.m_OpeningTagArray = i1385[4]
  i1384.m_ClosingTagArray = i1385[5]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1389[i + 0]) );
  }
  i1386.files = i1388
  i1386.componentToPrefabIds = i1387[1]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1393 = data
  i1392.path = i1393[0]
  request.r(i1393[1], i1393[2], 0, i1392, 'unityObject')
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1397[i + 0]) );
  }
  i1394.scriptsExecutionOrder = i1396
  var i1399 = i1395[1]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1399[i + 0]) );
  }
  i1394.sortingLayers = i1398
  var i1401 = i1395[2]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1401[i + 0]) );
  }
  i1394.cullingLayers = i1400
  i1394.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1395[3], i1394.timeSettings)
  i1394.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1395[4], i1394.physicsSettings)
  i1394.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1395[5], i1394.physics2DSettings)
  i1394.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1395[6], i1394.qualitySettings)
  i1394.enableRealtimeShadows = !!i1395[7]
  i1394.enableAutoInstancing = !!i1395[8]
  i1394.enableStaticBatching = !!i1395[9]
  i1394.enableDynamicBatching = !!i1395[10]
  i1394.lightmapEncodingQuality = i1395[11]
  i1394.desiredColorSpace = i1395[12]
  var i1403 = i1395[13]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1394.allTags = i1402
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1407 = data
  i1406.name = i1407[0]
  i1406.value = i1407[1]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  i1410.value = i1411[2]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1415 = data
  i1414.id = i1415[0]
  i1414.name = i1415[1]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1417 = data
  i1416.fixedDeltaTime = i1417[0]
  i1416.maximumDeltaTime = i1417[1]
  i1416.timeScale = i1417[2]
  i1416.maximumParticleTimestep = i1417[3]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1419 = data
  i1418.gravity = new pc.Vec3( i1419[0], i1419[1], i1419[2] )
  i1418.defaultSolverIterations = i1419[3]
  i1418.bounceThreshold = i1419[4]
  i1418.autoSyncTransforms = !!i1419[5]
  i1418.autoSimulation = !!i1419[6]
  var i1421 = i1419[7]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1421[i + 0]) );
  }
  i1418.collisionMatrix = i1420
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1425 = data
  i1424.enabled = !!i1425[0]
  i1424.layerId = i1425[1]
  i1424.otherLayerId = i1425[2]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1427 = data
  request.r(i1427[0], i1427[1], 0, i1426, 'material')
  i1426.gravity = new pc.Vec2( i1427[2], i1427[3] )
  i1426.positionIterations = i1427[4]
  i1426.velocityIterations = i1427[5]
  i1426.velocityThreshold = i1427[6]
  i1426.maxLinearCorrection = i1427[7]
  i1426.maxAngularCorrection = i1427[8]
  i1426.maxTranslationSpeed = i1427[9]
  i1426.maxRotationSpeed = i1427[10]
  i1426.baumgarteScale = i1427[11]
  i1426.baumgarteTOIScale = i1427[12]
  i1426.timeToSleep = i1427[13]
  i1426.linearSleepTolerance = i1427[14]
  i1426.angularSleepTolerance = i1427[15]
  i1426.defaultContactOffset = i1427[16]
  i1426.autoSimulation = !!i1427[17]
  i1426.queriesHitTriggers = !!i1427[18]
  i1426.queriesStartInColliders = !!i1427[19]
  i1426.callbacksOnDisable = !!i1427[20]
  i1426.reuseCollisionCallbacks = !!i1427[21]
  i1426.autoSyncTransforms = !!i1427[22]
  var i1429 = i1427[23]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1429[i + 0]) );
  }
  i1426.collisionMatrix = i1428
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.layerId = i1433[1]
  i1432.otherLayerId = i1433[2]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1435 = data
  var i1437 = i1435[0]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1437[i + 0]) );
  }
  i1434.qualityLevels = i1436
  var i1439 = i1435[1]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( i1439[i + 0] );
  }
  i1434.names = i1438
  i1434.shadows = i1435[2]
  i1434.anisotropicFiltering = i1435[3]
  i1434.antiAliasing = i1435[4]
  i1434.lodBias = i1435[5]
  i1434.shadowCascades = i1435[6]
  i1434.shadowDistance = i1435[7]
  i1434.shadowmaskMode = i1435[8]
  i1434.shadowProjection = i1435[9]
  i1434.shadowResolution = i1435[10]
  i1434.softParticles = !!i1435[11]
  i1434.softVegetation = !!i1435[12]
  i1434.activeColorSpace = i1435[13]
  i1434.desiredColorSpace = i1435[14]
  i1434.masterTextureLimit = i1435[15]
  i1434.maxQueuedFrames = i1435[16]
  i1434.particleRaycastBudget = i1435[17]
  i1434.pixelLightCount = i1435[18]
  i1434.realtimeReflectionProbes = !!i1435[19]
  i1434.shadowCascade2Split = i1435[20]
  i1434.shadowCascade4Split = new pc.Vec3( i1435[21], i1435[22], i1435[23] )
  i1434.streamingMipmapsActive = !!i1435[24]
  i1434.vSyncCount = i1435[25]
  i1434.asyncUploadBufferSize = i1435[26]
  i1434.asyncUploadTimeSlice = i1435[27]
  i1434.billboardsFaceCameraPosition = !!i1435[28]
  i1434.shadowNearPlaneOffset = i1435[29]
  i1434.streamingMipmapsMemoryBudget = i1435[30]
  i1434.maximumLODLevel = i1435[31]
  i1434.streamingMipmapsAddAllCameras = !!i1435[32]
  i1434.streamingMipmapsMaxLevelReduction = i1435[33]
  i1434.streamingMipmapsRenderersPerFrame = i1435[34]
  i1434.resolutionScalingFixedDPIFactor = i1435[35]
  i1434.streamingMipmapsMaxFileIORequests = i1435[36]
  i1434.currentQualityLevel = i1435[37]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1445 = data
  i1444.weight = i1445[0]
  i1444.vertices = i1445[1]
  i1444.normals = i1445[2]
  i1444.tangents = i1445[3]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1449 = data
  i1448.mode = i1449[0]
  i1448.parameter = i1449[1]
  i1448.threshold = i1449[2]
  return i1448
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1451 = data
  i1450.m_GlyphIndex = i1451[0]
  i1450.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1451[1], i1450.m_GlyphValueRecord)
  return i1450
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1453 = data
  i1452.m_XCoordinate = i1453[0]
  i1452.m_YCoordinate = i1453[1]
  return i1452
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1455 = data
  i1454.m_XPositionAdjustment = i1455[0]
  i1454.m_YPositionAdjustment = i1455[1]
  return i1454
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1456 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1457 = data
  i1456.xPlacement = i1457[0]
  i1456.yPlacement = i1457[1]
  i1456.xAdvance = i1457[2]
  i1456.yAdvance = i1457[3]
  return i1456
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1458 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1459 = data
  i1458.m_XPlacement = i1459[0]
  i1458.m_YPlacement = i1459[1]
  i1458.m_XAdvance = i1459[2]
  i1458.m_YAdvance = i1459[3]
  return i1458
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[67],"68":[34],"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[34],"91":[46],"92":[93],"94":[93],"11":[10],"95":[96],"97":[98],"99":[46,45],"100":[98],"101":[100],"102":[98],"103":[98],"104":[105],"106":[105],"107":[98],"108":[10],"109":[17,10],"44":[46],"110":[17,10],"111":[15,46],"98":[46],"112":[46,45],"113":[70],"114":[77],"115":[116],"117":[105],"118":[40],"119":[34],"120":[121],"122":[38],"123":[11],"124":[10],"52":[46,10],"18":[10,17],"125":[10],"126":[17,10],"127":[46],"128":[17,10],"129":[10],"130":[131],"132":[131],"133":[131],"134":[10],"135":[10],"14":[11],"21":[17,10],"136":[10],"13":[11],"137":[10],"138":[10],"139":[10],"140":[10],"141":[10],"142":[10],"143":[10],"144":[10],"145":[10],"146":[17,10],"147":[10],"148":[10],"149":[10],"20":[10],"150":[17,10],"151":[10],"152":[38],"153":[38],"39":[38],"154":[38],"155":[34],"156":[34]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MergeEffect","UnityEngine.Mesh","BlinkEffect","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.CanvasRenderer","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Slider","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","GameManager","Ply_Pool","Ply_SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","Box","ItemConveyor","UnityEngine.GameObject","UIManager","UnityEngine.Camera","InputManager","CameraController","UnityEngine.AudioListener","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.SphereCollider","Item","BoxGraphicController","Spine.Unity.SkeletonAnimation","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","Spine.Unity.SkeletonDataAsset","ItemHolder","UnityEngine.BoxCollider","ItemSetupTool","ScreenHeightPositionAnchor","TMPro.TextMeshPro","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Spine.Unity.Examples.BasicPlatformerController","UnityEngine.CharacterController","Spine.Unity.Examples.SkeletonGhost","Spine.Unity.SkeletonRenderer","Spine.Unity.Examples.RenderExistingMesh","Spine.Unity.Examples.SkeletonRenderTexture","Spine.Unity.Examples.SkeletonRenderTextureFadeout","Spine.Unity.Examples.SkeletonRagdoll","Spine.Unity.Examples.SkeletonRagdoll2D","Spine.Unity.Examples.SkeletonUtilityEyeConstraint","Spine.Unity.SkeletonUtilityBone","Spine.Unity.Examples.SkeletonUtilityGroundConstraint","Spine.Unity.Examples.SpineGauge","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.38f1";

Deserializers.productName = "DreamyRoom";

Deserializers.lunaInitializationTime = "06/01/2026 09:19:15";

Deserializers.lunaDaysRunning = "28.8";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "PLY_DreamyRoom_Lv693";

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

Deserializers.buildID = "77d1fb00-8e61-4254-8599-522d7f19bdec";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["DG","Tweening","DOTween","RuntimeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","InputSystem","Plugins","InputForUI","InputSystemProvider","Bootstrap"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"],["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

