
```
FastAPI
├─ .dockerignore
├─ .idea
│  ├─ .name
│  ├─ dbnavigator.xml
│  ├─ inspectionProfiles
│  │  └─ profiles_settings.xml
│  ├─ misc.xml
│  ├─ modules.xml
│  ├─ pythonProject.iml
│  └─ vcs.xml
├─ app
│  ├─ cert.pem
│  ├─ func.py
│  ├─ key.pem
│  ├─ main.py
│  ├─ routers
│  │  ├─ config.py
│  │  ├─ datasets.py
│  │  ├─ dicom_upload.py
│  │  ├─ dicom_upload_con.py
│  │  ├─ dicom_upload_con_test.py
│  │  ├─ evaluation.py
│  │  ├─ func.py
│  │  ├─ gradcam.py
│  │  ├─ grad_cam_.py
│  │  ├─ make_json.py
│  │  ├─ model.py
│  │  ├─ mtrain-imgnet.py
│  │  ├─ mtrain.py
│  │  ├─ train.py
│  │  ├─ train.sh
│  │  ├─ vit_cam.py
│  │  └─ __init__.py
│  ├─ vit_func.py
│  └─ __init__.py
├─ csv
│  ├─ train.csv
│  └─ valid.csv
├─ Dockerfile
├─ json
│  ├─ train_chexPert_16_512.json
│  └─ valid_chexPert_16_512.json
├─ model.py
├─ models
│  ├─ inception_v3.py
│  ├─ resnet.py
│  ├─ utils.py
│  ├─ vgg.py
│  └─ __init__.py
├─ MONAI
│  ├─ .clang-format
│  ├─ .deepsource.toml
│  ├─ .dockerignore
│  ├─ .readthedocs.yml
│  ├─ CHANGELOG.md
│  ├─ CODE_OF_CONDUCT.md
│  ├─ CONTRIBUTING.md
│  ├─ Dockerfile
│  ├─ docs
│  │  ├─ images
│  │  │  ├─ @eaDir
│  │  │  │  └─ Thumbs.db@SynoEAStream
│  │  │  ├─ affine.png
│  │  │  ├─ amp_training_a100.png
│  │  │  ├─ amp_training_v100.png
│  │  │  ├─ arch_modules_v0.4.png
│  │  │  ├─ cache_dataset.png
│  │  │  ├─ cam.png
│  │  │  ├─ coplenet.png
│  │  │  ├─ datasets_speed.png
│  │  │  ├─ dataset_progress.png
│  │  │  ├─ distributed_training.png
│  │  │  ├─ end_to_end.png
│  │  │  ├─ fast_training.png
│  │  │  ├─ favicon.ico
│  │  │  ├─ medical_transforms.png
│  │  │  ├─ models_ensemble.png
│  │  │  ├─ MONAI-logo-color.png
│  │  │  ├─ multi_transform_chains.png
│  │  │  ├─ post_transforms.png
│  │  │  ├─ sliding_window.png
│  │  │  ├─ Thumbs.db
│  │  │  ├─ unet-pipe.png
│  │  │  └─ workflows.png
│  │  ├─ Makefile
│  │  ├─ requirements.txt
│  │  ├─ source
│  │  │  ├─ apidocs
│  │  │  │  ├─ modules.rst
│  │  │  │  └─ monai.rst
│  │  │  ├─ apps.rst
│  │  │  ├─ conf.py
│  │  │  ├─ data.rst
│  │  │  ├─ engines.rst
│  │  │  ├─ handlers.rst
│  │  │  ├─ highlights.md
│  │  │  ├─ index.rst
│  │  │  ├─ inferers.rst
│  │  │  ├─ installation.md
│  │  │  ├─ losses.rst
│  │  │  ├─ metrics.rst
│  │  │  ├─ networks.rst
│  │  │  ├─ optimizers.rst
│  │  │  ├─ transforms.rst
│  │  │  ├─ utils.rst
│  │  │  └─ visualize.rst
│  │  └─ _static
│  │     └─ custom.css
│  ├─ LICENSE
│  ├─ MANIFEST.in
│  ├─ monai
│  │  ├─ apps
│  │  │  ├─ datasets.py
│  │  │  ├─ deepgrow
│  │  │  │  ├─ dataset.py
│  │  │  │  ├─ interaction.py
│  │  │  │  ├─ transforms.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ pathology
│  │  │  │  ├─ datasets.py
│  │  │  │  ├─ utils.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ config
│  │  │  ├─ deviceconfig.py
│  │  │  ├─ type_definitions.py
│  │  │  └─ __init__.py
│  │  ├─ csrc
│  │  │  ├─ ext.cpp
│  │  │  ├─ filtering
│  │  │  │  ├─ bilateral
│  │  │  │  │  ├─ bilateral.h
│  │  │  │  │  ├─ bilateralfilter_cpu.cpp
│  │  │  │  │  ├─ bilateralfilter_cpu_phl.cpp
│  │  │  │  │  ├─ bilateralfilter_cuda.cu
│  │  │  │  │  └─ bilateralfilter_cuda_phl.cu
│  │  │  │  ├─ filtering.h
│  │  │  │  └─ permutohedral
│  │  │  │     ├─ hash_table.cuh
│  │  │  │     ├─ permutohedral.cpp
│  │  │  │     ├─ permutohedral.h
│  │  │  │     ├─ permutohedral_cpu.cpp
│  │  │  │     └─ permutohedral_cuda.cu
│  │  │  ├─ lltm
│  │  │  │  ├─ lltm.h
│  │  │  │  ├─ lltm_cpu.cpp
│  │  │  │  └─ lltm_cuda.cu
│  │  │  ├─ resample
│  │  │  │  ├─ bounds_common.h
│  │  │  │  ├─ interpolation_common.h
│  │  │  │  ├─ pushpull.h
│  │  │  │  ├─ pushpull_cpu.cpp
│  │  │  │  └─ pushpull_cuda.cu
│  │  │  └─ utils
│  │  │     ├─ common_utils.h
│  │  │     ├─ meta_macros.h
│  │  │     ├─ resample_utils.h
│  │  │     └─ tensor_description.h
│  │  ├─ data
│  │  │  ├─ csv_saver.py
│  │  │  ├─ dataloader.py
│  │  │  ├─ dataset.py
│  │  │  ├─ decathlon_datalist.py
│  │  │  ├─ grid_dataset.py
│  │  │  ├─ image_dataset.py
│  │  │  ├─ image_reader.py
│  │  │  ├─ inverse_batch_transform.py
│  │  │  ├─ iterable_dataset.py
│  │  │  ├─ nifti_saver.py
│  │  │  ├─ nifti_writer.py
│  │  │  ├─ png_saver.py
│  │  │  ├─ png_writer.py
│  │  │  ├─ samplers.py
│  │  │  ├─ synthetic.py
│  │  │  ├─ test_time_augmentation.py
│  │  │  ├─ thread_buffer.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ engines
│  │  │  ├─ evaluator.py
│  │  │  ├─ multi_gpu_supervised_trainer.py
│  │  │  ├─ trainer.py
│  │  │  ├─ utils.py
│  │  │  ├─ workflow.py
│  │  │  └─ __init__.py
│  │  ├─ handlers
│  │  │  ├─ checkpoint_loader.py
│  │  │  ├─ checkpoint_saver.py
│  │  │  ├─ classification_saver.py
│  │  │  ├─ confusion_matrix.py
│  │  │  ├─ hausdorff_distance.py
│  │  │  ├─ iteration_metric.py
│  │  │  ├─ lr_schedule_handler.py
│  │  │  ├─ mean_dice.py
│  │  │  ├─ metrics_saver.py
│  │  │  ├─ metric_logger.py
│  │  │  ├─ roc_auc.py
│  │  │  ├─ segmentation_saver.py
│  │  │  ├─ smartcache_handler.py
│  │  │  ├─ stats_handler.py
│  │  │  ├─ surface_distance.py
│  │  │  ├─ tensorboard_handlers.py
│  │  │  ├─ utils.py
│  │  │  ├─ validation_handler.py
│  │  │  └─ __init__.py
│  │  ├─ inferers
│  │  │  ├─ inferer.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ losses
│  │  │  ├─ deform.py
│  │  │  ├─ dice.py
│  │  │  ├─ focal_loss.py
│  │  │  ├─ image_dissimilarity.py
│  │  │  ├─ multi_scale.py
│  │  │  ├─ tversky.py
│  │  │  └─ __init__.py
│  │  ├─ metrics
│  │  │  ├─ confusion_matrix.py
│  │  │  ├─ froc.py
│  │  │  ├─ hausdorff_distance.py
│  │  │  ├─ meandice.py
│  │  │  ├─ rocauc.py
│  │  │  ├─ surface_distance.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ networks
│  │  │  ├─ blocks
│  │  │  │  ├─ activation.py
│  │  │  │  ├─ acti_norm.py
│  │  │  │  ├─ aspp.py
│  │  │  │  ├─ convolutions.py
│  │  │  │  ├─ crf.py
│  │  │  │  ├─ downsample.py
│  │  │  │  ├─ dynunet_block.py
│  │  │  │  ├─ fcn.py
│  │  │  │  ├─ localnet_block.py
│  │  │  │  ├─ regunet_block.py
│  │  │  │  ├─ segresnet_block.py
│  │  │  │  ├─ squeeze_and_excitation.py
│  │  │  │  ├─ upsample.py
│  │  │  │  ├─ warp.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ layers
│  │  │  │  ├─ convutils.py
│  │  │  │  ├─ factories.py
│  │  │  │  ├─ filtering.py
│  │  │  │  ├─ simplelayers.py
│  │  │  │  ├─ spatial_transforms.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ nets
│  │  │  │  ├─ ahnet.py
│  │  │  │  ├─ autoencoder.py
│  │  │  │  ├─ basic_unet.py
│  │  │  │  ├─ classifier.py
│  │  │  │  ├─ densenet.py
│  │  │  │  ├─ dynunet.py
│  │  │  │  ├─ fullyconnectednet.py
│  │  │  │  ├─ generator.py
│  │  │  │  ├─ highresnet.py
│  │  │  │  ├─ regressor.py
│  │  │  │  ├─ regunet.py
│  │  │  │  ├─ segresnet.py
│  │  │  │  ├─ senet.py
│  │  │  │  ├─ torchvision_fc.py
│  │  │  │  ├─ unet.py
│  │  │  │  ├─ varautoencoder.py
│  │  │  │  ├─ vnet.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ optimizers
│  │  │  ├─ lr_finder.py
│  │  │  ├─ lr_scheduler.py
│  │  │  ├─ novograd.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ py.typed
│  │  ├─ README.md
│  │  ├─ transforms
│  │  │  ├─ adaptors.py
│  │  │  ├─ compose.py
│  │  │  ├─ croppad
│  │  │  │  ├─ array.py
│  │  │  │  ├─ batch.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ intensity
│  │  │  │  ├─ array.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ inverse.py
│  │  │  ├─ io
│  │  │  │  ├─ array.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ post
│  │  │  │  ├─ array.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ spatial
│  │  │  │  ├─ array.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ transform.py
│  │  │  ├─ utility
│  │  │  │  ├─ array.py
│  │  │  │  ├─ dictionary.py
│  │  │  │  └─ __init__.py
│  │  │  ├─ utils.py
│  │  │  └─ __init__.py
│  │  ├─ utils
│  │  │  ├─ aliases.py
│  │  │  ├─ decorators.py
│  │  │  ├─ enums.py
│  │  │  ├─ jupyter_utils.py
│  │  │  ├─ misc.py
│  │  │  ├─ module.py
│  │  │  ├─ prob_nms.py
│  │  │  ├─ profiling.py
│  │  │  ├─ state_cacher.py
│  │  │  └─ __init__.py
│  │  ├─ visualize
│  │  │  ├─ class_activation_maps.py
│  │  │  ├─ img2tensorboard.py
│  │  │  ├─ occlusion_sensitivity.py
│  │  │  ├─ visualizer.py
│  │  │  └─ __init__.py
│  │  ├─ _version.py
│  │  └─ __init__.py
│  ├─ pyproject.toml
│  ├─ README.md
│  ├─ requirements-dev.txt
│  ├─ requirements-min.txt
│  ├─ requirements.txt
│  ├─ runtests.sh
│  ├─ setup.cfg
│  ├─ setup.py
│  ├─ tests
│  │  ├─ clang_format_utils.py
│  │  ├─ min_tests.py
│  │  ├─ runner.py
│  │  ├─ testing_data
│  │  │  ├─ 1D_BP_bwd.txt
│  │  │  ├─ 1D_BP_fwd.txt
│  │  │  ├─ anatomical.nii
│  │  │  ├─ cpp_resample_answers.py
│  │  │  ├─ CT_DICOM
│  │  │  │  ├─ 17106
│  │  │  │  ├─ 17136
│  │  │  │  ├─ 17166
│  │  │  │  └─ 17196
│  │  │  ├─ integration_answers.py
│  │  │  ├─ reoriented_anat_moved.nii
│  │  │  └─ threadcontainer_plot_test.png
│  │  ├─ test_activations.py
│  │  ├─ test_activationsd.py
│  │  ├─ test_adaptors.py
│  │  ├─ test_add_channeld.py
│  │  ├─ test_add_extreme_points_channel.py
│  │  ├─ test_add_extreme_points_channeld.py
│  │  ├─ test_adjust_contrast.py
│  │  ├─ test_adjust_contrastd.py
│  │  ├─ test_adn.py
│  │  ├─ test_affine.py
│  │  ├─ test_affined.py
│  │  ├─ test_affine_grid.py
│  │  ├─ test_affine_transform.py
│  │  ├─ test_ahnet.py
│  │  ├─ test_arraydataset.py
│  │  ├─ test_as_channel_first.py
│  │  ├─ test_as_channel_firstd.py
│  │  ├─ test_as_channel_last.py
│  │  ├─ test_as_channel_lastd.py
│  │  ├─ test_as_discrete.py
│  │  ├─ test_as_discreted.py
│  │  ├─ test_autoencoder.py
│  │  ├─ test_basic_unet.py
│  │  ├─ test_bending_energy.py
│  │  ├─ test_bilateral_approx_cpu.py
│  │  ├─ test_bilateral_approx_cuda.py
│  │  ├─ test_bilateral_precise.py
│  │  ├─ test_border_pad.py
│  │  ├─ test_border_padd.py
│  │  ├─ test_bounding_rect.py
│  │  ├─ test_bounding_rectd.py
│  │  ├─ test_cachedataset.py
│  │  ├─ test_cachedataset_parallel.py
│  │  ├─ test_cachentransdataset.py
│  │  ├─ test_cast_to_type.py
│  │  ├─ test_cast_to_typed.py
│  │  ├─ test_center_spatial_crop.py
│  │  ├─ test_center_spatial_cropd.py
│  │  ├─ test_channel_pad.py
│  │  ├─ test_check_hash.py
│  │  ├─ test_compose.py
│  │  ├─ test_compute_confusion_matrix.py
│  │  ├─ test_compute_froc.py
│  │  ├─ test_compute_meandice.py
│  │  ├─ test_compute_roc_auc.py
│  │  ├─ test_concat_itemsd.py
│  │  ├─ test_convert_to_multi_channel.py
│  │  ├─ test_convert_to_multi_channeld.py
│  │  ├─ test_convolutions.py
│  │  ├─ test_copy_itemsd.py
│  │  ├─ test_create_grid_and_affine.py
│  │  ├─ test_crf_cpu.py
│  │  ├─ test_crf_cuda.py
│  │  ├─ test_crop_foreground.py
│  │  ├─ test_crop_foregroundd.py
│  │  ├─ test_cross_validation.py
│  │  ├─ test_csv_saver.py
│  │  ├─ test_cuimage_reader.py
│  │  ├─ test_dataloader.py
│  │  ├─ test_dataset.py
│  │  ├─ test_data_stats.py
│  │  ├─ test_data_statsd.py
│  │  ├─ test_decathlondataset.py
│  │  ├─ test_decollate.py
│  │  ├─ test_deepgrow_dataset.py
│  │  ├─ test_deepgrow_interaction.py
│  │  ├─ test_deepgrow_transforms.py
│  │  ├─ test_delete_itemsd.py
│  │  ├─ test_densenet.py
│  │  ├─ test_detect_envelope.py
│  │  ├─ test_dice_ce_loss.py
│  │  ├─ test_dice_loss.py
│  │  ├─ test_discriminator.py
│  │  ├─ test_distcall.py
│  │  ├─ test_distributed_sampler.py
│  │  ├─ test_distributed_weighted_random_sampler.py
│  │  ├─ test_divisible_pad.py
│  │  ├─ test_divisible_padd.py
│  │  ├─ test_download_and_extract.py
│  │  ├─ test_downsample_block.py
│  │  ├─ test_dvf2ddf.py
│  │  ├─ test_dynunet.py
│  │  ├─ test_dynunet_block.py
│  │  ├─ test_ensemble_evaluator.py
│  │  ├─ test_ensure_channel_first.py
│  │  ├─ test_ensure_channel_firstd.py
│  │  ├─ test_enum_bound_interp.py
│  │  ├─ test_eval_mode.py
│  │  ├─ test_evenly_divisible_all_gather_dist.py
│  │  ├─ test_fg_bg_to_indices.py
│  │  ├─ test_fg_bg_to_indicesd.py
│  │  ├─ test_file_basename.py
│  │  ├─ test_flip.py
│  │  ├─ test_flipd.py
│  │  ├─ test_focal_loss.py
│  │  ├─ test_fullyconnectednet.py
│  │  ├─ test_gaussian.py
│  │  ├─ test_gaussian_filter.py
│  │  ├─ test_gaussian_sharpen.py
│  │  ├─ test_gaussian_sharpend.py
│  │  ├─ test_gaussian_smooth.py
│  │  ├─ test_gaussian_smoothd.py
│  │  ├─ test_generalized_dice_loss.py
│  │  ├─ test_generalized_wasserstein_dice_loss.py
│  │  ├─ test_generate_param_groups.py
│  │  ├─ test_generate_pos_neg_label_crop_centers.py
│  │  ├─ test_generate_spatial_bounding_box.py
│  │  ├─ test_generator.py
│  │  ├─ test_get_extreme_points.py
│  │  ├─ test_globalnet.py
│  │  ├─ test_global_mutual_information_loss.py
│  │  ├─ test_grid_dataset.py
│  │  ├─ test_grid_pull.py
│  │  ├─ test_handler_checkpoint_loader.py
│  │  ├─ test_handler_checkpoint_saver.py
│  │  ├─ test_handler_classification_saver.py
│  │  ├─ test_handler_classification_saver_dist.py
│  │  ├─ test_handler_confusion_matrix.py
│  │  ├─ test_handler_confusion_matrix_dist.py
│  │  ├─ test_handler_hausdorff_distance.py
│  │  ├─ test_handler_lr_scheduler.py
│  │  ├─ test_handler_mean_dice.py
│  │  ├─ test_handler_metrics_saver.py
│  │  ├─ test_handler_metrics_saver_dist.py
│  │  ├─ test_handler_metric_logger.py
│  │  ├─ test_handler_rocauc.py
│  │  ├─ test_handler_rocauc_dist.py
│  │  ├─ test_handler_segmentation_saver.py
│  │  ├─ test_handler_smartcache.py
│  │  ├─ test_handler_stats.py
│  │  ├─ test_handler_surface_distance.py
│  │  ├─ test_handler_tb_image.py
│  │  ├─ test_handler_tb_stats.py
│  │  ├─ test_handler_validation.py
│  │  ├─ test_hashing.py
│  │  ├─ test_hausdorff_distance.py
│  │  ├─ test_header_correct.py
│  │  ├─ test_highresnet.py
│  │  ├─ test_hilbert_transform.py
│  │  ├─ test_identity.py
│  │  ├─ test_identityd.py
│  │  ├─ test_image_dataset.py
│  │  ├─ test_img2tensorboard.py
│  │  ├─ test_init_reader.py
│  │  ├─ test_integration_classification_2d.py
│  │  ├─ test_integration_determinism.py
│  │  ├─ test_integration_segmentation_3d.py
│  │  ├─ test_integration_sliding_window.py
│  │  ├─ test_integration_stn.py
│  │  ├─ test_integration_unet_2d.py
│  │  ├─ test_integration_workflows.py
│  │  ├─ test_integration_workflows_gan.py
│  │  ├─ test_inverse.py
│  │  ├─ test_inverse_collation.py
│  │  ├─ test_is_supported_format.py
│  │  ├─ test_iterable_dataset.py
│  │  ├─ test_keep_largest_connected_component.py
│  │  ├─ test_keep_largest_connected_componentd.py
│  │  ├─ test_label_to_contour.py
│  │  ├─ test_label_to_contourd.py
│  │  ├─ test_label_to_mask.py
│  │  ├─ test_label_to_maskd.py
│  │  ├─ test_lambda.py
│  │  ├─ test_lambdad.py
│  │  ├─ test_list_data_collate.py
│  │  ├─ test_list_to_dict.py
│  │  ├─ test_lltm.py
│  │  ├─ test_lmdbdataset.py
│  │  ├─ test_load_decathlon_datalist.py
│  │  ├─ test_load_image.py
│  │  ├─ test_load_imaged.py
│  │  ├─ test_load_spacing_orientation.py
│  │  ├─ test_localnet.py
│  │  ├─ test_localnet_block.py
│  │  ├─ test_local_normalized_cross_correlation_loss.py
│  │  ├─ test_lr_finder.py
│  │  ├─ test_map_binary_to_indices.py
│  │  ├─ test_map_label_value.py
│  │  ├─ test_map_label_valued.py
│  │  ├─ test_map_transform.py
│  │  ├─ test_masked_dice_loss.py
│  │  ├─ test_mask_intensity.py
│  │  ├─ test_mask_intensityd.py
│  │  ├─ test_mean_ensemble.py
│  │  ├─ test_mean_ensembled.py
│  │  ├─ test_mednistdataset.py
│  │  ├─ test_module_list.py
│  │  ├─ test_multi_scale.py
│  │  ├─ test_nifti_endianness.py
│  │  ├─ test_nifti_header_revise.py
│  │  ├─ test_nifti_rw.py
│  │  ├─ test_nifti_saver.py
│  │  ├─ test_normalize_intensity.py
│  │  ├─ test_normalize_intensityd.py
│  │  ├─ test_npzdictitemdataset.py
│  │  ├─ test_numpy_reader.py
│  │  ├─ test_occlusion_sensitivity.py
│  │  ├─ test_openslide_reader.py
│  │  ├─ test_optim_novograd.py
│  │  ├─ test_optional_import.py
│  │  ├─ test_orientation.py
│  │  ├─ test_orientationd.py
│  │  ├─ test_pad_collation.py
│  │  ├─ test_parallel_execution.py
│  │  ├─ test_partition_dataset.py
│  │  ├─ test_partition_dataset_classes.py
│  │  ├─ test_patch_dataset.py
│  │  ├─ test_patch_wsi_dataset.py
│  │  ├─ test_pathology_prob_nms.py
│  │  ├─ test_persistentdataset.py
│  │  ├─ test_phl_cpu.py
│  │  ├─ test_phl_cuda.py
│  │  ├─ test_pil_reader.py
│  │  ├─ test_plot_2d_or_3d_image.py
│  │  ├─ test_png_rw.py
│  │  ├─ test_png_saver.py
│  │  ├─ test_polyval.py
│  │  ├─ test_print_info.py
│  │  ├─ test_prob_nms.py
│  │  ├─ test_query_memory.py
│  │  ├─ test_randomizable.py
│  │  ├─ test_rand_adjust_contrast.py
│  │  ├─ test_rand_adjust_contrastd.py
│  │  ├─ test_rand_affine.py
│  │  ├─ test_rand_affined.py
│  │  ├─ test_rand_affine_grid.py
│  │  ├─ test_rand_axis_flip.py
│  │  ├─ test_rand_axis_flipd.py
│  │  ├─ test_rand_crop_by_pos_neg_label.py
│  │  ├─ test_rand_crop_by_pos_neg_labeld.py
│  │  ├─ test_rand_deform_grid.py
│  │  ├─ test_rand_elasticd_2d.py
│  │  ├─ test_rand_elasticd_3d.py
│  │  ├─ test_rand_elastic_2d.py
│  │  ├─ test_rand_elastic_3d.py
│  │  ├─ test_rand_flip.py
│  │  ├─ test_rand_flipd.py
│  │  ├─ test_rand_gaussian_noise.py
│  │  ├─ test_rand_gaussian_noised.py
│  │  ├─ test_rand_gaussian_sharpen.py
│  │  ├─ test_rand_gaussian_sharpend.py
│  │  ├─ test_rand_gaussian_smooth.py
│  │  ├─ test_rand_gaussian_smoothd.py
│  │  ├─ test_rand_histogram_shift.py
│  │  ├─ test_rand_histogram_shiftd.py
│  │  ├─ test_rand_lambdad.py
│  │  ├─ test_rand_rotate.py
│  │  ├─ test_rand_rotate90.py
│  │  ├─ test_rand_rotate90d.py
│  │  ├─ test_rand_rotated.py
│  │  ├─ test_rand_scale_intensity.py
│  │  ├─ test_rand_scale_intensityd.py
│  │  ├─ test_rand_shift_intensity.py
│  │  ├─ test_rand_shift_intensityd.py
│  │  ├─ test_rand_spatial_crop.py
│  │  ├─ test_rand_spatial_cropd.py
│  │  ├─ test_rand_spatial_crop_samples.py
│  │  ├─ test_rand_spatial_crop_samplesd.py
│  │  ├─ test_rand_std_shift_intensity.py
│  │  ├─ test_rand_std_shift_intensityd.py
│  │  ├─ test_rand_weighted_crop.py
│  │  ├─ test_rand_weighted_cropd.py
│  │  ├─ test_rand_zoom.py
│  │  ├─ test_rand_zoomd.py
│  │  ├─ test_regunet.py
│  │  ├─ test_regunet_block.py
│  │  ├─ test_reg_loss_integration.py
│  │  ├─ test_remove_repeated_channel.py
│  │  ├─ test_remove_repeated_channeld.py
│  │  ├─ test_repeat_channel.py
│  │  ├─ test_repeat_channeld.py
│  │  ├─ test_resampler.py
│  │  ├─ test_resize.py
│  │  ├─ test_resized.py
│  │  ├─ test_resize_with_pad_or_crop.py
│  │  ├─ test_resize_with_pad_or_cropd.py
│  │  ├─ test_rotate.py
│  │  ├─ test_rotate90.py
│  │  ├─ test_rotate90d.py
│  │  ├─ test_rotated.py
│  │  ├─ test_save_image.py
│  │  ├─ test_save_imaged.py
│  │  ├─ test_savitzky_golay_filter.py
│  │  ├─ test_savitzky_golay_smooth.py
│  │  ├─ test_scale_intensity.py
│  │  ├─ test_scale_intensityd.py
│  │  ├─ test_scale_intensity_range.py
│  │  ├─ test_scale_intensity_ranged.py
│  │  ├─ test_scale_intensity_range_percentiles.py
│  │  ├─ test_scale_intensity_range_percentilesd.py
│  │  ├─ test_segresnet.py
│  │  ├─ test_segresnet_block.py
│  │  ├─ test_seg_loss_integration.py
│  │  ├─ test_select_cross_validation_folds.py
│  │  ├─ test_select_itemsd.py
│  │  ├─ test_senet.py
│  │  ├─ test_set_determinism.py
│  │  ├─ test_se_block.py
│  │  ├─ test_se_blocks.py
│  │  ├─ test_shift_intensity.py
│  │  ├─ test_shift_intensityd.py
│  │  ├─ test_simple_aspp.py
│  │  ├─ test_simulatedelay.py
│  │  ├─ test_simulatedelayd.py
│  │  ├─ test_skip_connection.py
│  │  ├─ test_sliding_window_inference.py
│  │  ├─ test_smartcachedataset.py
│  │  ├─ test_smartcache_patch_wsi_dataset.py
│  │  ├─ test_spacing.py
│  │  ├─ test_spacingd.py
│  │  ├─ test_spatial_crop.py
│  │  ├─ test_spatial_cropd.py
│  │  ├─ test_spatial_pad.py
│  │  ├─ test_spatial_padd.py
│  │  ├─ test_split_channel.py
│  │  ├─ test_split_channeld.py
│  │  ├─ test_squeezedim.py
│  │  ├─ test_squeezedimd.py
│  │  ├─ test_state_cacher.py
│  │  ├─ test_std_shift_intensity.py
│  │  ├─ test_std_shift_intensityd.py
│  │  ├─ test_subpixel_upsample.py
│  │  ├─ test_surface_distance.py
│  │  ├─ test_testtimeaugmentation.py
│  │  ├─ test_threadcontainer.py
│  │  ├─ test_thread_buffer.py
│  │  ├─ test_threshold_intensity.py
│  │  ├─ test_threshold_intensityd.py
│  │  ├─ test_timedcall.py
│  │  ├─ test_torchvision.py
│  │  ├─ test_torchvisiond.py
│  │  ├─ test_torchvision_fc_model.py
│  │  ├─ test_to_numpy.py
│  │  ├─ test_to_numpyd.py
│  │  ├─ test_to_onehot.py
│  │  ├─ test_to_pil.py
│  │  ├─ test_to_pild.py
│  │  ├─ test_train_mode.py
│  │  ├─ test_tversky_loss.py
│  │  ├─ test_unet.py
│  │  ├─ test_upsample_block.py
│  │  ├─ test_varautoencoder.py
│  │  ├─ test_vis_cam.py
│  │  ├─ test_vis_gradcam.py
│  │  ├─ test_vis_gradcampp.py
│  │  ├─ test_vnet.py
│  │  ├─ test_vote_ensemble.py
│  │  ├─ test_vote_ensembled.py
│  │  ├─ test_warp.py
│  │  ├─ test_with_allow_missing_keys.py
│  │  ├─ test_write_metrics_reports.py
│  │  ├─ test_zipdataset.py
│  │  ├─ test_zoom.py
│  │  ├─ test_zoomd.py
│  │  ├─ test_zoom_affine.py
│  │  ├─ utils.py
│  │  └─ __init__.py
│  └─ versioneer.py
├─ myopenssl.cnf
├─ requirements.txt
├─ resnet.py
├─ runs
│  └─ adamw_weight_updated_imagnet_uni_224_bs128_1e-4
│     ├─ arguments.txt
│     └─ events.out.tfevents.1731157702.notebook-deployment-352-7fd6cc67b-xwb8n
├─ Untitled.ipynb
└─ utils_folder
   ├─ eval_metric.py
   └─ utils.py

```