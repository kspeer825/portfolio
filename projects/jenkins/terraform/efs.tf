// TODO configure EFS backup

resource "aws_efs_file_system" "jenkins-efs" {
  creation_token   = "jenkins-efs"
  encrypted        = true
  performance_mode = "generalPurpose"
  throughput_mode  = "bursting"

  lifecycle_policy {
    transition_to_ia = "AFTER_14_DAYS"
  }

  protection {
    replication_overwrite = "ENABLED"
  }

  tags = {
    Name = "jenkins"
  }
}

resource "aws_efs_access_point" "jenkins-access-point" {
  file_system_id = aws_efs_file_system.jenkins-efs.id

  posix_user {
    gid = 0
    uid = 0
  }

  root_directory {
    path = "/"
    creation_info {
      owner_gid   = 1000
      owner_uid   = 1000
      permissions = "755"
    }
  }

  tags = {
    Name = "jenkins"
  }

}

resource "aws_efs_mount_target" "mount1" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.private1.id
  security_groups = [aws_security_group.jenkins-efs.id]
}

resource "aws_efs_mount_target" "mount2" {
  file_system_id  = aws_efs_file_system.jenkins-efs.id
  subnet_id       = aws_subnet.private2.id
  security_groups = [aws_security_group.jenkins-efs.id]
}
